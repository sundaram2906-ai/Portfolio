import { useState, useEffect, SyntheticEvent } from 'react';

export const DEFAULT_PHOTO = '/sundar.jpg';
export const FALLBACK_PHOTO = '/assets/sundar.jpg';
export const BACKUP_PHOTO = '/sundar.JPG';
export const STORAGE_KEY = 'sundaram_executive_photo_v3';
export const PHOTO_EVENT = 'sundaram_photo_updated';

export function getStoredProfilePhoto(): string {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && stored.length > 50) {
        return stored;
      }
    } catch {
      // ignore
    }
  }
  return DEFAULT_PHOTO;
}

export async function saveProfilePhoto(dataUrl: string): Promise<boolean> {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, dataUrl);
      window.dispatchEvent(new CustomEvent(PHOTO_EVENT, { detail: dataUrl }));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  // Also sync to server so /sundar.jpg file is updated on disk
  try {
    const res = await fetch('/api/upload-photo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dataUrl })
    });
    return res.ok;
  } catch (err) {
    console.warn('Server photo sync skipped/failed:', err);
    return false;
  }
}

export function resetProfilePhoto(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(PHOTO_EVENT, { detail: DEFAULT_PHOTO }));
  }
}

export function useProfilePhoto() {
  const [photoUrl, setPhotoUrl] = useState<string>(() => getStoredProfilePhoto());

  useEffect(() => {
    const handleUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail) {
        setPhotoUrl(customEvent.detail);
      } else {
        setPhotoUrl(getStoredProfilePhoto());
      }
    };

    window.addEventListener(PHOTO_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(PHOTO_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src && target.src.includes('sundar.jpg')) {
      target.src = FALLBACK_PHOTO;
    } else if (target.src && target.src.includes('/assets/sundar.jpg')) {
      target.src = BACKUP_PHOTO;
    } else if (target.src && target.src.includes('sundar.JPG')) {
      target.src = '/profile.jpg';
    }
  };

  return {
    photoUrl,
    setPhoto: saveProfilePhoto,
    resetPhoto: resetProfilePhoto,
    handleImgError
  };
}


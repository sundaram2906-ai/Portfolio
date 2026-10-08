import { CheckCircle2, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  if (!message) return null;

  return (
    <div 
      id="toast-notification" 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#141414] border border-[#c5a059]/40 text-white px-5 py-3.5 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-5 duration-200"
    >
      <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
      <span className="text-xs font-light pr-2 font-mono">{message}</span>
      <button 
        onClick={onClose}
        className="text-white/40 hover:text-white text-[10px] uppercase font-mono tracking-wider px-2 py-1 bg-[#0a0a0a] border border-white/10 transition"
      >
        Dismiss
      </button>
    </div>
  );
}

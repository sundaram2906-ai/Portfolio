import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function photoUploadPlugin(): Plugin {
  return {
    name: 'photo-upload-endpoint',
    configureServer(server) {
      server.middlewares.use('/api/upload-photo', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const { dataUrl } = JSON.parse(body);
              if (dataUrl && typeof dataUrl === 'string' && dataUrl.includes('base64,')) {
                const base64Data = dataUrl.split('base64,')[1];
                const buffer = Buffer.from(base64Data, 'base64');
                const publicDir = path.resolve(__dirname, 'public');
                const distDir = path.resolve(__dirname, 'dist');
                
                fs.writeFileSync(path.join(publicDir, 'sundar.jpg'), buffer);
                fs.writeFileSync(path.join(publicDir, 'sundar.JPG'), buffer);
                fs.writeFileSync(path.join(publicDir, 'assets', 'sundar.jpg'), buffer);
                fs.writeFileSync(path.join(publicDir, 'IMG_2504.jpg'), buffer);
                fs.writeFileSync(path.join(publicDir, 'profile.jpg'), buffer);
                
                if (fs.existsSync(distDir)) {
                  fs.writeFileSync(path.join(distDir, 'sundar.jpg'), buffer);
                  fs.writeFileSync(path.join(distDir, 'sundar.JPG'), buffer);
                  fs.writeFileSync(path.join(distDir, 'IMG_2504.jpg'), buffer);
                  fs.writeFileSync(path.join(distDir, 'profile.jpg'), buffer);
                }

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, message: 'Photo uploaded and saved successfully' }));
                return;
              }
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid image data' }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message || 'Server error' }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), photoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

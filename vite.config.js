import { defineConfig } from 'vite'; import react from '@vitejs/plugin-react'; export default defineConfig({ plugins: [react()] });

chmod +x vite.config.js
git add .
git commit -m "Fix permissions"
git push

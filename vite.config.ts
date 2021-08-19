import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import createImportPlugin from 'vite-plugin-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    createImportPlugin([
      {
        libraryName: 'antd',
        'style': true,
      }
    ]),]
})

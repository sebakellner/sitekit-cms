import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@stores': '/src/stores',
      '@features': '/src/features',
      '@services': '/src/services',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
      '@contexts': '/src/contexts',
      '@layouts': '/src/components/cms/layouts',
      '@src': '/src',
      '@types': '/src/types',
      '@lib': '/src/lib',
      '@registry': '/src/registry',
      '@constants': '/src/constants',
    },
  },
})

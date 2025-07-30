import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      exclude: [
        '**/*.types.ts',
        '**/index.ts',
        '**/*.meta.ts',
        '**/*.config.ts',
        '**/*.config.js',
      ],
      enabled: true,
      reporter: ['html', 'text'],
    },
  },
})

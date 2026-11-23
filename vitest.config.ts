import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts', 'src/__mocks__/globalMocks.tsx'],
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

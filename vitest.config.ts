/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      '~': `${__dirname}`
    }
  },
  test: {
    root: '.',
    globals: true,
    environment: 'happy-dom'
  }
})

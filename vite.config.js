const path = require('path')
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        particle: resolve(__dirname, 'particle.html'),
        environment: resolve(__dirname, 'environment.html'),
        mountain: resolve(__dirname, 'mountain.html'),
      }
    }
  },
})
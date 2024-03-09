const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'dist',
  chainWebpack: config => {
    config.resolve.alias
        .set("@", path.resolve("src"))
        .set("@assets", path.resolve("src/assets"))
        .set("@components", path.resolve("src/components"))
        .set("@views", path.resolve("src/views"))
  }
})

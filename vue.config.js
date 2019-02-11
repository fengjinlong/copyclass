const path = require('path')
// const fs = require('fs')
function resolve (dir) {
  return path.join(__dirname, dir)
}

const environment = process.env.NODE_ENV
module.exports = {
  devServer: {
    port: 8886, // 端口号
    open: environment === 'development',
    https: false
  },
  outputDir: 'dist',
  // eslint
  lintOnSave: false,
  // lintOnSave: environment !== 'production',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('utils', resolve('src/views'))
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  }
}

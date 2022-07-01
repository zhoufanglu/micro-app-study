module.exports = {
  productionSourceMap: false,
  publicPath: '/vue2-webpack/',
  //outputDir: 'dist',
  //assetsDir: 'assets',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 4002,
    host: '0.0.0.0',
    https: false,
    open: false
  },
  // 其他配置
}

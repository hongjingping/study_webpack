var webpack = require('webpack');
module.exports = {
  entry: __dirname + '/main.js',
  output: {
    path: __dirname + '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  devServer: {
    contentBase: './', //本地服务器所加载的页面所在的目录
    host: '192.168.1.103', //本地IP地址
    colors: true, //终端输出结果为彩色
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    port: '8081' //端口号
  }
}
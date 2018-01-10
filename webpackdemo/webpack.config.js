module.exports = {
  devtool: "eval-source-map",
  entry: __dirname + "/app/main.js", // 已多次提及的唯一入口
  output: {
    path: __dirname + "/public", // 打包后文件存放的地方
    filename: "bundle.js", // 打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./public", // 本地服务器加载页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true //实时刷新
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "es2015", "react"
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}
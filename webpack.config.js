const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 配置vue编译的template
const htmlWebpackPlugin = require('html-webpack-plugin') // 生成入口html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
  mode: 'none',
  entry: path.join(__dirname, './src/main.js'),
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin()
  ],
}
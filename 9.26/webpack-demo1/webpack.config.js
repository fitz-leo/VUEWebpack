var path = require('path')
//建立自动化生成的引用
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    main: './src/app.js'
  },
  output: {
  path: path.join(__dirname, './dist'),
    filename: 'js/[name].bundle.js'
  },
mode:'development',
  plugins: [ // 所有webpack  插件的配置节点
  new htmlWebpackPlugin({
    template: path.join(__dirname, 'index.html'), // 指定模板文件路径
    filename: 'index.html', // 设置生成的内存页面的名称
    inject: 'body',//指定生成的文件放在头部还是其他地方
  })
],
  module:{
  loaders:[
    {
      test:/\.js$/,
      loader:'babel'
    }
  ]
  }
}
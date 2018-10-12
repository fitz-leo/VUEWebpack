var path = require('path')
//建立自动化生成的引用
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    main: './src/js/app.js',
    a:'./src/js/a.js',
    b:'./src/js/b.js',
    c:'./src/js/c.js',
  },
  output:
{
  path: path.join(__dirname, './dist'),
    filename:
  'bundle.js'
},
mode:'development',
  plugins:
[ // 所有webpack  插件的配置节点
  new htmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
    filename: 'index.html', // 设置生成的内存页面的名称
    inject: 'head',//指定生成的文件放在头部还是其他地方
    title: 'webpack is good',
    date: new Date()
  }),
  new htmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
    filename: 'a.html', // 设置生成的内存页面的名称
    inject: false,//指定生成的文件放在头部还是其他地方
    title: 'webpack is a',

  }),
  new htmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
    filename: 'b.html', // 设置生成的内存页面的名称
    inject: false,//指定生成的文件放在头部还是其他地方
    title: 'webpack is b',

  }),
  new htmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
  filename: 'c.html', // 设置生成的内存页面的名称
  inject: false,//指定生成的文件放在头部还是其他地方
  title: 'webpack is c',

})
],
}
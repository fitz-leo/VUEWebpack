const path = require('path')
// 启用热更新的 第2步
const webpack =require('webpack')
const htmlWebpackPlugin=require('html-webpack-plugin')
//导入在内存中生成的html页面
// 这个配置文件，起始就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
  // 大家已经学会了举一反4， 大家觉得，在配置文件中，需要手动指定 入口 和 出口
  entry: path.join(__dirname, './src/app.js'),// 入口，表示，要使用 webpack 打包哪个文件
  output: { // 输出文件相关的配置
    path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
    filename: 'bundle.js' // 这是指定 输出的文件的名称
  },
  /*derServer:{//这是配置dev-server命令的第二种形式，相对来说，这中方式麻烦一些
    open:true,//自动打开浏览器
    port:3000,//设置启动时候的运行端口
    contentBase:'src',//指定托管的根目录
    hot:true//启动热更新
  },*/
  plugins:[//配置插件阶段
    new htmlWebpackPlugin({
      template:path.resolve(__dirname, './src/index.css.html'),//模板路径
      filename:'index.html'//自动生成的HTML文件的名称
    }),
    ],
  module: { // 这个节点，用于配置 所有 第三方模块 加载器
    rules: [ // 所有第三方模块的 匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //  配置处理 .css 文件的第三方loader 规则
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理 .less 文件的第三方 loader 规则
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理 .scss 文件的 第三方 loader 规则
    ]
  }

}

// 当我们在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
//  1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
//  2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
//  3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
//  4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；
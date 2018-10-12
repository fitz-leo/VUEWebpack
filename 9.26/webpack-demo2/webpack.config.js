const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {//配置 loader
    rules: [//相关规则写在这里
      {
        test: /\.css$/,//正则表达式：根据后缀为 .css 的文件来匹配 css 文件
        use: [//匹配搭配 css 文件后，打包时使用以下 loader 来处理文件
          { loader: 'style-loader' },//loader 名称
          {
            loader: 'css-loader',//loader 名称
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins:[],
  mode: 'development'
};

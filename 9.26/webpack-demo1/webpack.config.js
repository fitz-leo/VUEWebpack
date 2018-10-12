var path = require('path')
//�����Զ������ɵ�����
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
  plugins: [ // ����webpack  ��������ýڵ�
  new htmlWebpackPlugin({
    template: path.join(__dirname, 'index.html'), // ָ��ģ���ļ�·��
    filename: 'index.html', // �������ɵ��ڴ�ҳ�������
    inject: 'body',//ָ�����ɵ��ļ�����ͷ�����������ط�
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
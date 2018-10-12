var path = require('path')
//�����Զ������ɵ�����
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
[ // ����webpack  ��������ýڵ�
  new htmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), // ָ��ģ���ļ�·��
    filename: 'index.html', // �������ɵ��ڴ�ҳ�������
    inject: 'head',//ָ�����ɵ��ļ�����ͷ�����������ط�
    title: 'webpack is good',
    date: new Date()
  }),
  new htmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), // ָ��ģ���ļ�·��
    filename: 'a.html', // �������ɵ��ڴ�ҳ�������
    inject: false,//ָ�����ɵ��ļ�����ͷ�����������ط�
    title: 'webpack is a',

  }),
  new htmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), // ָ��ģ���ļ�·��
    filename: 'b.html', // �������ɵ��ڴ�ҳ�������
    inject: false,//ָ�����ɵ��ļ�����ͷ�����������ط�
    title: 'webpack is b',

  }),
  new htmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'), // ָ��ģ���ļ�·��
  filename: 'c.html', // �������ɵ��ڴ�ҳ�������
  inject: false,//ָ�����ɵ��ļ�����ͷ�����������ط�
  title: 'webpack is c',

})
],
}
var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/app.js'), // ����ļ�
  output: { // ָ�����ѡ��
    path: path.join(__dirname, './dist'), // ���·��
    filename: 'bundle.js' // ָ������ļ�������
  },
  plugins: [ // ����webpack  ��������ýڵ�
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // ָ��ģ���ļ�·��
      filename: 'index.html' // �������ɵ��ڴ�ҳ�������
    })
  ],
  mode: 'production',
  module: { // �������е�����loader ģ���
    rules: [ // ������ģ���ƥ�����
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // ���� CSS �ļ��� loader
      /*{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // ���� less �ļ��� loader
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },*/ // ���� scss �ļ��� loader
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // ���� ͼƬ·���� loader
      // limit ������ֵ����ͼƬ�Ĵ�С����λ�� byte�� ����������õ� ͼƬ�����ڻ���ڸ����� limitֵ���򲻻ᱻתΪbase64��ʽ���ַ����� ��� ͼƬС�ڸ����� limit ֵ����ᱻתΪ base64���ַ���
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // ���� �����ļ��� loader
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // ���� Babel ��ת���߼���ES�﷨
    ]
  }
}
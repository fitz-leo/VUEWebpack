const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {//���� loader
    rules: [//��ع���д������
      {
        test: /\.css$/,//������ʽ�����ݺ�׺Ϊ .css ���ļ���ƥ�� css �ļ�
        use: [//ƥ����� css �ļ��󣬴��ʱʹ������ loader �������ļ�
          { loader: 'style-loader' },//loader ����
          {
            loader: 'css-loader',//loader ����
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

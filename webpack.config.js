const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          //预设：指示babel应该做怎样的兼容性处理
          presets: [
            [
              '@babel/preset-env',
              {
                //按需加载
                useBuiltIns: 'usage',
                //指定core-js版本
                corejs: {
                  version: '3'
                },
                //指定兼容哪些浏览器
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  edge: '17',
                  safari: '10'
                }
              }
            ]
          ]
        }
      }
    ]
  },
  mode: 'production',
  // devServer: {
  //   //静态文件根目录
  //   contentBase: path.join(__dirname, 'www'),
  //   //不开启压缩
  //   compress: false,
  //   //端口号
  //   port: 8090,
  //   //虚拟打包路径，不会生成最终的bundle.js
  //   publicPath:'/dist/'
  // }
}
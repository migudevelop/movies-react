const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const openBrowser = require('react-dev-utils/openBrowser');

const port = 9002;

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: port,
    after: () => {
      openBrowser(`http://localhost:${port}/`);
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: false,
    proxy: [
      {
        context: ['/api'],
        target: `http://localhost:9006`,
        secure: false,
        changeOrigin: true,
      },
    ],
  },
});

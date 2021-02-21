const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  inject: false,
  template: './public/index.html',
  filename: './index.html',
});

const mode = process.env.NODE_ENV;
const fileNameWithHash = mode === 'production' ? '[name].[Contenthash:8]' : '[name].[hash:8]';

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    bundle: path.resolve('./src/index.tsx'),
  },
  output: {
    path: path.resolve('dist'),
    filename: `static/js/${fileNameWithHash}.chunk.js`,
    libraryTarget: 'umd',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.tsx', '.ts', '.js', '.jsx'],
          plugins: [new TsconfigPathsPlugin({ configFile: path.resolve('./tsconfig.json') })],
        },
      },
      {
        test: /(\.jsx|\.js)$/,
        include: [path.resolve('./src')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: mode === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|gif|png|jpg|jpeg)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'static/media/images',
          name: `${fileNameWithHash}.[ext]`,
        },
      },
    ],
  },
  plugins: [
    htmlWebpackPlugin,
    new MiniCssExtractPlugin({
      filename: `static/css/${fileNameWithHash}.chunk.css`,
    }),
  ],
};

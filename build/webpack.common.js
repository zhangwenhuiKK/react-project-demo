const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcDir = path.join(__dirname, '../src');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: path.join(__dirname, '../src/main.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[chunk:8].js',
    chunkFilename: 'chunk/[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [srcDir],
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader?cacheDirectory=true"],
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,   // creates style nodes from JS strings
          'css-loader',              // translates CSS into CommonJS
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('autoprefixer')({ overrideBrowserslist: ['> 0.15% in CN'] }) // 添加前缀
              ]
            }
          },
          'less-loader',              // compiles Less to CSS
        ],
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('autoprefixer')({ overrideBrowserslist: ['> 0.15% in CN'] }) // 添加前缀
              ]
            }
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: ['url-loader'],
        include: [srcDir],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: ['url-loader'],
        include: [srcDir],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: ['url-loader'],
        include: [srcDir],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`,
    }),
    new CopyWebpackPlugin([
      {
        from: `${srcDir}/assets/images/nowthen.jpg`,
        to: 'nowthen.jpg',
      },
    ]),
  ],
  resolve: {
    alias: {
      '@': srcDir,
      '@pages': `${srcDir}/pages`,
    },
  },
};
/* eslint-disable max-len */
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: true
};

export default {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  debug: true,
  devtool: 'eval-source-map',
  noInfo: true, 
  entry: [
    './client/webpack-public-path', 'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'client/index.js') 
  ],
  target: 'web', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery', //eslint-disable-line
      jQuery: 'jquery',
      'windows.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin(), new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'client/index.html',
      minify: {
        removeComments: true
      },
      inject: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }, {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        loader: 'file'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file?name=[name].[ext]'
      }, {
        test: /\.ico$/,
        loader: 'file?name=[name].[ext]'
      }, { test: /\.css$/, loaders: ['style', 'css?sourceMap', 'postcss'] }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  postcss: () => [autoprefixer]
};

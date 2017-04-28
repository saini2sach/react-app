var webpack = require('webpack');
var path = require('path');

var CopyWebpackPlugin = require('copy-webpack-plugin');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  context: APP_DIR,
  entry: {
    app: './app.js',

    vendor_3rd_Party: [
      'jquery',
      'lodash'
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },

  devtool: 'source-map',


  module: {
    loaders: [{
      test: /\.js?/,
      include: APP_DIR,
      loaders: ["babel-loader"]
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),

    new UglifyJSPlugin({
      mangle: true,
      compress: true,
      comments: false
    }),

    new CopyWebpackPlugin([{
        from: '../assets',
        to: BUILD_DIR + '/assets'
      },
      {
        from: "../index.html",
        to: BUILD_DIR
      }
    ])
  ]
};

module.exports = config;
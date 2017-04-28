var webpack = require('webpack');
var path = require('path');

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

  /* vendor: [
      'react',
      'react-dom'
    ]
  } ,
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  }, */

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
  ]
};

module.exports = config;
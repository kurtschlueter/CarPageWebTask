var webpack = require("webpack");
var path = require("path");

module.exports = {
  // The React code will begin at this entry point. It, however, cannot be read by the browser because we will be using JSX.
  entry: {
    app: './public/app/App.js'
  },

  // The JSX code needs to be transpiled into raw javascript which is was is going on here in the output.
  output: {
    filename: "public/build/bundle.js",
    sourceMapFilename: "public/build/bundle.map"
  },

  devtool: '#source-map',

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
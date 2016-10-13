var webpack = require("webpack");
var path = require("path");

module.exports = {
  // The React code will begin at this entry point. It, however, cannot be
  entry: {
    app: './public/app/App.js'
  },
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: {
      test: /|.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }
  }
}
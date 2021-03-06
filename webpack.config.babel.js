import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import precss from 'precss'
import importGlobLoader from 'import-glob-loader'
import config from './config'

module.exports = [{
  entry: path.join(__dirname, config.source.javascript.path + config.source.javascript.fileName),
  output: {
    path: path.join(__dirname, config.build.javascript.path),
    filename: config.build.javascript.fileName
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  externals: {
    jquery: 'window.jQuery'
  }
}, {
  entry: path.join(__dirname, config.source.stylesheet.path + config.source.stylesheet.fileName),
  output: {
    path: path.join(__dirname, config.build.stylesheet.path),
    filename: config.build.stylesheet.fileName
  },
  resolve: {
    extensions: ['', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!import-glob')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(config.build.stylesheet.fileName)
  ]
}];

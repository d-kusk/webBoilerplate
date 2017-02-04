import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import precss from 'precss'
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
    })
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
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(config.build.stylesheet.fileName)
  ],
  postcss: function() {
    return [precss]
  }
}];

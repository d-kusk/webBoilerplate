import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

module.exports = [{
  entry: path.join(__dirname, 'source/javascript/script.js'),
  output: {
    path: path.join(__dirname, 'assets/javascript/'),
    filename: 'script.js'
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
  entry: [
    path.join(__dirname, 'source/stylesheet/style.scss'),
  ],
  output: {
    path: path.join(__dirname, 'assets/stylesheet/'),
    filename: 'style.css'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
        new ExtractTextPlugin("style.css")
    ],
}];

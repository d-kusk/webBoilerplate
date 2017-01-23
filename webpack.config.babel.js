import webpack from 'webpack'
import path from 'path'

export default {
  entry: [
    path.join(__dirname, 'source/javascript/script.js'),
  ],
  output: {
    path: path.join(__dirname, 'assets/javascript/'),
    filename: '[name].js'
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
}

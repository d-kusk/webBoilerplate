module.exports = {
  plugins: [
      require('precss'),
      require('autoprefixer')({
        browsers: ['last 2 versions', '> 2%']
      }),
      require('postcss-media-minmax'),
      require('cssnano')
  ]
}

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PRODUCTION = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './dist',
    filename: PRODUCTION ? 'bundle.min.js' : 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    port: 3333,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/(node_modules|bower_components)/',
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react','stage-2']
        }
      },
      {
        test: /\.css/, loader: ExtractTextPlugin.extract('style-loader','css-loader')
      }
    ]
  },
  plugins: PRODUCTION ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new ExtractTextPlugin('style.min.css',{
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ] : [
    new ExtractTextPlugin('style.css',{
      allChunks: true
    })
  ]
}

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './jsx/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: true
        }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.js|\.jsx$/,
      loaders: ['react-hot', 'babel-loader'],
      include: path.join(__dirname, 'jsx')
    },
    {
      test: /\.less$/,
      loader: "style!css!less"
    }]
  }
};
var path = require('path');
var webpack = require('webpack');

module.exports = 
{
  entry: 
  [
    './jsx/index'
  ],
  output: 
  {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: 
  [
    new webpack.optimize.UglifyJsPlugin
    ({
        compressor: 
        {
            warnings: true
        }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  resolve: 
  {
      extensions: ['', '.js', '.jsx']
  },
  module: 
  {
    loaders: 
    [
      {
        test: /\.jsx$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'jsx')
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules'],
        include: path.join(__dirname, 'css')
      },
      {
        test: /\.(png|jpg|svg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader'
      }
    ]
  }
};
var path = require('path');
var webpack = require('webpack');

module.exports = 
{
  devtool: 'cheap-module-eval-source-map',
  entry: 
  [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './jsx/index'
  ],
  output:
  {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: 
  [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
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
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader'
      }
    ]
  }
};
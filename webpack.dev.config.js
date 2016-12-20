var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/application.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // JSON
    {
      test: /\.json$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    },
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    // CSS
    {
      test: /\.(s?css)$/,
      include: path.join(__dirname, 'assets'),
      loaders: ['style', 'css', 'sass']
    },
    { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'assets'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:<%= port %>',
    'webpack/hot/only-dev-server',
    './js/index.js',
  ],
  output: {
    path: __dirname + '/static/',
    publicPath: '/static/',
    filename: 'bundle.js',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('app.css'),
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?module!cssnext-loader') },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  },
};

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: {
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  externals: {
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react']
          }
        },
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: []
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'GRAPHQL_ENDPOINT': JSON.stringify('http://localhost:3000/graphql')
      }
    }),
    new DashboardPlugin()
  ]
};

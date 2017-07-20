const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
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
        use: [
          {
            loader: 'style-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['mapbox-gl', ]
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'GRAPHQL_ENDPOINT': JSON.stringify('')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
};

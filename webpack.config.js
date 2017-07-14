const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: {
    'web-gl-map': './client/components/WebGlMap.js',
    'react-mapbox-gl': 'react-mapbox-gl',
    'material-ui': 'material-ui'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-apollo': '',
    'apollo-client': '',
    'mapbox-gl': 'mapboxgl'
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
      name: ['react-mapbox-gl', 'material-ui']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'GRAPHQL_ENDPOINT': JSON.stringify('http://localhost:3000/graphql')
      }
    }),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/views/client.ejs`
    })
  ]
};

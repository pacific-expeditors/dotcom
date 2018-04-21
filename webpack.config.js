const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = (env) => {
  const plugins = env.NODE_ENV === 'development' ? [
    new NodemonPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ] : []

  return [
    // server
    {
      entry: './src/server.js',
      target: 'node',
      node: {
        __dirname: true
      },
      resolve: {
        alias: {
          graphql: path.resolve('./node_modules/graphql')
        }
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
      plugins 
    },
    // client
    {
      entry: './src/client.js',
      output: {
        filename: 'client.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: {
                loader: "css-loader",
                options: {
                  minimize: true
                }
              }
            })
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin({
          filename: '[name].css'
        })
      ]
    }
  ]
}

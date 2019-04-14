const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webapck.base')

// module
const clientConfig = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, clientConfig)

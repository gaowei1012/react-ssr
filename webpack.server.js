const path = require('path')
const mrege = require('webpack-merge')
const baseConfig = require('./webapck.base')
const nodeExternals = require('webpack-node-externals')

// module
const serverConfig = {
  target: 'node', // 服务端
  entry: './src/server/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()]
}

module.exports = mrege(baseConfig, serverConfig)

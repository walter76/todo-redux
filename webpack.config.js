const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'public')
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(PATHS.app, 'index.html'),
  filename: 'index.html',
  inject: 'body'
})

const commonConfig = merge([
  {
    entry: path.join(PATHS.app, 'index.js'),
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    module: {
      loaders: [
      ],
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.jsx?$/,
          include: PATHS.app,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      HtmlWebpackPluginConfig
    ]
  }
])

const productionConfig = merge([
])

const lintJavaScript = merge([
  {
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'standard-loader',
          include: PATHS.app,
          exclude: /(node_modules|bower_components|build)/,
          options: {
            // emit errors instead of warnings (default = false)
            error: false,
            // enable snazzy output (default = true)
            snazzy: true,
            // other config options to be passed through to standard e.g.
            parser: ''
          }
        }
      ]
    }
  }
])

const developmentConfig = merge([
  {
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      host: process.env.HOST, // Defaults to `localhost`
      port: process.env.PORT, // Defaults to 8080
      proxy: {
        '/api/**': {
          target: 'http://localhost:5000',
          secure: false
        }
      },
      overlay: {
        errors: true,
        warnings: true
      }
    }
  },
  lintJavaScript
])

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig)
  }

  return merge(commonConfig, developmentConfig)
}

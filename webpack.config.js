const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const TerserPlugin = require('terser-webpack-plugin');

let conf = {
	devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
  	minimizer: [
      new TerserPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'traffic light',
        template: path.resolve(__dirname, './src/template.html'),
        filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
     		test: /\.vue$/,
     		loader: 'vue-loader'
   		}
    ]
  },
}

module.exports = (env, options) => {
  let production = options.mode === 'production'

  conf.devtool = production ? false : 'eval-source-map'
  conf.optimization.minimize = production

    if (production)
      conf.plugins.push(
          new PurgecssPlugin(
              {
                  paths:
                      glob.sync([
                          path.resolve(__dirname, `*.html`),
                          path.resolve(__dirname, `src/**/*.html`),
                          path.resolve(__dirname, `src/**/*.js`)
                      ], {nodir: true}),
                  whitelistPatterns: [],
              }
          )
      )

  return conf
}
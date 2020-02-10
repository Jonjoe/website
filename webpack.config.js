const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.tsx',
 
  resolve: {
    modules: ["src", "node_modules"],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  
  devtool: 'source-map'
}

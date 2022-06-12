const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebpackPlugin({
        title: "Application name",
        template: './src/index.html'
    });

const path = require('path')
module.exports = {
  plugins: [htmlPlugin],
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: "style-loader!css-loader",
        },
      },
    ],
  },
};


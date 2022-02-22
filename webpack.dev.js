const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config.js");
const path = require("path");

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  target: "web",
  plugins: [new HotModuleReplacementPlugin()],
  devtool: "eval-source-map",
};

module.exports = merge(webpackConfig, devConfig);

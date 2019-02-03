const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  watch: true,
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    new CleanWebpackPlugin(["dist"])
  ],
  output: {
    libraryTarget: "umd",
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  externals: {
    react: "react",
    "react-router-dom": "react-router-dom"
  }
};

const path = require("path");
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
  plugins: [new CleanWebpackPlugin(["dist"])],
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

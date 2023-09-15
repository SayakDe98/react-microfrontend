const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".css", ".scss", ".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: {
                filter: (url) => {
                  if (url.startsWith("data:")) {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new ModuleFederationPlugin({
      name: "FIRST_APP",
      filename: "remoteEntry.js",
      shared: {...deps.dependencies, ...deps.peerDependencies},
      exposes: {
        "./app": "./src/components/App",
        "./pages/Home": "./src/pages/Home",
        "./components/footer": "./src/components/Footer",
        "./components/header": "./src/components/TopBar",
        "./pages/login": "./src/pages/Login",
        "./styles/login": "./src/pages/Login.module.css",
        "./components/card": "./src/components/Card.js",
        "./utils/login": "./src/utils/login"
      },
    }),
  ],
};
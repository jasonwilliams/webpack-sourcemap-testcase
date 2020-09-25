// @ts-check
const path = require("path");

/**@type {import('webpack').Configuration}*/
const webpackConf = {
  entry: ["./src/pages/[id].js"],
  target: "node",
  //   Using same devtool option as next: https://github.com/vercel/next.js/blob/7ce000b328305737099549bc186ddd3a39a2528b/packages/next/build/webpack/config/blocks/base.ts#L35
  devtool: "eval-source-map",
  mode: "development",
};

module.exports = webpackConf;

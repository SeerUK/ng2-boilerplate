"use strict";

const env = require("./env");
const path = require("path");

module.exports = {
    context: path.join(process.cwd(), "src"),
    devServer: require("./webpack/dev-server"),
    devtool: env.isProd ? "source-map" : "eval-source-map",
    entry: require("./webpack/entry"),
    module: require("./webpack/module"),
    node: require("./webpack/node"),
    output: require("./webpack/output"),
    plugins: require("./webpack/plugins"),
    resolve: require("./webpack/resolve")
};

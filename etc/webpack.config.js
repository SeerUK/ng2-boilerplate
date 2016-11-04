"use strict";

const env = require("./env");
const path = require("path");

var devtool = "eval-source-map";

if (env.isProd) {
    devtool = "source-map";
} else if (env.isTest) {
    devtool = "inline-source-map";
}

module.exports = {
    context: path.join(process.cwd(), "src"),
    devServer: require("./webpack/dev-server"),
    devtool: devtool,
    entry: require("./webpack/entry"),
    module: require("./webpack/module"),
    node: require("./webpack/node"),
    output: require("./webpack/output"),
    plugins: require("./webpack/plugins"),
    resolve: require("./webpack/resolve")
};

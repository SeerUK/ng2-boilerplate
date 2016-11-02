"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = {
    context: path.join(process.cwd(), "src"),
    devServer: require("./webpack/dev-server"),
    devtool: "source-map",
    entry: require("./webpack/entry"),
    module: require("./webpack/module")(),
    node: require("./webpack/node"),
    output: require("./webpack/output"),
    plugins: require("./webpack/plugins").concat([
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]),
    resolve: require("./webpack/resolve")
};

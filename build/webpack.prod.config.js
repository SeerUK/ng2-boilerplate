"use strict";

const ngtools = require("@ngtools/webpack");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    context: path.join(process.cwd(), "src"),
    devServer: require("./webpack/dev-server"),
    entry: require("./webpack/entry"),
    module: require("./webpack/module")(),
    node: require("./webpack/node"),
    output: require("./webpack/output"),
    plugins: require("./webpack/plugins").concat([
        // new ngtools.AotPlugin({
        //     baseDir: process.cwd(),
        //     entryModule: path.join(process.cwd(), "src", "app", "app.module") + "#AppModule",
        //     tsConfigPath: "src/tsconfig.json"
        // }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]),
    resolve: require("./webpack/resolve")
};

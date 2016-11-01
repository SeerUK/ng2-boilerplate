"use strict";

module.exports = {
    devServer: require("./webpack/dev-server"),
    entry: require("./webpack/entry"),
    module: require("./webpack/module"),
    output: require("./webpack/output"),
    resolve: require("./webpack/resolve")
};

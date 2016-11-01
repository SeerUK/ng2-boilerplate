"use strict";

const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
    new webpack.ContextReplacementPlugin(
        // For: https://github.com/angular/angular/issues/11580
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        path.join(process.cwd(), "src")
    ),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
        template: "./index.html",
        chunksSortMode: "dependency"
    })
];

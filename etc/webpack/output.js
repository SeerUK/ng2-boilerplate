"use strict";

const env = require("../env");
const path = require("path");

module.exports = {
    path: path.join(process.cwd(), env.isTest ? "dist-test" : "dist"),
    // publicPath: "https://cdn.example.com/",
    filename: "[name].[hash].bundle.js",
    chunkFilename: "[id].[hash].chunk.js"
};

"use strict";

const path = require("path");

module.exports = {
    path: path.join(process.cwd(), "dist"),
    filename: "[name].[hash].bundle.js",
    chunkFilename: "[id].[hash].chunk.js"
};

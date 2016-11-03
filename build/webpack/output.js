"use strict";

const env = require("../env");
const path = require("path");

module.exports = env.isTest
    ? {}
    : {
        path: path.join(process.cwd(), "dist"),
        filename: "[name].[hash].bundle.js",
        chunkFilename: "[id].[hash].chunk.js"
    }
;

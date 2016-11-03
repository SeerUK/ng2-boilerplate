"use strict";

const webpackConfig = require("./build/webpack.config");

module.exports = function(config) {
    config.set({
        basePath: ".",
        files: [
            { pattern: "./src/test.ts", watched: false }
        ],
        frameworks: [ "jasmine" ],
        exclude: [],
        preprocessors: {
            "./src/test.ts": [ "webpack" ]
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
            stats: "errors-only"
        },
        reporters: [ "mocha" ],
        browsers: [ "Chrome" ],
        logLevel: config.LOG_INFO,
        port: 9876,
        colors: true,
        autoWatch: false,
        singleRun: true
    });
};

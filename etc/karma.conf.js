"use strict";

const webpackConfig = require("./webpack.config");

module.exports = function(config) {
    config.set({
        basePath: "",
        files: [
            { pattern: "../src/test.ts", watched: false }
        ],
        frameworks: [ "jasmine" ],
        exclude: [],
        preprocessors: {
            "../src/test.ts": [ "webpack", "sourcemap" ]
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
            stats: "errors-only"
        },
        reporters: [ "progress", "karma-remap-istanbul" ],
        remapIstanbulReporter: {
            reports: {
                html: "coverage/report-html/",
                lcovonly: "coverage/coverage.lcov"
            }
        },
        browsers: [ "Chrome" ],
        logLevel: config.LOG_INFO,
        port: 9876,
        colors: true,
        autoWatch: false,
        singleRun: true
    });
};

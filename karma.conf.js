"use strict";

module.exports = function(config) {
    config.set({
        basePath: ".",
        frameworks: [ "jasmine" ],
        exclude: [],
        webpackMiddleware: { stats: "errors-only"},
        reporters: [ "mocha", "coverage", "remap-coverage" ],
        port: 9876,
        logLevel: config.LOG_INFO,
        colors: true,
        browsers: [ "Chrome" ],
        singleRun: true
    });
};

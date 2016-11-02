"use strict";

const env = require("../env");

module.exports = function() {
    const atlLoader = {
        loader: "awesome-typescript",
        options: {
            sourceMap: true,
            tsconfig: "src/tsconfig.json"
        }
    };

    const postcssLoader = {
        loader: "postcss",
        options: {
            plugins: function() {
                return [
                    require("autoprefixer")()
                ];
            }
        }
    };

    return {
        rules: [
            { test: /\.ts$/, loader: "tslint", enforce: "pre" },
            { test: /\.css$/, use: [ "raw", postcssLoader ] },
            { test: /\.less/, use: [ "raw", postcssLoader, "less" ] },
            { test: /\.scss$/, use: [ "raw", postcssLoader, "sass" ] },
            { test: /\.styl$/, use: [ "raw", postcssLoader, "stylus" ] },
            { test: /\.html$/, loader: "raw" },
            { test: /\.json$/, loader: "json" },
            { test: /\.ts$/, use: [ atlLoader, "angular2-template", "angular2-router" ] }
        ]
    };
};

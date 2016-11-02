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
            // TS
            { test: /\.ts$/, loader: "tslint", enforce: "pre" },
            { test: /\.ts$/, use: [ atlLoader, "angular2-template", "angular2-router" ] },
            // Styles
            { test: /\.css$/, use: [ "raw", postcssLoader ] },
            { test: /\.less/, use: [ "raw", postcssLoader, "less" ] },
            { test: /\.scss$/, use: [ "raw", postcssLoader, "sass" ] },
            { test: /\.styl$/, use: [ "raw", postcssLoader, "stylus" ] },
            // HTML
            { test: /\.html$/, loader: "raw" },
            // JSON
            { test: /\.json$/, loader: "json" },
            // Images
            { test: /\.(jpe?g|png|gif)$/, loader: "url-loader?limit=10000" },
            // Fonts
            { test: /\.(otf|ttf|woff|woff2)$/, loader: "url?limit=10000" },
            { test: /\.(eot|svg)$/, loader: "file" }
        ]
    };
};

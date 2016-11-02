"use strict";

const env = require("../env");

module.exports = function() {
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

    const config = {
        rules: [
            { test: /\.ts$/, loader: "tslint", enforce: "pre" },
            { test: /\.css$/, use: [ "raw", postcssLoader ] },
            { test: /\.less/, use: [ "raw", postcssLoader, "less" ] },
            { test: /\.scss$/, use: [ "raw", postcssLoader, "sass" ] },
            { test: /\.styl$/, use: [ "raw", postcssLoader, "stylus" ] },
            { test: /\.html$/, loader: "raw" },
            { test: /\.json$/, loader: "json" }
        ]
    };

    if (env.isProd) {
        config.rules.push({
            test: /\.ts$/,
            loader: "@ngtools/webpack"
        });
    } else {
        config.rules.push({
            test: /\.ts$/,
            use: [
                {
                    loader: "awesome-typescript",
                    options: {
                        tsconfig: "src/tsconfig.json"
                    }
                },
                "angular2-template"
            ]
        });
    }

    return config;
};

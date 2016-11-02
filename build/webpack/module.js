"use strict";

const env = require("../env");

module.exports = function() {
    const config = {
        rules: [
            { test: /\.ts$/, loader: "tslint", enforce: "pre" },
            { test: /\.css$/, loader: "raw" },
            { test: /\.html$/, loader: "raw" }
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

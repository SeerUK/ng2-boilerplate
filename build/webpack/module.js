"use strict";

module.exports = function(prod) {
    const config = {
        rules: [
            { test: /\.css$/, loader: "raw" },
            { test: /\.html$/, loader: "raw" }
        ]
    };

    if (!!prod) {
        config.rules.push({ test: /\.ts$/, loader: "@ngtools/webpack" });
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

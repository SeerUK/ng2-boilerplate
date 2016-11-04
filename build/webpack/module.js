"use strict";

const env = require("../env");
const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const atlLoader = {
    loader: "awesome-typescript",
    query: {
        module: env.isTest ? "commonjs" : "es6",
        tsconfig: "src/tsconfig.json"
    }
};

const appStyles = path.join(process.cwd(), "src", "app");
const fileLoader = "file?name=[path][name].[hash].[ext]";
const urlLoader = "url?limit=10000&name=[path][name].[hash].[ext]";

const componentStyleBaseLoaders = [ "to-string", "css?sourcemap&importLoaders=1", "postcss" ];
const componentStyleSassLoaders = componentStyleBaseLoaders.concat([ "resolve-url", "sass?sourcemap" ]);
const globalStyleBaseLoaders = [ "css?sourcemap&importLoaders=1", "postcss" ];
const globalStyleSassLoaders = globalStyleBaseLoaders.concat([ "sass?sourcemap" ]);

const rules = [
    // TS
    {
        test: /\.ts$/,
        use: [ atlLoader, "angular2-template", "angular2-router" ],
        exclude: [ env.isTest ? /\.(e2e)\.ts$/ : /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/ ]
    },
    // App Styles
    { test: /\.css$/, include: [ appStyles ], use: componentStyleBaseLoaders },
    { test: /\.scss$/, include: [ appStyles ], use: componentStyleSassLoaders },
    // Global Styles
    {
        test: /\.css$/,
        exclude: [ appStyles ],
        loader: env.isTest ? "null" : ExtractTextPlugin.extract(globalStyleBaseLoaders)
    },
    {
        test: /\.scss$/,
        exclude: [ appStyles ],
        loader: env.isTest ? "null" : ExtractTextPlugin.extract(globalStyleSassLoaders)
    },
    // HTML
    { test: /\.html$/, loader: "raw" },
    // JSON
    { test: /\.json$/, loader: "json" },
    // Images
    { test: /\.(jpe?g|png|gif)$/, loader: urlLoader },
    // Fonts
    { test: /\.(otf|ttf|woff|woff2)$/, loader: urlLoader },
    { test: /\.(eot|svg)$/, loader: fileLoader }
];

if (!env.isTest) {
    rules.push({ test: /\.ts$/, loader: "tslint", enforce: "pre" });
}

if (env.isTest) {
    rules.push({
        test: /\.js$/,
        loader: "source-map",
        enforce: "pre",
        exclude: [
            /node_modules/
        ]
    });

    rules.push({
        test: /\.(js|ts)$/,
        loader: "sourcemap-istanbul-instrumenter",
        enforce: "post",
        include: [
            path.join(process.cwd(), "src", "app")
        ],
        exclude: [
            /\.(e2e|spec)\.ts$/,
            /node_modules/
        ],
        query: { "force-sourcemap": true }
    });
}

module.exports = {
    rules: rules
};

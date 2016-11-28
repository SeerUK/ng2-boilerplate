"use strict";

const env = require("../env");
const ngtools = require("@ngtools/webpack");
const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const atlLoader = {
    loader: "awesome-typescript-loader",
    query: {
        module: env.isTest ? "commonjs" : "es6",
        tsconfig: "src/tsconfig.json"
    }
};

const appStyles = path.join(process.cwd(), "src", "app");
const fileLoader = "file-loader?name=[path][name].[hash].[ext]";
const urlLoader = "url-loader?limit=10000&name=[path][name].[hash].[ext]";

const cssLoader = "css-loader?sourceMap&importLoaders=1";
const resolveUrlLoader = "resolve-url-loader?fail&sourceMap";
const sassLoader = "sass-loader?sourceMap";
const componentStyleBaseLoaders = [ "to-string-loader", cssLoader, "postcss-loader" ];
const componentStyleSassLoaders = componentStyleBaseLoaders.concat([ resolveUrlLoader, sassLoader ]);
const globalStyleBaseLoaders = [ cssLoader, "postcss-loader" ];
const globalStyleSassLoaders = globalStyleBaseLoaders.concat([ resolveUrlLoader, sassLoader ]);

const rules = [
    // App Styles
    { test: /\.css$/, include: [ appStyles ], use: componentStyleBaseLoaders },
    { test: /\.scss$/, include: [ appStyles ], use: componentStyleSassLoaders },
    // Global Styles
    {
        test: /\.css$/,
        exclude: [ appStyles ],
        loader: env.isTest ? "null-loader" : ExtractTextPlugin.extract(globalStyleBaseLoaders)
    },
    {
        test: /\.scss$/,
        exclude: [ appStyles ],
        loader: env.isTest ? "null-loader" : ExtractTextPlugin.extract(globalStyleSassLoaders)
    },
    // HTML
    { test: /\.html$/, loader: "html-loader" },
    // JSON
    { test: /\.json$/, loader: "json-loader" },
    // Images
    { test: /\.(jpe?g|png|gif)$/, loader: urlLoader },
    // Fonts
    { test: /\.(otf|ttf|woff|woff2)$/, loader: urlLoader },
    { test: /\.(eot|svg)$/, loader: fileLoader }
];

if (env.isAot) {
    rules.push({
        test: /\.ts$/,
        loader: "@ngtools/webpack"
    });
} else {
    rules.push({
        test: /\.ts$/,
        use: [ atlLoader, "angular2-template-loader", "angular2-router-loader" ],
        exclude: [ env.isTest ? /\.(e2e)\.ts$/ : /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/ ]
    });
}

if (!env.isTest) {
    rules.push({
        test: /\.ts$/,
        exclude: [ /\.ngfactory.ts$/, /\.shim.ts$/ ],
        loader: "tslint-loader",
        enforce: "pre"
    });
}

if (env.isTest) {
    rules.push({
        test: /\.js$/,
        loader: "source-map-loader",
        enforce: "pre",
        exclude: [
            /node_modules/
        ]
    });

    rules.push({
        test: /\.(js|ts)$/,
        loader: "sourcemap-istanbul-instrumenter-loader",
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

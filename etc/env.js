"use strict";

const path = require("path");

const scriptName = process.env.npm_lifecycle_event;
const distScripts = [ "build", "build:prod", "watch", "watch:prod" ];

module.exports = {
    isAot: scriptName.indexOf("aot") > -1,
    isDist: distScripts.indexOf(scriptName) > -1,
    isProd: scriptName.indexOf("prod") > -1,
    isTest: scriptName.indexOf("test") > -1,
    root: path.resolve(process.cwd(), "src")
};

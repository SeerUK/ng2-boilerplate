"use strict";

const path = require("path");

const scriptName = process.env.npm_lifecycle_event;
const distScripts = [ "build", "watch" ];

module.exports = {
    isAot: scriptName.indexOf("aot") > -1,
    isDist: distScripts.some(function(script) { return scriptName.indexOf(script) > -1 }),
    isProd: scriptName.indexOf("prod") > -1,
    isTest: scriptName.indexOf("test") > -1,
    root: path.resolve(process.cwd(), "src")
};

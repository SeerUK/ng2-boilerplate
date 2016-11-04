"use strict";

const scriptName = process.env.npm_lifecycle_event;
const distScripts = [ "build", "build:prod", "watch", "watch:prod" ];

module.exports = {
    isDist: distScripts.indexOf(scriptName) > -1,
    isProd: scriptName.indexOf("prod") > -1,
    isTest: scriptName.indexOf("test") > -1
};

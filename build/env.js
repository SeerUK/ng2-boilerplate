"use strict";

const scriptName = process.env.npm_lifecycle_event;
const distScripts = [ "build", "build:prod", "watch", "watch:prod" ];

module.exports = {
    isDist: distScripts.some(function(s) { return s === scriptName; }),
    isProd: scriptName.indexOf("prod") > -1
};

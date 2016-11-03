"use strict";

const env = require("../env");

module.exports = env.isTest
    ? {}
    : {
        "vendor": "./vendor.ts",
        "main": "./main.ts"
    }
;

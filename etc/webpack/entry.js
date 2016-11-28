"use strict";

const env = require("../env");

const entry = {
    "polyfills": "./polyfills.ts",
    "vendor": "./vendor.ts",
    "main": "./main.ts"
};

const testEntry = {
    "test": "./test.ts"
};

module.exports = env.isTest ? testEntry : entry;

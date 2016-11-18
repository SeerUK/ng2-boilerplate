"use strict";

const env = require("../env");

module.exports = {
    modules: [
        "node_modules",
        env.root
    ],
    extensions: [ ".js", ".ts" ]
};

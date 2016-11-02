"use strict";

const SCRIPT_NAME = process.env.npm_lifecycle_event;

module.exports = {
    isProd: SCRIPT_NAME.indexOf("prod") > -1
};

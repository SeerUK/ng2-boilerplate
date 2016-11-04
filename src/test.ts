import "./polyfills";

import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";
import "zone.js/dist/async-test";
import "zone.js/dist/fake-async-test";
import "zone.js/dist/sync-test";
import "zone.js/dist/proxy";
import "zone.js/dist/jasmine-patch";

declare let __karma__: any;
declare let require: any;

import * as testing from "@angular/core/testing";
import * as testingBrowser from "@angular/platform-browser-dynamic/testing";

Error.stackTraceLimit = Infinity;

// First, initialize the Angular testing environment.
testing.getTestBed().resetTestEnvironment();
testing.getTestBed().initTestEnvironment(
    testingBrowser.BrowserDynamicTestingModule,
    testingBrowser.platformBrowserDynamicTesting()
);

// Then we find all TypeScript files.
Promise.resolve(require.context("./app", true, /\.ts/))
    // And load the modules.
    .then(context => context.keys().map(context))
    // Finally, start Karma to run the tests.
    .then(__karma__.start, __karma__.error);

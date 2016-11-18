import "./polyfills";
import "./main.scss";

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environment/environment";

if (environment.prod) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";

const routes = [
    { path: "", component: HomeComponent },
    { path: "about", component: AboutComponent }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);

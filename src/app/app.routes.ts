import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";

const routes = [
    { path: "", loadChildren: "app/home/home.module" },
    { path: "about", loadChildren: "app/about/about.module" }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);

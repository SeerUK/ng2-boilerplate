import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";

const routes = [
    { path: "", loadChildren: "+home/home.module#HomeModule" },
    { path: "about", loadChildren: "+about/about.module#AboutModule" }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);

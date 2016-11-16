import { ModuleWithProviders } from "@angular/core";
import { PreloadAllModules, RouterModule } from "@angular/router";

const routes = [
    { path: "", loadChildren: "app/+home/home.module#HomeModule" },
    { path: "about", loadChildren: "app/+about/about.module#AboutModule" }
];

const routerOptions = {
    preloadingStrategy: PreloadAllModules
};

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes, routerOptions);

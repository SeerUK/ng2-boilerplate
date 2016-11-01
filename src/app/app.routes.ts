import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";

export const APP_ROUTES = [
    { path: "", component: HomeComponent },
    { path: "about", component: AboutComponent }
];

// export const APP_ROUTES = RouterModule.forRoot(routes);

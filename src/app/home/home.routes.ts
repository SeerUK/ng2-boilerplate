import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";

const routes = [
    { path: "", component: HomeComponent }
];

export const HOME_ROUTES = RouterModule.forChild(routes);

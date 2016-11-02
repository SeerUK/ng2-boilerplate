import { RouterModule } from "@angular/router";

import { AboutComponent } from "./about.component";

const routes = [
    { path: "", component: AboutComponent }
];

export const ABOUT_ROUTES = RouterModule.forChild(routes);

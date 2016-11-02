import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";

import { HOME_ROUTES } from "./home.routes";

const components = [
    HomeComponent
];

@NgModule({
    declarations: components,
    exports: components,
    imports: [ HOME_ROUTES ]
})
export class HomeModule {}

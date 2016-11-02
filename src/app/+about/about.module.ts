import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";

import { ABOUT_ROUTES } from "./about.routes";

const components = [
    AboutComponent
];

@NgModule({
    declarations: components,
    exports: components,
    imports: [ ABOUT_ROUTES ]
})
export class AboutModule {}

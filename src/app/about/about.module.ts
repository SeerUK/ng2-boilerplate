import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutRoutingModule } from "./about-routing.module";

import { AboutComponent } from "./about.component";

const components = [
    AboutComponent
];

@NgModule({
    imports: [
        AboutRoutingModule,
        CommonModule
    ],
    declarations: components,
    exports: components
})
export class AboutModule {}

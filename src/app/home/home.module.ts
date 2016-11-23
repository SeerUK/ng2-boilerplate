import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { ListComponent } from "./polymorphic-list/list.component";
import { ListItemImageComponent } from "./polymorphic-list/list-item-image.component";
import { ListItemTextComponent } from "./polymorphic-list/list-item-text.component";

const components = [
    HomeComponent,
    ListComponent,
    ListItemImageComponent,
    ListItemTextComponent,
];

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: components,
    exports: components
})
export class HomeModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HOME_ROUTES } from "./home.routes";

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
    declarations: components,
    exports: components,
    imports: [
        CommonModule,
        HOME_ROUTES
    ]
})
export class HomeModule {}

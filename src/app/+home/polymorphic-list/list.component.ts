import { Component } from "@angular/core";

import Item from "./model/item.model";
import ImageItem from "./model/image-item.model";
import TextItem from "./model/text-item.model";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html"
})
export class ListComponent {
    private _items = [
        new ImageItem(1, "http://placehold.it/200x50"),
        new TextItem(2, "Hello, World!"),
    ];

    get items(): Item[] {
        return this._items;
    }
}

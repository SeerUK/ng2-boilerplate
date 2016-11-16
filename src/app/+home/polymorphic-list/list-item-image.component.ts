import { Component, Input } from "@angular/core";

import ImageItem from "./model/image-item.model";

@Component({
    selector: "app-list-item-image",
    template: `<img [src]="image.url" alt="" />`
})
export class ListItemImageComponent {
    @Input() image: ImageItem;
}

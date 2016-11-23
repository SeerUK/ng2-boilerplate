import { Component, Input } from "@angular/core";

import TextItem from "./model/text-item.model";

@Component({
    selector: "app-list-item-text",
    template: `{{text.text}}`
})
export class ListItemTextComponent {
    @Input() text: TextItem;
}

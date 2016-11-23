import Item from "./item.model";

export default class TextItem implements Item {
    type = "text";

    constructor(
        public id: number,
        public text: string
    ) {}
}

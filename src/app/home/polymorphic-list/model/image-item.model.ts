import Item from "./item.model";

export default class ImageItem implements Item {
    type = "image";

    constructor(
        public id: number,
        public url: string
    ) {}
}

import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    styles: [],
    template: `
        <h1>
            {{title}}
        </h1>
    `
})
export class AppComponent {
    public title = "Angular 2 works!";

    constructor() {
        console.log("Hello, Elliot!");
    }
}

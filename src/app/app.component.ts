import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    styles: [],
    template: `
        <header>
            <h1>{{title}}</h1>
        </header>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    public title = "Angular 2 works!";
}

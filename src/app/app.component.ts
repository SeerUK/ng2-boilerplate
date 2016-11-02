import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    styleUrls: [ "./app.component.scss" ],
    template: `
        <header>
            <h1>{{title}}</h1>
            <a routerLink="">Home</a>
            <a routerLink="about">About</a>
        </header>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    public title = "Angular 2 works!";
}

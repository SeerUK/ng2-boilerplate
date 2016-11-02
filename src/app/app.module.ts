import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { APP_ROUTES } from "./app.routes";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        APP_ROUTES
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

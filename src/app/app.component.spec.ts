import { TestBed } from "@angular/core/testing";
import { provideRoutes } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";

describe("app.component", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule ],
            declarations: [ AppComponent ],
            providers: [ provideRoutes([]) ]
        });
    });

    it("should have an expected title", () => {
        const fixture = TestBed.createComponent(AppComponent);

        expect(fixture.componentInstance.title).toEqual("Angular 2 works!");
    });
});

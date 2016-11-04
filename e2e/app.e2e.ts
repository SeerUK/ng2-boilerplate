import { AppPage } from "./app.po";

describe("App Page", function() {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it("should display message saying app works", () => {
        page.navigateTo();
        expect(page.getHeaderTitle()).toEqual("Angular 2 works!");
    });
});

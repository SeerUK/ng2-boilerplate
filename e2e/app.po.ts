import { browser, element, by } from "protractor";

export class AppPage {
    navigateTo() {
        return browser.get("/");
    }

    getHeaderTitle() {
        return element(by.css("header h1")).getText();
    }
}

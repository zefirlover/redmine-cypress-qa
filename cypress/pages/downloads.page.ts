import { Main } from "./main.page";

class Downloads extends Main {
    get downloadTab() {
        return cy.get('a[class="download"]');
    }

    get downloadGzFileReference() {
        return cy.get('a[href="/releases/redmine-4.2.6.tar.gz"]');
    }

    checkDownloadTab() {
        this.downloadTab.should('be.visible');
    }

    clickOnDownloadTab() {
        this.downloadTab.click();
    }

    checkFileDownloadReference() {
        this.downloadGzFileReference.should('be.visible');
    }
}

export default new Downloads();
import { Page } from './page'

class Downloads extends Page {

    downloadTabSelector = 'a[href="/projects/redmine/boards"]';
    downloadGzFileReferenceSelector = 'a[href="/releases/redmine-4.2.6.tar.gz"]'

    get downloadTab() {
        return cy.get(this.downloadTabSelector);
    }

    clickOnMyAccountReference() {
        this.displayedElement(this.downloadTabSelector);
        this.downloadTab.click();
        this.displayedElement(this.downloadGzFileReferenceSelector);
    }
}

export default new Downloads();
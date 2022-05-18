import { Page } from './page'

class Forums extends Page {

    forumsTabSelector = 'a[href="/projects/redmine/boards"]';
    boardsListSelector = '[class="list boards"]'

    get forumsTab() {
        return cy.get(this.forumsTabSelector);
    }

    clickOnMyAccountReference() {
        this.displayedElement(this.forumsTabSelector);
        this.forumsTab.click();
        this.displayedElement(this.boardsListSelector);
    }
}

export default new Forums();
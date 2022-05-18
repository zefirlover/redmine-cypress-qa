import { Page } from './page'

class Forums extends Page {
    get forumsTab() {
        return cy.get('a[href="/projects/redmine/boards"]');
    }

    get boardsList() {
        return cy.get('[class="list boards"]');
    }

    checkForumsTab() {
        this.forumsTab.should('be.visible');
    }

    clickOnForumsTab() {
        this.forumsTab.click();
    }

    checkBoardsList() {
        this.boardsList.should('be.visible');
    }
}

export default new Forums();
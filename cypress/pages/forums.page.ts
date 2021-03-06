import { Main } from './main.page';

class Forums extends Main {
    get forumsTab() {
        return cy.get('a[href="/projects/redmine/boards"]');
    }

    get boardsList() {
        return cy.get('[class="list boards"]');
    }

    get openDiscussionLink() {
        return cy.get('a[href="/projects/redmine/boards/1"]');
    }

    get helpLink() {
        return cy.get('a[href="/projects/redmine/boards/2"]');
    }

    get developmentLink() {
        return cy.get('a[href="/projects/redmine/boards/4"]');
    }

    get pluginsLink() {
        return cy.get('a[href="/projects/redmine/boards/3"]');
    }

    get jobOffersLink() {
        return cy.get('a[href="/projects/redmine/boards/5"]');
    }

    visitForumsPage() {
        cy.visit(Cypress.env('forumsPage'));
    }

    clickOnForumsTab() {
        this.forumsTab.click();
    }

    clickOnOpenDiscussiosLink() {
        this.openDiscussionLink.click();
    }

    clickOnHelpLink() {
        this.helpLink.click();
    }

    clickOnDevelopmentLink() {
        this.developmentLink.click();
    }

    clickOnPluginsLink() {
        this.pluginsLink.click();
    }

    clickOnJobOffersLink() {
        this.jobOffersLink.click();
    }
}

export default new Forums();
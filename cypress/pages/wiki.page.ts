import { Main } from "./main.page";

class Wiki extends Main {
    get wikiTab() {
        return cy.get('a[href="/projects/redmine/wiki"]')
    }

    get wikiPageDiv() {
        return cy.get('[class="wiki-page"]')
    }

    visitWikiPage() {
        cy.visit('/projects/redmine/wiki');
    }

    clickOnWikiTab() {
        this.wikiTab.click();
    }
}

export default new Wiki();
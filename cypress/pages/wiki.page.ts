import { Main } from "./main.page";

class Wiki extends Main {
    get wikiTab() {
        return cy.get('a[href="/projects/redmine/wiki"]')
    }

    get wikiPageDiv() {
        return cy.get('[class="wiki-page"]')
    }

    get latestReleasesLinks() {
        return cy.get('a[href="/projects/redmine/wiki/Download"]')
    }

    get versionNumberFirst() {
        return cy.get('li ::marker')
    }

    visitWikiPage() {
        cy.visit('/projects/redmine/wiki');
    }

    checkWikiTab() {
        this.wikiTab.should('be.visible');
    }

    checkWikiPageDiv() {
        this.wikiPageDiv.should('be.visible');
    }

    checkLatestReleasesLinks() {
        this.latestReleasesLinks.should('be.visible');
    }

    clickOnWikiTab() {
        this.wikiTab.click();
    }

    clickOnLatestReleasesLink(order: number) {
        this.latestReleasesLinks.eq(order).click();
    }

    verifyLatestReleasesLink(order: number) {
        this.latestReleasesLinks.eq(order).invoke('text').then(sometext => {
            cy.log(sometext);
            this.clickOnLatestReleasesLink(order);
            this.displayedElementByText(sometext);
        })
    }
}

export default new Wiki();
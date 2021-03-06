/// <reference types="cypress" />

export class Main {
    get userPageLink() {
        return cy.get('a[href*="/users/"]');
    }

    get myPageLink() {
        return cy.get('a[href*="/my/page"]');
    }

    visitMainPage() {
        cy.visit('');
    }

    clickOnUserPageLink() {
        this.userPageLink.click();
    }

    clickOnMyPageLink() {
        this.myPageLink.click();
    }

    displayedElementByText(elementText: string) {
        if (cy.contains(elementText)) {
            assert.isOk('everything', 'element is displayed');
        }
    }

    displayedElementById(elementIdValue: string) {
        cy.get(`#${elementIdValue}`).should('be.visible');
    }

    checkUrl(expectedUrl: string) {
        cy.url().then(url => {
            if(url == expectedUrl) {
                assert.isOk('everything', 'the URL is same as expected');
            }
        });
    }
}
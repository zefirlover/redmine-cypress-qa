/// <reference types="cypress" />

export class Main {
    get userPageReference() {
        return cy.get('a[href*="/users/"]');
    }

    get myPageReference() {
        return cy.get('a[href*="/my/page"]');
    }

    visitMainPage() {
        cy.visit('');
    }

    checkUserPageReference() {
        this.userPageReference.should('be.visible');
    }

    clickOnUserPageReference() {
        this.userPageReference.click();
    }

    checkMyPageReference() {
        this.myPageReference.should('be.visible');
    }

    clickOnMyPageReference() {
        this.myPageReference.click();
    }

    displayedElementByText(elementText: string) {
        if (cy.contains(elementText)) {
            assert.isOk('everything', 'element is displayed');
        }
    }

    checkUrl(expectedUrl: string) {
        cy.url().then(url => {
            if(url == expectedUrl) {
                assert.isOk('everything', 'the URL is same as expected');
            }
        });
    }
}

export default new Main();
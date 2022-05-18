import { Page } from '../pages/page'

class Main extends Page {
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
}

export default new Main();
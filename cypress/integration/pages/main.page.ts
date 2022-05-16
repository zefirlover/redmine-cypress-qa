import { Page } from '../pages/page'

class Main extends Page {

    userPageReferenceSelector = 'a[href*="/users/"]';
    myPageReferenceSelector = 'a[href*="/my/page"]';

    get userPageReference() {
        return cy.get(this.userPageReferenceSelector);
    }

    get myPageReference() {
        return cy.get(this.myPageReferenceSelector);
    }

    visitMainPage() {
        cy.visit('');
    }

    clickOnUserPageReference() {
        this.displayedElement(this.userPageReferenceSelector);
        this.userPageReference.click();
    }

    clickOnMyPageReference() {
        this.displayedElement(this.myPageReferenceSelector);
        this.myPageReference.click();
    }
}

export default new Main();
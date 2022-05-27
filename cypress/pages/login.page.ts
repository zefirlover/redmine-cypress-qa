import { Main } from './main.page';

export class Login extends Main {
    get signInLink() {
        return cy.get('a[href="/login"]');
    }

    get usernameInput() {
        return cy.get('#username');
    }

    get passwordInput() {
        return cy.get('#password');
    }

    get loginButton() {
        return cy.get('[name="login"]');
    }

    get signOutLink() {
        return cy.get('a[href="/logout"]');
    }

    get reportedIssuesLink() {
        return cy.get('a[href*="/issues?author_id=me"]');
    }

    visitLoginPage() {
        cy.visit('login');
    }

    clickOnSignInLink() {
        this.signInLink.click();
    }

    clickOnSignInButton() {
        this.loginButton.click();
    }

    clickOnSignOutLink() {
        this.signOutLink.click();
    }

    signUp(username: string, password: string, checkTextId: string) {
        this.signInLink.should('be.visible');
        this.clickOnSignInLink();

        this.usernameInput.should('be.visible');
        this.usernameInput.type(username);
        this.usernameInput.should('have.value', username);

        this.passwordInput.should('be.visible');
        this.passwordInput.type(password);
        this.passwordInput.should('have.value', password);

        this.loginButton.should('be.visible');
        this.clickOnSignInButton();
        this.displayedElementById(checkTextId);
    }
}

export default new Login();
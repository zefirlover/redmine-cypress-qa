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

    checkSignInLink() {
        this.signInLink.should('be.visible');
    }

    clickOnSignInLink() {
        this.signInLink.click();
    }

    checkUsernameInput() {
        this.usernameInput.should('be.visible');
    }

    checkPasswordInput() {
        this.passwordInput.should('be.visible');
    }

    checkLoginButton() {
        this.loginButton.should('be.visible');
    }

    clickOnSignInButton() {
        this.loginButton.click();
    }

    checkSignOutLink() {
        this.signOutLink.should('be.visible');
    }

    clickOnSignOutLink() {
        this.signOutLink.click();
    }

    signUp(username: string, password: string, checkTextId: string) {
        this.checkSignInLink();
        this.clickOnSignInLink();

        this.checkUsernameInput();
        this.usernameInput.type(username);
        this.usernameInput.should('have.value', username);

        this.checkPasswordInput();
        this.passwordInput.type(password);
        this.passwordInput.should('have.value', password);

        this.checkLoginButton()
        this.clickOnSignInButton();
        this.displayedElementById(checkTextId);
    }

    checkPasswordInputIsEmpty() {
        this.passwordInput.should('have.value', '');
    }

    checkReportedIssuesLink() {
        this.reportedIssuesLink.should('be.visible');
    }
}

export default new Login();
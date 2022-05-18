import { Page } from '../pages/page'

class Login extends Page {
    email = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
    password = 'HuskTheBest75_';

    signInReferenceSelector = 'a[href="/login"]';
    signOutReferenceSelector = 'a[href="/logout"]';
    usernameInputSelector = '#username';
    passwordInputSelector = '#password';
    loginButtonSelector = '[name="login"]';

    get signInReference() {
        return cy.get(this.signInReferenceSelector);
    }

    get usernameInput() {
        return cy.get(this.usernameInputSelector);
    }

    get passwordInput() {
        return cy.get(this.passwordInputSelector);
    }

    get loginButton() {
        return cy.get(this.loginButtonSelector);
    }

    get signOutReference() {
        return cy.get(this.signOutReferenceSelector);
    }

    visitLoginPage() {
        cy.visit('login');
    }

    clickOnSignInReference() {
        this.displayedElement(this.signInReferenceSelector);
        this.signInReference.click();
        this.displayedElement(this.usernameInputSelector);
        this.displayedElement(this.passwordInputSelector);
    }

    clickOnSignInButton() {
        this.displayedElement(this.loginButtonSelector);
        this.loginButton.click();
    }

    clickOnSignOutReference() {
        this.displayedElement(this.signOutReferenceSelector);
        this.signOutReference.click();
    }

    signUp(username: string, password: string, checkText: string) {
        this.clickOnSignInReference();
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.clickOnSignInButton();
        this.displayedElementByText(checkText);
    }

    checkPasswordInputIsEmpty() {
        this.displayedElement(this.passwordInputSelector);
        this.passwordInput.should('have.value', '');
    }
}

export default new Login();
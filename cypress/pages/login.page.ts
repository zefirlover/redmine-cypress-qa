import { Main } from './main.page';

class Login extends Main {
    email = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
    password = 'HuskTheBest75_';

    get signInReference() {
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

    get signOutReference() {
        return cy.get('a[href="/logout"]');
    }

    visitLoginPage() {
        cy.visit('login');
    }

    checkSignInReference() {
        this.signInReference.should('be.visible');
    }

    clickOnSignInReference() {
        this.signInReference.click();
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

    checkSignOutReference() {
        this.signOutReference.should('be.visible');
    }

    clickOnSignOutReference() {
        this.signOutReference.click();
    }

    signUp(username: string, password: string, checkText: string) {
        this.checkSignInReference();
        this.clickOnSignInReference();

        this.checkUsernameInput();
        this.usernameInput.type(username);
        this.checkPasswordInput();
        this.passwordInput.type(password);

        this.checkLoginButton()
        this.clickOnSignInButton();
        this.displayedElementByText(checkText);
    }

    checkPasswordInputIsEmpty() {
        this.passwordInput.should('have.value', '');
    }
}

export default new Login();
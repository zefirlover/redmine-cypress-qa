import { Login } from "./login.page";

class MyAccount extends Login {
    get myAccountLink() {
        return cy.get('a[href="/my/account"]');
    }

    get firstNameInput() {
        return cy.get('#user_firstname');
    }

    get lastNameInput() {
        return cy.get('#user_lastname');
    }

    get emailInput() {
        return cy.get('#user_mail');
    }

    get saveButton() {
        return cy.get('[name="commit"]');
    }

    get applyButton() {
        return cy.get('[name="commit"]');
    }

    get changePasswordLink() {
        return cy.get('a[href="/my/password"]');
    }

    get passwordInput() {
        return cy.get('#password');
    }

    get newPasswordInput() {
        return cy.get('#new_password');
    }

    get newPasswordConfirmInput() {
        return cy.get('#new_password_confirmation');
    }

    visitMyAccountPage() {
        cy.visit('my/account');
    }

    visitMyPasswordPage() {
        cy.visit('my/password');
    }

    checkMyAccountLink() {
        this.myAccountLink.should('be.visible');
    }

    clickOnMyAccountLink() {
        this.myAccountLink.click();
    }

    checkFirstNameInput() {
        this.firstNameInput.should('be.visible');
    }

    checkLastNameInput() {
        this.lastNameInput.should('be.visible');
    }

    checkEmailInput() {
        this.emailInput.should('be.visible');
    }

    checkChangePasswordLink() {
        this.changePasswordLink.should('be.visible');
    }

    clickOnChangePasswordLink() {
        this.changePasswordLink.click();
    }

    checkPasswordInput() {
        this.passwordInput.should('be.visible');
    }

    checkNewPasswordConfirmInput() {
        this.newPasswordConfirmInput.should('be.visible');
    }

    updateFirstName(name: string, messageText: string) {
        this.firstNameInput.should('be.visible');
        this.firstNameInput.clear().type(name);
        this.firstNameInput.should('have.value', name);

        this.saveButton.should('be.visible');
        this.saveButton.click();

        cy.get(messageText).should('be.visible');
        this.checkFirstNameInputHaveValue(name);
    };

    checkFirstNameInputHaveValue(value: string) {
        this.firstNameInput.should('be.visible');
        this.firstNameInput.should('have.value', value);
    }

    changeUserPassword(oldPassword: string, newPassword: string, confirmPassword: string, message: string) {
        this.visitMyPasswordPage();

        this.passwordInput.should('be.visible');
        this.passwordInput.type(oldPassword);
        this.passwordInput.should('have.value', oldPassword);

        this.newPasswordInput.should('be.visible');
        this.newPasswordInput.type(newPassword);
        this.newPasswordInput.should('have.value', newPassword);

        this.newPasswordConfirmInput.should('be.visible');
        this.newPasswordConfirmInput.type(confirmPassword);
        this.newPasswordConfirmInput.should('have.value', confirmPassword);

        this.applyButton.click();
        this.checkUrl('https://www.redmine.org/my/password');
        cy.get(message).should('be.visible');
    }

    expectFirstNameIsMailslurp() {
        this.firstNameInput.should('have.value', 'Mailslurp');
    }
}

export default new MyAccount();
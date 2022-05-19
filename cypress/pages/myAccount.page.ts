import { Page } from '../pages/page'

class MyAccount extends Page {
    get myAccountReference() {
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

    get changePasswordReference() {
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

    checkMyAccountReference() {
        this.myAccountReference.should('be.visible');
    }

    clickOnMyAccountReference() {
        this.myAccountReference.click();
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

    clickOnChangePasswordReference() {
        this.changePasswordReference.should('be.visible');
        this.changePasswordReference.click();
        this.passwordInput.should('be.visible');
        this.newPasswordConfirmInput.should('be.visible');
    }

    updateFirstName(name: string, messageText: string) {
        this.firstNameInput.should('be.visible');
        this.firstNameInput.clear().type(name);
        this.saveButton.should('be.visible');
        this.saveButton.click();
        this.displayedElementByText(messageText);
        this.firstNameInput.should('have.value', name);
    };

    changeUserPassword(oldPassword: string, newPassword: string, confirmPassword: string, messageText: string) {
        this.visitMyPasswordPage();
        this.passwordInput.type(oldPassword);
        this.newPasswordInput.type(newPassword);
        this.newPasswordConfirmInput.type(confirmPassword);
        this.applyButton.click();
        this.checkUrl('https://www.redmine.org/my/password');
        this.displayedElementByText(messageText);
    }

    expectFirstNameIsMailslurp() {
        this.firstNameInput.should('have.value', 'Mailslurp');
    }
}

export default new MyAccount();
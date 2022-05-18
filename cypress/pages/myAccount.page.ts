import { Page } from '../pages/page'

class MyAccount extends Page {

    myAccountReferenceSelector = 'a[href="/my/account"]';
    firstNameInputSelector = '#user_firstname';
    lastNameInputSelector = '#user_lastname';
    emailInputSelector = '#user_mail';
    saveButtonSelector = '[name="commit"]';

    changePasswordReferenceSelector = 'a[href="/my/password"]';
    passwordInputSelector = '#password';
    newPasswordInputSelector = '#new_password';
    newPasswordConfirmInputSelector = '#new_password_confirmation';
    applyButtonSelector = '[name="commit"]';

    get myAccountReference() {
        return cy.get(this.myAccountReferenceSelector);
    }

    get firstNameInput() {
        return cy.get(this.firstNameInputSelector);
    }

    get lastNameInput() {
        return cy.get(this.lastNameInputSelector);
    }

    get emailInput() {
        return cy.get(this.emailInputSelector);
    }

    get saveButton() {
        return cy.get(this.saveButtonSelector);
    }

    get applyButton() {
        return cy.get(this.applyButtonSelector);
    }

    get changePasswordReference() {
        return cy.get(this.changePasswordReferenceSelector);
    }

    get passwordInput() {
        return cy.get(this.passwordInputSelector);
    }

    get newPasswordInput() {
        return cy.get(this.newPasswordInputSelector);
    }

    get newPasswordConfirmInput() {
        return cy.get(this.newPasswordConfirmInputSelector);
    }

    visitMyAccountPage() {
        cy.visit('my/account');
    }

    visitMyPasswordPage() {
        cy.visit('my/password');
    }

    clickOnMyAccountReference() {
        this.displayedElement(this.myAccountReferenceSelector);
        this.myAccountReference.click();
        this.displayedElement(this.firstNameInputSelector);
        this.displayedElement(this.lastNameInputSelector);
        this.displayedElement(this.emailInputSelector);
    }

    clickOnChangePasswordReference() {
        this.displayedElement(this.changePasswordReferenceSelector);
        this.changePasswordReference.click();
        this.displayedElement(this.passwordInputSelector);
        this.displayedElement(this.newPasswordInputSelector);
    }

    updateFirstName(name: string, messageText: string) {
        this.firstNameInput.clear().type(name);
        this.displayedElement(this.saveButtonSelector);
        this.saveButton.click();
        this.displayedElementByText(messageText);
        this.expectElementContainsData(this.firstNameInputSelector, name);
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
        this.expectElementContainsData(this.firstNameInputSelector, 'Mailslurp')
    }
}

export default new MyAccount();
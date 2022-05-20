/// <reference types="cypress-mailslurp" />
import Helpers from '../helpers/helper-functions';
import { Main } from './main.page';

class Register extends Main {
    get registerReference() {
        return cy.get('a[href="/account/register"]');
    }

    get loginInput() {
        return cy.get('#user_login');
    }

    get passwordInput() {
        return cy.get('#user_password');
    }

    get confirmPasswordInput() {
        return cy.get('#user_password_confirmation');
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

    get submitButton() {
        return cy.get('[name="commit"]');
    }

    visitRegisterPage() {
        cy.visit('account/register');
    }

    checkRegisterReference() {
        this.registerReference.should('be.visible');
    }

    clickOnRegisterReference() {
        this.registerReference.click();
    }

    checkLoginInput() {
        this.loginInput.should('be.visible');
    }

    checkEmailInput() {
        this.emailInput.should('be.visible');
    }

    checkPasswordInputsAreEmpty() {
        this.passwordInput.should('be.visible');
        this.confirmPasswordInput.should('be.visible');
        this.passwordInput.should('have.value', '');
        this.confirmPasswordInput.should('have.value', '');
    }

    receiveEmail(inboxId: String) {
        cy.mailslurp()
            .then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true))
            .then(email => {
                cy.log(email.body)
            })
    }

    registerNewUser(password: string, confirmPassword: string, resultMessage: string) {
        cy.mailslurp()
            .then(mailslurp => mailslurp.createInbox())
            .then(inbox => {
                this.fillData(inbox.id, password, confirmPassword);
                this.displayedElementByText(resultMessage);
            });
    }

    fillData(inboxId: string, password: string, confirmPassword: string) {
        let firstName = Helpers.makeLorem();
        let lastName = Helpers.makeLorem();

        this.checkLoginInput();
        this.loginInput.type(inboxId);
        this.loginInput.should('have.value', inboxId);
        
        this.checkEmailInput();
        this.passwordInput.type(password);
        this.passwordInput.should('have.value', password);

        this.confirmPasswordInput.should('be.visible');
        this.confirmPasswordInput.type(confirmPassword);
        this.confirmPasswordInput.should('have.value', confirmPassword);

        this.firstNameInput.should('be.visible');
        this.firstNameInput.type(firstName);
        this.firstNameInput.should('have.value', firstName);

        this.lastNameInput.should('be.visible');
        this.lastNameInput.type(lastName);
        this.lastNameInput.should('have.value', lastName);

        this.checkEmailInput();
        this.emailInput.type(`${inboxId}@mailslurp.com`);
        this.emailInput.should('have.value', `${inboxId}@mailslurp.com`)

        this.submitButton.should('be.visible');
        this.submitButton.click();
      }
}

export default new Register();

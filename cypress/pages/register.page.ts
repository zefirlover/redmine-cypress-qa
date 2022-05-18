/// <reference types="cypress-mailslurp" />
import { Page } from '../pages/page'
import helper from '../helpers/helper-functions';

class Register extends Page {

    registerReferenceSelector = 'a[href="/account/register"]';
    loginInputSelector = '#user_login';
    passwordInputSelector = '#user_password';
    confirmPasswordInputSelector = '#user_password_confirmation';
    firstNameInputSelector = '#user_firstname';
    lastNameInputSelector = '#user_lastname';
    emailInputSelector = '#user_mail';
    submitButtonSelector = '[name="commit"]';

    get registerReference() {
        return cy.get(this.registerReferenceSelector);
    }

    get loginInput() {
        return cy.get(this.loginInputSelector);
    }

    get passwordInput() {
        return cy.get(this.passwordInputSelector);
    }

    get confirmPasswordInput() {
        return cy.get(this.confirmPasswordInputSelector);
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

    get submitButton() {
        return cy.get(this.submitButtonSelector);
    }

    visitRegisterPage() {
        cy.visit('account/register');
    }

    clickOnRegisterReference() {
        this.displayedElement(this.registerReferenceSelector);
        this.registerReference.click();
        this.displayedElement(this.loginInputSelector);
        this.displayedElement(this.emailInputSelector);
    }

    checkPasswordInputsAreEmpty() {
        this.displayedElement(this.passwordInputSelector);
        this.displayedElement(this.confirmPasswordInputSelector);
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
        this.displayedElement(this.loginInputSelector);
        this.loginInput.type(inboxId);
        
        this.displayedElement(this.passwordInputSelector);
        this.passwordInput.type(password);

        this.displayedElement(this.confirmPasswordInputSelector);
        this.confirmPasswordInput.type(confirmPassword);

        this.displayedElement(this.firstNameInputSelector);
        this.firstNameInput.type(helper.makeLorem());

        this.displayedElement(this.lastNameInputSelector);
        this.lastNameInput.type(helper.makeLorem());

        this.displayedElement(this.emailInputSelector);
        this.emailInput.type(`${inboxId}@mailslurp.com`);

        this.displayedElement(this.submitButtonSelector);
        this.submitButton.click();
      }
}

export default new Register();

/// <reference types="cypress" />
/// <reference types="cypress-mailslurp" />
import page from '../pages/page';
import helper from '../helpers/helper-functions';
import mainPage from './main.page';

class Register {
    receiveEmail(inboxId: String) {
        cy.mailslurp()
            .then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true))
            .then(email => {
                assert.isDefined(email);
                const body = email.body;
                cy.log(body)
            })
    }

    registerNewUser(password: string, confirmPassword: string, resultMessage: string) {
        cy.mailslurp()
            .then(mailslurp => mailslurp.createInbox())
            .then(inbox => {
                const inboxId = inbox.id;
                helper.fillData(inboxId, password, confirmPassword);
                page.elementIsDisplayedByText(resultMessage);
            });
    }
}

export default new Register();

/// <reference types="cypress" />
import page from '../pages/page';

class Revision {
    getElementTextFromArray(className: string, order: number, elementId: string) {
        cy.get(`[class="${className}"]`).eq(order).then(text => {
            const elementText: string = text.text();
            cy.wrap(elementText).as(`revisionId`);
            cy.log(elementText);
            page.verifyRadioCheckedByName(elementId, 0);
            cy.wrap(elementText).as(`revisionId${order}`);
        })
    }
    /*
    getElementTextFromArray(className: string, order: number, elementId: string) {
        return cy.get(`[class="${className}"]`).eq(order).then(text => {
            return new Cypress.Promise<string>((resolve, reject) => {
                const elementText: string = text.text();
                resolve(elementText)
            })
        })
    }
    */
}

export default new Revision();
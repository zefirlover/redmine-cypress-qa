/// <reference types="cypress" />
import page from '../pages/page';

class Revision {
    getElementTextFromArray(className: string, order: number, elementId: string) {
        cy.get(`[class="${className}"]`).eq(order).then(text => {
            const elementText: string = text.text();
            cy.wrap(elementText).as(`revisionId`);
            cy.log(elementText);
            page.verifyRadioCheckedByName(elementId, 0);
            return cy.wrap(elementText).as(`revisionId${order}`);
        })
    }
}

export default new Revision();
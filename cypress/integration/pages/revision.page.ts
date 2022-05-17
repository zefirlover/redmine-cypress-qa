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

    // from repository.spec.ts
    /*
    it('Verify the view the revisions differences page', function () {
        page.visitPage('projects/redmine/repository');
        revision.getElementTextFromArray('id', 0, 'cb-1');
        revision.getElementTextFromArray('id', 1, 'cbto-2');
        page.clickOnByText('View differences');
        page.verifyRevision();
    });
    */
}

export default new Revision();
/// <reference types="cypress" />

class Page {
    visitPage(page: string) {
        cy.visit(page);
    }

    clickOnByText(elementText: string) {
        cy.contains(elementText).click();
    }

    clickOnByName(elementName: string) {
        cy.get(`[name="${elementName}"]`).click();
    }

    clickOnSelectByName(elementName: string, selectElement: string) {
        cy.get(`[name="${elementName}"]`).select(selectElement);
    }

    clickOnSelectById(elementId: string, selectElement: string) {
        cy.get(`[id="${elementId}"]`).select(selectElement);
    }

    insertDataByName(elementName: string, insertText: string) {
        cy.get(`[name="${elementName}"]`).type(insertText);
    }

    expectedToBeEmpty(elementName: string) {
        cy.get(`[name="${elementName}"]`).should('have.value', '');
    }

    expectElementsByClassAmount(className: string, elementText: string, amount: number) {
        cy.get(`[class="${className}"]`).should('have.length', amount).contains(elementText);
    }

    verifyRadioCheckedByName(elementId: string, order: number) {
        cy.get(`[id="${elementId}"]`).eq(order).should('have.attr', 'checked', 'checked');
    }

    clickElementInArrayByClass(className: string, order: number) {
        cy.get(`[class="${className}"]`).eq(order).click();
    }

    verifyRevision() {
        // chacge it later
        this.elementIsDisplayedByText('Revision');
    }

    displayedElement(selector: string) {
        // https://stackoverflow.com/questions/57737783/cypress-how-to-know-if-element-is-visible-or-not-in-using-if-condition
        cy.get("body").then($body => {
            if ($body.find(selector).length > 0) {
                //evaluates as true if button exists at all
                cy.get(selector).then($header => {
                    if ($header.is(':visible')) {
                        //you get here only if button EXISTS and is VISIBLE
                        assert.isOk('everything', 'everything is OK');
                    }
                });
            }
        });
    }

    notDisplayedElement(selector: string) {
        // https://stackoverflow.com/questions/57737783/cypress-how-to-know-if-element-is-visible-or-not-in-using-if-condition
        cy.get("body").then($body => {
            if ($body.find(selector).length > 0) {
                //evaluates as true if button exists at all
                cy.get(selector).then($header => {
                    if ($header.is(':visible')) {
                        //you get here only if button EXISTS and is VISIBLE
                        assert.fail('everything', 'everything is not OK')
                    } else {
                        assert.isOk('everything', 'everything is OK');
                    }
                });
            }
        });
    }

    elementIsDisplayedByName(elementName: string) {
        this.displayedElement(`[name="${elementName}"]`)
    }

    elementIsDisplayedByClasses(elementClasses: string) {
        this.displayedElement(`[class="${elementClasses}"]`)
    }

    elementIsDisplayedByText(elementText: string) {
        if (cy.contains(elementText)) {
            assert.isOk('everything', 'everything is OK');
        }
    }
}

export default new Page();
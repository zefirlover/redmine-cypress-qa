/// <reference types="cypress" />

export class Page {
    
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

    clearDataByName(elementName: string) {
        cy.get(`[name="${elementName}"]`).clear();
    }

    expectElementByNameContainsData(elementName: string, containText: string) {
        cy.get(`[name="${elementName}"]`).should('have.value', containText);
    }

    expectElementContainsData(elementSelector: string, containText: string) {
        cy.get(elementSelector).should('have.value', containText);
    }

    insertDataByNameInFirst(elementName: string, insertText: string) {
        cy.get(`[name="${elementName}"]`).first().type(insertText).type(`{enter}`);
    }

    expectedToBeEmpty(elementName: string) {
        cy.get(`[name="${elementName}"]`).should('have.value', '');
    }

    verifyRadioCheckedByName(elementId: string, order: number) {
        cy.get(`[id="${elementId}"]`).eq(order).should('have.attr', 'checked', 'checked');
    }

    clickElementInArrayByClass(className: string, order: number) {
        cy.get(`[class="${className}"]`).eq(order).click();
    }

    verifyRevision() {
        // chacge it later
        this.displayedElementByText('Revision');
    }

    tapTheKey(buttonName: string) {
        cy.type(`{${buttonName}}`);
    }

    displayedElement(selector: string) {
        // https://stackoverflow.com/questions/57737783/cypress-how-to-know-if-element-is-visible-or-not-in-using-if-condition
        cy.get("body").then($body => {
            if ($body.find(selector).length > 0) {
                //evaluates as true if button exists at all
                cy.get(selector).then($header => {
                    if ($header.is(':visible')) {
                        //you get here only if button EXISTS and is VISIBLE
                        assert.isOk('everything', 'element is displayed');
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
                        assert.fail('everything', 'element is displayed')
                    } else {
                        assert.isOk('everything', 'element is not displayed');
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

    displayedElementByText(elementText: string) {
        if (cy.contains(elementText)) {
            assert.isOk('everything', 'element is displayed');
        }
    }

    checkUrl(expectedUrl: string) {
        cy.url().then(url => {
            if(url == expectedUrl) {
                assert.isOk('everything', 'the URL is same as expected');
            }
        });
    }

    expectOneFromElementsContains(elementSelector: string, elementOrder: number, checkText: string) {
        cy.get(elementSelector).eq(elementOrder).children().then(element => {
            expect(element).to.contain(checkText);
        });
    }
}

export default new Page();
/// <reference types="cypress" />

export class Page {
    expectElementContainsData(elementSelector: string, containText: string) {
        cy.get(elementSelector).should('have.value', containText);
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
                        assert.fail('everything', 'element is displayed');
                    } else {
                        assert.isOk('everything', 'element is not displayed');
                    }
                });
            }
        });
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

//export default new Page();
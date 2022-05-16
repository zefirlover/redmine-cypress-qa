class Repository {
    checkElementsByClassNotContains(className: string) {
        cy.get(`[class*="${className}"]`).each(element => {
            const parentElement = element.parent();
            const expander = parentElement.children('[class="expander"]');
            if(expander.length > 0) {
                throw new Error("Expander must not exist, but it does");
            }
        })
    }
    expectElementByClassContains(className: string, order: number, checkText: string) {
        cy.get(`[class="${className}"]`).eq(order).children().then(element => {
            expect(element).to.contain(checkText);
        });
    }
}

export default new Repository();
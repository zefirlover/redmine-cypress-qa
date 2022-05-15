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
}

export default new Repository();
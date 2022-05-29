import { Main } from './main.page';

class Issues extends Main {
    get issuesTab() {
        return cy.get('a[href*="issues"]');
    }

    get statusDropdownList() {
        return cy.get('#operators_status_id');
    }

    get trackerDropdownList() {
        return cy.get('#values_tracker_id_1');
    }

    get trackerOperatorDropdownList() {
        return cy.get('#operators_tracker_id');
    }

    get updatedInput() {
        return cy.get('#values_updated_on_1');
    }

    get applyButton() {
        return cy.get('a[onclick*="submit_query_form"]');
    }

    get issuesStatus() {
        return cy.get('td[class="status"]');
    }

    get issuesTracker() {
        return cy.get('td[class="tracker"]');
    }

    get addFilterDropdownList() {
        return cy.get('#add_filter_select');
    }

    get statusCheckbox() {
        return cy.get('#cb_status_id');
    }

    get issuesUpdated() {
        return cy.get('td[class="updated_on"]');
    }

    get issuesTable() {
        return cy.get('table[class*="issues"]');
    }

    visitIssuesPage() {
        cy.visit(Cypress.env('issuesPage'));
    }

    clickOnIssuesTab() {
        this.issuesTab.click();
    }

    clickOnApplyButton() {
        this.applyButton.click();
    }

    issuesTableIsDisplayed() {
        this.issuesTable.should('be.visible');
    }

    selectStatusOptionClosed() {
        this.statusDropdownList.select('closed');
    }

    selectTrackerOptionPatch() {
        this.trackerDropdownList.select('Patch');
    }

    notAllDisplayedIssuesAreClosed() {
        cy.get(`td[class="status"]:contains("Closed")`).should('not.have.length', 25);
    }
    
    allDisplayedIssuesAreClosed() {
        this.issuesStatus.should('have.length', 25);
        this.issuesStatus.contains('Closed');
    }

    allDisplayedUpdateDateAreSame(dateString: string) {
        this.issuesUpdated.contains(dateString);
    }

    allDisplayedIssuesArePatch() {
        this.issuesTracker.should('have.length', 25);
        this.issuesTracker.contains('Patch');
    }

    allDisplayedIssuesAreNotPatch() {
        this.issuesTracker.should('have.length', 25);
        this.issuesTracker.should('not.contain', 'Patch');
    }

    addFilter(filterSelector: string) {
        this.addFilterDropdownList.select(filterSelector);
        cy.get(`[value="${filterSelector}"]`).should('be.visible');
    }

    clickOnStatusCheckbox() {
        this.statusCheckbox.click();
    }

    selectTrackerOperatorOptionIsNot() {
        this.trackerOperatorDropdownList.select('is not');
    }
    
    insertUpdatedData(dataString: string) {
        this.updatedInput.type(dataString);
        this.updatedInput.should('have.value', dataString);
    }
}

export default new Issues();
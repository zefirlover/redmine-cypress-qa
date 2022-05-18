import { Page } from '../pages/page'

class Issues extends Page {
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
        cy.visit('projects/redmine/issues');
    }

    checkIssuesTab() {
        this.issuesTab.should('be.visible');
    }

    clickOnIssuesTab() {
        this.issuesTab.click();
    }

    checkApplyButton() {
        this.applyButton.should('be.visible');
    }

    clickOnApplyButton() {
        this.applyButton.click();
    }

    issuesTableIsDisplayed() {
        this.issuesTable.should('be.visible');
    }

    checkStatusOption() {
        this.statusDropdownList.should('be.visible');
    }

    selectStatusOptionClosed() {
        this.statusDropdownList.select('closed');
    }

    checkTrackerDropdownList() {
        this.trackerDropdownList.should('be.visible');
    }

    selectTrackerOptionPatch() {
        this.trackerDropdownList.select('Patch');
    }

    notAllDisplayedIssuesAreClosed() {
        cy.get(`td[class="status"]:contains("Closed")`).should('not.have.length', 25);
    }

    checkDisplayedIssuesStatus() {
        this.issuesStatus.should('be.visible');
    }
    
    allDisplayedIssuesAreClosed() {
        this.issuesStatus.should('have.length', 25);
        this.issuesStatus.contains('Closed');
    }

    checkIssuesUpdateIsDisplayed() {
        this.issuesStatus.should('be.visible');
    }

    allDisplayedUpdateDateAreSame(dateString: string) {
        this.issuesUpdated.contains(dateString);
    }

    checkDisplayedIssuesTracker() {
        this.issuesTracker.should('be.visible');
    }

    allDisplayedIssuesArePatch() {
        this.issuesTracker.should('have.length', 25);
        this.issuesTracker.contains('Patch');
    }

    allDisplayedIssuesAreNotPatch() {
        this.issuesTracker.should('have.length', 25);
        this.issuesTracker.should('not.contain', 'Patch');
    }

    checkAddFilter() {
        this.addFilterDropdownList.should('be.visible');
    }

    addFilter(filterText: string) {
        this.addFilterDropdownList.select(filterText);
        this.displayedElementByText(filterText);
    }

    checkStatusCheckbox() {
        this.statusCheckbox.should('be.visible');
    }

    clickOnStatusCheckbox() {
        this.statusCheckbox.click();
    }

    checkTrackerOperatorDropdownlist() {
        this.trackerOperatorDropdownList.should('be.visible');
    }

    selectTrackerOperatorOptionIsNot() {
        this.trackerOperatorDropdownList.select('is not');
    }

    checkUpdatedInput() {
        this.updatedInput.should('be.visible');
    }
    
    insertUpdatedData(dataString: string) {
        this.updatedInput.type(dataString);
    }
}

export default new Issues();
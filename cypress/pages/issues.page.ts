import { Page } from '../pages/page'

class Issues extends Page {
    
    issuesTabSelector = 'a[href*="issues"]';

    issuesStatusSelector = 'td[class="status"]';
    issuesTrackerSelector = 'td[class="tracker"]';
    issuesUpdatedSelector = 'td[class="updated_on"]';

    addFilterSelector = '#add_filter_select';
    applyButtonSelector = 'a[onclick*="submit_query_form"]';

    statusDropdownListSelector = '#operators_status_id';
    trackerDropdownListSelector = '#values_tracker_id_1';
    trackerOperatorDropdownListSelector = '#operators_tracker_id';
    updatedInputSelector = '#values_updated_on_1';

    statusCheckboxSelector = '#cb_status_id';

    get issuesTab() {
        return cy.get(this.issuesTabSelector);
    }

    get statusDropdownList() {
        return cy.get(this.statusDropdownListSelector);
    }

    get trackerDropdownList() {
        return cy.get(this.trackerDropdownListSelector);
    }

    get trackerOperatorDropdownList() {
        return cy.get(this.trackerOperatorDropdownListSelector);
    }

    get updatedInput() {
        return cy.get(this.updatedInputSelector);
    }

    get applyButton() {
        return cy.get(this.applyButtonSelector);
    }

    get issuesStatus() {
        return cy.get(this.issuesStatusSelector);
    }

    get issuesTracker() {
        return cy.get(this.issuesTrackerSelector);
    }

    get addFilterDropdownList() {
        return cy.get(this.addFilterSelector);
    }

    get statusCheckbox() {
        return cy.get(this.statusCheckboxSelector);
    }

    get issuesUpdated() {
        return cy.get(this.issuesUpdatedSelector);
    }

    visitIssuesPage() {
        cy.visit('projects/redmine/issues');
    }

    clickOnIssuesTab() {
        this.displayedElement(this.issuesTabSelector);
        this.issuesTab.contains('Issues');
        this.issuesTab.click();
    }

    clickOnApplyButton() {
        this.displayedElement(this.applyButtonSelector);
        this.applyButton.contains('Apply');
        this.applyButton.click();
    }

    issuesTableIsDisplayed() {
        this.displayedElement('table[class*="issues"]');
    }

    selectStatusOptionClosed() {
        this.displayedElement(this.statusDropdownListSelector);
        this.statusDropdownList.select('closed');
    }

    selectTrackerOptionPatch() {
        this.displayedElement(this.trackerDropdownListSelector);
        this.trackerDropdownList.select('Patch');
    }

    notAllDisplayedIssuesAreClosed() {
        this.displayedElement(this.issuesStatusSelector);
        cy.get(`${this.issuesStatusSelector}:contains("Closed")`).should('not.have.length', 25);
    }
    
    allDisplayedIssuesAreClosed() {
        this.displayedElement(this.issuesStatusSelector);
        this.issuesStatus.should('have.length', 25);
        this.issuesStatus.contains('Closed');
    }

    allDisplayedUpdateDateAreSame(dateString: string) {
        this.displayedElement(this.issuesUpdatedSelector);
        this.issuesUpdated.contains(dateString);
    }

    allDisplayedIssuesArePatch() {
        this.displayedElement(this.issuesUpdatedSelector);
        this.issuesTracker.should('have.length', 25);
        this.issuesTracker.contains('Patch');
    }

    allDisplayedIssuesAreNotPatch() {
        this.displayedElement(this.issuesTrackerSelector);
        this.issuesTracker.should('have.length', 25);
        this.issuesTracker.should('not.contain', 'Patch');
    }

    addFilter(filterText: string) {
        this.displayedElement(this.addFilterSelector);
        this.addFilterDropdownList.select(filterText);
        this.displayedElementByText(filterText);
    }

    clickOnStatusCheckbox() {
        this.displayedElement(this.statusCheckboxSelector);
        this.statusCheckbox.click();
    }

    selectTrackerOperatorOptionIsNot() {
        this.displayedElement(this.trackerOperatorDropdownListSelector);
        this.trackerOperatorDropdownList.select('is not');
    }

    insertUpdatedData(dataString: string) {
        this.displayedElement(this.updatedInputSelector);
        this.updatedInput.type(dataString);
    }
}

export default new Issues();
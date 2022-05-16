import { Page } from '../pages/page'

class Issues extends Page {
    
    statusDropdownListSelector = '#operators_status_id';
    issuesStatusSelector = 'td[class="status"]';
    addFilterSelector = '#add_filter_select';
    issuesTabSelector = 'a[href*="issues"]';
    applyButtonSelector = 'a[onclick*="submit_query_form"]';

    get issuesTab() {
        return cy.get(this.issuesTabSelector);
    }

    get statusDropdownList() {
        return cy.get(this.statusDropdownListSelector);
    }

    get applyButton() {
        return cy.get(this.applyButtonSelector);
    }

    get issuesStatus() {
        return cy.get(this.issuesStatusSelector);
    }

    get addFilterDropdownList() {
        return cy.get(this.addFilterSelector);
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

    allDisplayedIssuesAreClosed() {
        this.displayedElement(this.issuesStatusSelector);
        this.issuesStatus.should('have.length', 25);
        this.issuesStatus.contains('Closed');
    }

    addFilter(filterText: string) {
        this.displayedElement(this.addFilterSelector);
        this.addFilterDropdownList.select(filterText);
        this.displayedElementByText(filterText);
    }
}

export default new Issues();
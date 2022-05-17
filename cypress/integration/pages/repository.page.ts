import { Page } from '../pages/page'

class Repository extends Page {

    repositoryTabSelector = 'a[href="/projects/redmine/repository"]';
    trunkFolderSelector = 'a[href="/projects/redmine/repository/show/trunk"]';
    githubFolderSelector = 'a[href="/projects/redmine/repository/show/trunk/.github"]';
    trunkFolderExpanderSelector = 'a[href*="/projects/redmine/repository/show/trunk"]';
    revisionInputSelector = '#rev';
    changesetRevisionIdSelector = '[class="id"]';

    get repositoryTab() {
        return cy.get(this.repositoryTabSelector);
    }

    get trunkFolderExpander() {
        return cy.get(this.trunkFolderExpanderSelector);
    }

    get revisionInput() {
        return cy.get(this.revisionInputSelector);
    }

    visitRepositoryPage() {
        cy.visit('projects/redmine/repository');
        this.displayedElement('#browser');
    }

    clickOnRepositoryTab() {
        this.displayedElement(this.repositoryTabSelector);
        this.repositoryTab.click();
        this.displayedElement('#browser');
    }

    clickOnTrunkFolderExpander() {
        this.displayedElement(this.trunkFolderExpanderSelector);
        this.trunkFolderExpander.click();
    }

    expanderFunctionalityTest() {
        this.displayedElement(this.trunkFolderSelector);
        this.notDisplayedElement(this.githubFolderSelector);

        this.clickOnTrunkFolderExpander();

        this.displayedElement(this.githubFolderSelector);
    }

    insertDataInRevisionFilter(insertText: string) {
        this.displayedElement(this.revisionInputSelector);
        this.revisionInput.type(insertText).type('{enter}');
    }

    checkFilesNotContainsExpander() {
        cy.get(`[class*="icon icon-file"]`).each(element => {
            let parentElement = element.parent();
            let expander = parentElement.children('[class="expander"]');
            if(expander.length > 0) {
                throw new Error("Expander must not exist, but it does");
            }
        })
    }

    expectFirstRevisionIdIs(revisionId: string) {
        this.displayedElement(this.changesetRevisionIdSelector);
        this.expectOneFromElementsContains(this.changesetRevisionIdSelector, 0, revisionId);
    }
}

export default new Repository();
import { Main } from './main.page';

class Repository extends Main {
    get repositoryTab() {
        return cy.get('a[href="/projects/redmine/repository"]');
    }

    get trunkFolderExpander() {
        return cy.get('a[href="/projects/redmine/repository/show/trunk"]');
    }

    get revisionInput() {
        return cy.get('#rev');
    }

    get entriesTable() {
        return cy.get('#browser');
    }

    get trunkFolder() {
        return cy.get('a[href="/projects/redmine/repository/show/trunk"]');
    }

    get githubFolder() {
        return cy.get('a[href="/projects/redmine/repository/show/trunk/.github"]');
    }

    get repositoryFiles() {
        return cy.get('[class*="icon icon-file"]');
    }

    get changesetRevisionId() {
        return cy.get('[class="id"]');
    }

    visitRepositoryPage() {
        cy.visit('projects/redmine/repository');
    }

    clickOnRepositoryTab() {
        this.repositoryTab.click();
    }

    clickOnTrunkFolderExpander() {
        this.trunkFolderExpander.should('be.visible');
        this.trunkFolderExpander.click();
    }

    expanderFunctionalityTest() {
        this.trunkFolder.should('be.visible');
        this.githubFolder.should('not.exist');

        this.clickOnTrunkFolderExpander();

        this.githubFolder.should('be.visible');
    }

    insertDataInRevisionFilter(insertText: string) {
        this.revisionInput.type(insertText).should('have.value', insertText).type('{enter}');
    }

    checkFilesNotContainsExpander() {
        this.repositoryFiles.each(element => {
            let parentElement = element.parent();
            let expander = parentElement.children('[class="expander"]');
            if(expander.length > 0) {
                throw new Error("Expander must not exist, but it does");
            }
        })
    }

    expectFirstRevisionIdIs(revisionId: string) {
        this.changesetRevisionId.eq(0).children().then(element => {
            expect(element).to.contain(revisionId);
        });
    }
}

export default new Repository();
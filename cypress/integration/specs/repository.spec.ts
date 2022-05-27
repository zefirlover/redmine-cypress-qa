import repositoryPage from '../../pages/repository.page';

describe('verify the repository functionality', function () {
    it('Verify the repository page', function () {
        repositoryPage.visitMainPage();
        repositoryPage.repositoryTab.should('be.visible');
        repositoryPage.clickOnRepositoryTab();
        repositoryPage.entriesTable.should('be.visible');
    });

    beforeEach(function () {
        repositoryPage.visitRepositoryPage();
    })

    it(`Verify the trunk folder's expander on a repository page`, function () {
        repositoryPage.expanderFunctionalityTest();
    });

    it('Verify the expander is places only near the folder in the trunk folder on a repository page', function () {
        repositoryPage.clickOnTrunkFolderExpander();
        repositoryPage.checkFilesNotContainsExpander();
    });

    it('Verify the revision repository filter work on a repository page', function () {
        let number = '21563';
        repositoryPage.revisionInput.should('be.visible');
        repositoryPage.insertDataInRevisionFilter(number);
        repositoryPage.displayedElementByText(` @ ${number} `);
        repositoryPage.changesetRevisionId.should('be.visible');
        repositoryPage.expectFirstRevisionIdIs(number);
    })
})
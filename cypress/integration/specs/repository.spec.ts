import repositoryPage from '../../pages/repository.page';

describe.only('verify the repository functionality', function () {
    it('Verify the repository page', function () {
        repositoryPage.visitMainPage();

        repositoryPage.checkRepositoryTab();
        repositoryPage.clickOnRepositoryTab();
        repositoryPage.checkEntriesTable();
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

        repositoryPage.checkRevisionInput();
        repositoryPage.insertDataInRevisionFilter(number);

        repositoryPage.displayedElementByText(` @ ${number} `);

        repositoryPage.checkChangesetRevisionId();
        repositoryPage.expectFirstRevisionIdIs(number);
    })
})
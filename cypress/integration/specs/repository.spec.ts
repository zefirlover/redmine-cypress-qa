import repositoryPage from '../../pages/repository.page';
import mainPage from '../../pages/main.page';

describe('verify the repository functionality', function () {
    it('Verify the repository page', function () {
        mainPage.visitMainPage();

        repositoryPage.checkRepositoryTab();
        repositoryPage.clickOnRepositoryTab();
        repositoryPage.checkEntriesTable();
    });
    it(`Verify the trunk folder's expander on a repository page`, function () {
        repositoryPage.visitRepositoryPage();
        repositoryPage.expanderFunctionalityTest();
    });
    it('Verify the expander is places only near the folder in the trunk folder on a repository page', function () {
        repositoryPage.visitRepositoryPage();
        repositoryPage.clickOnTrunkFolderExpander();
        repositoryPage.checkFilesNotContainsExpander();
    });
    it('Verify the revision repository filter work on a repository page', function () {
        let number = '21563';

        repositoryPage.visitRepositoryPage();

        repositoryPage.checkRevisionInput();
        repositoryPage.insertDataInRevisionFilter(number);

        repositoryPage.displayedElementByText(` @ ${number} `);

        repositoryPage.checkChangesetRevisionId();
        repositoryPage.expectFirstRevisionIdIs(number);
    })
})
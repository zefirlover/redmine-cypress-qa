import repository from '../../pages/repository.page';
import main from '../../pages/main.page';

describe.only('verify the repository functionality', function () {
    it('Verify the repository page', function () {
        main.visitMainPage();

        repository.checkRepositoryTab();
        repository.clickOnRepositoryTab();
        repository.checkEntriesTable();
    });
    it(`Verify the trunk folder's expander on a repository page`, function () {
        repository.visitRepositoryPage();
        repository.expanderFunctionalityTest();
    });
    it('Verify the expander is places only near the folder in the trunk folder on a repository page', function () {
        repository.visitRepositoryPage();
        repository.clickOnTrunkFolderExpander();
        repository.checkFilesNotContainsExpander();
    });
    it('Verify the revision repository filter work on a repository page', function () {
        let number = '21563';

        repository.visitRepositoryPage();
        repository.insertDataInRevisionFilter(number);
        repository.displayedElementByText(` @ ${number} `);
        repository.expectFirstRevisionIdIs(number);
    })
})
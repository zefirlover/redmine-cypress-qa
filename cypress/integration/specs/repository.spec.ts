import page from '../pages/page';
import revision from '../pages/revision.page';
import repository from '../pages/repository.page';

describe('verify the repository functionality', function () {
    it('Verify the repository page', function () {
        page.visitPage('');
        page.clickOnByText('Repository');
        page.elementIsDisplayedByClasses('list entries');
    });
    it('Verify the view the revisions differences page', function () {
        page.visitPage('projects/redmine/repository');
        revision.getElementTextFromArray('id', 0, 'cb-1');
        revision.getElementTextFromArray('id', 1, 'cbto-2');
        page.clickOnByText('View differences');
        page.verifyRevision();
    });
    it(`Verify the trunk folder's expander on a repository page`, function () {
        page.visitPage('projects/redmine/repository');
        page.elementIsDisplayedByClasses('list entries');
        page.displayedElementByText('trunk');
        page.notDisplayedElement('.github');
        page.clickElementInArrayByClass('expander', 3);
        page.displayedElementByText('.github');
    });
    it('Verify the expander is places only near the folder in the trunk folder on a repository page', function () {
        page.visitPage('projects/redmine/repository');
        page.clickElementInArrayByClass('expander', 3);
        repository.checkElementsByClassNotContains('icon icon-file');
    });
    it('Verify the revision repository filter work on a repository page', function () {
        const number = '21563';

        page.visitPage('projects/redmine/repository');
        page.elementIsDisplayedByName('rev');
        page.insertDataByNameInFirst('rev', number);
        page.displayedElementByText(` @ ${number} `);
        repository.expectElementByClassContains('id', 0, number);
    })
})
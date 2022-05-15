import login from '../pages/login.page';
import register from '../pages/register.page';
import helper from '../helpers/helper-functions';
import page from '../pages/page';
import revision from '../pages/revision.page';
import repositoryPage from '../pages/repository.page';

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
        page.elementIsDisplayedByText('trunk');
        page.notDisplayedElement('.github');
        page.clickElementInArrayByClass('expander', 3);
        page.elementIsDisplayedByText('.github');
    });
    it('Verify the expander is places only near the folder in the trunk folder on a repository page', function () {
        page.visitPage('projects/redmine/repository');
        page.clickElementInArrayByClass('expander', 3);
        repositoryPage.checkElementsByClassNotContains('icon icon-file');
    })
})
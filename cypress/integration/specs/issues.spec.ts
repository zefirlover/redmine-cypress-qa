import login from '../pages/login.page';
import register from '../pages/register.page';
import helper from '../helpers/helper-functions';
import page from '../pages/page';

describe('verifying the issues functionality', function () {
    it('Verify the issues page', function () {
        page.visitPage('');
        page.clickOnByText('Issues');
        page.elementIsDisplayedByClasses('list issues');
    })
})
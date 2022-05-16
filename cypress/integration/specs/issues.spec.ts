import main from '../pages/main.page';
import issues from '../pages/issues.page';

describe('verifying the issues functionality', function () {
    it('Verify the issues page', function () {
        main.visitMainPage();
        issues.clickOnIssuesTab();
        issues.issuesTableIsDisplayed();
    });
    it('Verify the status filter work on the issues page', function () {
        issues.visitIssuesPage();
        issues.selectStatusOptionClosed();
        issues.clickOnApplyButton();
        issues.allDisplayedIssuesAreClosed();
    });
    it('Add the tracker filter on the issues page', function () {
        issues.visitIssuesPage();
        issues.addFilter('Tracker');
    });
})
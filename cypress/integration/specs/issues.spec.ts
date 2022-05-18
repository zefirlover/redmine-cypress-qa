import main from '../../pages/main.page';
import issues from '../../pages/issues.page';

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
    it('Verify the tracker filter work on the issues page', function () {
        issues.visitIssuesPage();
        issues.addFilter('Tracker');
        issues.selectTrackerOptionPatch();
        issues.clickOnStatusCheckbox();
        issues.clickOnApplyButton();
        issues.allDisplayedIssuesArePatch();
    });
    it('Verify tracker filter and status filter can both work on the issues page', function () {
        issues.visitIssuesPage();
        issues.selectStatusOptionClosed();
        issues.addFilter('Tracker');
        issues.selectTrackerOptionPatch();
        issues.clickOnApplyButton();
        issues.allDisplayedIssuesArePatch();
        issues.allDisplayedIssuesAreClosed();
    });
    it('Verify tracker filter with "is not" operator and status filter can both work on the issues page', function () {
        issues.visitIssuesPage();
        issues.selectStatusOptionClosed();
        issues.addFilter('Tracker');
        issues.selectTrackerOptionPatch();
        issues.selectTrackerOperatorOptionIsNot();
        issues.clickOnApplyButton();
        issues.allDisplayedIssuesAreNotPatch();
        issues.allDisplayedIssuesAreClosed();
    });
    it('Verify the status filter will not work when the checkbox will be unchecked on the issues page', function () {
        issues.visitIssuesPage();
        issues.selectStatusOptionClosed();
        issues.clickOnStatusCheckbox();
        issues.clickOnApplyButton();
        issues.notAllDisplayedIssuesAreClosed();
    });
    it('Verify the update time filter work on the issues page', function () {
        let data = '2022-05-01';

        issues.visitIssuesPage();
        issues.addFilter('Updated');
        issues.insertUpdatedData(data);
        issues.clickOnApplyButton();
        issues.allDisplayedUpdateDateAreSame(data);
    })
})
import main from '../../pages/main.page';
import issues from '../../pages/issues.page';

describe('verifying the issues functionality', function () {
    it('Verify the issues page', function () {
        main.visitMainPage();
        issues.checkIssuesTab()
        issues.clickOnIssuesTab();
        issues.issuesTableIsDisplayed();
    });
    it('Verify the status filter work on the issues page', function () {
        issues.visitIssuesPage();

        issues.checkStatusOption();
        issues.selectStatusOptionClosed();

        issues.checkApplyButton();
        issues.clickOnApplyButton();

        issues.checkDisplayedIssuesStatus();
        issues.allDisplayedIssuesAreClosed();
    });
    it('Add the tracker filter on the issues page', function () {
        issues.visitIssuesPage();
        issues.checkAddFilter();
        issues.addFilter('Tracker');
    });
    it('Verify the tracker filter work on the issues page', function () {
        issues.visitIssuesPage();

        issues.checkAddFilter();
        issues.addFilter('Tracker');

        issues.checkTrackerDropdownList();
        issues.selectTrackerOptionPatch();

        issues.checkStatusCheckbox()
        issues.clickOnStatusCheckbox();

        issues.checkApplyButton();
        issues.clickOnApplyButton();

        issues.checkDisplayedIssuesTracker();
        issues.allDisplayedIssuesArePatch();
    });
    it('Verify tracker filter and status filter can both work on the issues page', function () {
        issues.visitIssuesPage();

        issues.checkStatusOption();
        issues.selectStatusOptionClosed();

        issues.checkAddFilter();
        issues.addFilter('Tracker');

        issues.checkTrackerDropdownList();
        issues.selectTrackerOptionPatch();

        issues.checkApplyButton();
        issues.clickOnApplyButton();

        issues.checkDisplayedIssuesTracker();
        issues.allDisplayedIssuesArePatch();

        issues.checkDisplayedIssuesStatus();
        issues.allDisplayedIssuesAreClosed();
    });
    it('Verify tracker filter with "is not" operator and status filter can both work on the issues page', function () {
        issues.visitIssuesPage();

        issues.checkStatusOption();
        issues.selectStatusOptionClosed();

        issues.checkAddFilter();
        issues.addFilter('Tracker');

        issues.checkTrackerDropdownList();
        issues.selectTrackerOptionPatch();

        issues.checkTrackerOperatorDropdownlist();
        issues.selectTrackerOperatorOptionIsNot();

        issues.checkApplyButton();
        issues.clickOnApplyButton();

        issues.checkDisplayedIssuesTracker();
        issues.allDisplayedIssuesAreNotPatch();

        issues.checkDisplayedIssuesStatus();
        issues.allDisplayedIssuesAreClosed();
    });
    it('Verify the status filter will not work when the checkbox will be unchecked on the issues page', function () {
        issues.visitIssuesPage();

        issues.checkStatusOption();
        issues.selectStatusOptionClosed();

        issues.checkStatusCheckbox();
        issues.clickOnStatusCheckbox();

        issues.checkApplyButton();
        issues.clickOnApplyButton();

        issues.checkDisplayedIssuesStatus();
        issues.notAllDisplayedIssuesAreClosed();
    });
    it('Verify the update time filter work on the issues page', function () {
        let data = '2022-05-01';

        issues.visitIssuesPage();

        issues.checkAddFilter();
        issues.addFilter('Updated');

        issues.checkUpdatedInput();
        issues.insertUpdatedData(data);

        issues.checkApplyButton();
        issues.clickOnApplyButton();

        issues.checkIssuesUpdateIsDisplayed();
        issues.allDisplayedUpdateDateAreSame(data);
    })
})
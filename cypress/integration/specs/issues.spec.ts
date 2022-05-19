import mainPage from '../../pages/main.page';
import issuesPage from '../../pages/issues.page';

describe('verifying the issues functionality', function () {
    it('Verify the issues page', function () {
        mainPage.visitMainPage();
        issuesPage.checkIssuesTab()
        issuesPage.clickOnIssuesTab();
        issuesPage.issuesTableIsDisplayed();
    });
    it('Verify the status filter work on the issues page', function () {
        issuesPage.visitIssuesPage();

        issuesPage.checkStatusOption();
        issuesPage.selectStatusOptionClosed();

        issuesPage.checkApplyButton();
        issuesPage.clickOnApplyButton();

        issuesPage.checkDisplayedIssuesStatus();
        issuesPage.allDisplayedIssuesAreClosed();
    });
    it('Add the tracker filter on the issues page', function () {
        issuesPage.visitIssuesPage();
        issuesPage.checkAddFilter();
        issuesPage.addFilter('Tracker');
    });
    it('Verify the tracker filter work on the issues page', function () {
        issuesPage.visitIssuesPage();

        issuesPage.checkAddFilter();
        issuesPage.addFilter('Tracker');

        issuesPage.checkTrackerDropdownList();
        issuesPage.selectTrackerOptionPatch();

        issuesPage.checkStatusCheckbox()
        issuesPage.clickOnStatusCheckbox();

        issuesPage.checkApplyButton();
        issuesPage.clickOnApplyButton();

        issuesPage.checkDisplayedIssuesTracker();
        issuesPage.allDisplayedIssuesArePatch();
    });
    it('Verify tracker filter and status filter can both work on the issues page', function () {
        issuesPage.visitIssuesPage();

        issuesPage.checkStatusOption();
        issuesPage.selectStatusOptionClosed();

        issuesPage.checkAddFilter();
        issuesPage.addFilter('Tracker');

        issuesPage.checkTrackerDropdownList();
        issuesPage.selectTrackerOptionPatch();

        issuesPage.checkApplyButton();
        issuesPage.clickOnApplyButton();

        issuesPage.checkDisplayedIssuesTracker();
        issuesPage.allDisplayedIssuesArePatch();

        issuesPage.checkDisplayedIssuesStatus();
        issuesPage.allDisplayedIssuesAreClosed();
    });
    it('Verify tracker filter with "is not" operator and status filter can both work on the issues page', function () {
        issuesPage.visitIssuesPage();

        issuesPage.checkStatusOption();
        issuesPage.selectStatusOptionClosed();

        issuesPage.checkAddFilter();
        issuesPage.addFilter('Tracker');

        issuesPage.checkTrackerDropdownList();
        issuesPage.selectTrackerOptionPatch();

        issuesPage.checkTrackerOperatorDropdownlist();
        issuesPage.selectTrackerOperatorOptionIsNot();

        issuesPage.checkApplyButton();
        issuesPage.clickOnApplyButton();

        issuesPage.checkDisplayedIssuesTracker();
        issuesPage.allDisplayedIssuesAreNotPatch();

        issuesPage.checkDisplayedIssuesStatus();
        issuesPage.allDisplayedIssuesAreClosed();
    });
    it('Verify the status filter will not work when the checkbox will be unchecked on the issues page', function () {
        issuesPage.visitIssuesPage();

        issuesPage.checkStatusOption();
        issuesPage.selectStatusOptionClosed();

        issuesPage.checkStatusCheckbox();
        issuesPage.clickOnStatusCheckbox();

        issuesPage.checkApplyButton();
        issuesPage.clickOnApplyButton();

        issuesPage.checkDisplayedIssuesStatus();
        issuesPage.notAllDisplayedIssuesAreClosed();
    });
    it('Verify the update time filter work on the issues page', function () {
        let data = '2022-05-01';

        issuesPage.visitIssuesPage();

        issuesPage.checkAddFilter();
        issuesPage.addFilter('Updated');

        issuesPage.checkUpdatedInput();
        issuesPage.insertUpdatedData(data);

        issuesPage.checkApplyButton();
        issuesPage.clickOnApplyButton();

        issuesPage.checkIssuesUpdateIsDisplayed();
        issuesPage.allDisplayedUpdateDateAreSame(data);
    })
})
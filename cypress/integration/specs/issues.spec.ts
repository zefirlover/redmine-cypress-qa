import issuesPage from '../../pages/issues.page';

describe('verifying the issues functionality', function () {
    it('Verify the issues page', function () {
        issuesPage.visitMainPage();
        issuesPage.issuesTab.should('be.visible');
        issuesPage.clickOnIssuesTab();
        issuesPage.issuesTable.should('be.visible');
    });

    beforeEach(function () {
        issuesPage.visitIssuesPage();
    });

    it('Verify the status filter work on the issues page', function () {
        issuesPage.statusDropdownList.should('be.visible');
        issuesPage.selectStatusOptionClosed();
        issuesPage.applyButton.should('be.visible');
        issuesPage.clickOnApplyButton();
        issuesPage.issuesStatus.should('be.visible');
        issuesPage.allDisplayedIssuesAreClosed();
    });

    it('Add the tracker filter on the issues page', function () {
        issuesPage.addFilterDropdownList.should('be.visible');
        issuesPage.addFilter('tracker_id');
    });

    it('Verify the tracker filter work on the issues page', function () {
        issuesPage.addFilterDropdownList.should('be.visible');
        issuesPage.addFilter('tracker_id');

        issuesPage.trackerDropdownList.should('be.visible');
        issuesPage.selectTrackerOptionPatch();

        issuesPage.statusCheckbox.should('be.visible');
        issuesPage.clickOnStatusCheckbox();

        issuesPage.applyButton.should('be.visible');
        issuesPage.clickOnApplyButton();

        issuesPage.issuesTracker.should('be.visible');
        issuesPage.allDisplayedIssuesArePatch();
    });

    it('Verify tracker filter and status filter can both work on the issues page', function () {
        issuesPage.statusDropdownList.should('be.visible');
        issuesPage.selectStatusOptionClosed();

        issuesPage.addFilterDropdownList.should('be.visible');
        issuesPage.addFilter('tracker_id');

        issuesPage.trackerDropdownList.should('be.visible');
        issuesPage.selectTrackerOptionPatch();

        issuesPage.applyButton.should('be.visible');
        issuesPage.clickOnApplyButton();

        issuesPage.issuesTracker.should('be.visible');
        issuesPage.allDisplayedIssuesArePatch();

        issuesPage.issuesStatus.should('be.visible');
        issuesPage.allDisplayedIssuesAreClosed();
    });

    it('Verify tracker filter with "is not" operator and status filter can both work on the issues page', function () {
        issuesPage.statusDropdownList.should('be.visible');
        issuesPage.selectStatusOptionClosed();

        issuesPage.addFilterDropdownList.should('be.visible');
        issuesPage.addFilter('tracker_id');

        issuesPage.trackerDropdownList.should('be.visible');
        issuesPage.selectTrackerOptionPatch();

        issuesPage.trackerOperatorDropdownList.should('be.visible');
        issuesPage.selectTrackerOperatorOptionIsNot();

        issuesPage.applyButton.should('be.visible');
        issuesPage.clickOnApplyButton();

        issuesPage.issuesTracker.should('be.visible');
        issuesPage.allDisplayedIssuesAreNotPatch();

        issuesPage.issuesStatus.should('be.visible');
        issuesPage.allDisplayedIssuesAreClosed();
    });

    it('Verify the status filter will not work when the checkbox will be unchecked on the issues page', function () {
        issuesPage.statusDropdownList.should('be.visible');
        issuesPage.selectStatusOptionClosed();

        issuesPage.statusCheckbox.should('be.visible');;
        issuesPage.clickOnStatusCheckbox();

        issuesPage.applyButton.should('be.visible');
        issuesPage.clickOnApplyButton();

        issuesPage.issuesStatus.should('be.visible');
        issuesPage.notAllDisplayedIssuesAreClosed();
    });
    
    it('Verify the update time filter work on the issues page', function () {
        let data = '2022-05-01';

        issuesPage.addFilterDropdownList.should('be.visible');
        issuesPage.addFilter('updated_on');

        issuesPage.updatedInput.should('be.visible');
        issuesPage.insertUpdatedData(data);

        issuesPage.applyButton.should('be.visible');
        issuesPage.clickOnApplyButton();

        issuesPage.issuesStatus.should('be.visible');
        issuesPage.allDisplayedUpdateDateAreSame(data);
    });
})
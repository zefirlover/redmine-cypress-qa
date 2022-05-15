import page from '../pages/page';

describe('verifying the issues functionality', function () {
    it('Verify the issues page', function () {
        page.visitPage('');
        page.clickOnByText('Issues');
        page.elementIsDisplayedByClasses('list issues');
    });
    it('Verify the status filter work on the issues page', function () {
        page.visitPage('projects/redmine/issues');
        page.elementIsDisplayedByName('op[status_id]');
        page.clickOnSelectByName('op[status_id]', 'closed');
        page.clickOnByText('Apply');
        page.expectElementsByClassAmount('status', 'Closed', 25);
    });
    it('Add the tracker filter on the issues page', function () {
        page.visitPage('projects/redmine/issues');
        page.clickOnSelectById('add_filter_select', 'Tracker');
        page.elementIsDisplayedByText('Tracker')
    });
})
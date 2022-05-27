import forumsPage from '../../pages/forums.page'

describe.only('verify the forums page functionality', function () {
    it('Verify the forums page', function () {
        forumsPage.visitMainPage();
        forumsPage.checkForumsTab();
        forumsPage.clickOnForumsTab();
        forumsPage.checkBoardsList();
    });

    it('Verify the Open discussion page', function () {
        forumsPage.visitForumsPage();
        forumsPage.checkOpenDiscussionsLink();
        forumsPage.clickOnOpenDiscussiosLink();
        forumsPage.displayedElementByText('Open discussion');
    });

    it('Verify the Help page', function () {
        forumsPage.visitForumsPage();
        forumsPage.checkHelpLink();
        forumsPage.clickOnHelpLink();
        forumsPage.displayedElementByText('Help');
    });

    it('Verify the Development page', function () {
        forumsPage.visitForumsPage();
        forumsPage.checkDevelopmentLink();
        forumsPage.clickOnDevelopmentLink();
        forumsPage.displayedElementByText('Development');
    });

    it('Verify the Plugins page', function () {
        forumsPage.visitForumsPage();
        forumsPage.checkPluginsLink();
        forumsPage.clickOnPluginsLink();
        forumsPage.displayedElementByText('Plugins');
    });
    
    it('Verify the Job offers page', function () {
        forumsPage.visitForumsPage();
        forumsPage.checkJobOffersLink();
        forumsPage.clickOnJobOffersLink();
        forumsPage.displayedElementByText('Job offers');
    });
})
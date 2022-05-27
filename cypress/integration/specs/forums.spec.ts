import forumsPage from '../../pages/forums.page'

describe('verify the forums page functionality', function () {
    it('Verify the forums page', function () {
        forumsPage.visitMainPage();
        forumsPage.forumsTab.should('be.visible');
        forumsPage.clickOnForumsTab();
        forumsPage.boardsList.should('be.visible');
    });

    it('Verify the Open discussion page', function () {
        forumsPage.visitForumsPage();
        forumsPage.openDiscussionLink.should('be.visible');
        forumsPage.clickOnOpenDiscussiosLink();
        forumsPage.displayedElementByText('Open discussion');
    });

    it('Verify the Help page', function () {
        forumsPage.visitForumsPage();
        forumsPage.helpLink.should('be.visible');
        forumsPage.clickOnHelpLink();
        forumsPage.displayedElementByText('Help');
    });

    it('Verify the Development page', function () {
        forumsPage.visitForumsPage();
        forumsPage.developmentLink.should('be.visible');
        forumsPage.clickOnDevelopmentLink();
        forumsPage.displayedElementByText('Development');
    });

    it('Verify the Plugins page', function () {
        forumsPage.visitForumsPage();
        forumsPage.pluginsLink.should('be.visible');
        forumsPage.clickOnPluginsLink();
        forumsPage.displayedElementByText('Plugins');
    });

    it('Verify the Job offers page', function () {
        forumsPage.visitForumsPage();
        forumsPage.jobOffersLink.should('be.visible');
        forumsPage.clickOnJobOffersLink();
        forumsPage.displayedElementByText('Job offers');
    });
})
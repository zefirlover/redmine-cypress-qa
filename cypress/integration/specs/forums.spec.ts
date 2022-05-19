import forumsPage from '../../pages/forums.page'

describe('verify the forums page functionality', function () {
    it('Verify the forums page', function () {
        forumsPage.visitMainPage();
        forumsPage.checkForumsTab();
        forumsPage.clickOnForumsTab();
        forumsPage.checkBoardsList();
    })
})
import forumsPage from '../../pages/forums.page'
import mainPage from '../../pages/main.page'

describe('verify the forums page functionality', function () {
    it('Verify the forums page', function () {
        mainPage.visitMainPage();
        forumsPage.checkForumsTab();
        forumsPage.clickOnForumsTab();
        forumsPage.checkBoardsList();
    })
})
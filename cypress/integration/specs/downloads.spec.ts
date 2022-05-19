import downloadsPage from '../../pages/downloads.page'
import mainPage from '../../pages/main.page'

describe('verify the downloads page functionality', function () {
    it('Verify the downloads page', function () {
        mainPage.visitMainPage();
        downloadsPage.checkDownloadTab();
        downloadsPage.clickOnDownloadTab();
        downloadsPage.checkFileDownloadReference();
    })
})
import downloadsPage from '../../pages/downloads.page'

describe('verify the downloads page functionality', function () {
    it('Verify the downloads page', function () {
        downloadsPage.visitMainPage();
        downloadsPage.checkDownloadTab();
        downloadsPage.clickOnDownloadTab();
        downloadsPage.checkFileDownloadLink();
    })
})
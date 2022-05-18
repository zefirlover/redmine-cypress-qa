import downloads from '../../pages/downloads.page'
import main from '../../pages/main.page'

describe.only('verify the downloads page functionality', function () {
    it('Verify the downloads page', function () {
        main.visitMainPage();
        downloads.checkDownloadTab();
        downloads.clickOnDownloadTab();
        downloads.checkFileDownloadReference();
    })
})
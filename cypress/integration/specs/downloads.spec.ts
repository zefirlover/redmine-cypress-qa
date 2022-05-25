import downloadsPage from '../../pages/downloads.page'

describe.only('verify the downloads page functionality', function () {
    it('Verify the downloads page', function () {
        downloadsPage.visitMainPage();
        downloadsPage.checkDownloadTab();
        downloadsPage.clickOnDownloadTab();
        downloadsPage.checkGzFileDownloadLink();
    });
    it('Verify the first download link on the Downloads page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.checkGzFileDownloadLink();
        downloadsPage.clickOnSpecificFileDownloadLink('.tar.gz', 0);
        downloadsPage.verifyDownloadedFileContains('.tar.gz');
    });
    it('Verify the second download link on the Downloads page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.checkZipFileDownloadLink();
        downloadsPage.clickOnSpecificFileDownloadLink('.zip', 0);
        downloadsPage.verifyDownloadedFileContains('.zip');
    });
    it('Verify the third download link on the Downloads page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.checkGzFileDownloadLink();
        downloadsPage.clickOnSpecificFileDownloadLink('.tar.gz', 1);
        downloadsPage.verifyDownloadedFileContains('.tar.gz');
    });
    it('Verify the forth download link on the Downloads page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.checkZipFileDownloadLink();
        downloadsPage.clickOnSpecificFileDownloadLink('.zip', 1);
        downloadsPage.verifyDownloadedFileContains('.zip');
    });
    it('Verify the github link works', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.checkGithubLink();
        downloadsPage.clickOnGithubLink();
        downloadsPage.checkGithubRepoOpen();
        downloadsPage.checkGithubMainLink();
    });
    it('Verify the subversion link works', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.checkSubversionLink();
        downloadsPage.clickOnSubversionLink();
        downloadsPage.checkSubversionRepoOpen();
        downloadsPage.checkSubversionMainLink();
    });
})
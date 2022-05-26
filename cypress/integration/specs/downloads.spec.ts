import downloadsPage from '../../pages/downloads.page'

describe('verify the downloads page functionality', function () {
    afterEach(function () {
        downloadsPage.clearDownloadsFolder();
    });

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
    it('Verify the turnkey third-party link works', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.checkTurnkeyLink();
        downloadsPage.clickOnTurnkeyLink();
        downloadsPage.checkTurnkeyPageOpen();
        downloadsPage.checkTurnkeyMainLink();
    });
    it('Verify the bitnami third-party link works', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.checkBitnamiLink();
        downloadsPage.clickOnBitnamiLink();
        downloadsPage.checkBitnamiPageOpen();
        downloadsPage.checkBitnamiMainLink();
    });
    it('Verify the third-party bundles download links are working properly', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.checkGzFileDownloadLink();
        downloadsPage.checkZipFileDownloadLink();
        
        downloadsPage.verifyFileDownload('.tar.gz', 2);
        downloadsPage.verifyFileDownload('.tar.gz', 3);
        downloadsPage.verifyFileDownload('.tar.gz', 4);
        downloadsPage.verifyFileDownload('.tar.gz', 5);

        downloadsPage.verifyFileDownload('.zip', 2);
        downloadsPage.verifyFileDownload('.zip', 3);
        downloadsPage.verifyFileDownload('.zip', 4);
        downloadsPage.verifyFileDownload('.zip', 5);
    });
    it('Verify the changelog page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.checkChangelogLink();
        downloadsPage.clickOnChangelogLink();
        downloadsPage.checkChangelogLink();
    });
    it('Verify the installation guide page opens from the downloads page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.checkRedmineInstallLink();
        downloadsPage.clickOnRedmineInstallLink();
        downloadsPage.checkRedmineInstallHeader();
    });
    it('Verify the RedmineUpgrade page opens from the downloads page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.checkRedmineUpgradeLink();
        downloadsPage.clickOnRedmineUpgradeLink();
        downloadsPage.checkRedmineUpgradeHeader();
    });
    it('Verify the older releases page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.checkOlderReleasesLink();
        downloadsPage.clickOnOlderReleasesLink();
        downloadsPage.checkZipFileDownloadLink();
    });
})
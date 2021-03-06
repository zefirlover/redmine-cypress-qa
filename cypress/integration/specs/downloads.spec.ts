import downloadsPage from '../../pages/downloads.page'

describe('verify the downloads page functionality', function () {
    afterEach(function () {
        downloadsPage.clearDownloadsFolder();
    });

    it('Verify the downloads page', function () {
        downloadsPage.visitMainPage();
        downloadsPage.downloadTab.should('be.visible');
        downloadsPage.clickOnDownloadTab();
        downloadsPage.downloadGzFileLinks.should('be.visible');
    });

    it('Verify the first download link on the Downloads page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.downloadGzFileLinks.should('be.visible');
        downloadsPage.clickOnFirstTarGzFileDownloadLink();
        downloadsPage.verifyDownloadedFileContains('.tar.gz');
    });

    it('Verify the second download link on the Downloads page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.downloadZipFileLinks.should('be.visible');
        downloadsPage.clickOnFirstZipFileDownloadLink();
        downloadsPage.verifyDownloadedFileContains('.zip');
    });

    it('Verify the third download link on the Downloads page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.downloadGzFileLinks.should('be.visible');
        downloadsPage.clickOnSecondTarGzFileDownloadLink();
        downloadsPage.verifyDownloadedFileContains('.tar.gz');
    });

    it('Verify the forth download link on the Downloads page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.downloadZipFileLinks.should('be.visible');
        downloadsPage.clickOnSecondZipFileDownloadLink();
        downloadsPage.verifyDownloadedFileContains('.zip');
    });

    it('Verify the github link works', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.githubRedirect.should('be.visible');
        downloadsPage.clickOnGithubLink();
        downloadsPage.checkGithubRepoOpen();
        downloadsPage.githubMainLink.should('be.visible');
    });

    it('Verify the subversion link works', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.subversionRedirect.should('be.visible');
        downloadsPage.clickOnSubversionLink();
        downloadsPage.checkSubversionRepoOpen();
        downloadsPage.subversionMainLink.should('be.visible');
    });

    it('Verify the turnkey third-party link works', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.turnkeyLink.should('be.visible');
        downloadsPage.clickOnTurnkeyLink();
        downloadsPage.checkTurnkeyPageOpen();
        downloadsPage.turnkeyMainLink.should('be.visible');
    });

    it('Verify the bitnami third-party link works', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.bitnamiLink.should('be.visible');
        downloadsPage.clickOnBitnamiLink();
        downloadsPage.checkBitnamiPageOpen();
        downloadsPage.bitnamiMainLink.should('be.visible');
    });

    it('Verify the third-party bundles download links are working properly', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.downloadGzFileLinks.should('be.visible');
        downloadsPage.downloadZipFileLinks.should('be.visible');
        downloadsPage.verifyFirstTarGzBundleIsDownloaded();
        downloadsPage.verifySecondTarGzBundleIsDownloaded();
        downloadsPage.verifyThirdTarGzBundleIsDownloaded();
        downloadsPage.verifyFourthTarGzBundleIsDownloaded();
        downloadsPage.verifyFirstZipBundleIsDownloaded();
        downloadsPage.verifySecondZipBundleIsDownloaded();
        downloadsPage.verifyThirdZipBundleIsDownloaded();
        downloadsPage.verifyFourthZipBundleIsDownloaded();
    });

    it('Verify the changelog page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.changelogLink.should('be.visible');
        downloadsPage.clickOnChangelogLink();
        downloadsPage.changelogLink.should('be.visible');
    });

    it('Verify the installation guide page opens from the downloads page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.redmineInstallLink.should('be.visible');
        downloadsPage.clickOnRedmineInstallLink();
        downloadsPage.redmineInstallHeader.should('exist');
    });

    it('Verify the RedmineUpgrade page opens from the downloads page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.redmineUpgradeLink.should('be.visible');
        downloadsPage.clickOnRedmineUpgradeLink();
        downloadsPage.redmineUpgradeHeader.should('exist');
    });

    it('Verify the older releases page', function () {
        downloadsPage.visitDownloadsPage();
        downloadsPage.olderReleasesLink.should('be.visible');
        downloadsPage.clickOnOlderReleasesLink();
        downloadsPage.downloadZipFileLinks.should('be.visible');
    });
})
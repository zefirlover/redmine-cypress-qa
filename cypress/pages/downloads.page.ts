import { Main } from "./main.page";

class Downloads extends Main {
    get downloadTab() {
        return cy.get('a[class="download"]');
    }

    get downloadGzFileLinks() {
        return cy.get('a[href*=".tar.gz"]');
    }

    get downloadZipFileLinks() {
        return cy.get('a[href*=".zip"]');
    }

    get githubRedirect() {
        return cy.get('a[href*="github.com"]');
    }

    get subversionRedirect() {
        return cy.get('a[href*="svn.redmine.org"]');
    }

    get subversionMainLink() {
        return cy.get('[href="http://subversion.tigris.org/"]');
    }

    get githubMainLink() {
        return cy.get('[href="https://github.com/"]');
    }

    get turnkeyLink() {
        return cy.get('[href="http://www.turnkeylinux.org/redmine"]');
    }

    get bitnamiLink() {
        return cy.get('[href="https://bitnami.com/stack/redmine"]');
    }

    get turnkeyMainLink() {
        return cy.get('[title="TurnKey GNU/Linux"]');
    }

    get bitnamiMainLink() {
        return cy.get('[alt="Bitnami by VMware logo"]');
    }

    get changelogLink() {
        return cy.get('[href*="Changelog"]').eq(1);
    }

    get redmineInstallLink() {
        return cy.get('[href="/projects/redmine/wiki/RedmineInstall"]').eq(1);
    }

    get redmineInstallHeader() {
        return cy.get('a[name="Installing-Redmine"]');
    }

    get redmineUpgradeLink() {
        return cy.get('[href="/projects/redmine/wiki/RedmineUpgrade"]');
    }

    get redmineUpgradeHeader() {
        return cy.get('a[name="Upgrading"]');
    }

    get olderReleasesLink() {
        return cy.get('a[href="/releases/"]');
    }

    visitDownloadsPage() {
        cy.visit(Cypress.env('downloadsPage'));
    }

    clickOnDownloadTab() {
        this.downloadTab.click();
    }

    clickOnGithubLink() {
        this.githubRedirect.click();
    }

    clickOnSubversionLink() {
        this.subversionRedirect.click();
    }

    clickOnTurnkeyLink() {
        this.turnkeyLink.click();
    }

    clickOnBitnamiLink() {
        this.bitnamiLink.click();
    }

    clickOnChangelogLink() {
        this.changelogLink.click();
    }

    clickOnRedmineInstallLink() {
        this.redmineInstallLink.click();
    }

    clickOnRedmineUpgradeLink() {
        this.redmineUpgradeLink.click();
    }

    clickOnOlderReleasesLink() {
        this.olderReleasesLink.click();
    }

    checkGithubRepoOpen() {
        cy.url().should('include', 'github.com/redmine/redmine');
    }

    checkSubversionRepoOpen() {
        cy.url().should('include', 'svn.redmine.org/redmine/');
    }

    checkTurnkeyPageOpen() {
        cy.url().should('include', 'https://www.turnkeylinux.org/redmine');
    }

    checkBitnamiPageOpen() {
        cy.url().should('include', 'https://bitnami.com/stack/redmine');
    }

    checkDownloadedFile(index: number) {
        // working method, deprecated by using https://github.com/elaichenkov/cy-verify-downloads
        this.downloadGzFileLinks.eq(index).invoke('text')
            .then(gzFileName => {
                cy.log(gzFileName.toString());
                cy.readFile(`cypress\\Downloads\\${gzFileName}`).should('exist');
            });
    }

    clickOnSpecificFileDownloadLink(filetype: string, index: number) {
        // https://github.com/cypress-io/cypress/issues/14857#issuecomment-785717474
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
              setTimeout(function () { doc.location.reload() }, 5000)
            })
            cy.get(`a[href*="${filetype}"]`).eq(index).click()
          })
    }

    verifyDownloadedFileContains(name: string) {
        // verifyDownload is not pure cypress command.
        // open https://github.com/elaichenkov/cy-verify-downloads for more information
        cy.verifyDownload(name, { contains: true });
    }

    clearDownloadsFolder() {
        // https://gitter.im/cypress-io/cypress?at=5fb3db76b4283c208a6e55af
        // go to Javier Sanchez Nov 17 2020 20:35 message
        cy.exec('del /q cypress\\downloads\\*', { failOnNonZeroExit: false });
    }

    verifyFileDownload(nameContains: string, linkOrder: number) {
        this.clickOnSpecificFileDownloadLink(nameContains, linkOrder);
        this.verifyDownloadedFileContains(nameContains);
        this.clearDownloadsFolder();
    }
}

export default new Downloads();
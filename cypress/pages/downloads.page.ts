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

    visitDownloadsPage() {
        cy.visit('projects/redmine/wiki/Download');
    }

    checkDownloadTab() {
        this.downloadTab.should('be.visible');
    }

    clickOnDownloadTab() {
        this.downloadTab.click();
    }

    checkGithubLink() {
        this.githubRedirect.should('be.visible');
    }

    checkSubversionLink() {
        this.subversionRedirect.should('be.visible');
    }

    clickOnGithubLink() {
        this.githubRedirect.click();
    }

    clickOnSubversionLink() {
        this.subversionRedirect.click();
    }

    checkGithubRepoOpen() {
        cy.url().should('include', 'github.com/redmine/redmine');
    }

    checkSubversionRepoOpen() {
        cy.url().should('include', 'svn.redmine.org/redmine/');
    }

    checkSubversionMainLink() {
        this.subversionMainLink.should('be.visible');
    }

    checkGithubMainLink() {
        this.githubMainLink.should('be.visible');
    }

    checkGzFileDownloadLink() {
        this.downloadGzFileLinks.should('be.visible');
    }

    checkZipFileDownloadLink() {
        this.downloadZipFileLinks.should('be.visible');
    }

    checkDownloadedFile(index: number) {
        // working method, deprecated by using https://github.com/elaichenkov/cy-verify-downloads
        this.downloadGzFileLinks.eq(index).invoke('text')
            .then(gzFileName => {
                cy.log(gzFileName.toString());
                //this.downloadGzFileLinks.eq(index).click();
                //cy.wait(5000);
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
}

export default new Downloads();
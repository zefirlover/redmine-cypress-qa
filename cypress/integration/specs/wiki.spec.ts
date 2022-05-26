import wikiPage from "../../pages/wiki.page"

describe.only('verify the wiki page functionality', function () {
    it('Verify the wiki page', function () {
        wikiPage.visitMainPage();
        wikiPage.checkWikiTab();
        wikiPage.clickOnWikiTab();
        wikiPage.checkWikiPageDiv();
    });
    it('Verify the latest releases first link works', function () {
        wikiPage.visitWikiPage();
        wikiPage.verifyLatestReleasesLink(1);
    });
    it('Verify the latest releases second link works', function () {
        wikiPage.visitWikiPage();
        wikiPage.verifyLatestReleasesLink(2);
    });
})
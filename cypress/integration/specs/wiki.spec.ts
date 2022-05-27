import wikiPage from "../../pages/wiki.page"

describe('verify the wiki page functionality', function () {
    it('Verify the wiki page', function () {
        wikiPage.visitMainPage();
        wikiPage.wikiTab.should('be.visible');
        wikiPage.clickOnWikiTab();
        wikiPage.wikiPageDiv.should('be.visible');
    });
})
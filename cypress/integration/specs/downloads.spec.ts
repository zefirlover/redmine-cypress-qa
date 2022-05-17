import downloads from '../pages/downloads.page'
import main from '../pages/main.page'

describe('verify the downloads page functionality', function () {
    it('Verify the downloads page', function () {
        main.visitMainPage();
        downloads.clickOnMyAccountReference();
    })
})
import forums from '../pages/forums.page'
import main from '../pages/main.page'

describe.only('verify the forums page functionality', function () {
    it('Verify the forums page', function () {
        main.visitMainPage();
        forums.clickOnMyAccountReference();
    })
})
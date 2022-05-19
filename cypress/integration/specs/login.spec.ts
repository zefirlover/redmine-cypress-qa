import loginPage from '../../pages/login.page';
import Helpers from '../../helpers/helper-functions';

describe('verifying the login', function () {
    const email = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
    const password = 'HuskTheBest75_';

    it('Verify the login page', function () {
        loginPage.visitMainPage();

        loginPage.checkSignInReference();
        loginPage.clickOnSignInReference();
        loginPage.checkPasswordInput();
        loginPage.checkUsernameInput();
    });
    it('Verify the user signed in', function () {
        loginPage.visitLoginPage();

        loginPage.signUp(email, password, 'loggedas');

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
    it('Verify the users page', function () {
        Helpers.verifyingUserIsLogined(email, password);

        loginPage.checkUserPageReference();
        loginPage.clickOnUserPageReference();

        loginPage.displayedElementByText('Mailslurp User');

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
    it('Verify the "My page" page', function () {
        Helpers.verifyingUserIsLogined(email, password);

        loginPage.checkMyPageReference();
        loginPage.clickOnMyPageReference();

        loginPage.checkReportedIssuesReference();

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
    it('Verify the user receive correct exception while entering wrong email or password on the sign up page', function () {
        loginPage.visitLoginPage();

        loginPage.signUp(Helpers.makeLorem(), Helpers.makeLorem(), 'flash_error');

        loginPage.checkPasswordInput();
        loginPage.checkPasswordInputIsEmpty();
    })
})
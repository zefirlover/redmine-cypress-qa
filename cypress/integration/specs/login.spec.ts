import loginPage from '../../pages/login.page';
import Helpers from '../../helpers/helper-functions';

const email = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
const password = 'HuskTheBest75_';

describe('verifying the login', function () {
    it('Verify the login page', function () {
        loginPage.visitMainPage();
        loginPage.checkSignInLink();
        loginPage.clickOnSignInLink();
        loginPage.checkPasswordInput();
        loginPage.checkUsernameInput();
    });

    it('Verify the user signed in', function () {
        loginPage.visitLoginPage();
        loginPage.signUp(email, password, 'loggedas');
        loginPage.checkSignOutLink();
    });

    it('Verify the user receive correct exception while entering wrong email or password on the sign up page', function () {
        loginPage.visitLoginPage();
        loginPage.signUp(Helpers.makeLorem(), Helpers.makeLorem(), 'flash_error');
        loginPage.checkPasswordInput();
        loginPage.checkPasswordInputIsEmpty();
    });

    it('Verify the users page', function () {
        Helpers.verifyingUserIsLogined(email, password);
        loginPage.checkUserPageLink();
        loginPage.clickOnUserPageLink();
        loginPage.displayedElementByText('Mailslurp User');
        loginPage.checkSignOutLink();
    });

    it('Verify the "My page" page', function () {
        Helpers.verifyingUserIsLogined(email, password);
        loginPage.checkMyPageLink();
        loginPage.clickOnMyPageLink();
        loginPage.checkReportedIssuesLink();
        loginPage.checkSignOutLink();
    });
});
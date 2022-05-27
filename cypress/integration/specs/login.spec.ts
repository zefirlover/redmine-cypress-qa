import loginPage from '../../pages/login.page';
import Helpers from '../../helpers/helper-functions';

const email = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
const password = 'HuskTheBest75_';

describe('verifying the login', function () {
    it('Verify the login page', function () {
        loginPage.visitMainPage();
        loginPage.signInLink.should('be.visible');
        loginPage.clickOnSignInLink();
        loginPage.passwordInput.should('be.visible');
        loginPage.usernameInput.should('be.visible');
    });

    it('Verify the user signed in', function () {
        loginPage.visitLoginPage();
        loginPage.signUp(email, password, 'loggedas');
        loginPage.signOutLink.should('be.visible');
    });

    it('Verify the user receive correct exception while entering wrong email or password on the sign up page', function () {
        loginPage.visitLoginPage();
        loginPage.signUp(Helpers.makeLorem(), Helpers.makeLorem(), 'flash_error');
        loginPage.passwordInput.should('be.visible');
        loginPage.passwordInput.should('have.value', '');
    });

    it('Verify the users page', function () {
        Helpers.verifyingUserIsLogined(email, password);
        loginPage.userPageLink.should('be.visible');
        loginPage.clickOnUserPageLink();
        loginPage.displayedElementByText('Mailslurp User');
        loginPage.signOutLink.should('be.visible');
    });

    it('Verify the "My page" page', function () {
        Helpers.verifyingUserIsLogined(email, password);
        loginPage.myPageLink.should('be.visible');
        loginPage.clickOnMyPageLink();
        loginPage.reportedIssuesLink.should('be.visible');
        loginPage.signOutLink.should('be.visible');
    });
});
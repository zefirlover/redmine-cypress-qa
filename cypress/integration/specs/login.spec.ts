import mainPage from '../../pages/main.page';
import loginPage from '../../pages/login.page';
import helperFunctions from '../../helpers/helper-functions';

describe('verifying the login', function () {
    const email = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
    const password = 'HuskTheBest75_';

    it('Verify the login page', function () {
        mainPage.visitMainPage();

        loginPage.checkSignInReference();
        loginPage.clickOnSignInReference();
        loginPage.checkPasswordInput();
        loginPage.checkUsernameInput();
    });
    it('Verify the user signed in', function () {
        loginPage.visitLoginPage();

        loginPage.signUp(email, password, 'Logged in as');

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
    it('Verify the users page', function () {
        helperFunctions.verifyingUserIsLogined(email, password);

        mainPage.checkUserPageReference();
        mainPage.clickOnUserPageReference();

        loginPage.displayedElementByText('Mailslurp User');

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
    it('Verify the "My page" page', function () {
        helperFunctions.verifyingUserIsLogined(email, password);

        mainPage.clickOnMyPageReference();

        loginPage.displayedElementByText('Reported issues');

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
    it('Verify the user receive correct exception while entering wrong email or password on the sign up page', function () {
        loginPage.visitLoginPage();

        loginPage.signUp(helperFunctions.makeLorem(), helperFunctions.makeLorem(), 'Invalid user or password');

        loginPage.checkPasswordInput();
        loginPage.checkPasswordInputIsEmpty();
    })
})
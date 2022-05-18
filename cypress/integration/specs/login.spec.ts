import main from '../pages/main.page';
import login from '../pages/login.page';
import helper from '../../helpers/helper-functions';

describe('verifying the login', function () {
    const email = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
    const password = 'HuskTheBest75_';

    it('Verify the login page', function () {
        main.visitMainPage();
        login.clickOnSignInReference();
    });
    it('Verify the user signed in', function () {
        login.visitLoginPage();
        login.signUp(email, password, 'Logged in as');
        login.clickOnSignOutReference();
    });
    it('Verify the users page', function () {
        helper.verifyingUserIsLogined(email, password);
        main.clickOnUserPageReference();
        login.displayedElementByText('Mailslurp User');
        login.clickOnSignOutReference();
    });
    it('Verify the "My page" page', function () {
        helper.verifyingUserIsLogined(email, password);
        main.clickOnMyPageReference();
        login.displayedElementByText('Reported issues');
        login.clickOnSignOutReference();
    });
    it('Verify the user receive correct exception while entering wrong email or password on the sign up page', function () {
        login.visitLoginPage();
        login.signUp(helper.makeLorem(), helper.makeLorem(), 'Invalid user or password');
        login.checkPasswordInputIsEmpty();
    })
})
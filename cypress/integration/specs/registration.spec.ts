import registerPage from '../../pages/register.page';
import Helpers from '../../helpers/helper-functions';

describe('verifying the registration', function () {
    it('Verify the registration page', function () {
        registerPage.visitMainPage();

        registerPage.checkRegisterLink();
        registerPage.clickOnRegisterLink();
        registerPage.checkLoginInput();
        registerPage.checkEmailInput();
    });
    it('Verify the user registration', function () {
        let password = Helpers.makeLorem();
        let resultMessage = 'Account was successfully created.'

        registerPage.visitRegisterPage();
        registerPage.registerNewUser(password, password, resultMessage);
    });
    it('Verify the user receive correct exception while entering wrong confirmation password on the register page', function () {
        let password = "HuskTheBest75_";
        let confirm_password = "HuskTheBest75";
        let resultMessage = "Password doesn't match confirmation"
        
        registerPage.visitRegisterPage();
        registerPage.registerNewUser(password, confirm_password, resultMessage);
        registerPage.checkPasswordInputsAreEmpty();
    });
    it('Verify the user receive correct exception while entering email that already been taken on the register page', function () {
        let password = Helpers.makeLorem();
        let email = '299c0a41-190e-4533-891b-b333b9f37e51';

        registerPage.visitRegisterPage();
        registerPage.fillData(email, password, password);
        registerPage.displayedElementById('errorExplanation');
        registerPage.checkPasswordInputsAreEmpty();
    });
})
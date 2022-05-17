import register from '../pages/register.page';
import helper from '../helpers/helper-functions';
import main from '../pages/main.page';

describe('verifying the registration', function () {
    it('Verify the registration page', function () {
        main.visitMainPage();
        register.clickOnRegisterReference();
    });
    it('Verify the user registration', function () {
        let password = helper.makeLorem();
        let resultMessage = 'Account was successfully created.'

        register.visitRegisterPage();
        register.registerNewUser(password, password, resultMessage);
    });
    it('Verify the user receive correct exception while entering wrong confirmation password on the register page', function () {
        let password = "HuskTheBest75_";
        let confirm_password = "HuskTheBest75";
        let resultMessage = "Password doesn't match confirmation"
        
        register.visitRegisterPage();
        register.registerNewUser(password, confirm_password, resultMessage);
        register.checkPasswordInputsAreEmpty();
    });
    it('Verify the user receive correct exception while entering email that already been taken on the register page', function () {
        let password = helper.makeLorem();
        let email = '299c0a41-190e-4533-891b-b333b9f37e51';

        register.visitRegisterPage();
        register.fillData(email, password, password);
        register.displayedElementByText('Email has already been taken');
        register.checkPasswordInputsAreEmpty();
    });
})
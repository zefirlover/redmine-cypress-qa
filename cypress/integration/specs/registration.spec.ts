import registerPage from '../../pages/register.page';
import Helpers from '../../helpers/helper-functions';

describe('verifying the registration', function () {
    const randomPassword = Helpers.makeLorem();
    const accountWasCreatedMsg = 'Account was successfully created.';
    const existedEmailId = '7e6e7f17-83d7-4f2c-aed9-6d3d0fbd4852';
    const password = "HuskTheBest75_";
    const confirmPassword = "HuskTheBest75";
    const passwordDoesntMatchMsg = "Password doesn't match confirmation";

    it('Verify the registration page', function () {
        registerPage.visitMainPage();
        registerPage.registerLink.should('be.visible');
        registerPage.clickOnRegisterLink();
        registerPage.loginInput.should('be.visible');
        registerPage.emailInput.should('be.visible');
    });

    beforeEach(function () {
        registerPage.visitRegisterPage();
    });

    it('Verify the user registration', function () {
        registerPage.registerNewUser(randomPassword, randomPassword, accountWasCreatedMsg);
    });

    it('Verify the user receive correct exception while entering wrong confirmation password on the register page', function () {
        registerPage.registerNewUser(password, confirmPassword, passwordDoesntMatchMsg);
        registerPage.passwordInput.should('be.visible');
        registerPage.confirmPasswordInput.should('be.visible');
        registerPage.passwordInput.should('have.value', '');
        registerPage.confirmPasswordInput.should('have.value', '');
    });

    it('Verify the user receive correct exception while entering email that already been taken on the register page', function () {
        registerPage.fillData(existedEmailId, randomPassword, randomPassword);
        registerPage.displayedElementById('errorExplanation');
        registerPage.passwordInput.should('be.visible');
        registerPage.confirmPasswordInput.should('be.visible');
        registerPage.passwordInput.should('have.value', '');
        registerPage.confirmPasswordInput.should('have.value', '');
    });
})
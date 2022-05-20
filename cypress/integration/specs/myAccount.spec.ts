import myAccountPage from '../../pages/myAccount.page';
import Helpers from '../../helpers/helper-functions';

describe('verify the my account page functionality', function () {
    const email = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
    const password = 'HuskTheBest75_';
    const wrongPassword = 'Husk';
    const newPassword = 'HuskTheBest75';
    const confirmPassword = 'Husk';

    beforeEach(function () {
        Helpers.verifyingUserIsLogined(email, password);
    });

    afterEach(function () {
        myAccountPage.checkSignOutLink();
    })

    it('Verify the My account page', function () {
        myAccountPage.checkMyAccountLink();
        myAccountPage.clickOnMyAccountLink();
        myAccountPage.checkFirstNameInput();
        myAccountPage.checkLastNameInput();
        myAccountPage.checkEmailInput();
    });
    it(`Update the user's first name`, function () {
        myAccountPage.visitMyAccountPage();

        myAccountPage.updateFirstName('Casual', 'flash_notice');
        myAccountPage.checkMyAccountLink();
        myAccountPage.clickOnMyAccountLink();
        myAccountPage.checkFirstNameInputHaveValue('Casual');

        myAccountPage.updateFirstName('Mailslurp', 'flash_notice');
        myAccountPage.checkMyAccountLink();
        myAccountPage.clickOnMyAccountLink();
        myAccountPage.checkFirstNameInputHaveValue('Mailslurp');
    });
    it('Verify the Change password page', function () {
        myAccountPage.visitMyAccountPage();

        myAccountPage.checkChangePasswordLink();
        myAccountPage.clickOnChangePasswordLink();
        myAccountPage.checkPasswordInput();
        myAccountPage.checkNewPasswordConfirmInput();
    });
    it(`Update the user's password`, function () {
        myAccountPage.changeUserPassword(password, newPassword, newPassword, 'flash_notice');
        myAccountPage.verifyTheNewPasswordWorks(email, newPassword);

        myAccountPage.changeUserPassword(newPassword, password, password, 'flash_notice');
        myAccountPage.verifyTheNewPasswordWorks(email, password);
    });
    it(`Verify the updated user's first name can not be blank`, function () {
        myAccountPage.visitMyAccountPage();

        myAccountPage.updateFirstName(' ', 'errorExplanation');

        myAccountPage.checkMyAccountLink();
        myAccountPage.clickOnMyAccountLink();
        myAccountPage.checkFirstNameInput();
        myAccountPage.checkLastNameInput();
        myAccountPage.checkEmailInput();

        myAccountPage.checkFirstNameInputHaveValue('Mailslurp');
    });
    it(`Verify the updated user's first name can not contain only spaces`, function () {
        myAccountPage.visitMyAccountPage();

        myAccountPage.updateFirstName('          ', 'errorExplanation');

        myAccountPage.checkMyAccountLink();
        myAccountPage.clickOnMyAccountLink();
        myAccountPage.checkFirstNameInput();
        myAccountPage.checkLastNameInput();
        myAccountPage.checkEmailInput();

        myAccountPage.checkFirstNameInputHaveValue('Mailslurp');
    });
    it('Verify the wrong old password denied the attempt to change the password', function () {
        myAccountPage.visitMyPasswordPage();

        myAccountPage.changeUserPassword(wrongPassword, newPassword, newPassword, 'flash_error');
        myAccountPage.changeUserPassword(newPassword, password, password, 'flash_error');
    });
    it('Verify the wrong confirmation password denied the attempt to change the password', function () {
        myAccountPage.visitMyPasswordPage();

        myAccountPage.changeUserPassword(password, newPassword, confirmPassword, 'errorExplanation');
        myAccountPage.changeUserPassword(newPassword, password, password, 'flash_error');
    });
})
import myAccountPage from '../../pages/myAccount.page';
import Helpers from '../../helpers/helper-functions';

describe('verify the my account page functionality', function () {
    const email = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
    const password = 'HuskTheBest75_';
    const wrongPassword = 'Husk';
    const newPassword = 'HuskTheBest75';
    const confirmPassword = 'Husk';

    const userUpdateSuccessMsg = 'Account was successfully updated';
    const firstNameCantBeBlankMsg = `First name can't be blank`;
    
    it('Verify the My account page', function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.checkMyAccountLink();
        myAccountPage.clickOnMyAccountLink();
        myAccountPage.checkFirstNameInput();
        myAccountPage.checkLastNameInput();
        myAccountPage.checkEmailInput();

        myAccountPage.checkSignOutLink();
        myAccountPage.clickOnSignOutLink();
    });
    it(`Update the user's first name`, function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.visitMyAccountPage();

        myAccountPage.updateFirstName('Casual', userUpdateSuccessMsg);
        myAccountPage.updateFirstName('Mailslurp', userUpdateSuccessMsg);

        myAccountPage.checkSignOutLink();
        myAccountPage.clickOnSignOutLink();
    });
    it('Verify the Change password page', function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.visitMyAccountPage();

        myAccountPage.checkChangePasswordLink();
        myAccountPage.clickOnChangePasswordLink();
        myAccountPage.checkPasswordInput();
        myAccountPage.checkNewPasswordConfirmInput();

        myAccountPage.checkSignOutLink();
        myAccountPage.clickOnSignOutLink();
    });
    it(`Update the user's password`, function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.changeUserPassword(password, newPassword, newPassword, '#flash_notice');
        myAccountPage.changeUserPassword(newPassword, password, password, '#flash_notice');

        myAccountPage.checkSignOutLink();
        myAccountPage.clickOnSignOutLink();
    });
    it(`Verify the updated user's first name can not be blank`, function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.visitMyAccountPage();

        myAccountPage.updateFirstName(' ', firstNameCantBeBlankMsg);

        myAccountPage.checkMyAccountLink();
        myAccountPage.clickOnMyAccountLink();
        myAccountPage.checkFirstNameInput();
        myAccountPage.checkLastNameInput();
        myAccountPage.checkEmailInput();

        myAccountPage.expectFirstNameIsMailslurp();

        myAccountPage.checkSignOutLink();
        myAccountPage.clickOnSignOutLink();
    });
    it(`Verify the updated user's first name can not contain only spaces`, function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.visitMyAccountPage();

        myAccountPage.updateFirstName('          ', firstNameCantBeBlankMsg);

        myAccountPage.checkMyAccountLink();
        myAccountPage.clickOnMyAccountLink();
        myAccountPage.checkFirstNameInput();
        myAccountPage.checkLastNameInput();
        myAccountPage.checkEmailInput();

        myAccountPage.expectFirstNameIsMailslurp();

        myAccountPage.checkSignOutLink();
        myAccountPage.clickOnSignOutLink();
    });
    it('Verify the wrong old password denied the attempt to change the password', function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.visitMyPasswordPage();

        myAccountPage.changeUserPassword(wrongPassword, newPassword, newPassword, '#flash_error');
        myAccountPage.changeUserPassword(newPassword, password, password, '#flash_error');

        myAccountPage.checkSignOutLink();
        myAccountPage.clickOnSignOutLink();
    });
    it('Verify the wrong confirmation password denied the attempt to change the password', function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.visitMyPasswordPage();

        myAccountPage.changeUserPassword(password, newPassword, confirmPassword, '#errorExplanation');
        myAccountPage.changeUserPassword(newPassword, password, password, '#flash_error');

        myAccountPage.checkSignOutLink();
        myAccountPage.clickOnSignOutLink();
    });
})
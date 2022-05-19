import loginPage from '../../pages/login.page';
import myAccountPage from '../../pages/myAccount.page';
import Helpers from '../../helpers/helper-functions';

describe('verify the my account page functionality', function () {
    const email = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
    const password = 'HuskTheBest75_';
    const wrongPassword = 'Husk';
    const newPassword = 'HuskTheBest75';
    const confirmPassword = 'Husk';

    const userUpdateSuccessMsg = 'Account was successfully updated';
    const passwordUpdateSuccessMsg = 'Password was successfully updated';
    const firstNameCantBeBlankMsg = `First name can't be blank`;
    const wrongPasswordMsg = 'Wrong password';
    const wrongConfirmationMsg = `Password doesn't match confirmation`;
    
    it('Verify the My account page', function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.checkMyAccountReference();
        myAccountPage.clickOnMyAccountReference();
        myAccountPage.checkFirstNameInput();
        myAccountPage.checkLastNameInput();
        myAccountPage.checkEmailInput();

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
    it(`Update the user's first name`, function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.visitMyAccountPage();

        myAccountPage.updateFirstName('Casual', userUpdateSuccessMsg);
        myAccountPage.updateFirstName('Mailslurp', userUpdateSuccessMsg);

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
    it('Verify the Change password page', function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.visitMyAccountPage();

        myAccountPage.checkChangePasswordReference();
        myAccountPage.clickOnChangePasswordReference();
        myAccountPage.checkPasswordInput();
        myAccountPage.checkNewPasswordConfirmInput();

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
    it(`Update the user's password`, function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.changeUserPassword(password, newPassword, newPassword, passwordUpdateSuccessMsg);
        myAccountPage.changeUserPassword(newPassword, password, password, passwordUpdateSuccessMsg);

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
    it(`Verify the updated user's first name can not be blank`, function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.visitMyAccountPage();

        myAccountPage.updateFirstName(' ', firstNameCantBeBlankMsg);

        myAccountPage.checkMyAccountReference();
        myAccountPage.clickOnMyAccountReference();
        myAccountPage.checkFirstNameInput();
        myAccountPage.checkLastNameInput();
        myAccountPage.checkEmailInput();

        myAccountPage.expectFirstNameIsMailslurp();

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
    it(`Verify the updated user's first name can not contain only spaces`, function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.visitMyAccountPage();

        myAccountPage.updateFirstName('          ', firstNameCantBeBlankMsg);

        myAccountPage.checkMyAccountReference();
        myAccountPage.clickOnMyAccountReference();
        myAccountPage.checkFirstNameInput();
        myAccountPage.checkLastNameInput();
        myAccountPage.checkEmailInput();

        myAccountPage.expectFirstNameIsMailslurp();

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
    it('Verify the wrong old password denied the attempt to change the password', function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.visitMyPasswordPage();

        myAccountPage.changeUserPassword(wrongPassword, newPassword, newPassword, wrongPasswordMsg);
        myAccountPage.changeUserPassword(newPassword, password, password, wrongPasswordMsg);

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
    it('Verify the wrong confirmation password denied the attempt to change the password', function () {
        Helpers.verifyingUserIsLogined(email, password);

        myAccountPage.visitMyPasswordPage();

        myAccountPage.changeUserPassword(password, newPassword, confirmPassword, wrongConfirmationMsg);
        myAccountPage.changeUserPassword(newPassword, password, password, wrongPasswordMsg);

        loginPage.checkSignOutReference();
        loginPage.clickOnSignOutReference();
    });
})
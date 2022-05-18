import login from '../../pages/login.page';
import myAccount from '../../pages/myAccount.page';
import helper from '../../helpers/helper-functions';

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
        helper.verifyingUserIsLogined(email, password);

        myAccount.checkMyAccountReference();
        myAccount.clickOnMyAccountReference();
        myAccount.checkFirstNameInput();
        myAccount.checkLastNameInput();
        myAccount.checkEmailInput();

        login.checkSignOutReference();
        login.clickOnSignOutReference();
    });
    it(`Update the user's first name`, function () {
        helper.verifyingUserIsLogined(email, password);

        myAccount.visitMyAccountPage();

        myAccount.updateFirstName('Casual', userUpdateSuccessMsg);
        myAccount.updateFirstName('Mailslurp', userUpdateSuccessMsg);

        login.checkSignOutReference();
        login.clickOnSignOutReference();
    });
    it('Verify the Change password page', function () {
        helper.verifyingUserIsLogined(email, password);

        myAccount.visitMyAccountPage();
        myAccount.clickOnChangePasswordReference();

        login.checkSignOutReference();
        login.clickOnSignOutReference();
    });
    it(`Update the user's password`, function () {
        helper.verifyingUserIsLogined(email, password);

        myAccount.changeUserPassword(password, newPassword, newPassword, passwordUpdateSuccessMsg);
        myAccount.changeUserPassword(newPassword, password, password, passwordUpdateSuccessMsg);

        login.checkSignOutReference();
        login.clickOnSignOutReference();
    });
    it(`Verify the updated user's first name can not be blank`, function () {
        helper.verifyingUserIsLogined(email, password);

        myAccount.visitMyAccountPage();

        myAccount.updateFirstName(' ', firstNameCantBeBlankMsg);

        myAccount.checkMyAccountReference();
        myAccount.clickOnMyAccountReference();
        myAccount.checkFirstNameInput();
        myAccount.checkLastNameInput();
        myAccount.checkEmailInput();

        myAccount.expectFirstNameIsMailslurp();

        login.checkSignOutReference();
        login.clickOnSignOutReference();
    });
    it(`Verify the updated user's first name can not contain only spaces`, function () {
        helper.verifyingUserIsLogined(email, password);

        myAccount.visitMyAccountPage();

        myAccount.updateFirstName('          ', firstNameCantBeBlankMsg);

        myAccount.checkMyAccountReference();
        myAccount.clickOnMyAccountReference();
        myAccount.checkFirstNameInput();
        myAccount.checkLastNameInput();
        myAccount.checkEmailInput();

        myAccount.expectFirstNameIsMailslurp();

        login.checkSignOutReference();
        login.clickOnSignOutReference();
    });
    it('Verify the wrong old password denied the attempt to change the password', function () {
        helper.verifyingUserIsLogined(email, password);

        myAccount.visitMyPasswordPage();

        myAccount.changeUserPassword(wrongPassword, newPassword, newPassword, wrongPasswordMsg);
        myAccount.changeUserPassword(newPassword, password, password, wrongPasswordMsg);

        login.checkSignOutReference();
        login.clickOnSignOutReference();
    });
    it('Verify the wrong confirmation password denied the attempt to change the password', function () {
        helper.verifyingUserIsLogined(email, password);

        myAccount.visitMyPasswordPage();

        myAccount.changeUserPassword(password, newPassword, confirmPassword, wrongConfirmationMsg);
        myAccount.changeUserPassword(newPassword, password, password, wrongPasswordMsg);

        login.checkSignOutReference();
        login.clickOnSignOutReference();
    });
})
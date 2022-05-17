import login from '../pages/login.page';
import myAccount from '../pages/myAccount.page';
import main from '../pages/main.page';

describe('verify the my account page functionality', function () {
    const email = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
    const password = 'HuskTheBest75_';
    const newPassword = 'HuskTheBest75';

    const userUpdateSuccessMsg = 'Account was successfully updated';
    const passwordUpdateSuccessMsg = 'Password was successfully updated';
    
    it('Verify the My account page', function () {
        main.visitMainPage();
        login.signUp(email, password, 'Logged in as');
        myAccount.clickOnMyAccountReference();
        login.clickOnSignOutReference();
    });
    it(`Update the user's first name`, function () {
        main.visitMainPage();
        login.signUp(email, password, 'Logged in as');
        myAccount.visitMyAccountPage();
        myAccount.updateFirstName('Casual', userUpdateSuccessMsg);
        myAccount.updateFirstName('Mailslurp', userUpdateSuccessMsg);
        login.clickOnSignOutReference();
    });
    it('Verify the Change password page', function () {
        main.visitMainPage();
        login.signUp(email, password, 'Logged in as');
        myAccount.visitMyAccountPage();
        myAccount.clickOnChangePasswordReference();
        login.clickOnSignOutReference();
    });
    it(`Update the user's password`, function () {
        main.visitMainPage();
        login.signUp(email, password, 'Logged in as');
        myAccount.changeUserPassword(password, newPassword, passwordUpdateSuccessMsg);
        myAccount.changeUserPassword(newPassword, password, passwordUpdateSuccessMsg);
        login.clickOnSignOutReference();
    })
})
import login from '../pages/login.page';
import register from '../pages/register.page';
import helper from '../helpers/helper-functions';
import page from '../pages/page';
import revision from '../pages/revision.page';
import repository from '../pages/repository.page';
import myAccount from '../pages/myAccount.page';

describe.only('verify the my account page functionality', function () {
    const email: string = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
    const password: string = 'HuskTheBest75_';
    const newPassword: string = 'HuskTheBest75';
    
    it('Verify the My account page', function () {
        page.visitPage('');
        login.signUp(email, password, 'Logged in as');
        page.clickOnByText('My account');
        page.elementIsDisplayedByName('user[firstname]');
        page.elementIsDisplayedByName('user[lastname]');
        page.elementIsDisplayedByName('user[mail]');
        page.clickOnByText('Sign out');
    });
    it(`Update the user's first name`, function () {
        page.visitPage('');
        login.signUp(email, password, 'Logged in as');
        page.visitPage('my/account');
        myAccount.changeFirstNameInUpdate('Casual', 'Account was successfully updated');
        page.expectElementByNameContainsData('user[firstname]', 'Casual');

        myAccount.changeFirstNameInUpdate('Mailslurp', 'Account was successfully updated');
        page.clickOnByText('Sign out');
    });
    it('Verify the Change password page', function () {
        page.visitPage('');
        login.signUp(email, password, 'Logged in as');
        page.visitPage('my/account');
        page.clickOnByText('Change password');
        page.elementIsDisplayedByName('password');
        page.elementIsDisplayedByName('new_password');
        page.clickOnByText('Sign out');
    });
    it(`Update the user's password`, function () {
        page.visitPage('');
        login.signUp(email, password, 'Logged in as');
        page.visitPage('my/password');
        myAccount.changeUserPassword(password, newPassword, 'Password was successfully updated');
        page.visitPage('my/password');
        myAccount.changeUserPassword(newPassword, password, 'Password was successfully updated');
        page.clickOnByText('Sign out');
    })
})
import register from '../pages/register.page';
import helper from '../helpers/helper-functions';
import page from '../pages/page';

describe('verifying the registration', function () {
    it('Verify the registration page', function () {
        page.visitPage('');
        page.clickOnByText('Register');
        page.elementIsDisplayedByName('user[login]');
        page.elementIsDisplayedByName('user[mail]');
    });
    it('Verify the user registration', function () {
        const password = helper.makeLorem();
        const resultMessage: string = 'Account was successfully created.'

        page.visitPage('account/register');
        register.registerNewUser(password, password, resultMessage);
    });
    it('Verify the user receive correct exception while entering wrong confirmation passrword on the register page', function () {
        const password: string = "HuskTheBest75_";
        const confirm_password: string = "HuskTheBest75";
        const resultMessage: string = "Password doesn't match confirmation"
        
        page.visitPage('account/register');
        register.registerNewUser(password, confirm_password, resultMessage);
        page.expectedToBeEmpty('user[password]');
        page.expectedToBeEmpty('user[password_confirmation]');
    });
    it('Verify the user receive correct exception while entering email that already been taken on the register page', function () {
        const password = helper.makeLorem();
        const email = '299c0a41-190e-4533-891b-b333b9f37e51';

        page.visitPage('account/register');
        helper.fillData(email, password, password);
        page.displayedElementByText('Email has already been taken');
        page.expectedToBeEmpty('user[password]');
        page.expectedToBeEmpty('user[password_confirmation]');
    });
})
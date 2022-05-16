import login from '../pages/login.page';
import helper from '../helpers/helper-functions';
import page from '../pages/page';

describe('verifying the login', function () {
    it('Verify the login page', function () {
        page.visitPage('');
        page.clickOnByText('Sign in');
        page.elementIsDisplayedByName('username');
        page.elementIsDisplayedByName('password');
    });
    it('Verify the user signed in', function () {
        const email: string = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
        const password: string = 'HuskTheBest75_';

        page.visitPage('login');
        login.signUp(email, password, 'Logged in as');
        page.clickOnByText('Sign out');
    });
    it('Verify the users page', function () {
        const email: string = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
        const password: string = 'HuskTheBest75_';

        page.visitPage('');
        login.signUp(email, password, 'Logged in as');
        page.clickOnByText('299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com');
        page.displayedElementByText('Mailslurp User');
        page.clickOnByText('Sign out');
    });
    it('Verify the "My page" page', function () {
        const email: string = '299c0a41-190e-4533-891b-b333b9f37e51@mailslurp.com';
        const password: string = 'HuskTheBest75_';

        page.visitPage('');
        login.signUp(email, password, 'Logged in as');
        page.clickOnByText('My page');
        page.displayedElementByText('Reported issues');
        page.clickOnByText('Sign out');
    });
    it('Verify the user receive correct exception while entering wrong email or password on the sign up page', function () {
        page.visitPage('login');
        login.signUp(helper.makeLorem(), helper.makeLorem(), 'Invalid user or password');
        page.expectedToBeEmpty('password');
    })
})
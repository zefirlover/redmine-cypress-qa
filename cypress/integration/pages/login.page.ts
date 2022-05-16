import page from '../pages/page';

class Login {
    signUp(username: string, password: string, checkText: string) {
        page.clickOnByText('Sign in');
        page.insertDataByName('username', username);
        page.insertDataByName('password', password);
        page.clickOnByName('login');
        page.displayedElementByText(checkText);
    }
}

export default new Login();
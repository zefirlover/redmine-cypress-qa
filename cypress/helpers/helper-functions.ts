import loginPage from '../pages/login.page';

class Helpers {
    static makeLorem() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    static verifyingUserIsLogined(userLogin: string, userPassword: string) {
        loginPage.visitMainPage();
        loginPage.signUp(userLogin, userPassword, 'loggedas');
    }
}

export default Helpers;
import mainPage from '../pages/main.page';
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
        mainPage.visitMainPage();
        loginPage.signUp(userLogin, userPassword, 'Logged in as');
    }
}

export default Helpers;
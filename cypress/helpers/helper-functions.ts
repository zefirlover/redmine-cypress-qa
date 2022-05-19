import main from '../pages/main.page';
import login from '../pages/login.page';

class Helpers {
    makeLorem() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    verifyingUserIsLogined(userLogin: string, userPassword: string) {
        main.visitMainPage();
        login.signUp(userLogin, userPassword, 'Logged in as');
    }
}

export default new Helpers();
/// <reference types="cypress" />
import page from '../pages/page';

class MyAccount {
    changeFirstNameInUpdate(name: string, confirmMessage: string) {
        page.clearDataByName('user[firstname]');
        page.insertDataByName('user[firstname]', name);
        page.clickOnByText('Save');
        page.elementIsDisplayedByText(confirmMessage);
    };

    changeUserPassword(oldPassword: string, newPassword: string, confirmMessage: string) {
        page.insertDataByName('password', oldPassword);
        page.insertDataByName('new_password', newPassword);
        page.insertDataByName('new_password_confirmation', newPassword);
        page.clickOnByText('Apply');
        page.checkUrl('https://www.redmine.org/my/password');
        page.elementIsDisplayedByText(confirmMessage);
    }
}

export default new MyAccount();
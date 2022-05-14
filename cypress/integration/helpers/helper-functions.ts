import page from '../pages/page';

class Helpers {
    makeInboxId() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        var inboxId = `${text}@mailslurp.com`;
        return inboxId;
    };
    makeLorem() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
    }

    fillData(inboxId: string, password: string, confirm: string) {
      page.insertDataByName('user[login]', inboxId);
      page.insertDataByName('user[password]', password);
      page.insertDataByName('user[password_confirmation]', confirm);
      page.insertDataByName('user[firstname]', this.makeLorem());
      page.insertDataByName('user[lastname]', this.makeLorem());
      page.insertDataByName('user[mail]', `${inboxId}@mailslurp.com`);
      page.clickOnByText('Submit');
    }
}

export default new Helpers();
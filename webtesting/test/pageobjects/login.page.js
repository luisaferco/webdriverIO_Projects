

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loginBtn() {
        return $('#menuUserLink');
    }

    get inputUsername() {
        return $('input[name=username]');
    }

    get inputPassword() {
        return $('input[name=password]');
    }

    get btnSubmit() {
        return $('button#sign_in_btnundefined');
    }

    get signInMessage() {
        return $('#signInResultMessage');
    }

    get menuUserLink() {
        return $('#menuUserLink > span');
    }

    get createAccount() {
        return $('a.create-new-account.ng-scope');
    }



    async login(username, password) {
        await this.loginBtn.waitForClickable(
            {
                timeout: 10000,
                timeoutMsg: 'waiting until login btn is clickeable'
            });
        await this.loginBtn.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async open() {
        return await super.open('login');
    }
}

module.exports = new LoginPage();

const { BasePage } = require('./base.page')
const { Header } = require('./pagecomponents/header');

const header = new Header();
class LoginPage extends BasePage {
    constructor () {
        super();
    }
    get emailTab () {
        return $('#loginFormLoginEmailLink');
    }
    get inputEmail () {
        return 'div.i-input-group__cell>input[type="email"]';
    }
    get inputPassword () {
        return 'div.i-input-group__cell>input[type="password"]';
    }
    get loginButton () {
        return '#loginForm > button';
    }
    get errorMessage () {
        return '#test > div > div';
    }
    async login (email, password) {
        await $(header.enterButton).click();
        await this.emailTab.click();
        await $(this.inputEmail).setValue(email);
        await $(this.inputPassword).setValue(password);
        await $(this.loginButton).click();
    }

}

module.exports = { LoginPage };
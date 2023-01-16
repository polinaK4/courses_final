const {Given, When} = require("@wdio/cucumber-framework");
const {LoginPage} = require("../pageobjects/login.page");

const loginPage = new LoginPage();

Given(/^I navigate to "(.*)" page$/, async (url) => {
    await browser.url(url)
});

Given(/^Reload session and navigate to "(.*)" page$/, async (url) => {
    await browser.reloadSession()
    await browser.url(url)
});

When('I login with {text} and {text}', async (email, password) => {
    await loginPage.login(email, password)
});
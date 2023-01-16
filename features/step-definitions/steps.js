const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const randomstring = require('randomstring');

When('I click {locator} button', async (selector) => {
    await $(selector).waitForDisplayed();
    await $(selector).click();    
});

When('I click {locator position}{locator} element', async (locatorOptions, selector) => {
    await $$(selector)[locatorOptions.position].waitForDisplayed()
    await $$(selector)[locatorOptions.position].click();
});

When('I click {text} option of {locator} element', async(text, locator) => {
    let elem = await (locator)(text);
    await elem.click();
})

When('I fill in {locator} field {text}', async (locator, text) => {
    await $(locator).waitForDisplayed();
    await $(locator).setValue(text);
});

When('I take text of {locator} element', async function (locator) {
    this.world = await $(locator).getText();
});

When('Generate random text and put to {locator}', async function (locator) {
    await $(locator).waitForDisplayed();
    this.world = randomstring.generate(10);
    await $(locator).setValue(this.world);
});

Then('I expect element {locator} should have same text', async function (locator) {
    await $(locator).waitForDisplayed();
    expect(await $(locator).getText()).to.equal(this.world);
})

Then('I expect element {locator} should be {text}', async(locator, text) => {
    await $(locator).waitForDisplayed();
    expect(await $(locator).getText()).to.equal(text);
})

Then('I expect element {locator position}{locator} should have {text}', async(locatorOptions, locator, text) => {
    await $$(locator)[locatorOptions.position].waitForDisplayed();
    expect(await $$(locator)[locatorOptions.position].getText()).to.equal(text);
})

Then('I expect element {locator position}{locator} link to be {text}', async(locatorOptions, locator, text) => {
    let elem = await $$(locator)[locatorOptions.position].waitForDisplayed();
    expect(await $$(locator)[locatorOptions.position].getAttribute('href')).to.equal(text);
})

Then('I expect url should be equal {text}', async(text) => {
    expect(await browser.getUrl()).to.equal(text);
})

Then('I expect title should be equal {text}', async(text) => {
    expect(await browser.getTitle()).to.equal(text);
})

Then('I expect element {locator} contain error message {text}', async (selector, message) => {
    expect(await $$(selector)[0].waitForDisplayed({ timeout: 5000 }));
    expect(await $$(selector)[0].getText()).to.equal(message)
})


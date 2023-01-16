const {When, Then} = require("@wdio/cucumber-framework");
const {expect} = require("chai");

When('I scroll to {locator}', async(locator) => {
    let elem = await $(locator);
    await elem.scrollIntoView();
});

When('I hover {locator position}{locator} element', async (locatorOptions, selector) => {
    await $$(selector)[locatorOptions.position].waitForDisplayed();
    await $$(selector)[locatorOptions.position].moveTo();
});

When('I take ID attribute of {locator} element', async function (locator) {  
    this.world = await $(locator).getAttribute('rel');
});
Then('I expect ID attribute of {locator} element changed to same', async function (locator) {
    await $(locator).waitForEnabled();
    await $(locator).waitForDisplayed();
    expect(await $(locator).getAttribute('rel')).to.equal(this.world);
})

When('I wait for {locator} to be displayed', async(locator) => {
    let elem = await $(locator);
    await elem.scrollIntoView();
    await $(locator).waitForDisplayed();
})
Then('I expect {locator} to be displayed', async(locator) => {
    expect(await $(locator).waitForDisplayed());
})

Then('I expect item {locator} that contains {text} not displayed', async(locator, text) => {
    const item = await (locator)(text);
    expect(await item.waitForDisplayed({ reverse: true }));
})

Then('I expect that {locator position}{locator} is displayed', async(locatorOptions, locator) => {
    expect(await $$(locator)[locatorOptions.position].waitForDisplayed());
})
const { BasePage } = require('./base.page')
class PersonalPage extends BasePage {
    constructor () {
        super();
    }
    get logoutButton () {
        return '//*[@class="uc-nav uc-nav-last"]/li/a[text()="Выйти"]';
    }
    get personalDataButton (){
        return '//*[@href="/personal/personal.phtml"]';
    }
    get deliveryAddressesButton (){
        return '//*[@href="/personal/address.phtml"]';
    }

}

module.exports = { PersonalPage }
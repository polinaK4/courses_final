const { PersonalPage } = require('./personal.page');

class PersonalDeliveryAddressesPage extends PersonalPage {
    constructor () {
        super();
    }
    get addressNotDefault () {
        return '//*[@class="def-addr"]/a[not(@class="active-addr")]';
    }
    get addressDefault () {
        return '//*[@class="def-addr"]/a[@class="active-addr"]';
    }

}

module.exports = { PersonalDeliveryAddressesPage }
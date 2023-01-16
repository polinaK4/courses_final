const { BasePage } = require('./base.page')
class MainPage extends BasePage {
    constructor () {
        super();
    }
    async categoryByText (name) {
        return $(`//*[@class="main-nav__list__li main-nav__list__li_wnav"]/a[@href="${name}"]`)
    }

}
module.exports = { MainPage };

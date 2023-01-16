const { BasePage } = require('./base.page')
class ItemPage extends BasePage {
    constructor() {
        super();
    }

    get addRemoveToFavoritesButton() {
        return 'div.middle > div > div:nth-child(1) > div > div.b-product__media div.i-button-group';
    }

    get 'Favorite-Yes icon'() {
        return '//*[@id="top-page"]/div[3]/div/div[1]/div/div[1]/div[2]/div[3]/div/div/label/span[1]/span[2]'
    }
}
module.exports = { ItemPage }






const { PersonalPage } = require('./personal.page');

class FavoritesPage extends PersonalPage {
    constructor () {
        super();
    }
    get favoriteItem() {
        return '.item-type-card__inner>a';
    }
    async favoriteItemByText (name) {
        return $(`//*[@class="item-type-card__inner"]/a[@href="${name}"]`);
    }
    get removeFromFavoritesButton () {
        return 'button.item-type-card__controls-trigger';
    }
    get cancelRemovingButton() {
        return '//*[@class="item-type-card__controls-link-button" and text()="Отменить"]';
    }
    get approveRemovingButton() {
        return '//*[@class="item-type-card__controls-button"]/span[text()="Да, удалить"]';
    }

}

module.exports = { FavoritesPage }
const { BasePage } = require('./base.page')
class Catalog extends BasePage {
    constructor () {
        super();
    }
    get 'Catalog Item'() {
        return '.item-type-card__inner';
    }
    get catalogItemTitle () {
        return 'p.item-type-card__title';
    }
    get sortingDropdown() {
        return 'span.top-filters__eselect__item';
    }
    async sortingDropdownOptions(name) {
        return $(`//*[@id="top_filters__sorter"]/li/a[@data-sort="${name}"]`);

    }
}

module.exports = { Catalog }





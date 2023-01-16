const { Catalog } = require('./catalog.page');

class CategoryPage extends Catalog {
    constructor () {
        super();
    }
    get 'Top menu links'() {
        return 'span.landing-nav-list__title';
    }

    get headerOfpage () {
        return 'h1.landing-header__title';
    }

    get breadscrupms () {
        return 'h1.breadcrumbs__list__item>span';
    }

}
module.exports = { CategoryPage };
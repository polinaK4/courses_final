class Header {
    get enterButton () {
        return 'a.top-panel__userbar__auth';
    }
    get topBarNickname () {
        return 'span.top-panel__userbar__user__name__inner';
    }
    get favoritesLink() {
        return '//*[@class="top-panel__userbar__favs top-panel__userbar__dlink top-panel__userbar__dlink--slink"]';
    }
    get favoritesCounter() {
        return $('span.top-panel__userbar__favs__count');
    }
    get searchField () {
        return '//*[@id="top-s"]';
    }
    get searchPopup () {
        return '//*[@id="ui-id-1"]';
    }
    get popupResult () {
        return 'li.ui-menu-item';
    }

}

module.exports = { Header }
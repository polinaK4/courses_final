const { BasePage } = require('./base.page')
const { MainPage } = require('./main.page')
const { Header } = require('./pagecomponents/header');
const { LoginPage } = require('./login.page');
const { CategoryPage } = require('./category.page');
const { Catalog } = require('./catalog.page');
const { ItemPage } = require('./item.page');
const { FavoritesPage } = require('./favorites.page');
const { PersonalPage } = require('./personal.page');
const {PersonalDataPage} = require("./personalData.page");
const {PersonalDeliveryAddressesPage} = require("./personalDeliveryAddresses.page");

class PageFactory {
     static 'Base Page' = new BasePage();
     static 'Main Page' = new MainPage();
     static 'Login Page' = new LoginPage();
     static 'Header' = new Header();
     static 'Category Page' = new CategoryPage();
     static 'Catalog' = new Catalog();
     static 'Item Page' = new ItemPage();
     static 'Favorites Page' = new FavoritesPage();
     static 'Personal Page' = new PersonalPage();
     static 'Personal Data Page' = new PersonalDataPage();
     static 'Personal Delivery Addresses Page' = new PersonalDeliveryAddressesPage();
}

module.exports = { PageFactory };
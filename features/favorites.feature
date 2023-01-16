Feature: Check OZ Favorites functionality

  Background:
    Given I navigate to "https://oz.by/" page

    Scenario: As a logged in user I put an item to favorites and check that Favorites counter changed
      When I login with "p.kaliuzhnaya@gmail.com" and "8ZxAwJ"
        And I click "/books/" option of "Main Page > categoryByText" element
        And I click 1 "Category Page > Top menu links" element
        And I click 1 "Catalog > Catalog Item" element
        And I click "Item Page > addRemoveToFavoritesButton" button
      Then I expect element "Header > favoritesCounter" should be "1"

    Scenario: Put an item to favorites and check that icon and text in the button changed
      When I click "/books/" option of "Main Page > categoryByText" element
        And I click 1 "Category Page > Top menu links" element
        And I click 2 "Catalog > Catalog Item" element
        And I click "Item Page > addRemoveToFavoritesButton" button
      Then I expect "Item Page > Favorite-Yes icon" to be displayed

    Scenario: Check that Favorites user page is opened when click Favorites link
      When I click "Header > favoritesLink" button
      Then I expect title should be equal "Избранное OZ.by"

   Scenario: Check that item added to Favorites is added to Favorites page
     When I navigate to "https://oz.by/comics/more10652470.html" page
       And I click "Item Page > addRemoveToFavoritesButton" button
       And I click "Header > favoritesLink" button
     Then I expect that 1 "Favorites Page > favoriteItem" is displayed
     And I expect element 1 "Favorites Page > favoriteItem" link to be "/comics/more10652470.html"

    Scenario: Check that item added to Favorites is opened when clicked
      When I navigate to "https://oz.by/books/more1019888.html" page
        And I click "Item Page > addRemoveToFavoritesButton" button
        And I click "Header > favoritesLink" button
        And I click 1 "Favorites Page > favoriteItem" element
      Then I expect url should be equal "https://oz.by/books/more1019888.html"

    Scenario: Remove button is displayed when hovering item in Favorites list
      When I click "Header > favoritesLink" button
        And I hover 1 "Favorites Page > favoriteItem" element
      Then I expect that 1 "Favorites Page > removeFromFavoritesButton" is displayed

    Scenario: Item is still displayed in Favorites list in I cancel deletion
      When I navigate to "https://oz.by/boardgames/more10822791.html" page
        And I click "Item Page > addRemoveToFavoritesButton" button
        And I click "Header > favoritesLink" button
        And I hover 1 "Favorites Page > favoriteItem" element
        And I click 1 "Favorites Page > removeFromFavoritesButton" element
        And I click 1 "Favorites Page > cancelRemovingButton" element
      Then I expect element 1 "Favorites Page > favoriteItem" link to be "/boardgames/more10822791.html"

    Scenario: Check that Item is not displayed after it's deleted from Favorites list
      When I navigate to "https://oz.by/boardgames/more1095084.html" page
        And I click "Item Page > addRemoveToFavoritesButton" button
        And I click "Header > favoritesLink" button
        And I hover 1 "Favorites Page > favoriteItem" element
        And I click 1 "Favorites Page > removeFromFavoritesButton" element
        And I click 1 "Favorites Page > approveRemovingButton" element
      Then I expect item "Favorites Page > favoriteItemByText" that contains "/boardgames/more1095084.html" not displayed

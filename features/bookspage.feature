Feature: Check OZ Books page

  Background:
    Given I navigate to "https://oz.by/" page
      And I click "/books/" option of "Main Page > categoryByText" element

    Scenario: Click Book category in side menu and check url
      Then I expect url should be equal "https://oz.by/books/"

    Scenario Outline: Check top menu in Books page
      Then I expect element <number> "Category Page > Top menu links" should have "<linkText>"

    Examples:
      | number | linkText                    |
      | 1      | Бестселлеры                 |
      | 2      | Главные новинки             |
      | 3      | Художественная литература   |
      | 4      | Нехудожественная литература |
      | 5      | Фэнтези и фантастика        |

    Scenario: Open Bestsellers page and check Url
      When I click 1 "Category Page > Top menu links" element
      Then I expect url should be equal "https://oz.by/books/bestsellers"

    Scenario: Open Bestsellers page and check Title
      Then I expect title should be equal "Купить книги в Минске, книги с доставкой по Беларуси в интернет-магазине — OZ.by"

      Scenario: Click Book category and sort by price
        When I scroll to "Catalog > sortingDropdown"
        And I click "Catalog > sortingDropdown" button
        And I click "price_asc" option of "Catalog > sortingDropdownOptions" element
        Then I expect url should be equal "https://oz.by/books/?sort=price_asc"

  Scenario: Check naming of 'Books' breadscrumps
    When I take text of "Category Page > headerOfpage" element
    Then I expect element "Category Page > breadscrupms" should have same text
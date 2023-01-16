# Feature: Check Search functionality

#   Background:
#     Given I navigate to "https://oz.by/" page

#     Scenario: Check that search results contain requested parameter
#       When I fill in "Header > searchField" field "Гарри Поттер и философский камень"
#         And I wait for "Header > searchPopup" to be displayed
#         And I click 1 "Header > popupResult" element
#       Then I expect element 1 "Catalog > catalogItemTitle" should have "Гарри Поттер и философский камень"




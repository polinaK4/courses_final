Feature: Check Personal Data functionality

  Background:
    Given I navigate to "https://oz.by/" page

  Scenario: Check nickname update
    When I login with "p.kaliuzhnaya@gmail.com" and "8ZxAwJ"
    And I click "Header > topBarNickname" button
    When I click "Personal Page > personalDataButton" button
    And Generate random text and put to "Personal Data Page > nicknameField"
      And I click "Personal Data Page > saveButton" button
    Then I expect element "Header > topBarNickname" should have same text

  Scenario: Change default address
    When I click "Header > topBarNickname" button
    And I click "Personal Page > deliveryAddressesButton" button
      And I take ID attribute of "Personal Delivery Addresses Page > addressNotDefault" element
      And I click "Personal Delivery Addresses Page > addressNotDefault" button
      And I wait for "Personal Delivery Addresses Page > addressDefault" to be displayed
    Then I expect ID attribute of "Personal Delivery Addresses Page > addressDefault" element changed to same




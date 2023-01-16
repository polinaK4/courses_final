Feature: Check login to OZ website

  Background:
    Given Reload session and navigate to "https://oz.by/" page

  Scenario: As a user, I log in with valid credentials via Email
    When I click "Header > enterButton" button
    And I click "Login Page > emailTab" button
    And I fill in "Login Page > inputEmail" field "p.kaliuzhnaya@gmail.com"
    And I fill in "Login Page > inputPassword" field "8ZxAwJ"
    And I click "Login Page > loginButton" button
    Then I expect "Header > topBarNickname" to be displayed

   Scenario: I log out after I logged in
     When I login with "p.kaliuzhnaya@gmail.com" and "8ZxAwJ"
     When I click "Header > topBarNickname" button
     And I click "Personal Page > logoutButton" button
     Then I expect "Header > enterButton" to be displayed

  Scenario: I try to log in with wrong password and expect error message
    When I login with "p.kaliuzhnaya@gmail.com" and "111111"
    Then I expect element "Login Page > errorMessage" contain error message "Неверный пароль. Если вы потеряли или забыли пароль — восстановите его"







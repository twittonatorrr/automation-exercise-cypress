Feature: Login

Scenario: Login User with incorrect email and password
  Given User on Login Page
  When User enters wrong login and password
  Then User shouldn't be logged in and verify error
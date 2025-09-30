Feature: Login

Scenario: User creates account
  Given User on Sign-up page
  When User enters account-creating page
  Then User should be logged in and verify account name


Scenario: Login User with correct email and password
  Given User on Login page to authorize
  When User enters correct login and password
  Then User should be successfully logged in and verify account name


Scenario: Login User with incorrect email and password
  Given User on Login Page
  When User enters wrong login and password
  Then User shouldn't be logged in and verify error


Scenario: User log in and log out after that
  Given User on Login page
  When User enters valid login and password and successfully logged in
  Then User log out

Scenario: User trying to register with existing email
  Given User on login page
  When User trying to Sign-up with existing email
  Then User got error about already existing account
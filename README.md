# automation-exercise-cypress
[AutomationExercise](https://automationexercise.com/) site is build for automation practise.

This pet-project aims to cover all test-cases which you can view on this website or in this file description below.

For the implementation of these tests, I used [Cypress](https://www.cypress.io/) testing framework.

## UI Test Cases

-   ✅ Test Case 1: Register User
-   ✅ Test Case 2: Login User with correct email and password
-   ✅ Test Case 3: Login User with incorrect email and password
-   ✅ Test Case 4: Logout User
-   ✅ Test Case 5: Register User with existing email
-   ✅ Test Case 6: Contact Us Form
-   ✅ Test Case 7: Verify - Test Cases Page
-   ✅ Test Case 8: Verify All Products and product detail page
-   ✅ Test Case 9: Search Product
-   ✅ Test Case 10: Verify Subscription in home page
-   ✅ Test Case 11: Verify Subscription in Cart page
-   ✅ Test Case 12: Add Products in Cart
-   ✅ Test Case 13: Verify Product quantity in Cart
-   ✅ Test Case 14: Place Order: Register while Checkout
-   ✅ Test Case 15: Place Order: Register before Checkout
-   ✅ Test Case 16: Place Order: Login before Checkout
-   ✅ Test Case 17: Remove Products From Cart
-   ✅ Test Case 18: View Category Products
-   ✅ Test Case 19: View & Cart Brand Products
-   ✅ Test Case 20: Search Products and Verify Cart After Login
-   ✅ Test Case 21: Add review on product
-   ✅ Test Case 22: Add to cart from Recommended items
-   ✅ Test Case 23: Verify address details in checkout page
-   ✅ Test Case 24: Download Invoice after purchase order
-   ✅ Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
-   ✅ Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality

## API Test Cases

-   ✅ API 1: Get All Products List
-   ✅ API 2: POST To All Products List
-   ✅ API 3: Get All Brands List
-   ✅ API 4: PUT To All Brands List
-   ✅ API 5: POST To Search Product
-   ✅ API 6: POST To Search Product without search_product parameter
-   ✅ API 7: POST To Verify Login with valid details
-   ✅ API 8: POST To Verify Login without email parameter
-   ✅ API 9: DELETE To Verify Login
-   ✅ API 10: POST To Verify Login with invalid details
-   ✅ API 11: POST To Create/Register User Account
-   ✅ API 12: DELETE METHOD To Delete User Account
-   ✅ API 13: PUT METHOD To Update User Account
-   ✅ API 14: GET user account detail by email

## Requirments

For running tests in this project, you have to install Cypress. For installing Cypress, switch(cd) to the project's root folder and run:

    npm install

## Start tests running

If you want to see all process of test running, you can use this command which open Cypress GUI,when you can choose specifis test to run:
    npx cypress open

Or if running from the CLI use this one:
    npx cypress run --spec "cypress/path for test"

## Pathes for tests

    | Type | Location                                                 |
    | ---- | -------------------------------------------------------- |
    | api  | [front-end/cypress/e2e/api/](cypress/api/*.cy.js)          |
    | ui   | [front-end/cypress/e2e/ui/](cypress/integration/*.cy.js)   |

## Features

 - API tests
 - UI functional tests(mocked & stubbed)
 - End- to- end tests
 - Visual tests

## Tools

    - Cypress
    - Chai
    - Mocha
    - Prettier
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import HomePage from '../support/pageObject/homePage';
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const testPassword = testData.testPassword;
// const uniqueEmail = `user_${Date.now()}@test.com`;
const testEmail = testData.testEmail;
import testData from '../fixtures/example.json';

Cypress.Commands.add('createNewUser', function(){
        const homePage = new HomePage;
        const authorizationPage = homePage.goToLoginPage();
        authorizationPage.verifyLoginPage('New User Signup!')
        const registrationPage = authorizationPage.signUpUser(testEmail);
        
        registrationPage.fillNameDetails();   //step 8: Fill details: Title, Name, Email, Password, Date of birth
        registrationPage.selectCheckboxes();
        registrationPage.fillAddressDetails();
        registrationPage.clickCreateAccount();
        cy.wait(2000);

        authorizationPage.verifyHomePageLoggedUser(testData.testName); 
});

Cypress.Commands.add('makeSubscription', ()=>{
        cy.get('#susbscribe_email').type(testData.existingEmail);
        cy.get('#subscribe').click();
        cy.get('.alert-success.alert').contains('You have been successfully subscribed!').should('be.visible');
});

Cypress.Commands.add('addProductInCart', (productId)=>{
        cy.get(`.features_items > :nth-child(${productId}) > .product-image-wrapper > .single-products > .productinfo > a`).click();
        cy.get('.modal-content').contains('Your product has been added to cart.').should('be.visible');
        
});

Cypress.Commands.add('logout', ()=>{
        cy.get('a').contains('Logout').click();
});
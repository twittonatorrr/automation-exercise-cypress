import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../../support/pageObject/homePage';
import testData from '../../../fixtures/example.json'
const homePage = new HomePage;

Given('User on Login Page', ()=>{
    const authorizationPage = homePage.goToLoginPage();
    authorizationPage.verifyLoginPage('Login to your account');
});

When('User enters wrong login and password', ()=>{
    cy.get('[data-qa="login-email"]').type('incorect@gmail.com');
    cy.get("input[data-qa$='login-password']").type(testData.testPassword);
    cy.get('.btn.btn-default').contains('Login').click();
});

Then("User shouldn't be logged in and verify error", ()=>{
    cy.get('div .login-form > form > p').should('contain', 'Your email or password is incorrect!');
})
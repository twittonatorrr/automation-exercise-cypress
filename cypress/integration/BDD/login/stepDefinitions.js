import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../../support/pageObject/homePage';
import testData from '../../../fixtures/example.json'

const homePage = new HomePage;
let authorizationPage;



Given('User on Sign-up page', ()=>{
    authorizationPage = homePage.goToLoginPage();
    authorizationPage.verifyLoginPage('New User Signup!');
});

When('User enters account-creating page', ()=>{
    const uniqueEmail = `user_${Date.now()}@test.com`;
    const registrationPage = authorizationPage.signUpUser(uniqueEmail);
    registrationPage.fillNameDetails();
    registrationPage.selectCheckboxes();
    registrationPage.fillAddressDetails();
    registrationPage.clickCreateAccount();
});

Then("User should be logged in and verify account name", ()=>{
    authorizationPage.verifyHomePageLoggedUser(testData.testName); 
    homePage.deleteAccount();
});




Given('User on Login page to authorize', ()=>{
    cy.createNewUser(); //Pre-condition: creates new account for this test
    cy.logout(); //logout  
    const authorizationPage = homePage.goToLoginPage();
    authorizationPage.verifyLoginPage('Login to your account');
});

When('User enters correct login and password', ()=>{
    authorizationPage.logInWithCorrectCreditionals(testData.testEmail, testData.testPassword);
});

Then("User should be successfully logged in and verify account name", ()=>{
    authorizationPage.verifyHomePageLoggedUser(testData.testName);
    homePage.deleteAccount();
});





Given('User on Login Page', ()=>{
    authorizationPage = homePage.goToLoginPage();
    authorizationPage.verifyLoginPage('Login to your account');
});

When('User enters wrong login and password', ()=>{
    cy.get('[data-qa="login-email"]').type('incorect@gmail.com');
    cy.get("input[data-qa$='login-password']").type(testData.testPassword);
    cy.get('.btn.btn-default').contains('Login').click();
});

Then("User shouldn't be logged in and verify error", ()=>{
    cy.get('div .login-form > form > p').should('contain', 'Your email or password is incorrect!');
});




Given('User on Login page', ()=>{
    authorizationPage = homePage.goToLoginPage();
    authorizationPage.verifyLoginPage('Login to your account');
});

When('User enters valid login and password and successfully logged in', ()=>{
    authorizationPage.logInWithCorrectCreditionals(testData.existingEmail, testData.existingPassword);
    authorizationPage.verifyHomePageLoggedUser(testData.existingName);
});

Then("User log out", ()=>{
    cy.logout();
    authorizationPage.verifyLoginPage('Login to your account');
});




Given('User on login page', ()=>{
    authorizationPage = homePage.goToLoginPage();
    authorizationPage.verifyLoginPage('Login to your account');
});

When('User trying to Sign-up with existing email', ()=>{
    cy.get('input[placeholder="Name"]').type('Test Name');
    cy.get('div.signup-form input[placeholder="Email Address"]').type(testData.existingEmail);
    cy.get('.btn.btn-default').contains('Signup').click();
});

Then("User got error about already existing account", ()=>{
    authorizationPage.verifyLoginPage('Login to your account');
    cy.get('div .signup-form > form > p').should('contain', 'Email Address already exist!');
});
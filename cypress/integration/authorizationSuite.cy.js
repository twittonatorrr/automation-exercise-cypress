import HomePage from '../support/pageObject/homePage';
import testData from '../fixtures/example.json';
describe('Authorization Suite', function(){
        
    const homePage = new HomePage;
    const uniqueEmail = `user_${Date.now()}@test.com`;
    it('Test Case 1:Register User', function(){
        const authorizationPage = homePage.goToLoginPage();
        authorizationPage.verifyLoginPage('New User Signup!');

        const registrationPage = authorizationPage.signUpUser(uniqueEmail);
        registrationPage.fillNameDetails();
        registrationPage.selectCheckboxes();
        registrationPage.fillAddressDetails();
        registrationPage.clickCreateAccount();

        authorizationPage.verifyHomePageLoggedUser(testData.testName); 
        homePage.deleteAccount();
    });
    
    it('Test Case 2:Login User with correct email and password', function(){
        cy.createNewUser(); //Pre-condition: creates new account for this test
        cy.logout(); //logout  
        const authorizationPage = homePage.goToLoginPage();
        authorizationPage.verifyLoginPage('Login to your account');
        authorizationPage.logInWithCorrectCreditionals(testData.testEmail, testData.testPassword);
        authorizationPage.verifyHomePageLoggedUser(testData.testName);
        homePage.deleteAccount();

    });

    it('Test Case 3:Login User with incorrect email and password', function(){
        const authorizationPage = homePage.goToLoginPage();
        authorizationPage.verifyLoginPage('Login to your account');
        authorizationPage.logInWithIncorrectCreditionals();
    });

    it('Test Case 4: Logout User', function(){
        const authorizationPage = homePage.goToLoginPage();
        authorizationPage.verifyLoginPage('Login to your account');
        authorizationPage.logInWithCorrectCreditionals(testData.existingEmail, testData.existingPassword);
        authorizationPage.verifyHomePageLoggedUser(testData.existingName);
        cy.logout();
        authorizationPage.verifyLoginPage('Login to your account');
    });

    it('Test Case 5: Register User with existing email', function(){
        const authorizationPage = homePage.goToLoginPage();
        authorizationPage.verifyLoginPage('New User Signup!');
        authorizationPage.logInWithCorrectCreditionals(testData.existingEmail, testData.existingPassword);
        authorizationPage.verifyHomePageLoggedUser(testData.existingName);
        cy.logout();
        authorizationPage.verifyLoginPage('Login to your account');
        authorizationPage.signUpExistingUser(testData.existingEmail);
    });

});
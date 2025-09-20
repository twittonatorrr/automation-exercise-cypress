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

        authorizationPage.verifyHomePageLoggedUser(testData.testName); // step 16: Verify that 'Logged in as username' is visible
        homePage.deleteAccount();
    });
    
    it('Test Case 2:Login User with correct email and password', function(){
        cy.createNewUser(); //Pre-condition: creates new account for this test
        cy.logout(); //logout  
        const authorizationPage = homePage.goToLoginPage(); //step 2-4
        authorizationPage.verifyLoginPage('Login to your account'); //step 5
        authorizationPage.logInWithCorrectCreditionals(testData.testEmail, testData.testPassword); //6-8
        authorizationPage.verifyHomePageLoggedUser(testData.testName);
        homePage.deleteAccount(); //step 9-10

    });

    it('Test Case 3:Login User with incorrect email and password', function(){
        const authorizationPage = homePage.goToLoginPage(); //step 2-4
        authorizationPage.verifyLoginPage('Login to your account'); //step 5
        authorizationPage.logInWithIncorrectCreditionals(); //step 6-8
    });

    it('Test Case 4: Logout User', function(){
        const authorizationPage = homePage.goToLoginPage(); //step 2-4
        authorizationPage.verifyLoginPage('Login to your account'); //step 5
        authorizationPage.logInWithCorrectCreditionals(testData.existingEmail, testData.existingPassword); //step 6-8
        authorizationPage.verifyHomePageLoggedUser(testData.existingName);
        cy.logout();
        authorizationPage.verifyLoginPage('Login to your account');
    });

    it('Test Case 5: Register User with existing email', function(){
        const authorizationPage = homePage.goToLoginPage(); //step 2-4
        authorizationPage.verifyLoginPage('New User Signup!'); //step 5
        authorizationPage.logInWithCorrectCreditionals(testData.existingEmail, testData.existingPassword); //step 6-8
        authorizationPage.verifyHomePageLoggedUser(testData.existingName);
        cy.logout();
        authorizationPage.verifyLoginPage('Login to your account');
        authorizationPage.signUpExistingUser(testData.existingEmail);
    });

});
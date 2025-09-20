import RegistrationPage from "./registrationPage";
import testData from '../../fixtures/example.json';
class AuthorizationPage{
    
    
    verifyLoginPage(data){
        cy.get('h2').contains(this.data = data).should('be.visible');
    }

    logInWithCorrectCreditionals(email, password){
        cy.get('[data-qa="login-email"]').type(email);
        cy.get("input[data-qa$='login-password']").type(password);
        cy.get('.btn.btn-default').contains('Login').click();
    }

    verifyHomePageLoggedUser(data){
        cy.get('.nav > :nth-child(10)').should('contain', ` Logged in as ${data}`);
    }

    logInWithIncorrectCreditionals(){
        cy.get('[data-qa="login-email"]').type('incorect@gmail.com');
        cy.get("input[data-qa$='login-password']").type(testData.testPassword);
        cy.get('.btn.btn-default').contains('Login').click();
        cy.get('div .login-form > form > p').should('contain', 'Your email or password is incorrect!');
    }

    signUpUser(email){
        cy.get('input[placeholder="Name"]').type('Test Name');
        cy.get('div.signup-form input[placeholder="Email Address"]').type(email);
        cy.get('.btn.btn-default').contains('Signup').click(); 
        cy.get('.title.text-center').contains('Enter Account Information').should('be.visible');
        return new RegistrationPage;
    }

    signUpExistingUser(email){
        cy.get('input[placeholder="Name"]').type('Test Name');
                cy.get('div.signup-form input[placeholder="Email Address"]').type(email);
                cy.get('.btn.btn-default').contains('Signup').click();
                cy.get('div .signup-form > form > p').should('contain', 'Email Address already exist!');
    }
   
}
export default AuthorizationPage;
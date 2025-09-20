// const uniquePassword = `user_${Date.now()}`;
const testPassword = 'Lbyfvj22$';
class RegistrationPage{
    selectCheckboxes(){
        cy.get('#newsletter').check(); // step 9:  Select checkbox 'Sign up for our newsletter!'
        cy.get('#optin').check(); //step 10: Select checkbox 'Receive special offers from our partners!'
    }

    fillNameDetails(){
        cy.get('#id_gender1').check();
        cy.get('#name').type('Name');
        cy.get('#email').invoke('removeAttr', 'disabled').type('test@adress.com');
        cy.get('#password').type(testPassword);
        cy.get('[data-qa="days"]').select('31');   //step 8: Fill details: Title, Name, Email, Password, Date of birth
    }

    fillAddressDetails(){
        cy.get('#first_name').type('First Name');
        cy.get('#last_name').type('Last Name');
        cy.get('#company').type('My Company')
        cy.get('#address1').type('Some Address Street');
        cy.get('#address2').type('Some Address Street 2');
        cy.get('#country').select('United States');
        cy.get('#state').type('Massachusetts');
        cy.get('#city').type('city');
        cy.get('#zipcode').type('81115');
        cy.get('#mobile_number').type('999999999999'); //step 11: Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    }

    clickCreateAccount(){
        cy.get("button[data-qa='create-account']").click(); //step 12:  Click 'Create Account button'
        cy.get('b').should('have.text','Account Created!'); //step 13: Verify that 'ACCOUNT CREATED!' is visible
        cy.get("a[data-qa='continue-button']").click(); // step 15: Click 'Continue' button
    }
}
export default RegistrationPage;
// const uniquePassword = `user_${Date.now()}`;
const testPassword = 'Lbyfvj22$';
class RegistrationPage{
    selectCheckboxes(){
        cy.get('#newsletter').check();
        cy.get('#optin').check();
    }

    fillNameDetails(){
        cy.get('#id_gender1').check();
        cy.get('#name').type('Name');
        cy.get('#email').invoke('removeAttr', 'disabled').type('test@adress.com');
        cy.get('#password').type(testPassword);
        cy.get('[data-qa="days"]').select('31');
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
        cy.get('#mobile_number').type('999999999999');
    }

    clickCreateAccount(){
        cy.get("button[data-qa='create-account']").click();
        cy.get('b').should('have.text','Account Created!');
        cy.get("a[data-qa='continue-button']").click();
    }
}
export default RegistrationPage;
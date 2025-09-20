import testData from '../../fixtures/example.json'
class CartPage{
    proceedToCheckout(){
        cy.get('a').contains('Proceed To Checkout').click();
    }

    verifyProductInCart(){
        cy.get('#cart_info').should('contain', 'Blue Top');
    }

    placeOrder(){
        cy.get('a').contains('Place Order').click();
        cy.get("input[name$='name_on_card']").type('Card');
        cy.get("input[name$='card_number']").type('1111 2222 3333 4444');
        cy.get("input[name$='cvc']").type('311');
        cy.get("input[name$='expiry_month']").type('311');
        cy.get("input[name$='expiry_year']").type('2000');
        cy.get("#submit").click();
    }

    goToLoginPage(){
        cy.get('.modal-body > .text-center > a').click();
    }

    verifyDeliveryAddress(){
        cy.get('#address_delivery').should('contain', testData.firstName).and('contain', testData.lastName).and('contain', testData.address1);
    }

    writeComment(){
        cy.get('.form-control').type('Some message');
    }

    downloadInvoice(){
        cy.get('.btn.btn-default.check_out').click();       
        cy.readFile('cypress/downloads/invoice.txt').should('exist');
    }
}
export default CartPage;
import testData from '../../fixtures/example.json';

class ProductPage{
        searchProduct(){
            cy.get('#search_product').type('Men Tshirt');
            cy.get('#submit_search').click();
            cy.get('div .features_items > h2').should('have.text', 'Searched Products');
            cy.get('div .features_items').should('contain', 'Men Tshirt');
        }

        addToCart(){
            cy.get('.btn.btn-default.cart').click();
        }
        
        leaveReview(){
            cy.get('#name').type(testData.existingName);
            cy.get('#email').type(testData.existingEmail);
            cy.get('#review').type('My review');
            cy.get('#button-review').click();
            cy.get('#review-section').contains('Thank you for your review.').should('be.visible');
        }
}
export default ProductPage;
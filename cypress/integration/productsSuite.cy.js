import HomePage from '../support/pageObject/homePage'
import AuthorizationPage from '../support/pageObject/authorizationPage';
import ProductPage from '../support/pageObject/productPage';
import testData from '../fixtures/example.json';
describe('Products Suite', ()=>{

    const homePage = new HomePage;
    const authorizationPage = new AuthorizationPage;
    const productPage = new ProductPage;
    it('Test Case 12: Add Products in Cart', ()=>{
        homePage.goToHomePage();
        homePage.goToProductPage();
        cy.addProductInCart('3');
        cy.get('button').contains('Continue Shopping').click();
        cy.addProductInCart('4')
        homePage.viewCart();
        cy.get('#cart_info').should('contain', 'Blue Top').and('contain', 'Men Tshirt');

        cy.get('#product-1 > .cart_price').should('contain', '500');
        cy.get('#product-1 > .cart_quantity > button').should('have.text', 1);
        cy.get('#product-1 > .cart_total').should('contain', '500');

        cy.get('#product-2 > .cart_price').should('contain', '400');
        cy.get('#product-2 > .cart_quantity > button').should('have.text', 1);
        cy.get('#product-2 > .cart_total').should('contain', '400');
    });
    
    it('Test Case 13: Verify Product quantity in Cart', ()=>{
        homePage.goToHomePage();
        const productPage = homePage.checkProductDetails();
        cy.get('#quantity').clear().type(4);  // or you can make it this way: cy.get('#quantity').type('{upArrow}{upArrow}{upArrow}');
        productPage.addToCart();
        cy.get('.modal-content').contains('Your product has been added to cart.').should('be.visible');
        homePage.viewCart();
        cy.get('#product-1 > .cart_quantity > button').should('have.text', 4);
    });

    it('Test Case 14: Place Order: Register while Checkout', ()=>{
        homePage.goToHomePage();
        cy.addProductInCart('3');
        const cartPage = homePage.viewCart();
        cartPage.verifyProductInCart();
        cartPage.proceedToCheckout();
        cartPage.goToLoginPage();
        cy.createNewUser();
        homePage.goToCartPage();
        cartPage.proceedToCheckout();
        cartPage.verifyDeliveryAddress();
        cartPage.verifyProductInCart();
        cartPage.writeComment();
        cartPage.placeOrder();
        // cy.get('#success_message', { timeout: 1000 }) 
        //     .should('be.visible')
        //     .and('contain', 'Your order has been placed successfully!'); //step 14: Verify Address Details and Review Your Order
        homePage.deleteAccount();     
    });

    it('Test Case 15: Place Order: Register before Checkout', ()=>{
        homePage.goToHomePage();
        cy.createNewUser();
        cy.addProductInCart('3');
        const cartPage = homePage.viewCart();
        cartPage.verifyProductInCart();
        cartPage.proceedToCheckout();
        cartPage.verifyDeliveryAddress();
        cartPage.verifyProductInCart();
        cartPage.writeComment();
        cartPage.placeOrder();
        homePage.deleteAccount();     
    });

    it('Test Case 16: Place Order: Login before Checkout', ()=>{
        cy.createNewUser(); //pre-condition
        cy.get(".nav.navbar-nav > li").eq(3).click(); //logout  
        authorizationPage.logInWithCorrectCreditionals(testData.testEmail, testData.testPassword);
        cy.addProductInCart('3');
        const cartPage = homePage.viewCart();
        cartPage.verifyProductInCart();
        cartPage.proceedToCheckout();
        cartPage.verifyDeliveryAddress();
        cartPage.verifyProductInCart();
        cartPage.writeComment();
        cartPage.placeOrder();
        homePage.deleteAccount();
    });

    it('Test Case 17: Remove Products From Cart', ()=>{
        homePage.goToHomePage();
        cy.addProductInCart('3');
        const cartPage = homePage.viewCart();
        cartPage.verifyProductInCart();
        cy.get('.cart_quantity_delete').click();
        cy.get('#empty_cart').should('contain','Cart is empty! Click here to buy products.');
    });

    it('Test Case 18: View Category Products',()=>{
        homePage.goToHomePage();
        cy.get("a[href='#Women']").click();
        cy.get(".panel-body > ul > li > a").contains("Dress").click();
        cy.get(".features_items > h2").should('contain', 'Women - Dress Products');
        cy.get("a[href='#Men']").click();
        cy.get(".panel-body > ul > li > a").contains("Tshirts").click();
        cy.get(".features_items > h2").should('contain', 'Men - Tshirts Products');
    });

    it('Test Case 19: View & Cart Brand Products', ()=>{
        homePage.goToHomePage();
        cy.get('h2').contains('Brands').should('be.visible');
        cy.get("a[href='/brand_products/Polo']").click();
        cy.get('h2').contains('Brand - Polo Products').should('be.visible');
        cy.get("a[href='/brand_products/H&M']").click();
        cy.get('h2').contains('Brand - H&M Products').should('be.visible');
    });

    it('Test Case 20: Search Products and Verify Cart After Login', ()=>{
        homePage.goToHomePage();
        homePage.goToProductPage();
        productPage.searchProduct();
        cy.get('.productinfo > a').click();
        homePage.viewCart();
        cy.get('#cart_info').should('contain', 'Men Tshirt');
        homePage.goToLoginPage();
        authorizationPage.logInWithCorrectCreditionals(testData.existingEmail, testData.existingPassword);
        homePage.goToCartPage();
        cy.get('#cart_info').should('contain', 'Men Tshirt');
    });

    it('Test Case 21: Add review on product', ()=>{
        homePage.goToHomePage();
        homePage.goToProductPage();
        const productPage = homePage.goToProductDetails();
        productPage.leaveReview();
    });

    it('Test Case 22: Add to cart from Recommended items', ()=>{
        homePage.goToHomePage();
        cy.get('.recommended_items').scrollIntoView();
        cy.get('.recommended_items').contains('recommended items').should('be.visible');
        cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        homePage.viewCart();
        cy.get('#cart_info').should('contain', 'Stylish Dress');
    });

    it('Test Case 23: Add to cart from Recommended items', ()=>{
        homePage.goToHomePage();
        cy.createNewUser();
        cy.addProductInCart('3');
        const cartPage = homePage.viewCart();
        cartPage.verifyProductInCart();
        cartPage.proceedToCheckout();
        cartPage.verifyDeliveryAddress();
        homePage.deleteAccount();
    });

    it('Test Case 24: Download Invoice after purchase order', ()=>{
        homePage.goToHomePage();
        cy.addProductInCart('3');
        const cartPage = homePage.viewCart();
        cartPage.verifyProductInCart();
        cartPage.proceedToCheckout();
        cartPage.goToLoginPage();
        cy.createNewUser();
        homePage.goToCartPage();
        cartPage.proceedToCheckout();
        cartPage.verifyDeliveryAddress();
        cy.get("textarea[name='message']").type('My review');
        cartPage.placeOrder();
        cartPage.downloadInvoice();
        cy.get('a').contains('Continue');
        homePage.deleteAccount();
    });
});
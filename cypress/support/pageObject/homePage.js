// before(function(){
//     cy.fixture('example').then(function(data){
//         this.data = data;
//     })
// })


import AuthorizationPage from "./authorizationPage";
import ContactUsPage from ".//contactUsPage";
import ProductPage from "./productPage";
import CartPage from "./cartPage";

class HomePage{
    goToLoginPage(){
        cy.visit("https://automationexercise.com/"); //step 1: Navigate to url
        cy.get('.logo.pull-left').should('be.visible'); //step 2: Verify that home page is visible successfully
        cy.get('.nav.navbar-nav li').eq(3).click(); //step 3: Click on 'Signup / Login' button
        return new AuthorizationPage;
    }

    deleteAccount(){
        cy.get('a').contains(' Delete Account').click(); //step 17: Click 'Delete Account' button
        cy.get('b').contains('Account Deleted!').should('be.visible');
        cy.get("a[data-qa='continue-button']").click(); //step 18: Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    }

    goToHomePage(){
        cy.visit("https://automationexercise.com/"); 
        cy.get('h2').contains('Features Items').should('be.visible');
    }

    goToProductPage(){
        cy.get('li').eq(1).click();
        cy.url().should('contain','products');
        cy.get('div .features_items > h2').should('have.text', 'All Products' );
        return new ProductPage;
    }

    scrollDownToFooter(){
        cy.get('footer').scrollIntoView();
        cy.get('footer').should('contain', 'Subscription');
    }

    goToCartPage(){
        cy.get('li').eq(2).click();
    }

    goToProductDetails(){
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > ul > li > a').click();
        cy.url().should('contain', 'product_details');
        cy.get('a').contains('Write Your Review').should('be.visible');
        return new ProductPage;
    }
    
    goToContactUsPage(){
        cy.get('li').contains(' Contact us').click();
        cy.get('.col-sm-12 > .title').contains('Contact').should('be.visible');
        return new ContactUsPage;
    }

    goToTestCasesPage(){
        cy.get('li').eq(4).click();
        cy.url().should('contain','test_cases');
        cy.get('b').should('contain', 'Test Cases');
    }

    viewCart(){
        cy.get('a').contains('View Cart').click();
        cy.url().should('contain', 'view_cart');
        return new CartPage;
    }

    scrollToTheTopBtn(){
        cy.get('#scrollUp').click();
        cy.get('h2').contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    }

    scrollToTheTop(){
        cy.get('.logo.pull-left').scrollIntoView();
        cy.get('h2').contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    }

    checkProductDetails(){
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > ul > li > a').click();
        cy.url().should('contain', 'product_details');
        cy.get('div .product-details').should('be.visible');
        return new ProductPage;
    }
    // continueShopping(){

    // }
}
export default HomePage;

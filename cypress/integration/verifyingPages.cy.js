import HomePage from '../support/pageObject/homePage'
import testData from '../fixtures/example.json'
const homePage = new HomePage;
describe('Verifying Pages Suit', ()=>{
    it('Test Case 6: Contact Us Form', ()=>{
        homePage.goToHomePage();
        const contactUsPage = homePage.goToContactUsPage();
        contactUsPage.writeMessage();
        contactUsPage.uploadFile();
        contactUsPage.clickSubmitBtn();
        homePage.goToHomePage();
    });

    it('Test Case 7: Verify Test Cases Page', ()=>{
        homePage.goToHomePage();
        homePage.goToTestCasesPage();
    });

    it('Test Case 8: Verify All Products and product detail page', ()=>{
        homePage.goToHomePage();
        homePage.goToProductPage();
    });

    it('Test Case 9: Search Product', ()=>{
        homePage.goToHomePage();
        const productPage = homePage.goToProductPage();
        productPage.searchProduct();
    });

    it('Test Case 10: Verify Subscription in home page', ()=>{
        homePage.goToHomePage();
        homePage.scrollDownToFooter();
        cy.makeSubscription();
    });

    it('Test Case 11: Verify Subscription in Cart page', ()=>{
        homePage.goToHomePage();
        homePage.goToCartPage();
        homePage.scrollDownToFooter();
        cy.makeSubscription();
    });
})
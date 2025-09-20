import HomePage from "../support/pageObject/homePage";

describe('Scroll Validation Suit', ()=>{
    const homePage = new HomePage;
    it("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality", ()=>{
        homePage.goToHomePage();
        homePage.scrollDownToFooter();
        homePage.scrollToTheTopBtn();
    });

    it("Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality", ()=>{
        homePage.goToHomePage();
        homePage.scrollDownToFooter();
        homePage.scrollToTheTop();
    });
});
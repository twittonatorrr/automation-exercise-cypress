describe('API-Testing', ()=>{
    it('API 1: Get All Products List', ()=>{
        cy.request( 'GET','https://automationexercise.com/api/productsList').then((response)=>{
            expect(response.status).to.be.eq(200); //real API behaviour 

            const responseBody = JSON.parse(response.body);
            expect(responseBody.responseCode).to.be.eq(200); //false status code from response body
            expect(responseBody).to.have.property('products');
        })
    })
})
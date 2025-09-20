describe('API-Testing', ()=>{
    it('API 2: POST To All Products List', ()=>{
        cy.request({
            method:'POST',
            url: 'https://automationexercise.com/api/productsList', 
             headers: {
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false
        })
        .then((response)=>{
            expect(response.status).to.eq(200);

            const responseBody = JSON.parse(response.body);
            expect(responseBody.responseCode).to.be.eq(405);
            expect(responseBody.message).to.be.eq("This request method is not supported.");
        })
    })
})
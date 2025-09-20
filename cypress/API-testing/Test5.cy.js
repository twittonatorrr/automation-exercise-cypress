describe('API-test', ()=>{
    it('API 5: POST To Search Product', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
            form: true,
            body: {
                search_product : "Tshirt"
            }
        }).then((response)=>{
            expect(response.status).be.eql(200);

            const responseBody = JSON.parse(response.body);
            expect(responseBody.responseCode).be.eql(200);
            expect(responseBody).has.property('products');
            expect(responseBody.products).to.be.an('array').and.not.empty;
            expect(responseBody.products[0]).has.property('name');
            expect(responseBody.products[0].name).contain('Tshirt');
        })
    })
})
describe('API-test', ()=>{
    it('API 6: POST To Search Product without search_product parameter', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
        }).then((response)=>{
            expect(response.status).be.eql(200);

            const responseBody = JSON.parse(response.body);
            expect(responseBody.responseCode).be.eql(400);
            expect(responseBody.message).to.be.eql('Bad request, search_product parameter is missing in POST request.');
        })
    })
})
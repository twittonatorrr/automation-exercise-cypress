describe('API-test', ()=>{
    it('API 4: PUT To All Brands List', ()=>{
        cy.request({
            url: 'https://automationexercise.com/api/brandsList',
            method: 'PUT'
        }).then((response)=>{
            const responseBody = JSON.parse(response.body);
            expect(response.status).to.be.eq(200);

            expect(responseBody.responseCode).to.be.eql(405);
            expect(responseBody.message).to.be.eql('This request method is not supported.');
        })
    });
});
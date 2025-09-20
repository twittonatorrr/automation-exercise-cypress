describe('API-Testing', ()=>{
    it('API 3: Get All Brands List', ()=>{
        cy.request({
            url: 'https://automationexercise.com/api/brandsList',
            method: 'GET',
        }).then((response)=>{
            const responseBody = JSON.parse(response.body);

            expect(response.status).to.be.eq(200);
            expect(responseBody.responseCode).to.be.eq(200);
            expect(responseBody).to.have.property('brands');
            expect(responseBody.brands).to.be.an('array');
        });
    });
});
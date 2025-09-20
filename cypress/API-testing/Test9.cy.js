describe('API-testing', ()=>{
    it('API 9: DELETE To Verify Login', ()=>{
        cy.request({
            url: 'https://automationexercise.com/api/verifyLogin',
            method: 'DELETE'
        }).then((response)=>{
            expect(response.status).to.be.eql(200);
            
            const responseBody = JSON.parse(response.body);
            expect(responseBody.responseCode).to.be.eql(405);
            expect(responseBody.message).to.be.eql('This request method is not supported.');
        })
    })
})
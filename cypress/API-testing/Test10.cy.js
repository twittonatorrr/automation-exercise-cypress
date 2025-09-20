describe('API-testing', ()=>{
    it('API 10: POST To Verify Login with invalid details', ()=>{
        cy.request({
            url: 'https://automationexercise.com/api/verifyLogin',
            method: 'POST',
            form: true,
            body: {
                email: "invalidEmail@test.com",
                password: "invalidPassword"
            }
        }).then((response)=>{
            expect(response.status).to.be.eql(200);
            
            const responseBody = JSON.parse(response.body);
            expect(responseBody.responseCode).to.be.eql(404);
            expect(responseBody.message).to.be.eql('User not found!');
        })
    })
})
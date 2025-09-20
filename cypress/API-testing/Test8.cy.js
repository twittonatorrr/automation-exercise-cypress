import testData from '../fixtures/example.json'
describe('API-test', ()=>{
    it('API 8: POST To Verify Login without email parameter', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: {
                password: testData.existingPassword
            }
        }).then((response)=>{
            expect(response.status).to.be.eql(200);

            const responseBody = JSON.parse(response.body);
            expect(responseBody.responseCode).to.be.eql(400);
            expect(responseBody.message).to.be.eql('Bad request, email or password parameter is missing in POST request.');
        })
    })
})
import testData from '../fixtures/example.json'
describe('API-test', ()=>{
    it('API 7: POST To Verify Login with valid details', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: {
                email: testData.existingEmail,
                password: testData.existingPassword
            }
        }).then((response)=>{
            expect(response.status).to.be.eql(200);

            const responseBody = JSON.parse(response.body);
            expect(responseBody.responseCode).to.be.eql(200);
            expect(responseBody.message).to.be.eql('User exists!');
        })
    })
})
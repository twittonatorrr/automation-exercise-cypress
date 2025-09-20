import testData from '../fixtures/example.json'
import SupportAPI from '../support/supportAPI/supportApi';
describe('API-testing', ()=>{
    
    const supportAPI = new SupportAPI();
    before(()=>{
        supportAPI.createNewUser();
    });

    it('API 12: DELETE METHOD To Delete User Account', ()=>{
        cy.request({
            url: 'https://automationexercise.com/api/deleteAccount',
            method: 'DELETE',
            form: true,
            body: {
                email: testData.testEmail,
                password: testData.testPassword
            }
        }).then((response)=>{
            expect(response.status).to.be.eql(200);
            
            const responseBody = JSON.parse(response.body);
            expect(responseBody.responseCode).to.be.eql(200);
            expect(responseBody.message).to.be.eql('Account deleted!');
        })
    })

    afterEach(()=>{
        supportAPI.deleteNewUser();
    })
})

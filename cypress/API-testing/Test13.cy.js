import SupportAPI from '../support/supportAPI/supportApi'
import testData from '../fixtures/example.json'
describe('API-testing', ()=>{
    
    const supportAPI = new SupportAPI();
    before(()=>{
        supportAPI.createNewUser();
    })

    it('API 13: PUT METHOD To Update User Account', ()=>{
        cy.request({
            url: 'https://automationexercise.com/api/updateAccount',
            method: 'PUT',
            form: true,
            body: {
                name: testData.testName,
                email: testData.testEmail,
                password: testData.testPassword,
                title: "Mr.Mr2",
                birth_date: 24,
                birth_month: 11,
                birth_year: 2001,
                firstname: testData.firstName,
                lastname: testData.lastName,
                company: testData.company,
                address1: testData.address1,
                address2: testData.address2,
                country: testData.country,
                zipcode: testData.zipcode,
                state: testData.state,
                city: testData.city,
                mobile_number: testData.mobileNumber
            }
        }).then((response)=>{
            expect(response.status).to.be.eql(200);
            
            const responseBody = JSON.parse(response.body);
            expect(responseBody.responseCode).to.be.eql(200);
            expect(responseBody.message).to.be.eql('User updated!');
        })
    })

    afterEach(()=>{
        supportAPI.deleteNewUser();
    })
})
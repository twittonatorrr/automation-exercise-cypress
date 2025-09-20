import SupportAPI from '../support/supportAPI/supportApi';
import testData from '../fixtures/example.json'
describe('API-testing', ()=>{
    const supportAPI = new SupportAPI();
    it('API 11: POST To Create/Register User Account', ()=>{
        cy.request({
            url: 'https://automationexercise.com/api/createAccount',
            method: 'POST',
            form: true,
            body: {
                name: testData.testName,
                email: testData.testEmail,
                password: testData.testPassword,
                title: "Mr.Mr",
                birth_date: 23,
                birth_month: 10,
                birth_year: 2000,
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
            expect(responseBody.responseCode).to.be.eql(201);
            expect(responseBody.message).to.be.eql('User created!');
        })
    })
    afterEach(()=>{
            supportAPI.deleteNewUser();
        })
})
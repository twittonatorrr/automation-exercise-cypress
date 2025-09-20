import SupportAPI from '../support/supportAPI/supportApi';
import testData from '../fixtures/example.json'
describe('API-testing', ()=>{

    const supportAPI = new SupportAPI();
    before(()=>{
        supportAPI.createNewUser();
    })

    it('API 14: GET user account detail by email', ()=>{
        cy.request({
            url: 'https://automationexercise.com/api/getUserDetailByEmail',
            method: 'GET',
            form: true,
            qs: {
                email: testData.testEmail
            }
        }).then((response)=>{
            expect(response.status).to.be.eql(200);
            
            const responseBody = JSON.parse(response.body);
            expect(responseBody.responseCode).to.be.eql(200);
            expect(responseBody).to.have.property('user');
            expect(responseBody.user).to.be.an('object');
            expect(responseBody.user).to.have.all.keys(
                "id",
                "name",
                "email",
                "title",
                "birth_day",
                "birth_month",
                "birth_year",
                "first_name",
                "last_name",
                "company",
                "address1",
                "address2",
                "country",
                "state",
                "city",
                "zipcode"
            )
        })
    })

    afterEach(()=>{
        supportAPI.deleteNewUser();
    })
})
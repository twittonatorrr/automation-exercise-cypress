import testData from '../../fixtures/example.json'

class SupportAPI{
    createNewUser(){
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
        });
    }

    deleteNewUser(){
        cy.request({
                    url: 'https://automationexercise.com/api/deleteAccount',
                    method: 'DELETE',
                    form: true,
                    body: {
                        email: testData.testEmail,
                        password: testData.testPassword
                    }
                })
    }
}
export default SupportAPI;
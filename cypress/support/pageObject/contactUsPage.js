import testData from '../../fixtures/example.json';

class ContactUsPage{
        writeMessage(){
            cy.get("input[data-qa='name']").type(testData.existingName);
            cy.get("input[data-qa='email']").type(testData.existingEmail);
            cy.get("input[data-qa='email']").type('Subject');
            cy.get("textarea[data-qa='message']").type('Message');
        };

        uploadFile(){
            cy.get("input[name='upload_file']").selectFile('cypress/fixtures/example.json');
        };

        clickSubmitBtn(){
            cy.get("input[data-qa='submit-button']").click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Press OK to proceed!');
            return true;
        });
        cy.get('div .status.alert.alert-success').should('contain','Success! Your details have been submitted successfully.');
        };
}

export default ContactUsPage;
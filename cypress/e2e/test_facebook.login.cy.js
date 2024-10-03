

describe('Validate the login for invalid user.', () => {

    beforeEach(() => {
        cy.visit('https://www.facebook.com/.')

    })

    it('Login failed', () => {
        //input email
        cy.get('[data-testid=royal_email]').type("abc@xyz.com")
        //click login
        cy.get('[data-testid=royal_login_button]').click()
        //I got redirected to another page without the error message
        cy.contains('Return home').click()
    })

  })



//signup button
//[data-testid = open-registration-form-button]
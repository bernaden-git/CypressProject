
describe('Validate the filling out of form for sign up', () => {

    beforeEach(() => {
        cy.visit('https://www.facebook.com/r.php?locale=en_GB&display=page')

    })

    it('Fillout sign up form', () => {
        cy.get('[data-testid = open-registration-form-button]').click()
        //cy.contains('Return home').click()
        // cy.get('[data-testid = open-registration-form-button]').click()
        cy.get('[name = firstname]').type("Fname")
        cy.get('[name = lastname]').type("lname")
        cy.get('[name = birthday_month]').select("Oct")
        cy.get('[name = birthday_day]').select("10")
        cy.get('[name = birthday_year]').select("2000")

        cy.xpath('[//input[@type=radio and @value=1]').click()
        cy.get('[name = reg_email__]').type("email@email.com")
        cy.get('[name = reg_passwd__]').type("mypass")

    })

})

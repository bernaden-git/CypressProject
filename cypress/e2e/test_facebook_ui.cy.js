

describe('Validate the Facebook logo is displayed', () => {

    beforeEach(() => {
        cy.visit('https://en-gb.facebook.com/.')
       // cy.contains('Return home').click()
    })

    it('Login Success', () => {
        //assert logo
        cy.get('.fb_logo').should('have.attr', 'src', 'https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg')
        //assert text below logo
        cy.get('h2').should('have.text', 'Facebook helps you connect and share with the people in your life.')
    })

})



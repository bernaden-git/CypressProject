import { LoginFunction, ValidateError } from "../utils/login_page"

describe('Validate the application is launching successfully', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    })

    it('Login Success', () => {

        cy.Login('standard_user', 'secret_sauce')
        cy.get('div.product_label').contains('Products')
        cy.get('div.product_label').should('have.text', 'Products')
    })

    it('Login Failed', () => {
        LoginFunction('standard_user', 'secret_sauce123')
        ValidateError('Epic sadface: Username and password do not match any user in this service')
    })

    it('Login Failed for lock out user', () => {
        LoginFunction('locked_out_user', 'secret_sauce')
        ValidateError('Epic sadface: Sorry, this user has been locked out.')
    })

})


import { LoginFunction } from "../utils/login_page" 
import { ValidateProductPrice } from "../utils/product_page" 

describe('Validate the product page functionality', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
        LoginFunction('standard_user', 'secret_sauce')
    })

    it('Validate the product price', () => {
        
        ValidateProductPrice('Sauce Labs Backpack','$29.99')


    })

})
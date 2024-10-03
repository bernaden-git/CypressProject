

describe('Handle the dropdowns', () => {

    

    it('Change the dropdown values using cypress', () => {
        
        cy.visit('https://www.bstackdemo.com/')
        cy.get('select').select("Highest to lowest")


    })

    it('Validate the already selected value in dropdown', () => {
        
        cy.visit('https://www.bstackdemo.com/')
        cy.get('select').invoke("val").should("eq", "")
        


    })
})
// Locators //

const user_elm = '#user-name'
const pwd_elm = '#password'
const loginbtn_elm = '#login-button'
const error_elm = 'h3'


// Functions //
export function LoginFunction(Username, Password) {
    cy.get(user_elm).type(Username)
    cy.get(pwd_elm).type(Password)
    cy.get(loginbtn_elm).click()
}

export function ValidateError(message){
    cy.get(error_elm).contains(message)

}



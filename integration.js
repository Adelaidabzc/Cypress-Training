describe('Sign In', () => {
    it('successfully signs in', () => {
      cy.visit('https://example.com')
      cy.get('#sign-in-button').click()
      cy.get('#username-input').type('myusername')
      cy.get('#password-input').type('mypassword')
      cy.get('#submit-button').click()
      cy.url().should('include', '/dashboard')
    })
  
    it('displays an error message on invalid login', () => {
      cy.visit('https://example.com')
      cy.get('#sign-in-button').click()
      cy.get('#username-input').type('invalidusername')
      cy.get('#password-input').type('invalidpassword')
      cy.get('#submit-button').click()
      cy.get('#error-message').should('be.visible')
    })
  })
  
describe('Amazon search', () => {
  it('should sign in and search for a product', () => {
    // Visit the Amazon homepage
    cy.visit('https://www.amazon.com/')

    // Click the "Sign in" button
    cy.get('#nav-link-accountList').click()

    // Enter the email address and password and click "Sign in"
    cy.get('#ap_email').type('josuereyes1229@gmail.com')
    cy.get('#continue').click() // locate and click on the "Continue" button
    cy.get('#ap_password').type('Caracoles1412')
    cy.get('#signInSubmit').click()
    
    describe('Amazon search', () => {
      it('should be able to search for a product', () => {
        cy.visit('https://www.amazon.com/');
    
        cy.get('#twotabsearchtextbox').type('iphone{enter}');
    
        cy.get('.s-result-list').should('be.visible');
      });
    });
    
    // Enter a search term and click the search button
  
    cy.get('#nav-search-submit-button').click()

    // Verify that search results are displayed
    cy.contains('results for "iPhone"').should('be.visible')
  })
  
})

describe('Login Test with Cypress', () => {
  it('Valid login', () => {
    cy.visit('/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.get('.flash.success').should('contain', 'You logged into a secure area!')
  })

  it('Invalid login', () => {
    cy.visit('/login')
    cy.get('#username').type('invalid')
    cy.get('#password').type('wrong')
    cy.get('button[type="submit"]').click()
    cy.get('.flash.error').should('contain', 'Your username is invalid!')
  })
})
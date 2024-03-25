describe('Browser testing - anchor href', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com')
  })

  it('directs the user to the login page when clicking the login link', () => {
    cy.contains('.nav a', 'Login').as('btnLogin')
      .should('have.attr', 'href', '/login')
      .should('not.have.attr', 'target')
  })
})

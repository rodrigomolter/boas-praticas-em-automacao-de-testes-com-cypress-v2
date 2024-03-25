Cypress.Commands.add('search', term => {
  cy.get('input[type="text"]')
    .should('be.visible')
    .clear()
    .type(`${term}{enter}`)
})

Cypress.Commands.add('assertResults', () => {
  cy.get('.table-row').then(rows => {
    expect(rows.length).to.be.at.least(1)
  })
})

Cypress.Commands.add('randomlyTogglePurchaseAgreement', () => {
  if (Math.random() > 0.5) {
    cy.get('#agree').check()
  }
})

Cypress.Commands.add('updatesDestination', (data) => {
  cy.get('#destination_name')
    .clear()
    .type(data.name)

  cy.get('#destination_description')
    .clear()
    .type(data.description)

  cy.get('input[type="submit"]')
    .click()
})

Cypress.Commands.add('login', (user) => {

  Cypress.log({
    displayName: "LOGIN",
    message: [`🔐 Authenticating | ${user.email}`]
  })

  cy.visit('http://notes-serverless-app.com/login')

  cy.get('#email').type(user.email)
  cy.get('#password').type(user.password, { log: false })
  cy.get('button[type="submit"]').click()
  
  cy.contains('h1', 'Your Notes', { timeout: 10000 }).should('be.visible')

})

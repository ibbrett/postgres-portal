describe('Postgres Portal page visit', () => {
  it('Should visit home page and see sections nav', () => {
    cy.visit('/')
    cy.contains('#application-title', 'Home')
    cy.get('#sections-navigation').should('be.visible')
  })
})

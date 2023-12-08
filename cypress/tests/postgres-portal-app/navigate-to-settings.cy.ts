describe('Postgres Portal navigation', () => {
  it('Should visit home page. Then navigate to settings page', () => {
    cy.visit('/')
    cy.get('a[href="/settings"]').click()
    cy.contains('#application-title', 'Settings')
  })
})

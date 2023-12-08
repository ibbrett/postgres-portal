const now = new Date()
const seconds = now.getSeconds()
describe('Postgres Portal Section Creation', () => {
  it('Should visit sections form, successfully create new section', () => {
    // cy.visit('/sections/new').should('include', 'New Section')
    cy.visit('/sections/new')
    cy.contains('header h1', 'New Section')
    cy.get('input[name="name"]').type('Cypress Test ' + seconds)
    cy.get('select[name="type"]').select('log')
    cy.get('button[type="submit"]').click()
  })
})

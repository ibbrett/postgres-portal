const id = 8
describe('Postgres Portal Section Creation', () => {
  it('Should visit sections form, successfully create new section', () => {
    // cy.visit('/sections/new').should('include', 'New Section')
    cy.visit('/sections')
    cy.contains('header h1', 'Section List')
    cy.get(`[data-section-delete=${id}]`).click()
    //cy.wait(5000)
    cy.on('window:confirm', text => {
      expect(text).to.contains('Are you certain you want to remove this item?')
      return false
    })
  })
})

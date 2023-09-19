describe('spec.cy.ts', () => {
  it('should visit', () => {
    cy.visit('https://www.google.com/')
    cy.contains('Google Search')
  })
})

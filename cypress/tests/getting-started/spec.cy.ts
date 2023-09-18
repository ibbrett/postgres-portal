describe('sepc.cy.ts', () => {
  it('shoulld visit', () => {
    cy.visit('/')
    cy.contains('Postgres Portal')
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

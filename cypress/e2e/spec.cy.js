describe('suite name', () => {
  it('my_test1', () => {
    cy.visit('https://google.com')
    // cy.get('#APjFqb',{timeout:6000}).type('Hello World {enter}')
    cy.xpath("/html/body/div[1]/div[4]/div[2]/div").should("have.length","1")
  })

  // it('my_test2', () => {
  //   cy.visit('https://google.com')
  //   cy.title().should('be.a',"google")
  //   cy.title().contains('Google')
  // })
  
})
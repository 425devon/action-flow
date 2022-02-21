describe('App Test', function () {
    beforeEach(function () {
      cy.visit('/')
    })
  
    it('tests that the app is visible', function () {
      cy.get('#app').should('be.visible')
    })
  
    it('tests that the header contains the text', function () {
      cy.get('.hello h1').should('include.text', 'Action Flow Testing')
    })
  })
  
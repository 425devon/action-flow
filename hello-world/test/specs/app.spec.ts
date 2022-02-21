describe('App Test', function () {
    beforeEach(function () {
      cy.visit('/')
    })
  
    it('tests that the app is visible', function () {
      cy.get('#app').should('be.visible')
    })
  
    it('tests that the header contains the text', function () {
      cy.get('.hello h1').should('contain', 'Action Flow Testing v0.0.1-2')
    })
  })
  
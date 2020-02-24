describe("Order", function () {
  describe("Not logged in", function () {
    beforeEach(function () {
      cy.visit('https://winsoft.staging.nexway.build/checkout/add?products=bae91594-46c2-4acd-8f1e-c915e7e49d2b&newCart=true')
    })

    it('validates the form', function() {
      cy.get('[data-test=firstName]').type('a!!!')
      cy.get('[data-test=lastName]').type('B@#')
      cy.get('[data-test=firstNameForm]').should('have.class', 'has-error')
      cy.get('[data-test=email]').type('automatedtester!@nexway.com')
      cy.get('[data-test=lastNameForm]').should('have.class', 'has-error')
      cy.get('[data-test=streetAddress]').type('Katowice street @**')
      cy.get('[data-test=emailForm]').should('have.class', 'has-error')
      cy.get('[data-test=zipCode]').type('70001?')
      cy.get('[data-test=streetAddressForm]').should('have.class', 'has-error')
      cy.get('[data-test=phone]').type('!#^')
      cy.get('[data-test=zipCodeForm]').should('have.class', 'has-error')
      cy.get('[data-test=phoneForm]').should('have.class', 'has-error')



    })
  })
})

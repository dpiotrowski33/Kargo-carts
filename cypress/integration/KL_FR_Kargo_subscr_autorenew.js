describe ('Kargo subscription automation test', function() {
    it ('Simulates auto renewal of subscription',function() {
        cy.visit('https://subscription.prep.websizing.com/bo/subscriptions/6735370/detail')
        
        cy.wait(5000)

        cy.get('#simulator_dropdown_button').click()

        cy.get('#simulateRenewalLink > .m-nav__link-text').click()

       
        })

    })
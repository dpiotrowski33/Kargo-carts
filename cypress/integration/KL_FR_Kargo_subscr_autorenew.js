describe ('Kargo subscription automation test', function() {
    it ('Simulates auto renewal of subscription',function() {
        cy.visit('https://subscription.prep.websizing.com/bo/subscriptions/6735468/detail')
        
        cy.get('#simulator_dropdown_button', {timeout:5000}).click() 

        cy.get('#simulateRenewalLink > .m-nav__link-text').click()

       
        })

    })
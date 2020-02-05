describe ('Kargo cart automation test', function() {
    it ('Makes user able to add product to Kaspersky cart and purchase it',function() {
        cy.visit('https://kasperskyfrance-default.staging.nexway.build/checkout/add?products=e9367e62-21a4-40bf-af8e-0a70e2e06c14&newCart=true', 
            {headers: {
                'accept-language': 'fr-FR'
            }})
        
        cy.get('[data-test=firstName]').type('Test_user_firstName')
        
        cy.get('[data-test=lastName]').type('Test_user_lastname')

        cy.get('[data-test=email]').type('automated_tester@nexway.com')

        cy.get('[data-test=zipCode]').type('29190')

        cy.get('[data-test=cardNumberForm]').type('4111 1111 1111 1111')

        cy.get('[data-test=securityCode]').type('999')

        cy.get('[data-test=continue]').should('have.class', '-active')

        cy.get('[data-test=continue]').click();

       

        
    })
})
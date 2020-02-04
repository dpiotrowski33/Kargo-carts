describe ('Kargo cart automation test', function() {
    it (' I am able to add product to cart and purchase it',function() {
        cy.visit('https://kasperskyfrance-default.staging.nexway.build/checkout/add?cartid=560bd814-4349-4077-8cf3-ccea288d4f39/')
        
        cy.get('[data-test=firstName]').type('Test_user_firstName')
        
        cy.get('[data-test=lastName]').type('Test_user_lastname')

        cy.get('[data-test=email]').type('automated_tester@nexway.com')

        cy.get('[data-test=zipCode]').type('40-025')

        cy.get('[data-test=cardNumberForm]').type('4111 1111 1111 1111')

        cy.get('[data-test=securityCode]').type('999')

        cy.get('[data-test=continue]').click();


        

        
    })
})
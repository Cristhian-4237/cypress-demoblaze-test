describe('Login Page', () => {

    beforeEach(() => {
      cy.login();         
    });

    it('Verify new phones can be added to the cart', () => {
        //cy.get('a#itemc[onclick="byCat(\'phone\')"]').click();
        cy.contains('a#itemc', 'Phones').click();
        cy.get('div#tbodyid[class=row] div.col-lg-4:nth-child(3) a.hrefch').click();
        cy.get('a.btn').click();
        cy.visit('/cart.html');
        cy.contains('Nexus 6').should('be.visible');
    });

    /*it('Verify About information popup is displayed', () => {
        cy.contains('a[data-toggle=modal]', 'About us').click();
        cy.get('h5#videoModalLabel').should('be.visible');
        //cy.contains('button.btn-secondary', 'Close').click();
        //cy.wait(5000);
    });

    it('Verify new laptops can be added to the cart', () => {
        cy.contains('a#itemc', 'Laptops').click();
        cy.get('div#tbodyid div.col-lg-4:nth-child(3) a.hrefch').click();
        cy.get('a[onclick="addToCart(11)"]').click();
        cy.visit('/cart.html');
        cy.contains('MacBook air').should('be.visible');
    });

    it('Verify new monitors can be added to the cart', () => {
        cy.contains('a#itemc', 'Monitors').click();
        cy.get('div#tbodyid div.col-lg-4:nth-child(2) a.hrefch').click();
        cy.get('a[onclick="addToCart(14)"]').click();
        cy.visit('/cart.html');
        cy.contains('ASUS Full HD').should('be.visible');
    });*/
        
});

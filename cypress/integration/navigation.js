describe('Route navigation', () => {
    it('should be able to traverse the various routes', () => {
        cy.visit('/');
        cy.findByText('Atoms >').click();
        cy.findByText('< Back').click();
        cy.findByText('Molecules >').click();
        cy.findByText('< Back').click();
        cy.findByText('Organisms >').click();
        cy.findByText('< Back').click();
    });

    it('should be able to start from any recognisable route', () => {
        cy.visit('/atoms/icons');
        cy.get('article').within(() => {
            cy.get('h1')
                .findByText('Icons')
                .should('exist');
        });

        cy.visit('/molecules');
        cy.findByText('< Back').click();
        cy.findByText('Organisms >').click();
        cy.url().should('include', '/organisms');
    });

    it('should handle native browser navigation', () => {
        cy.visit('/');
        cy.findByText('Molecules >').click();
        cy.findByText('Buttons').click();
        cy.go('back').go('back');
        cy.go('forward');
        cy.findByText('Buttons').click();

        cy.get('article').within(() => {
            cy.get('h1')
                .findByText('Buttons')
                .should('exist');
        });
    });
});

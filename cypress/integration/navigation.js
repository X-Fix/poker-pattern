describe('Route navigation', () => {
    it('should be able to traverse the various routes', () => {
        cy.visit('/');
        cy.findByText('Atoms >').click();
        cy.findByText('Icons').click();
        cy.get('article').within(() => {
            cy.get('h1')
                .findByText('Icons')
                .should('exist');
        });
        cy.go('back');
        cy.findByText('< Back').click();

        cy.findByText('Molecules >').click();
        cy.findByText('Buttons').click();
        cy.get('article').within(() => {
            cy.get('h1')
                .findByText('Buttons')
                .should('exist');
        });
        cy.go('back');
        cy.findByText('Inputs').click();
        cy.get('article').within(() => {
            cy.get('h1')
                .findByText('Inputs')
                .should('exist');
        });
        cy.go('back');
        cy.findByText('Poker Cards').click();
        cy.get('article').within(() => {
            cy.get('h1')
                .findByText('Poker Cards')
                .should('exist');
        });
        cy.go('back');
        cy.findByText('< Back').click();

        cy.findByText('Organisms >').click();
        cy.findByText('Participants List').click();
        cy.get('article').within(() => {
            cy.get('h1')
                .findByText('Participants List')
                .should('exist');
        });
        cy.go('back');
        cy.findByText('Header').click();
        cy.get('article').within(() => {
            cy.get('h1')
                .findByText('Header')
                .should('exist');
        });
        cy.go('back');
        cy.findByText('Footer').click();
        cy.get('article').within(() => {
            cy.get('h1')
                .findByText('Footer')
                .should('exist');
        });
        cy.go('back');
        cy.findByText('Choose Form').click();
        cy.get('article').within(() => {
            cy.get('h1')
                .findByText('Choose Form')
                .should('exist');
        });
        cy.go('back');
        cy.findByText('Create Session Form').click();
        cy.get('article').within(() => {
            cy.get('h1')
                .findByText('Create Session Form')
                .should('exist');
        });
        cy.go('back');
        cy.findByText('Join Session Form').click();
        cy.get('article').within(() => {
            cy.get('h1')
                .findByText('Join Session Form')
                .should('exist');
        });
        cy.go('back');
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

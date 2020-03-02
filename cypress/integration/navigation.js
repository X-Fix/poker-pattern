describe('Route navigation', () => {
    it('should be able to traverse the various routes', () => {
        cy.visit('http://localhost:5000');
        cy.findByText('Atoms >').click();
        cy.findByText('Icons')
            .click()
            .go('back');
        cy.findByText('< Back').click();
        cy.findByText('Molecules >').click();
        cy.findByText('< Back').click();
        cy.findByText('Organisms >').click();
        cy.findByText('< Back').click();
    });
});

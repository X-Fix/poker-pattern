describe('Route navigation', () => {
    it('should be able to traverse the various routes', () => {
        cy.visit('http://localhost:5000');
        cy.queryByTestId('link-atoms').click();
        cy.findByTestId('link-icons')
            .click()
            .go('back');
        cy.findByTestId('link-home').click();
        cy.findByTestId('link-molecules').click();
        cy.findByTestId('link-home').click();
        cy.findByTestId('link-organisms').click();
        cy.findByTestId('link-home').click();
    });
});

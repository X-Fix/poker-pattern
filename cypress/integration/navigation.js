describe('Route navigation', () => {
    it('should be able to traverse the various routes', () => {
        cy.visit('http://localhost:5000');
        cy.get('[data-testid="link-atoms"]').click();
        cy.get('[data-testid="link-icons"]').click();
        cy.go('back');
        cy.get('[data-testid="link-home"]').click();
        cy.get('[data-testid="link-molecules"]').click();
        cy.get('[data-testid="link-home"]').click();
        cy.get('[data-testid="link-organisms"]').click();
        cy.get('[data-testid="link-home"]').click();
    });
});

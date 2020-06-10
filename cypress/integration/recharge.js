function sendUssdCode(code) {
    cy.get('#general_command_select_input').type(code);
    cy.get('#general_btn.button_dialog', { timeout: 30000 }).click();
}

function waitForLoadingScreen() {
    cy.get('#wait_table').should('be.visible');
    cy.get('#wait_table', { timeout: 30000 }).should('not.be.visible');
}

/* eslint-disable cypress/no-unnecessary-waiting */
it('should recharge the LTE', () => {
    cy.visit('http://192.168.8.1/html/home.html');
    cy.findByText('Log In').click();

    cy.get('#username').type('admin');
    cy.get('#password').type('08222292');
    cy.get('#pop_login').click();

    cy.findByText('USSD').click();

    sendUssdCode('*147#');
    waitForLoadingScreen();

    sendUssdCode('4');
    waitForLoadingScreen();

    sendUssdCode('1');
    waitForLoadingScreen();

    sendUssdCode('3');
    waitForLoadingScreen();

    sendUssdCode('6');
    waitForLoadingScreen();

    sendUssdCode('2');
});

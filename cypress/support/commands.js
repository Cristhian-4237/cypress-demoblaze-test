// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
  cy.visit('/');
  cy.get('a#login2').click();
  cy.get('input#loginusername').type(Cypress.env('username'), {force: true});        
  cy.get('input#loginpassword').type(Cypress.env('password'), {force: true});
  cy.contains('button.btn-primary', 'Log in').click();
  //cy.get('input#loginusername').clear().type(Cypress.env('username'));
  //cy.get('#nameofuser').should('be.visible');
  //cy.contains('Welcome testcy01');       
})
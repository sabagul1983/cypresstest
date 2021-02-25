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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("register", (fn,ln,em,pw) => {
    cy.get('.ico-register').click();
    cy.get('#FirstName').type(fn);
    cy.get('#LastName').type(ln);
    cy.get('#Email').type(em);
    cy.get('#Password').type(pw);
    cy.get('#ConfirmPassword').type(pw);
    cy.xpath('//select[@name="DateOfBirthDay"]').select('2').contains('2');
    cy.xpath('//select[@name="DateOfBirthMonth"]').select('February').contains('February');
    cy.xpath('//select[@name="DateOfBirthYear"]').select('1911').should('have.value','1911');

})
Cypress.Commands.add("login",(em,pw)=>{
    cy.get('.ico-login').click();
        cy.get('#Email').type(em);
        cy.get('#Password').type(pw);
        cy.get('input[value="Log in"]').click();
        cy.title().should('include','nopCommerce demo store');

})

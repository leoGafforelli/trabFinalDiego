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

import locator from "../support/locator";


Cypress.Commands.add('login', () => {
  cy.fixture('user').as('user').then((login) => {
    cy.visit('/index.php')
    cy.get(locator.LOGIN_PAGE.EMAIL).type(login.name)
    cy.get(locator.LOGIN_PAGE.PASSWORD).type(login.password)
    cy.get(locator.LOGIN_PAGE.BUTTON).click()
  })
});

Cypress.Commands.add('criarQuarto', (nomeQuarto, produtoDescricao, preco, capacidade) => {
  cy.get('#menu_adicionarQ').click()
  cy.get('#nome_do_quarto').type(nomeQuarto)
  cy.get('#descricao').type(produtoDescricao)
  cy.get('#preco_por_noite').type(preco)
  cy.get('#capacidade').type(capacidade)
  cy.get('#disponibilidade').select('Disponível')
  cy.get('.btn').click()
});

import { faker } from '@faker-js/faker';

var nomeQuarto = faker.commerce.productName()
var produtoDescricao = faker.commerce.productDescription()
var preco = faker.number.int({ min: 100, max: 1000 })
var capacidade = faker.number.int({ min: 1, max: 10 })

describe('TESTE PHP', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  beforeEach(() => {
    cy.login()
  })

  it('Valida a tela da home e sala de reservas', () => {
    cy.get('h2').should('contain', 'Dashboard - Quartos Disponíveis e Indisponíveis')
    cy.get('.btn').click()
    cy.get('h2').should('contain', 'Administração de Reservas')
  })

  it('Valida quartos disponiveis e indisponiveis', () => {
    cy.get('.alert-success').should('contain', 'Quartos Disponíveis')
    cy.get('.alert-danger').should('contain', 'Quartos Indisponíveis')
  })

  it('Valida a tela de adicionar quartos e adiciona um quarto', () => {
    cy.criarQuarto(nomeQuarto, produtoDescricao, preco, capacidade)
  })

  it('Editar quarto', () => {
    cy.get('#menu_editarQ').click()
    cy.get(':nth-child(1) > div > .btn-primary').click()
    cy.get('#descricao').clear().type(produtoDescricao)
    cy.get('.btn-primary').click()
    cy.get(':nth-child(1) > div > .btn-primary').click()
    cy.get('#descricao').should('contain', produtoDescricao)
  })

  it('Excluir quarto', () => {
    cy.criarQuarto(nomeQuarto, produtoDescricao, preco, capacidade)
    cy.get('#menu_editarQ').click()
    cy.get('.container').should('contain', nomeQuarto)
    cy.get(':nth-child(1) > div > .btn-danger').click()
  })




});
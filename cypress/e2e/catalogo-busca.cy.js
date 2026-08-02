/// <reference types="cypress"/>
import catalogo from '../fixtures/livros.json'

describe('funcionalidade: Busca no catálogo', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve fazer a busca do livro 1984', () => {

        cy.get('#search-input').type('1984')
        cy.get('.card-title').should('contain', '1984')
    });
    it('Deve fazer a busca de um  do arquivo de massa de dados', () => {

        cy.get('#search-input').type(catalogo[1].livro)
        cy.get('.card-title').should('contain', catalogo[1].livro)
    });

    it('Deve fazer a busca de um livro usando Fixture', () => {
        cy.fixture('livros').then((catalogo) => {
            cy.get('#search-input').type(catalogo[1].livro)
            cy.get('.card-title').should('contain', catalogo[1].livro)

        })
    });

    it('Deve validar todos os livros da Lista', () => {
        cy.fixture('livros').then((catalogo) => {
            catalogo.forEach(item => {
                cy.get('#search-input').clear().type(item.livro)
                cy.get('.card-title').should('contain', item.livro)

            })
        })
    });

});
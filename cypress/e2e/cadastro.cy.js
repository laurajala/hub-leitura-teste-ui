/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-pages';

describe('funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
    });

    it('Deve fazer cadastro com sucesso, usando função JS', () => {
        let email = `teste${Date.now()}@teste.com`;

        cy.get('#name').type('Laura');
        cy.get('#email').type(email);
        cy.get('#phone').type('67123456789');
        cy.get('#password').type('Password123');
        cy.get('#confirm-password').type('Password123');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();

        // Resultado Esperado
        cy.url().should('include', '/dashboard');
    });

    it('Deve fazer cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()

        cy.get('#name').type(nome);
        cy.get('#email').type(email);
        cy.get('#phone').type('67123456789');
        cy.get('#password').type('Password123');
        cy.get('#confirm-password').type('Password123');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();

        // Resultado Esperado
        cy.url().should('include', '/dashboard');
        cy.get('#user-name').should('contain', nome);
    });

    it('Deve preencher cadastro com sucesso, usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`;
        let nome = faker.person.fullName({ sex: 'female' })
        cy.preencherCadastro(
            nome,
            email,
            '67123456789',
            'Password123',
            'Password123'
        )

        cy.url().should('include', '/dashboard');

    });
    it('Deve fazer cadastro com sucesso Usando Page Object', () => {
        let email = `teste${Date.now()}@teste.com`;
        cadastroPage.preencherCadastro('Laura', email, '67912334567', 'senha123', 'senha123')
        cy.url().should('include', '/dashboard');

    });

    it.only('Deve Validar mensagem de erro ao tentar cadastrar sem preencher nome', () => {
        cadastroPage.preencherCadastro('','teste@teste.com','67912334567','senha123','senha123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain','Nome deve ter pelo menos 2 caracteres')


        
    })


});
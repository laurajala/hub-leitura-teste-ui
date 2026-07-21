/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html');
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

});
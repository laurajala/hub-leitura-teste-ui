/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Fluxo End to End de cadastro e login', () => {

    it('Deve cadastrar um novo usuário e realizar login com sucesso', () => {

        const nome = faker.person.fullName();
        const email = faker.internet.email();
        const telefone = '67123456789';
        const senha = 'Password123';

        // Cadastro
        cy.visit('register.html');

        cy.preencherCadastro(
            nome,
            email,
            telefone,
            senha,
            senha
        );

        cy.url().should('include', '/dashboard');
        cy.get('#user-name').should('contain', nome);

        // Encerra a sessão criada pelo cadastro antes de testar o login
        cy.clearLocalStorage();
        cy.clearCookies();

        // Login com o usuário recém-cadastrado
        cy.visit('login.html');

        cy.login(email, senha);
    });

});

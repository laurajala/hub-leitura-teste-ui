# 📚 Hub de Leitura — Automação de Testes

Projeto de **automação de testes web** desenvolvido para validar as principais funcionalidades do **Hub de Leitura**, utilizando **Cypress e JavaScript**.

O projeto contempla testes funcionais e **End-to-End (E2E)**, aplicando boas práticas de automação como **Page Object, Custom Commands, geração de dados dinâmicos com Faker e massa de dados com Fixtures**.

## 🎯 Objetivo

Garantir a qualidade das principais funcionalidades do Hub de Leitura por meio de testes automatizados, validando diferentes fluxos da aplicação e o comportamento esperado do sistema.

## 🚀 Tecnologias e ferramentas

* Cypress
* JavaScript
* Node.js
* Faker
* Git
* GitHub

## 🧪 Cenários automatizados

### 👤 Cadastro

* Cadastro de usuário com sucesso
* Cadastro utilizando dados dinâmicos com Faker
* Cadastro utilizando Custom Commands
* Cadastro utilizando Page Object
* Validação de campos obrigatórios
* Validação de mensagens de erro

### 🔐 Login

* Login de usuário com sucesso
* Login utilizando Custom Commands
* Login com perfil administrador
* Login utilizando massa de dados com Fixtures

### 📚 Catálogo e busca

* Validação das funcionalidades do catálogo
* Busca de livros
* Validação dos resultados apresentados pela aplicação

### ✉️ Contato

* Envio do formulário de contato com sucesso
* Validação de nome obrigatório
* Validação de e-mail obrigatório
* Validação de assunto obrigatório
* Validação de mensagem obrigatória

### 🔄 Fluxo End-to-End

Automação de um fluxo completo simulando a utilização da aplicação pelo usuário:

**Cadastro → Validação do usuário → Login → Dashboard**

O cenário utiliza dados gerados dinamicamente e reutiliza as credenciais do usuário recém-cadastrado para realizar o login.

## 🛠️ Boas práticas aplicadas

* Page Object
* Custom Commands
* Fixtures para massa de dados
* Faker para geração de dados dinâmicos
* Separação dos testes por funcionalidade
* Reutilização de comandos
* Validações com assertions do Cypress
* Organização dos cenários utilizando `describe`, `beforeEach` e `it`

## 📁 Estrutura do projeto

```text
cypress/
├── e2e/
│   ├── cadastro.cy.js
│   ├── catalogo-busca.cy.js
│   ├── catalogo.cy.js
│   ├── contato.cy.js
│   ├── end-to-end.cy.js
│   └── login.cy.js
│
├── fixtures/
│
└── support/
    ├── pages/
    ├── commands.js
    └── e2e.js
```

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/laurajala/hub-leitura-teste-ui.git
```

### 2. Acesse a pasta

```bash
cd hub-leitura-teste-ui
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie a aplicação Hub de Leitura

Os testes são executados sobre o [Hub de Leitura](https://github.com/EBAC-QE/hub-de-leitura-integrado), sistema educacional de biblioteca disponibilizado pela EBAC.

Em outra janela do terminal, fora da pasta deste projeto:

```bash
git clone https://github.com/EBAC-QE/hub-de-leitura-integrado.git
cd hub-de-leitura-integrado
npm install
npm start
```

A aplicação ficará disponível em `http://localhost:3000`, endereço configurado como `baseUrl` no `cypress.config.js`.

> Mantenha o servidor em execução enquanto os testes rodam. Caso contrário, o Cypress exibirá o erro *"Cypress could not verify that this server is running"*.

### 5. Abra o Cypress

```bash
npx cypress open
```

Selecione **E2E Testing**, escolha o navegador desejado e execute os cenários.

Para execução em modo headless:

```bash
npx cypress run
```

## 💡 Conceitos demonstrados

Este projeto demonstra conhecimentos práticos em:

* Automação de testes web
* Testes funcionais
* Testes End-to-End
* Criação e manutenção de casos de teste automatizados
* Seletores e interação com elementos DOM
* Assertions
* Geração e gerenciamento de massa de testes
* Reutilização e organização de código de automação

## 👩‍💻 Autora

**Laura Ajala**
Quality Engineer

# 🧪 Testes Automatizados – ParaBank (Cypress)

Projeto de **testes automatizados end‑to‑end (E2E)** utilizando **Cypress** para validar o **cadastro de usuários** no site **ParaBank (Parasoft)**.

Este projeto foi criado com foco em **boas práticas de QA**, organização por **Page Objects** e uso de **dados dinâmicos** com Faker.

---

## 🚀 Tecnologias utilizadas

* **Node.js**
* **Cypress**
* **JavaScript**
* **@faker-js/faker**
* **VS Code**

---

## 📂 Estrutura do projeto

```
parabank/
├─ cypress/
│  ├─ e2e/
│  │  └─ register-user-tests/
│  │     └─ register-user-tests.cy.js
│  ├─ pages/
│  │  └─ register-user-page/
│  │     └─ register-user-page.js
│  └─ support/
├─ cypress.config.js
├─ package.json
├─ package-lock.json
└─ README.md
```

---

## 🧠 O que está sendo testado

* Acesso à página de **registro de usuário**
* Preenchimento correto dos campos obrigatórios
* Geração de **username dinâmico** com Faker
* Submissão do formulário
* Validação do **cadastro realizado com sucesso**

---

## 🧩 Padrão utilizado

* **Page Object Model (POM)**
* Comandos reutilizáveis para ações como:

  * Preencher nome, endereço e dados pessoais
  * Preencher usuário e senha
  * Submeter o formulário

Exemplo de uso no teste:

```js
cy.typeFirstName('Dawid');
cy.typeLastName('Carneiro');
cy.typeUserName(faker.internet.username());
cy.typePassword('teste123');
cy.clickRegister();
```

---

## ▶️ Como executar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
```

### 2️⃣ Instalar as dependências

```bash
npm install
```

### 3️⃣ Abrir o Cypress (modo interativo)

```bash
npx cypress open
```

### 4️⃣ Executar os testes em modo headless

```bash
npx cypress run
```

---

## 🌐 Sistema testado

* Site: [https://parabank.parasoft.com](https://parabank.parasoft.com)
* Página de registro: [https://parabank.parasoft.com/parabank/register.htm](https://parabank.parasoft.com/parabank/register.htm)

---

## 🎯 Objetivo do projeto

Este projeto faz parte do meu **portfólio de QA**, com o objetivo de:

* Praticar automação de testes com Cypress
* Aplicar boas práticas de organização
* Simular cenários reais de cadastro de usuário
* Evoluir para testes mais complexos futuramente

---

## 👨‍💻 Autor

**Dawid Lucas Gomes Carneiro**
QA em formação | Testes Manuais e Automatizados

---

## 📌 Próximos passos (evoluções futuras)

* Validação de mensagens de erro
* Testes negativos
* Integração com CI (GitHub Actions)
* Relatórios de execução

---

✨ *Projeto desenvolvido para fins educacionais e de portfólio.*

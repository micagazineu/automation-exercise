# Automation Exercise - Cypress E2E

Este projeto contém a automação de testes End-to-End (E2E) para a aplicação fictícia [Automation Exercise](https://automationexercise.com/) utilizando o framework **Cypress**. O projeto foi estruturado utilizando o padrão Page Object Model (POM) e gera relatórios em HTML automaticamente após a execução.

## Casos de Teste Cobertos

Os seguintes casos de teste, descritos na página de Test Cases, foram implementados:
- **Test Case 1:** Register User
- **Test Case 2:** Login User with correct email and password
- **Test Case 3:** Login User with incorrect email and password
- **Test Case 4:** Logout User
- **Test Case 5:** Register User with existing email
- **Test Case 8:** Verify All Products and product detail page
- **Test Case 9:** Search Product
- **Test Case 10:** Verify Subscription in home page
- **Test Case 15:** Place Order: Register before Checkout
- **Test Case 16:** Place Order: Login before Checkout

## Estrutura do Projeto

O projeto adota o padrão de arquitetura **Page Object Model (POM)**:
- `cypress/e2e/test_cases/`: Arquivos de especificações (specs) agrupados logicamente.
- `cypress/pages/`: Classes que abstraem e isolam os seletores e ações de cada página.
- `cypress.config.ts`: Arquivo de configuração central do projeto.

## Pré-requisitos

- **Node.js** v20 ou superior.

## Como Executar Localmente

### 1. Instalar as dependências

```bash
npm install
```

### 2. Executar em modo Headless

```bash
npx cypress run
```

### 3. Abrir a Interface Interativa (Launchpad)

```bash
npx cypress open
```

## Integração Contínua (GitHub Actions)

Este repositório está integrado com o **GitHub Actions**. Uma pipeline é acionada a cada commit nas branches principais ou via execução manual.
A pipeline realiza os seguintes passos:
1. Instalação das dependências com cache otimizado.
2. Execução de todos os testes configurados.
3. Geração e upload de **Relatórios HTML** (Mochawesome) disponíveis na seção *Artifacts* da Action. Em caso de falha, screenshots e vídeos também são coletados.

## Relatórios

Utilizamos o pacote `cypress-mochawesome-reporter` para a geração de relatórios limpos e interativos. Localmente, após rodar via `cypress run`, o relatório completo estará em:
`cypress/reports/html/index.html`
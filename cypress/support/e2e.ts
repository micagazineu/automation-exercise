// ***********************************************************
// Arquivo de suporte Cypress E2E (cypress/support/e2e.ts)
// Executado automaticamente antes de cada arquivo de teste spec
// ***********************************************************

import './commands';
import 'cypress-mochawesome-reporter/register';

// Ignora exceções não tratadas de scripts de terceiros (ex: Google Analytics, ads)
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retornar false impede o Cypress de falhar o teste por causa de erros externos da aplicação
  return false;
});

// Limpa cookies e storage antes de cada suíte se necessário
beforeEach(() => {
  // Hook executado antes de cada 'it'
});

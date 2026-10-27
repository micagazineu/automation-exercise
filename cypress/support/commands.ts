/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Seletor utilitário para elementos com data-cy
       * @example cy.getByDataCy('submit-button')
       */
      getByDataCy(value: string, options?: Partial<Loggable & Timeoutable & Withinable & Shadow>): Chainable<JQuery<HTMLElement>>;

      /**
       * Realiza login programático via API preservando a sessão
       * @example cy.loginViaApi('user@domain.com', 'secret123')
       */
      loginViaApi(email: string, password: string): Chainable<void>;
    }
  }
}

// Implementação do comando getByDataCy
Cypress.Commands.add('getByDataCy', (value: string, options?: any) => {
  return cy.get(`[data-cy="${value}"]`, options);
});

// Implementação de login programático usando cy.session
Cypress.Commands.add('loginViaApi', (email: string, password: string) => {
  cy.session(
    [email, password],
    () => {
      cy.request({
        method: 'POST',
        url: '/api/auth/login',
        body: { email, password },
        failOnStatusCode: false,
      }).then((response) => {
        if (response.status === 200 && response.body?.token) {
          window.localStorage.setItem('auth_token', response.body.token);
        }
      });
    },
    {
      validate() {
        // Valida se o token ainda existe ou testa rota de integridade
        expect(window.localStorage.getItem('auth_token')).to.be.a('string');
      },
    }
  );
});

export {};

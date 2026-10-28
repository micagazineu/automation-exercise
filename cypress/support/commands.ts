/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      
      getByDataCy(value: string, options?: Partial<Loggable & Timeoutable & Withinable & Shadow>): Chainable<JQuery<HTMLElement>>;

    
      createUserViaApi(user: { name: string; email: string; password: string }): Chainable<any>;

     
      deleteUserViaApi(email: string, password: string): Chainable<any>;
    }
  }
}

Cypress.Commands.add('getByDataCy', (value: string, options?: any) => {
  return cy.get(`[data-cy="${value}"]`, options);
});

Cypress.Commands.add('createUserViaApi', (user: { name: string; email: string; password: string }) => {
  return cy.request({
    method: 'POST',
    url: '/api/createAccount',
    form: true,
    body: {
      name: user.name,
      email: user.email,
      password: user.password,
      title: 'Mr',
      birth_date: '01',
      birth_month: '01',
      birth_year: '2000',
      firstname: 'John',
      lastname: 'Doe',
      company: 'QA Company',
      address1: '123 QA St',
      address2: 'Apt 1',
      country: 'United States',
      zipcode: '90001',
      state: 'California',
      city: 'Los Angeles',
      mobile_number: '1234567890',
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('deleteUserViaApi', (email: string, password: string) => {
  return cy.request({
    method: 'DELETE',
    url: '/api/deleteAccount',
    form: true,
    body: { email, password },
    failOnStatusCode: false,
  });
});

export {};

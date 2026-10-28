class SignupPage {
  verifyAccountInfoVisible() {
    cy.contains('Enter Account Information', { matchCase: false }).should('be.visible');
  }

  fillAccountInfo(password: string) {
    cy.get('#id_gender1').check({ force: true });
    cy.get('[data-qa="password"]').type(password);
    cy.get('[data-qa="days"]').select('1');
    cy.get('[data-qa="months"]').select('January');
    cy.get('[data-qa="years"]').select('2000');
    
    cy.get('#newsletter').check({ force: true });
    cy.get('#optin').check({ force: true });

    cy.get('[data-qa="first_name"]').type('John');
    cy.get('[data-qa="last_name"]').type('Doe');
    cy.get('[data-qa="company"]').type('QA Company');
    cy.get('[data-qa="address"]').type('123 QA Street');
    cy.get('[data-qa="address2"]').type('Suite 100');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('California');
    cy.get('[data-qa="city"]').type('Los Angeles');
    cy.get('[data-qa="zipcode"]').type('90001');
    cy.get('[data-qa="mobile_number"]').type('1234567890');
  }

  clickCreateAccount() {
    cy.get('[data-qa="create-account"]').click({ force: true });
  }

  verifyAccountCreated() {
    cy.get('[data-qa="account-created"]').should('be.visible');
  }

  clickContinue() {
    cy.get('[data-qa="continue-button"]').click({ force: true });
  }
}

export default new SignupPage();
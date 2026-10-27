class SignupPage {
  verifyAccountInfoVisible() {
    cy.get('h2 b').contains('Enter Account Information').should('be.visible');
  }

  fillAccountInfo(password: string) {
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type(password);
    cy.get('[data-qa="days"]').select('1');
    cy.get('[data-qa="months"]').select('January');
    cy.get('[data-qa="years"]').select('2000');
    
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    cy.get('[data-qa="first_name"]').type('First');
    cy.get('[data-qa="last_name"]').type('Last');
    cy.get('[data-qa="company"]').type('Company');
    cy.get('[data-qa="address"]').type('Address');
    cy.get('[data-qa="address2"]').type('Address2');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('State');
    cy.get('[data-qa="city"]').type('City');
    cy.get('[data-qa="zipcode"]').type('12345');
    cy.get('[data-qa="mobile_number"]').type('1234567890');
  }

  clickCreateAccount() {
    cy.get('[data-qa="create-account"]').click();
  }

  verifyAccountCreated() {
    cy.get('[data-qa="account-created"]').should('be.visible');
  }

  clickContinue() {
    cy.get('[data-qa="continue-button"]').click();
  }
}

export default new SignupPage();
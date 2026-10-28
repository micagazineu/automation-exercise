class HomePage {
  visit() {
    cy.visit('/');
  }

  verifyHomePageVisible() {
    cy.get('body').should('be.visible');
    cy.get('.features_items').should('be.visible');
  }

  clickSignupLogin() {
    cy.get('a[href="/login"]').click({ force: true });
  }

  verifyLoggedInAs(username: string) {
    cy.contains('Logged in as', { timeout: 15000 })
      .should('be.visible')
      .and('contain.text', username);
  }

  clickDeleteAccount() {
    cy.get('a[href="/delete_account"]').click({ force: true });
  }

  clickLogout() {
    cy.get('a[href="/logout"]').click({ force: true });
  }

  clickProducts() {
    cy.get('a[href="/products"]').click({ force: true });
  }

  clickCart() {
    cy.get('a[href="/view_cart"]').first().click({ force: true });
  }

  verifySubscriptionVisible() {
    cy.get('#footer').scrollIntoView();
    cy.contains('h2', 'Subscription', { matchCase: false }).should('be.visible');
  }

  subscribe(email: string) {
    cy.get('#susbscribe_email').scrollIntoView().clear().type(email);
    cy.get('#subscribe').click({ force: true });
  }

  verifySubscriptionSuccessMessage() {
    cy.get('#success-subscribe')
      .should('be.visible')
      .and('contain.text', 'You have been successfully subscribed!');
  }
}

export default new HomePage();
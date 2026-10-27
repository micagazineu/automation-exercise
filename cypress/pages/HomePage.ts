class HomePage {
  visit() {
    cy.visit('/');
  }

  verifyHomePageVisible() {
    cy.get('body').should('be.visible');
    cy.get('.features_items').should('be.visible');
  }

  clickSignupLogin() {
    cy.get('a[href="/login"]').click();
  }

  verifyLoggedInAs(username: string) {
    cy.get('li').contains(`Logged in as ${username}`).should('be.visible');
  }

  clickDeleteAccount() {
    cy.get('a[href="/delete_account"]').click();
  }

  clickLogout() {
    cy.get('a[href="/logout"]').click();
  }

  clickProducts() {
    cy.get('a[href="/products"]').click();
  }

  clickCart() {
    cy.get('a[href="/view_cart"]').first().click();
  }

  verifySubscriptionVisible() {
    cy.get('h2').contains('Subscription').should('be.visible');
  }

  subscribe(email: string) {
    cy.get('#susbscribe_email').type(email);
    cy.get('#subscribe').click();
  }

  verifySubscriptionSuccessMessage() {
    cy.get('#success-subscribe').should('contain', 'You have been successfully subscribed!');
  }
}

export default new HomePage();
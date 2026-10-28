class CheckoutPage {
  verifyAddressDetails() {
    cy.get('#address_delivery').should('be.visible');
    cy.get('#address_invoice').should('be.visible');
  }

  verifyOrderDetails() {
    cy.get('#cart_info').should('be.visible');
  }

  enterDescriptionAndPlaceOrder(description: string) {
    cy.get('textarea[name="message"]').clear().type(description);
    cy.get('a[href="/payment"]').scrollIntoView().click({ force: true });
  }

  enterPaymentDetails(name: string, cardNumber: string, cvc: string, expirationMonth: string, expirationYear: string) {
    cy.get('[data-qa="name-on-card"]').clear().type(name);
    cy.get('[data-qa="card-number"]').clear().type(cardNumber);
    cy.get('[data-qa="cvc"]').clear().type(cvc);
    cy.get('[data-qa="expiry-month"]').clear().type(expirationMonth);
    cy.get('[data-qa="expiry-year"]').clear().type(expirationYear);
  }

  clickPayAndConfirmOrder() {
    cy.get('[data-qa="pay-button"]').click({ force: true });
  }

  verifySuccessMessage() {
    cy.get('[data-qa="order-placed"]').should('be.visible');
    cy.contains('Order Placed!', { matchCase: false }).should('be.visible');
  }
}

export default new CheckoutPage();
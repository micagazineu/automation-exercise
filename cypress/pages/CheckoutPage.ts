class CheckoutPage {
  verifyAddressDetails() {
    cy.get('#address_delivery').should('be.visible');
    cy.get('#address_invoice').should('be.visible');
  }

  verifyOrderDetails() {
    cy.get('#cart_info').should('be.visible');
  }

  enterDescriptionAndPlaceOrder(description: string) {
    cy.get('textarea[name="message"]').type(description);
    cy.get('a[href="/payment"]').click();
  }

  enterPaymentDetails(name: string, cardNumber: string, cvc: string, expirationMonth: string, expirationYear: string) {
    cy.get('[data-qa="name-on-card"]').type(name);
    cy.get('[data-qa="card-number"]').type(cardNumber);
    cy.get('[data-qa="cvc"]').type(cvc);
    cy.get('[data-qa="expiry-month"]').type(expirationMonth);
    cy.get('[data-qa="expiry-year"]').type(expirationYear);
  }

  clickPayAndConfirmOrder() {
    cy.get('[data-qa="pay-button"]').click();
  }

  verifySuccessMessage() {
    cy.get('[data-qa="order-placed"]').should('be.visible');
  }
}

export default new CheckoutPage();
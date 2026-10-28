class CartPage {
  verifyCartPageVisible() {
    cy.url().should('include', '/view_cart');
    cy.get('#cart_info').should('be.visible');
  }

  proceedToCheckout() {
    cy.get('.check_out').click({ force: true });
  }

  clickRegisterLoginModal() {
    cy.get('.modal-body a[href="/login"]').click({ force: true });
  }
}

export default new CartPage();
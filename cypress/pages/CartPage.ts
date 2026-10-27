class CartPage {
  verifyCartPageVisible() {
    cy.get('#cart_info').should('be.visible');
  }

  proceedToCheckout() {
    cy.get('.check_out').click();
  }

  clickRegisterLoginModal() {
    cy.get('.modal-body a[href="/login"]').click();
  }
}

export default new CartPage();
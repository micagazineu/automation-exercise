class ProductDetailsPage {
  verifyProductDetailsVisible() {
    cy.url().should('include', '/product_details');
    cy.get('.product-information').should('be.visible');
    cy.get('.product-information h2').should('be.visible');
    cy.contains('.product-information p', 'Category', { matchCase: false }).should('be.visible');
    cy.contains('.product-information span', 'Rs.', { matchCase: false }).should('be.visible');
    cy.contains('.product-information p', 'Availability', { matchCase: false }).should('be.visible');
    cy.contains('.product-information p', 'Condition', { matchCase: false }).should('be.visible');
    cy.contains('.product-information p', 'Brand', { matchCase: false }).should('be.visible');
  }

  addToCart() {
    cy.get('button.cart').first().click({ force: true });
  }

  clickContinueShopping() {
    cy.get('.modal-footer .btn').click({ force: true });
    cy.get('#cartModal').should('not.be.visible');
  }
}

export default new ProductDetailsPage();
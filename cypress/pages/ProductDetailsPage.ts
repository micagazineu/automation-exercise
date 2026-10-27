class ProductDetailsPage {
  verifyProductDetailsVisible() {
    cy.get('.product-information').should('be.visible');
    cy.get('.product-information h2').should('be.visible');
    cy.get('.product-information p').contains('Category').should('be.visible');
    cy.get('.product-information span').contains('Rs.').should('be.visible');
    cy.get('.product-information p').contains('Availability').should('be.visible');
    cy.get('.product-information p').contains('Condition').should('be.visible');
    cy.get('.product-information p').contains('Brand').should('be.visible');
  }

  addToCart() {
    cy.get('.cart').click();
  }

  clickContinueShopping() {
    cy.get('.modal-footer .btn').click();
  }
}

export default new ProductDetailsPage();
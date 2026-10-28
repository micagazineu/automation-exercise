class ProductsPage {
  verifyAllProductsVisible() {
    cy.url().should('include', '/products');
    cy.contains('.title', 'All Products', { matchCase: false }).should('be.visible');
    cy.get('.features_items').should('be.visible');
  }

  clickFirstProductViewProduct() {
    cy.get('a[href^="/product_details"]').first().scrollIntoView().click({ force: true });
  }

  searchProduct(productName: string) {
    cy.get('#search_product').type(productName);
    cy.get('#submit_search').click({ force: true });
  }

  verifySearchedProductsVisible() {
    cy.contains('.title', 'Searched Products', { matchCase: false }).should('be.visible');
  }

  verifyAllProductsRelatedToSearchAreVisible(productName: string) {
    cy.get('.features_items .col-sm-4').should('have.length.at.least', 1);
    cy.get('.productinfo p').should('contain.text', productName);
  }
}

export default new ProductsPage();
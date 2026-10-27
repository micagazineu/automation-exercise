class ProductsPage {
  verifyAllProductsVisible() {
    cy.get('.features_items').should('be.visible');
  }

  clickFirstProductViewProduct() {
    cy.get('a[href^="/product_details"]').first().click();
  }

  searchProduct(productName: string) {
    cy.get('#search_product').type(productName);
    cy.get('#submit_search').click();
  }

  verifySearchedProductsVisible() {
    cy.get('.features_items').contains('Searched Products').should('be.visible');
  }

  verifyAllProductsRelatedToSearchAreVisible(productName: string) {
    cy.get('.productinfo p').each(($el) => {
      expect($el.text().toLowerCase()).to.include(productName.toLowerCase());
    });
  }
}

export default new ProductsPage();
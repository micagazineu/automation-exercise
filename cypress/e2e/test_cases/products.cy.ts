import HomePage from '../../pages/HomePage';
import ProductsPage from '../../pages/ProductsPage';
import ProductDetailsPage from '../../pages/ProductDetailsPage';

describe('Products Test Cases', () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.verifyHomePageVisible();
  });

  it('Test Case 8: Verify All Products and product detail page', () => {
    HomePage.clickProducts();
    
    // Cypress sometimes adds #google_vignette if clicking directly, so let's handle ads in e2e.ts if needed, but it should be fine.
    ProductsPage.verifyAllProductsVisible();
    ProductsPage.clickFirstProductViewProduct();
    ProductDetailsPage.verifyProductDetailsVisible();
  });

  it('Test Case 9: Search Product', () => {
    HomePage.clickProducts();
    ProductsPage.verifyAllProductsVisible();
    
    const searchString = 'Blue Top'; // Existing product
    ProductsPage.searchProduct(searchString);
    ProductsPage.verifySearchedProductsVisible();
    ProductsPage.verifyAllProductsRelatedToSearchAreVisible(searchString);
  });
});
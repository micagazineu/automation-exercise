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
    
    
    ProductsPage.verifyAllProductsVisible();
    ProductsPage.clickFirstProductViewProduct();
    ProductDetailsPage.verifyProductDetailsVisible();
  });

  it('Test Case 9: Search Product', () => {
    HomePage.clickProducts();
    ProductsPage.verifyAllProductsVisible();
    
    const searchString = 'Blue Top'; 
    ProductsPage.searchProduct(searchString);
    ProductsPage.verifySearchedProductsVisible();
    ProductsPage.verifyAllProductsRelatedToSearchAreVisible(searchString);
  });
});
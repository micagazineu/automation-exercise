import { faker } from '@faker-js/faker';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';
import DeleteAccountPage from '../../pages/DeleteAccountPage';
import ProductsPage from '../../pages/ProductsPage';
import ProductDetailsPage from '../../pages/ProductDetailsPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';

describe('Checkout Test Cases', () => {
  const name = faker.person.fullName();
  const password = faker.internet.password();

  it('Test Case 15: Place Order: Register before Checkout', () => {
    const email = faker.internet.email();
    HomePage.visit();
    HomePage.verifyHomePageVisible();
    
    // Register
    HomePage.clickSignupLogin();
    LoginPage.signup(name, email);
    SignupPage.fillAccountInfo(password);
    SignupPage.clickCreateAccount();
    SignupPage.clickContinue();
    HomePage.verifyLoggedInAs(name);
    
    // Add product to cart
    HomePage.clickProducts();
    ProductsPage.clickFirstProductViewProduct();
    ProductDetailsPage.addToCart();
    ProductDetailsPage.clickContinueShopping();
    HomePage.clickCart();
    
    // Checkout
    CartPage.verifyCartPageVisible();
    CartPage.proceedToCheckout();
    CheckoutPage.verifyAddressDetails();
    CheckoutPage.verifyOrderDetails();
    CheckoutPage.enterDescriptionAndPlaceOrder('Great order');
    CheckoutPage.enterPaymentDetails(name, '411111111111', '123', '12', '2030');
    CheckoutPage.clickPayAndConfirmOrder();
    CheckoutPage.verifySuccessMessage();
    
    // Delete account
    HomePage.clickDeleteAccount();
    DeleteAccountPage.verifyAccountDeleted();
    DeleteAccountPage.clickContinue();
  });

  it('Test Case 16: Place Order: Login before Checkout', () => {
    const email = faker.internet.email();
    
    // Pre-condition: Register user
    HomePage.visit();
    HomePage.clickSignupLogin();
    LoginPage.signup(name, email);
    SignupPage.fillAccountInfo(password);
    SignupPage.clickCreateAccount();
    SignupPage.clickContinue();
    HomePage.clickLogout();

    // Actual Test
    HomePage.visit();
    HomePage.verifyHomePageVisible();
    
    // Login
    HomePage.clickSignupLogin();
    LoginPage.login(email, password);
    HomePage.verifyLoggedInAs(name);
    
    // Add product to cart
    HomePage.clickProducts();
    ProductsPage.clickFirstProductViewProduct();
    ProductDetailsPage.addToCart();
    ProductDetailsPage.clickContinueShopping();
    HomePage.clickCart();
    
    // Checkout
    CartPage.verifyCartPageVisible();
    CartPage.proceedToCheckout();
    CheckoutPage.verifyAddressDetails();
    CheckoutPage.verifyOrderDetails();
    CheckoutPage.enterDescriptionAndPlaceOrder('Great order login');
    CheckoutPage.enterPaymentDetails(name, '411111111111', '123', '12', '2030');
    CheckoutPage.clickPayAndConfirmOrder();
    CheckoutPage.verifySuccessMessage();
    
    // Delete account
    HomePage.clickDeleteAccount();
    DeleteAccountPage.verifyAccountDeleted();
    DeleteAccountPage.clickContinue();
  });
});
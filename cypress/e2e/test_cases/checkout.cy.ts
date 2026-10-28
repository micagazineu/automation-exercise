import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';
import DeleteAccountPage from '../../pages/DeleteAccountPage';
import ProductsPage from '../../pages/ProductsPage';
import ProductDetailsPage from '../../pages/ProductDetailsPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';
import { generateUserData } from '../../support/utils';

describe('Checkout Test Cases', () => {
  it('Test Case 15: Place Order: Register before Checkout', () => {
    const user = generateUserData();

    HomePage.visit();
    HomePage.verifyHomePageVisible();

    
    HomePage.clickSignupLogin();
    LoginPage.signup(user.name, user.email);
    SignupPage.fillAccountInfo(user.password);
    SignupPage.clickCreateAccount();
    SignupPage.verifyAccountCreated();
    SignupPage.clickContinue();
    HomePage.verifyLoggedInAs(user.name);

    
    HomePage.clickProducts();
    ProductsPage.clickFirstProductViewProduct();
    ProductDetailsPage.addToCart();
    ProductDetailsPage.clickContinueShopping();
    HomePage.clickCart();

    
    CartPage.verifyCartPageVisible();
    CartPage.proceedToCheckout();
    CheckoutPage.verifyAddressDetails();
    CheckoutPage.verifyOrderDetails();
    CheckoutPage.enterDescriptionAndPlaceOrder('Great order');
    CheckoutPage.enterPaymentDetails(user.name, '411111111111', '123', '12', '2030');
    CheckoutPage.clickPayAndConfirmOrder();
    CheckoutPage.verifySuccessMessage();

    
    HomePage.clickDeleteAccount();
    DeleteAccountPage.verifyAccountDeleted();
    DeleteAccountPage.clickContinue();
  });

  it('Test Case 16: Place Order: Login before Checkout', () => {
    const user = generateUserData();

    
    cy.createUserViaApi(user);

    HomePage.visit();
    HomePage.verifyHomePageVisible();

    
    HomePage.clickSignupLogin();
    LoginPage.login(user.email, user.password);
    HomePage.verifyLoggedInAs(user.name);

   
    HomePage.clickProducts();
    ProductsPage.clickFirstProductViewProduct();
    ProductDetailsPage.addToCart();
    ProductDetailsPage.clickContinueShopping();
    HomePage.clickCart();

    
    CartPage.verifyCartPageVisible();
    CartPage.proceedToCheckout();
    CheckoutPage.verifyAddressDetails();
    CheckoutPage.verifyOrderDetails();
    CheckoutPage.enterDescriptionAndPlaceOrder('Great order login');
    CheckoutPage.enterPaymentDetails(user.name, '411111111111', '123', '12', '2030');
    CheckoutPage.clickPayAndConfirmOrder();
    CheckoutPage.verifySuccessMessage();

    
    HomePage.clickDeleteAccount();
    DeleteAccountPage.verifyAccountDeleted();
    DeleteAccountPage.clickContinue();
  });
});

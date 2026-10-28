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

    // 1. Register User via UI
    HomePage.clickSignupLogin();
    LoginPage.signup(user.name, user.email);
    SignupPage.fillAccountInfo(user.password);
    SignupPage.clickCreateAccount();
    SignupPage.verifyAccountCreated();
    SignupPage.clickContinue();
    HomePage.verifyLoggedInAs(user.name);

    // 2. Add product to cart
    HomePage.clickProducts();
    ProductsPage.clickFirstProductViewProduct();
    ProductDetailsPage.addToCart();
    ProductDetailsPage.clickContinueShopping();
    HomePage.clickCart();

    // 3. Checkout
    CartPage.verifyCartPageVisible();
    CartPage.proceedToCheckout();
    CheckoutPage.verifyAddressDetails();
    CheckoutPage.verifyOrderDetails();
    CheckoutPage.enterDescriptionAndPlaceOrder('Great order');
    CheckoutPage.enterPaymentDetails(user.name, '411111111111', '123', '12', '2030');
    CheckoutPage.clickPayAndConfirmOrder();
    CheckoutPage.verifySuccessMessage();

    // 4. Delete account
    HomePage.clickDeleteAccount();
    DeleteAccountPage.verifyAccountDeleted();
    DeleteAccountPage.clickContinue();
  });

  it('Test Case 16: Place Order: Login before Checkout', () => {
    const user = generateUserData();

    // Cria o usuário via API previamente para testar o login antes do checkout
    cy.createUserViaApi(user);

    HomePage.visit();
    HomePage.verifyHomePageVisible();

    // 1. Login
    HomePage.clickSignupLogin();
    LoginPage.login(user.email, user.password);
    HomePage.verifyLoggedInAs(user.name);

    // 2. Add product to cart
    HomePage.clickProducts();
    ProductsPage.clickFirstProductViewProduct();
    ProductDetailsPage.addToCart();
    ProductDetailsPage.clickContinueShopping();
    HomePage.clickCart();

    // 3. Checkout
    CartPage.verifyCartPageVisible();
    CartPage.proceedToCheckout();
    CheckoutPage.verifyAddressDetails();
    CheckoutPage.verifyOrderDetails();
    CheckoutPage.enterDescriptionAndPlaceOrder('Great order login');
    CheckoutPage.enterPaymentDetails(user.name, '411111111111', '123', '12', '2030');
    CheckoutPage.clickPayAndConfirmOrder();
    CheckoutPage.verifySuccessMessage();

    // 4. Delete account
    HomePage.clickDeleteAccount();
    DeleteAccountPage.verifyAccountDeleted();
    DeleteAccountPage.clickContinue();
  });
});

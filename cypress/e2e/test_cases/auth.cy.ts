import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';
import DeleteAccountPage from '../../pages/DeleteAccountPage';
import { generateUserData } from '../../support/utils';

describe('Auth Test Cases', () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.verifyHomePageVisible();
  });

  it('Test Case 1: Register User', () => {
    const user = generateUserData();

    HomePage.clickSignupLogin();
    LoginPage.verifySignupVisible();
    LoginPage.signup(user.name, user.email);

    SignupPage.verifyAccountInfoVisible();
    SignupPage.fillAccountInfo(user.password);
    SignupPage.clickCreateAccount();
    SignupPage.verifyAccountCreated();
    SignupPage.clickContinue();

    HomePage.verifyLoggedInAs(user.name);
    HomePage.clickDeleteAccount();
    DeleteAccountPage.verifyAccountDeleted();
    DeleteAccountPage.clickContinue();
  });

  it('Test Case 2: Login User with correct email and password', () => {
    const user = generateUserData();

    // Cria o usuário previamente para testar o login
    HomePage.clickSignupLogin();
    LoginPage.signup(user.name, user.email);
    SignupPage.fillAccountInfo(user.password);
    SignupPage.clickCreateAccount();
    SignupPage.clickContinue();
    HomePage.clickLogout();

    // Execução do Test Case 2
    HomePage.clickSignupLogin();
    LoginPage.verifyLoginVisible();
    LoginPage.login(user.email, user.password);
    HomePage.verifyLoggedInAs(user.name);

    HomePage.clickDeleteAccount();
    DeleteAccountPage.verifyAccountDeleted();
  });

  it('Test Case 3: Login User with incorrect email and password', () => {
    HomePage.clickSignupLogin();
    LoginPage.verifyLoginVisible();
    LoginPage.login('invalid_user_99999@testmail.com', 'wrongpassword');
    LoginPage.verifyLoginError();
  });

  it('Test Case 4: Logout User', () => {
    const user = generateUserData();

    // Cria o usuário previamente
    HomePage.clickSignupLogin();
    LoginPage.signup(user.name, user.email);
    SignupPage.fillAccountInfo(user.password);
    SignupPage.clickCreateAccount();
    SignupPage.clickContinue();
    HomePage.clickLogout();

    // Execução do Test Case 4
    HomePage.clickSignupLogin();
    LoginPage.verifyLoginVisible();
    LoginPage.login(user.email, user.password);
    HomePage.verifyLoggedInAs(user.name);

    HomePage.clickLogout();
    LoginPage.verifyLoginVisible();
    cy.url().should('include', '/login');
  });

  it('Test Case 5: Register User with existing email', () => {
    const user = generateUserData();

    // Registra o usuário primeiro
    HomePage.clickSignupLogin();
    LoginPage.signup(user.name, user.email);
    SignupPage.fillAccountInfo(user.password);
    SignupPage.clickCreateAccount();
    SignupPage.clickContinue();
    HomePage.clickLogout();

    // Execução do Test Case 5: Tentar registrar novamente com o mesmo e-mail
    HomePage.clickSignupLogin();
    LoginPage.verifySignupVisible();
    LoginPage.signup(user.name, user.email);
    LoginPage.verifySignupError();
  });
});

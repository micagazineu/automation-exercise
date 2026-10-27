import { faker } from '@faker-js/faker';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';
import DeleteAccountPage from '../../pages/DeleteAccountPage';

describe('Auth Test Cases', () => {
  const name = faker.person.fullName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  beforeEach(() => {
    HomePage.visit();
    HomePage.verifyHomePageVisible();
  });

  it('Test Case 1: Register User', () => {
    HomePage.clickSignupLogin();
    LoginPage.verifySignupVisible();
    
    // Using a specific email for this run
    const test1Email = faker.internet.email();
    LoginPage.signup(name, test1Email);
    
    SignupPage.verifyAccountInfoVisible();
    SignupPage.fillAccountInfo(password);
    SignupPage.clickCreateAccount();
    SignupPage.verifyAccountCreated();
    SignupPage.clickContinue();
    
    HomePage.verifyLoggedInAs(name);
    
    HomePage.clickDeleteAccount();
    DeleteAccountPage.verifyAccountDeleted();
    DeleteAccountPage.clickContinue();
  });

  it('Test Case 2: Login User with correct email and password', () => {
    // Need to register first to login
    const test2Email = faker.internet.email();
    HomePage.clickSignupLogin();
    LoginPage.signup(name, test2Email);
    SignupPage.fillAccountInfo(password);
    SignupPage.clickCreateAccount();
    SignupPage.clickContinue();
    HomePage.clickLogout();

    // Actual Test
    HomePage.clickSignupLogin();
    LoginPage.verifyLoginVisible();
    LoginPage.login(test2Email, password);
    HomePage.verifyLoggedInAs(name);
    
    HomePage.clickDeleteAccount();
    DeleteAccountPage.verifyAccountDeleted();
  });

  it('Test Case 3: Login User with incorrect email and password', () => {
    HomePage.clickSignupLogin();
    LoginPage.verifyLoginVisible();
    LoginPage.login('incorrect@email.com', 'wrongpassword');
    LoginPage.verifyLoginError();
  });

  it('Test Case 4: Logout User', () => {
    // Need to register first to login
    const test4Email = faker.internet.email();
    HomePage.clickSignupLogin();
    LoginPage.signup(name, test4Email);
    SignupPage.fillAccountInfo(password);
    SignupPage.clickCreateAccount();
    SignupPage.clickContinue();

    // Actual Test
    HomePage.clickLogout();
    LoginPage.verifyLoginVisible();
  });

  it('Test Case 5: Register User with existing email', () => {
    // Register first
    const test5Email = faker.internet.email();
    HomePage.clickSignupLogin();
    LoginPage.signup(name, test5Email);
    SignupPage.fillAccountInfo(password);
    SignupPage.clickCreateAccount();
    SignupPage.clickContinue();
    HomePage.clickLogout();

    // Actual Test
    HomePage.clickSignupLogin();
    LoginPage.verifySignupVisible();
    LoginPage.signup(name, test5Email);
    LoginPage.verifySignupError();
  });
});
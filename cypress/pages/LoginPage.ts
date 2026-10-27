class LoginPage {
  verifyLoginVisible() {
    cy.get('.login-form').should('be.visible');
    cy.get('.login-form h2').should('contain', 'Login to your account');
  }

  verifySignupVisible() {
    cy.get('.signup-form').should('be.visible');
    cy.get('.signup-form h2').should('contain', 'New User Signup!');
  }

  signup(name: string, email: string) {
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
  }

  login(email: string, password: string) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
  }

  verifySignupError() {
    cy.get('.signup-form p').should('contain', 'Email Address already exist!');
  }

  verifyLoginError() {
    cy.get('.login-form p').should('contain', 'email or password is incorrect');
  }
}

export default new LoginPage();
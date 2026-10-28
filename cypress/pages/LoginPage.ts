class LoginPage {
  verifyLoginVisible() {
    cy.get('.login-form').should('be.visible');
    cy.contains('.login-form h2', 'Login to your account', { matchCase: false }).should('be.visible');
  }

  verifySignupVisible() {
    cy.get('.signup-form').should('be.visible');
    cy.contains('.signup-form h2', 'New User Signup!', { matchCase: false }).should('be.visible');
  }

  signup(name: string, email: string) {
    cy.get('[data-qa="signup-name"]').clear().type(name);
    cy.get('[data-qa="signup-email"]').clear().type(email);
    cy.get('[data-qa="signup-button"]').click({ force: true });
  }

  login(email: string, password: string) {
    cy.get('[data-qa="login-email"]').clear().type(email);
    cy.get('[data-qa="login-password"]').clear().type(password);
    cy.get('[data-qa="login-button"]').click({ force: true });
  }

  verifySignupError() {
    cy.get('.signup-form p')
      .should('be.visible')
      .and('contain.text', 'Email Address already exist!');
  }

  verifyLoginError() {
    cy.get('.login-form p')
      .should('be.visible')
      .and('contain.text', 'Your email or password is incorrect!');
  }
}

export default new LoginPage();
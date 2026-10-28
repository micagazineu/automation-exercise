class DeleteAccountPage {
  verifyAccountDeleted() {
    cy.get('[data-qa="account-deleted"]').should('be.visible');
    cy.contains('b', 'Account Deleted!', { matchCase: false }).should('be.visible');
  }

  clickContinue() {
    cy.get('[data-qa="continue-button"]').click({ force: true });
  }
}

export default new DeleteAccountPage();
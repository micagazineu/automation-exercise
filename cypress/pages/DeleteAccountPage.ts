class DeleteAccountPage {
  verifyAccountDeleted() {
    cy.get('[data-qa="account-deleted"]').should('be.visible');
  }

  clickContinue() {
    cy.get('[data-qa="continue-button"]').click();
  }
}

export default new DeleteAccountPage();
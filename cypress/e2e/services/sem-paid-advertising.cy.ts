describe('Services Page Test Suite', () => {
  // Test Case: Verify "SEM / Paid Advertising" Page
  it('Should navigate to and verify elements on the SEM / Paid Advertising page', () => {
    cy.get('details').click(); // Open the services dropdown menu
    cy.selectService('SEM / Paid Advertising', '/sem-paid-advertising');

    // Verify the visibility of the hero animation
    cy.get('[class*="service-details_d-section__image-wrapper"] svg').should('be.visible');

    // Log and verify the number of cards
    cy.logCardLinksCount();

    // Verify contact section, total contact links verification
    cy.verifyContactSectionAndElementCounts();
  });
});

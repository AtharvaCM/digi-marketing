describe('Services Page Test Suite', () => {
  // Test Case: Verify "Email Marketing & Automation" Page
  it('Should navigate to and verify elements on the Email Marketing & Automation page', () => {
    cy.get('details').click(); // Open the services dropdown menu

    cy.selectService('Email Marketing & Automation', '/email-marketing-automation');

    // Verify the visibility of the hero animation
    cy.get('[class*="service-details_d-section__image-wrapper"] svg').should('be.visible');

    // Verify contact section, total contact links verification
    cy.verifyContactSectionAndElementCounts();
  });
});

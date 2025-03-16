describe('Services Page Test Suite', () => {
  // Test Case: Verify "Search Engine Optimization" Page
  it('Should navigate to and verify elements on the Search Engine Optimization page', () => {
    cy.get('details').click(); // Open the services dropdown menu
    cy.selectService('Search Engine Optimization', '/search-engine-optimization');

    // Verify the visibility of the hero animation
    cy.get('[class*="service-details_d-section__image-wrapper"] svg').should('be.visible');

    // Log and verify the number of cards
    cy.logCardLinksCount();

    // Verify contact section, total contact links verification
    cy.verifyContactSectionAndElementCounts();
  });
});

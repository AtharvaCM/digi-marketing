describe('About Page Test Suite', () => {
  // Test Case: Verify About Page Elements
  it('Should verify the presence of key elements on the About page', () => {
    // Visit the About page URL
    cy.visit('/about');
    // Verify the heading text
    cy.get('h1').should('contain.text', 'About Growth Stats');

    // Verify the visibility of the "About Us" section image
    cy.get('img[alt="About Us Section Image"]').should('be.visible');

    // Verify Contact Section and Total Contact Links
    cy.verifyContactSectionAndElementCounts();
  });
});

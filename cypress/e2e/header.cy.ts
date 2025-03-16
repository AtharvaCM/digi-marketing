describe('Header Test Suite', () => {
  // Test Case: Verify Header and Navigation Links
  it('Should verify the header and its elements', () => {
    // Verify the header exists
    cy.get('[class*="header_header-wrapper"]').should('exist');

    // Verify the Growth Stats logo is visible
    cy.get('img[alt="Growth Stats Logo"]').should('be.visible');

    // Verify all navigation links on the header (including dropdowns)
    cy.get('nav[class*="header_d-container__nav__IFlza"] a').should('have.length', 9);

    // Hover over the "Services" dropdown to reveal the links
    cy.contains('Services').trigger('mouseover');

    // Verify there are 6 links in the "Services" dropdown
    cy.get('nav[class*="header_d-container__nav__IFlza"]').contains('Services').parent().find('ul a').should('have.length', 6);

    // Verify the "Let's Talk" button is present and visible
    cy.get('a[aria-label="Let\'s Talk"]').should('exist').and('be.visible');
  });
});

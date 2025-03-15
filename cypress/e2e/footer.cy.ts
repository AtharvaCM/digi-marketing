describe('Footer Test Suite', () => {
  // Test Case: Verify Footer and Navigation Links
  it('Should verify the footer and its elements', () => {
    // Verify the header exists
    cy.get('.bg-secondary-foreground.text-center.text-secondary').should('exist').and('be.visible');

    // Verify the Growth Stats name is visible
    cy.get('a[class="h3 md:h2 max-w-max"]').should('be.visible');

    // Verify all navigation links on the footer
    cy.get('.flex.flex-wrap.items-start.gap-x-12.gap-y-6').find('a').should('have.length', 8);

    // Verify the copyright logo and company name present and visible
    cy.get('.flex.flex-wrap.justify-center.gap-x-6.gap-y-2.p-4.text-sm').should('contain.text', '© 2025 Growth Stats');
  });
});

describe('Home Page Test Suite', () => {
  // Test Case: Verify images have alt text
  it('Should verify all images have alt text', () => {
    cy.get('img[data-test="service-card"]').each(($img) => {
      cy.wrap($img).should('have.attr', 'alt');
    });
  });

  // Test Case: Verify Home Page Titles
  it('Should verify the main titles on the Home page', () => {
    // Verify the first H1 title
    cy.get('h1').first().should('contain.text', 'Online Marketing');

    // Verify the banner text
    cy.get('.banner-text_d-container__heading__rRJie').should('have.class', 'text-4xl md:text-6xl').and('contain.text', 'growth stats');
  });

  // Test Case: Verify Client Logos and Service Cards
  it('Should verify the presence of client logos and the correct number of service cards', () => {
    // Verify there are 6 service cards
    cy.get('.services-section_d-section__cards-container__BfYQV a').should('have.length', 6);

    // Verify card links and names
    const services = [
      { name: 'SEO Services', link: '/search-engine-optimization' },
      { name: 'Email Marketing & Automation', link: '/email-marketing-automation' },
      { name: 'Social Media Services', link: '/social-media-services' },
      { name: 'Web Design', link: '/web-design' },
      { name: 'Web Development', link: '/web-development' },
      { name: 'SEM / Paid Advertising', link: '/sem-paid-advertising' },
    ];

    services.forEach(({ name, link }) => {
      cy.get(`.services-section_d-section__cards-container__BfYQV a[href="${link}"]`)
        .should('exist')
        .within(() => {
          cy.contains(name);
        });
    });
  });

  // Test Case: Verify Benefits Section
  it('Should verify the content of the benefits section', () => {
    // Verify the benefits section heading
    cy.get('h3').first().should('contain.text', 'We Can Improve Your Business Performance And Gain More Customers');

    // Verify Contact Section and Total Contact Links
    cy.verifyContactSectionAndElementCounts();
  });
});

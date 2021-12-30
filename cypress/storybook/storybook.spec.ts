describe('Visiting Storybook Test', () => {
  it('visits storybook', () => {
    cy.visit('http://localhost:6006');

    cy.url().should('include', '/story/intro-intro--page');
  });
});

describe('My Passing Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

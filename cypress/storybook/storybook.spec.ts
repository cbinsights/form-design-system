describe('Visiting Storybook Test', () => {
  // eslint-disable-next-line jest/expect-expect
  it('visits storybook', () => {
    cy.visit('http://localhost:6006');

    cy.url().should('include', '/story/intro-intro--page');
  });
});

describe('My Passing Test', () => {
  it('Does not do much!', () => {
    // eslint-disable-next-line jest/valid-expect
    expect(true).to.equal(true);
  });
});

describe('My Failing Test', () => {
  it('Does not do much!', () => {
    // eslint-disable-next-line jest/valid-expect
    expect(true).to.equal(false);
  });
});

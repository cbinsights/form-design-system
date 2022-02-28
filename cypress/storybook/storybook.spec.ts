const getIframeDocument = () =>
  cy.get('#storybook-preview-iframe').its('0.contentDocument').should('exist');

const getIframeBody = () =>
  getIframeDocument().its('body').should('not.be.undefined').then(cy.wrap);

describe('Storybook', () => {
  it('visits storybook button', () => {
    cy.visit('http://localhost:6006/?path=/story/components-button--breakout');
    getIframeBody().get('button').should('contain.text', 'Button');
  });
});

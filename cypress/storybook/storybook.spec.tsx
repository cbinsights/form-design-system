// <reference types=“cypress” />
import * as React from 'react';
import { composeStories } from '@storybook/testing-react';
import { mount } from '@cypress/react';
import * as stories from '../../src/components/Button/index.stories';
// compile the "Primary" story with the library
const { Primary } = composeStories(stories);

// eslint-disable-next-line jest/expect-expect
context('<Primary />', () => {
  it('has a button', () => {
    mount(<Primary />);

    cy.get('Button').contains('Button');
  });
});

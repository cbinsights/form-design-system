import React from 'react';
import SeparatorList, { SeparatorListProps } from '.';
import { StoryObj } from '@storybook/react';
export const Primary: StoryObj<SeparatorListProps> = {
  args: {
    separator: '✈️',
    items: ['New York', 'Paris', 'Schenectady', 'Los Angeles', 'Hong Kong'],
  },
};

export const Pipes: StoryObj<SeparatorListProps> = {
  args: {
    separator: '|️',
    items: [
      <a key="some" className="type--link">
        Some
      </a>,
      <a key="footer" className="type--link">
        Footer
      </a>,
      <a key="links" className="type--link">
        Links
      </a>,
      <a key="or" className="type--link">
        Or
      </a>,
      <a key="something" className="type--link">
        Something
      </a>,
    ],
  },
};

export const Breadcrumbs: StoryObj<SeparatorListProps> = {
  args: {
    separator: '/',
    items: [
      <a key="main" className="type--link">
        Main
      </a>,
      'Retail',
    ],
  },
};

export default {
  component: SeparatorList,
  title: 'components/SeparatorList',
  parameters: {
    componentSubtitle: 'Renders inline-block list with a custom separator',
    docs: {},
  },
};

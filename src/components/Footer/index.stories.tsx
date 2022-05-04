import React from 'react';
import { StoryObj } from '@storybook/react';
import Footer, { FooterProps } from './index';

export const Primary: StoryObj<FooterProps> = {
  args: {
    site: 'www.cbinsights.com',
  },
  render: (args: FooterProps): JSX.Element => {
    return <Footer site={args?.site} />;
  },
};

export default {
  component: Footer,
  title: 'Components/Footer',
};

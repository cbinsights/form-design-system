import React from 'react';
import { StoryObj } from '@storybook/react';
import Footer, { FooterProps } from './index';

export const Primary: StoryObj<FooterProps> = {
  args: {
    domain: 'www.cbinsights.com',
  },
  render: (args: FooterProps): JSX.Element => {
    return <Footer domain={args?.domain} />;
  },
};

export default {
  component: Footer,
  title: 'components/Footer',
};

import React from 'react';
import { StoryObj } from '@storybook/react';
import Navbar, { NavbarProps } from './index';

export const Primary: StoryObj<NavbarProps> = {
  args: {
    domain: 'www.cbinsights.com',
    utmContext: '',
  },
  render: (args: NavbarProps): JSX.Element => {
    return <Navbar domain={args?.domain} utmContext={args?.utmContext} />;
  },
};

export default {
  component: Navbar,
  title: 'components/Navbar',
};

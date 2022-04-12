import React from 'react';
import { StoryObj } from '@storybook/react';
import Navbar, { NavBarProps } from './index';

export const Primary: StoryObj<NavBarProps> = {
  args: {
    domain: 'www.cbinsights.com',
    utmContext: '',
  },
  render: (args: NavBarProps): JSX.Element => {
    return <Navbar domain={args?.domain} utmContext={args?.utmContext} />;
  },
};

export default {
  component: Navbar,
  title: 'components/Navbar',
};

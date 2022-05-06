import React from 'react';
import { StoryObj } from '@storybook/react';
import Navbar, { NavBarProps } from './index';

export const Primary: StoryObj<NavBarProps> = {
  args: {
    site: 'https://www.cbinsights.com',
    utmContext: '',
  },
  render: (args: NavBarProps): JSX.Element => {
    return <Navbar site={args?.site} utmContext={args?.utmContext} />;
  },
};

export default {
  component: Navbar,
  title: 'Components/Navbar',
};

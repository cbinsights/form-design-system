import React from 'react';
import { StoryObj } from '@storybook/react';
import Navbar, { NavBarProps } from './index';
import logo from '../../assets/images/Feeds_General.svg';

const SearchComponent = (): JSX.Element => (
  <div>
    <input type="text" />
  </div>
);

export const Primary: StoryObj<NavBarProps> = {
  args: {
    site: 'https://www.cbinsights.com',
    utmContext: '',
    SearchComponent: <SearchComponent />,
  },
};

const DifferentLogo = (): JSX.Element => (
  <img className="fdsNavbar-navLogo" width="168" height="20" alt="wow" src={logo} />
);

export const Logo: StoryObj<NavBarProps> = {
  args: {
    site: 'https://www.google.com',
    utmContext: '',
    SearchComponent: <SearchComponent />,
    LogoComponent: DifferentLogo,
  },
};

export default {
  component: Navbar,
  title: 'Components/Navbar',
};

import React from 'react';
import { StoryObj } from '@storybook/react';
import Navbar, { NavBarProps } from './index';

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
  render: (args: NavBarProps): JSX.Element => {
    return (
      <Navbar
        site={args?.site}
        utmContext={args?.utmContext}
        SearchComponent={args.SearchComponent}
      />
    );
  },
};

export default {
  component: Navbar,
  title: 'Components/Navbar',
};

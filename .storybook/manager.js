import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

import logo from '/assets/FDS-logo.svg';

const theme = create({
  base: 'light',
  brandTitle: 'Form Design System',
  brandImage: logo,
});

addons.setConfig({
  panelPosition: 'bottom',
  showRoots: true,
  theme,
});

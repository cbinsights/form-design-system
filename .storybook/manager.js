import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

import logo from "/assets/FDS-logo.svg"

const theme = create({
  brandTitle: 'Form Design System',
  brandUrl: 'cbinsights.github.io/form-design-system',
  brandImage: logo, // We can add an actual logo later,
});

addons.setConfig({
  panelPosition: 'bottom',
  theme,
});
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

import logo from '/assets/FDS-logo.svg';
import favicon from '/assets/FDS-logo-favicon.svg';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

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

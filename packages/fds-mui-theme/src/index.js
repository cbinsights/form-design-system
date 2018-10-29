import { blue, navy, red, orange } from 'fds-dictionary/dist/js/materialPalette';
import FDS from 'fds-dictionary/dist/js/styleConstants';

import MuiIconButton from './overrides/MuiIconButton';
import MuiButton from './overrides/MuiButton';

const theme = {
  palette: {
    type: 'light',
    primary: blue,
    secondary: navy,
    accent: orange,
    error: red,
    divider: FDS.FONT_COLOR_LIGHT,
    text: {
      primary: FDS.FONT_COLOR_DEFAULT,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: FDS.FONT_FAMILY_DEFAULT,
    fontSize: FDS.FONT_SIZE_DEFAULT,
  },
  overrides: {
    MuiButton,
    MuiIconButton,
  },
};

export default theme;

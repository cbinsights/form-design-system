/* eslint-disable no-var */
import FDS from '../dictionary/js/styleConstants';
import COLORS from '../dictionary/js/materialPalette';

var MuiButton = {
  root: {
    lineHeight: 'normal',
    backgroundColor: 'normal',
  },
};

var MuiIconButton = {
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
};

module.exports = {
  palette: {
    type: 'light',
    primary: COLORS.blue,
    secondary: COLORS.navy,
    accent: COLORS.orange,
    error: COLORS.red,
    divider: FDS.FONT_COLOR_HINT,
    text: {
      primary: FDS.FONT_COLOR_PRIMARY,
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
  zIndex: {
    modal: 9999,
  },
};

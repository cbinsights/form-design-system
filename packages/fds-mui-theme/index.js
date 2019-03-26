const COLORS = require('fds-dictionary/dist/js/materialPalette');
const FDS = require('fds-dictionary/dist/js/styleConstants');

const MuiButton = {
  root: {
    lineHeight: 'normal',
    backgroundColor: 'normal',
  },
};

const MuiIconButton = {
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
  zIndex: {
    modal: 9999,
  },
};

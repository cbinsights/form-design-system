# `fds-mui-theme`

## Usage

### Apply base theme to your app

```js
import theme from '@cbinsights/fds/lib/mui-theme';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const appTheme = createMuiTheme(theme);

const App = () => (
  <MuiThemeProvider theme={appTheme}>
    <Root />
  </MuiThemeProvider>
);
```

### Nesting themes for specific features

Some features have their own secondary color. You can nest theme providers to accomplish this...

```js
import theme from '@cbinsights/fds/lib/mui-theme';
import { violet } from '@cbinsights/fds/lib/dictionary/js/materialPalette';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const appTheme = createMuiTheme(theme);

// Create a feature-specific theme in which the secondary
// color is Form Design System violet
const featureTheme = createMuiTheme({
  ...theme,
  palette: { secondary: violet }
})

const Container = () => (
  <Fragment>
    <MuiThemeProvider theme={appTheme}>
      <p>This area uses a default app theme</p>
    </MuiThemeProvider>
    <MuiThemeProvider theme={featureTheme}>
      <p>This area uses our custom app theme</p>
    </MuiThemeProvider>
  </Fragment>
);
```

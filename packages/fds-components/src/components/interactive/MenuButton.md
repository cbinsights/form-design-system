
### MenuButton

Navigation button that renders an icon above a small label. Uses `material-ui`
button as a base.

This commponent spreads `...other` props on the `Button` component. This allows
passing of props defined in the [`material-ui` `Button` API](https://material-ui.com/api/button/#props).

```js
// const Whatshot = require('@material-ui/icons/Whatshot');

<MenuButton
  iconComponent={<p>lol</p>}
  label="Set on fire"
/>
```

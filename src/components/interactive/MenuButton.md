
### MenuButton

Navigation button that renders an icon above a small label. Uses `material-ui`
button as a base. These buttons can be used for either navigation or user actions.

This commponent spreads `...other` props on the `Button` component. This allows
passing of props defined in the [`material-ui` `Button` API](https://material-ui.com/api/button/#props).

**The `iconComponent` prop accepts any arbitrary JSX**. Use this to render an
SVG icon, an icon font, or whatever you need.

Additional styling customization should be done through `className` and
`labelClassName` props.

#### Basic MenuButton

```js
<MenuButton
  iconComponent={<span className="fontSize--2xl">🔥</span>}
  label="Set on fire"
  onClick={() => { alert('clicked') }}
/>
<MenuButton
  iconComponent={<span className="fontSize--2xl">🍕</span>}
  label="Long pizza button label"
/>
```

#### Disabled/Active MenuButtons

```js
<MenuButton
  iconComponent={<span className="fontSize--2xl">📞</span>}
  label="Call"
  disabled
/>
<MenuButton
  iconComponent={<span className="fontSize--2xl">✏️</span>}
  label="Edit Mode"
  active
/>
```

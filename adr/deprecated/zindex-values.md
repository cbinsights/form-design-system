# Set standards for `z-index`

- **Status:** [superseded by [zindex-values](../zindex-values.md)]
- **Deciders:** Rey Wright, Adam Detrick
- **Date:** 2019.11.26

---

## Context and Problem Statement

Our public-facing application is currently suffering from a "zindex war". In a "zindex
war", there are no winners. Engineers must regularly set insanely high and arbitrary
zindex values to build our front end features.

## Decision Outcome

### For standard values, continue using increments of `10`

For base stacking context, standard values are most helpful at increments of 10 because it
gives engineers flexibility to insert layers between defined stack levels. For example:

```
.justAboveThePopover {
  z-index: calc(var(--zindex-popover) + 1);
}
.justBelowThePopover {
  z-index: calc(var(--zindex-popover) - 1);
}
```

### Use fewer standard `z-index` values.

FDS had eight defined base stacking context values. Too many options makes an already hard
UI problem harder to reason about. In `v6.0`, we simplified to five layers (navigation, popover, shim, modal, crazy).

### Use values between `1` and `10` for fine layering control

`z-index` values [are not absolute](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).
In cases where one element needs to appear above another, use integers below 10. Rely on
surrounding stacking context to do the rest.

For example, the `ButtonGroup` component needs to manage layering of buttons so that the
focus ring is always visible. The surrounding stacking context does not matter - it uses
values `1` through `5` to accomplish this.

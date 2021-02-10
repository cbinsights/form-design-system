# Set standards for `z-index`

- **Status:** Accepted
- **Deciders:** Rey Wright, Adam Detrick
- **Date:** 2020.12.01

---

## Context and Problem Statement

Our public-facing application is currently suffering from a "zindex war". In a "zindex
war", there are no winners. Engineers must regularly set insanely high and arbitrary
zindex values to build our front end features.

## Decision Outcome

We've decided to go with a 2 tier approach:

- Use pre-defined z-index values & ranges that are defined in FDS.
- Use values between `1` and `9` for fine layering control (usualy when pre-defined z-index
  values are not useful)
- Rely on DOM order to set stacking order for elements of the same `z-index` (for example, a popover menu within a modal)

### Use values between `1` and `9` for fine layering control

In cases where one element needs to appear above another, use integers below 10. Rely on
surrounding stacking context to do the rest.

For example, the `ButtonGroup` component needs to manage layering of buttons so that the
focus ring is always visible. The surrounding stacking context does not matter - it uses
values `1` through `5` to accomplish this.

Note: It's helpful to understand what stacking context is to better utilize this approach. `z-index` values [are not absolute](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).

### Pre-defined FDS z-index values / ranges

We currently have 3 layers: navigation (10), modal (20), and crazy (50).

#### Navigation

You want to use navigation z-index for headers, sidebars, etc. Anything that generally serves to "frame" the content on a page.

For navigation, you will need often manage the relationship between navigation elements. You can do this by using calc. To note: the navigation z-index should never exceed 19, as these are z-index values for modals.

```
.mainheader {
  z-index: calc(var(--zindex-navigation) + 9);
}
.subheader {
  z-index: var(--zindex-navigation)
}
```

#### Modal

Use modal z-index for shims, popovers, and modals. To control stacking between these, we rely on document order and portaling. Shims come before modals, modals and popovers stack based on which one comes last (which you can help control by portaling, though we can get away with not portaling from time to time).

#### Crazy

Use crazy for the unexpected situations where you know something should go above everything else. This ideally would never need to be used but is there as an escape hatch and for debugging purposes even.

### For standard values, continue using increments of `10`

For base stacking context, standard values are most helpful at increments of 10 because it
gives engineers flexibility to insert layers between defined stack levels. For example:

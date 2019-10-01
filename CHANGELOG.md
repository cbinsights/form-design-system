# Changelog (v4.0 and above)

**For v3 and below, see the [v3 CHANGELOG](https://github.com/cbinsights/form-design-system/blob/master/CHANGELOG-v3.md).**

---

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
All Major and Minor changes to this project will be documented in this file.

#### What is considered a "breaking change"?
Any code change in this software that requires consumers to update their usage is
considered a breaking change (e.g. prop name changes, deletions, interface/argument
changes, etc).

---

## [Major.Minor] _(example)_
This is an example of a brief overview of the _Major_ or _Minor_ version changes.

- this is an example of a change note
- this is an example of a change note
- this is an example of a change note

### **BREAKING CHANGES**
- this is an example of a change note

### **Deprecations**
- this is an example of a deprecation note

---

## [4.20] `Section` component

- Added `.border--<side>` helper classes
- Added `.bgColor--<color>` helper classes
- Added `--double` variants for spacing helper classes
- Added `Section` component to react component library.

## [4.19] Updated ViewColumns and ViewList Icons

- Updated `ViewColumns` and `ViewList` Icons

## [4.18] Changed display helpers

- Added `!important` to all display class helpers

## [4.17] Updated Button

- Button now has 500 font weight

## [4.16] Added CheckIndeterminate Icon

- Added `CheckIndeterminate` Icon

## [4.15] Updated Icons

- Added `customSize` prop to icons to enable arbitrary sizes (we do not
want to encourage active use of this prop however)

## [4.14] Updated / Added link colors 

- Increased link contrast by making default links appear as `blue` (instead of `aqua`)
Added `linkInverted` property to dictionary and set up inverted link context in base-styles

## [4.13] Fixed Chip

- Corrected subtitle color for blue `Chip` (should be aqua)

## [4.12] Added Wrapper prop to GroupButton

- Allows a `Wrapper` prop to be passed to `GroupButton` to support things like wrapping tooltips.

## [4.11] Added View and Date Picker icons

- Added `View` and `Date Picker` to icons

## [4.10] Grid prefixing

- Enabled prefixing for CSS Grid properties for IE11 support

## [4.9] Added Button

- Added `Button` to components

## [4.8] Added border helpers

- Added `rounded--<direction>` classes to base styles.

## [4.7] Added font smoothing

- Added `font-smoothing` vendor declarations for `webkit` and `firefox`

## [4.6] Updated Chip

- Replaced `hasClose` boolean with `onClose` click handler
- Close icon now has a separate click handler from the main click handler

## [4.5] `Hscroll` component

- Added `Hscroll` component to layout utils

## [4.4] Add color--slate class

- Add `color--slate` class back to styles

## [4.3] Add double spacing helpers

- Add `--double` variants for `margin` helper classes
- Add `--double` variants for `padding` helper classes

## [4.2] Support alpha mod in colors

- Add `value/rgbComponents` transform to dictionary
- Add `css/rgbComponents` format to dictionary
- Add new distribution to dictionary, `lib/dictionary/css/rawRgbColors.css`


## [4.1] Removing some global button css

- Removed global button line-height
- Removed global button margin bottom

## [4.0] MAJOR

- All modules in the Form Design System are now published as a single package, `@cbinsights/fds`.
- Brand new typography defaults with updated dictionary and CSS utilities.
- Removed some components
- Changed some prop interfaces
- Switched to Storybook for docs
- Added `display` classes

### **BREAKING CHANGES**

#### Removed components

- `Chips` was removed from codebase

#### Prop interface changes

- `ButtonGroup` prop `as` was removed in favor of `Link`
- `Chip` prop `as` was removed in favor of `Link`

#### Removed deprecated fields

- Removed `value` and `content` deprecated fields on `ButtonGroup`

#### Import paths have changed

Because modules of the design system are no longer published as separate node packages,
consumers must update their import statements.

In `v4.0`, all FDS code compiles to a root `lib` directory.

```diff
-import FDS from 'fds-dictionary/dist/js/styleConstants';
+import FDS from '@cbinsights/fds/lib/dictionary/styleConstants';
```

former npm module import    | new import statement
--------------------------- | ----------------------------------------
`fds-dictionary/dist`       | `@cbinsights/fds/lib/dictionary/`
`fds-icons/lib/react`       | `@cbinsights/fds/lib/icons/react`
`fds-components/lib/`       | `@cbinsights/fds/lib/components/`
`fds-mui-theme/`            | `@cbinsights/fds/lib/mui-theme/`


#### New stylesheet for consumers

Instead of using the rollup stylesheet from `fds-components`, version `4.0` provides
a special `assets` dir in `./lib` that includes combined styles:

`@cbinsights/fds/lib/assets/all-styles.min.css`

#### New typography scale and classes
Typography has been completely rewritten for version `4.0` to reflect new design
standards. Use the tables below as a migration guide:

##### Updated JS vars

`fds-dictionary` color migration:

Old JS color var       | New JS color var
---------------------- | ----------------------
`FONT_COLOR_DARK`      | `FONT_COLOR_HEADING`
`FONT_COLOR_DEFAULT`   | `FONT_COLOR_PRIMARY`
`FONT_COLOR_LIGHT`     | `FONT_COLOR_SECONDARY`
`FONT_COLOR_DISABLED`  | `FONT_COLOR_HINT`

`fds-dictionary` size migration:

Old JS size var        | New JS size var
---------------------- | ----------------------
`FONT_SIZE_HEADING1`   | `FONT_SIZE_4XL`
`FONT_SIZE_HEADING2`   | `FONT_SIZE_3XL`
`FONT_SIZE_HEADING3`   | `FONT_SIZE_2XL`
`FONT_SIZE_BIG`        | `FONT_SIZE_XL`
`FONT_SIZE_SMALL`      | `FONT_SIZE_S`
`FONT_SIZE_TINY`       | `FONT_SIZE_XS`

##### Updated CSS vars

`fds-dictionary` color migration:

Old CSS color var        | New CSS color var
------------------------ | ----------------------
`--font-color-dark`      | `--font-color-heading`
`--font-color-default`   | `--font-color-primary`
`--font-color-light`     | `--font-color-secondary`
`--font-color-disabled`   | `--font-color-hint`

`fds-dictionary` size migration:

Old CSS size var       | New CSS size var
---------------------- | ----------------------
`--font-size-heading1` | `--font-size-4xl`
`--font-size-heading2` | `--font-size-3xl`
`--font-size-heading3` | `--font-size-2xl`
`--font-size-big`      | `--font-size-xl`
`--font-size-small`    | `--font-size-s`
`--font-size-tiny`     | `--font-size-xs`

##### `typeset` classes changed
All `typeset--<classOfTypography>` classes have changed their signature.

* `typeset--<classOfTypography>` => `type--<classOfTypography>`
  * e.g. `typeset--head3` becomes `type--head3`

##### `typemod` classes changed
All `typemod--<modification>` classes have changed to reflect the CSS property
being modified by the class.

`fds-styles` size migration:

Old size CSS class  | New size CSS class
------------------- | ----------------------
`typemod--huge`     | `fontSize--4xl`
`typemod--xxlarge`  | `fontSize--3xl`
`typemod--xlarge`   | `fontSize--xl`
`typemod--large`    | `fontSize--l`
`typemod--small`    | `fontSize--s`
`typemod--tiny`     | `fontSize--xs`

`fds-styles` color migration:

Old color CSS class     | New color CSS class
----------------------- | ----------------------
`typemod--dark`         | `color--heading`
`typemod--light`        | `color--secondary`
`typemod--<colorName>`  | `color--<colorName>`

`fds-styles` weight migration:

Old weight CSS class    | New weight CSS class
------------------- | ----------------------
`typemod--bold`     | `fontWeight--bold`
`typemod--book`     | `fontWeight--book`

`fds-styles` font style migration:

old font style class    | new font style class
----------------------- | ----------------------
`typemod--italic`       | `fontStyle--italic`
`typemod--underline`    | `fontStyle--underline`
`typemod--caps`         | `fontStyle--caps`

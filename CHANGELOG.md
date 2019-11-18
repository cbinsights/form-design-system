# Changelog

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

## [5.5] Medium weight font
Adds full support to FDS for medium weight Roboto.

- Adds `medium` weight to dictionary font weights
- Adds `fontWeight--medium` helper class
- Replaces hard coded `500` weights in components to use new dictionary var

## [5.4] Update hover Popovers

- In `Popover`, `focus` and `blur` events were replaced with `keyUp` and `keyDown` events.
  This allows hover-triggered popovers to show the popover content on keyboard navigation
  without side effects from focus events on the trigger itself.

## [5.3] Updated Button

- Adjusted padding on small button

## [5.2] Update Buttons / Icons

- Updated `SortUp` Icon
- Updated `SortDown` Icon
- Make all default interactive buttons be 32px computed height: `Button`, `IconButton`, and `GroupButton`
- Make small button 24px height
- Apply focus states for interactive buttons to ButtonGroup
- Bump up size of icons in Buttons

## [5.1] Helper class specificity

- Change source order for some helper classes in `base-styles`

## [5.0] MAJOR

### Changes
- Added `InlineBlockList` layout component.

### **BREAKING CHANGES**

#### `mui-theme` Removed
The material-ui theme object has been removed from FDS. Consumers are now responsible for
declaring theme values for the material-ui framework.

#### `raf-schd` is now a peer dependency
Consumers must add version `^4` of the `raf-schd` package as a dependency.

#### Icons
The `className` prop in all icon components will be ignored. Use `customSize` or `color`
to customize the size or color of the icon. Prefer the `size` prop, which takes tee shirt
sizes and sets the icon to a _standard_ media size.

```diff
-<CloudIcon className="customSizingClass customColorClass" />
+<CloudIcon color={FDS.COLOR_TIMBERWOLF} customSize={42} />
```

#### `Chip` Component
The `Chip` component no longer provides margin. Use the `InlineBlockList` layout component
to create a list of chips.

```diff
-<Chip /><Chip /><Chip />
+<InlineBlockList items={[<Chip />, <Chip />, <Chip />]} />
```

The `size` prop value in `Chip` has been changed to align values with the [FDS standard
size values](https://github.com/cbinsights/form-design-system/blob/master/contributing/naming-conventions.md#sizes).

```diff
-<Chip size="md" />
+<Chip size="m" />
```

#### `MenuButton` component
MenuButton component was removed. Please use StackedButton instead.

```diff
-<MenuButton />
+<StackedButton />
```

#### `Flex` and `FlexItem` components

`className` is no longer supported. Move your custom classes to a parent or child.

```diff
-<FlexItem className="type--caption" />
+<FlexItem><div className="type--caption" /></FlexItem>
```

`dataTest` props are now ignored. Move your test data attributes to a parent or child.

```diff
-<Flex dataTest="lol" />
+<div data-test="lol"><Flex>...</Flex></div>
```


## [4.35] Updated Button component

- Added `hasCaret` prop to visually toggle right aligned caret

## [4.34] Popovers

- Added `.bgColor--charcoal` helper class
- Added base `Popover` component
- Added `Tooltip` component composed from `Popover`

## [4.33] Updated buttons
- Updated `IconButton`, `StackedButton`, and `Button` to have lower opacity for disabled states

## [4.32] Added IconButton and StackedButton components

- Added `IconButton` to components
- Added `StackedButton` to components

## [4.31] Add background classes for gray and aqua.
- Added bgColor--gray and bgColor--aqua helper classes

## [4.30] Updated Star Icons
- Updated `StarEmpty` Icon
- Updated `StarFilled` Icon

## [4.29] Added UserFilled Icon

- Added `UserFilled` Icon

## [4.28] Updated Button components

- Adjusted icon size to be as high as text size

## [4.27] Fixed Button component

- Updated Button Icon alignment to be centered
- Added box-sizing: border-box to button
- added correct font-size (was using fontSize--m which isn't a thing)

## [4.26] `ol`/`ul` decoration

- Added `list--decorated` class to add bullets/numbers to ordered or unordered lists.
>>>>>>> master

## [4.25] Updated Button components

- Added size prop to `Button` to component
- Added new small variant (`s`) to Button.
- Existing Button variant is now medium (`m`)

## [4.24] Fix Dialog component

- Add transparency to close icon (fixes background for Safari)

## [4.23] Added width helpers

- Added `span--100` & `span--50` classes to base styles.

## [4.22] Added Dialog and Prompt components

- Added `Dialog` to components
- Added `Prompt` to components

## [4.21] 🐛 Bugfix: IE11 `Button` and `Hscroll`

- Fixes IE11 issues with `Button` and `Hscroll` styling.

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
`FONT_SIZE_HEADING1`   | `FONT_SIZE_4_XL`
`FONT_SIZE_HEADING2`   | `FONT_SIZE_3_XL`
`FONT_SIZE_HEADING3`   | `FONT_SIZE_2_XL`
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


## [3.8] Add view and sort icons

- Added icons to `fds-icons`
  - `SortDownIcon`
  - `SortUpIcon`
  - `ViewColumnsIcon`
  - `ViewListIcon`

## [3.7] Fixed GroupButton

- `GroupButton` now should not overlap any other items that are positioned over it

## [3.6] Fixed GroupButton

- `key` now will properly be applied from array items passed to `ButtonGroup`

## [3.5] Fixed GroupButton (Firefox)

- `GroupButton` background-color in Firefox is now fixed
- `GroupButton` active states now work (removed :enabled)

## [3.4] Fixed / Updated ButtonGroup

- `onChange` now works again in `ButtonGroup`
- deprecated `icon` prop in favor of `Icon` prop in `ButtonGroup`
- `className` no longer accepted on `ButtonGroup` or `GroupButton`

## [3.3] Fixed ButtonGroup

- Key now properly gets generated from `label`
- Anchor buttons can now have a disabled style
- Fixed bug that happens when `onChange` is not specified


## [3.2] Updated ButtonGroup

- Standardized `ButtonGroup` in line with `Chips`
- Array items in `ButtonGroup` can now be rendered as anchors, buttons, or custom components (e.g. Link)
- Added `label` prop to define display
- Added `key` prop to override key (if labels are not unique)
- `content` is now deprecated
- `value` is now deprecated

## [3.1] Updated Chips

- Can now specify key instead of value on array items
- Corrected propTypes

## [3.0] FlexGrow

**⚠️ No consumers were using flexGrow, but we're making this a breaking change just to be safe **

#### **BREAKING CHANGES**
- Removed flexGrow prop from FlexItem

## [2.38] Added Chips

- Adds `Chips` component to `fds-components`

## [2.37] Updated `ButtonGroup` per new designs

- `ButtonGroup` now manages z-index more carefully
- `GroupButton` styles were updated, including having a new focus style

## [2.36] Added correct fds-icon displayName

- `fds-icons` Changed icon displayName to reflect the actual name

## [2.35] Arrow Icons

- Added arrow icons to `fds-icons`
  - NavArrowBackIcon
  - NavArrowDownIcon
  - NavArrowForwardIcon
  - NavArrowUpIcon

## [2.34] Changed default cursor on disabled items

- `fds-styles` Changed default cursor on disabled items

## [2.33] Changed fds-icon color

- `fds-icons` updated to utilize currentColor

## [2.32] Added segmented button

- Adds `ButtonGroup` component to `fds-components`
- **Pass GroupButton as children to ButtonGroup**
- Adds `GroupButton` component to `fds-components`

## [2.31] Deduplicate Icons

- `ShareIcon` icon updated to always use an arrow shape.
- `HideIcon` icon now uses a crossed out eye shape.
  - **To use a "no sign" shape, please use `NopeIcon`**
- `NetworkIcon` added (connected dots style share icon).

## [2.30] Added link helper class

- Adds `typeset--link` helper class to `fds-styles`

## [2.29] Added font-color-link

- Adds `font-color-link` variable to `fds-dictionary`

## [2.28] Standard box shadows

- Adds `elevation--<level>` box shadow classes to `fds-styles`
- Adds `depth--<level>` box shadow classes to `fds-styles`

## [2.27] Add `resetButton` class

- Adds `resetButton` utility class to `fds-styles`.

## [2.26] Add `Export` icon

- Adds `Export` icon
- Puts dollar sign back in `Investor` icon

## [2.25] Fix `Move` icon

- Roll back  SVG changes to `Move` icon

## [2.24] `Updatable` signature change

- `Updatable` component now takes `children` instead of a `component` prop.

## [2.23] New Icons

- Add `ExpertTag` icon to `fds-icons`
- Add `StoryDossier` icon to `fds-icons`

## [2.22] (stable) Fix babel transpile for IE11

- Add IE11 target to `babel/preset-env` configuration to ensure arrow functions are
  transformed.

## [2.21] ☢️  (broken) Upgrades / Housekeeping

**⚠️  In this version, babel fails to read browserslist and does not transform "`=>`"**

- Move all jest configuration to repo root; run tests from root
- Upgrade some dev dependencies to latest...
  - `babel` (cli, core, etc)
  - `webpack-blocks`
  - `enzyme`
  - `enzyme-to-json`
  - `lint-staged`
  - `react-styleguidist`

## [2.20] `MoreIcon`

- adds "more" icon to `fds-icons`
- modifies "investor" icon in `fds-icons` (adds dollar sign to briefcase)

## [2.19] Progress Toast update

- If a `Toast` is of type `progress`, it will not render a dismiss button. This helps
  avoid confusion that dismissing a toast is the same as cancelling the operation in
  progress (it doesn't).
- Adds new `yarn` command for updating snapshots in all packages

## [2.18] Explicit input type selectors in `fds-styles`

- Changes high-specificity negating selector for non-checkbox, non-button inputs. Instead,
  base input styles will be set by single attribute selectors (e.g. `input[type="text"]`)

## [2.17] Form tag fixes

- Includes fixes for...
  - checkbox wrapping
  - input border-box size bugs

## [2.16] Form field defaults

- Added better base tag defaults for form elements
- Added `error` and `resetField` helper classes for form elements

## [2.15] Toast onAction Dismiss

- When user engages the action on a Toast we will not dismiss the message

## [2.14] Custom Media

- Added [custom media](https://preset-env.cssdb.org/features#custom-media-queries)
  properties to `fds-dictionary`. Assuming the consumer has `postcss-preset-env` set up,
  consumers can import `customMedia.css` to support the following standard viewports:
  - `@media (--viewport-xs) { ...extra small and larger.. }`
  - `@media (--viewport-s) { ...small and larger.. }`
  - `@media (--viewport-m) { ...medium and larger.. }`
  - `@media (--viewport-l) { ...large and larger.. }`
  - `@media (--viewport-xl) { ...extra large and larger.. }`

## [2.13] `ShareIcon`

- Updates all icons from latest sketch file
- Modifies `ShareIcon` to use an arrow instead of a network icon

## [2.12] `Updatable`

- Adds `Updatable` component to `fds-components`.

## [2.11] Adding more style defaults

- Adds more base element defaults to `fds-styles` to help us move away from bootstrap.

## [2.10] Bottom left toasts

- Modifies `Toaster` component to position appearing toasts to the bottom
  left of the viewport.

## [2.9] 🍞 Toasts

- Adds `Toast` component to `fds-components`
- Adds `Toaster` controller component to `fds-components`
- Adds `CountdownButton` component to `fds-components`

## [2.8] Material ui theme

- Gives modals and <Modal>-based components a z-index of 9999

## [2.7] data-tests

- Adds dataTest props to Flex and Flex-Item

## [2.6] `easing` standards

- Adds motion/easing standards to `fds-dictionary`

## [2.5] React hooks

- Upgrades `react` to `^16.8`

## [2.4] FlexGrow

- Add flexGrow prop to FlexItem

## [2.3] New Icons

- Adds two icons to `fds-icons`
  - `FunnelIcon`
  - `NumbersIcon`

## [2.2] zindex vars

- Adds `z-index` tokens to `fds-dictionary`. Available in CSS as `var(--zindex-<VALUE>)` and in JS as `FDS.ZINDEX_<VALUE>`.

## [2.1] half spacing helpers

- Added `--half` variants to [padding and spacing utility classes](https://cbinsights.github.io/form-design-system/fds-styles/#spacing-helpers) in `fds-styles`

## [2.0] Major Icon Update
Updated `fds-icons` package with breaking changes.

#### **Changes**
- Added new icons

```diff
+ActionsArrowDown
+ActionsArrowLeft
+ActionsArrowRight
+ActionsArrowUp
+AdvancedSearch
+At
+AutoBuild
+Bell
+CbiData
+CheckFilled
+CompanyCustom
+Line
+Reset
+StarEmpty
+StarFilled
+Story
+StoryAdd
+StoryExpert
+ThreeDot
+Visualize
+WorkFaster
```

#### **BREAKING CHANGES**
Renamed a number of icons...

- `Down` => `CaretDown`
- `Right` => `CaretRight`
- `Left` => `CaretLeft`
- `Up` => `CaretUp`
- `Collection` => `CollectionPublic`
- `EmptyCheck` => `CheckEmpty`
- `ExpertCollection` => `CollectionExpert`
- `HanburgerBars` => `HamburgerBars`
- `AlphabeticalAz` => `OrderAlphabeticalAz`
- `AlphabeticalZa` => `OrderAlphabeticalZa`
- `Ascending` => `OrderAscending`
- `Decending` => `OrderDescending`
- `RadioButtonEmpty` => `RadioEmpty`
- `RadioButtonFilled` => `RadioFilled`


## [1.21] `fds-icons`

- Adds `fds-icons` package to `form-design-system`
  - [Documentation](https://cbinsights.github.io/form-design-system/fds-icons/)
  - [Github](https://github.com/cbinsights/form-design-system/tree/master/packages/fds-icons)
- `fds-components` now imports css from `fds-icons` into main stylesheet

## [1.20] **stable**

- Fixes issue occurring in some patch versions of `1.19` where packages were published without `lib/` or `dist/` dirs.

## [1.19]

- Adds type modifier classes to `fds-styles` for underline, italic, and all caps

## [1.18] `MenuButton`

- Adds disabled font color to `fds-dictionary`
- Adds `MenuButton` component to `fds-components`

## [1.17]

- Fix import statement in `fds-mui-theme`

## [1.16] `AvatarRow`

- Added `AvatarRow` component to `fds-components`.

## [1.15]

- Added `important` declarations to modifier classes commonly used to override things.
  For example, `typemod--red` should _always_ override any inherited `color` attribute.

## [1.14] Media Sizes

- Added `media` properties to `fds-dictionary` for standard media sizing (icons, avatars, etc.)
- Added `media--` helper classes to `fds-styles` to set dimensions of a selected element to a given
  standard media size.

## [1.13] material-ui theme

- Added `fds-mui-theme` package. This provides a theme for `material-ui` based on our standard styles
  defined in `fds-dictionary`.


## [1.11, 1.12]
bad publish - identical to `1.10`.

## [1.10]

- Added material UI palettes to `fds-dictionary`. Light and dark variants are generated for each
  base color for use in `material-ui` framework theming.

```
import with: `import { blue } from 'fds-dictionary/dist/js/materialPalette.js'`

blue[500]; // base blue color
blue[100]; // lightened blue
blue[900]; // darkened blue
```

## [1.9]

- Added distribution to `fds-dictionary`, a map of CSS custom property names to values. This is used
  to populate a PostCSS plugin with fallback values of custom properties for IE11.

## [1.8]

- Added whitespace "wrap" helpers to `fds-styles`

## [1.7]

- Changed `align--` classes to use `left` and `right` instead of `start` and `end`. Fixes bug where
  PostCSS was producing invalid CSS by nesting `[dir]` attribute selectors inside `align--` blocks.

## [1.6]

- Added react native dist to `fds-dictionary`. Import path is `'fds-dictionary/dist/js/reactNative'`.

## [1.5]

- Removed default background color on `body` and `html` elements
- Fixed defect where `table` was being set to `display: block` by default
- Modified publish routine - allow lerna to version root package

## [1.4]

- Added `sketch/palettes` distribution to `fds-dictionary`
- Changed javascript distribution in `fds-dictionary` to commonJS modules

## [1.3]

- Improved signature of type modifiers
- Added type specimen to docs (not linked publicly)
- Use condensed Roboto where appropriate
- Fixes issue where default body type size was not being set

## [1.2]
Added typesetting and type modifier classes to `fds-styles`.

## [1.1]
Added dictionary properties for typography.

## [1.0] - Stable
Public API defined; all packages ready for use in production, but most are very basic stubs.
For `v1.0.0`, the package to consume is `fds-components`, which includes `Flex` and `FlexItem`
layout helper components.


## [0.2]
Add cross-package dependencies.
The component lib now imports the foundational stylesheet from `fds-styles`.
The foundational stylesheet imports custom properties from `fds-dictionary`.

- `fds-styles` now depends on `fds-dictionary`
- `fds-components` now depends on `fds-styles`


## [0.1]
First published beta version of FDS components. Use with caution.

- Add `fds-dictionary` package
  - Add color properties
  - Add font weight properties
  - Add distributions for `js` and `css`
- Add `fds-styles` package
  - Add `flush`, and `align` helper classes
- Add `fds-components` package
  - Add `Flex` and `FlexItem` layout components

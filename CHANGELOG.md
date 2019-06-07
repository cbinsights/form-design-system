This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
All Major and Minor changes to this project will be documented in this file.

---

## [Major.Minor] _(example)_
This is an example of a brief overview of the _Major_ or _Minor_ version changes.

#### **BREAKING CHANGES**
- this is an example of a change note

#### **Changes**
- this is an example of a change note

#### **Deprecations**
- this is an example of a deprecation note

---

## [2.23] Added new icons

#### **Changes**
- Add `ExpertTag` icon to `fds-icons`
- Add `StoryDossier` icon to `fds-icons`

## [2.22] (stable) Fix babel transpile for IE11

#### **Changes**
- Add IE11 target to `babel/preset-env` configuration to ensure arrow functions are
  transformed.

## [2.21] ☢️  (broken) Upgrades / Housekeeping

**⚠️  In this version, babel fails to read browserslist and does not transform "`=>`"**

#### **Changes**
- Move all jest configuration to repo root; run tests from root
- Upgrade some dev dependencies to latest...
  - `babel` (cli, core, etc)
  - `webpack-blocks`
  - `enzyme`
  - `enzyme-to-json`
  - `lint-staged`
  - `react-styleguidist`

## [2.20] `MoreIcon`

#### **Changes**
- adds "more" icon to `fds-icons`
- modifies "investor" icon in `fds-icons` (adds dollar sign to briefcase)

## [2.19] Progress Toast update

#### **Changes**
- If a `Toast` is of type `progress`, it will not render a dismiss button. This helps
  avoid confusion that dismissing a toast is the same as cancelling the operation in
  progress (it doesn't).
- Adds new `yarn` command for updating snapshots in all packages

## [2.18] Explicit input type selectors in `fds-styles`

#### **Changes**
- Changes high-specificity negating selector for non-checkbox, non-button inputs. Instead,
  base input styles will be set by single attribute selectors (e.g. `input[type="text"]`)

## [2.17] Form tag fixes

#### **Changes**
- Includes fixes for...
  - checkbox wrapping
  - input border-box size bugs

## [2.16] Form field defaults

#### **Changes**
- Added better base tag defaults for form elements
- Added `error` and `resetField` helper classes for form elements

## [2.15] Toast onAction Dismiss

#### **Changes**
- When user engages the action on a Toast we will not dismiss the message

## [2.14] Custom Media

#### **Changes**
- Added [custom media](https://preset-env.cssdb.org/features#custom-media-queries)
  properties to `fds-dictionary`. Assuming the consumer has `postcss-preset-env` set up,
  consumers can import `customMedia.css` to support the following standard viewports:
  - `@media (--viewport-xs) { ...extra small and larger.. }`
  - `@media (--viewport-s) { ...small and larger.. }`
  - `@media (--viewport-m) { ...medium and larger.. }`
  - `@media (--viewport-l) { ...large and larger.. }`
  - `@media (--viewport-xl) { ...extra large and larger.. }`

## [2.13] `ShareIcon`

#### **Changes**
- Updates all icons from latest sketch file
- Modifies `ShareIcon` to use an arrow instead of a network icon

## [2.12] `Updatable`

#### **Changes**
- Adds `Updatable` component to `fds-components`.

## [2.11] Adding more style defaults

#### **Changes**
- Adds more base element defaults to `fds-styles` to help us move away from bootstrap.

## [2.10] Bottom left toasts

#### **Changes**
- Modifies `Toaster` component to position appearing toasts to the bottom
  left of the viewport.

## [2.9] 🍞 Toasts

#### **Changes**
- Adds `Toast` component to `fds-components`
- Adds `Toaster` controller component to `fds-components`
- Adds `CountdownButton` component to `fds-components`

## [2.8] Material ui theme

#### **Changes**
- Gives modals and <Modal>-based components a z-index of 9999

## [2.7] data-tests

#### **Changes**
- Adds dataTest props to Flex and Flex-Item

## [2.6] `easing` standards

#### **Changes**
- Adds motion/easing standards to `fds-dictionary`

## [2.5] React hooks

#### **Changes**
- Upgrades `react` to `^16.8`

## [2.4] FlexGrow

#### **Changes**
- Add flexGrow prop to FlexItem

## [2.3] New Icons

#### **Changes**
- Adds two icons to `fds-icons`
  - `FunnelIcon`
  - `NumbersIcon`

## [2.2] zindex vars

#### **Changes**
- Adds `z-index` tokens to `fds-dictionary`. Available in CSS as `var(--zindex-<VALUE>)` and in JS as `FDS.ZINDEX_<VALUE>`.

## [2.1] half spacing helpers

#### **Changes**
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

#### **Changes**
- Adds `fds-icons` package to `form-design-system`
  - [Documentation](https://cbinsights.github.io/form-design-system/fds-icons/)
  - [Github](https://github.com/cbinsights/form-design-system/tree/master/packages/fds-icons)
- `fds-components` now imports css from `fds-icons` into main stylesheet

## [1.20] **stable**

#### **Changes**
- Fixes issue occurring in some patch versions of `1.19` where packages were published without `lib/` or `dist/` dirs.

## [1.19]

#### **Changes**
- Adds type modifier classes to `fds-styles` for underline, italic, and all caps

## [1.18] `MenuButton`

#### **Changes**
- Adds disabled font color to `fds-dictionary`
- Adds `MenuButton` component to `fds-components`

## [1.17]

#### **Changes**
- Fix import statement in `fds-mui-theme`

## [1.16] `AvatarRow`

#### **Changes**
- Added `AvatarRow` component to `fds-components`.

## [1.15]

#### **Changes**
- Added `important` declarations to modifier classes commonly used to override things.
  For example, `typemod--red` should _always_ override any inherited `color` attribute.

## [1.14] Media Sizes

#### **Changes**
- Added `media` properties to `fds-dictionary` for standard media sizing (icons, avatars, etc.)
- Added `media--` helper classes to `fds-styles` to set dimensions of a selected element to a given
  standard media size.

## [1.13] material-ui theme

#### **Changes**
- Added `fds-mui-theme` package. This provides a theme for `material-ui` based on our standard styles
  defined in `fds-dictionary`.


## [1.11, 1.12]
bad publish - identical to `1.10`.

## [1.10]

#### **Changes**
- Added material UI palettes to `fds-dictionary`. Light and dark variants are generated for each
  base color for use in `material-ui` framework theming.

```
import with: `import { blue } from 'fds-dictionary/dist/js/materialPalette.js'`

blue[500]; // base blue color
blue[100]; // lightened blue
blue[900]; // darkened blue
```

## [1.9]

#### **Changes**
- Added distribution to `fds-dictionary`, a map of CSS custom property names to values. This is used
  to populate a PostCSS plugin with fallback values of custom properties for IE11.

## [1.8]

#### **Changes**
- Added whitespace "wrap" helpers to `fds-styles`

## [1.7]

#### **Changes**
- Changed `align--` classes to use `left` and `right` instead of `start` and `end`. Fixes bug where
  PostCSS was producing invalid CSS by nesting `[dir]` attribute selectors inside `align--` blocks.

## [1.6]

#### **Changes**
- Added react native dist to `fds-dictionary`. Import path is `'fds-dictionary/dist/js/reactNative'`.

## [1.5]

#### **Changes**
- Removed default background color on `body` and `html` elements
- Fixed defect where `table` was being set to `display: block` by default
- Modified publish routine - allow lerna to version root package

## [1.4]

#### **Changes**
- Added `sketch/palettes` distribution to `fds-dictionary`
- Changed javascript distribution in `fds-dictionary` to commonJS modules

## [1.3]

#### **Changes**
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

#### **Changes**
- `fds-styles` now depends on `fds-dictionary`
- `fds-components` now depends on `fds-styles`


## [0.1]
First published beta version of FDS components. Use with caution.

#### **Changes**
- Add `fds-dictionary` package
  - Add color properties
  - Add font weight properties
  - Add distributions for `js` and `css`
- Add `fds-styles` package
  - Add `flush`, and `align` helper classes
- Add `fds-components` package
  - Add `Flex` and `FlexItem` layout components

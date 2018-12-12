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

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

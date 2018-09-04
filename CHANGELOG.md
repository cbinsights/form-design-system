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

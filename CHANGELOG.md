# Changelog (v4.0 and above)

**For v3 and below, see the [v3 CHANGELOG](https://github.com/cbinsights/form-design-system/blob/master/CHANGELOG-v3.md).**

---

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
All Major and Minor changes to this project will be documented in this file.

---

## [Major.Minor] _(example)_
This is an example of a brief overview of the _Major_ or _Minor_ version changes.

- this is an example of a change note
- this is an example of a change note
- this is an example of a change note
- this is an example of a change note

### **BREAKING CHANGES**
- this is an example of a change note

### **Deprecations**
- this is an example of a deprecation note

---

## [4.0] MAJOR

- All modules in the Form Design System are now published as a single package, `@cbinsights/fds`.


### **BREAKING CHANGES**


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


#### New stylesheet for consumers

Instead of using the rollup stylesheet from `fds-components`, version `4.0` provides
a special `assets` dir in `./lib` that includes combined styles:

`@cbinsights/fds/lib/assets/all-styles.min.css`

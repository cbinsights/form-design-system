# Organize files for FDS clients

- **Status:** accepted
- **Deciders:** @akdetrick, @rey-wright, @ahmedhashim-cbi, @sfrieson-cbi, @jjniczCB, @kchen-cbi
- **Date:** 2020.07.06

---

Technical Story: UIP-362

## Context and Problem Statement

We would like to generally flatten the directory structure in FDS as well as improving the
import statements for client applications. This will be a breaking change for a major
version, as clients will need to update imports once we make the change.

## Decision Drivers

- Remove unnecessary hierarchy in components dir
- Simplify documentation
- Adopt the unofficial CBI standard of organizing by component directories (each component
  has its own directory).
- Improve ergonomics and performance of import statements for client applications

## Decision Outcome

### Import statements

Because individual imports for each component has a negative performance impact, we decided
to use destructured imports and rely on a tree shaking strategy:

```diff
-import Flex from '@cbinsights/fds/lib/components/layout/Flex';
-import FlexItem from '@cbinsights/fds/lib/components/layout/FlexItem';
-import TextInput from '@cbinsights/fds/lib/components/forms/TextInput';
+import { Flex, FlexItem, TextInput } from '@cbinsights/fds/lib/components';
```

The "root" file for each import corresponds to an FDS code module.

| code module   | Import example                                                                        |
| ------------- | ------------------------------------------------------------------------------------- |
| `dictionary`  | `import { COLOR_TIMBERWOLF, COLOR_PURPLE } from '@cbinsights/fds/lib/dictionary';`    |
| `components`  | `import { Avatar, TextInput } from '@cbinsights/fds/lib/components/';`                |
| `icons`       | `import { CloudIcon, BellIcon } from '@cbinsights/fds/lib/icons';`                    |
| `assets`      | Use path `@cbinsights/fds/lib/assets/<file>` where applicable                         |
| `base-styles` | not applicable; we only publish this CSS as part of the main styles file in `assets/` |

### `components` file structure

Categorization directories will be removed.
Each component will have its own directory under `components/`.
Tests, stories, private components, and helpers will be colocated in component
directories.

```
components/
├── Foo/
│   ├── FooHelper.jsx
│   ├── foo.test.jsx
│   ├── foo.stories.jsx
│   ├── utils.js
│   └── index.js  // contains Foo component code
...
```

### Documentation

The "Components" section in Storybook will no longer have categorization. All components
will be documented flat under the section heading.

## Positive Consequences

We satisfy all the decision drivers

## Negative Consequences

Minimal. This is a breaking change that will be marked by major version 9.

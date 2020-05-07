# Form Design System

[![npm](https://img.shields.io/npm/v/@cbinsights/fds.svg?style=flat-square&color=blue)](http://www.npmjs.com/package/@cbinsights/fds)

A design system by CB Insights.

## Getting started

### Installation
The design system is comprised of a number of modules published as a single npm package.

```bash
yarn add @cbinsights/fds
```
or

```
npm i @cbinsights/fds
```
### Importing

```js
// JS constants like FDS.COLOR_MINT
import FDS from '@cbinsights/fds/lib/js/styleConstants';

// React components
import Flex from '@cbinsights/fds/lib/components/Flex';

// Icons
import CloudIcon from '@cbinsights/fds/lib/react/CloudIcon';
```

**Use [this unpkg link](https://unpkg.com/browse/@cbinsights/fds/) to see all files
published to the npm package.**


### Documentation
- Version 7+: [https://cbinsights.github.io/form-design-system/fds-components/?path=/docs/fds-intro--page](https://cbinsights.github.io/form-design-system/fds-components/?path=/docs/fds-intro--page)
- Version 3, 4, 5: [https://cbinsights.github.io/form-design-system/](https://cbinsights.github.io/form-design-system/)

### Versions
This project uses [semantic versioning](https://semver.org/spec/v2.0.0.html).
Refer to the [**Changelog**](https://github.com/cbinsights/form-design-system/blob/master/CHANGELOG.md)
for details on each major and minor release.

------

## Development

1. clone this repo
2. run `yarn && yarn build:full`


### Modules


### Commands

Incomplete list of yarn targets.

#### Building

Some modules rely on others to be built first. It's a good idea to start with a `yarn
build:full` before running focused builds.

Command             | Description
------------------- | -------------------------------------
`clean`             | Cleans build artifacts in `lib`
`build:dictionary`  | Builds dictionary docs and `lib`
`build:styles`      | Builds base styles docs and `lib`
`build:icons`       | Builds icons docs and `lib`
`build:comp`        | Builds React component docs and `lib`
`build:mui`         | Builds material-ui theme `lib`
`build:full`        | Cleans all, then builds docs and `lib` for everything
`build:distCSS`     | Creates CSS rollup in `lib/assets/`

#### Icons

Command             | Description
------------------- | -------------------------------------
`icons:export`      | Runs [export script](https://github.com/cbinsights/form-design-system/blob/master/src/icons/README.md#updating-icons-from-a-sketch-file)

#### Storybook

Command             | Description
------------------- | -------------------------------------
`storybook`        | Runs local dev storybook server


#### Other

Command                    | Description
-------------------------- | ------------------------------------------------------
`yarn test`           | Runs tests for all relevant packages
`yarn snapshot-update`| Updates snapshots
`yarn lint`           | Runs `eslint` on all js files
`yarn precommit`      | Runs `lint-staged` to verify precommit hook will pass

### Docs
Documentation is published to Github Pages from the `docs/` directory in `master`.
Every time the `build` command is run, docs are regenerated to the root `docs/` directory.

### Versioning/Publishing
`form-design-system` is published as a single NPM package.

**Please update the minor or major version as appropriate when making changes in a branch**

#### Updating version number
We commit the major and minor version in [`Jenkinsfile`](https://github.com/cbinsights/form-design-system/blob/master/Jenkinsfile#L10).
Jenkins populates the patch version based on branch.

```
String VERSION = "1.19"
```

To update the version of the design system in your branch...

1. Update the minor and/or major version in `Jenkinsfile`
2. Update `CHANGELOG.md` with a note about your changes
3. Submit your PR.

#### Beta versions
Jenkins will publish all fds packages to npm on any push to origin.
Non-master branches publish with a "beta" tag followed by the short sha1 hash for the commit.
Pushes to `master` will publish a "latest" version.

Branch   | version
-------- | -------------------------------------
`master` | `X.X.X` (npm "latest" tag)
`feature/my-cool-feature` | `X.X.0-beta.d270ad1` (npm "beta" tag)

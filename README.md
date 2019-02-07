# Form Design System

A design system by CB Insights.

## Getting started

### Installation
The design system is comprised of a number of separate node modules. You can install as many
or as few of them as you need.

**Just the design tokens (color constants, etc)**
```bash
yarn add fds-dictionary
```

**Install everything**
```bash
yarn add fds-dictionary fds-styles fds-components fds-mui-theme
```

### Documentation
[https://cbinsights.github.io/form-design-system/](https://cbinsights.github.io/form-design-system/)

### Versions
This project uses [semantic versioning](https://semver.org/spec/v2.0.0.html).
Refer to the [**Changelog**](https://github.com/cbinsights/form-design-system/blob/master/CHANGELOG.md)
for details on each major and minor release.

------

## Development

1. clone this repo
2. run `yarn && yarn bootstrap`


### Commands
This project uses [Lerna](https://github.com/lerna/lerna) to maintain
multiple npm packages within this repo. As such, all commands should be
run from the root directory.

Command          | Description
---------------- | ------------------------------------------------------
`yarn bootstrap` | Bootstraps dependencies for packages with Lerna
`yarn build`     | Builds unversioned `lib/` or `dist/` dirs in each package; builds all docs to `<root>/docs/`
`yarn test`      | Runs tests for all relevant packages
`yarn lint`      | Runs `eslint` on all js files
`yarn serve:components` | Starts dev server for `fds-components`
`yarn precommit` | Runs `lint-staged` to verify precommit hook will pass

### Docs
Documentation is published to Github Pages from the `docs/` directory in `master`.
Every time the `build` command is run, docs are regenerated to the root `docs/` directory.

### Monorepo setup
This repo uses [lerna](https://lernajs.io/) to manage multiple npm modules in one repo. Each directory in
`packages/` is published as a separate module.

### Versioning/Publishing
All packages managed by `form-design-system` share the same version. If the major, minor, or patch version
for this project changes, all packages will be published with the update.

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
Jenkins will publish an npm version for any branch pushed to origin.
Non-master branches publish with a "beta" tag followed by the short sha1 hash for the commit.
Pushes to `master` will publish a "latest" version.

Branch   | version
-------- | -------------------------------------
`master` | `X.X.X` (npm "latest" tag)
`feature/my-cool-feature` | `X.X.0-beta.d270ad1` (npm "beta" tag)

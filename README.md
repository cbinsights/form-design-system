# Form Design System

A design system by CB Insights.

⚠️  **This is currently a work in progress.** ⚠️
Please check the [changelog](https://github.com/cbinsights/form-design-system/blob/master/CHANGELOG.md) for information about recent releases.

## Documentation
[https://cbinsights.github.io/form-design-system/](https://cbinsights.github.io/form-design-system/)


## Releases
This project uses [semantic versioning](https://semver.org/spec/v2.0.0.html). Versioning,
git tagging, and publishing to npm is handled by [Lerna](https://github.com/lerna/lerna).
Each package in `packages/` is published as an individual npm module.

**Currently, all releases are manual. Jenkins is not yet configured to trigger releases for this project.**


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
`yarn publish`   | ⚠️  bumps version of packages and publishes packages to npm


### Docs
Documentation is published to Github Pages from the `docs/` directory in `master`.
Every time the `build` command is run, docs are regenerated to the root `docs/` directory.

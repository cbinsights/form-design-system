# Tasks for release `3.0.0`

## Configs

- [x] lint/test paths
- [x] sync up postcss configs?

## Build stuff
Get everything building to a common `lib` dir.

- [x] dictionary
- [x] styles
- [x] components
  - [x] jsx
  - [x] css
  - [x] docs
  - [x] serve
- [x] icons
    - [x] export
    - [x] optimize
    - [x] react
    - [x] transpile
    - [x] styles
    - [x] docs
- [x] mui-theme
- [x] css rollup for `lib/assets/styles.css`


## Docs

- [ ] all README files
  - [ ] root
  - [ ] components
  - [ ] styles
  - [ ] dictionary
  - [ ] icons
- [ ] import hints from docs
  - [ ] components
  - [ ] styles
  - [ ] dictionary
  - [ ] icons


## Release

- [ ] Pulish target and Jenkinsfile
- [ ] set root package name and version. Use this instead of jenkinsfile?
- [ ] update build pipeline

## Other

- [x] Base styles in `docs/` should be `fds-styles`
- [x] debug classes for components
- [x] pick a name for the root package
- [x] flatten nested `src` (`src/base-styles/src` => `src/base-styles/css`)
  - `src/components/src/(components|styles)` => `src/components/(jsx|css)`


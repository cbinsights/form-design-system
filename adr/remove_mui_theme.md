# Remove `mui-theme`

- **Status:** Accepted
- **Deciders:** Adam Detrick, Rey Wright
- **Date:** 2019-10-14

---

## Context and Problem Statement

The [material-ui](https://material-ui.com) library is considered "legacy". In FDS, we
aim to provide component coverage so that in the future, consumers will no longer need to
rely on material-ui.

The FDS node module however, still provides a `mui-theme` theming object for the
material-ui library.

## Decision Outcome

Removed `mui-theme` from FDS.

### Negative Consequences <!-- optional -->

- Consumers will need to handle the breaking change. Consumers are now responsible for
  defining their own material-ui base theme.

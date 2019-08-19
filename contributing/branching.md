[&larr; Table of Contents](../CONTRIBUTING.md)
-----

# Branching
⑃ Branching conventions in Form Design System

Form Design System is published as an npm package. **There are no `develop` or `staging`
environments.**

## Features, enhancements and bug fixes
All features, enhancements, and bug fixes should branch off of `master`.
Pull requests will automatically be set to `master` as a base branch.

## Major release branches
For major version releases, which include breaking changes, we start a release branch with a name following this pattern:

```
release/<MAJOR>.<MINOR>
```

The UI Platform team is responsible for managing release branches and determining when to
merge a major release back to `master`.

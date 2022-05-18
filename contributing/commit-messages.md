[&larr; Table of Contents](../CONTRIBUTING.md)

# Commits

FDS uses conventional commits to produce release versions according to semantic release.
A very basic conventional commit looks like this:

```
fix(tooltip): add span around trigger
```

Your commit messages must have a shape like

```
<type>(optional scope): <description>

[optional body]

[optional footer(s)]
```

where `<type>` can be one of the following:

- fix
- feat
- build
- chore
- ci
- docs
- style
- refactor
- perf
- test

NOTE: you can make use of `yarn commit` script to help you create a commit message that follows these guidelines.

# How to produce a new version release

- fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
- feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
- BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
- The rest of the types don't produce a version release when they don't contain `BREAKING CHANGE` in the description/footer or `!` in the type.

# Examples

## Commit message with no body

```
docs: correct spelling of CHANGELOG
```

expected change in the version:

- 1.0.0 -> 1.0.0

## Commit message with scope

```
feat(lang): add Polish language
```

expected change in the version:

- 1.0.0 -> 1.2.0

## Commit message with multi-paragraph body and multiple footers

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

expected change in the version:

- 1.0.0 -> 1.0.1

## Commit message with description and breaking change footer

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

expected change in the version:

- 1.0.0 -> 2.0.0

## Commit message with ! to draw attention to breaking change

```
feat!: send an email to the customer when a product is shipped
```

expected change in the version:

- 1.0.0 -> 2.0.0

## Commit message with scope and ! to draw attention to breaking change

```
feat(api)!: send an email to the customer when a product is shipped
```

expected change in the version:

- 1.0.0 -> 2.0.0

## Commit message with both ! and BREAKING CHANGE footer

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

expected change in the version:

- 1.0.0 -> 2.0.0

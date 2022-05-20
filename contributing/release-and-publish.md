[&larr; Table of Contents](../CONTRIBUTING.md)

# Releases and Publishing

🛠 How the build and publish pipeline works

## Managing [semver](https://semver.org/) in FDS

FDS uses semantic release and [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Build pipeline

On every push to `master`, a CI tool will perform these actions:

1. full build
2. lint
3. test
4. type check
5. publish to npm
6. tag the release and push the git tag to `origin`

## Publishing docs

All FDS documentation is published to [Github Pages](https://pages.github.com/).

The publishing source is the `docs/` directory in repo root on `master`. This means that
we can not .gitignore these files.

Documentation is regenerated on every full build and **we commit generated documentation**.

Generated documentation is suppressed in pull requests diffs by the [`linguist-generated` gitattribute](https://help.github.com/en/articles/customizing-how-changed-files-appear-on-github).

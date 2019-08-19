[&larr; Table of Contents](../CONTRIBUTING.md)

# Releases and Publishing
🛠 How the build and publish pipeline works

## Managing [semver](https://semver.org/) in FDS
When making changes, bump the semantic version in your branch `Jenkinsfile`.
Full instructions for doing this can be found [here](https://github.com/cbinsights/form-design-system/#versioningpublishing).


## Build pipeline
On every push to `master`, a CI tool will perform these actions:

1. full build
2. lint
3. test
4. bump the version in `package.json`
5. publish to npm
6. tag the release and push the git tag to `origin`


## Publishing docs
All FDS documentation is published to [Github Pages](https://pages.github.com/).

The publishing source is the `docs/` directory in repo root. Documentation is regenerated
on every full build and **we commit generated documentation**.

Generated documentation is suppressed in pull requests diffs by the `linguist-generated`
gitattribute.

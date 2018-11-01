pipeline {
  agent { docker { image 'node:10' } }
  environment {
    REPO_SLUG = 'cbinsights/form-design-system'
  }
  stages {

    stage('Install Dependencies') {
      steps {
        sh "yarn install --pure-lockfile"
        sh "yarn bootstrap"

        // fail if yarn install produces unstaged changes (yarn.lock)
        sh "git diff --exit-code"
      }
    }

    stage('Test') {
      steps {
        ansiColor('xterm') {
          sh "yarn test"
        }
      }
    }

    stage('Build') {
      steps {

        // run a build to ensure nothing is seriously wrong and
        // to generate fresh documentation
        sh "yarn build"
        sh "git commit -am 'Regenerate docs from Jenkins build $BUILD_NUMBER'"
      }
    }

    stage('Publish npm packages') {
      when { expression { env.BRANCH_NAME == 'master'} }
      steps {

        // get semver from `make`
        withEnv(['GIT_TAG=$(make version)', 'NPM_TAG=latest']) {

          // publish all modules to npm and push a git tag for this version.
          sh '''
            yarn lerna publish --yes --force-publish --skip-git --npm-tag=$NPM_TAG --repo-version=$GIT_TAG &&
              git tag -a $GIT_TAG -m "Form Design System $GIT_TAG built by Jenkins build $BUILD_NUMBER" &&
              git push --tags git@github.com:$REPO_SLUG.git
          '''
        }
      }
    }
  }
}

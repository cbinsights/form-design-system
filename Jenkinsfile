pipeline {
  agent { docker { image 'node:10' } }
  environment {
    REPO_SLUG: cbinsights/form-design-system
  }
  stages {

    stage('Install Dependencies') {
      steps {
        ansiColor('xterm') {
          sh "yarn install"
          sh "yarn bootstrap"

          // fail if yarn install produces unstaged changes (yarn.lock)
          sh "git diff --exit-code"
        }
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
        ansiColor('xterm') {
          sh "yarn build"
        }
      }
    }

    stage('Publish npm packages') {
      steps {
        ansiColor('xterm') {
          script {

            // Set up a stable release from master
            // OR
            // Set up a beta release from PR/branch build
            if (env.BRANCH_NAME == 'master') {
              sh echo "Publishing packages version $(make version)"
              sh export NPM_TAG=latest
              sh export GIT_TAG=$(make version)
            } else {
              sh echo "Publishing packages version $(make version)-beta"
              sh export NPM_TAG=beta
              sh export GIT_TAG=$(make version)-beta
            }

            sh yarn lerna publish --yes --force-publish --skip-git --npm-tag=$NPM_TAG --repo-version=$GIT_TAG &&
               git tag -a $GIT_TAG -m "Form Design System $GIT_TAG built by Jenkins build $BUILD_NUMBER" &&
               git push --tags git@github.com:$REPO_SLUG.git
          }
        }
      }
    }
  }
}

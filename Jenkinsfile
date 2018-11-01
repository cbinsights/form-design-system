pipeline {
  agent { docker { image 'node:10' } }
  environment {
    REPO_SLUG: cbinsights/form-design-system
  }
  stages {

    stage('Install Dependencies') {
      steps {
        sh "yarn install"
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
        sh "yarn build"
        // TODO: commit new docs after build?
      }
    }

    stage('Create release version') {
      when { env.BRANCH_NAME == 'master' }
      steps {
        sh export GIT_TAG=$(make version)
        sh echo "Creating version " $GIT_TAG
        sh export NPM_TAG=latest
      }
    }

    stage('Create beta version') {
      when { not { env.BRANCH_NAME == 'master' } }
      steps {
        sh export GIT_TAG=$(make version)-beta
        sh echo "Creating version " $GIT_TAG
        sh export NPM_TAG=beta
      }
    }

    stage('Publish npm packages') {
      steps {
        sh yarn lerna publish --yes --force-publish --skip-git --npm-tag=$NPM_TAG --repo-version=$GIT_TAG &&
            git tag -a $GIT_TAG -m "Form Design System $GIT_TAG built by Jenkins build $BUILD_NUMBER" &&
            git push --tags git@github.com:$REPO_SLUG.git
      }
    }
  }
}

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

    stage('Create packages version') {
      when { not { env.BRANCH_NAME == 'master' } }
      steps {
        if (env.BRANCH_NAME == 'master') {
          sh export GIT_TAG=$(make version)
          sh echo "Creating version " $GIT_TAG
          sh export NPM_TAG=latest
        } else {
          sh export GIT_TAG=$(make version)-beta
          sh export NPM_TAG=beta
        }
        sh echo "Created version " $GIT_TAG
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

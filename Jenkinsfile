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
        sh 'echo $BRANCH_NAME'
        sh 'echo $(make version)'
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

    stage('Publish npm packages') {
      when { expression { env.BRANCH_NAME == 'master'} }
      steps {
        withEnv(['GIT_TAG=$(make version)', 'NPM_TAG=latest']) {
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

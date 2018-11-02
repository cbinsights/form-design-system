String REPO_SLUG = "cbinsights/form-design-system"
String GIT_TAG = ""
String NPM_TAG = ""

switch(env.BRANCH_NAME) {
  case "master":
    NPM_TAG = "latest"
    break
  default:
    // publish X.X.X-beta version for non-master branches.
    NPM_TAG = "beta"
}

pipeline {
  agent { docker { image 'node:10' } }
  stages {

    stage('Get semver') {
      steps {
        script {
          GIT_TAG = sh script: "make version", returnStdout: true
        }
      }
    }

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
          sh "yarn test:ci"
        }
      }
    }

    stage('Publish npm packages') {
      steps {

        // publish all modules to npm and push a git tag for this version.
        sh '''
          yarn lerna publish --yes --force-publish --skip-git --npm-tag=${NPM_TAG} --repo-version=${GIT_TAG} && \
            git tag -a ${GIT_TAG} -m "Form Design System ${GIT_TAG} built by Jenkins build ${env.BUILD_NUMBER}" && \
            git push --tags git@github.com:$REPO_SLUG.git
        '''
      }
    }
  }
}

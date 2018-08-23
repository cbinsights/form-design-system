pipeline {
  agent { docker { image 'node:10' } }
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

    /*
    stage('Publish npm packages') {
      steps {
        ansiColor('xterm') {
          script {
            if (env.BRANCH_NAME == 'master') {
              sh "echo Publish step not implemented"
              // sh "yarn publish"
            } else {
              sh "echo Not on branch `master`. Skipping publish step..."
            }
          }
        }
      }
    }
    */

    /*
    stage('Update gh-pages docs') {
      steps {
        ansiColor('xterm') {
          script {
            if (env.BRANCH_NAME == 'master') {
              sh "echo Docs step not implemented"
              // sh "yarn publish"
            } else {
              sh "echo Not on branch `master`. Skipping docs step..."
            }
          }
        }
      }
    }
    */

  }
}

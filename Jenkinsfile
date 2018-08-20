pipeline {
  agent { docker { image 'node:10' } }
  stages {

    stage('Install Dependencies') {
      steps {
        ansiColor('xterm') {
          sh "yarn install"
          sh "yarn bootstrap"
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

  }
}

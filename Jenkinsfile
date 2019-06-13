#!/usr/bin/env groovy

/**
* Set the package version here.
* `{major}.{minor}`
*
* Jenkins populates the patch version depending on the branch.
*/

String VERSION = "2.26"

/* ---- DO NOT EDIT BELOW (unless you really know what you're doing) ---- */


String NPM_TAG = ""
String REPO_SLUG = "form-design-system"
String BRANCH_NAME = env.BRANCH_NAME
String DOCKER_IMAGE_NAME = "${REPO_SLUG}:${env.BUILD_NUMBER}"

pipeline {
  agent {
    label "slave"
  }

  stages {

    stage('Set version number') {
      steps {
        script {
          switch(BRANCH_NAME) {
            case "master":
              VERSION = "${VERSION}.${env.BUILD_NUMBER}"
              NPM_TAG = "latest"
              break
            default:
              SHORT_COMMIT = env.GIT_COMMIT.take(7)
              VERSION = "${VERSION}.0-beta.${SHORT_COMMIT}"
              NPM_TAG = "beta"
              break
          }
          sh "echo ${VERSION}"
        }
      }
    }

    stage('Pull .npmrc file'){
      steps {
        sh "aws --region us-east-1 s3 cp s3://com.cbinsights.devops/certificates/npm-registry/npmrc npmrc"
      }
    }

    stage('Build Docker image'){
      steps {
        ansiColor('xterm'){
          sh "docker build -t ${DOCKER_IMAGE_NAME} ./"
          sh "docker run ${DOCKER_IMAGE_NAME} ls packages/fds-dictionary/"
        }
      }
    }

    stage('Lint') {
      steps {
        ansiColor('xterm') {
          sh "docker run --rm ${DOCKER_IMAGE_NAME} yarn lint"
        }
      }
    }

    stage('Test') {
      steps {
        ansiColor('xterm') {
          sh "docker run --rm ${DOCKER_IMAGE_NAME} yarn test"
        }
      }
    }

    stage('Publish npm packages') {
      steps {
        ansiColor('xterm') {
          sh "docker run ${DOCKER_IMAGE_NAME} yarn lerna publish --yes --force-publish --skip-git --npm-tag=${NPM_TAG} --repo-version=${VERSION}"
        }
      }
    }

    stage('Git tag build'){
      steps {
        sh "git tag -a ${VERSION} -m '${VERSION} Tagged by Jenkins from branch ${BRANCH_NAME}'"
        sh "git push --tags"
      }
    }

  }
}

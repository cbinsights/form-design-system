#!/usr/bin/env groovy

/**
* Set the package version here.
* `{major}.{minor}.{patch}`
*
* Jenkins populates the patch version with build number.
*/

String VERSION = "1.19.${env.BUILD_NUMBER}"

/* ---- DO NOT EDIT BELOW (unless you really know what you're doing) ---- */


String SERVER_ENV = ""
String TMP_FOLDER = ""
String NPM_TAG = "beta"
String REPO_SLUG = "form-design-system"
String BRANCH_NAME = "${env.BRANCH_NAME}"
String DOCKER_IMAGE_NAME = "${REPO_SLUG}:${env.BUILD_NUMBER}"
String GIT_TAG = "${VERSION}"

switch(BRANCH_NAME) {
  case "master":
    NPM_TAG = "latest"
    break
  default:
    GIT_TAG = "${VERSION}-beta"
    break
}

pipeline {
  agent {
    label "slave"
  }

  stages {

    stage('Add a file'){
      steps {
        sh "echo 'hello' > chima.txt"
      }
    }

    stage('push back to github'){
      steps {
        sh "git push origin ${env.BRANCH_NAME}"
      }
    }

  }
}

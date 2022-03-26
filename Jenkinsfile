#!/bin/groovy
pipeline {
  tools {
    nodejs 'default-nodejs'
  }
  stages {
    stage('Startup') {
      steps {
        script {
          sh 'npm install'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          sh 'npm run test'
        }
      }
      post {
        always {
          junit 'output/coverage/junit/junit.xml'
        }
      }
    }
    stage('Build') { 
      steps { 
        script { 
          sh 'npm start' 
          sh 'pacote npm '
        } 
      } 
    } 
    stage('Deploy') { 
      when { 
        expressão { 
          currentBuild.result == null || currentBuild.result == 'SUCESSO' 
        } 
      } 
      passos { 
        script { 
          def server = Artifactory.server 'My_Artifactory' 
          uploadArtifact(server) 
        } 
      } 
    } 
  }
}
def uploadArtifact(server) {
  def uploadSpec = """{
            "files": [
              {
                "pattern": "testingwithjest*.tgz",
                "target": "npm-stable/"
              }
           ]
          }"""
  server.upload(uploadSpec)
  def buildInfo = Artifactory.newBuildInfo()
  server.upload spec: uploadSpec, buildInfo: buildInfo
  server.publishBuildInfo buildInfo
}
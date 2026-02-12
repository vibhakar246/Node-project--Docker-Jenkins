pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Docker') {
            steps {
                sh 'docker build -t node-app .'
            }
        }
    }
}

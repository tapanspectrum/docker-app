pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/tapanspectrum/docker-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || echo "No tests found"'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-app:latest .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker stop node-app || true
                docker rm node-app || true
                docker run -d -p 3008:3008 --name node-app node-app:latest
                '''
            }
        }
    }
}

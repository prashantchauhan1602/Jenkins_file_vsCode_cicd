pipeline {
    agent any
    
    environment{
        DOCKER_IMAGE_NAME = "prashantrana1602/jenkins_docker_pipeline_connect_cicd_vscode"
        DOCKER_IMAGE_LOCAL = "jenkins_docker_pipeline_connect_vscode"
        DOCKER_USERNAME = "prashantrana1602"
        DOCKER_PASS = "Mahadev@0505"
    }

    stages {
        // stage('Checkout from Github') {
        //     steps {
        //         script{
        //             git branch: 'main', url: 'https://github.com/prashantchauhan1602/Docker_Jenkins_Connection.git'
        //             echo "Checkout from Github successful !! "
        //         }
                
        //     }
        // }
        
        stage("Login to Docker"){
            steps{
                script{
                    sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASS}"
                    echo "Login successful !!"
                }
            }
        }
        
        // stage('Build Image to Locally'){
        //     steps{
        //         script{
        //             sh "docker build ${DOCKER_IMAGE_LOCAL}"
        //             echo "Built image: ${DOCKER_IMAGE_LOCAL} successful"
        //         }
        //     }
        // }
        
        stage('Build Image to Hub'){
            steps{
                script{
                    docker.build("${DOCKER_IMAGE_NAME}")
                    echo "Built image: ${DOCKER_IMAGE_NAME} successful"
                }
            }
        }
        
        stage('Verify Docker Image') {
            steps {
                script {
                    sh 'docker images'
                }
            }
        }
        
       stage('Push into the Hub'){
           steps{
               script{
                   sh "docker push ${DOCKER_IMAGE_NAME}"
                   echo "Image pushed successfully !!"
               }
           }
       }
    }
}

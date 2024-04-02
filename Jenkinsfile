pipeline {
    agent any {
    }
}
    stages {
        stage ("checkout"){
         steps {
            git 'https://github.com/Rishika50/w3.git'
        } 
        }
        stage ("Generate report"){
            steps {
                dir ('C:/Users/uif95318/Desktop/New folder/Folder/Folder/page'){
                    script{
                        sh "pip install django"
                        sh "python manage.py runserver"
                    }

                }
            }
        }
        
    }
}
}


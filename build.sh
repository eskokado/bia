ECR_REPOSITORY="655658797030.dkr.ecr.us-east-1.amazonaws.com"
aws ecr get-login-password --region us-east-1 --profile bia | docker login --username AWS --password-stdin $ECR_REPOSITORY
docker build -t bia .
docker tag bia:latest $ECR_REPOSITORY/bia:latest
docker push $ECR_REPOSITORY/bia:latest

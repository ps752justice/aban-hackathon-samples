docker image rm PROJECT_NAME:latest -f
docker pull PROJECT_NAME:latest
CONTAINER=$(docker ps -q -f 'name=hackathon-api')
if [ -z "$CONTAINER" ]
then
      echo "No running container was found"
else
      echo "Active container id: $CONTAINER"
      docker stop $CONTAINER
      docker rm $CONTAINER
fi

docker create \
  --name=hackathon-api \
  -p 8080:8082 \
  -e DB_CONNECTION=${DB_CONNECTION} \
  --restart unless-stopped \
  PROJECT_NAME

CONTAINER=$(docker container ls -a -q -f='name=hackathon-api')
docker start $CONTAINER

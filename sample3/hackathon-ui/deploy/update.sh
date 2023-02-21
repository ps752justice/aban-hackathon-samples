#!/bin/bash

set -e

docker image rm PROJECT_NAME:latest -f
docker pull PROJECT_NAME:latest

CONTAINER=$(docker ps -q -f 'name=hackathon-ui')
if [ -z "$CONTAINER" ]
then
      echo "No running container was found"
else
      echo "Active container id: $CONTAINER"
      docker stop "$CONTAINER"
      docker rm "$CONTAINER"
fi

docker create \
  --name=hackathon-ui \
  -p 80:8082 \
  --restart unless-stopped \
  PROJECT_NAME

CONTAINER=$(docker container ls -a -q -f='name=hackathon-ui')
docker start "$CONTAINER"

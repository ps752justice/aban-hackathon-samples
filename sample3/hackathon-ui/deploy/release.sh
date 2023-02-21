#!/bin/bash

set -e

HOST='example.com'
SSH_KEY="/PATH/TO/SSH/KEY"
ENV="staging"

while [[ $# -gt 0 ]]; do
        key="$1"
        case $key in
        --us|--prod|-p|-u)
            $HOST
            $SSH_KEY
            ENV="production"
            shift
            ;;
        *)
            echo "Unknown option $1"
            shift
            ;;
        esac
done

confirm() {
  NAME=$1
  shift
  echo -n "Would you like to $NAME y/n? "
  read REPLY

  if [ "$REPLY" = y -o "$REPLY" = Y ]; then
    "$@"
  else
    echo "$NAME cancelled"
    exit 0
  fi
}

deploy() {
  echo "Deploying to $ENV..."
  docker build -t PROJECT_NAME:latest .
  docker push PROJECT_NAME:latest
  ssh -i $SSH_KEY $HOST 'bash -s' < ./deploy/update.sh
}

if [ $ENV = 'production' ]; then
   confirm "Deploy to $ENV" deploy
else
  deploy
fi

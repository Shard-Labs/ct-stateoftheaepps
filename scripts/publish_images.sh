#!/bin/bash
set -e

# If not staging or master branch are existing
export TAG="$CIRCLE_BRANCH"

if [ "$CIRCLE_BRANCH" == "master" ]; then
    export TAG="stable"; 
fi

if [ "$CIRCLE_BRANCH" == "ci_test" ]; then
    export TAG="test"; 
fi

if [ "$CIRCLE_BRANCH" == "backend" ]; then
    export TAG="latest"; 
fi

echo $TAG

docker login --username $DOCKER_USER --password $DOCKER_PASS

curl https://raw.githubusercontent.com/Shard-Labs/ct-stateoftheaepps/${CIRCLE_BRANCH}/docker-compose.build.yaml

TAG=$TAG docker-compose -f docker-compose.build.yml build
TAG=$TAG docker-compose -f docker-compose.build.yml push

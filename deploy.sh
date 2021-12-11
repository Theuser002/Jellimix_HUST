#!/bin/bash

# initialize a swarm
docker swarm init 

jelli-network=$(docker network ls | grep jelli-network)

if [ -z "$jelli-network"]; then
    docker network create jelli-network --attachable --driver=overlay
fi

docker build -t jellimix:1.0 .

docker stack deploy --compose-file service-compose.yml --resolve-image always jellimix 
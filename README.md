## Dockerfile to build a container image from this github repo

```dockerfile
FROM node

WORKDIR /developer/nodejs/app_from_github

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/alpha951/dockerizing-basic-node-server.git .

RUN git pull origin main

ENV PORT=3000

RUN npm ci

CMD ["npm", "start"]
```

## Build the image

```bash

docker build -t nodejs-app-from-github .

```

## Run the container

```bash

docker run -it --init --publish 5000:3000 app-from-github:latest

```
> The server will run at port 5000 in the host machine

> EXPOSE 3000 also can be used to expose the port 3000 in the container to the host 

## To bind the container with host directory

This command also make sure if there is any change in the project files inside the container then they will be reflected in the host machine. So it's a two way binding.

```bash
docker run -it --init --publish 5000:3000 -v "$(pwd)":developer/nodejs/app_from_github app-from-github:latest

```

## Prune the docker system

```bash
docker system prune -a
```

## Docker Volume

It's is used to persist the data in the container. It's a way to store the data in the host machine. So if the container is deleted then the data will be still there in the host machine.
Also if the container is binded with the host directory then the data will be stored in the host machine. So node_modules can create conflict while running in the container. 
    
```bash
docker volume create node_modules_volume

```

## Comunication between containers

```bash

docker network create microservice-network

```
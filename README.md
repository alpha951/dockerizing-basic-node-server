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
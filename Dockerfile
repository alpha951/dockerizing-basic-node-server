FROM node

WORKDIR /home/keshav/Desktop/backend-sanket/Docker-tutorial/nodejs-Docker/my-server

COPY . .

RUN npm ci

CMD ["npm", "start"]
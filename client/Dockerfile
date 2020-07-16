FROM node:10.21.0

WORKDIR /client

RUN rm -rf /node_modules

RUN npm install

ADD . .

ENV HOST 0.0.0.0
EXPOSE 3000

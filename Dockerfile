ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine as build

ARG TINA_CLIENT_ID
ENV TINA_CLIENT_ID=${TINA_CLIENT_ID}

ARG TINA_TOKEN
ENV TINA_TOKEN=${TINA_TOKEN}

WORKDIR /app

COPY ./app/package.json ./app/package-lock.json ./

RUN npm install

COPY ./app .

RUN npm run build

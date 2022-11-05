# Install dependencies only when needed
FROM node:14-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
ENV NPM_VERSION 7.19.1
RUN apk add --no-cache libc6-compat
RUN npm i -g npm@${NPM_VERSION}
WORKDIR /app

COPY ../ ./
RUN yarn install
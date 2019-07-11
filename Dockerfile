FROM node:10.15.3-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 4000

CMD [ "yarn", "start" ]
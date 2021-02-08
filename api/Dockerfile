FROM node:alpine as main

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api
COPY ./package*.json /usr/src/api/

FROM main as development
RUN npm install && npm cache clean --force
COPY ./ /usr/src/api
EXPOSE 3000
CMD [ "npm", "run", "dev" ]

FROM main as production
RUN npm install --production && npm cache clean --force
COPY ./ /usr/src/api
EXPOSE 3000
CMD [ "npm", "run", "prod" ]
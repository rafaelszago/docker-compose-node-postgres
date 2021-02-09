FROM node:alpine as main

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api
COPY ./package*.json /usr/src/api/

FROM main as development
ENV NODE_ENV=development
ENV PORT=3000
RUN npm install && npm cache clean --force
COPY ./ /usr/src/api
EXPOSE 3000
CMD [ "npm", "run", "dev" ]

FROM main as production
ENV NODE_ENV=production
ENV PORT=80
RUN npm install --production && npm cache clean --force
COPY ./ /usr/src/api
EXPOSE 3000
CMD [ "npm", "run", "prod" ]

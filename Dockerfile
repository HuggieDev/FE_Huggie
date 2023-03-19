FROM node:18

COPY ./package.json /huggie_frontend/
COPY ./yarn.lock /huggie_frontend/
WORKDIR /huggie_frontend/
RUN yarn install

COPY . /huggie_frontend/
RUN yarn build
CMD yarn start

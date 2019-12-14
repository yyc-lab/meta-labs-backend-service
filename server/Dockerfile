# This file lists the instructions for docker on how to setup a docker container (it's like a miniature VM)

FROM node:12

ENV APP_PATH=/usr/src/server
WORKDIR ${APP_PATH}
COPY . ${APP_PATH}
RUN npm install

# Dockerize is used to make this container wait for the db to be ready
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# EXPOSE opens a port to the outside world
EXPOSE 3030

CMD dockerize --wait tcp://${DB_HOST}:${DB_PORT} -timeout 2m npm start
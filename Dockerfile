FROM node:14.16

WORKDIR /src

COPY ./src/package*.json /src
RUN npm install
COPY ./src/*js /src

EXPOSE 80
CMD ["bash", "-c", "npm install & npm run docker_start"]

ARG NODE_VERSION=19
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

# Copy package.json and install node modules
COPY package.json .
RUN npm install

# Add app source code
ADD ./dist /usr/src/app

ENTRYPOINT npm run start

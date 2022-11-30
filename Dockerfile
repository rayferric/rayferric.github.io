FROM node:16
WORKDIR /app

ENV NODE_ENV=production

# This optimizes build times
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

EXPOSE 80
CMD [ "yarn", "serve" ]

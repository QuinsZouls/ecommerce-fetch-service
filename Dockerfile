
FROM node:18-alpine

# update apk repo
RUN echo "http://dl-4.alpinelinux.org/alpine/v3.14/main" >> /etc/apk/repositories && \
    echo "http://dl-4.alpinelinux.org/alpine/v3.14/community" >> /etc/apk/repositories

# install chromedriver
RUN apk update
RUN apk add chromium chromium-chromedriver

# set display port to avoid crash
ENV DISPLAY=:99

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . /app

RUN yarn run build

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "dist/server.js"]
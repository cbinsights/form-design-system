FROM node:10-alpine

RUN apk update \
  && apk add --no-cache bash \
  && apk add git \
  && git config --global user.email "devops+npmjs@cbinsights.com" \
  && git config --global user.name "CB Insights"
WORKDIR /root
COPY . .
RUN mv npmrc /root/.npmrc
RUN yarn install
RUN yarn build:full
CMD [ "ash" ]

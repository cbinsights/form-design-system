SHELL := /bin/bash

bootstrap:
	yarn install
	yarn bootstrap

build:
	yarn clean
	yarn build

test:
	yarn test

## Description

BlockTrust API repository

## Installation

```bash
$ npm install
```

## Service dependencies

You need a mongo database

```
docker run -d -p 27017:27017 --name blocktrust-mongo -v mongovol:/data/db mongo:4.4.10


## Initialize db script

```bash
# script will create 1 user
$ npx ts-node initiate-db.ts
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

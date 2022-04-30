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
# script will create 1 user, 1 paper, 1 review, 1 reputation model (rm)
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

## API Description

OpenAPI Specification is an API description format for REST APIs which allows you to describe your entire API.

In order to see this description, once the API is running (npm run start), go to http://localhost:3000/api/

In addition, you can see this information in JSON format in openapi.json, located in the root folder of the repository.

Read more about OpenAPI and Swagger [here](https://swagger.io/docs/specification/about/).

# Dunelm Pairing Exercise

This repo contains the source for the Dunelm pairing exercise. Here's some useful information to get you started.

## Pre Requisites

- NodeJS 12 (https://nodejs.org/en/)
- Yarn 1 (https://classic.yarnpkg.com/en/docs/install)
- Git (https://git-scm.com/downloads)

#### Optional:

- Postman/Insomnia (not required but feel free to utilise these tools)

## Description

1. This is a monorepo containing the following services:

- `api` - a node service written using [ExpressJS](https://expressjs.com/) and responsible for retrieving and returning product data
- `aggregator` - a [GraphQL](https://graphql.org/) node service written using [ExpressJS](https://expressjs.com/) and [Apollo](https://www.apollographql.com/docs/) responsible for aggregating services (the api service)
- `app` - a web application written using [React](https://reactjs.org/docs/getting-started.html)

2. You can find these services within the `packages` folder.
3. The architecture of these services is as follows:

```
+---------------+        +---------------+        +---------------+
|               |        |               |        |               |
|               |        |               |        |               |
|               |  http  |               |  http  |               |
|      app      +------->+  aggregator   +------->+      api      |
|    (React)    |        |   (GraphQL)   |        |   (Express)   |
|               |        |               |        |               |
|               |        |               |        |               |
+---------------+        +---------------+        +---------------+
```

4. If you don't have any experience with GraphQL please feel free to bypass the `aggregator` and call the `api` directly. You can find instructions on how to achieve this in `packages/app/src/App.jsx`.

## Getting Started

- Run `yarn` to install all dependencies
- Run `yarn start` to run all services
  - This will run the stack on `http://localhost:3000` where `/graphql` and `/api` proxy to the `aggregator` and `api` respectively.
  - Code changes will be hot loaded automatically.
- Run `yarn test` to execute tests once
- In a specific package (e.g. packages/app) run `yarn test:watch` to execute tests in interactive mode where they will re-run on code changes.

## Exercise

Below you'll find an Epic with two Stories. Your objective is to deliver the functionality outlined in both Stories.

- Before you begin please create a new branch.
- Write tests where you feel they're required.
- Feel free to google if you need additional information.
- Feel free to install any npm dependencies you need (`yarn add dependency-name`).
- If you're unsure about anything during the exercise then please ask for clarification.
- When you're done (regardless of progress) please commit your changes to your new branch.

### Epic

```
As a Dunelm customer
I want to view all products
So that I can choose which ones to buy
```

### Story #1

```
Given I have accessed the Dunelm website
When I visit the home page
Then I must be presented with a list of all products
```

- A list of products can be found in `packages/api/products.json`. This should be treated as the data source for the api.
- The user must be presented with the following properties for all products:
  - name
  - description
  - category
  - color
  - price
  - inStock

### Story #2

```
Given I have accessed the Dunelm website
When I visit the home page
And I choose to view buyable products only
Then I must be presented with a list of products available to purchase
```

- Buyable products are those which have their `inStock` property set to `true`.

### #3

What are the top three things you could do to improve your solution?

# Express Star Wars API

### Learning Objectives

- Be able to set up an Express API using Express Generator
- Be able to connect to a database from Express
- Be able to create HTTP routes to perform CRUD operations
- Be able to use Insomnia to test your API

## Brief

Using the **star_wars** database that we created, your task is to create an API that allows a client to CRUD the characters in our **star_wars** database.

Add another route that responds with only darkside characters. NOTE: You'll have to put this route ABOVE the SHOW route.

Add another route that responds with all the characters and their lightsabers.


## Getting Started

```sh
express --no-view star_wars
npm install
```

```sh
npm install --save-dev nodemon
npm install pg
npm install body-parser
```

```json
// package.json

"scripts": {
  "start": "node ./bin/www",
  "server:dev": "nodemon ./bin/www"
}
```

Replace the users routing with characters.

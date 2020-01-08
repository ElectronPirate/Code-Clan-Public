![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Express & Postgres

**Lesson Duration: 60 minutes**

## Learning Objectives

- Know how to query a database when requests are made to our Express server
- Know how to return JSON from our routes

## Adding a database to our Users app

> Use the users_app from previous lesson

### TASK

- Using your SQL skills, create a new database called my_users
- Create a new directory called **db** at the top level of users_app
- Create a new file in the db directory called **my_users.sql**
- Add the following SQL to **my_users.sql** and run the file on the my_users database

```sql
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

-- Add some users

INSERT INTO users (name, email) VALUES ('Keith D', 'keith.douglas@codeclan.com');
INSERT INTO users (name, email) VALUES ('Sian RD', 'sian.robinson-davies@codeclan.com');

```

Now we have a database to connect to using Express. We'll need what's called a database driver that can act as a translator between Express and Postgres.

```bash
npm install pg
```

Ok, now we have an object that will let us talk to Postgres.

## INDEX route

Let's take each route in turn. Here's what we want our INDEX route to look like:

```js
/* GET users listing. */
router.get("/", function(req, res) {
  // run an sql query to get all the users
  // use the SqlRunner class to do the query and get a Promise back.
  SqlRunner.run("SELECT * FROM users ORDER BY name ASC").then(result => {
    res.status(200).json(result.rows);
  });
});
```

Wait, where did that SqlRunner come from? We haven't created it yet! Why are we creating an SqlRunner? In order to separate concerns. The SqlRunner class will have one method in it called **run** and it will be a **static** or **class** method. That means we call it on the class and not an **instance** of the class.

## SqlRunner

Let's create the SqlRunner class together. First we'll write some psuedo-code so we're clear what we're trying to achieve:

```bash
touch db/sql_runner.js
```

```js
// Get a Pool instance from the pg package.
// Configure the Pool object to connect to our local database
// Declare a class called SqlRunner with a static **run** method
// **run** will take 2 arguments. An SQL string, array of values
// Use the Pool object to run the SQL query
// .then takes a callback that will be passed the results of the SQL query
```

```js
//db/sql_runner

const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  database: "my_users"
});

class SqlRunner {
  static run(sqlQuery, values = []) {
    return pool.query(sqlQuery, values).then(results => {
      return results;
    });
  }
}

module.exports = SqlRunner;
```

Let's require it in our users.js

```js
// users.js
var SqlRunner = require("../db/sql_runner");
```

If we now browse to localhost:3000/users we see a list of the 2 users that are in our database.

## SHOW route

```js
router.get("/:id", function(req, res) {
  SqlRunner.run("SELECT * FROM users WHERE id = $1", [req.params.id]).then(
    result => {
      res.status(200).json(result.rows);
    }
  );
});
```

What's the \$1 thing? It's what we call a placeholder. That's why we needed a 3rd argument to be passed to the run method. We pass in an array of the **actual** values that will be used instead of the placeholders. This is a prepared statement which helps protect us against malicious web attacks.

## CREATE route

For our CREATE and UPDATE we're going to need a package called body-parser.

## body-parser

For our CREATE and UPDATE routes we need to grab hold of the JSON that is sent to the route. body-parser is an npm package that will intercept the request and add any values that are sent with the request to a JS object called **body**.

```bash
npm install body-parser
```

We'll add it as a piece of middleware to our app.js

```js
//app.js

var bodyParser = require("body-parser");
app.use(bodyParser.json());
```

Our CREATE route will look like this:

```js
router.post("/", function(req, res) {
  SqlRunner.run(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    result => {
      res.status(200).json(result);
    },
    [req.body.name, req.body.email]
  );
});
```

## TASK

- Complete the rest of the routes and make sure they're working with Insomnia

## SOLUTION

```js
// routes/users.js

var express = require("express");
var router = express.Router();
var SqlRunner = require("../db/sql_runner");

/* GET users listing. */
router.get("/", function(req, res) {
  // run an sql query to get all the users
  // use the SqlRunner class to do the query and pass it a callback.
  SqlRunner.run("SELECT * FROM users ORDER BY name ASC").then(result => {
    res.status(200).json(result.rows);
  });
});

/* GET user with :id. */
router.get("/:id", function(req, res) {
  SqlRunner.run("SELECT * FROM users WHERE id = $1", [req.params.id]).then(
    result => {
      res.status(200).json(result.rows);
    }
  );
});

/* Create a new user. */
router.post("/", function(req, res) {
  SqlRunner.run("INSERT INTO users (name, email) VALUES ($1, $2)", [
    req.body.name,
    req.body.email
  ]).then(result => {
    res.status(201).json(result);
  });
});

/* UPDATE the user with :id */
router.put("/:id", function(req, res) {
  SqlRunner.run("UPDATE users set name = $1, email = $2 WHERE id = $3", [
    req.body.name,
    req.body.email,
    req.params.id
  ]).then(result => {
    res.status(200).json(result);
  });
});

/* DELETE the user with id :id */
router.delete("/:id", function(req, res) {
  SqlRunner.run("DELETE FROM users WHERE id = $1", [req.params.id]).then(
    result => {
      res.status(200).json(result);
    }
  );
});

module.exports = router;
```

## Conclusion

We've created some basic RESTful routes that would enable us to CRUD users. It's likely that an app would have a few more complex routes and SQL queries.

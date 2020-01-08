# Facebook API

## Introduction

We're going to create an API for posts and comments, Facebook style.
This will involve creating a database in MongoDB and an Express app to provide HTTP routes.

## Create Database

Let's use MongoDB Compass to create a new database. Click on the "+" sign at the bottom of the left hand nav bar and call it "facebook".

In our DB we're going to create a new collection called "posts".

And that's it! That's our DB taken care of. We'll populate it using Insomnia once we've made the routes.

## Express

Let's quickly spin up an Express server using Express Generator.

```bash
express --no-view facebook_api
cd facebook_api
rm -rf public
```

Replace all of the references to "users" with "posts".

## Install MongoDB Client for Express

```
npm i mongodb
```

We're going to create a MongoHelper class, just like we had and SqlHelper. That means our routes in Express can be relatively thin.

```
mkdir db
touch db/mongo_helper.js
```

Let's start with a method to insert a post. We'll call it "create".

```js
//mongo_helper.js

const MongoClient = require("mongodb").MongoClient;
ObjectID = require("mongodb").ObjectID;
const DB_NAME = "facebook";
const HOST = "mongodb://localhost:27017";

class MongoHelper {
  static create(coll, payload) {
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.insertOne(payload);
    });
  }
}

module.exports = MongoHelper;
```

## Complete the Other Methods

Complete these following methods so that your code now looks like:

```js
//mongo_helper.js

const MongoClient = require("mongodb").MongoClient;
ObjectID = require("mongodb").ObjectID;
const DB_NAME = "facebook";
const HOST = "mongodb://localhost:27017";

class MongoHelper {
  static get(coll) {
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.find().toArray();
    });
  }

  static create(coll, payload) {
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.insertOne(payload);
    });
  }

  static update(coll, id, payload) {
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.updateOne({ _id: ObjectID(id) }, { $set: payload });
    });
  }

  static delete(coll, id) {
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.deleteOne({ _id: ObjectID(id) });
    });
  }

  static addComment(coll, id, payload) {
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.updateOne(
        { _id: ObjectID(id) },
        { $push: { comments: payload } }
      );
    });
  }
}

module.exports = MongoHelper;
```

## Adding Express Routes

Ok, now we can implement our routes and use the MongoHelper to connect to the DB. It should look like this:

```js
var express = require("express");
var router = express.Router();
const MongoHelper = require("../db/mongo_helper.js");

/* GET posts listing. */
router.get("/", function(req, res) {
  MongoHelper.get("posts").then(results => {
    res.status(200).json(results);
  });
});

/* Create a new posts */
router.post("/", function(req, res) {
  MongoHelper.create("posts", req.body).then(results => {
    res.status(201).json("New post created");
  });
});

/* Update a posts */
router.put("/:id", function(req, res) {
  MongoHelper.update("posts", req.params.id, req.body).then(results => {
    res.status(200).json("Post updated");
  });
});

/* Delete a posts */
router.delete("/:id", function(req, res) {
  MongoHelper.delete("posts", req.params.id).then(results => {
    res.status(204).json("Post updated");
  });
});

/* Add new comment */
router.post("/:post_id/comments", function(req, res) {
  MongoHelper.addComment("posts", req.params.post_id, req.body).then(
    results => {
      res.status(201).json("New comment created");
    }
  );
});

module.exports = router;
```

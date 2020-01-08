![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Frontend Lab/Homework

Add a front end to the API that you built for homework yesterday.

## Getting Started

- Create a client directory
- npm init -y
- npm install express in the client directory
- Create a server.js in the client directory
- Add the following code to your server.js

  ```js
  const express = require("express");
  const app = express();
  app.use(express.static("public"));

  app.get("/", (req, res) => res.sendFile("index.html"));

  app.listen(3001, () =>
    console.log(`All the magic is happening on port 3001!`)
  );
  ```

- Add a 'start' script to your package.json in the client directory to start the Express server.
- Copy the structure of one of your front end apps from last week to get a scaffold in place
- Consider using a CSS library like SemanticUI
- Do you need to install 'cors' on the backend?

## MVP

- A list of all the resources in one of your tables. E.G. a list of all the Coffees or Marvel characters.

## Extensions

- Add a FORM so the user can add a new resource.
- Allow the user to delete a resource.

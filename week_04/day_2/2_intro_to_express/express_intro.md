![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Intro to Express

**Lesson Duration: 60 minutes**

## Learning Objectives
- Know what express and nodemon are
- Understand how to define routes in express
- Be able to create a basic express server
- Understand what JSON is
- Be able to send JSON back from our routes

## Intro

We're going to learn how to write a simple web server using a JavaScript library called Express. In this lesson we will write a basic web server which responds to requests with static files, such as .html or image files.

The ability to write a web server opens up a lot of possibilities. We could deploy our apps to a server in the real world, create our own API or add greater back-end functionality; a database layer, for example.

## What is Express?

Express is an unopinionated, lightweight web framework for Node.js apps. We can use Express to write a web server that will listen for requests and serve our files to clients.

What do we mean when we say that a framework is unopinionated? This means that the framework is flexible and doesn't force us to adhere to their way of doing things.

## Creating a Web Server using Express

We are going to write a simple server that handles the following HTTP request:

- method: GET
- route: home route ('/')
- port: 3000

We are going to respond to that request, firstly, by sending back a simple string to the client. Once we have done that, we will see how to send back JSON files.

### Installing Express

If we want to create a web server with Express then the first thing that we need to do is install Express.

```sh
mkdir express_app
cd express_app
npm init -y
npm install express
```

### Creating the Server

Now that we've installed Express, getting a simple web server up and running and handling our request only requires us to write a few lines of code. First, we'll create a file called app.js, which will contain our server code.

```sh
touch app.js
```

Now that we have a file to work in, we can `require` Express, so that its functionality is available to us.

```js
const express = require('express'); // NEW
```

When we `require` Express, we are given a function. This function returns an object that provides us with various methods that we'll need to create a server. Let's invoke `express` and store the returned object in a variable called `app`.

```js
const express = require('express');
const app = express(); // NEW
```

### Defining Routes

Now we can use Express to define our routes. It has a set of methods that correspond the the HTTP request methods, including:

1. GET - `get`
2. POST - `post`
3. PUT - `put`
4. DELETE - `delete`

Each of these methods takes two arguments:

1. The route as a string.
2. A callback containing the behaviour that we would like to execute when we receive a request to this route.

We want to enable a client making a GET request to the home route, to see `'Hello World!'` displayed on the page. To do this we are going to use the `get` method, passing it the following arguments:

1. Route - `/`
2. A callback that responds with the string `'Hello World!'`

```js
const express = require('express');
const app = express();

app.get('/', function () { // NEW

});
```

### Responding to Requests

This callback should have two parameters: `req` and `res`. When a client makes a request to this route, our callback will be passed objects representing the request that we have received from the client and the response that we would like to send back to the client. 

We can then use these objects to do various things: access the data that was sent with a post request or decide how we would like to respond to the request, for example.

```js
//app.js

app.get('/', function (req, res) { // MODIFIED
  res.status(200).json({message: "Hello World"});
});
```

```js
//app.js

app.listen(3000, function () {
  console.log('App running on port ' + this.address().port);
});
```

We can now start the server with:

```sh
node app.js
```

And we can now try opening up the page in our web browser by going to localhost:3000

And voila! Our first tiny web app! Isn't that cool?

## Nodemon

Now, if we try to change the text what happens? Yes, the change is not picked up! We need to install an additional little tool that will monitor for changes and restart the server.

```sh
npm install --save-dev nodemon
```
Next we'll add a script to our package.json, so that we can run our server with nodemon.

```js
"scripts": {
  "start": "node app.js",
  "server:dev": "nodemon app.js" // NEW
},
```

Now we can use `npm run server:dev` to run our server with Nodemon, so that it watches the file for changes and restarts the server as appropriate.

```sh
npm run server:dev

# -> [nodemon] watching: *.*
# -> [nodemon] starting `node app.js`
# -> App running on port 3000
```


## Responding with JSON

JSON data to send back:

```js
    var jsonData = {
      name: "Leia",
      darkside: "false",
      age: 29
    }
```

We'll use the json method on the response object to send back the JSON. We'll also set the status of the response to 200 which means OK.

```js
//app.js

var express = require('express');
var app = express();

var jsonData = {
  name: "Leia",
  darkside: "false",
  age: 29
}

app.get('/data', function(req, res){
  res.status(200).json(jsonData);
})

app.listen(3000, function() {
  console.log('App running on port ' + this.address().port);
});

```

## Working with JSON

[Working with JSON]
(https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON$hitory) is licensed under [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).

JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments feature the ability to read (parse) and generate JSON.

JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data. This is not a big issue —  JavaScript provides a global JSON object that has methods available for converting between the two.

> Note: Converting a string to a native object is called parsing, while converting a native object to a string so it can be transmitted across the network is called stringification.

A JSON object can be stored in its own file, which is basically just a text file with an extension of .json, and a MIME type of application/json.

## JSON structure
As described above, a JSON is a string whose format very much resembles JavaScript object literal format. You can include the same basic data types inside JSON as you can in a standard JavaScript object — strings, numbers, arrays, booleans, and other object literals. This allows you to construct a data hierarchy, like so:


```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

If we loaded this object into a JavaScript program, parsed in a variable called superHeroes for example, we could then access the data inside it using the same dot/bracket notation we looked at in the JavaScript object basics article. For example:

```js
superHeroes.homeTown
superHeroes['active']
```

To access data further down the hierarchy, you simply have to chain the required property names and array indexes together.  For example, to access the third superpower of the second hero listed in the members list, you'd do this:

```js
superHeroes['members'][1]['powers'][2]
```

- First we have the variable name — superHeroes.
- Inside that we want to access the members property, so we use ["members"]. Members contains an array populated by objects. We want to access the second object inside the array, so we use [1].
- Inside this object, we want to access the powers property, so we use ["powers"].
- Inside the powers property is an array containing the selected hero's superpowers. We want the third one, so we use [2].

> Note: We've made the JSON seen above available inside a variable in our JSONTest.html example (see the source code). Try loading this up and then accessing data inside the variable via your browser's JavaScript console.

## Arrays as JSON
Above we mentioned that JSON text basically looks like a JavaScript object, and this is mostly right. The reason we said "mostly right" is that an array is also valid JSON, for example:

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

The above is perfectly valid JSON. You'd just have to access array items (in its parsed version) by starting with an array index, for example [0]["powers"][0].

## Other notes

- JSON is purely a data format — it contains only properties, no methods.
- JSON requires double quotes to be used around strings and property names. Single quotes are not valid.
- Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use (although computer-generated - JSON is less likely to include errors, as long as the generator program is working correctly). You can validate JSON using an application like JSONLint.
- JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So for example, a single string or number would be a valid JSON object.
- Unlike in JavaScript code in which object properties may be unquoted, in JSON, only quoted strings may be used as properties.

## Recap

What is Express?

<details>
<summary>Answer</summary>

Express is an unopinionated, lightweight JavaScript web framework.
</details>
<br>

What is JSON?

<details>
<summary>Answer</summary>

JavaScript Object Notation, a data exchange format.
</details>
<br>

When creating a server that responds to a request, what three pieces of information will you need?

<details>
<summary>Answer</summary>

1. The route path
2. The request method
3. The port number you want to listen on
</details>

## Conclusion

We just wrote our first web server using JavaScript. If we wanted to, we would now be able to deploy our apps in the real world.

Next we'll look at how we can create our own RESTful JSON API, just like the ones that we've been using to get data. Later we'll add a database layer, allowing us to persist and modify the data provided by our API.

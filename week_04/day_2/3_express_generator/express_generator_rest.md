![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Express Generator

**Lesson Duration: 60 minutes**

## Learning Objectives
- Know how to use Express Generator to create a server
- Understand the folder structure Express Generator creates
- Understand Routing in express

### Why are we doing this?

The team who maintain Express have created a tool called [Express Generator](https://expressjs.com/en/starter/generator.html) that we can use to quickly set up a skeleton framework for our Express API.

Let's take advantage of this to make it quicker to get up and running.

```sh
npm install express-generator -g
```

Let's create a new app.

```sh
express --no-view users_app

   create : users_app/
   create : users_app/public/
   create : users_app/public/javascripts/
   create : users_app/public/images/
   create : users_app/public/stylesheets/
   create : users_app/public/stylesheets/style.css
   create : users_app/routes/
   create : users_app/routes/index.js
   create : users_app/routes/users.js
   create : users_app/public/index.html
   create : users_app/app.js
   create : users_app/package.json
   create : users_app/bin/
   create : users_app/bin/www
```

```sh
npm install
```

We can get rid of the public directory because we're not doing server-side rendering.

```sh
users_app/
users_app/routes/
users_app/routes/index.js
users_app/routes/users.js
users_app/app.js
users_app/package.json
users_app/bin/
users_app/bin/www
```

Open up the files in Atom and let's see what the generator has done.

<!-- TODO: Quiz: What does each line of Express Generator do?  -->

Let's install nodemon and create a dev:server script in package.json

```js
npm install --save-dev nodemon
```

```json
"scripts": {
  "start": "node ./bin/www",
  "server:dev": "nodemon ./bin/ww"
}
```

And let's alter the home route in index.js

```js
//routes/index.js
router.get('/', function(req, res) {
  res.status(200).json({ title: 'Express' });
});
```

Start the server ... and browse to http://localhost:3000

```sh
npm run server:dev
```

Let's recap the structure of our route.

```js
// The HTTP verb
.get

 // The Path
'/'

// The function that runs when the
// server hears a request for this route
function(req, res) {
  res.status(200).json({ title: 'Express' });
}

```

## Creating RESTful routes

Your task is to create following 6 routes:
(HINT: We've already done the home and index routes). Define your routes in **routes/users.js**

Our REST table looks like this:

|HTTP VERB  |PATH             |ACTION |
|:----:|:---------------:|:-----:|
|GET   |/                |home: A home page   |
|GET   |/users           |index: List all the users  |
|GET   |/users/:id       |show: Display details of one user   |
|POST  |/users           |create: Create a new user |
|PUT   |/users/:id       |update: Update one user |
|DELETE  |/users/:id     |destroy: Delete one user|


### SOLUTION

```js
//routes/users.js

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a list of users');
});

/* GET user with id :id. */
router.get('/:id', function(req, res) {
  res.send(`respond with user ${req.params.id}`);
});

/* POST a new user. */
router.post('/', function(req, res) {
  res.send('create a new user');
});

/* UPDATE the user with id :id */
router.put('/:id', function(req, res) {
  res.send(`update user ${req.params.id}`);
});

/* DELETE the user with id :id */
router.delete('/:id', function(req, res) {
  res.send(`delete user ${req.params.id}`);
});
```


## Insomnia REST client

You may have spotted that we can't make a POST, PUT or DELETE request from the browser.

That's because browsers by default will always make a GET request.

There's a tool we can use though to make requests and test our API.

[Click here to download Insomnia](https://insomnia.rest/)

With Insomnia we can make all the HTTP request types.

> Make all the requests to http://localhost:3000/users

## Conclusion

We've created our own API!

We've used Express Generator to create a server, understood the folder structure Express Generator creates and we know how routing works in Express.

## Next Steps

1. Hook up our Express app with a database
2. Return JSON from our Express routes

# MongoDB API - Customers and Accounts

## Learning Objectives

- Know how to create a Mongo database
- Know how to create an Express API to interact with MongoDB

## MVP

- Create a MongoDB backed API with Express
- Your database should be called `bank`
- Your database should have one collection called `customers` which should have an array of embedded documents of their accounts.

Example of a document:

```js
{
  "_id":"5ce7d0ee848a8b2deb7fa1e7",
  "first_name":"Jane",
  "last_name":"Doe",
  "customer_id":"SW8907865t",
  "accounts":[
    {"account_type":"current","balance":100,"overdraft":300},
    {"account_type":"pension","balance":10000,"strategy":"balanced"}
  ]
}
```

- Use Insomnia to index, create, update and delete customers and add an account

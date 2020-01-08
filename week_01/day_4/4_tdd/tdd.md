![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Test-Driven Development Using Jest

**Duration: 75 minutes**

## Learning Objectives
- Be able to write basic tests using the Jest library
- Understand the relationship between spec files and modules
- Be able to run test files using an npm script

## Intro

We've learned the fundamentals of JavaScript and we're able to use them to write some fairly robust code, but how can we be sure that our code works?

We could use `console.log()` to verify that our functions have the expected output, but then our code would be littered with redundant statements that aren't relevant to its functionality.

We could remove those `console.log()`s once we're satisfied that our code works, but then how would we test that our code still works if we were to refactor it?

Unit tests to the rescue!

## Test Driven Development

Test (and Behaviour) Driven Development means we think about solving problems by writing code to test the expected outcome. I.E we write our tests first.

## Why Should We Test?

When we write our code we want to make sure it works as we expected. Maybe this
sounds obvious. So let's make an ever bigger claim. We can craft better code if it's tested.

We haven't really touched on the craft of writing code yet. When we talk about
code craft we mean things like the ability to easily make changes to code without worrying about introducing bugs, as well as the ability for other people to work on our code easily.

Having tests we can run ensures that if we break code by changing it we know instantly.

Therefore the quality of the code is instantly improved, even if the code itself is unchanged. It also means that someone new to our code can look at the tests to very quickly work out how the code works.

There are many approaches to testing our code but the principles are the same.
What we want to do is write code which expects some specific thing to happen.
These "expectations" are referred to as assertions. As our tests run, each assertion will either pass or fail, and the result will be printed to the terminal.

Most programming languages have test suites and different ways of testing.
The testing library we will use in JavaScript is called Jest.


## Unit Testing vs Integration Testing

“Unit testing refers to tests that verify the functionality of a specific section of code, usually at the function level. In an object-oriented environment, this is usually at the class”

“Integration testing is any type of software testing that seeks to verify the interfaces between components against a software design.”

- from Wikipedia: Software Testing

## How Do We Test?

First we need to create a directory for our project and then install Jest.

```sh
mkdir my_first_jest_app
npm install --save-dev jest
```

TASK: Follow the instructions on https://jestjs.io/docs/en/getting-started
to create your first test.

## Testing our Shopping Basket

Use the shopping_basket_app that we created.

## Arrange, Act, Assert

A very common way to structure a test is using "Arrange, Act, Assert", where every test you write is composed from the following 3 parts:

 * **Arrange** - do any set up necessary for the test (for really simple tests, there won't be any)
 * **Act** - call the _function under test_ (one call, never more)
 * **Assert** - check that the right thing happened, using at least one "matcher" method (this might be checking the return value of a function or checking it has modified something else)

Instead of having an app.js to console.log text out, we're going to replace it with a "spec" file.

```sh
// In shopping_basket_app
rm app.js
```

```sh
mkdir specs
touch specs/shopping_basket.test.js
npm install --save-dev jest
```

```js
// package.json
"scripts": {
  "test": "jest"
}
```

```js
// shopping_basket.test.js
const shoppingBasket = require('../shopping_basket');
const products = require('../products');
```

## Construct of a test

Jest, Mocha and Jasmine are very similar and all use the same constructs to define tests:

- **describe** - The name of the test suite
- **it** - The test case
- **before** - Preparation
- **beforeEach** - Prep. for every test case
- **after** - Clean up
- **afterEach** - Clean up for every test case

```js
describe("Noun: Usually the name of a class", () => { // Describe what our suite of tests is about
  beforeEach( () => {
    // This code will be called once before each unit test
  })

  it('Verb describing behaviour', () => {
    // Make and assertion. A true or false question.
  })
})

```

You must have at least one **describe** and one **it** for Jest to run the tests.

We'll create a test suite to group our shopping basket tests.

```js
// shopping_basket.test.js
describe('shopping basket', () => {
  // our shopping basket tests go here
});
```

If we run this, Jest will tell us that we need to have at least one test in our suite.

```js
// shopping_basket.test.js
describe('shopping basket', () => {
  test('starts with an empty array', () => {
    expect(shoppingBasket.basket.length).toBe(0);
  });
});
```

In this test we're not doing any arranging or acting. Ok, let's arrange, act and assert in the next test.

```js
// shopping_basket.test.js
describe('shopping basket', () => {
  ...

  test('should add the bread product to the basket', () => {
    //ARRANGE
    // No arranging to do

    //ACT
    shoppingBasket.addProduct(products[0]);

    //ASSERT
    expect(shoppingBasket.basket).toEqual([{ productName: "bread", price: 0.89 }]);
  });
});
```

## beforeEach

In order to make sure the basket is emptied before each test let's use a beforeEach in our suite.

```js
// shopping_basket.test.js
beforeEach(() => {
  // Let's make sure the basket is empty
  shoppingBasket.basket = [];
});
```

## TASK

- Test that the basket can add 3 products
- Test that the getTotal method returns the correct amount

## Further Resources

- [Introducing BDD](https://dannorth.net/introducing-bdd/)
- [Jest Docs](https://jestjs.io/docs/en/getting-started.html)
- [Jest Matchers](https://jestjs.io/docs/en/expect)


## Conclusion

We can now write descriptive and well organised unit tests, which will help us to determine whether or not our code is working. Providing that we write good tests they can even ensure that we write better code.

Once our unit tests are in place we can safely refactor without having to worry about breaking anything. If our tests still pass then we know that our code is still working.

Our code will be better and more maintainable as a result of unit testing.

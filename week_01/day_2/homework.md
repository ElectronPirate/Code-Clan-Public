![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# JS Fundamentals Exercises

## Exercise 1

What do the following expressions return? Try to guesstimate the answer before trying it in node.


1.1
```js
7 + 3;
```

1.2
```js
9 % 2
```

1.3
```js
typeof(42);
```

1.4
```js
typeof(2) === typeof(9.24);
```

1.5
```js
42 / 0;
```

1.6
```js
9 / "player1";
```

1.7
```js
NaN === NaN;
```

1.8
```js
typeof(NaN);
```

1.9
```js
typeof parseInt("42");
```

1.10
```js
"Brendan" + " Eich";
```

1.11
```js
var firstName = "Brendan";
var lastName = "Eich";
firstName + " " + lastName;
```

1.12
```js
var phoneNumber = "08798976";
phoneNumber.length;
```

1.13
```js
"Brendan" === "Brendan";
```

1.14 Will the following code log anything out?
```js
var fName;

if(fName) console.log(`First name is ${fName}`);
```

1.15 Will the following code log anything out?
```js
var name = "";

if(name) console.log(`First name is ${name}`);
```

## Exercise 2

Write a program to determine what award a student should get on a test.

If their score is 10, they get a "Distinction"
If their score is 9, they get a "Merit"
If their score is 8, they get a "Pass"
If their score is less than 8 they get a "Fail"

**Directions:** Given a value for "score"....

```js
var score = 10;
```

...log out the award the student should receive.

*TIP:* Use a switch statement


## Exercise 3

Here's an array of objects representing different types of coffee:

```js
var coffees = [
  { type:"Latte", price:2.65 },
  { type:"Cappuccino", price:2.75 },
  { type:"Flat white", price:2.95 },
  { type:"Super-dooper Mocha Deluxe", price:3.79 }
];
```

**Directions:** Loop over the array and print out the following coffee summaries using console.log.

```
Lattes cost £2.65 each
Cappuccinos cost £2.75 each
Flat whites cost £2.95 each
Super-dooper Mocha Deluxes cost £3.79 each
```

## Exercise 4

In the game of naughts and crosses, each cell has a value of 'x', 'o' or null. We can represent the grid as a "2 dimensional" array. That means arrays inside an array. The grid is an array with 3 arrays inside it. The first array represents the top row, the second array represents the middle row and the third array is the bottom row.

**Directions:** Write a series of logical expressions that prints out who
the winner is.

For example if ...

```js
var currentPlayer = 'x';
var grid = [['x','x','x'], ['o', null, 'o'], [null, null, null]];
console.log(grid[0][0]) // prints 'x'
```
...then print "x wins" to the console. If there is no winner, print "No winner".

Only the currentPlayer can be the winner.

*TIP:* Break down the task. What do you need to do first?

*TIP:* Make sure to test your code with different values for the cells and
currentPlayer so that every possible winning combination is covered.

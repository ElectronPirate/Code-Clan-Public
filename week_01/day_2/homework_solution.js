/* Exercise 1

1.1) 10. 7 and 3 are called operands and + is the operator.
1.2) 1. The remainder of 9/2 is 1.
1.3) "number"
1.4) true. 2 is a **number** and 9.24 is a **number**, JavaScript has no floating point number type.
1.5) Infinity. Anything divided by 0 is Infinity in JavaScript.
1.6) NaN. NaN stands for "not a number" and is returned when a mathematical operation cannot produce a numeric result.
1.7) false. Wierdly, NaN is not equal to any other value, including itself.
1.8) "number". NaN is a "number" type.
1.9) "number". parseInt will take a String and turn it into an integer (number).
1.10) "Brendan Eich"
1.11) "Brendan Eich"
1.12) 8. There are 8 characters in the String.
1.13) true. The === operator considers two strings equal if they both have the same length and the same characters in the same order.
1.14) No. "undefined" is falsy.
1.15) No. An empty String is falsy.
*/

// Exercise 2

// Write a program to determine what award a student should get on a test.
//
// If their score is 10, they get a "Distinction"
// If their score is 9, they get a "Merit"
// If their score is 8, they get a "Pass"
// If their score is less than 8 they get a "Fail"

var score = 10;

switch (score) {
 case 10:
   console.log("Distinction");
   break;
 case 9:
   console.error("Merit");
   break;
  case 8:
    console.error("Pass");
    break;
 default:
   console.log("Fail");
}


// Exercise 3

// Loop over the array and print out the following coffee summaries using console.log.

var coffees = [
  { type:"Latte", price:2.65 },
  { type:"Cappuccino", price:2.75 },
  { type:"Flat white", price:2.95 },
  { type:"Super-dooper Mocha Deluxe", price:3.79 }
];

for(coffee of coffees) {
  console.log(`${coffee.type}s cost £${coffee.price} each`);
};

/* Exercise 4

In the game of naughts and crosses, each cell has a value of 'x', 'o' or null. We can represent the grid as a "2 dimensional" array. That means arrays inside an array. The grid is an array with 3 arrays inside it. The first array represents the top row, the second array represents the middle row and the third array is the bottom row.


First step would be to work out what the winning combinations would be:

Winning combinations:
[0,1,2], [3,4,5], [6,7,8]
[0,3,6], [1,4,7], [2,5,8]
[0,4,8], [2,4,6]
*/
var currentPlayer = 'x';
var grid = [['x','x','x'], ['o', null, 'o'], [null, null, null]];

var message = `${currentPlayer} wins`;

if(grid[0][0] === currentPlayer && grid[0][1] == currentPlayer && grid[0][2] == currentPlayer){
    console.log(message);
} else if(grid[1][0] === currentPlayer && grid[1][1] == currentPlayer && grid[1][2] == currentPlayer){
    console.log(message);
} else if(grid[2][0] === currentPlayer && grid[2][1] == currentPlayer && grid[2][2] == currentPlayer){
    console.log(message);
} else if(grid[0][0] === currentPlayer && grid[1][0] == currentPlayer && grid[2][0] == currentPlayer){
    console.log(message);
} else if(grid[0][1] === currentPlayer && grid[1][1] == currentPlayer && grid[2][1] == currentPlayer){
    console.log(message);
} else if(grid[0][2] === currentPlayer && grid[1][2] == currentPlayer && grid[2][2] == currentPlayer){
    console.log(message);
} else if(grid[0][0] === currentPlayer && grid[1][1] == currentPlayer && grid[2][2] == currentPlayer){
    console.log(message);
}  else if(grid[0][2] === currentPlayer && grid[1][1] == currentPlayer && grid[2][0] == currentPlayer){
    console.log(message);
} else {
    console.log("No winner");
}

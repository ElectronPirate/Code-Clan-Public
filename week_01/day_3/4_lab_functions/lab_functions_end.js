// Create the following functions and test them by logging out their return value.

// MVP

var myNumbers = [1,2,3,4,5,6,7,8]

// 1. Total the numbers - Create a function that takes in an array of numbers as an argument and calculates the sum of the array's numbers.

var sumNumbers = (numbers) => {
  var total = 0;
  for (var number of numbers) {
    total += number;
  }
  return total;
}
console.log(sumNumbers(myNumbers));

// 2. Find the evens - Create a function that takes in an array of numbers as an argument and returns a new array containing just the even numbers.

var evens = (numbers) => {
  var evens = []
  for (var number of numbers) {
    if (number % 2 === 0) {
      evens.push(number);
    }
  }
  return evens;
}
console.log(evens(myNumbers));


var myBill = [
  {
    meal: 'Green Curry',
    price: 10,
    customer: 'Sally'
  }, {
    meal: 'Sea Bass',
    price: 12,
    customer: 'Upul'
  }, {
    meal: 'Fish and Chips',
    price: 10,
    customer: 'Rita'
  }, {
    meal: 'Stick Toffee Pudding',
    price: 4,
    customer: 'Upul'
  }, {
    meal: 'Apple Pie',
    price: 5,
    customer: 'Sally'
  }
]

// 3. Total the bill - Create a function that takes in a bill as an argument and calculates the total cost of the bill.

var totalBill = (bill) => {
  var total = 0;
  for (var item of bill) {
    total += item.price;
  }
  return total;
}

console.log(totalBill(myBill));

// 5. Find meals by customer name - Create a function that takes in a bill and a customer name as an argument and returns a new array containing all the items for that customer.

var mealsByCustomer = (bill, customerName) => {
  var foundItems = [];
  for (var item of bill) {
    if (item.customer === customerName) {
      foundItems.push(item);
    }
  }
  return foundItems;
}

console.log(mealsByCustomer(myBill, 'Upul'));
console.log(mealsByCustomer(myBill, 'Sally'));

// 6. Using the functions you wrote in part 4 and 5, find the total that Sally spent.

var sallysMeals = mealsByCustomer(myBill, 'Sally');
var sallysTotalSpend = totalBill(sallysMeals);
console.log(sallysTotalSpend);

// 7. Find average item price - Create a function that takes in bill as an argument and calculates the average price of all the items.

var averageItemPrice = (bill) => {
  var total = totalBill(bill);
  return total / bill.length;
}

console.log(averageItemPrice(myBill));

// Extension

// 8. Have a look at the following bodyBuilder object.

var bodyBuilder = {
  strength: 2,
  workOut: (mins) => {
   bodyBuilder.strength = bodyBuilder.strength * mins;
  },
  lazeAbout: (hours) => {
    bodyBuilder.strength = bodyBuilder.strength / hours;
  }
}

// 8.a. Log out the the bodyBuilder's strength - the value should be 2.

console.log(bodyBuilder.strength);

// 8.b. Use the workOut function to update the bodyBuilder's strenth.

bodyBuilder.workOut(10);
console.log(bodyBuilder.strength);

// 8.c. Create another function on the bodyBuilder called `lazeAbout`, that takes in a number of hours as an argument. Decrease the bodyBuilder's strength by dividing the strength by the number of hours.

bodyBuilder.lazeAbout(2);
console.log(bodyBuilder.strength);

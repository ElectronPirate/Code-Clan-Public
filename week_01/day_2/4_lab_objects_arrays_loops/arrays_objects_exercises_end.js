// Exercise 1

var stops = [ "Croy", "Cumbernauld", "Falkirk High", "Linlithgow", "Livingston", "Haymarket" ]

// Complete these tasks:

// 1. Add `"Edinburgh Waverley"` to the end of the array
stops.pop("Edinburgh Waverley");

// 2. Add `"Glasgow Queen St"` to the start of the array
stops.unshift("Glasgow Queen St");

// 3. Add `"Polmont"` at the appropriate point (between `"Falkirk High"` and `"Linlithgow"`)
stops.splice(4, 0, "Polmont");

// 4. Work out the index position of `"Linlithgow"`
stops.indexOf("Linlithgow");

// 5. Delete `"Cumbernauld"` from the array by index
var index = stops.indexOf("Livingston");
stops.splice(index, 1);

// 6. How many stops there are in the array?
console.log(stops.length);

// 7. How many ways can we return `"Falkirk High"` from the array?
console.log(stops[3]);
console.log(stops.splice(3, 1)[0]);

// 8. Reverse the positions of the stops in the array
var newArray = [];
for (var i = stops.length - 1; i >= 0; i--){
  newArray.push(stops[i]);
}
console.log(newArray);

// 9. Log out all the stops using a for loop
for (var stop of stops){
  console.log(stop);
}
console.log(stops);

//===========================================================================================


// Exercise 2

var unitedKingdom = [
  {
    name: "Scotland",
    population: 5295000,
    capital: "Edinburgh"
  },
  {
    name: "Wales",
    population: 3063000,
    capital: "Swansea"
  },
  {
    name: "England",
    population: 53010000,
    capital: "London"
  }
]

// Complete these tasks:

// 1. Change the capital of Wales from "Swansea" to "Cardiff".
unitedKingdom[1].capital = "Cardiff"

// 2. Create a new object for Northern Ireland and add it to the `unitedKingdom` array (The capital is Belfast, and the population is 1,811,000).
var northernIreland = {
  name: "Northern Ireland",
  population: 1811000,
  capital: "Belfast"
}
unitedKingdom.push(northernIreland)

// 3. Use a loop to print the names of all the countries in the UK.
for (var country of unitedKingdom){
  console.log(country.name);
}

// 4. Use a loop to find the total population of the UK.
var totalPop = 0;
for (var country of unitedKingdom){
  totalPop += country.population
}
console.log(totalPop);
console.log(unitedKingdom);

//===========================================================================================

// Exercise 3

var users = {
  jonathan: {
    twitter: "jonnyt",
    lotteryNumbers: [6, 12, 49, 33, 45, 20],
    homeTown: "Stirling",
    pets: [
    {
      name: "fluffy",
      species: "cat"
    },
    {
      name: "fido",
      species: "dog"
    },
    {
      name: "spike",
      species: "dog"
    }
  ]
  },
  erik: {
    twitter: "eriksf",
    lotteryNumbers: [18, 34, 8, 11, 24],
    homeTown: "Linlithgow",
    pets: [
    {
      name: "nemo",
      species: "fish"
    },
    {
      name: "kevin",
      species: "fish"
    },
    {
      name: "spike",
      species: "dog"
    },
    {
      name: "rupert",
      species: "parrot"
    }
  ]
  },
  avril: {
    twitter: "bridgpally",
    lotteryNumbers: [12, 14, 33, 38, 9, 25],
    homeTown: "Dunbar",
    pets: [
      {
        name: "monty",
        species: "snake"
      }
    ]
  }
}


// Complete these tasks:

// 1. Get Jonathan's Twitter handle (i.e. the string `"jonnyt"`)
console.log(users.jonathan.twitter);

// 2. Get Erik's hometown
console.log(users.erik.homeTown);

// 3. Get the array of Erik's lottery numbers
console.log(users.erik.lotteryNumbers);

// 4. Get the type of Avril's pet Monty
console.log(users.avril.pets[0].species);

// 5. Get the smallest of Erik's lottery numbers
var sortedNumbers = users.erik.lotteryNumbers.sort(function(a,b){return a - b})
console.log(sortedNumbers[0]);

// 6. Return an array of Avril's lottery numbers that are even
var evenNumbers = [];
for (var number of users.avril.lotteryNumbers){
  if (number % 2 === 0){
    evenNumbers.push(number);
  }
}
console.log(evenNumbers);

// 7. Erik is one lottery number short! Add the number `7` to be included in his lottery numbers
users.erik.lotteryNumbers.push(7);
console.log(users.erik.lotteryNumbers);

// 8. Change Erik's hometown to Edinburgh
users.erik.homeTown = "Edinburgh";

// 9. Add a pet dog to Erik called "Fluffy"
users.erik.pets.push(
  {
    name: "fluffy",
    species: "dog"
  })

console.log(users.erik.pets);


// 10. Add another person to the users object
users.katie = {
    twitter: "Keffree",
    lotteryNumbers: [11, 28, 3, 27, 14, 10],
    homeTown: "Manchester",
    pets: [
      {
        name: "misty",
        species: "dog"
      },
      {
        name: "breagha",
        species: "dog"
      }
    ]
  }
console.log(users);

//===========================================================================================

// Exercise 4

var movies = [
  {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    director: 'Frank Capra',
    cast: [
      'James Stewart',
      'Donna Reed'
    ],
    ratings: {
      critic: 94,
      audience: 95
    }
  },
  {
    title: 'Black Panther',
    year: 2018,
    director: 'Ryan Coogler',
    cast: [
      'Chadwick Boseman',
      'Michael B. Jordan'
    ],
    ratings: {
      critic: 97,
      audience: 77
    }
  },
  {
    title: 'Star Wars: The Last Jedi',
    year: 2017,
    director: 'Rian Johnson',
    cast: [
      'Mark Hamill',
      'Carrie Fisher'
    ],
    ratings: {
      critic: 91,
      audience: 48
    }
  },
  {
    title: 'Citizen Kane',
    year: 1941,
    director: 'Orson Welles',
    cast: [
      'Joseph Cotten',
      'Dorothy Comingore'
    ],
    ratings: {
      critic: 100,
      audience: 90
    }
  },
];

// Complete these tasks:

// 1. Loop through the array of movies and make each movie's title all capital letters.
for (var movie of movies){
  movie.title = movie.title.toUpperCase();
}

// 2. Loop through the array and find the movie with the title Citizen Kane. log its year of release.
for (var movie of movies){
  if (movie.title === "CITIZEN KANE"){
    console.log(movie.year);
  }
}

// 3. Using a different kind of loop, iterate through the movies and log each movie's title and audience rating.
for (var i = 0; i < movies.length; i++){
  console.log(`${movies[i].title} ${movies[i].ratings.audience}`);
}

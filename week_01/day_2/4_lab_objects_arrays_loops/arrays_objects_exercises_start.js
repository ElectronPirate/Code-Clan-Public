
// Exercise 1

var stops = [ "Croy", "Cumbernauld", "Falkirk High", "Linlithgow", "Livingston", "Haymarket" ]

// Complete these tasks:

// 1. Add `"Edinburgh Waverley"` to the end of the array
// 2. Add `"Glasgow Queen St"` to the start of the array
// 3. Add `"Polmont"` at the appropriate point (between `"Falkirk High"` and `"Linlithgow"`)
// 4. Work out the index position of `"Linlithgow"`
// 5. Delete `"Cumbernauld"` from the array by index
// 6. How many stops there are in the array?
// 7. How many ways can we return `"Falkirk High"` from the array?
// 8. Reverse the positions of the stops in the array
// 9. Log out all the stops using a for loop


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
// 2. Create an object for Northern Ireland and add it to the `unitedKingdom` array (The capital is Belfast, and the population is 1,811,000).
// 3. Use a loop to print the names of all the countries in the UK.
// 4. Use a loop to find the total population of the UK.


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


Complete these tasks:

// 1. Get Jonathan's Twitter handle (i.e. the string `"jonnyt"`)
// 2. Get Erik's hometown
// 3. Get the array of Erik's lottery numbers
// 4. Get the type of Avril's pet Monty
// 5. Get the smallest of Erik's lottery numbers
// 6. Return an array of Avril's lottery numbers that are even
// 7. Erik is one lottery number short! Add the number `7` to be included in his lottery numbers
// 8. Change Erik's hometown to Edinburgh
// 9. Add a pet dog to Erik called "Fluffy"
// 10. Add another person to the users object


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
// 2. Loop through the array and find the movie with the title Citizen Kane. log its year of release.
// 3. Using a different kind of loop, iterate through the movies and log each movie's title and audience rating.

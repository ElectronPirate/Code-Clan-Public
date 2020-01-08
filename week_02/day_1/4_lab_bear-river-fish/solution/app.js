const Bear = require('./bear');
const River = require('./river');
const Fish = require('./fish');

// 1. Create some fishes
// 2. Add them to a new River
// 3. Create a Bear and get him to roar and eat

const nemo = new Fish('Nemo');
const moby = new Fish('Moby');
const sally = new Fish('Sally');

const amazon = new River('Amazon', [nemo, moby, sally]);

console.log("River:", `The ${amazon.getName()} has ${amazon.getNumberOfFish()} fish in it.`);

const yogi = new Bear('Yogi', 'Grizzly');
console.log(yogi.roar());

yogi.takeFishFromRiver(amazon);
yogi.takeFishFromRiver(amazon);

// Yogi should have 2 fish in his belly
console.log(`${yogi.roar()}. I have ${yogi.foodCount()} fish in my belly`);

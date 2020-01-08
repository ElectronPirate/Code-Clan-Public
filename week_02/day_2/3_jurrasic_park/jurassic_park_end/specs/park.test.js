const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let trex1;
  let trex2;
  let trex3;
  let velociraptor1;
  let velociraptor2;
  let diplodocus;
  let gallimimus;
  let park;

  beforeEach( () => {
    trex1 = new Dinosaur('t-rex', 'carnivore', 50);
    trex2 = new Dinosaur('t-rex', 'carnivore', 40);
    trex3 = new Dinosaur('t-rex', 'carnivore', 60);

    velociraptor1 = new Dinosaur('velociraptor', 'carnivore', 25);
    velociraptor2 = new Dinosaur('velociraptor', 'carnivore', 20);

    diplodocus = new Dinosaur('diplodocus', 'herbivore', 30);
    gallimimus = new Dinosaur('gallimimus', 'omnivore', 4);

    park = new Park('Jurassic Park', 20);
  })

  test('should have a name', () => {
    expect(park.name).toBe('Jurassic Park');
  });

  test('should have a ticket price', () => {
    expect(park.ticketPrice).toBe(20);
  });

  test('should have a collection of dinosaurs', () => {
    expect(park.dinosaurs).toEqual([]);
  });

  test('should be able to add a dinosaur to its collection', () => {
    park.add(trex1);
    expect(park.dinosaurs).toEqual( [trex1] );
  });

  test('should be able to remove a dinosaur from its collection', () => {
    park.add(trex1);
    park.add(velociraptor1);
    park.remove(velociraptor1);
    expect(park.dinosaurs).toEqual( [trex1] );
  });

  test('should be able to find the dinosaur that attracts the most visitors', () => {
    park.add(trex1);
    park.add(trex2);
    park.add(trex3);
    park.add(velociraptor1);
    park.add(diplodocus);
    park.add(gallimimus);
    expect(park.findMostAttractiveDinosaur()).toEqual(trex3);
  });

  test('should be able to find all dinosaurs of a particular species', () => {
    park.add(trex1);
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(diplodocus);
    park.add(gallimimus);
    expect( park.findBySpecies('velociraptor')).toEqual( [velociraptor1, velociraptor2] );
  });

  test('should be able to calculate the total number of visitors per day', () => {
    park.add(trex1);
    park.add(trex2);
    park.add(trex3);
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(diplodocus);
    park.add(gallimimus);
    expect(park.calculateAverageVisitorsPerDay()).toBe(229);
  });

  test('should be able to calculate the total number of visitors per year', () => {
    park.add(trex1);
    park.add(trex2);
    park.add(trex3);
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(diplodocus);
    park.add(gallimimus);
    expect(park.calculateAverageVisitorsPerYear()).toBe(83585);
  });

  test('should be able to calculate total revenue for one year', () => {
    park.add(trex1);
    park.add(trex2);
    park.add(trex3);
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(diplodocus);
    park.add(gallimimus);
    expect(park.calculateAverageYearlyRevenue()).toBe(1671700);
  });

  test('should be able to remove all dinosaurs of a particular species', () => {
    park.add(trex1);
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(diplodocus);
    park.add(gallimimus);
    park.removeBySpecies('velociraptor');
    expect(park.dinosaurs).toEqual( [trex1, diplodocus, gallimimus] );
  });

  test('should be able to calculate number of dinosaurs for each diet type', () => {
    park.add(trex1);
    park.add(trex2);
    park.add(trex3);
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(diplodocus);
    park.add(gallimimus);
    expect(park.numberOfDinosaursByDiet()).toEqual({ carnivore: 5, herbivore: 1, omnivore: 1 });
  });

});

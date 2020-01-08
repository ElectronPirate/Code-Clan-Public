const Person = require('../person');

describe('Person', () => {

  let person;

  beforeEach(()=>{
    person = new Person("Beth", 25);
  });

  test('has the right name', () => {
    expect(person.name).toBe("Beth");
  });

  test('has the right age', () => {
    expect(person.age).toBe(25);
  });

});

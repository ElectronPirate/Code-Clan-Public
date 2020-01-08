const Film = require('../film.js');

describe('Film', () => {

  let moonlight;

  beforeEach( () => {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
  });

  test('should have a title', () => {
    expect(moonlight.title).toBe('Moonlight');
  });

  test('should have a genre', () => {
    const actual = moonlight.genre;
    expect(moonlight.genre).toBe('drama');
  });

  test('should have a year', () => {
    expect(moonlight.year).toBe(2016);
  });

  test('should have a length', () => {
    expect(moonlight.length).toBe(111);
  });

});

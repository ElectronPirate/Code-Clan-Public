const Cinema = require('../cinema.js');
const Film = require('../film.js');

describe('Cinema', () => {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(() => {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  test('should have a collection of films', () => {
    expect(cinema.films).toEqual([moonlight, bladeRunner, dunkirk, blackPanther, trainspotting]);
  });

  test('should be able to get a list of film titles', () => {
    const actual = cinema.filmTitles();
    const expected = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting'];
    expect(actual).toEqual(expected);
  });

  test('should be able to find a film by title', () => {
    expect(cinema.filmByTitle('Dunkirk')).toEqual(dunkirk);
  });

  test('should be able to filter films by genre', () => {
    const actual = cinema.filmsByGenre('drama');
    // Extension:
    // const actual = cinema.filmsByProperty('genre', `drama`);
    const expected = [moonlight, trainspotting];
    expect(actual).toEqual(expected);
  });

  test('should return true if there are some films from a particular year', () => {
    expect(cinema.hasFilmsFromYear(2018)).toBe(true);
  });

  test('should return false if there there are no films from a particular year', () => {
    expect(cinema.hasFilmsFromYear(2000)).toBe(false);
  });

  test('should return true if every film is over a particular length', () => {
    expect(cinema.areAllFilmsOfMinLength(60)).toBe(true);
  });

  test('should be able to calculate total running time of all films', () => {
    expect(cinema.totalRunningTime()).toBe(622);
  });

  //  Extension:

  test('should be able to filter films by year', () => {
    const actual = cinema.filmsByProperty('year', 2017);
    const expected = [bladeRunner, dunkirk, trainspotting];
    expect(actual).toEqual(expected);
  });

});

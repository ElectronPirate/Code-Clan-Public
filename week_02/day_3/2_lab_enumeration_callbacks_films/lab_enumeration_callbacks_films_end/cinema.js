class Cinema{

  constructor(films) {
    this.films = films;
  };

  filmTitles() {
    return this.films.map((film) => {
      return film.title;
    });
  };

  filmByTitle(title) {
    return this.films.find((film) => {
      return film.title === title;
    });
  };

  filmsByGenre(genre) {
    return this.films.filter((film) => {
      return film.genre === genre;
    });
  };

  hasFilmsFromYear(year) {
    return this.films.some((film) => {
      return film.year === year;
    });
  };

  areAllFilmsOfMinLength(length) {
    return this.films.every((film) => {
      return film.length >= length;
    });
  };

  totalRunningTime() {
    return this.films.reduce((total, film) => {
      return total += film.length;
    }, 0);
  };

  // Extension:

  filmsByProperty(property, value) {
    return this.films.filter((film) => {
      return film[property] === value;
    });
  };

}

module.exports = Cinema;

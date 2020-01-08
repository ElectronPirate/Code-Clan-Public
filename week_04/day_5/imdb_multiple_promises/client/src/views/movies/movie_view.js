const PubSub = require("../../helpers/pub_sub.js");

class MovieView {
  constructor(container) {
    this.container = container;
  }

  render(movie) {
    const movieContainer = document.createElement("div");
    movieContainer.id = "movie";
    movieContainer.classList.add("card");

    const containerContent = document.createElement("div");
    containerContent.classList.add("content");

    const title = this.createHeading(movie.title);
    containerContent.appendChild(title);

    const genreText = `Genre: ${movie.genre}`;
    const genre = this.createDetail(genreText);
    containerContent.appendChild(genre);

    const budgetText = `Budget: £${movie.budget}`;
    const budget = this.createDetail(budgetText);
    containerContent.appendChild(budget);

    const cast = this.createCastListing(movie.cast);
    containerContent.appendChild(cast);

    const deleteButton = this.createDeleteButton(movie.id);
    containerContent.appendChild(deleteButton);

    const editButton = this.createEditButton(movie.id);
    containerContent.appendChild(editButton);

    movieContainer.appendChild(containerContent);
    this.container.appendChild(movieContainer);
  }

  createHeading(textContent) {
    const heading = document.createElement("div");
    heading.classList.add("header");
    heading.textContent = textContent;
    return heading;
  }

  createDetail(textContent) {
    const detail = document.createElement("p");
    detail.classList.add("meta");
    detail.textContent = textContent;
    return detail;
  }

  createCastListing(cast = []) {
    const detail = document.createElement("div");
    detail.classList.add("ui", "celled", "ordered", "list");

    //loop
    for (let star of cast) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.textContent = `${star.first_name} ${star.last_name}`;
      detail.appendChild(item);
    }

    return detail;
  }

  createEditButton(movieId) {
    const button = document.createElement("button");
    button.classList.add("positive");
    button.classList.add("ui");
    button.classList.add("button");
    button.value = movieId;
    button.innerHTML = "Edit";

    button.addEventListener("click", evt => {
      console.log("Edit button clicked");
    });

    return button;
  }

  createDeleteButton(movieId) {
    const button = document.createElement("button");
    button.classList.add("negative");
    button.classList.add("ui");
    button.classList.add("button");
    button.value = movieId;
    button.innerHTML = "Delete";

    button.addEventListener("click", evt => {
      PubSub.publish("MovieView:movie-delete-clicked", evt.target.value);
    });

    return button;
  }
}

module.exports = MovieView;

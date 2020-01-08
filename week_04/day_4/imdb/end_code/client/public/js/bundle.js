/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovieFormView = __webpack_require__(/*! ./views/movies/movie_form_view.js */ \"./src/views/movies/movie_form_view.js\");\nconst MoviesGridView = __webpack_require__(/*! ./views/movies/movies_grid_view.js */ \"./src/views/movies/movies_grid_view.js\");\nconst Movies = __webpack_require__(/*! ./models/movies.js */ \"./src/models/movies.js\");\n\nconst StarFormView = __webpack_require__(/*! ./views/stars/star_form_view.js */ \"./src/views/stars/star_form_view.js\");\nconst StarsGridView = __webpack_require__(/*! ./views/stars/stars_grid_view.js */ \"./src/views/stars/stars_grid_view.js\");\nconst Stars = __webpack_require__(/*! ./models/stars.js */ \"./src/models/stars.js\");\n\nconst MainNav = __webpack_require__(/*! ./views/main_nav.js */ \"./src/views/main_nav.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  // MAIN NAV\n  const mainNav = document.querySelector('#main-nav');\n  const mainNavView = new MainNav(mainNav);\n  mainNavView.bindEvents();\n\n  // STARS\n  const starsForm = document.querySelector('#stars-form');\n  const starsFormView = new StarFormView(starsForm);\n  starsFormView.bindEvents();\n\n  const starsContainer = document.querySelector('#stars-container');\n  starsContainer.style.display = \"none\";\n\n  const starsGridView = new StarsGridView(document.querySelector('div#stars'));\n  starsGridView.bindEvents();\n\n  const stars = new Stars();\n  stars.bindEvents();\n  stars.getData();\n\n  // MOVIES\n  const moviesForm = document.querySelector('#movies-form');\n  const moviesFormView = new MovieFormView(moviesForm);\n  moviesFormView.bindEvents();\n\n  const moviesContainer = document.querySelector('div#movies');\n  const moviesGridView = new MoviesGridView(moviesContainer);\n  moviesGridView.bindEvents();\n\n  const movies = new Movies();\n  movies.bindEvents();\n  movies.getData();\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class RequestHelper{\n\n  constructor (url) {\n    this.url = url;\n  }\n\n  get() {\n    return fetch(this.url)\n      .then((response) => response.json());\n  }\n\n  post(payload) {\n    return fetch(this.url, {\n      method: 'POST',\n      body: JSON.stringify(payload),\n      headers: { 'Content-Type': 'application/json' }\n    })\n      .then((response) => response.json());\n  }\n\n  delete(id) {\n    return fetch(`${this.url}/${id}`, {\n      method: 'DELETE'\n    })\n      .then((response) => response.json());\n  }\n\n}\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/movies.js":
/*!******************************!*\
  !*** ./src/models/movies.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nclass Movies {\n  constructor() {\n    this.url = \"http://localhost:3000/api/movies\";\n    this.request = new RequestHelper(this.url);\n  }\n\n  bindEvents() {\n    PubSub.subscribe(\"MovieView:movie-delete-clicked\", evt => {\n      this.deleteMovie(evt.detail);\n    });\n\n    PubSub.subscribe(\"MovieView:movie-submitted\", evt => {\n      this.postMovie(evt.detail);\n    });\n  }\n\n  getData() {\n    this.request\n      .get()\n      .then(movies => {\n        PubSub.publish(\"Movies:data-loaded\", movies);\n      })\n      .catch(console.error);\n  }\n\n  postMovie(movie) {\n    this.request\n      .post(movie)\n      .then(movies => {\n        this.request.get().then(movies => {\n          PubSub.publish(\"Movies:data-loaded\", movies);\n        });\n      })\n      .catch(console.error);\n  }\n\n  deleteMovie(movieId) {\n    this.request\n      .delete(movieId)\n      .then(movies => {\n        this.request.get().then(movies => {\n          PubSub.publish(\"Movies:data-loaded\", movies);\n        });\n      })\n      .catch(console.error);\n  }\n}\n\nmodule.exports = Movies;\n\n\n//# sourceURL=webpack:///./src/models/movies.js?");

/***/ }),

/***/ "./src/models/stars.js":
/*!*****************************!*\
  !*** ./src/models/stars.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nclass Stars{\n  constructor(){\n    this.url = 'http://localhost:3000/api/stars';\n    this.request = new RequestHelper(this.url);\n  }\n\n  getData() {\n    this.request.get()\n      .then((movies) => {\n        PubSub.publish('Stars:data-loaded', movies);\n      })\n      .catch(console.error);\n  }\n\n  bindEvents() {\n    PubSub.subscribe('StarForm:star-submitted', (evt) => {\n      this.postStar(evt.detail);\n    })\n  }\n\n  postStar(star) {\n    this.request.post(star)\n      .then((stars) => {\n        PubSub.publish('Stars:data-loaded', stars);\n      })\n      .catch(console.error);\n  }\n\n}\n\nmodule.exports = Stars;\n\n\n//# sourceURL=webpack:///./src/models/stars.js?");

/***/ }),

/***/ "./src/views/main_nav.js":
/*!*******************************!*\
  !*** ./src/views/main_nav.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MainNav{\n\n  constructor(navContainer){\n    this.navContainer = navContainer;\n  }\n\n  bindEvents(){\n    // Loop round all the links in the nav and attach bevaiour\n    const links = this.navContainer.querySelectorAll(\"a\");\n    for (let i = 0; i < links.length; i++) {\n      links[i].addEventListener('click', (evt) => {\n        // set all others to none\n        this.hideAll(links);\n        document.getElementById(evt.target.dataset.container).style.display = 'block';\n        evt.target.classList.add('active');\n      });\n    }\n  }\n\n  hideAll(links){\n    for(let link of links) {\n      document.getElementById(link.dataset.container).style.display = 'none';\n      link.classList.remove('active');\n    }\n  }\n\n}\n\nmodule.exports = MainNav;\n\n\n//# sourceURL=webpack:///./src/views/main_nav.js?");

/***/ }),

/***/ "./src/views/movies/movie_form_view.js":
/*!*********************************************!*\
  !*** ./src/views/movies/movie_form_view.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nclass MovieFormView{\n\n  constructor(form) {\n    this.form = form;\n  }\n\n  bindEvents() {\n    this.form.addEventListener('submit', (evt) => {\n      this.handleSubmit(evt);\n    });\n  }\n\n  handleSubmit(evt) {\n    evt.preventDefault();\n    const newMovie = this.createMovie(evt.target);\n    PubSub.publish('MovieView:movie-submitted', newMovie);\n    evt.target.reset();\n  }\n\n  createMovie(form) {\n    const newMovie = {\n      title: form.title.value,\n      genre: form.genre.value,\n      budget: form.budget.value\n    };\n\n    return newMovie;\n  }\n\n}\n\nmodule.exports = MovieFormView;\n\n\n//# sourceURL=webpack:///./src/views/movies/movie_form_view.js?");

/***/ }),

/***/ "./src/views/movies/movie_view.js":
/*!****************************************!*\
  !*** ./src/views/movies/movie_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nclass MovieView {\n  constructor(container) {\n    this.container = container;\n  }\n\n  render(movie) {\n    const movieContainer = document.createElement(\"div\");\n    movieContainer.id = \"movie\";\n    movieContainer.classList.add(\"card\");\n\n    const containerContent = document.createElement(\"div\");\n    containerContent.classList.add(\"content\");\n\n    const title = this.createHeading(movie.title);\n    containerContent.appendChild(title);\n\n    const genreText = `Genre: ${movie.genre}`;\n    const genre = this.createDetail(genreText);\n    containerContent.appendChild(genre);\n\n    const budgetText = `Budget: £${movie.budget}`;\n    const budget = this.createDetail(budgetText);\n    containerContent.appendChild(budget);\n\n    const cast = this.createCastListing(movie.cast);\n    containerContent.appendChild(cast);\n\n    const deleteButton = this.createDeleteButton(movie.id);\n    containerContent.appendChild(deleteButton);\n\n    const editButton = this.createEditButton(movie.id);\n    containerContent.appendChild(editButton);\n\n    movieContainer.appendChild(containerContent);\n    this.container.appendChild(movieContainer);\n  }\n\n  createHeading(textContent) {\n    const heading = document.createElement(\"div\");\n    heading.classList.add(\"header\");\n    heading.textContent = textContent;\n    return heading;\n  }\n\n  createDetail(textContent) {\n    const detail = document.createElement(\"p\");\n    detail.classList.add(\"meta\");\n    detail.textContent = textContent;\n    return detail;\n  }\n\n  createCastListing(cast = []) {\n    const detail = document.createElement(\"div\");\n    detail.classList.add(\"ui\", \"celled\", \"ordered\", \"list\");\n\n    //loop\n    for (let star of cast) {\n      const item = document.createElement(\"div\");\n      item.classList.add(\"item\");\n      item.textContent = `${star.first_name} ${star.last_name}`;\n      detail.appendChild(item);\n    }\n\n    return detail;\n  }\n\n  createEditButton(movieId) {\n    const button = document.createElement(\"button\");\n    button.classList.add(\"positive\");\n    button.classList.add(\"ui\");\n    button.classList.add(\"button\");\n    button.value = movieId;\n    button.innerHTML = \"Edit\";\n\n    button.addEventListener(\"click\", evt => {\n      console.log(\"Edit button clicked\");\n    });\n\n    return button;\n  }\n\n  createDeleteButton(movieId) {\n    const button = document.createElement(\"button\");\n    button.classList.add(\"negative\");\n    button.classList.add(\"ui\");\n    button.classList.add(\"button\");\n    button.value = movieId;\n    button.innerHTML = \"Delete\";\n\n    button.addEventListener(\"click\", evt => {\n      PubSub.publish(\"MovieView:movie-delete-clicked\", evt.target.value);\n    });\n\n    return button;\n  }\n}\n\nmodule.exports = MovieView;\n\n\n//# sourceURL=webpack:///./src/views/movies/movie_view.js?");

/***/ }),

/***/ "./src/views/movies/movies_grid_view.js":
/*!**********************************************!*\
  !*** ./src/views/movies/movies_grid_view.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst MovieView = __webpack_require__(/*! ./movie_view.js */ \"./src/views/movies/movie_view.js\");\n\nclass MoviesGridView{\n\n  constructor(container) {\n    this.container = container;\n  }\n\n  bindEvents() {\n    PubSub.subscribe('Movies:data-loaded', (evt) => {\n      this.render(evt.detail);\n    });\n  }\n\n  render(movies) {\n    this.container.innerHTML = '';\n    const movieView = new MovieView(this.container);\n    movies.forEach((movie) => movieView.render(movie));\n  }\n\n}\n\nmodule.exports = MoviesGridView;\n\n\n//# sourceURL=webpack:///./src/views/movies/movies_grid_view.js?");

/***/ }),

/***/ "./src/views/stars/star_form_view.js":
/*!*******************************************!*\
  !*** ./src/views/stars/star_form_view.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nclass StarFormView{\n\n  constructor(form) {\n    this.form = form;\n  }\n\n  bindEvents() {\n    this.form.addEventListener('submit', (evt) => {\n      this.handleSubmit(evt);\n    });\n  }\n\n  handleSubmit(evt) {\n    evt.preventDefault();\n    const newStar = this.createStar(evt.target);\n    PubSub.publish('StarForm:star-submitted', newStar);\n    evt.target.reset();\n  }\n\n  createStar(form) {\n    const newStar = {\n      first_name: form.fname.value,\n      last_name: form.lname.value\n    };\n\n    return newStar;\n  }\n\n}\n\nmodule.exports = StarFormView;\n\n\n//# sourceURL=webpack:///./src/views/stars/star_form_view.js?");

/***/ }),

/***/ "./src/views/stars/star_view.js":
/*!**************************************!*\
  !*** ./src/views/stars/star_view.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nclass StarView{\n\n  constructor(container) {\n    this.container = container;\n  }\n\n  render(star){\n    const header = document.createElement('div');\n    header.classList.add('header');\n    header.textContent = `${star.first_name} ${star.last_name}`;\n\n    const content = document.createElement('div');\n    content.classList.add('content');\n\n    const starItem = document.createElement('div');\n    starItem.classList.add('item');\n    starItem.innerHTML = '<img class=\"ui avatar image\" src=\"/images/star.jpg\" />';\n\n    content.appendChild(header);\n    starItem.appendChild(content)\n\n    this.container.appendChild(starItem);\n  }\n\n}\n\nmodule.exports = StarView;\n\n\n//# sourceURL=webpack:///./src/views/stars/star_view.js?");

/***/ }),

/***/ "./src/views/stars/stars_grid_view.js":
/*!********************************************!*\
  !*** ./src/views/stars/stars_grid_view.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst StarView = __webpack_require__(/*! ./star_view.js */ \"./src/views/stars/star_view.js\");\n\nclass StarsGridView{\n\n  constructor(container) {\n    this.container = container;\n  }\n\n  bindEvents() {\n    PubSub.subscribe('Stars:data-loaded', (evt) => {\n      this.render(evt.detail);\n    });\n  }\n\n  render(stars) {\n    this.container.innerHTML = '';\n    const starView = new StarView(this.container);\n    stars.forEach((star) => starView.render(star));\n  }\n\n}\n\nmodule.exports = StarsGridView;\n\n\n//# sourceURL=webpack:///./src/views/stars/stars_grid_view.js?");

/***/ })

/******/ });
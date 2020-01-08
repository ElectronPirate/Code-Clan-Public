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

eval("const CalculatorView = __webpack_require__(/*! ./views/calculator_view.js */ \"./src/views/calculator_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const calculatorView = new CalculatorView(document.querySelector('#calculator-form'), document.querySelector('#result'));\n  calculatorView.bindEvents();\n});\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

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

/***/ "./src/views/calculator_view.js":
/*!**************************************!*\
  !*** ./src/views/calculator_view.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper */ \"./src/helpers/request_helper.js\");\n\nclass CalculatorView {\n  \n  constructor(form, resultElement){\n    this.form = form;\n    this.request = new RequestHelper('http://localhost:3000/api/results/compound');\n    this.result = resultElement;\n  }\n\n  bindEvents(){\n    this.form.addEventListener('submit', (evt) => {\n      this.handleSubmit(evt);\n    });\n\n    PubSub.subscribe('Calculator:result-loaded', (evt) => {\n      this.render(evt.detail);\n    });\n  }\n\n  handleSubmit(evt){\n    evt.preventDefault();\n    const options = this.createOptions(evt.target);\n    this.request.post(options)\n      .then((result) => {\n        PubSub.publish('Calculator:result-loaded', result);\n      })\n      .catch(console.error);\n  }\n\n  createOptions(form){\n    return {\n      baseAmount: Number(form.baseAmount.value),\n      annualInterest: Number(form.annualInterest.value),\n      calculationPeriod: Number(form.calculationPeriod.value)\n    };\n  }\n\n  render(result){\n   this.result.textContent = new Intl.NumberFormat('us-ENG', { style: 'currency', currency: 'USD' }).format(result);\n  }\n\n}\n\nmodule.exports = CalculatorView;\n\n//# sourceURL=webpack:///./src/views/calculator_view.js?");

/***/ })

/******/ });
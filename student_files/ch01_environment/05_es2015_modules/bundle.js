/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _module = __webpack_require__(1);

	__webpack_require__(2);

	console.log(_module.person.name);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getPerson = getPerson;
	var person = exports.person = { name: 'Ingrid Freeman' };

	function getPerson() {
	    return person.name;
	}

	exports.default = {
	    name: 'Jim Mayfield'
	};


	var morePeople = ['Terry Fields', 'Jonathan Angle', 'Rick Meyers'],
	    stillMorePeople = ['Anna Thompson', 'Edward Burns', 'Frank Ashwood'];

	exports.morePeople = morePeople;
	exports.stillMorePeople = stillMorePeople;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _module = __webpack_require__(1);

	var personMod = _interopRequireWildcard(_module);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	console.log(_module.person.name);
	console.log((0, _module.getPerson)());
	console.log(_module.person.name);
	console.log(personMod.morePeople[0]);
	console.log(personMod.default.name);

	_module.person.name = 'William Sizemore';

/***/ })
/******/ ]);
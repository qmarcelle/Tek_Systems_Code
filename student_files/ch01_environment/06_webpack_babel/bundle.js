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

	var _contacts = __webpack_require__(1);

	document.querySelector('title').innerHTML = _contacts.title;
	document.querySelector('#root h1').innerHTML = _contacts.title;
	var root = document.querySelector('#root');

	_contacts.contacts.forEach(function (contact) {
	    var newNode = document.createElement('h4');
	    newNode.innerHTML = contact.name;
	    root.appendChild(newNode);
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var contacts = [{ "contactid": 500, "name": "Red Victors", "address": "4517 Elm St. Riverside NJ 08075" }, { "contactid": 501, "name": "Bob Green", "address": "2101 Eucalyptus Ave. Philadelphia PA 09119" }, { "contactid": 502, "name": "John Brown", "address": "331 Birch Cir. Black Hills SD 82101" }, { "contactid": 503, "name": "Tina O. Range", "address": "82 Pine Dr. Lakewood CA 90713" }, { "contactid": 504, "name": "Berry Blumenthal", "address": "3012 Mahogany Ln. Denver CO 80101" }, { "contactid": 505, "name": "Jim Pinkado", "address": "2113 Redwood Blvd. Long Beach CA 90314" }, { "contactid": 506, "name": "Alicia Grey", "address": "415 Poplar Ct. St. Louis MO 72210" }, { "contactid": 507, "name": "Violet Waters", "address": "821 Ash Way Seattle WA 92230" }, { "contactid": 508, "name": "Sandy White", "address": "906 Hickory Rd. Phoenix, AZ 83010" }, { "contactid": 509, "name": "Kay Black", "address": "1241 Maple Pl. Plano TX 72110" }];

	var title = 'Contacts Application';

	exports.contacts = contacts;
	exports.title = title;

/***/ })
/******/ ]);
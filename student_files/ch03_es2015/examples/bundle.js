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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('------------------------');
console.log('------01_classes.js-----');
//-----------------------------------
//  Constructor / Prototype Version

function Person0(name, age) {
    this.name = name;
    this.age = age;
}

Person0.prototype = {
    sayName: function sayName() {
        return this.name;
    },

    getAgeInDays: function getAgeInDays() {
        var age = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var ageInDays = 365 * (this.age || age);
        console.log('Age in days: ' + ageInDays);
    }
};

var p0 = new Person0('Teresa', 'Miller');

//--------------------------------

var Person = function Person() {
    _classCallCheck(this, Person);
};

var p = new Person();

//-----------------------------------------------------------------------------
// Providing a constructor
//

var Person2 = function Person2(name, age) {
    _classCallCheck(this, Person2);

    this.name = name;
    this.age = age;
};

var p2 = new Person2('Sally', 41);

//-----------------------------------------------------------------------------
// Adding Methods and viewing the prototype
//

var Person3 = function () {
    function Person3(name, age) {
        _classCallCheck(this, Person3);

        this.name = name;
        this.age = age;
    }

    _createClass(Person3, [{
        key: 'sayName',
        value: function sayName() {
            return this.name;
        }
    }, {
        key: 'getAgeInDays',
        value: function getAgeInDays() {
            var age = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            var ageInDays = 365 * (this.age || age);
            console.log('Age in days: ' + ageInDays);
        }
    }]);

    return Person3;
}();

var p3 = new Person3('Jennifer', 28);
console.log(p3.sayName());
p3.getAgeInDays();
Person3.prototype.getAgeInDays(50);

//--------------------------------------------------------------
// Extension - super must be called in order to use the this ref
//

var Worker = function (_Person) {
    _inherits(Worker, _Person);

    function Worker(name, age, company) {
        _classCallCheck(this, Worker);

        var _this = _possibleConstructorReturn(this, (Worker.__proto__ || Object.getPrototypeOf(Worker)).call(this, name, age));

        _this.company = company;
        return _this;
    }

    return Worker;
}(Person);

var w4 = new Worker('Bob', 37, 'Google');
console.log(w4.company);

//--------------------------------------------------------------
// Overriding Methods
//

var Worker2 = function (_Person2) {
    _inherits(Worker2, _Person2);

    function Worker2(name, age, company) {
        _classCallCheck(this, Worker2);

        var _this2 = _possibleConstructorReturn(this, (Worker2.__proto__ || Object.getPrototypeOf(Worker2)).call(this, name, age));

        _this2.company = company;
        return _this2;
    }

    _createClass(Worker2, [{
        key: 'sayName',
        value: function sayName() {
            return 'Worker: ' + _get(Worker2.prototype.__proto__ || Object.getPrototypeOf(Worker2.prototype), 'sayName', this).call(this);
        }
    }]);

    return Worker2;
}(Person3);

var w5 = new Worker2('Bob', 37, 'Google');
console.log(w5.sayName());

//---------------------------------------------------------------
// Static Methods and Class Variables
//

var RaceCar = function () {
    function RaceCar() {
        _classCallCheck(this, RaceCar);
    }

    _createClass(RaceCar, null, [{
        key: 'getMaxSpeed',
        value: function getMaxSpeed() {
            return RaceCar.maxSpeed;
        }
    }]);

    return RaceCar;
}();

RaceCar.maxSpeed = 300;

var IndyCar = function (_RaceCar) {
    _inherits(IndyCar, _RaceCar);

    function IndyCar() {
        _classCallCheck(this, IndyCar);

        return _possibleConstructorReturn(this, (IndyCar.__proto__ || Object.getPrototypeOf(IndyCar)).apply(this, arguments));
    }

    _createClass(IndyCar, [{
        key: 'getSpeed',
        value: function getSpeed() {
            console.log(RaceCar.maxSpeed);
            console.log(IndyCar.maxSpeed);
            console.log(this.constructor.maxSpeed);
            console.log(this.maxSpeed); // this is undefined, maxSpeed is not on the prototype
        }
    }]);

    return IndyCar;
}(RaceCar);

var car = new IndyCar();
console.log(car.constructor.maxSpeed);
console.log(RaceCar.getMaxSpeed());
car.getSpeed();

//---------------------------------------------------------------
// Extending Built-in Types
//

var FillArray = function (_Array) {
    _inherits(FillArray, _Array);

    function FillArray(size, value) {
        _classCallCheck(this, FillArray);

        var _this4 = _possibleConstructorReturn(this, (FillArray.__proto__ || Object.getPrototypeOf(FillArray)).call(this, size));

        _this4.fill(value);return _this4;
    }

    return FillArray;
}(Array);

var arr = new FillArray(3, 7);
console.log(arr);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('------------------------');
console.log('------02_for_of.js------');

var gear = [{ name: 'snorkel', cost: 14.99, use: 'breathing' }, { name: 'boots', cost: 49.99, use: 'walking' }, { name: 'bicycle', cost: 249.99, use: 'recreation' }];

for (var i = 0, len = gear.length; i < len; i++) {
    var item = gear[i];
    for (var prop in item) {
        console.log('Property: ' + prop + ', Value:' + item[prop]);
    }
}

gear.forEach(function (item, idx, array) {
    console.log(item.name);
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = gear[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _item = _step.value;

        console.log(_item.name + ' ' + _item.cost);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('----------------------------');
console.log('------03_shorthands.js------');

function createCustomer(name, address) {
    return {
        name: name,
        address: address,
        getName: function getName() {
            return this.name;
        }
    };
}

var cust = createCustomer('Bob', '123 Main St.');
console.log(cust.address);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('----------------------------');
console.log('------04_templates.js------');

var name = 'Rob';

console.log('Welcome ' + name + '.');
console.log('Welcome\x0B\x0B\n\n\n    ' + name + '.');

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('-----------------------------');
console.log('-----05_default_args.js------');

function myFunc(foo) {
    var bar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    console.log(myFunc.name);
    callback(foo, bar);
}

myFunc(50, 20, function (a, b) {
    console.log(a, b);
});
myFunc(50);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('----------------------------');
console.log('---------06_let.js----------');

function someFunction() {
    if (true) {
        var foo = 'afternoon';
        console.log(foo);
    }

    // console.log(foo);			// foo is not defined here
}
someFunction();

function otherFunc() {
    for (var i = 0, len = 10; i < len; i++) {
        console.log(i);
    }
    // console.log(i);				// i is not defined here
}
otherFunc();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('----------------------------');
console.log('------07_rest_args.js-------');

function add(a, b) {
    var total = 0,
        moreTotal = 0;

    for (var _len = arguments.length, more = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        more[_key - 2] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = more[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var num = _step.value;

            moreTotal += num;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    total = a + b + moreTotal;

    return total;
}

console.log(add(5, 7, 3, 2, 1));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

console.log('----------------------------');
console.log('--------08_spread.js--------');

function add(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(add.apply(undefined, [5, 7].concat([3, 2, 1])));

console.log('----------------------------');
console.log('--------08_spread.js - spread object--------');

var defaultStyle = {
    fontSize: '16px',
    color: 'black',
    backgroundColor: '#fff9df'
};

var objStyle = _extends({
    fontSize: '20px'
}, defaultStyle, {
    backgroundColor: '#d3ff35'
});

console.log(objStyle);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('-------------------------------');
console.log('------09_destructured.js-------');

function add(a, b, _ref) {
    var c = _ref.c,
        d = _ref.d,
        e = _ref.e;

    return a + b + c + d + e;
}

var obj = { c: 3, d: 2, e: 1 };
var result = add(5, 7, obj);
console.log(result);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('-------------------------------');
console.log('------10_arrow_funcs.js--------');

var add = function add(a, b) {
    return a + b;
};
console.log(add(5, 10));

var noop = function noop() {};
noop();

var multline = function multline(msg) {
    msg = 'Msg: ' + msg;
    return msg;
};
console.log(multline('hello'));

var createLiteral = function createLiteral(arg1, arg2) {
    return { a: arg1, b: arg2 };
};
console.log(createLiteral(10, 20));

var multiArgs = function multiArgs() {
    for (var _len = arguments.length, more = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        more[_key - 2] = arguments[_key];
    }

    var _console;

    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    (_console = console).log.apply(_console, [a, b].concat(more));
};
multiArgs(100, 200, 300, 400);

var sampleArrow = function sampleArrow(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

    console.log(undefined); // this is undefined
};
sampleArrow(10);

// arrow functions called via call() or apply() ignore the first argument
var getValue = function getValue(a) {
    console.log(undefined); // this is undefined
    return a;
};
console.log(getValue.call({}, 20)); // displays 20

var myObj = {
    value: 10,
    someFunc: function someFunc() {
        var _this = this;

        console.log('someFunc: ' + this.value); // 10
        var someArrow = function someArrow() {
            return console.log('inArrow: ' + _this.value);
        }; // 10
        someArrow();
    }
};

myObj.someFunc();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWQ1ZGRlMzI4YzVmZmFlZDY5M2EiLCJ3ZWJwYWNrOi8vLy4vMDFfY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi8wMl9mb3Jfb2YuanMiLCJ3ZWJwYWNrOi8vLy4vMDNfc2hvcnRoYW5kcy5qcyIsIndlYnBhY2s6Ly8vLi8wNF90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vMDVfZGVmYXVsdF9hcmdzLmpzIiwid2VicGFjazovLy8uLzA2X2xldC5qcyIsIndlYnBhY2s6Ly8vLi8wN19yZXN0X2FyZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vMDhfc3ByZWFkLmpzIiwid2VicGFjazovLy8uLzA5X2Rlc3RydWN0dXJlZF9hcmdzLmpzIiwid2VicGFjazovLy8uLzEwX2Fycm93X2Z1bmNzLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJQZXJzb24wIiwibmFtZSIsImFnZSIsInByb3RvdHlwZSIsInNheU5hbWUiLCJnZXRBZ2VJbkRheXMiLCJhZ2VJbkRheXMiLCJwMCIsIlBlcnNvbiIsInAiLCJQZXJzb24yIiwicDIiLCJQZXJzb24zIiwicDMiLCJXb3JrZXIiLCJjb21wYW55IiwidzQiLCJXb3JrZXIyIiwidzUiLCJSYWNlQ2FyIiwibWF4U3BlZWQiLCJJbmR5Q2FyIiwiY29uc3RydWN0b3IiLCJjYXIiLCJnZXRNYXhTcGVlZCIsImdldFNwZWVkIiwiRmlsbEFycmF5Iiwic2l6ZSIsInZhbHVlIiwiZmlsbCIsIkFycmF5IiwiYXJyIiwiZ2VhciIsImNvc3QiLCJ1c2UiLCJpIiwibGVuIiwibGVuZ3RoIiwiaXRlbSIsInByb3AiLCJmb3JFYWNoIiwiaWR4IiwiYXJyYXkiLCJjcmVhdGVDdXN0b21lciIsImFkZHJlc3MiLCJnZXROYW1lIiwiY3VzdCIsIm15RnVuYyIsImZvbyIsImJhciIsImNhbGxiYWNrIiwiYSIsImIiLCJzb21lRnVuY3Rpb24iLCJvdGhlckZ1bmMiLCJhZGQiLCJ0b3RhbCIsIm1vcmVUb3RhbCIsIm1vcmUiLCJudW0iLCJjIiwiZCIsImUiLCJkZWZhdWx0U3R5bGUiLCJmb250U2l6ZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib2JqU3R5bGUiLCJvYmoiLCJyZXN1bHQiLCJub29wIiwibXVsdGxpbmUiLCJtc2ciLCJjcmVhdGVMaXRlcmFsIiwiYXJnMSIsImFyZzIiLCJtdWx0aUFyZ3MiLCJzYW1wbGVBcnJvdyIsImdldFZhbHVlIiwiY2FsbCIsIm15T2JqIiwic29tZUZ1bmMiLCJzb21lQXJyb3ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUFBLFFBQVFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBRCxRQUFRQyxHQUFSLENBQVksMEJBQVo7QUFDQTtBQUNBOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCQyxHQUF2QixFQUE0QjtBQUN4QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDSDs7QUFFREYsUUFBUUcsU0FBUixHQUFvQjtBQUNoQkMsYUFBUyxtQkFBVztBQUFFLGVBQU8sS0FBS0gsSUFBWjtBQUFtQixLQUR6Qjs7QUFHaEJJLGtCQUFjLHdCQUFnQjtBQUFBLFlBQVBILEdBQU8sdUVBQUgsQ0FBRzs7QUFDMUIsWUFBSUksWUFBWSxPQUFPLEtBQUtKLEdBQUwsSUFBWUEsR0FBbkIsQ0FBaEI7QUFDQUosZ0JBQVFDLEdBQVIsQ0FBWSxrQkFBa0JPLFNBQTlCO0FBQ0g7QUFOZSxDQUFwQjs7QUFTQSxJQUFJQyxLQUFLLElBQUlQLE9BQUosQ0FBWSxRQUFaLEVBQXNCLFFBQXRCLENBQVQ7O0FBSUE7O0lBRU1RLE07Ozs7QUFJTixJQUFJQyxJQUFJLElBQUlELE1BQUosRUFBUjs7QUFJQTtBQUNBO0FBQ0E7O0lBQ01FLE8sR0FDRixpQkFBWVQsSUFBWixFQUFrQkMsR0FBbEIsRUFBdUI7QUFBQTs7QUFDbkIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0gsQzs7QUFHTCxJQUFJUyxLQUFLLElBQUlELE9BQUosQ0FBWSxPQUFaLEVBQXFCLEVBQXJCLENBQVQ7O0FBS0E7QUFDQTtBQUNBOztJQUNNRSxPO0FBQ0YscUJBQVlYLElBQVosRUFBa0JDLEdBQWxCLEVBQXVCO0FBQUE7O0FBQ25CLGFBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOzs7O2tDQUVTO0FBQUUsbUJBQU8sS0FBS0QsSUFBWjtBQUFtQjs7O3VDQUNYO0FBQUEsZ0JBQVBDLEdBQU8sdUVBQUgsQ0FBRzs7QUFDaEIsZ0JBQUlJLFlBQVksT0FBTyxLQUFLSixHQUFMLElBQVlBLEdBQW5CLENBQWhCO0FBQ0FKLG9CQUFRQyxHQUFSLENBQVksa0JBQWtCTyxTQUE5QjtBQUNIOzs7Ozs7QUFHTCxJQUFJTyxLQUFLLElBQUlELE9BQUosQ0FBWSxVQUFaLEVBQXdCLEVBQXhCLENBQVQ7QUFDQWQsUUFBUUMsR0FBUixDQUFZYyxHQUFHVCxPQUFILEVBQVo7QUFDQVMsR0FBR1IsWUFBSDtBQUNBTyxRQUFRVCxTQUFSLENBQWtCRSxZQUFsQixDQUErQixFQUEvQjs7QUFHQTtBQUNBO0FBQ0E7O0lBQ01TLE07OztBQUNGLG9CQUFZYixJQUFaLEVBQWtCQyxHQUFsQixFQUF1QmEsT0FBdkIsRUFBZ0M7QUFBQTs7QUFBQSxvSEFDdEJkLElBRHNCLEVBQ2hCQyxHQURnQjs7QUFFNUIsY0FBS2EsT0FBTCxHQUFlQSxPQUFmO0FBRjRCO0FBRy9COzs7RUFKZ0JQLE07O0FBT3JCLElBQUlRLEtBQUssSUFBSUYsTUFBSixDQUFXLEtBQVgsRUFBa0IsRUFBbEIsRUFBc0IsUUFBdEIsQ0FBVDtBQUNBaEIsUUFBUUMsR0FBUixDQUFZaUIsR0FBR0QsT0FBZjs7QUFHQTtBQUNBO0FBQ0E7O0lBQ01FLE87OztBQUNGLHFCQUFZaEIsSUFBWixFQUFrQkMsR0FBbEIsRUFBdUJhLE9BQXZCLEVBQWdDO0FBQUE7O0FBQUEsdUhBQ3RCZCxJQURzQixFQUNoQkMsR0FEZ0I7O0FBRTVCLGVBQUthLE9BQUwsR0FBZUEsT0FBZjtBQUY0QjtBQUcvQjs7OztrQ0FFUztBQUNOLG1CQUFPLHNIQUFQO0FBQ0g7Ozs7RUFSaUJILE87O0FBV3RCLElBQUlNLEtBQUssSUFBSUQsT0FBSixDQUFZLEtBQVosRUFBbUIsRUFBbkIsRUFBdUIsUUFBdkIsQ0FBVDtBQUNBbkIsUUFBUUMsR0FBUixDQUFZbUIsR0FBR2QsT0FBSCxFQUFaOztBQUlBO0FBQ0E7QUFDQTs7SUFDTWUsTzs7Ozs7OztzQ0FDbUI7QUFDakIsbUJBQU9BLFFBQVFDLFFBQWY7QUFDSDs7Ozs7O0FBRUxELFFBQVFDLFFBQVIsR0FBbUIsR0FBbkI7O0lBRU1DLE87Ozs7Ozs7Ozs7O21DQUNTO0FBQ1B2QixvQkFBUUMsR0FBUixDQUFZb0IsUUFBUUMsUUFBcEI7QUFDQXRCLG9CQUFRQyxHQUFSLENBQVlzQixRQUFRRCxRQUFwQjtBQUNBdEIsb0JBQVFDLEdBQVIsQ0FBWSxLQUFLdUIsV0FBTCxDQUFpQkYsUUFBN0I7QUFDQXRCLG9CQUFRQyxHQUFSLENBQVksS0FBS3FCLFFBQWpCLEVBSk8sQ0FJcUM7QUFDL0M7Ozs7RUFOaUJELE87O0FBU3RCLElBQUlJLE1BQU0sSUFBSUYsT0FBSixFQUFWO0FBQ0F2QixRQUFRQyxHQUFSLENBQVl3QixJQUFJRCxXQUFKLENBQWdCRixRQUE1QjtBQUNBdEIsUUFBUUMsR0FBUixDQUFZb0IsUUFBUUssV0FBUixFQUFaO0FBQ0FELElBQUlFLFFBQUo7O0FBR0E7QUFDQTtBQUNBOztJQUNNQyxTOzs7QUFDRix1QkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBd0I7QUFBQTs7QUFBQSwySEFBUUQsSUFBUjs7QUFBZSxlQUFLRSxJQUFMLENBQVVELEtBQVYsRUFBZjtBQUFrQzs7O0VBRHRDRSxLOztBQUd4QixJQUFJQyxNQUFNLElBQUlMLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBQVY7QUFDQTVCLFFBQVFDLEdBQVIsQ0FBWWdDLEdBQVosRTs7Ozs7Ozs7O0FDdklBakMsUUFBUUMsR0FBUixDQUFZLDBCQUFaO0FBQ0FELFFBQVFDLEdBQVIsQ0FBWSwwQkFBWjs7QUFHQSxJQUFJaUMsT0FBTyxDQUNQLEVBQUUvQixNQUFNLFNBQVIsRUFBbUJnQyxNQUFNLEtBQXpCLEVBQWdDQyxLQUFLLFdBQXJDLEVBRE8sRUFFUCxFQUFFakMsTUFBTSxPQUFSLEVBQWlCZ0MsTUFBTSxLQUF2QixFQUE4QkMsS0FBSyxTQUFuQyxFQUZPLEVBR1AsRUFBRWpDLE1BQU0sU0FBUixFQUFtQmdDLE1BQU0sTUFBekIsRUFBaUNDLEtBQUssWUFBdEMsRUFITyxDQUFYOztBQU1BLEtBQUksSUFBSUMsSUFBRyxDQUFQLEVBQVNDLE1BQUlKLEtBQUtLLE1BQXRCLEVBQThCRixJQUFFQyxHQUFoQyxFQUFxQ0QsR0FBckMsRUFBMEM7QUFDdEMsUUFBSUcsT0FBT04sS0FBS0csQ0FBTCxDQUFYO0FBQ0EsU0FBSyxJQUFJSSxJQUFULElBQWlCRCxJQUFqQjtBQUNJeEMsZ0JBQVFDLEdBQVIsQ0FBWSxlQUFld0MsSUFBZixHQUFzQixVQUF0QixHQUFtQ0QsS0FBS0MsSUFBTCxDQUEvQztBQURKO0FBRUg7O0FBRURQLEtBQUtRLE9BQUwsQ0FBYSxVQUFTRixJQUFULEVBQWVHLEdBQWYsRUFBb0JDLEtBQXBCLEVBQTBCO0FBQ25DNUMsWUFBUUMsR0FBUixDQUFZdUMsS0FBS3JDLElBQWpCO0FBQ0gsQ0FGRDs7Ozs7OztBQUlBLHlCQUFnQitCLElBQWhCO0FBQUEsWUFBUU0sS0FBUjs7QUFDSXhDLGdCQUFRQyxHQUFSLENBQVl1QyxNQUFLckMsSUFBTCxHQUFZLEdBQVosR0FBa0JxQyxNQUFLTCxJQUFuQztBQURKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQW5DLFFBQVFDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBRCxRQUFRQyxHQUFSLENBQVksOEJBQVo7O0FBRUksU0FBUzRDLGNBQVQsQ0FBd0IxQyxJQUF4QixFQUE4QjJDLE9BQTlCLEVBQXVDO0FBQ25DLFdBQU87QUFDSDNDLGtCQURHO0FBRUgyQyx3QkFGRztBQUdIQyxlQUhHLHFCQUdPO0FBQ04sbUJBQU8sS0FBSzVDLElBQVo7QUFDSDtBQUxFLEtBQVA7QUFPSDs7QUFFRCxJQUFJNkMsT0FBT0gsZUFBZSxLQUFmLEVBQXNCLGNBQXRCLENBQVg7QUFDQTdDLFFBQVFDLEdBQVIsQ0FBWStDLEtBQUtGLE9BQWpCLEU7Ozs7Ozs7OztBQ2RKOUMsUUFBUUMsR0FBUixDQUFZLDhCQUFaO0FBQ0FELFFBQVFDLEdBQVIsQ0FBWSw2QkFBWjs7QUFFQSxJQUFJRSxPQUFPLEtBQVg7O0FBRUFILFFBQVFDLEdBQVIsY0FBdUJFLElBQXZCO0FBQ0FILFFBQVFDLEdBQVIsK0JBR01FLElBSE4sUTs7Ozs7Ozs7O0FDTkFILFFBQVFDLEdBQVIsQ0FBWSwrQkFBWjtBQUNBRCxRQUFRQyxHQUFSLENBQVksK0JBQVo7O0FBRUEsU0FBU2dELE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFEO0FBQUEsUUFBaENDLEdBQWdDLHVFQUE1QixFQUE0QjtBQUFBLFFBQXhCQyxRQUF3Qix1RUFBZixZQUFVLENBQUUsQ0FBRzs7QUFDakRwRCxZQUFRQyxHQUFSLENBQVlnRCxPQUFPOUMsSUFBbkI7QUFDQWlELGFBQVNGLEdBQVQsRUFBY0MsR0FBZDtBQUNIOztBQUVERixPQUFPLEVBQVAsRUFBVyxFQUFYLEVBQWUsVUFBU0ksQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQ3RELFlBQVFDLEdBQVIsQ0FBWW9ELENBQVosRUFBY0MsQ0FBZDtBQUFtQixDQUFoRDtBQUNBTCxPQUFPLEVBQVAsRTs7Ozs7Ozs7O0FDVEFqRCxRQUFRQyxHQUFSLENBQVksOEJBQVo7QUFDQUQsUUFBUUMsR0FBUixDQUFZLDhCQUFaOztBQUVBLFNBQVNzRCxZQUFULEdBQXdCO0FBQ3BCLFFBQUcsSUFBSCxFQUFTO0FBQ0wsWUFBSUwsTUFBTSxXQUFWO0FBQ0FsRCxnQkFBUUMsR0FBUixDQUFZaUQsR0FBWjtBQUNIOztBQUVEO0FBQ0g7QUFDREs7O0FBRUEsU0FBU0MsU0FBVCxHQUFxQjtBQUNqQixTQUFJLElBQUluQixJQUFFLENBQU4sRUFBUUMsTUFBSSxFQUFoQixFQUFtQkQsSUFBRUMsR0FBckIsRUFBeUJELEdBQXpCLEVBQThCO0FBQzFCckMsZ0JBQVFDLEdBQVIsQ0FBWW9DLENBQVo7QUFDSDtBQUNEO0FBQ0g7QUFDRG1CLFk7Ozs7Ozs7OztBQ25CQXhELFFBQVFDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBRCxRQUFRQyxHQUFSLENBQVksOEJBQVo7O0FBRUEsU0FBU3dELEdBQVQsQ0FBYUosQ0FBYixFQUFnQkMsQ0FBaEIsRUFBNEI7QUFDeEIsUUFBSUksUUFBUSxDQUFaO0FBQUEsUUFBZUMsWUFBWSxDQUEzQjs7QUFEd0Isc0NBQU5DLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUd4Qiw2QkFBZUEsSUFBZjtBQUFBLGdCQUFRQyxHQUFSOztBQUNJRix5QkFBYUUsR0FBYjtBQURKO0FBSHdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTXhCSCxZQUFRTCxJQUFJQyxDQUFKLEdBQVFLLFNBQWhCOztBQUVBLFdBQU9ELEtBQVA7QUFDSDs7QUFFRDFELFFBQVFDLEdBQVIsQ0FBWXdELElBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFaLEU7Ozs7Ozs7Ozs7O0FDZEF6RCxRQUFRQyxHQUFSLENBQVksOEJBQVo7QUFDQUQsUUFBUUMsR0FBUixDQUFZLDhCQUFaOztBQUdBLFNBQVN3RCxHQUFULENBQWFKLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CUSxDQUFuQixFQUFzQkMsQ0FBdEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQ3hCLFdBQU9YLElBQUlDLENBQUosR0FBUVEsQ0FBUixHQUFZQyxDQUFaLEdBQWdCQyxDQUF2QjtBQUNIOztBQUVEaEUsUUFBUUMsR0FBUixDQUFZd0Qsc0JBQUksQ0FBSixFQUFPLENBQVAsU0FBYSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFiLEVBQVo7O0FBR0F6RCxRQUFRQyxHQUFSLENBQVksOEJBQVo7QUFDQUQsUUFBUUMsR0FBUixDQUFZLDhDQUFaOztBQUVBLElBQUlnRSxlQUFlO0FBQ2ZDLGNBQVUsTUFESztBQUVmQyxXQUFPLE9BRlE7QUFHZkMscUJBQWlCO0FBSEYsQ0FBbkI7O0FBTUEsSUFBSUM7QUFDQUgsY0FBVTtBQURWLEdBRUdELFlBRkg7QUFHQUcscUJBQWlCO0FBSGpCLEVBQUo7O0FBTUFwRSxRQUFRQyxHQUFSLENBQVlvRSxRQUFaLEU7Ozs7Ozs7OztBQzFCQXJFLFFBQVFDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNBRCxRQUFRQyxHQUFSLENBQVksaUNBQVo7O0FBR0EsU0FBU3dELEdBQVQsQ0FBYUosQ0FBYixFQUFnQkMsQ0FBaEIsUUFBOEI7QUFBQSxRQUFWUSxDQUFVLFFBQVZBLENBQVU7QUFBQSxRQUFQQyxDQUFPLFFBQVBBLENBQU87QUFBQSxRQUFKQyxDQUFJLFFBQUpBLENBQUk7O0FBQzFCLFdBQU9YLElBQUlDLENBQUosR0FBUVEsQ0FBUixHQUFZQyxDQUFaLEdBQWdCQyxDQUF2QjtBQUNIOztBQUVELElBQUlNLE1BQU0sRUFBQ1IsR0FBRyxDQUFKLEVBQU9DLEdBQUcsQ0FBVixFQUFhQyxHQUFHLENBQWhCLEVBQVY7QUFDQSxJQUFJTyxTQUFTZCxJQUFJLENBQUosRUFBTyxDQUFQLEVBQVVhLEdBQVYsQ0FBYjtBQUNBdEUsUUFBUUMsR0FBUixDQUFZc0UsTUFBWixFOzs7Ozs7Ozs7QUNWQXZFLFFBQVFDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNBRCxRQUFRQyxHQUFSLENBQVksaUNBQVo7O0FBRUEsSUFBSXdELE1BQU0sU0FBTkEsR0FBTSxDQUFDSixDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxJQUFJQyxDQUFkO0FBQUEsQ0FBVjtBQUNBdEQsUUFBUUMsR0FBUixDQUFZd0QsSUFBSSxDQUFKLEVBQU8sRUFBUCxDQUFaOztBQUlBLElBQUllLE9BQU8sU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBbkI7QUFDQUE7O0FBR0EsSUFBSUMsV0FBVyxTQUFYQSxRQUFXLE1BQU87QUFDbEJDLFVBQU0sVUFBVUEsR0FBaEI7QUFDQSxXQUFPQSxHQUFQO0FBQ0gsQ0FIRDtBQUlBMUUsUUFBUUMsR0FBUixDQUFZd0UsU0FBUyxPQUFULENBQVo7O0FBR0EsSUFBSUUsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSxXQUFrQixFQUFFeEIsR0FBR3VCLElBQUwsRUFBV3RCLEdBQUd1QixJQUFkLEVBQWxCO0FBQUEsQ0FBcEI7QUFDQTdFLFFBQVFDLEdBQVIsQ0FBWTBFLGNBQWMsRUFBZCxFQUFrQixFQUFsQixDQUFaOztBQUdBLElBQUlHLFlBQVksU0FBWkEsU0FBWSxHQUF5QjtBQUFBLHNDQUFUbEIsSUFBUztBQUFUQSxZQUFTO0FBQUE7O0FBQUE7O0FBQUEsUUFBeEJQLENBQXdCLHVFQUF0QixFQUFzQjtBQUFBLFFBQWxCQyxDQUFrQix1RUFBaEIsRUFBZ0I7QUFBRSx5QkFBUXJELEdBQVIsa0JBQVlvRCxDQUFaLEVBQWVDLENBQWYsU0FBcUJNLElBQXJCO0FBQTZCLENBQXhFO0FBQ0FrQixVQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCOztBQUVBLElBQUlDLGNBQWMsU0FBZEEsV0FBYyxDQUFDMUIsQ0FBRCxFQUFhO0FBQUEsUUFBVEMsQ0FBUyx1RUFBUCxFQUFPOztBQUMzQnRELFlBQVFDLEdBQVIsWUFEMkIsQ0FDQztBQUMvQixDQUZEO0FBR0E4RSxZQUFZLEVBQVo7O0FBRUE7QUFDQSxJQUFJQyxXQUFXLFNBQVhBLFFBQVcsSUFBSztBQUNoQmhGLFlBQVFDLEdBQVIsWUFEZ0IsQ0FDb0I7QUFDcEMsV0FBT29ELENBQVA7QUFDSCxDQUhEO0FBSUFyRCxRQUFRQyxHQUFSLENBQVkrRSxTQUFTQyxJQUFULENBQWMsRUFBZCxFQUFrQixFQUFsQixDQUFaLEUsQ0FBd0M7O0FBRXhDLElBQUlDLFFBQVE7QUFDUnBELFdBQU8sRUFEQztBQUVScUQsY0FBVSxvQkFBWTtBQUFBOztBQUNsQm5GLGdCQUFRQyxHQUFSLENBQVksZUFBZSxLQUFLNkIsS0FBaEMsRUFEa0IsQ0FDOEM7QUFDaEUsWUFBSXNELFlBQVksU0FBWkEsU0FBWTtBQUFBLG1CQUFNcEYsUUFBUUMsR0FBUixDQUFZLGNBQWMsTUFBSzZCLEtBQS9CLENBQU47QUFBQSxTQUFoQixDQUZrQixDQUU4QztBQUNoRXNEO0FBQ0g7QUFOTyxDQUFaOztBQVNBRixNQUFNQyxRQUFOLEc7Ozs7Ozs7OztBQy9DQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSx1QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxZDVkZGUzMjhjNWZmYWVkNjkzYSIsImNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuY29uc29sZS5sb2coJy0tLS0tLTAxX2NsYXNzZXMuanMtLS0tLScpO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBDb25zdHJ1Y3RvciAvIFByb3RvdHlwZSBWZXJzaW9uXHJcblxyXG5mdW5jdGlvbiBQZXJzb24wKG5hbWUsIGFnZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYWdlID0gYWdlO1xyXG59XHJcblxyXG5QZXJzb24wLnByb3RvdHlwZSA9IHtcclxuICAgIHNheU5hbWU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5uYW1lOyB9LFxyXG5cclxuICAgIGdldEFnZUluRGF5czogZnVuY3Rpb24oYWdlPTApIHtcclxuICAgICAgICBsZXQgYWdlSW5EYXlzID0gMzY1ICogKHRoaXMuYWdlIHx8IGFnZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FnZSBpbiBkYXlzOiAnICsgYWdlSW5EYXlzKTtcclxuICAgIH1cclxufTtcclxuXHJcbmxldCBwMCA9IG5ldyBQZXJzb24wKCdUZXJlc2EnLCAnTWlsbGVyJyk7XHJcblxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNsYXNzIFBlcnNvbiB7XHJcblxyXG59XHJcblxyXG5sZXQgcCA9IG5ldyBQZXJzb24oKTtcclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBQcm92aWRpbmcgYSBjb25zdHJ1Y3RvclxyXG4vL1xyXG5jbGFzcyBQZXJzb24yIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFnZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBwMiA9IG5ldyBQZXJzb24yKCdTYWxseScsIDQxKTtcclxuXHJcblxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQWRkaW5nIE1ldGhvZHMgYW5kIHZpZXdpbmcgdGhlIHByb3RvdHlwZVxyXG4vL1xyXG5jbGFzcyBQZXJzb24zIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFnZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2F5TmFtZSgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxyXG4gICAgZ2V0QWdlSW5EYXlzKGFnZT0wKSB7XHJcbiAgICAgICAgbGV0IGFnZUluRGF5cyA9IDM2NSAqICh0aGlzLmFnZSB8fCBhZ2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBZ2UgaW4gZGF5czogJyArIGFnZUluRGF5cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBwMyA9IG5ldyBQZXJzb24zKCdKZW5uaWZlcicsIDI4KTtcclxuY29uc29sZS5sb2cocDMuc2F5TmFtZSgpKTtcclxucDMuZ2V0QWdlSW5EYXlzKCk7XHJcblBlcnNvbjMucHJvdG90eXBlLmdldEFnZUluRGF5cyg1MCk7XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBFeHRlbnNpb24gLSBzdXBlciBtdXN0IGJlIGNhbGxlZCBpbiBvcmRlciB0byB1c2UgdGhlIHRoaXMgcmVmXHJcbi8vXHJcbmNsYXNzIFdvcmtlciBleHRlbmRzIFBlcnNvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhZ2UsIGNvbXBhbnkpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBhZ2UpO1xyXG4gICAgICAgIHRoaXMuY29tcGFueSA9IGNvbXBhbnk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCB3NCA9IG5ldyBXb3JrZXIoJ0JvYicsIDM3LCAnR29vZ2xlJyk7XHJcbmNvbnNvbGUubG9nKHc0LmNvbXBhbnkpO1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gT3ZlcnJpZGluZyBNZXRob2RzXHJcbi8vXHJcbmNsYXNzIFdvcmtlcjIgZXh0ZW5kcyBQZXJzb24zIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFnZSwgY29tcGFueSkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGFnZSk7XHJcbiAgICAgICAgdGhpcy5jb21wYW55ID0gY29tcGFueTtcclxuICAgIH1cclxuXHJcbiAgICBzYXlOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiAnV29ya2VyOiAnICsgc3VwZXIuc2F5TmFtZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgdzUgPSBuZXcgV29ya2VyMignQm9iJywgMzcsICdHb29nbGUnKTtcclxuY29uc29sZS5sb2codzUuc2F5TmFtZSgpKTtcclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU3RhdGljIE1ldGhvZHMgYW5kIENsYXNzIFZhcmlhYmxlc1xyXG4vL1xyXG5jbGFzcyBSYWNlQ2FyIHtcclxuICAgIHN0YXRpYyBnZXRNYXhTcGVlZCgpIHtcclxuICAgICAgICByZXR1cm4gUmFjZUNhci5tYXhTcGVlZDtcclxuICAgIH1cclxufVxyXG5SYWNlQ2FyLm1heFNwZWVkID0gMzAwO1xyXG5cclxuY2xhc3MgSW5keUNhciBleHRlbmRzIFJhY2VDYXIge1xyXG4gICAgZ2V0U3BlZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coUmFjZUNhci5tYXhTcGVlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSW5keUNhci5tYXhTcGVlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb25zdHJ1Y3Rvci5tYXhTcGVlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tYXhTcGVlZCk7ICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHVuZGVmaW5lZCwgbWF4U3BlZWQgaXMgbm90IG9uIHRoZSBwcm90b3R5cGVcclxuICAgIH1cclxufVxyXG5cclxubGV0IGNhciA9IG5ldyBJbmR5Q2FyKCk7XHJcbmNvbnNvbGUubG9nKGNhci5jb25zdHJ1Y3Rvci5tYXhTcGVlZCk7XHJcbmNvbnNvbGUubG9nKFJhY2VDYXIuZ2V0TWF4U3BlZWQoKSk7XHJcbmNhci5nZXRTcGVlZCgpO1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEV4dGVuZGluZyBCdWlsdC1pbiBUeXBlc1xyXG4vL1xyXG5jbGFzcyBGaWxsQXJyYXkgZXh0ZW5kcyBBcnJheSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplLCB2YWx1ZSl7IHN1cGVyKHNpemUpOyB0aGlzLmZpbGwodmFsdWUpOyB9XHJcbn1cclxubGV0IGFyciA9IG5ldyBGaWxsQXJyYXkoMywgNyk7XHJcbmNvbnNvbGUubG9nKGFycik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vMDFfY2xhc3Nlcy5qcyIsImNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuY29uc29sZS5sb2coJy0tLS0tLTAyX2Zvcl9vZi5qcy0tLS0tLScpO1xyXG5cclxuXHJcbmxldCBnZWFyID0gW1xyXG4gICAgeyBuYW1lOiAnc25vcmtlbCcsIGNvc3Q6IDE0Ljk5LCB1c2U6ICdicmVhdGhpbmcnfSxcclxuICAgIHsgbmFtZTogJ2Jvb3RzJywgY29zdDogNDkuOTksIHVzZTogJ3dhbGtpbmcnIH0sXHJcbiAgICB7IG5hbWU6ICdiaWN5Y2xlJywgY29zdDogMjQ5Ljk5LCB1c2U6ICdyZWNyZWF0aW9uJ31cclxuXTtcclxuXHJcbmZvcihsZXQgaT0gMCxsZW49Z2Vhci5sZW5ndGg7IGk8bGVuOyBpKyspIHtcclxuICAgIGxldCBpdGVtID0gZ2VhcltpXTtcclxuICAgIGZvciAobGV0IHByb3AgaW4gaXRlbSlcclxuICAgICAgICBjb25zb2xlLmxvZygnUHJvcGVydHk6ICcgKyBwcm9wICsgJywgVmFsdWU6JyArIGl0ZW1bcHJvcF0pO1xyXG59XHJcblxyXG5nZWFyLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaWR4LCBhcnJheSl7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtLm5hbWUpO1xyXG59KTtcclxuXHJcbmZvcihsZXQgaXRlbSBvZiBnZWFyKVxyXG4gICAgY29uc29sZS5sb2coaXRlbS5uYW1lICsgJyAnICsgaXRlbS5jb3N0KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8wMl9mb3Jfb2YuanMiLCJjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5jb25zb2xlLmxvZygnLS0tLS0tMDNfc2hvcnRoYW5kcy5qcy0tLS0tLScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUN1c3RvbWVyKG5hbWUsIGFkZHJlc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBhZGRyZXNzLFxyXG4gICAgICAgICAgICBnZXROYW1lKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGN1c3QgPSBjcmVhdGVDdXN0b21lcignQm9iJywgJzEyMyBNYWluIFN0LicpO1xyXG4gICAgY29uc29sZS5sb2coY3VzdC5hZGRyZXNzKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8wM19zaG9ydGhhbmRzLmpzIiwiY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuY29uc29sZS5sb2coJy0tLS0tLTA0X3RlbXBsYXRlcy5qcy0tLS0tLScpO1xyXG5cclxubGV0IG5hbWUgPSAnUm9iJztcdTAwMGJcclxuXHJcbmNvbnNvbGUubG9nKGBXZWxjb21lICR7bmFtZX0uYCk7XHJcbmNvbnNvbGUubG9nKGBXZWxjb21lXHUwMDBiXHUwMDBiXHJcblxyXG5cclxuICAgICR7bmFtZX0uYCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLzA0X3RlbXBsYXRlcy5qcyIsImNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5jb25zb2xlLmxvZygnLS0tLS0wNV9kZWZhdWx0X2FyZ3MuanMtLS0tLS0nKTtcclxuXHJcbmZ1bmN0aW9uIG15RnVuYyhmb28sIGJhcj0xMCwgY2FsbGJhY2s9ZnVuY3Rpb24oKXt9ICkge1xyXG4gICAgY29uc29sZS5sb2cobXlGdW5jLm5hbWUpO1xyXG4gICAgY2FsbGJhY2soZm9vLCBiYXIpO1xyXG59XHJcblxyXG5teUZ1bmMoNTAsIDIwLCBmdW5jdGlvbihhLGIpe2NvbnNvbGUubG9nKGEsYik7IH0pO1xyXG5teUZ1bmMoNTApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLzA1X2RlZmF1bHRfYXJncy5qcyIsImNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbmNvbnNvbGUubG9nKCctLS0tLS0tLS0wNl9sZXQuanMtLS0tLS0tLS0tJyk7XHJcblxyXG5mdW5jdGlvbiBzb21lRnVuY3Rpb24oKSB7XHJcbiAgICBpZih0cnVlKSB7XHJcbiAgICAgICAgbGV0IGZvbyA9ICdhZnRlcm5vb24nO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvbyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coZm9vKTtcdFx0XHQvLyBmb28gaXMgbm90IGRlZmluZWQgaGVyZVxyXG59XHJcbnNvbWVGdW5jdGlvbigpO1xyXG5cclxuZnVuY3Rpb24gb3RoZXJGdW5jKCkge1xyXG4gICAgZm9yKGxldCBpPTAsbGVuPTEwO2k8bGVuO2krKykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coaSk7XHRcdFx0XHQvLyBpIGlzIG5vdCBkZWZpbmVkIGhlcmVcclxufVxyXG5vdGhlckZ1bmMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8wNl9sZXQuanMiLCJjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5jb25zb2xlLmxvZygnLS0tLS0tMDdfcmVzdF9hcmdzLmpzLS0tLS0tLScpO1xyXG5cclxuZnVuY3Rpb24gYWRkKGEsIGIsIC4uLm1vcmUpIHtcclxuICAgIGxldCB0b3RhbCA9IDAsIG1vcmVUb3RhbCA9IDA7XHJcblxyXG4gICAgZm9yKGxldCBudW0gb2YgbW9yZSlcclxuICAgICAgICBtb3JlVG90YWwgKz0gbnVtO1xyXG5cclxuICAgIHRvdGFsID0gYSArIGIgKyBtb3JlVG90YWw7XHJcblxyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhhZGQoNSwgNywgMywgMiwgMSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLzA3X3Jlc3RfYXJncy5qcyIsImNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbmNvbnNvbGUubG9nKCctLS0tLS0tLTA4X3NwcmVhZC5qcy0tLS0tLS0tJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkKGEsIGIsIGMsIGQsIGUpIHtcclxuICAgIHJldHVybiBhICsgYiArIGMgKyBkICsgZTtcclxufVxyXG5cclxuY29uc29sZS5sb2coYWRkKDUsIDcsIC4uLlszLCAyLCAxXSkpO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbmNvbnNvbGUubG9nKCctLS0tLS0tLTA4X3NwcmVhZC5qcyAtIHNwcmVhZCBvYmplY3QtLS0tLS0tLScpO1xyXG5cclxubGV0IGRlZmF1bHRTdHlsZSA9IHtcclxuICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmY5ZGYnXHJcbn07XHJcblxyXG5sZXQgb2JqU3R5bGUgPSB7XHJcbiAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgLi4uZGVmYXVsdFN0eWxlLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2QzZmYzNSdcclxufTtcclxuXHJcbmNvbnNvbGUubG9nKG9ialN0eWxlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8wOF9zcHJlYWQuanMiLCJjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5jb25zb2xlLmxvZygnLS0tLS0tMDlfZGVzdHJ1Y3R1cmVkLmpzLS0tLS0tLScpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZChhLCBiLCB7YywgZCwgZX0pIHtcclxuICAgIHJldHVybiBhICsgYiArIGMgKyBkICsgZTtcclxufVxyXG5cclxubGV0IG9iaiA9IHtjOiAzLCBkOiAyLCBlOiAxfTtcclxubGV0IHJlc3VsdCA9IGFkZCg1LCA3LCBvYmopO1xyXG5jb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLzA5X2Rlc3RydWN0dXJlZF9hcmdzLmpzIiwiY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuY29uc29sZS5sb2coJy0tLS0tLTEwX2Fycm93X2Z1bmNzLmpzLS0tLS0tLS0nKTtcclxuXHJcbmxldCBhZGQgPSAoYSwgYikgPT4gYSArIGI7XHJcbmNvbnNvbGUubG9nKGFkZCg1LCAxMCkpO1xyXG5cclxuXHJcblxyXG5sZXQgbm9vcCA9ICgpID0+IHt9O1xyXG5ub29wKCk7XHJcblxyXG5cclxubGV0IG11bHRsaW5lID0gbXNnID0+IHtcclxuICAgIG1zZyA9ICdNc2c6ICcgKyBtc2c7XHJcbiAgICByZXR1cm4gbXNnO1xyXG59O1xyXG5jb25zb2xlLmxvZyhtdWx0bGluZSgnaGVsbG8nKSk7XHJcblxyXG5cclxubGV0IGNyZWF0ZUxpdGVyYWwgPSAoYXJnMSwgYXJnMikgPT4gKCB7IGE6IGFyZzEsIGI6IGFyZzIgfSApO1xyXG5jb25zb2xlLmxvZyhjcmVhdGVMaXRlcmFsKDEwLCAyMCkpO1xyXG5cclxuXHJcbmxldCBtdWx0aUFyZ3MgPSAoYT0xMCwgYj0yMCwgLi4ubW9yZSkgPT4geyBjb25zb2xlLmxvZyhhLCBiLCAuLi5tb3JlKTsgfTtcclxubXVsdGlBcmdzKDEwMCwgMjAwLCAzMDAsIDQwMCk7XHJcblxyXG5sZXQgc2FtcGxlQXJyb3cgPSAoYSwgYj0yMCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codGhpcyk7ICAgICAgICAgIC8vIHRoaXMgaXMgdW5kZWZpbmVkXHJcbn07XHJcbnNhbXBsZUFycm93KDEwKTtcclxuXHJcbi8vIGFycm93IGZ1bmN0aW9ucyBjYWxsZWQgdmlhIGNhbGwoKSBvciBhcHBseSgpIGlnbm9yZSB0aGUgZmlyc3QgYXJndW1lbnRcclxubGV0IGdldFZhbHVlID0gYSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKTsgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHVuZGVmaW5lZFxyXG4gICAgcmV0dXJuIGE7XHJcbn07XHJcbmNvbnNvbGUubG9nKGdldFZhbHVlLmNhbGwoe30sIDIwKSk7ICAgICAvLyBkaXNwbGF5cyAyMFxyXG5cclxubGV0IG15T2JqID0ge1xyXG4gICAgdmFsdWU6IDEwLFxyXG4gICAgc29tZUZ1bmM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc29tZUZ1bmM6ICcgKyB0aGlzLnZhbHVlKTsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTBcclxuICAgICAgICBsZXQgc29tZUFycm93ID0gKCkgPT4gY29uc29sZS5sb2coJ2luQXJyb3c6ICcgKyB0aGlzLnZhbHVlKTsgICAgLy8gMTBcclxuICAgICAgICBzb21lQXJyb3coKTtcclxuICAgIH0sXHJcbn07XHJcblxyXG5teU9iai5zb21lRnVuYygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLzEwX2Fycm93X2Z1bmNzLmpzIiwiaW1wb3J0ICcuLzAxX2NsYXNzZXMnO1xyXG5pbXBvcnQgJy4vMDJfZm9yX29mJztcclxuaW1wb3J0ICcuLzAzX3Nob3J0aGFuZHMnXHJcbmltcG9ydCAnLi8wNF90ZW1wbGF0ZXMnXHJcbmltcG9ydCAnLi8wNV9kZWZhdWx0X2FyZ3MnXHJcbmltcG9ydCAnLi8wNl9sZXQnXHJcbmltcG9ydCAnLi8wN19yZXN0X2FyZ3MnXHJcbmltcG9ydCAnLi8wOF9zcHJlYWQnXHJcbmltcG9ydCAnLi8wOV9kZXN0cnVjdHVyZWRfYXJncydcclxuaW1wb3J0ICcuLzEwX2Fycm93X2Z1bmNzJ1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
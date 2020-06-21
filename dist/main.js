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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_Battlefield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Battlefield */ "./src/scripts/Battlefield.js");
/* harmony import */ var _scripts_Timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Timer */ "./src/scripts/Timer.js");

 // const testObj = {
//   key1: "hi",
//   key2: {
//     key3: "Hello",
//   },
// };
// const greeting = testObj?.key2?.key3 || testObj.key1;
// window.addEventListener("DOMContentLoaded", () => {
//   document.body.classList.add("center");
//   const card = document.createElement("div");
//   card.classList.add("card", "center");
//   card.innerHTML = `<h2>${greeting} World!</h2>`;
//   document.body.append(card);
//   const imgCard = document.createElement("div");
//   imgCard.classList.add("card", "center", "image-card");
//   document.body.appendChild(imgCard);
// });

var main = function main() {
  var bf = new _scripts_Battlefield__WEBPACK_IMPORTED_MODULE_0__["default"](20);
  bf.createCanvas();
  bf.drawBattlefield();
  bf.drawCastle();
  bf.createTowers();
  bf.drawTowers();
  bf.createEnemies();
  bf.drawEnemies();
  var animating = true;
  var timer = new _scripts_Timer__WEBPACK_IMPORTED_MODULE_1__["default"](0);
  timer.create();

  var animation = function animation() {
    bf.drawBattlefield();
    bf.drawCastle();
    Object.keys(bf.towers).forEach(function (key) {
      bf.drawTowers(key);
    });

    if (timer.remaining < 0) {
      timer.clear();
      Object.keys(bf.enemies).forEach(function (key) {
        if (animating) bf.updateEnemies(key);
        bf.clearEnemies(key);
        bf.drawEnemies(key);
      });
    }

    window.requestAnimationFrame(animation); // if (canvas.coords[0] + canvas.coords[2] > canvas.canvas.width)
    // canvas.reverseAnimation();
    // if (canvas.coords[0] < 0) canvas.reverseAnimation();
  };

  window.requestAnimationFrame(animation);
};

window.addEventListener("DOMContentLoaded", main);

/***/ }),

/***/ "./src/scripts/Battlefield.js":
/*!************************************!*\
  !*** ./src/scripts/Battlefield.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enemy */ "./src/scripts/Enemy.js");
/* harmony import */ var _Castle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Castle */ "./src/scripts/Castle.js");
/* harmony import */ var _Tower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tower */ "./src/scripts/Tower.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Battlefield = /*#__PURE__*/function () {
  function Battlefield(numEnemies) {
    _classCallCheck(this, Battlefield);

    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth * .33;
    this.canvas.height = window.innerHeight * .9;
    this.canvas.style.border = "1px solid black";
    this.ctx = this.canvas.getContext('2d');
    this.battlefieldColor = "#3dd11f";
    this.castleCoords = [this.canvas.width * .03, this.canvas.height * .92, this.canvas.width * .94, this.canvas.height * .07];
    this.firstTowerCoords = [this.castleCoords[0] + this.canvas.width * .02, this.castleCoords[1] + this.castleCoords[3], this.canvas.width * .133, this.canvas.height * -.09];
    this.numTowers = 6;
    this.numEnemies = numEnemies;
    this.enemies = {};
    this.towers = {};
  }

  _createClass(Battlefield, [{
    key: "createCanvas",
    value: function createCanvas() {
      document.body.append(this.canvas);
    }
  }, {
    key: "drawBattlefield",
    value: function drawBattlefield() {
      this.ctx.fillStyle = this.battlefieldColor;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "drawCastle",
    value: function drawCastle() {
      var castle = new _Castle__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, this.castleCoords);
      castle.draw();
    }
  }, {
    key: "createTowers",
    value: function createTowers() {
      for (var i = 0; i < this.numTowers; i++) {
        var x = this.firstTowerCoords[0];
        var y = this.firstTowerCoords[1];
        var width = this.firstTowerCoords[2];
        var height = this.firstTowerCoords[3];
        var coords = this.firstTowerCoords;
        var tower = new _Tower__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx, [x, y, width, height]);
        this.towers[i] = tower;
        coords[0] += this.firstTowerCoords[2] + this.canvas.width * .02;
      }
    }
  }, {
    key: "drawTowers",
    value: function drawTowers(key) {
      var tower = this.towers[key];
      if (!!tower) tower.draw();
    }
  }, {
    key: "createEnemies",
    value: function createEnemies() {
      for (var i = 0; i < this.numEnemies; i++) {
        var coords = void 0;
        var maxX = Math.random() * this.canvas.width;
        var maxY = -(Math.random() * this.canvas.height); // set so enemies spawn above

        var enemySize = 20; // set x value on enmies to spawn within the canvas

        if (this.canvas.width - maxX >= 0 && this.canvas.width - maxX <= enemySize) {
          // > max length
          maxX -= enemySize;
        } else if (maxX <= enemySize) {
          // < max length
          maxX += enemySize;
        } // set y value on enmies to spawn within the canvas


        if (this.canvas.height + maxY >= 0) {
          // have enemies spawn offscreen from the top
          maxY -= enemySize;
        }

        var enemy = new _Enemy__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, [maxX, maxY], enemySize);
        this.enemies[i] = enemy;
      }
    }
  }, {
    key: "drawEnemies",
    value: function drawEnemies(key) {
      var enemy = this.enemies[key];
      if (!!enemy && enemy.coords[1] <= this.castleCoords[1]) enemy.draw();
    }
  }, {
    key: "clearEnemies",
    value: function clearEnemies(key) {
      var enemy = this.enemies[key];
      enemy.clear();
      if (enemy.coords[1] >= this.castleCoords[1]) delete this.enemies[key];
    }
  }, {
    key: "updateEnemies",
    value: function updateEnemies(key) {
      var enemy = this.enemies[key];
      if (enemy.coords[1] <= this.castleCoords[1]) enemy.update();
    }
  }]);

  return Battlefield;
}();

/* harmony default export */ __webpack_exports__["default"] = (Battlefield);

/***/ }),

/***/ "./src/scripts/Castle.js":
/*!*******************************!*\
  !*** ./src/scripts/Castle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Castle = /*#__PURE__*/function () {
  function Castle(ctx, coords) {
    _classCallCheck(this, Castle);

    this.ctx = ctx;
    this.ctx.fillStyle = "#eef2ed";
    this.coords = coords;
  }

  _createClass(Castle, [{
    key: "draw",
    value: function draw() {
      var _this$ctx;

      // draw castle base
      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.coords));
    }
  }]);

  return Castle;
}();

/* harmony default export */ __webpack_exports__["default"] = (Castle);

/***/ }),

/***/ "./src/scripts/Enemy.js":
/*!******************************!*\
  !*** ./src/scripts/Enemy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Enemy = /*#__PURE__*/function () {
  function Enemy(ctx, coords, radius) {
    _classCallCheck(this, Enemy);

    this.ctx = ctx;
    this.coords = coords;
    this.enemyColors = ["#9be5e8", "#e80c1e", "#7f53a3", "#ff871f", "#ffff0f"];
    this.radius = radius;
  }

  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      // draw enemy
      this.ctx.beginPath();
      var radius = 20;
      var x = this.coords[0];
      var y = this.coords[1];
      var startAngle = 0;
      var endAngle = Math.PI * 2;
      this.ctx.arc(x, y, radius, startAngle, endAngle);
      this.ctx.fillStyle = this.enemyColors[0];
      this.ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      this.coords[1] += 5;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.ctx.clearRect(this.coords[0], this.coords[1], this.maxX, this.maxY);
    }
  }]);

  return Enemy;
}();

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ }),

/***/ "./src/scripts/Timer.js":
/*!******************************!*\
  !*** ./src/scripts/Timer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timer = /*#__PURE__*/function () {
  function Timer(remaining) {
    _classCallCheck(this, Timer);

    this.remaining = remaining;
    this.timer = document.createElement('p');
    this.timer.classList.add('timer');
    this.timer.innerText = this.remaining;
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  _createClass(Timer, [{
    key: "create",
    value: function create() {
      document.body.prepend(this.timer);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.remaining -= 1;
      this.timer.innerText = this.remaining;
    }
  }, {
    key: "clear",
    value: function clear() {
      clearInterval(this.interval);
      this.timer.innerText = "";
    }
  }]);

  return Timer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ }),

/***/ "./src/scripts/Tower.js":
/*!******************************!*\
  !*** ./src/scripts/Tower.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tower = /*#__PURE__*/function () {
  function Tower(ctx, coords) {
    _classCallCheck(this, Tower);

    this.ctx = ctx;
    this.ctx.strokeStyle = "#d4d9d2";
    this.ctx.fillStyle = "#bdbfbb";
    this.coords = coords;
  }

  _createClass(Tower, [{
    key: "draw",
    value: function draw() {
      var _this$ctx;

      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.coords));
    }
  }]);

  return Tower;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tower);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0JhdHRsZWZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0Nhc3RsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9FbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Ub3dlci5qcyJdLCJuYW1lcyI6WyJtYWluIiwiYmYiLCJCYXR0bGVmaWVsZCIsImNyZWF0ZUNhbnZhcyIsImRyYXdCYXR0bGVmaWVsZCIsImRyYXdDYXN0bGUiLCJjcmVhdGVUb3dlcnMiLCJkcmF3VG93ZXJzIiwiY3JlYXRlRW5lbWllcyIsImRyYXdFbmVtaWVzIiwiYW5pbWF0aW5nIiwidGltZXIiLCJUaW1lciIsImNyZWF0ZSIsImFuaW1hdGlvbiIsIk9iamVjdCIsImtleXMiLCJ0b3dlcnMiLCJmb3JFYWNoIiwia2V5IiwicmVtYWluaW5nIiwiY2xlYXIiLCJlbmVtaWVzIiwidXBkYXRlRW5lbWllcyIsImNsZWFyRW5lbWllcyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJudW1FbmVtaWVzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsImJvcmRlciIsImN0eCIsImdldENvbnRleHQiLCJiYXR0bGVmaWVsZENvbG9yIiwiY2FzdGxlQ29vcmRzIiwiZmlyc3RUb3dlckNvb3JkcyIsIm51bVRvd2VycyIsImJvZHkiLCJhcHBlbmQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNhc3RsZSIsIkNhc3RsZSIsImRyYXciLCJpIiwieCIsInkiLCJjb29yZHMiLCJ0b3dlciIsIlRvd2VyIiwibWF4WCIsIk1hdGgiLCJyYW5kb20iLCJtYXhZIiwiZW5lbXlTaXplIiwiZW5lbXkiLCJFbmVteSIsInVwZGF0ZSIsInJhZGl1cyIsImVuZW15Q29sb3JzIiwiYmVnaW5QYXRoIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiUEkiLCJhcmMiLCJmaWxsIiwiY2xlYXJSZWN0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRpY2siLCJiaW5kIiwicHJlcGVuZCIsImNsZWFySW50ZXJ2YWwiLCJzdHJva2VTdHlsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxH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NkMsV0FBVCxHQUF1QixTQUF2QjtBQUNBLFNBQUs3QyxHQUFMLENBQVNRLFNBQVQsR0FBcUIsU0FBckI7QUFDQSxTQUFLUSxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7OzsyQkFDSztBQUFBOztBQUVGLHdCQUFLaEIsR0FBTCxFQUFTUyxRQUFULHFDQUFxQixLQUFLTyxNQUExQjtBQUNIOzs7Ozs7QUFFVUUsb0VBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQmF0dGxlZmllbGQgZnJvbSBcIi4vc2NyaXB0cy9CYXR0bGVmaWVsZFwiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuL3NjcmlwdHMvVGltZXJcIjtcbi8vIGNvbnN0IHRlc3RPYmogPSB7XG4vLyAgIGtleTE6IFwiaGlcIixcbi8vICAga2V5Mjoge1xuLy8gICAgIGtleTM6IFwiSGVsbG9cIixcbi8vICAgfSxcbi8vIH07XG5cbi8vIGNvbnN0IGdyZWV0aW5nID0gdGVzdE9iaj8ua2V5Mj8ua2V5MyB8fCB0ZXN0T2JqLmtleTE7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJcIik7XG4vLyAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIpO1xuLy8gICBjYXJkLmlubmVySFRNTCA9IGA8aDI+JHtncmVldGluZ30gV29ybGQhPC9oMj5gO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcbi8vICAgY29uc3QgaW1nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGltZ0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIiwgXCJpbWFnZS1jYXJkXCIpO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ0NhcmQpO1xuLy8gfSk7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IGJmID0gbmV3IEJhdHRsZWZpZWxkKDIwKTtcbiAgYmYuY3JlYXRlQ2FudmFzKCk7XG4gIGJmLmRyYXdCYXR0bGVmaWVsZCgpO1xuICBiZi5kcmF3Q2FzdGxlKCk7XG4gIGJmLmNyZWF0ZVRvd2VycygpO1xuICBcbiAgYmYuZHJhd1Rvd2VycygpO1xuICBiZi5jcmVhdGVFbmVtaWVzKCk7XG4gIGJmLmRyYXdFbmVtaWVzKCk7XG4gIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuXG4gIGNvbnN0IHRpbWVyID0gbmV3IFRpbWVyKDApO1xuICB0aW1lci5jcmVhdGUoKTtcbiAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGJmLmRyYXdCYXR0bGVmaWVsZCgpO1xuICAgIGJmLmRyYXdDYXN0bGUoKTtcbiAgICBPYmplY3Qua2V5cyhiZi50b3dlcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIFxuICAgICAgYmYuZHJhd1Rvd2VycyhrZXkpO1xuICAgIH0pXG4gICAgICBpZiAodGltZXIucmVtYWluaW5nIDwgMCkge1xuICAgICAgICB0aW1lci5jbGVhcigpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGJmLmVuZW1pZXMpLmZvckVhY2goa2V5ID0+IHtcblxuICAgICAgICAgIGlmIChhbmltYXRpbmcpIGJmLnVwZGF0ZUVuZW1pZXMoa2V5KTtcbiAgICAgICAgICBcbiAgICAgICAgICBiZi5jbGVhckVuZW1pZXMoa2V5KTtcbiAgICAgICAgICBiZi5kcmF3RW5lbWllcyhrZXkpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIFxuICAgIC8vIGlmIChjYW52YXMuY29vcmRzWzBdICsgY2FudmFzLmNvb3Jkc1syXSA+IGNhbnZhcy5jYW52YXMud2lkdGgpXG4gICAgICAvLyBjYW52YXMucmV2ZXJzZUFuaW1hdGlvbigpO1xuICAgIC8vIGlmIChjYW52YXMuY29vcmRzWzBdIDwgMCkgY2FudmFzLnJldmVyc2VBbmltYXRpb24oKTtcbiAgfTtcbiAgXG5cbiAgXG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4gIFxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbWFpbik7XG5cbiIsImltcG9ydCBFbmVteSBmcm9tICcuL0VuZW15J1xuaW1wb3J0IENhc3RsZSBmcm9tICcuL0Nhc3RsZSdcbmltcG9ydCBUb3dlciBmcm9tICcuL1Rvd2VyJ1xuXG5jbGFzcyBCYXR0bGVmaWVsZCB7XG4gICAgY29uc3RydWN0b3IobnVtRW5lbWllcyl7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuMzM7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIC45O1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuYmF0dGxlZmllbGRDb2xvciA9IFwiIzNkZDExZlwiO1xuICAgICAgICB0aGlzLmNhc3RsZUNvb3JkcyA9IFt0aGlzLmNhbnZhcy53aWR0aCAqIC4wMywgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjkyLCB0aGlzLmNhbnZhcy53aWR0aCAqIC45NCwgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjA3XTtcbiAgICAgICAgdGhpcy5maXJzdFRvd2VyQ29vcmRzID0gW3RoaXMuY2FzdGxlQ29vcmRzWzBdICsgKHRoaXMuY2FudmFzLndpZHRoICogLjAyKSwgdGhpcy5jYXN0bGVDb29yZHNbMV0gKyB0aGlzLmNhc3RsZUNvb3Jkc1szXSwgdGhpcy5jYW52YXMud2lkdGggKiAuMTMzLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiAtLjA5XTtcbiAgICAgICAgdGhpcy5udW1Ub3dlcnMgPSA2O1xuICAgICAgICB0aGlzLm51bUVuZW1pZXMgPSBudW1FbmVtaWVzO1xuICAgICAgICB0aGlzLmVuZW1pZXMgPSB7fTtcbiAgICAgICAgdGhpcy50b3dlcnMgPSB7fTtcbiAgICAgfVxuICAgICBjcmVhdGVDYW52YXMoKXtcbiAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgfVxuICAgICBkcmF3QmF0dGxlZmllbGQoKXtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmF0dGxlZmllbGRDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgIH1cbiAgICAgZHJhd0Nhc3RsZSgpe1xuICAgICAgICBjb25zdCBjYXN0bGUgPSBuZXcgQ2FzdGxlKHRoaXMuY3R4LCB0aGlzLmNhc3RsZUNvb3Jkcyk7XG4gICAgICAgIGNhc3RsZS5kcmF3KCk7XG4gICAgIH1cbiAgICAgY3JlYXRlVG93ZXJzKCl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Ub3dlcnM7IGkrKyl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB4ID0gdGhpcy5maXJzdFRvd2VyQ29vcmRzWzBdO1xuICAgICAgICAgICAgbGV0IHkgPSB0aGlzLmZpcnN0VG93ZXJDb29yZHNbMV07XG4gICAgICAgICAgICBsZXQgd2lkdGggPSB0aGlzLmZpcnN0VG93ZXJDb29yZHNbMl07XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5maXJzdFRvd2VyQ29vcmRzWzNdO1xuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHRoaXMuZmlyc3RUb3dlckNvb3JkcztcbiAgICAgICAgICAgIGxldCB0b3dlciA9IG5ldyBUb3dlcih0aGlzLmN0eCwgW3gseSx3aWR0aCxoZWlnaHRdKTtcbiAgICAgICAgICAgIHRoaXMudG93ZXJzW2ldID0gdG93ZXI7XG4gICAgICAgICAgICBjb29yZHNbMF0gKz0gdGhpcy5maXJzdFRvd2VyQ29vcmRzWzJdICsgKHRoaXMuY2FudmFzLndpZHRoICogLjAyKTtcbiAgICAgICAgfVxuICAgICB9XG4gICAgIGRyYXdUb3dlcnMoa2V5KXtcbiAgICAgICAgIFxuICAgICAgICBjb25zdCB0b3dlciA9IHRoaXMudG93ZXJzW2tleV07XG4gICAgICAgIGlmICghIXRvd2VyKSB0b3dlci5kcmF3KCk7XG4gICAgIH1cbiAgICBjcmVhdGVFbmVtaWVzKCl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1FbmVtaWVzOyBpKyspe1xuICAgICAgICAgICAgbGV0IGNvb3JkcztcbiAgICAgICAgICAgIGxldCBtYXhYID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgbGV0IG1heFkgPSAtKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQpOyAvLyBzZXQgc28gZW5lbWllcyBzcGF3biBhYm92ZVxuICAgICAgICAgICAgbGV0IGVuZW15U2l6ZSA9IDIwO1xuXG4gICAgICAgICAgICAvLyBzZXQgeCB2YWx1ZSBvbiBlbm1pZXMgdG8gc3Bhd24gd2l0aGluIHRoZSBjYW52YXNcbiAgICAgICAgICAgIGlmICgodGhpcy5jYW52YXMud2lkdGggLSBtYXhYID49IDApICYmIHRoaXMuY2FudmFzLndpZHRoIC0gbWF4WCA8PSBlbmVteVNpemUpeyAvLyA+IG1heCBsZW5ndGhcbiAgICAgICAgICAgICAgICBtYXhYIC09IGVuZW15U2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIG1heFggPD0gZW5lbXlTaXplKXsgLy8gPCBtYXggbGVuZ3RoXG4gICAgICAgICAgICAgICAgbWF4WCArPSBlbmVteVNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXQgeSB2YWx1ZSBvbiBlbm1pZXMgdG8gc3Bhd24gd2l0aGluIHRoZSBjYW52YXNcbiAgICAgICAgICAgIGlmICgodGhpcy5jYW52YXMuaGVpZ2h0ICsgbWF4WSA+PSAwKSl7IC8vIGhhdmUgZW5lbWllcyBzcGF3biBvZmZzY3JlZW4gZnJvbSB0aGUgdG9wXG4gICAgICAgICAgICAgICAgbWF4WSAtPSBlbmVteVNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZW5lbXkgPSBuZXcgRW5lbXkodGhpcy5jdHgsIFttYXhYLCBtYXhZXSwgZW5lbXlTaXplKTtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllc1tpXSA9IGVuZW15O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VuZW1pZXMoa2V5KXtcbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzW2tleV07XG4gICAgICAgIGlmICghIWVuZW15ICYmIChlbmVteS5jb29yZHNbMV0gPD0gdGhpcy5jYXN0bGVDb29yZHNbMV0pKSBlbmVteS5kcmF3KCk7XG4gICAgfVxuICAgIGNsZWFyRW5lbWllcyhrZXkpe1xuICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW1pZXNba2V5XTtcbiAgICAgICAgZW5lbXkuY2xlYXIoKTtcbiAgICAgICAgaWYgKChlbmVteS5jb29yZHNbMV0gPj0gdGhpcy5jYXN0bGVDb29yZHNbMV0pKSBkZWxldGUgdGhpcy5lbmVtaWVzW2tleV07XG5cbiAgICB9XG4gICAgdXBkYXRlRW5lbWllcyhrZXkpe1xuICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW1pZXNba2V5XTtcbiAgICAgICAgaWYgKGVuZW15LmNvb3Jkc1sxXSA8PSB0aGlzLmNhc3RsZUNvb3Jkc1sxXSkgZW5lbXkudXBkYXRlKCk7IFxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJhdHRsZWZpZWxkOyIsImNsYXNzIENhc3RsZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMpe1xuXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNlZWYyZWRcIjtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgfVxuICAgIGRyYXcoKXtcbiAgICAgICAgICAgICAvLyBkcmF3IGNhc3RsZSBiYXNlXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhc3RsZTsiLCJjbGFzcyBFbmVteSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMsIHJhZGl1cyl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgdGhpcy5lbmVteUNvbG9ycyA9IFtcIiM5YmU1ZThcIixcIiNlODBjMWVcIixcIiM3ZjUzYTNcIixcIiNmZjg3MWZcIixcIiNmZmZmMGZcIl07XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgLy8gZHJhdyBlbmVteVxuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGxldCByYWRpdXMgPSAyMDtcbiAgICAgICAgbGV0IHggPSB0aGlzLmNvb3Jkc1swXTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNvb3Jkc1sxXTtcbiAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSAwO1xuICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLlBJICogMjtcbiAgICAgICAgdGhpcy5jdHguYXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmVuZW15Q29sb3JzWzBdO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jb29yZHNbMV0gKz0gNTtcbiAgICB9XG4gICAgY2xlYXIoKXtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMuY29vcmRzWzBdLHRoaXMuY29vcmRzWzFdLCB0aGlzLm1heFgsIHRoaXMubWF4WSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmVteSIsImNsYXNzIFRpbWVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZW1haW5pbmcpe1xuICAgICAgICB0aGlzLnJlbWFpbmluZyA9IHJlbWFpbmluZztcbiAgICAgICAgdGhpcy50aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGhpcy50aW1lci5jbGFzc0xpc3QuYWRkKCd0aW1lcicpO1xuICAgICAgICB0aGlzLnRpbWVyLmlubmVyVGV4dCA9IHRoaXMucmVtYWluaW5nO1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLmJpbmQodGhpcyksIDEwMDApO1xuICAgIH1cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKHRoaXMudGltZXIpO1xuICAgIH1cbiAgICB0aWNrKCl7XG4gICAgICAgIHRoaXMucmVtYWluaW5nIC09IDE7XG4gICAgICAgIHRoaXMudGltZXIuaW5uZXJUZXh0ID0gdGhpcy5yZW1haW5pbmc7XG4gICAgfVxuICAgIGNsZWFyKCl7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMudGltZXIuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyIsImNsYXNzIFRvd2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvb3Jkcyl7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIiNkNGQ5ZDJcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjYmRiZmJiXCI7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgIH1cbiAgICBkcmF3KCl7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVG93ZXIiXSwic291cmNlUm9vdCI6IiJ9
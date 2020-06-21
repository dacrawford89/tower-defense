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

    if (timer.remaining < 0 && Object.keys(bf.enemies).length) {
      timer.clear();
      bf.attackEnemies();
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
    this.currentLevel = 1;
    this.numEnemies = numEnemies;
    this.enemies = {};
    this.towers = {};
  }

  _createClass(Battlefield, [{
    key: "attackEnemies",
    value: function attackEnemies() {
      var _this = this;

      var remainingEnemies = Object.keys(this.enemies).length;
      Object.keys(this.towers).forEach(function (tower) {
        var enemy = _this.enemies[Object.keys(_this.enemies)[0]];

        _this.towers[tower].attack(enemy);
      });
    }
  }, {
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

        var enemySize = 20;
        var health = this.currentLevel * 10; // set x value on enmies to spawn within the canvas

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

        var enemy = new _Enemy__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, [maxX, maxY], enemySize, health);
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
    this.coords = coords;
  }

  _createClass(Castle, [{
    key: "draw",
    value: function draw() {
      var _this$ctx;

      this.ctx.fillStyle = "#eef2ed";

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
  function Enemy(ctx, coords, radius, health) {
    _classCallCheck(this, Enemy);

    this.ctx = ctx;
    this.maxHealth = health;
    this.currentHealth = health;
    this.coords = coords;
    this.enemyColors = ["#9be5e8", "#e80c1e", "#7f53a3", "#ff871f", "#ffff0f"];
    this.radius = radius;
  }

  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      var radius = 20;
      var x = this.coords[0];
      var y = this.coords[1];
      var startAngle = 0;
      var endAngle = Math.PI * 2;
      this.ctx.arc(x, y, radius, startAngle, endAngle);
      this.ctx.fillStyle = this.enemyColors[0];
      this.ctx.globalAlpha = this.health / this.maxHealth;
      this.ctx.fill();
      this.ctx.globalAlpha = 1;
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
    this.coords = coords;
    this.damage = 1;
    this.speed = 100;
  }

  _createClass(Tower, [{
    key: "draw",
    value: function draw() {
      var _this$ctx;

      this.ctx.strokeStyle = "#d4d9d2";
      this.ctx.fillStyle = "#bdbfbb";

      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.coords));
    }
  }, {
    key: "attack",
    value: function attack(enemy) {
      var _this = this;

      debugger;
      enemy.health -= this.damage;
      this.intervalId = setInterval(function () {
        return _this.attack(enemy);
      }, this.speed);
    }
  }]);

  return Tower;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tower);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0JhdHRsZWZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0Nhc3RsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9FbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Ub3dlci5qcyJdLCJuYW1lcyI6WyJtYWluIiwiYmYiLCJCYXR0bGVmaWVsZCIsImNyZWF0ZUNhbnZhcyIsImRyYXdCYXR0bGVmaWVsZCIsImRyYXdDYXN0bGUiLCJjcmVhdGVUb3dlcnMiLCJkcmF3VG93ZXJzIiwiY3JlYXRlRW5lbWllcyIsImRyYXdFbmVtaWVzIiwiYW5pbWF0aW5nIiwidGltZXIiLCJUaW1lciIsImNyZWF0ZSIsImFuaW1hdGlvbiIsIk9iamVjdCIsImtleXMiLCJ0b3dlcnMiLCJmb3JFYWNoIiwia2V5IiwicmVtYWluaW5nIiwiZW5lbWllcyIsImxlbmd0aCIsImNsZWFyIiwiYXR0YWNrRW5lbWllcyIsInVwZGF0ZUVuZW1pZXMiLCJjbGVhckVuZW1pZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibnVtRW5lbWllcyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJib3JkZXIiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmF0dGxlZmllbGRDb2xvciIsImNhc3RsZUNvb3JkcyIsImZpcnN0VG93ZXJDb29yZHMiLCJudW1Ub3dlcnMiLCJjdXJyZW50TGV2ZWwiLCJyZW1haW5pbmdFbmVtaWVzIiwidG93ZXIiLCJlbmVteSIsImF0dGFjayIsImJvZHkiLCJhcHBlbmQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNhc3RsZSIsIkNhc3RsZSIsImRyYXciLCJpIiwieCIsInkiLCJjb29yZHMiLCJUb3dlciIsIm1heFgiLCJNYXRoIiwicmFuZG9tIiwibWF4WSIsImVuZW15U2l6ZSIsImhlYWx0aCIsIkVuZW15IiwidXBkYXRlIiwicmFkaXVzIiwibWF4SGVhbHRoIiwiY3VycmVudEhlYWx0aCIsImVuZW15Q29sb3JzIiwiYmVnaW5QYXRoIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiUEkiLCJhcmMiLCJnbG9iYWxBbHBoYSIsImZpbGwiLCJjbGVhclJlY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwidGljayIsImJpbmQiLCJwcmVwZW5kIiwiY2xlYXJJbnRlcnZhbCIsImRhbWFnZSIsInNwZWVkIiwic3Ryb2tlU3R5bGUiLCJpbnRlcnZhbElkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNB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QWI7QUFFSDs7OzsyQkFDSztBQUFBOztBQUVGLFdBQUtyRCxHQUFMLENBQVNzRCxXQUFULEdBQXVCLFNBQXZCO0FBQ0EsV0FBS3RELEdBQUwsQ0FBU2EsU0FBVCxHQUFxQixTQUFyQjs7QUFDQSx3QkFBS2IsR0FBTCxFQUFTYyxRQUFULHFDQUFxQixLQUFLTyxNQUExQjtBQUNIOzs7MkJBQ01aLEssRUFBTTtBQUFBOztBQUNUO0FBQ0FBLFdBQUssQ0FBQ21CLE1BQU4sSUFBZ0IsS0FBS3dCLE1BQXJCO0FBQ0EsV0FBS0csVUFBTCxHQUFrQlIsV0FBVyxDQUFDO0FBQUEsZUFBTSxLQUFJLENBQUNyQyxNQUFMLENBQVlELEtBQVosQ0FBTjtBQUFBLE9BQUQsRUFBMkIsS0FBSzRDLEtBQWhDLENBQTdCO0FBQ0g7Ozs7OztBQUVVL0Isb0VBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQmF0dGxlZmllbGQgZnJvbSBcIi4vc2NyaXB0cy9CYXR0bGVmaWVsZFwiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuL3NjcmlwdHMvVGltZXJcIjtcbi8vIGNvbnN0IHRlc3RPYmogPSB7XG4vLyAgIGtleTE6IFwiaGlcIixcbi8vICAga2V5Mjoge1xuLy8gICAgIGtleTM6IFwiSGVsbG9cIixcbi8vICAgfSxcbi8vIH07XG5cbi8vIGNvbnN0IGdyZWV0aW5nID0gdGVzdE9iaj8ua2V5Mj8ua2V5MyB8fCB0ZXN0T2JqLmtleTE7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJcIik7XG4vLyAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIpO1xuLy8gICBjYXJkLmlubmVySFRNTCA9IGA8aDI+JHtncmVldGluZ30gV29ybGQhPC9oMj5gO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcbi8vICAgY29uc3QgaW1nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGltZ0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIiwgXCJpbWFnZS1jYXJkXCIpO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ0NhcmQpO1xuLy8gfSk7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IGJmID0gbmV3IEJhdHRsZWZpZWxkKDIwKTtcbiAgYmYuY3JlYXRlQ2FudmFzKCk7XG4gIGJmLmRyYXdCYXR0bGVmaWVsZCgpO1xuICBiZi5kcmF3Q2FzdGxlKCk7XG4gIGJmLmNyZWF0ZVRvd2VycygpO1xuICBcbiAgYmYuZHJhd1Rvd2VycygpO1xuICBiZi5jcmVhdGVFbmVtaWVzKCk7XG4gIGJmLmRyYXdFbmVtaWVzKCk7XG4gIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuXG4gIGNvbnN0IHRpbWVyID0gbmV3IFRpbWVyKDApO1xuICB0aW1lci5jcmVhdGUoKTtcbiAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGJmLmRyYXdCYXR0bGVmaWVsZCgpO1xuICAgIGJmLmRyYXdDYXN0bGUoKTtcbiAgICBPYmplY3Qua2V5cyhiZi50b3dlcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIFxuICAgICAgYmYuZHJhd1Rvd2VycyhrZXkpO1xuICAgIH0pXG4gICAgICBpZiAodGltZXIucmVtYWluaW5nIDwgMCAmJiBPYmplY3Qua2V5cyhiZi5lbmVtaWVzKS5sZW5ndGgpIHtcbiAgICAgICAgdGltZXIuY2xlYXIoKTtcbiAgICAgICAgYmYuYXR0YWNrRW5lbWllcygpO1xuICAgICAgICBPYmplY3Qua2V5cyhiZi5lbmVtaWVzKS5mb3JFYWNoKGtleSA9PiB7XG5cbiAgICAgICAgICBpZiAoYW5pbWF0aW5nKSBiZi51cGRhdGVFbmVtaWVzKGtleSk7XG4gICAgICAgICAgXG4gICAgICAgICAgYmYuY2xlYXJFbmVtaWVzKGtleSk7XG4gICAgICAgICAgYmYuZHJhd0VuZW1pZXMoa2V5KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICBcbiAgICAvLyBpZiAoY2FudmFzLmNvb3Jkc1swXSArIGNhbnZhcy5jb29yZHNbMl0gPiBjYW52YXMuY2FudmFzLndpZHRoKVxuICAgICAgLy8gY2FudmFzLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICAvLyBpZiAoY2FudmFzLmNvb3Jkc1swXSA8IDApIGNhbnZhcy5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gIH07XG4gIFxuXG4gIFxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICBcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIG1haW4pO1xuXG4iLCJpbXBvcnQgRW5lbXkgZnJvbSAnLi9FbmVteSdcbmltcG9ydCBDYXN0bGUgZnJvbSAnLi9DYXN0bGUnXG5pbXBvcnQgVG93ZXIgZnJvbSAnLi9Ub3dlcidcblxuY2xhc3MgQmF0dGxlZmllbGQge1xuICAgIGNvbnN0cnVjdG9yKG51bUVuZW1pZXMpe1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjMzO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAuOTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmJhdHRsZWZpZWxkQ29sb3IgPSBcIiMzZGQxMWZcIjtcbiAgICAgICAgdGhpcy5jYXN0bGVDb29yZHMgPSBbdGhpcy5jYW52YXMud2lkdGggKiAuMDMsIHRoaXMuY2FudmFzLmhlaWdodCAqIC45MiwgdGhpcy5jYW52YXMud2lkdGggKiAuOTQsIHRoaXMuY2FudmFzLmhlaWdodCAqIC4wN107XG4gICAgICAgIHRoaXMuZmlyc3RUb3dlckNvb3JkcyA9IFt0aGlzLmNhc3RsZUNvb3Jkc1swXSArICh0aGlzLmNhbnZhcy53aWR0aCAqIC4wMiksIHRoaXMuY2FzdGxlQ29vcmRzWzFdICsgdGhpcy5jYXN0bGVDb29yZHNbM10sIHRoaXMuY2FudmFzLndpZHRoICogLjEzMywgdGhpcy5jYW52YXMuaGVpZ2h0ICogLS4wOV07XG4gICAgICAgIHRoaXMubnVtVG93ZXJzID0gNjtcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAxO1xuICAgICAgICB0aGlzLm51bUVuZW1pZXMgPSBudW1FbmVtaWVzO1xuICAgICAgICB0aGlzLmVuZW1pZXMgPSB7fTtcbiAgICAgICAgdGhpcy50b3dlcnMgPSB7fTtcbiAgICAgfVxuICAgICBhdHRhY2tFbmVtaWVzKCl7XG4gICAgICAgICBjb25zdCByZW1haW5pbmdFbmVtaWVzID0gT2JqZWN0LmtleXModGhpcy5lbmVtaWVzKS5sZW5ndGg7XG4gICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnRvd2VycykuZm9yRWFjaCh0b3dlciA9PiB7XG4gICAgICAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzW09iamVjdC5rZXlzKHRoaXMuZW5lbWllcylbMF1dO1xuICAgICAgICAgICAgIHRoaXMudG93ZXJzW3Rvd2VyXS5hdHRhY2soZW5lbXkpO1xuICAgICAgICAgfSlcbiAgICAgfVxuICAgICBjcmVhdGVDYW52YXMoKXtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICAgICB9XG4gICAgIGRyYXdCYXR0bGVmaWVsZCgpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5iYXR0bGVmaWVsZENvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgfVxuICAgICBkcmF3Q2FzdGxlKCl7XG4gICAgICAgIGNvbnN0IGNhc3RsZSA9IG5ldyBDYXN0bGUodGhpcy5jdHgsIHRoaXMuY2FzdGxlQ29vcmRzKTtcbiAgICAgICAgY2FzdGxlLmRyYXcoKTtcbiAgICAgfVxuICAgICBjcmVhdGVUb3dlcnMoKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRvd2VyczsgaSsrKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHggPSB0aGlzLmZpcnN0VG93ZXJDb29yZHNbMF07XG4gICAgICAgICAgICBsZXQgeSA9IHRoaXMuZmlyc3RUb3dlckNvb3Jkc1sxXTtcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IHRoaXMuZmlyc3RUb3dlckNvb3Jkc1syXTtcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmZpcnN0VG93ZXJDb29yZHNbM107XG4gICAgICAgICAgICBsZXQgY29vcmRzID0gdGhpcy5maXJzdFRvd2VyQ29vcmRzO1xuICAgICAgICAgICAgbGV0IHRvd2VyID0gbmV3IFRvd2VyKHRoaXMuY3R4LCBbeCx5LHdpZHRoLGhlaWdodF0pO1xuICAgICAgICAgICAgdGhpcy50b3dlcnNbaV0gPSB0b3dlcjtcbiAgICAgICAgICAgIGNvb3Jkc1swXSArPSB0aGlzLmZpcnN0VG93ZXJDb29yZHNbMl0gKyAodGhpcy5jYW52YXMud2lkdGggKiAuMDIpO1xuICAgICAgICB9XG4gICAgIH1cbiAgICAgZHJhd1Rvd2VycyhrZXkpe1xuICAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvd2VyID0gdGhpcy50b3dlcnNba2V5XTtcbiAgICAgICAgaWYgKCEhdG93ZXIpIHRvd2VyLmRyYXcoKTtcbiAgICAgfVxuICAgIGNyZWF0ZUVuZW1pZXMoKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUVuZW1pZXM7IGkrKyl7XG4gICAgICAgICAgICBsZXQgY29vcmRzO1xuICAgICAgICAgICAgbGV0IG1heFggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICBsZXQgbWF4WSA9IC0oTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLmhlaWdodCk7IC8vIHNldCBzbyBlbmVtaWVzIHNwYXduIGFib3ZlXG4gICAgICAgICAgICBsZXQgZW5lbXlTaXplID0gMjA7XG4gICAgICAgICAgICBsZXQgaGVhbHRoID0gdGhpcy5jdXJyZW50TGV2ZWwgKiAxMDtcblxuICAgICAgICAgICAgLy8gc2V0IHggdmFsdWUgb24gZW5taWVzIHRvIHNwYXduIHdpdGhpbiB0aGUgY2FudmFzXG4gICAgICAgICAgICBpZiAoKHRoaXMuY2FudmFzLndpZHRoIC0gbWF4WCA+PSAwKSAmJiB0aGlzLmNhbnZhcy53aWR0aCAtIG1heFggPD0gZW5lbXlTaXplKXsgLy8gPiBtYXggbGVuZ3RoXG4gICAgICAgICAgICAgICAgbWF4WCAtPSBlbmVteVNpemU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBtYXhYIDw9IGVuZW15U2l6ZSl7IC8vIDwgbWF4IGxlbmd0aFxuICAgICAgICAgICAgICAgIG1heFggKz0gZW5lbXlTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0IHkgdmFsdWUgb24gZW5taWVzIHRvIHNwYXduIHdpdGhpbiB0aGUgY2FudmFzXG4gICAgICAgICAgICBpZiAoKHRoaXMuY2FudmFzLmhlaWdodCArIG1heFkgPj0gMCkpeyAvLyBoYXZlIGVuZW1pZXMgc3Bhd24gb2Zmc2NyZWVuIGZyb20gdGhlIHRvcFxuICAgICAgICAgICAgICAgIG1heFkgLT0gZW5lbXlTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGVuZW15ID0gbmV3IEVuZW15KHRoaXMuY3R4LCBbbWF4WCwgbWF4WV0sIGVuZW15U2l6ZSwgaGVhbHRoKTtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllc1tpXSA9IGVuZW15O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VuZW1pZXMoa2V5KXtcbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzW2tleV07XG4gICAgICAgIGlmICghIWVuZW15ICYmIChlbmVteS5jb29yZHNbMV0gPD0gdGhpcy5jYXN0bGVDb29yZHNbMV0pKSBlbmVteS5kcmF3KCk7XG4gICAgfVxuICAgIGNsZWFyRW5lbWllcyhrZXkpe1xuICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW1pZXNba2V5XTtcbiAgICAgICAgZW5lbXkuY2xlYXIoKTtcbiAgICAgICAgaWYgKChlbmVteS5jb29yZHNbMV0gPj0gdGhpcy5jYXN0bGVDb29yZHNbMV0pKSBkZWxldGUgdGhpcy5lbmVtaWVzW2tleV07XG5cbiAgICB9XG4gICAgdXBkYXRlRW5lbWllcyhrZXkpe1xuICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW1pZXNba2V5XTtcbiAgICAgICAgaWYgKGVuZW15LmNvb3Jkc1sxXSA8PSB0aGlzLmNhc3RsZUNvb3Jkc1sxXSkgZW5lbXkudXBkYXRlKCk7IFxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJhdHRsZWZpZWxkOyIsImNsYXNzIENhc3RsZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMpe1xuXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICB9XG4gICAgZHJhdygpe1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNlZWYyZWRcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FzdGxlOyIsImNsYXNzIEVuZW15IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvb3JkcywgcmFkaXVzLCBoZWFsdGgpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMuY3VycmVudEhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMuZW5lbXlDb2xvcnMgPSBbXCIjOWJlNWU4XCIsXCIjZTgwYzFlXCIsXCIjN2Y1M2EzXCIsXCIjZmY4NzFmXCIsXCIjZmZmZjBmXCJdO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBsZXQgcmFkaXVzID0gMjA7XG4gICAgICAgIGxldCB4ID0gdGhpcy5jb29yZHNbMF07XG4gICAgICAgIGxldCB5ID0gdGhpcy5jb29yZHNbMV07XG4gICAgICAgIGxldCBzdGFydEFuZ2xlID0gMDtcbiAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5QSSAqIDI7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5lbmVteUNvbG9yc1swXTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAodGhpcy5oZWFsdGggLyB0aGlzLm1heEhlYWx0aCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jb29yZHNbMV0gKz0gNTtcbiAgICB9XG4gICAgY2xlYXIoKXtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMuY29vcmRzWzBdLHRoaXMuY29vcmRzWzFdLCB0aGlzLm1heFgsIHRoaXMubWF4WSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmVteSIsImNsYXNzIFRpbWVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZW1haW5pbmcpe1xuICAgICAgICB0aGlzLnJlbWFpbmluZyA9IHJlbWFpbmluZztcbiAgICAgICAgdGhpcy50aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGhpcy50aW1lci5jbGFzc0xpc3QuYWRkKCd0aW1lcicpO1xuICAgICAgICB0aGlzLnRpbWVyLmlubmVyVGV4dCA9IHRoaXMucmVtYWluaW5nO1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLmJpbmQodGhpcyksIDEwMDApO1xuICAgIH1cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKHRoaXMudGltZXIpO1xuICAgIH1cbiAgICB0aWNrKCl7XG4gICAgICAgIHRoaXMucmVtYWluaW5nIC09IDE7XG4gICAgICAgIHRoaXMudGltZXIuaW5uZXJUZXh0ID0gdGhpcy5yZW1haW5pbmc7XG4gICAgfVxuICAgIGNsZWFyKCl7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMudGltZXIuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyIsImNsYXNzIFRvd2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvb3Jkcyl7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gMTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEwMDtcblxuICAgIH1cbiAgICBkcmF3KCl7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiI2Q0ZDlkMlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNiZGJmYmJcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgIH1cbiAgICBhdHRhY2soZW5lbXkpe1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBlbmVteS5oZWFsdGggLT0gdGhpcy5kYW1hZ2U7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMuYXR0YWNrKGVuZW15KSwgdGhpcy5zcGVlZClcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBUb3dlciJdLCJzb3VyY2VSb290IjoiIn0=
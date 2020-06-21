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

      debugger;
      var remainingEnemies = Object.keys(this.enemies).length;
      var enemiesArr = Object.keys(this.enemies).map(function (key) {
        return _this.enemies[key];
      });
      Object.keys(this.towers).forEach(function (towerKey) {
        if (!_this.towers[towerKey].target) {
          debugger;
          var enemyKey = Math.floor(Math.random() * enemiesArr.length);
          var enemy = enemiesArr[enemyKey];
          if (enemy.coords[1] < _this.canvas.height && enemy.coords[1] > 0) _this.towers[towerKey].attack(enemy);
        }
      });
      Object.keys(this.enemies).forEach(function (key) {
        debugger;
        if (_this.enemies[key].currentHealth <= 0) delete _this.enemies[key];
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
      debugger;
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
      this.ctx.font = "16px Arial";
      this.ctx.fillStyle = "#ff871f";
      this.ctx.fillText(this.currentHealth, x, y);
    }
  }, {
    key: "update",
    value: function update() {
      this.coords[1] += 1;
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
      debugger;
      console.log('hi');
      enemy.currentHealth -= this.damage;
    }
  }]);

  return Tower;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tower);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0JhdHRsZWZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0Nhc3RsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9FbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Ub3dlci5qcyJdLCJuYW1lcyI6WyJtYWluIiwiYmYiLCJCYXR0bGVmaWVsZCIsImNyZWF0ZUNhbnZhcyIsImRyYXdCYXR0bGVmaWVsZCIsImRyYXdDYXN0bGUiLCJjcmVhdGVUb3dlcnMiLCJkcmF3VG93ZXJzIiwiY3JlYXRlRW5lbWllcyIsImRyYXdFbmVtaWVzIiwiYW5pbWF0aW5nIiwidGltZXIiLCJUaW1lciIsImNyZWF0ZSIsImFuaW1hdGlvbiIsIk9iamVjdCIsImtleXMiLCJ0b3dlcnMiLCJmb3JFYWNoIiwia2V5IiwicmVtYWluaW5nIiwiZW5lbWllcyIsImxlbmd0aCIsImNsZWFyIiwiYXR0YWNrRW5lbWllcyIsInVwZGF0ZUVuZW1pZXMiLCJjbGVhckVuZW1pZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibnVtRW5lbWllcyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJib3JkZXIiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmF0dGxlZmllbGRDb2xvciIsImNhc3RsZUNvb3JkcyIsImZpcnN0VG93ZXJDb29yZHMiLCJudW1Ub3dlcnMiLCJjdXJyZW50TGV2ZWwiLCJyZW1haW5pbmdFbmVtaWVzIiwiZW5lbWllc0FyciIsIm1hcCIsInRvd2VyS2V5IiwidGFyZ2V0IiwiZW5lbXlLZXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJlbmVteSIsImNvb3JkcyIsImF0dGFjayIsImN1cnJlbnRIZWFsdGgiLCJib2R5IiwiYXBwZW5kIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjYXN0bGUiLCJDYXN0bGUiLCJkcmF3IiwiaSIsIngiLCJ5IiwidG93ZXIiLCJUb3dlciIsIm1heFgiLCJtYXhZIiwiZW5lbXlTaXplIiwiaGVhbHRoIiwiRW5lbXkiLCJ1cGRhdGUiLCJyYWRpdXMiLCJtYXhIZWFsdGgiLCJlbmVteUNvbG9ycyIsImJlZ2luUGF0aCIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIlBJIiwiYXJjIiwiZ2xvYmFsQWxwaGEiLCJmaWxsIiwiZm9udCIsImZpbGxUZXh0IiwiY2xlYXJSZWN0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRpY2siLCJiaW5kIiwicHJlcGVuZCIsImNsZWFySW50ZXJ2YWwiLCJkYW1hZ2UiLCJzcGVlZCIsInN0cm9rZVN0eWxlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJB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LFdBQUs5RCxHQUFMLENBQVNzQixTQUFULEdBQXFCLFNBQXJCOztBQUNBLHdCQUFLdEIsR0FBTCxFQUFTdUIsUUFBVCxxQ0FBcUIsS0FBS04sTUFBMUI7QUFDSDs7OzJCQUNNRCxLLEVBQU07QUFDVDtBQUNBK0MsYUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNBaEQsV0FBSyxDQUFDRyxhQUFOLElBQXVCLEtBQUt5QyxNQUE1QjtBQUNIOzs7Ozs7QUFFVTdCLG9FQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEJhdHRsZWZpZWxkIGZyb20gXCIuL3NjcmlwdHMvQmF0dGxlZmllbGRcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi9zY3JpcHRzL1RpbWVyXCI7XG4vLyBjb25zdCB0ZXN0T2JqID0ge1xuLy8gICBrZXkxOiBcImhpXCIsXG4vLyAgIGtleTI6IHtcbi8vICAgICBrZXkzOiBcIkhlbGxvXCIsXG4vLyAgIH0sXG4vLyB9O1xuXG4vLyBjb25zdCBncmVldGluZyA9IHRlc3RPYmo/LmtleTI/LmtleTMgfHwgdGVzdE9iai5rZXkxO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiY2VudGVyXCIpO1xuLy8gICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiKTtcbi8vICAgY2FyZC5pbm5lckhUTUwgPSBgPGgyPiR7Z3JlZXRpbmd9IFdvcmxkITwvaDI+YDtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FyZCk7XG4vLyAgIGNvbnN0IGltZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBpbWdDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIsIFwiaW1hZ2UtY2FyZFwiKTtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWdDYXJkKTtcbi8vIH0pO1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBiZiA9IG5ldyBCYXR0bGVmaWVsZCgyMCk7XG4gIGJmLmNyZWF0ZUNhbnZhcygpO1xuICBiZi5kcmF3QmF0dGxlZmllbGQoKTtcbiAgYmYuZHJhd0Nhc3RsZSgpO1xuICBiZi5jcmVhdGVUb3dlcnMoKTtcbiAgXG4gIGJmLmRyYXdUb3dlcnMoKTtcbiAgYmYuY3JlYXRlRW5lbWllcygpO1xuICBiZi5kcmF3RW5lbWllcygpO1xuICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuICBjb25zdCB0aW1lciA9IG5ldyBUaW1lcigwKTtcbiAgdGltZXIuY3JlYXRlKCk7XG4gIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBiZi5kcmF3QmF0dGxlZmllbGQoKTtcbiAgICBiZi5kcmF3Q2FzdGxlKCk7XG4gICAgT2JqZWN0LmtleXMoYmYudG93ZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBiZi5kcmF3VG93ZXJzKGtleSk7XG4gICAgfSlcbiAgICAgIGlmICh0aW1lci5yZW1haW5pbmcgPCAwICYmIE9iamVjdC5rZXlzKGJmLmVuZW1pZXMpLmxlbmd0aCkge1xuICAgICAgICB0aW1lci5jbGVhcigpO1xuICAgICAgICBiZi5hdHRhY2tFbmVtaWVzKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKGJmLmVuZW1pZXMpLmZvckVhY2goa2V5ID0+IHtcblxuICAgICAgICAgIGlmIChhbmltYXRpbmcpIGJmLnVwZGF0ZUVuZW1pZXMoa2V5KTtcbiAgICAgICAgICBcbiAgICAgICAgICBiZi5jbGVhckVuZW1pZXMoa2V5KTtcbiAgICAgICAgICBiZi5kcmF3RW5lbWllcyhrZXkpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIFxuICAgIC8vIGlmIChjYW52YXMuY29vcmRzWzBdICsgY2FudmFzLmNvb3Jkc1syXSA+IGNhbnZhcy5jYW52YXMud2lkdGgpXG4gICAgICAvLyBjYW52YXMucmV2ZXJzZUFuaW1hdGlvbigpO1xuICAgIC8vIGlmIChjYW52YXMuY29vcmRzWzBdIDwgMCkgY2FudmFzLnJldmVyc2VBbmltYXRpb24oKTtcbiAgfTtcbiAgXG5cbiAgXG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4gIFxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbWFpbik7XG5cbiIsImltcG9ydCBFbmVteSBmcm9tICcuL0VuZW15J1xuaW1wb3J0IENhc3RsZSBmcm9tICcuL0Nhc3RsZSdcbmltcG9ydCBUb3dlciBmcm9tICcuL1Rvd2VyJ1xuXG5jbGFzcyBCYXR0bGVmaWVsZCB7XG4gICAgY29uc3RydWN0b3IobnVtRW5lbWllcyl7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuMzM7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIC45O1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuYmF0dGxlZmllbGRDb2xvciA9IFwiIzNkZDExZlwiO1xuICAgICAgICB0aGlzLmNhc3RsZUNvb3JkcyA9IFt0aGlzLmNhbnZhcy53aWR0aCAqIC4wMywgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjkyLCB0aGlzLmNhbnZhcy53aWR0aCAqIC45NCwgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjA3XTtcbiAgICAgICAgdGhpcy5maXJzdFRvd2VyQ29vcmRzID0gW3RoaXMuY2FzdGxlQ29vcmRzWzBdICsgKHRoaXMuY2FudmFzLndpZHRoICogLjAyKSwgdGhpcy5jYXN0bGVDb29yZHNbMV0gKyB0aGlzLmNhc3RsZUNvb3Jkc1szXSwgdGhpcy5jYW52YXMud2lkdGggKiAuMTMzLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiAtLjA5XTtcbiAgICAgICAgdGhpcy5udW1Ub3dlcnMgPSA2O1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IDE7XG4gICAgICAgIHRoaXMubnVtRW5lbWllcyA9IG51bUVuZW1pZXM7XG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHt9O1xuICAgICAgICB0aGlzLnRvd2VycyA9IHt9O1xuICAgICB9XG4gICAgIGF0dGFja0VuZW1pZXMoKXtcbiAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICBjb25zdCByZW1haW5pbmdFbmVtaWVzID0gT2JqZWN0LmtleXModGhpcy5lbmVtaWVzKS5sZW5ndGg7XG4gICAgICAgICBjb25zdCBlbmVtaWVzQXJyID0gT2JqZWN0LmtleXModGhpcy5lbmVtaWVzKS5tYXAoa2V5ID0+IHRoaXMuZW5lbWllc1trZXldKTtcbiAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMudG93ZXJzKS5mb3JFYWNoKHRvd2VyS2V5ID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy50b3dlcnNbdG93ZXJLZXldLnRhcmdldCl7XG4gICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmVteUtleSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVuZW1pZXNBcnIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmVteSA9IGVuZW1pZXNBcnJbZW5lbXlLZXldO1xuICAgICAgICAgICAgICAgIGlmICgoZW5lbXkuY29vcmRzWzFdIDwgdGhpcy5jYW52YXMuaGVpZ2h0KSAmJiAoZW5lbXkuY29vcmRzWzFdID4gMCkpIHRoaXMudG93ZXJzW3Rvd2VyS2V5XS5hdHRhY2soZW5lbXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmVuZW1pZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAodGhpcy5lbmVtaWVzW2tleV0uY3VycmVudEhlYWx0aCA8PSAwKSBkZWxldGUgdGhpcy5lbmVtaWVzW2tleV07XG4gICAgICAgIH0pXG4gICAgIH1cbiAgICAgY3JlYXRlQ2FudmFzKCl7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgfVxuICAgICBkcmF3QmF0dGxlZmllbGQoKXtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmF0dGxlZmllbGRDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgIH1cbiAgICAgZHJhd0Nhc3RsZSgpe1xuICAgICAgICBjb25zdCBjYXN0bGUgPSBuZXcgQ2FzdGxlKHRoaXMuY3R4LCB0aGlzLmNhc3RsZUNvb3Jkcyk7XG4gICAgICAgIGNhc3RsZS5kcmF3KCk7XG4gICAgIH1cbiAgICAgY3JlYXRlVG93ZXJzKCl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Ub3dlcnM7IGkrKyl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB4ID0gdGhpcy5maXJzdFRvd2VyQ29vcmRzWzBdO1xuICAgICAgICAgICAgbGV0IHkgPSB0aGlzLmZpcnN0VG93ZXJDb29yZHNbMV07XG4gICAgICAgICAgICBsZXQgd2lkdGggPSB0aGlzLmZpcnN0VG93ZXJDb29yZHNbMl07XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5maXJzdFRvd2VyQ29vcmRzWzNdO1xuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHRoaXMuZmlyc3RUb3dlckNvb3JkcztcbiAgICAgICAgICAgIGxldCB0b3dlciA9IG5ldyBUb3dlcih0aGlzLmN0eCwgW3gseSx3aWR0aCxoZWlnaHRdKTtcbiAgICAgICAgICAgIHRoaXMudG93ZXJzW2ldID0gdG93ZXI7XG4gICAgICAgICAgICBjb29yZHNbMF0gKz0gdGhpcy5maXJzdFRvd2VyQ29vcmRzWzJdICsgKHRoaXMuY2FudmFzLndpZHRoICogLjAyKTtcbiAgICAgICAgfVxuICAgICB9XG4gICAgIGRyYXdUb3dlcnMoa2V5KXtcbiAgICAgICAgIFxuICAgICAgICBjb25zdCB0b3dlciA9IHRoaXMudG93ZXJzW2tleV07XG4gICAgICAgIGlmICghIXRvd2VyKSB0b3dlci5kcmF3KCk7XG4gICAgIH1cbiAgICBjcmVhdGVFbmVtaWVzKCl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1FbmVtaWVzOyBpKyspe1xuICAgICAgICAgICAgbGV0IGNvb3JkcztcbiAgICAgICAgICAgIGxldCBtYXhYID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgbGV0IG1heFkgPSAtKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQpOyAvLyBzZXQgc28gZW5lbWllcyBzcGF3biBhYm92ZVxuICAgICAgICAgICAgbGV0IGVuZW15U2l6ZSA9IDIwO1xuICAgICAgICAgICAgbGV0IGhlYWx0aCA9IHRoaXMuY3VycmVudExldmVsICogMTA7XG5cbiAgICAgICAgICAgIC8vIHNldCB4IHZhbHVlIG9uIGVubWllcyB0byBzcGF3biB3aXRoaW4gdGhlIGNhbnZhc1xuICAgICAgICAgICAgaWYgKCh0aGlzLmNhbnZhcy53aWR0aCAtIG1heFggPj0gMCkgJiYgdGhpcy5jYW52YXMud2lkdGggLSBtYXhYIDw9IGVuZW15U2l6ZSl7IC8vID4gbWF4IGxlbmd0aFxuICAgICAgICAgICAgICAgIG1heFggLT0gZW5lbXlTaXplO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggbWF4WCA8PSBlbmVteVNpemUpeyAvLyA8IG1heCBsZW5ndGhcbiAgICAgICAgICAgICAgICBtYXhYICs9IGVuZW15U2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldCB5IHZhbHVlIG9uIGVubWllcyB0byBzcGF3biB3aXRoaW4gdGhlIGNhbnZhc1xuICAgICAgICAgICAgaWYgKCh0aGlzLmNhbnZhcy5oZWlnaHQgKyBtYXhZID49IDApKXsgLy8gaGF2ZSBlbmVtaWVzIHNwYXduIG9mZnNjcmVlbiBmcm9tIHRoZSB0b3BcbiAgICAgICAgICAgICAgICBtYXhZIC09IGVuZW15U2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBlbmVteSA9IG5ldyBFbmVteSh0aGlzLmN0eCwgW21heFgsIG1heFldLCBlbmVteVNpemUsIGhlYWx0aCk7XG4gICAgICAgICAgICB0aGlzLmVuZW1pZXNbaV0gPSBlbmVteTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdFbmVtaWVzKGtleSl7XG4gICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbWllc1trZXldO1xuICAgICAgICBpZiAoISFlbmVteSAmJiAoZW5lbXkuY29vcmRzWzFdIDw9IHRoaXMuY2FzdGxlQ29vcmRzWzFdKSkgZW5lbXkuZHJhdygpO1xuICAgIH1cbiAgICBjbGVhckVuZW1pZXMoa2V5KXtcbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzW2tleV07XG4gICAgICAgIGVuZW15LmNsZWFyKCk7XG4gICAgICAgIGlmICgoZW5lbXkuY29vcmRzWzFdID49IHRoaXMuY2FzdGxlQ29vcmRzWzFdKSkgZGVsZXRlIHRoaXMuZW5lbWllc1trZXldO1xuXG4gICAgfVxuICAgIHVwZGF0ZUVuZW1pZXMoa2V5KXtcbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzW2tleV07XG4gICAgICAgIGlmIChlbmVteS5jb29yZHNbMV0gPD0gdGhpcy5jYXN0bGVDb29yZHNbMV0pIGVuZW15LnVwZGF0ZSgpOyBcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCYXR0bGVmaWVsZDsiLCJjbGFzcyBDYXN0bGUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzKXtcblxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgfVxuICAgIGRyYXcoKXtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZWVmMmVkXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhc3RsZTsiLCJjbGFzcyBFbmVteSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMsIHJhZGl1cywgaGVhbHRoKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gaGVhbHRoO1xuICAgICAgICB0aGlzLmN1cnJlbnRIZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgICAgICB0aGlzLmVuZW15Q29sb3JzID0gW1wiIzliZTVlOFwiLFwiI2U4MGMxZVwiLFwiIzdmNTNhM1wiLFwiI2ZmODcxZlwiLFwiI2ZmZmYwZlwiXTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgbGV0IHJhZGl1cyA9IDIwO1xuICAgICAgICBsZXQgeCA9IHRoaXMuY29vcmRzWzBdO1xuICAgICAgICBsZXQgeSA9IHRoaXMuY29vcmRzWzFdO1xuICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XG4gICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGguUEkgKiAyO1xuICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZW5lbXlDb2xvcnNbMF07XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gKHRoaXMuaGVhbHRoIC8gdGhpcy5tYXhIZWFsdGgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTZweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZjg3MWZcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLmN1cnJlbnRIZWFsdGgsIHgsIHkpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY29vcmRzWzFdICs9IDE7XG4gICAgfVxuICAgIGNsZWFyKCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLmNvb3Jkc1swXSx0aGlzLmNvb3Jkc1sxXSwgdGhpcy5tYXhYLCB0aGlzLm1heFkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5lbXkiLCJjbGFzcyBUaW1lciB7XG4gICAgY29uc3RydWN0b3IocmVtYWluaW5nKXtcbiAgICAgICAgdGhpcy5yZW1haW5pbmcgPSByZW1haW5pbmc7XG4gICAgICAgIHRoaXMudGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRoaXMudGltZXIuY2xhc3NMaXN0LmFkZCgndGltZXInKTtcbiAgICAgICAgdGhpcy50aW1lci5pbm5lclRleHQgPSB0aGlzLnJlbWFpbmluZztcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudGljay5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICB9XG4gICAgY3JlYXRlKCl7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZCh0aGlzLnRpbWVyKTtcbiAgICB9XG4gICAgdGljaygpe1xuICAgICAgICB0aGlzLnJlbWFpbmluZyAtPSAxO1xuICAgICAgICB0aGlzLnRpbWVyLmlubmVyVGV4dCA9IHRoaXMucmVtYWluaW5nO1xuICAgIH1cbiAgICBjbGVhcigpe1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLnRpbWVyLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiLCJjbGFzcyBUb3dlciB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IDE7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDA7XG5cbiAgICB9XG4gICAgZHJhdygpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIiNkNGQ5ZDJcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjYmRiZmJiXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICB9XG4gICAgYXR0YWNrKGVuZW15KXtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgY29uc29sZS5sb2coJ2hpJyk7XG4gICAgICAgIGVuZW15LmN1cnJlbnRIZWFsdGggLT0gdGhpcy5kYW1hZ2U7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVG93ZXIiXSwic291cmNlUm9vdCI6IiJ9
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
  var bf = new _scripts_Battlefield__WEBPACK_IMPORTED_MODULE_0__["default"]();
  bf.createCanvas();
  bf.drawBattlefield();
  bf.drawTowerContainer();
  bf.drawCastle();
  bf.createEnemies();
  bf.drawEnemies();
  var animating = true;
  var timer = new _scripts_Timer__WEBPACK_IMPORTED_MODULE_1__["default"](10);
  timer.create();

  var animation = function animation() {
    if (timer.remaining == 0) timer.clear();
    bf.clearEnemies();
    if (animating) bf.updateEnemies();
    bf.drawBattlefield();
    bf.drawTowerContainer();
    bf.drawCastle();
    bf.drawEnemies();
    window.requestAnimationFrame(animation); // if (canvas.coords[0] + canvas.coords[2] > canvas.canvas.width)
    // canvas.reverseAnimation();
    // if (canvas.coords[0] < 0) canvas.reverseAnimation();
  };

  window.requestAnimationFrame(animation); // debugger
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Battlefield = /*#__PURE__*/function () {
  function Battlefield(props) {
    _classCallCheck(this, Battlefield);

    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth * .33;
    this.canvas.height = window.innerHeight * .9;
    this.canvas.style.border = "1px solid black";
    this.ctx = this.canvas.getContext('2d');
    this.battlefieldColor = "#3dd11f"; //  this.towersContainerColor = "#464f44"
    //  this.towerContainerCoords = [this.canvas.width * .03, this.canvas.height * .85, this.canvas.width * .94, this.canvas.height * .13]

    this.castleColor = "#eef2ed";
    this.castleCoords = [this.canvas.width * .03, this.canvas.height * .92, this.canvas.width * .94, this.canvas.height * .07];
    this.numTowers = 6;
    this.enemies = [];
    this.numEnemies = 10;
  }

  _createClass(Battlefield, [{
    key: "createCanvas",
    value: function createCanvas() {
      document.body.append(this.canvas);
    }
  }, {
    key: "drawBattlefield",
    value: function drawBattlefield() {
      // debugger;
      this.ctx.fillStyle = this.battlefieldColor;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "drawTowerContainer",
    value: function drawTowerContainer() {//  debugger
      // this.ctx.fillStyle = this.towersContainerColor;
      // this.ctx.fillRect(...this.towerContainerCoords);
    }
  }, {
    key: "drawCastle",
    value: function drawCastle() {
      var _this$ctx;

      // draw castle base
      this.ctx.fillStyle = this.castleColor;

      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.castleCoords));

      var towerCoords = [this.castleCoords[0] + this.canvas.width * .02, this.castleCoords[1] + this.castleCoords[3], this.canvas.width * .133, this.canvas.height * -.09]; // draw castle towers

      this.ctx.strokeStyle = "#d4d9d2";
      this.ctx.fillStyle = "#bdbfbb"; // display towers

      for (var i = 0; i < this.numTowers; i++) {
        var _this$ctx2;

        (_this$ctx2 = this.ctx).fillRect.apply(_this$ctx2, towerCoords);

        towerCoords[0] += towerCoords[2] + this.canvas.width * .02;
      }
    }
  }, {
    key: "createEnemies",
    value: function createEnemies() {
      for (var i = 0; i < this.numEnemies; i++) {
        var coords = void 0;
        var maxX = Math.random() * this.canvas.width;
        var maxY = -(Math.random() * this.canvas.height); // set so enemies spawn above

        var enemySize = 20;

        if (this.canvas.width - maxX >= 0 && this.canvas.width - maxX <= enemySize) {
          // > max length
          maxX -= enemySize;
        } else if (maxX <= enemySize) {
          // < max length
          maxX += enemySize;
        }

        var enemy = new _Enemy__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, [maxX, maxY], enemySize);
        this.enemies.push(enemy);
      }
    }
  }, {
    key: "drawEnemies",
    value: function drawEnemies() {
      // draw enemy
      for (var i = 0; i < this.enemies.length; i++) {
        var enemy = this.enemies[i];
        enemy.draw();
      }
    }
  }, {
    key: "clearEnemies",
    value: function clearEnemies() {
      for (var i = 0; i < this.enemies.length; i++) {
        var enemy = this.enemies[i];
        enemy.clear();
      }
    }
  }, {
    key: "updateEnemies",
    value: function updateEnemies() {
      for (var i = 0; i < this.enemies.length; i++) {
        var enemy = this.enemies[i];
        enemy.update();
      }
    }
  }]);

  return Battlefield;
}();

/* harmony default export */ __webpack_exports__["default"] = (Battlefield);

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
      this.coords[1] += 1;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.ctx.clearRect(0, 0, this.maxX, this.maxY);
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
    this.timer.innerText = this.remaining;
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  _createClass(Timer, [{
    key: "create",
    value: function create() {
      document.body.append(this.timer);
    }
  }, {
    key: "tick",
    value: function tick() {
      debugger;
      console.log('hi');
      this.remaining -= 1;
      this.timer.innerText = this.remaining;
    }
  }, {
    key: "clear",
    value: function clear() {
      clearInterval(this.interval);
    }
  }]);

  return Timer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0JhdHRsZWZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1RpbWVyLmpzIl0sIm5hbWVzIjpbIm1haW4iLCJiZiIsIkJhdHRsZWZpZWxkIiwiY3JlYXRlQ2FudmFzIiwiZHJhd0JhdHRsZWZpZWxkIiwiZHJhd1Rvd2VyQ29udGFpbmVyIiwiZHJhd0Nhc3RsZSIsImNyZWF0ZUVuZW1pZXMiLCJkcmF3RW5lbWllcyIsImFuaW1hdGluZyIsInRpbWVyIiwiVGltZXIiLCJjcmVhdGUiLCJhbmltYXRpb24iLCJyZW1haW5pbmciLCJjbGVhciIsImNsZWFyRW5lbWllcyIsInVwZGF0ZUVuZW1pZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvcHMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInN0eWxlIiwiYm9yZGVyIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJhdHRsZWZpZWxkQ29sb3IiLCJjYXN0bGVDb2xvciIsImNhc3RsZUNvb3JkcyIsIm51bVRvd2VycyIsImVuZW1pZXMiLCJudW1FbmVtaWVzIiwiYm9keSIsImFwcGVuZCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidG93ZXJDb29yZHMiLCJzdHJva2VTdHlsZSIsImkiLCJjb29yZHMiLCJtYXhYIiwiTWF0aCIsInJhbmRvbSIsIm1heFkiLCJlbmVteVNpemUiLCJlbmVteSIsIkVuZW15IiwicHVzaCIsImxlbmd0aCIsImRyYXciLCJ1cGRhdGUiLCJyYWRpdXMiLCJlbmVteUNvbG9ycyIsImJlZ2luUGF0aCIsIngiLCJ5Iiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiUEkiLCJhcmMiLCJmaWxsIiwiY2xlYXJSZWN0IiwiaW5uZXJUZXh0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRpY2siLCJiaW5kIiwiY29uc29sZSIsImxvZyIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsTUFBTUMsRUFBRSxHQUFHLElBQUlDLDREQUFKLEVBQVg7QUFDQUQsSUFBRSxDQUFDRSxZQUFIO0FBQ0FGLElBQUUsQ0FBQ0csZUFBSDtBQUNBSCxJQUFFLENBQUNJLGtCQUFIO0FBQ0FKLElBQUUsQ0FBQ0ssVUFBSDtBQUNBTCxJQUFFLENBQUNNLGFBQUg7QUFDQU4sSUFBRSxDQUFDTyxXQUFIO0FBQ0EsTUFBSUMsU0FBUyxHQUFHLElBQWhCO0FBRUEsTUFBTUMsS0FBSyxHQUFHLElBQUlDLHNEQUFKLENBQVUsRUFBVixDQUFkO0FBQ0FELE9BQUssQ0FBQ0UsTUFBTjs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFFBQUlILEtBQUssQ0FBQ0ksU0FBTixJQUFtQixDQUF2QixFQUEwQkosS0FBSyxDQUFDSyxLQUFOO0FBQzFCZCxNQUFFLENBQUNlLFlBQUg7QUFDQSxRQUFJUCxTQUFKLEVBQWVSLEVBQUUsQ0FBQ2dCLGFBQUg7QUFDZmhCLE1BQUUsQ0FBQ0csZUFBSDtBQUNBSCxNQUFFLENBQUNJLGtCQUFIO0FBQ0FKLE1BQUUsQ0FBQ0ssVUFBSDtBQUNBTCxNQUFFLENBQUNPLFdBQUg7QUFDQVUsVUFBTSxDQUFDQyxxQkFBUCxDQUE2Qk4sU0FBN0IsRUFSc0IsQ0FTdEI7QUFDRTtBQUNGO0FBQ0QsR0FaRDs7QUFpQkFLLFFBQU0sQ0FBQ0MscUJBQVAsQ0FBNkJOLFNBQTdCLEVBN0JpQixDQStCakI7QUFDRCxDQWhDRDs7QUFrQ0FLLE1BQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDcEIsSUFBNUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7O0lBRU1FLFc7QUFDRix1QkFBWW1CLEtBQVosRUFBa0I7QUFBQTs7QUFDZCxTQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsU0FBS0YsTUFBTCxDQUFZRyxLQUFaLEdBQW9CUCxNQUFNLENBQUNRLFVBQVAsR0FBb0IsR0FBeEM7QUFDQSxTQUFLSixNQUFMLENBQVlLLE1BQVosR0FBcUJULE1BQU0sQ0FBQ1UsV0FBUCxHQUFxQixFQUExQztBQUNBLFNBQUtOLE1BQUwsQ0FBWU8sS0FBWixDQUFrQkMsTUFBbEIsR0FBMkIsaUJBQTNCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtULE1BQUwsQ0FBWVUsVUFBWixDQUF1QixJQUF2QixDQUFYO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsU0FBeEIsQ0FOYyxDQU9sQjtBQUNBOztBQUNJLFNBQUtDLFdBQUwsR0FBbUIsU0FBbkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLENBQUMsS0FBS2IsTUFBTCxDQUFZRyxLQUFaLEdBQW9CLEdBQXJCLEVBQTBCLEtBQUtILE1BQUwsQ0FBWUssTUFBWixHQUFxQixHQUEvQyxFQUFvRCxLQUFLTCxNQUFMLENBQVlHLEtBQVosR0FBb0IsR0FBeEUsRUFBNkUsS0FBS0gsTUFBTCxDQUFZSyxNQUFaLEdBQXFCLEdBQWxHLENBQXBCO0FBQ0EsU0FBS1MsU0FBTCxHQUFpQixDQUFqQjtBQUVBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNGOzs7O21DQUNhO0FBQ1ZmLGNBQVEsQ0FBQ2dCLElBQVQsQ0FBY0MsTUFBZCxDQUFxQixLQUFLbEIsTUFBMUI7QUFDSDs7O3NDQUNnQjtBQUNkO0FBQ0EsV0FBS1MsR0FBTCxDQUFTVSxTQUFULEdBQXFCLEtBQUtSLGdCQUExQjtBQUNBLFdBQUtGLEdBQUwsQ0FBU1csUUFBVCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixLQUFLcEIsTUFBTCxDQUFZRyxLQUFwQyxFQUEyQyxLQUFLSCxNQUFMLENBQVlLLE1BQXZEO0FBQ0Y7Ozt5Q0FDbUIsQ0FDakI7QUFDQTtBQUNBO0FBQ0Y7OztpQ0FDVztBQUFBOztBQUNSO0FBQ0QsV0FBS0ksR0FBTCxDQUFTVSxTQUFULEdBQXFCLEtBQUtQLFdBQTFCOztBQUNBLHdCQUFLSCxHQUFMLEVBQVNXLFFBQVQscUNBQXFCLEtBQUtQLFlBQTFCOztBQUVBLFVBQUlRLFdBQVcsR0FBRyxDQUFDLEtBQUtSLFlBQUwsQ0FBa0IsQ0FBbEIsSUFBd0IsS0FBS2IsTUFBTCxDQUFZRyxLQUFaLEdBQW9CLEdBQTdDLEVBQW1ELEtBQUtVLFlBQUwsQ0FBa0IsQ0FBbEIsSUFBdUIsS0FBS0EsWUFBTCxDQUFrQixDQUFsQixDQUExRSxFQUFnRyxLQUFLYixNQUFMLENBQVlHLEtBQVosR0FBb0IsSUFBcEgsRUFBMEgsS0FBS0gsTUFBTCxDQUFZSyxNQUFaLEdBQXFCLENBQUMsR0FBaEosQ0FBbEIsQ0FMUyxDQU9UOztBQUNBLFdBQUtJLEdBQUwsQ0FBU2EsV0FBVCxHQUF1QixTQUF2QjtBQUNBLFdBQUtiLEdBQUwsQ0FBU1UsU0FBVCxHQUFxQixTQUFyQixDQVRTLENBV1Q7O0FBQ0EsV0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtULFNBQXpCLEVBQW9DUyxDQUFDLEVBQXJDLEVBQXdDO0FBQUE7O0FBQ3BDLDJCQUFLZCxHQUFMLEVBQVNXLFFBQVQsbUJBQXFCQyxXQUFyQjs7QUFDQUEsbUJBQVcsQ0FBQyxDQUFELENBQVgsSUFBa0JBLFdBQVcsQ0FBQyxDQUFELENBQVgsR0FBa0IsS0FBS3JCLE1BQUwsQ0FBWUcsS0FBWixHQUFvQixHQUF4RDtBQUNIO0FBQ0g7OztvQ0FDYTtBQUNYLFdBQUssSUFBSW9CLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1AsVUFBekIsRUFBcUNPLENBQUMsRUFBdEMsRUFBeUM7QUFDckMsWUFBSUMsTUFBTSxTQUFWO0FBQ0EsWUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsS0FBSzNCLE1BQUwsQ0FBWUcsS0FBdkM7QUFDQSxZQUFJeUIsSUFBSSxHQUFHLEVBQUVGLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixLQUFLM0IsTUFBTCxDQUFZSyxNQUE5QixDQUFYLENBSHFDLENBR2E7O0FBQ2xELFlBQUl3QixTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsWUFBSyxLQUFLN0IsTUFBTCxDQUFZRyxLQUFaLEdBQW9Cc0IsSUFBcEIsSUFBNEIsQ0FBN0IsSUFBbUMsS0FBS3pCLE1BQUwsQ0FBWUcsS0FBWixHQUFvQnNCLElBQXBCLElBQTRCSSxTQUFuRSxFQUE2RTtBQUFFO0FBQzNFSixjQUFJLElBQUlJLFNBQVI7QUFDSCxTQUZELE1BRU8sSUFBS0osSUFBSSxJQUFJSSxTQUFiLEVBQXVCO0FBQUU7QUFDNUJKLGNBQUksSUFBSUksU0FBUjtBQUNIOztBQUNELFlBQUlDLEtBQUssR0FBRyxJQUFJQyw4Q0FBSixDQUFVLEtBQUt0QixHQUFmLEVBQW9CLENBQUNnQixJQUFELEVBQU9HLElBQVAsQ0FBcEIsRUFBa0NDLFNBQWxDLENBQVo7QUFDQSxhQUFLZCxPQUFMLENBQWFpQixJQUFiLENBQWtCRixLQUFsQjtBQUNIO0FBQ0o7OztrQ0FDWTtBQUVUO0FBQ0EsV0FBSyxJQUFJUCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtSLE9BQUwsQ0FBYWtCLE1BQWpDLEVBQXlDVixDQUFDLEVBQTFDLEVBQTZDO0FBQ3pDLFlBQUlPLEtBQUssR0FBRyxLQUFLZixPQUFMLENBQWFRLENBQWIsQ0FBWjtBQUNBTyxhQUFLLENBQUNJLElBQU47QUFDSDtBQUNKOzs7bUNBQ2E7QUFFVixXQUFLLElBQUlYLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1IsT0FBTCxDQUFha0IsTUFBakMsRUFBeUNWLENBQUMsRUFBMUMsRUFBNkM7QUFDekMsWUFBTU8sS0FBSyxHQUFHLEtBQUtmLE9BQUwsQ0FBYVEsQ0FBYixDQUFkO0FBQ0FPLGFBQUssQ0FBQ3JDLEtBQU47QUFDSDtBQUNKOzs7b0NBQ2M7QUFDWCxXQUFLLElBQUk4QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtSLE9BQUwsQ0FBYWtCLE1BQWpDLEVBQXlDVixDQUFDLEVBQTFDLEVBQTZDO0FBQ3pDLFlBQU1PLEtBQUssR0FBRyxLQUFLZixPQUFMLENBQWFRLENBQWIsQ0FBZDtBQUNBTyxhQUFLLENBQUNLLE1BQU47QUFDSDtBQUNKOzs7Ozs7QUFFVXZELDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0Rk1tRCxLO0FBQ0YsaUJBQVl0QixHQUFaLEVBQWlCZSxNQUFqQixFQUF5QlksTUFBekIsRUFBZ0M7QUFBQTs7QUFDNUIsU0FBSzNCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtlLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUthLFdBQUwsR0FBbUIsQ0FBQyxTQUFELEVBQVcsU0FBWCxFQUFxQixTQUFyQixFQUErQixTQUEvQixFQUF5QyxTQUF6QyxDQUFuQjtBQUNBLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNIOzs7OzJCQUVLO0FBQ0Y7QUFFQSxXQUFLM0IsR0FBTCxDQUFTNkIsU0FBVDtBQUNBLFVBQUlGLE1BQU0sR0FBRyxFQUFiO0FBR0EsVUFBSUcsQ0FBQyxHQUFHLEtBQUtmLE1BQUwsQ0FBWSxDQUFaLENBQVI7QUFDQSxVQUFJZ0IsQ0FBQyxHQUFHLEtBQUtoQixNQUFMLENBQVksQ0FBWixDQUFSO0FBQ0EsVUFBSWlCLFVBQVUsR0FBRyxDQUFqQjtBQUNBLFVBQUlDLFFBQVEsR0FBR2hCLElBQUksQ0FBQ2lCLEVBQUwsR0FBVSxDQUF6QjtBQUNBLFdBQUtsQyxHQUFMLENBQVNtQyxHQUFULENBQWFMLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CSixNQUFuQixFQUEyQkssVUFBM0IsRUFBdUNDLFFBQXZDO0FBQ0EsV0FBS2pDLEdBQUwsQ0FBU1UsU0FBVCxHQUFxQixLQUFLa0IsV0FBTCxDQUFpQixDQUFqQixDQUFyQjtBQUNBLFdBQUs1QixHQUFMLENBQVNvQyxJQUFUO0FBQ0g7Ozs2QkFDUTtBQUNMLFdBQUtyQixNQUFMLENBQVksQ0FBWixLQUFrQixDQUFsQjtBQUNIOzs7NEJBQ007QUFFSCxXQUFLZixHQUFMLENBQVNxQyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUtyQixJQUE5QixFQUFvQyxLQUFLRyxJQUF6QztBQUNIOzs7Ozs7QUFHVUcsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hDTTFDLEs7QUFDRixpQkFBWUcsU0FBWixFQUFzQjtBQUFBOztBQUNsQixTQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtKLEtBQUwsR0FBYWEsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWI7QUFDQSxTQUFLZCxLQUFMLENBQVcyRCxTQUFYLEdBQXVCLEtBQUt2RCxTQUE1QjtBQUNBLFNBQUt3RCxRQUFMLEdBQWdCQyxXQUFXLENBQUMsS0FBS0MsSUFBTCxDQUFVQyxJQUFWLENBQWUsSUFBZixDQUFELEVBQXVCLElBQXZCLENBQTNCO0FBQ0g7Ozs7NkJBQ087QUFDSmxELGNBQVEsQ0FBQ2dCLElBQVQsQ0FBY0MsTUFBZCxDQUFxQixLQUFLOUIsS0FBMUI7QUFDSDs7OzJCQUNLO0FBQ0Y7QUFDQWdFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDQSxXQUFLN0QsU0FBTCxJQUFrQixDQUFsQjtBQUNBLFdBQUtKLEtBQUwsQ0FBVzJELFNBQVgsR0FBdUIsS0FBS3ZELFNBQTVCO0FBQ0g7Ozs0QkFDTTtBQUNIOEQsbUJBQWEsQ0FBQyxLQUFLTixRQUFOLENBQWI7QUFDSDs7Ozs7O0FBR1UzRCxvRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBCYXR0bGVmaWVsZCBmcm9tIFwiLi9zY3JpcHRzL0JhdHRsZWZpZWxkXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vc2NyaXB0cy9UaW1lclwiO1xuLy8gY29uc3QgdGVzdE9iaiA9IHtcbi8vICAga2V5MTogXCJoaVwiLFxuLy8gICBrZXkyOiB7XG4vLyAgICAga2V5MzogXCJIZWxsb1wiLFxuLy8gICB9LFxuLy8gfTtcblxuLy8gY29uc3QgZ3JlZXRpbmcgPSB0ZXN0T2JqPy5rZXkyPy5rZXkzIHx8IHRlc3RPYmoua2V5MTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImNlbnRlclwiKTtcbi8vICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIik7XG4vLyAgIGNhcmQuaW5uZXJIVE1MID0gYDxoMj4ke2dyZWV0aW5nfSBXb3JsZCE8L2gyPmA7XG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNhcmQpO1xuLy8gICBjb25zdCBpbWdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgaW1nQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiLCBcImltYWdlLWNhcmRcIik7XG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nQ2FyZCk7XG4vLyB9KTtcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgY29uc3QgYmYgPSBuZXcgQmF0dGxlZmllbGQoKTtcbiAgYmYuY3JlYXRlQ2FudmFzKCk7XG4gIGJmLmRyYXdCYXR0bGVmaWVsZCgpO1xuICBiZi5kcmF3VG93ZXJDb250YWluZXIoKTtcbiAgYmYuZHJhd0Nhc3RsZSgpO1xuICBiZi5jcmVhdGVFbmVtaWVzKCk7XG4gIGJmLmRyYXdFbmVtaWVzKCk7XG4gIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuXG4gIGNvbnN0IHRpbWVyID0gbmV3IFRpbWVyKDEwKTtcbiAgdGltZXIuY3JlYXRlKCk7XG4gIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBpZiAodGltZXIucmVtYWluaW5nID09IDApIHRpbWVyLmNsZWFyKCk7XG4gICAgYmYuY2xlYXJFbmVtaWVzKCk7XG4gICAgaWYgKGFuaW1hdGluZykgYmYudXBkYXRlRW5lbWllcygpO1xuICAgIGJmLmRyYXdCYXR0bGVmaWVsZCgpO1xuICAgIGJmLmRyYXdUb3dlckNvbnRhaW5lcigpO1xuICAgIGJmLmRyYXdDYXN0bGUoKTtcbiAgICBiZi5kcmF3RW5lbWllcygpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAvLyBpZiAoY2FudmFzLmNvb3Jkc1swXSArIGNhbnZhcy5jb29yZHNbMl0gPiBjYW52YXMuY2FudmFzLndpZHRoKVxuICAgICAgLy8gY2FudmFzLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICAvLyBpZiAoY2FudmFzLmNvb3Jkc1swXSA8IDApIGNhbnZhcy5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gIH07XG4gIFxuXG4gIFxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICAvLyBkZWJ1Z2dlclxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbWFpbik7XG5cbiIsImltcG9ydCBFbmVteSBmcm9tICcuL0VuZW15J1xuXG5jbGFzcyBCYXR0bGVmaWVsZCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjMzO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAuOTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmJhdHRsZWZpZWxkQ29sb3IgPSBcIiMzZGQxMWZcIlxuICAgIC8vICB0aGlzLnRvd2Vyc0NvbnRhaW5lckNvbG9yID0gXCIjNDY0ZjQ0XCJcbiAgICAvLyAgdGhpcy50b3dlckNvbnRhaW5lckNvb3JkcyA9IFt0aGlzLmNhbnZhcy53aWR0aCAqIC4wMywgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjg1LCB0aGlzLmNhbnZhcy53aWR0aCAqIC45NCwgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjEzXVxuICAgICAgICB0aGlzLmNhc3RsZUNvbG9yID0gXCIjZWVmMmVkXCJcbiAgICAgICAgdGhpcy5jYXN0bGVDb29yZHMgPSBbdGhpcy5jYW52YXMud2lkdGggKiAuMDMsIHRoaXMuY2FudmFzLmhlaWdodCAqIC45MiwgdGhpcy5jYW52YXMud2lkdGggKiAuOTQsIHRoaXMuY2FudmFzLmhlaWdodCAqIC4wN11cbiAgICAgICAgdGhpcy5udW1Ub3dlcnMgPSA2O1xuXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xuICAgICAgICB0aGlzLm51bUVuZW1pZXMgPSAxMDtcbiAgICAgfVxuICAgICBjcmVhdGVDYW52YXMoKXtcbiAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgfVxuICAgICBkcmF3QmF0dGxlZmllbGQoKXtcbiAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmF0dGxlZmllbGRDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgIH1cbiAgICAgZHJhd1Rvd2VyQ29udGFpbmVyKCl7XG4gICAgICAgIC8vICBkZWJ1Z2dlclxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnRvd2Vyc0NvbnRhaW5lckNvbG9yO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLnRvd2VyQ29udGFpbmVyQ29vcmRzKTtcbiAgICAgfVxuICAgICBkcmF3Q2FzdGxlKCl7XG4gICAgICAgICAvLyBkcmF3IGNhc3RsZSBiYXNlXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY2FzdGxlQ29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY2FzdGxlQ29vcmRzKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0b3dlckNvb3JkcyA9IFt0aGlzLmNhc3RsZUNvb3Jkc1swXSArICh0aGlzLmNhbnZhcy53aWR0aCAqIC4wMiksIHRoaXMuY2FzdGxlQ29vcmRzWzFdICsgdGhpcy5jYXN0bGVDb29yZHNbM10sIHRoaXMuY2FudmFzLndpZHRoICogLjEzMywgdGhpcy5jYW52YXMuaGVpZ2h0ICogLS4wOV1cblxuICAgICAgICAvLyBkcmF3IGNhc3RsZSB0b3dlcnNcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIiNkNGQ5ZDJcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjYmRiZmJiXCI7XG5cbiAgICAgICAgLy8gZGlzcGxheSB0b3dlcnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRvd2VyczsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRvd2VyQ29vcmRzKTtcbiAgICAgICAgICAgIHRvd2VyQ29vcmRzWzBdICs9IHRvd2VyQ29vcmRzWzJdICsgKHRoaXMuY2FudmFzLndpZHRoICogLjAyKTtcbiAgICAgICAgfVxuICAgICB9XG4gICAgY3JlYXRlRW5lbWllcygpe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtRW5lbWllczsgaSsrKXtcbiAgICAgICAgICAgIGxldCBjb29yZHM7XG4gICAgICAgICAgICBsZXQgbWF4WCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIGxldCBtYXhZID0gLShNYXRoLnJhbmRvbSgpICogdGhpcy5jYW52YXMuaGVpZ2h0KTsgLy8gc2V0IHNvIGVuZW1pZXMgc3Bhd24gYWJvdmVcbiAgICAgICAgICAgIGxldCBlbmVteVNpemUgPSAyMDtcbiAgICAgICAgICAgIGlmICgodGhpcy5jYW52YXMud2lkdGggLSBtYXhYID49IDApICYmIHRoaXMuY2FudmFzLndpZHRoIC0gbWF4WCA8PSBlbmVteVNpemUpeyAvLyA+IG1heCBsZW5ndGhcbiAgICAgICAgICAgICAgICBtYXhYIC09IGVuZW15U2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIG1heFggPD0gZW5lbXlTaXplKXsgLy8gPCBtYXggbGVuZ3RoXG4gICAgICAgICAgICAgICAgbWF4WCArPSBlbmVteVNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZW5lbXkgPSBuZXcgRW5lbXkodGhpcy5jdHgsIFttYXhYLCBtYXhZXSwgZW5lbXlTaXplKTtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKGVuZW15KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3RW5lbWllcygpe1xuICAgICAgXG4gICAgICAgIC8vIGRyYXcgZW5lbXlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW1pZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzW2ldO1xuICAgICAgICAgICAgZW5lbXkuZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFyRW5lbWllcygpe1xuICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbWllcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBlbmVteSA9IHRoaXMuZW5lbWllc1tpXTtcbiAgICAgICAgICAgIGVuZW15LmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlRW5lbWllcygpe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbWllcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBlbmVteSA9IHRoaXMuZW5lbWllc1tpXTtcbiAgICAgICAgICAgIGVuZW15LnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmF0dGxlZmllbGQ7IiwiY2xhc3MgRW5lbXkge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCByYWRpdXMpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMuZW5lbXlDb2xvcnMgPSBbXCIjOWJlNWU4XCIsXCIjZTgwYzFlXCIsXCIjN2Y1M2EzXCIsXCIjZmY4NzFmXCIsXCIjZmZmZjBmXCJdO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIC8vIGRyYXcgZW5lbXlcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBsZXQgcmFkaXVzID0gMjA7XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICBsZXQgeCA9IHRoaXMuY29vcmRzWzBdO1xuICAgICAgICBsZXQgeSA9IHRoaXMuY29vcmRzWzFdO1xuICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XG4gICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGguUEkgKiAyO1xuICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZW5lbXlDb2xvcnNbMF07XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNvb3Jkc1sxXSArPSAxO1xuICAgIH1cbiAgICBjbGVhcigpe1xuICAgICBcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMubWF4WCwgdGhpcy5tYXhZKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZW15IiwiY2xhc3MgVGltZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlbWFpbmluZyl7XG4gICAgICAgIHRoaXMucmVtYWluaW5nID0gcmVtYWluaW5nO1xuICAgICAgICB0aGlzLnRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aGlzLnRpbWVyLmlubmVyVGV4dCA9IHRoaXMucmVtYWluaW5nO1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLmJpbmQodGhpcyksIDEwMDApO1xuICAgIH1cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy50aW1lcik7XG4gICAgfVxuICAgIHRpY2soKXtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgY29uc29sZS5sb2coJ2hpJyk7XG4gICAgICAgIHRoaXMucmVtYWluaW5nIC09IDE7XG4gICAgICAgIHRoaXMudGltZXIuaW5uZXJUZXh0ID0gdGhpcy5yZW1haW5pbmc7XG4gICAgfVxuICAgIGNsZWFyKCl7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiXSwic291cmNlUm9vdCI6IiJ9
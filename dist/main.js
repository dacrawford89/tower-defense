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
  var timer = new _scripts_Timer__WEBPACK_IMPORTED_MODULE_1__["default"](3);
  timer.create();

  var animation = function animation() {
    if (timer.remaining == 0) {
      timer.clear();
      bf.clearEnemies();
      if (animating) bf.updateEnemies();
      bf.drawBattlefield();
      bf.drawTowerContainer();
      bf.drawCastle();
      bf.drawEnemies();
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0JhdHRsZWZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1RpbWVyLmpzIl0sIm5hbWVzIjpbIm1haW4iLCJiZiIsIkJhdHRsZWZpZWxkIiwiY3JlYXRlQ2FudmFzIiwiZHJhd0JhdHRsZWZpZWxkIiwiZHJhd1Rvd2VyQ29udGFpbmVyIiwiZHJhd0Nhc3RsZSIsImNyZWF0ZUVuZW1pZXMiLCJkcmF3RW5lbWllcyIsImFuaW1hdGluZyIsInRpbWVyIiwiVGltZXIiLCJjcmVhdGUiLCJhbmltYXRpb24iLCJyZW1haW5pbmciLCJjbGVhciIsImNsZWFyRW5lbWllcyIsInVwZGF0ZUVuZW1pZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvcHMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInN0eWxlIiwiYm9yZGVyIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJhdHRsZWZpZWxkQ29sb3IiLCJjYXN0bGVDb2xvciIsImNhc3RsZUNvb3JkcyIsIm51bVRvd2VycyIsImVuZW1pZXMiLCJudW1FbmVtaWVzIiwiYm9keSIsImFwcGVuZCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidG93ZXJDb29yZHMiLCJzdHJva2VTdHlsZSIsImkiLCJjb29yZHMiLCJtYXhYIiwiTWF0aCIsInJhbmRvbSIsIm1heFkiLCJlbmVteVNpemUiLCJlbmVteSIsIkVuZW15IiwicHVzaCIsImxlbmd0aCIsImRyYXciLCJ1cGRhdGUiLCJyYWRpdXMiLCJlbmVteUNvbG9ycyIsImJlZ2luUGF0aCIsIngiLCJ5Iiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiUEkiLCJhcmMiLCJmaWxsIiwiY2xlYXJSZWN0IiwiaW5uZXJUZXh0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRpY2siLCJiaW5kIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixNQUFNQyxFQUFFLEdBQUcsSUFBSUMsNERBQUosRUFBWDtBQUNBRCxJQUFFLENBQUNFLFlBQUg7QUFDQUYsSUFBRSxDQUFDRyxlQUFIO0FBQ0FILElBQUUsQ0FBQ0ksa0JBQUg7QUFDQUosSUFBRSxDQUFDSyxVQUFIO0FB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QUFMLEdBQWFhLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0EsU0FBS2QsS0FBTCxDQUFXMkQsU0FBWCxHQUF1QixLQUFLdkQsU0FBNUI7QUFDQSxTQUFLd0QsUUFBTCxHQUFnQkMsV0FBVyxDQUFDLEtBQUtDLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBRCxFQUF1QixJQUF2QixDQUEzQjtBQUNIOzs7OzZCQUNPO0FBQ0psRCxjQUFRLENBQUNnQixJQUFULENBQWNDLE1BQWQsQ0FBcUIsS0FBSzlCLEtBQTFCO0FBQ0g7OzsyQkFDSztBQUNGLFdBQUtJLFNBQUwsSUFBa0IsQ0FBbEI7QUFDQSxXQUFLSixLQUFMLENBQVcyRCxTQUFYLEdBQXVCLEtBQUt2RCxTQUE1QjtBQUNIOzs7NEJBQ007QUFDSDRELG1CQUFhLENBQUMsS0FBS0osUUFBTixDQUFiO0FBQ0g7Ozs7OztBQUdVM0Qsb0VBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQmF0dGxlZmllbGQgZnJvbSBcIi4vc2NyaXB0cy9CYXR0bGVmaWVsZFwiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuL3NjcmlwdHMvVGltZXJcIjtcbi8vIGNvbnN0IHRlc3RPYmogPSB7XG4vLyAgIGtleTE6IFwiaGlcIixcbi8vICAga2V5Mjoge1xuLy8gICAgIGtleTM6IFwiSGVsbG9cIixcbi8vICAgfSxcbi8vIH07XG5cbi8vIGNvbnN0IGdyZWV0aW5nID0gdGVzdE9iaj8ua2V5Mj8ua2V5MyB8fCB0ZXN0T2JqLmtleTE7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJcIik7XG4vLyAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIpO1xuLy8gICBjYXJkLmlubmVySFRNTCA9IGA8aDI+JHtncmVldGluZ30gV29ybGQhPC9oMj5gO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcbi8vICAgY29uc3QgaW1nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGltZ0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIiwgXCJpbWFnZS1jYXJkXCIpO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ0NhcmQpO1xuLy8gfSk7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IGJmID0gbmV3IEJhdHRsZWZpZWxkKCk7XG4gIGJmLmNyZWF0ZUNhbnZhcygpO1xuICBiZi5kcmF3QmF0dGxlZmllbGQoKTtcbiAgYmYuZHJhd1Rvd2VyQ29udGFpbmVyKCk7XG4gIGJmLmRyYXdDYXN0bGUoKTtcbiAgYmYuY3JlYXRlRW5lbWllcygpO1xuICBiZi5kcmF3RW5lbWllcygpO1xuICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuICBjb25zdCB0aW1lciA9IG5ldyBUaW1lcigzKTtcbiAgdGltZXIuY3JlYXRlKCk7XG4gIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgIGlmICh0aW1lci5yZW1haW5pbmcgPT0gMCkge1xuICAgICAgICB0aW1lci5jbGVhcigpO1xuICAgICAgICBiZi5jbGVhckVuZW1pZXMoKTtcbiAgICAgICAgaWYgKGFuaW1hdGluZykgYmYudXBkYXRlRW5lbWllcygpO1xuICAgICAgICBiZi5kcmF3QmF0dGxlZmllbGQoKTtcbiAgICAgICAgYmYuZHJhd1Rvd2VyQ29udGFpbmVyKCk7XG4gICAgICAgIGJmLmRyYXdDYXN0bGUoKTtcbiAgICAgICAgYmYuZHJhd0VuZW1pZXMoKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICBcbiAgICAvLyBpZiAoY2FudmFzLmNvb3Jkc1swXSArIGNhbnZhcy5jb29yZHNbMl0gPiBjYW52YXMuY2FudmFzLndpZHRoKVxuICAgICAgLy8gY2FudmFzLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICAvLyBpZiAoY2FudmFzLmNvb3Jkc1swXSA8IDApIGNhbnZhcy5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gIH07XG4gIFxuXG4gIFxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICAvLyBkZWJ1Z2dlclxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbWFpbik7XG5cbiIsImltcG9ydCBFbmVteSBmcm9tICcuL0VuZW15J1xuXG5jbGFzcyBCYXR0bGVmaWVsZCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjMzO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAuOTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmJhdHRsZWZpZWxkQ29sb3IgPSBcIiMzZGQxMWZcIlxuICAgIC8vICB0aGlzLnRvd2Vyc0NvbnRhaW5lckNvbG9yID0gXCIjNDY0ZjQ0XCJcbiAgICAvLyAgdGhpcy50b3dlckNvbnRhaW5lckNvb3JkcyA9IFt0aGlzLmNhbnZhcy53aWR0aCAqIC4wMywgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjg1LCB0aGlzLmNhbnZhcy53aWR0aCAqIC45NCwgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjEzXVxuICAgICAgICB0aGlzLmNhc3RsZUNvbG9yID0gXCIjZWVmMmVkXCJcbiAgICAgICAgdGhpcy5jYXN0bGVDb29yZHMgPSBbdGhpcy5jYW52YXMud2lkdGggKiAuMDMsIHRoaXMuY2FudmFzLmhlaWdodCAqIC45MiwgdGhpcy5jYW52YXMud2lkdGggKiAuOTQsIHRoaXMuY2FudmFzLmhlaWdodCAqIC4wN11cbiAgICAgICAgdGhpcy5udW1Ub3dlcnMgPSA2O1xuXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xuICAgICAgICB0aGlzLm51bUVuZW1pZXMgPSAxMDtcbiAgICAgfVxuICAgICBjcmVhdGVDYW52YXMoKXtcbiAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgfVxuICAgICBkcmF3QmF0dGxlZmllbGQoKXtcbiAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmF0dGxlZmllbGRDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgIH1cbiAgICAgZHJhd1Rvd2VyQ29udGFpbmVyKCl7XG4gICAgICAgIC8vICBkZWJ1Z2dlclxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnRvd2Vyc0NvbnRhaW5lckNvbG9yO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLnRvd2VyQ29udGFpbmVyQ29vcmRzKTtcbiAgICAgfVxuICAgICBkcmF3Q2FzdGxlKCl7XG4gICAgICAgICAvLyBkcmF3IGNhc3RsZSBiYXNlXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY2FzdGxlQ29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY2FzdGxlQ29vcmRzKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0b3dlckNvb3JkcyA9IFt0aGlzLmNhc3RsZUNvb3Jkc1swXSArICh0aGlzLmNhbnZhcy53aWR0aCAqIC4wMiksIHRoaXMuY2FzdGxlQ29vcmRzWzFdICsgdGhpcy5jYXN0bGVDb29yZHNbM10sIHRoaXMuY2FudmFzLndpZHRoICogLjEzMywgdGhpcy5jYW52YXMuaGVpZ2h0ICogLS4wOV1cblxuICAgICAgICAvLyBkcmF3IGNhc3RsZSB0b3dlcnNcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIiNkNGQ5ZDJcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjYmRiZmJiXCI7XG5cbiAgICAgICAgLy8gZGlzcGxheSB0b3dlcnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRvd2VyczsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRvd2VyQ29vcmRzKTtcbiAgICAgICAgICAgIHRvd2VyQ29vcmRzWzBdICs9IHRvd2VyQ29vcmRzWzJdICsgKHRoaXMuY2FudmFzLndpZHRoICogLjAyKTtcbiAgICAgICAgfVxuICAgICB9XG4gICAgY3JlYXRlRW5lbWllcygpe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtRW5lbWllczsgaSsrKXtcbiAgICAgICAgICAgIGxldCBjb29yZHM7XG4gICAgICAgICAgICBsZXQgbWF4WCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIGxldCBtYXhZID0gLShNYXRoLnJhbmRvbSgpICogdGhpcy5jYW52YXMuaGVpZ2h0KTsgLy8gc2V0IHNvIGVuZW1pZXMgc3Bhd24gYWJvdmVcbiAgICAgICAgICAgIGxldCBlbmVteVNpemUgPSAyMDtcbiAgICAgICAgICAgIGlmICgodGhpcy5jYW52YXMud2lkdGggLSBtYXhYID49IDApICYmIHRoaXMuY2FudmFzLndpZHRoIC0gbWF4WCA8PSBlbmVteVNpemUpeyAvLyA+IG1heCBsZW5ndGhcbiAgICAgICAgICAgICAgICBtYXhYIC09IGVuZW15U2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIG1heFggPD0gZW5lbXlTaXplKXsgLy8gPCBtYXggbGVuZ3RoXG4gICAgICAgICAgICAgICAgbWF4WCArPSBlbmVteVNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZW5lbXkgPSBuZXcgRW5lbXkodGhpcy5jdHgsIFttYXhYLCBtYXhZXSwgZW5lbXlTaXplKTtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKGVuZW15KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3RW5lbWllcygpe1xuICAgICAgXG4gICAgICAgIC8vIGRyYXcgZW5lbXlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW1pZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzW2ldO1xuICAgICAgICAgICAgZW5lbXkuZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFyRW5lbWllcygpe1xuICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbWllcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBlbmVteSA9IHRoaXMuZW5lbWllc1tpXTtcbiAgICAgICAgICAgIGVuZW15LmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlRW5lbWllcygpe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbWllcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBlbmVteSA9IHRoaXMuZW5lbWllc1tpXTtcbiAgICAgICAgICAgIGVuZW15LnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmF0dGxlZmllbGQ7IiwiY2xhc3MgRW5lbXkge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCByYWRpdXMpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMuZW5lbXlDb2xvcnMgPSBbXCIjOWJlNWU4XCIsXCIjZTgwYzFlXCIsXCIjN2Y1M2EzXCIsXCIjZmY4NzFmXCIsXCIjZmZmZjBmXCJdO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIC8vIGRyYXcgZW5lbXlcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBsZXQgcmFkaXVzID0gMjA7XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICBsZXQgeCA9IHRoaXMuY29vcmRzWzBdO1xuICAgICAgICBsZXQgeSA9IHRoaXMuY29vcmRzWzFdO1xuICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XG4gICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGguUEkgKiAyO1xuICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZW5lbXlDb2xvcnNbMF07XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNvb3Jkc1sxXSArPSAxO1xuICAgIH1cbiAgICBjbGVhcigpe1xuICAgICBcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMubWF4WCwgdGhpcy5tYXhZKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZW15IiwiY2xhc3MgVGltZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlbWFpbmluZyl7XG4gICAgICAgIHRoaXMucmVtYWluaW5nID0gcmVtYWluaW5nO1xuICAgICAgICB0aGlzLnRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aGlzLnRpbWVyLmlubmVyVGV4dCA9IHRoaXMucmVtYWluaW5nO1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLmJpbmQodGhpcyksIDEwMDApO1xuICAgIH1cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy50aW1lcik7XG4gICAgfVxuICAgIHRpY2soKXtcbiAgICAgICAgdGhpcy5yZW1haW5pbmcgLT0gMTtcbiAgICAgICAgdGhpcy50aW1lci5pbm5lclRleHQgPSB0aGlzLnJlbWFpbmluZztcbiAgICB9XG4gICAgY2xlYXIoKXtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyJdLCJzb3VyY2VSb290IjoiIn0=
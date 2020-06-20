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
  bf.drawTowerContainer();
  bf.drawCastle();
  bf.createEnemies();
  bf.drawEnemies();
  var animating = true;
  var timer = new _scripts_Timer__WEBPACK_IMPORTED_MODULE_1__["default"](0);
  timer.create();

  var animation = function animation() {
    if (timer.remaining < 0) {
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
  function Battlefield(numEnemies) {
    _classCallCheck(this, Battlefield);

    debugger;
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
    this.numEnemies = numEnemies;
    this.enemies = {};
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
    key: "destroyEnemy",
    value: function destroyEnemy(enemy) {
      delete this.enemies[enemy];
    }
  }, {
    key: "drawEnemies",
    value: function drawEnemies() {
      // draw enemy
      for (var i = 0; i < Object.keys(this.enemies).length; i++) {
        var enemy = this.enemies[i];
        debugger;
        if (enemy.coords[1] <= this.castleCoords[1]) enemy.draw();
      }
    }
  }, {
    key: "clearEnemies",
    value: function clearEnemies() {
      for (var i = 0; i < Object.keys(this.enemies).length; i++) {
        var enemy = this.enemies[i];
        enemy.clear();
      }
    }
  }, {
    key: "updateEnemies",
    value: function updateEnemies() {
      // debugger
      for (var i = 0; i < Object.keys(this.enemies).length; i++) {
        var enemy = this.enemies[i];

        if (enemy.coords[1] <= this.castleCoords[1]) {
          enemy.update();
        }
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0JhdHRsZWZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1RpbWVyLmpzIl0sIm5hbWVzIjpbIm1haW4iLCJiZiIsIkJhdHRsZWZpZWxkIiwiY3JlYXRlQ2FudmFzIiwiZHJhd0JhdHRsZWZpZWxkIiwiZHJhd1Rvd2VyQ29udGFpbmVyIiwiZHJhd0Nhc3RsZSIsImNyZWF0ZUVuZW1pZXMiLCJkcmF3RW5lbWllcyIsImFuaW1hdGluZyIsInRpbWVyIiwiVGltZXIiLCJjcmVhdGUiLCJhbmltYXRpb24iLCJyZW1haW5pbmciLCJjbGVhciIsImNsZWFyRW5lbWllcyIsInVwZGF0ZUVuZW1pZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibnVtRW5lbWllcyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJib3JkZXIiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmF0dGxlZmllbGRDb2xvciIsImNhc3RsZUNvbG9yIiwiY2FzdGxlQ29vcmRzIiwibnVtVG93ZXJzIiwiZW5lbWllcyIsImJvZHkiLCJhcHBlbmQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInRvd2VyQ29vcmRzIiwic3Ryb2tlU3R5bGUiLCJpIiwiY29vcmRzIiwibWF4WCIsIk1hdGgiLCJyYW5kb20iLCJtYXhZIiwiZW5lbXlTaXplIiwiZW5lbXkiLCJFbmVteSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJkcmF3IiwidXBkYXRlIiwicmFkaXVzIiwiZW5lbXlDb2xvcnMiLCJiZWdpblBhdGgiLCJ4IiwieSIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIlBJIiwiYXJjIiwiZmlsbCIsImNsZWFyUmVjdCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ0aWNrIiwiYmluZCIsInByZXBlbmQiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLE1BQU1DLEVBQUUsR0FBRyxJQUFJQyw0REFBSixDQUFnQixFQUFoQixDQUFYO0FBQ0FELElBQUUsQ0FBQ0UsWUFBSDtBQUNBRixJQUFFLENBQUNHLGVBQUg7QUFDQUgs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ekQsU0FBNUI7QUFDSDs7OzRCQUNNO0FBQ0grRCxtQkFBYSxDQUFDLEtBQUtMLFFBQU4sQ0FBYjtBQUNBLFdBQUs5RCxLQUFMLENBQVc2RCxTQUFYLEdBQXVCLEVBQXZCO0FBQ0g7Ozs7OztBQUdVNUQsb0VBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQmF0dGxlZmllbGQgZnJvbSBcIi4vc2NyaXB0cy9CYXR0bGVmaWVsZFwiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuL3NjcmlwdHMvVGltZXJcIjtcbi8vIGNvbnN0IHRlc3RPYmogPSB7XG4vLyAgIGtleTE6IFwiaGlcIixcbi8vICAga2V5Mjoge1xuLy8gICAgIGtleTM6IFwiSGVsbG9cIixcbi8vICAgfSxcbi8vIH07XG5cbi8vIGNvbnN0IGdyZWV0aW5nID0gdGVzdE9iaj8ua2V5Mj8ua2V5MyB8fCB0ZXN0T2JqLmtleTE7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJcIik7XG4vLyAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIpO1xuLy8gICBjYXJkLmlubmVySFRNTCA9IGA8aDI+JHtncmVldGluZ30gV29ybGQhPC9oMj5gO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcbi8vICAgY29uc3QgaW1nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGltZ0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIiwgXCJpbWFnZS1jYXJkXCIpO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ0NhcmQpO1xuLy8gfSk7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IGJmID0gbmV3IEJhdHRsZWZpZWxkKDIwKTtcbiAgYmYuY3JlYXRlQ2FudmFzKCk7XG4gIGJmLmRyYXdCYXR0bGVmaWVsZCgpO1xuICBiZi5kcmF3VG93ZXJDb250YWluZXIoKTtcbiAgYmYuZHJhd0Nhc3RsZSgpO1xuICBiZi5jcmVhdGVFbmVtaWVzKCk7XG4gIGJmLmRyYXdFbmVtaWVzKCk7XG4gIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuXG4gIGNvbnN0IHRpbWVyID0gbmV3IFRpbWVyKDApO1xuICB0aW1lci5jcmVhdGUoKTtcbiAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgaWYgKHRpbWVyLnJlbWFpbmluZyA8IDApIHtcbiAgICAgICAgdGltZXIuY2xlYXIoKTtcbiAgICAgICAgYmYuY2xlYXJFbmVtaWVzKCk7XG4gICAgICAgIGlmIChhbmltYXRpbmcpIGJmLnVwZGF0ZUVuZW1pZXMoKTtcbiAgICAgICAgYmYuZHJhd0JhdHRsZWZpZWxkKCk7XG4gICAgICAgIGJmLmRyYXdUb3dlckNvbnRhaW5lcigpO1xuICAgICAgICBiZi5kcmF3Q2FzdGxlKCk7XG4gICAgICAgIGJmLmRyYXdFbmVtaWVzKCk7XG4gICAgICB9XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgXG4gICAgLy8gaWYgKGNhbnZhcy5jb29yZHNbMF0gKyBjYW52YXMuY29vcmRzWzJdID4gY2FudmFzLmNhbnZhcy53aWR0aClcbiAgICAgIC8vIGNhbnZhcy5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgLy8gaWYgKGNhbnZhcy5jb29yZHNbMF0gPCAwKSBjYW52YXMucmV2ZXJzZUFuaW1hdGlvbigpO1xuICB9O1xuICBcblxuICBcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbiAgLy8gZGVidWdnZXJcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIG1haW4pO1xuXG4iLCJpbXBvcnQgRW5lbXkgZnJvbSAnLi9FbmVteSdcblxuY2xhc3MgQmF0dGxlZmllbGQge1xuICAgIGNvbnN0cnVjdG9yKG51bUVuZW1pZXMpe1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjMzO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAuOTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmJhdHRsZWZpZWxkQ29sb3IgPSBcIiMzZGQxMWZcIlxuICAgIC8vICB0aGlzLnRvd2Vyc0NvbnRhaW5lckNvbG9yID0gXCIjNDY0ZjQ0XCJcbiAgICAvLyAgdGhpcy50b3dlckNvbnRhaW5lckNvb3JkcyA9IFt0aGlzLmNhbnZhcy53aWR0aCAqIC4wMywgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjg1LCB0aGlzLmNhbnZhcy53aWR0aCAqIC45NCwgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjEzXVxuICAgICAgICB0aGlzLmNhc3RsZUNvbG9yID0gXCIjZWVmMmVkXCJcbiAgICAgICAgdGhpcy5jYXN0bGVDb29yZHMgPSBbdGhpcy5jYW52YXMud2lkdGggKiAuMDMsIHRoaXMuY2FudmFzLmhlaWdodCAqIC45MiwgdGhpcy5jYW52YXMud2lkdGggKiAuOTQsIHRoaXMuY2FudmFzLmhlaWdodCAqIC4wN11cbiAgICAgICAgdGhpcy5udW1Ub3dlcnMgPSA2O1xuXG4gICAgICAgIHRoaXMubnVtRW5lbWllcyA9IG51bUVuZW1pZXM7XG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHt9O1xuICAgICB9XG4gICAgIGNyZWF0ZUNhbnZhcygpe1xuICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICAgICB9XG4gICAgIGRyYXdCYXR0bGVmaWVsZCgpe1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5iYXR0bGVmaWVsZENvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgfVxuICAgICBkcmF3VG93ZXJDb250YWluZXIoKXtcbiAgICAgICAgLy8gIGRlYnVnZ2VyXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMudG93ZXJzQ29udGFpbmVyQ29sb3I7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMudG93ZXJDb250YWluZXJDb29yZHMpO1xuICAgICB9XG4gICAgIGRyYXdDYXN0bGUoKXtcbiAgICAgICAgIC8vIGRyYXcgY2FzdGxlIGJhc2VcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jYXN0bGVDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jYXN0bGVDb29yZHMpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRvd2VyQ29vcmRzID0gW3RoaXMuY2FzdGxlQ29vcmRzWzBdICsgKHRoaXMuY2FudmFzLndpZHRoICogLjAyKSwgdGhpcy5jYXN0bGVDb29yZHNbMV0gKyB0aGlzLmNhc3RsZUNvb3Jkc1szXSwgdGhpcy5jYW52YXMud2lkdGggKiAuMTMzLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiAtLjA5XVxuXG4gICAgICAgIC8vIGRyYXcgY2FzdGxlIHRvd2Vyc1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiI2Q0ZDlkMlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNiZGJmYmJcIjtcblxuICAgICAgICAvLyBkaXNwbGF5IHRvd2Vyc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVG93ZXJzOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udG93ZXJDb29yZHMpO1xuICAgICAgICAgICAgdG93ZXJDb29yZHNbMF0gKz0gdG93ZXJDb29yZHNbMl0gKyAodGhpcy5jYW52YXMud2lkdGggKiAuMDIpO1xuICAgICAgICB9XG4gICAgIH1cbiAgICBjcmVhdGVFbmVtaWVzKCl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1FbmVtaWVzOyBpKyspe1xuICAgICAgICAgICAgbGV0IGNvb3JkcztcbiAgICAgICAgICAgIGxldCBtYXhYID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgbGV0IG1heFkgPSAtKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQpOyAvLyBzZXQgc28gZW5lbWllcyBzcGF3biBhYm92ZVxuICAgICAgICAgICAgbGV0IGVuZW15U2l6ZSA9IDIwO1xuXG4gICAgICAgICAgICAvLyBzZXQgeCB2YWx1ZSBvbiBlbm1pZXMgdG8gc3Bhd24gd2l0aGluIHRoZSBjYW52YXNcbiAgICAgICAgICAgIGlmICgodGhpcy5jYW52YXMud2lkdGggLSBtYXhYID49IDApICYmIHRoaXMuY2FudmFzLndpZHRoIC0gbWF4WCA8PSBlbmVteVNpemUpeyAvLyA+IG1heCBsZW5ndGhcbiAgICAgICAgICAgICAgICBtYXhYIC09IGVuZW15U2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIG1heFggPD0gZW5lbXlTaXplKXsgLy8gPCBtYXggbGVuZ3RoXG4gICAgICAgICAgICAgICAgbWF4WCArPSBlbmVteVNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXQgeSB2YWx1ZSBvbiBlbm1pZXMgdG8gc3Bhd24gd2l0aGluIHRoZSBjYW52YXNcbiAgICAgICAgICAgIGlmICgodGhpcy5jYW52YXMuaGVpZ2h0ICsgbWF4WSA+PSAwKSl7IC8vIGhhdmUgZW5lbWllcyBzcGF3biBvZmZzY3JlZW4gZnJvbSB0aGUgdG9wXG4gICAgICAgICAgICAgICAgbWF4WSAtPSBlbmVteVNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZW5lbXkgPSBuZXcgRW5lbXkodGhpcy5jdHgsIFttYXhYLCBtYXhZXSwgZW5lbXlTaXplKTtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllc1tpXSA9IGVuZW15O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlc3Ryb3lFbmVteShlbmVteSl7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVuZW1pZXNbZW5lbXldXG4gICAgfVxuICAgIGRyYXdFbmVtaWVzKCl7XG4gICAgICBcbiAgICAgICAgLy8gZHJhdyBlbmVteVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHRoaXMuZW5lbWllcykubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzW2ldO1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIGlmIChlbmVteS5jb29yZHNbMV0gPD0gdGhpcy5jYXN0bGVDb29yZHNbMV0pIGVuZW15LmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhckVuZW1pZXMoKXtcbiAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLmVuZW1pZXMpLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGVuZW15ID0gdGhpcy5lbmVtaWVzW2ldO1xuICAgICAgICAgICAgZW5lbXkuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVFbmVtaWVzKCl7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXModGhpcy5lbmVtaWVzKS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBlbmVteSA9IHRoaXMuZW5lbWllc1tpXTtcbiAgICAgICAgICAgIGlmIChlbmVteS5jb29yZHNbMV0gPD0gdGhpcy5jYXN0bGVDb29yZHNbMV0pe1xuICAgICAgICAgICAgICAgIGVuZW15LnVwZGF0ZSgpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJhdHRsZWZpZWxkOyIsImNsYXNzIEVuZW15IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvb3JkcywgcmFkaXVzKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgICAgICB0aGlzLmVuZW15Q29sb3JzID0gW1wiIzliZTVlOFwiLFwiI2U4MGMxZVwiLFwiIzdmNTNhM1wiLFwiI2ZmODcxZlwiLFwiI2ZmZmYwZlwiXTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICAvLyBkcmF3IGVuZW15XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgbGV0IHJhZGl1cyA9IDIwO1xuICAgICAgICBsZXQgeCA9IHRoaXMuY29vcmRzWzBdO1xuICAgICAgICBsZXQgeSA9IHRoaXMuY29vcmRzWzFdO1xuICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XG4gICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGguUEkgKiAyO1xuICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZW5lbXlDb2xvcnNbMF07XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNvb3Jkc1sxXSArPSA1O1xuICAgIH1cbiAgICBjbGVhcigpe1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5jb29yZHNbMF0sdGhpcy5jb29yZHNbMV0sIHRoaXMubWF4WCwgdGhpcy5tYXhZKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZW15IiwiY2xhc3MgVGltZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlbWFpbmluZyl7XG4gICAgICAgIHRoaXMucmVtYWluaW5nID0gcmVtYWluaW5nO1xuICAgICAgICB0aGlzLnRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aGlzLnRpbWVyLmNsYXNzTGlzdC5hZGQoJ3RpbWVyJyk7XG4gICAgICAgIHRoaXMudGltZXIuaW5uZXJUZXh0ID0gdGhpcy5yZW1haW5pbmc7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnRpY2suYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgfVxuICAgIGNyZWF0ZSgpe1xuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQodGhpcy50aW1lcik7XG4gICAgfVxuICAgIHRpY2soKXtcbiAgICAgICAgdGhpcy5yZW1haW5pbmcgLT0gMTtcbiAgICAgICAgdGhpcy50aW1lci5pbm5lclRleHQgPSB0aGlzLnJlbWFpbmluZztcbiAgICB9XG4gICAgY2xlYXIoKXtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgdGhpcy50aW1lci5pbm5lclRleHQgPSBcIlwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==
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
      bf.drawBattlefield();
      bf.drawTowerContainer();
      bf.drawCastle();
      Object.keys(bf.enemies).forEach(function (key) {
        debugger;
        if (animating) bf.updateEnemies(key);
        bf.clearEnemies(key);
        bf.drawEnemies(key);
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0JhdHRsZWZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1RpbWVyLmpzIl0sIm5hbWVzIjpbIm1haW4iLCJiZiIsIkJhdHRsZWZpZWxkIiwiY3JlYXRlQ2FudmFzIiwiZHJhd0JhdHRsZWZpZWxkIiwiZHJhd1Rvd2VyQ29udGFpbmVyIiwiZHJhd0Nhc3RsZSIsImNyZWF0ZUVuZW1pZXMiLCJkcmF3RW5lbWllcyIsImFuaW1hdGluZyIsInRpbWVyIiwiVGltZXIiLCJjcmVhdGUiLCJhbmltYXRpb24iLCJyZW1haW5pbmciLCJjbGVhciIsIk9iamVjdCIsImtleXMiLCJlbmVtaWVzIiwiZm9yRWFjaCIsImtleSIsInVwZGF0ZUVuZW1pZXMiLCJjbGVhckVuZW1pZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibnVtRW5lbWllcyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJib3JkZXIiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmF0dGxlZmllbGRDb2xvciIsImNhc3RsZUNvbG9yIiwiY2FzdGxlQ29vcmRzIiwibnVtVG93ZXJzIiwiYm9keSIsImFwcGVuZCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidG93ZXJDb29yZHMiLCJzdHJva2VTdHlsZSIsImkiLCJjb29yZHMiLCJtYXhYIiwiTWF0aCIsInJhbmRvbSIsIm1heFkiLCJlbmVteVNpemUiLCJlbmVteSIsIkVuZW15IiwiZHJhdyIsInVwZGF0ZSIsInJhZGl1cyIsImVuZW15Q29sb3JzIiwiYmVnaW5QYXRoIiwieCIsInkiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJQSSIsImFyYyIsImZpbGwiLCJjbGVhclJlY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwidGljayIsImJpbmQiLCJwcmVwZW5kIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixNQUFNQyxFQUFFLEdBQUcsSUFBSUMsNERBQUosQ0FBZ0IsRUFBaEIsQ0FBWDtBQUNBRCxJQUFFLENBQUNFLFlBQUg7QUFDQUYsSUFBRSxDQUFDRyxlQUFI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WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBCYXR0bGVmaWVsZCBmcm9tIFwiLi9zY3JpcHRzL0JhdHRsZWZpZWxkXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vc2NyaXB0cy9UaW1lclwiO1xuLy8gY29uc3QgdGVzdE9iaiA9IHtcbi8vICAga2V5MTogXCJoaVwiLFxuLy8gICBrZXkyOiB7XG4vLyAgICAga2V5MzogXCJIZWxsb1wiLFxuLy8gICB9LFxuLy8gfTtcblxuLy8gY29uc3QgZ3JlZXRpbmcgPSB0ZXN0T2JqPy5rZXkyPy5rZXkzIHx8IHRlc3RPYmoua2V5MTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImNlbnRlclwiKTtcbi8vICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIik7XG4vLyAgIGNhcmQuaW5uZXJIVE1MID0gYDxoMj4ke2dyZWV0aW5nfSBXb3JsZCE8L2gyPmA7XG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNhcmQpO1xuLy8gICBjb25zdCBpbWdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgaW1nQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiLCBcImltYWdlLWNhcmRcIik7XG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nQ2FyZCk7XG4vLyB9KTtcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgY29uc3QgYmYgPSBuZXcgQmF0dGxlZmllbGQoMjApO1xuICBiZi5jcmVhdGVDYW52YXMoKTtcbiAgYmYuZHJhd0JhdHRsZWZpZWxkKCk7XG4gIGJmLmRyYXdUb3dlckNvbnRhaW5lcigpO1xuICBiZi5kcmF3Q2FzdGxlKCk7XG4gIGJmLmNyZWF0ZUVuZW1pZXMoKTtcbiAgYmYuZHJhd0VuZW1pZXMoKTtcbiAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG5cbiAgY29uc3QgdGltZXIgPSBuZXcgVGltZXIoMCk7XG4gIHRpbWVyLmNyZWF0ZSgpO1xuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICBpZiAodGltZXIucmVtYWluaW5nIDwgMCkge1xuICAgICAgICB0aW1lci5jbGVhcigpO1xuICAgICAgICBiZi5kcmF3QmF0dGxlZmllbGQoKTtcbiAgICAgICAgYmYuZHJhd1Rvd2VyQ29udGFpbmVyKCk7XG4gICAgICAgIGJmLmRyYXdDYXN0bGUoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoYmYuZW5lbWllcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGRlYnVnZ2VyXG5cbiAgICAgICAgICBpZiAoYW5pbWF0aW5nKSBiZi51cGRhdGVFbmVtaWVzKGtleSk7XG4gICAgICAgICAgXG4gICAgICAgICAgYmYuY2xlYXJFbmVtaWVzKGtleSk7XG4gICAgICAgICAgYmYuZHJhd0VuZW1pZXMoa2V5KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICBcbiAgICAvLyBpZiAoY2FudmFzLmNvb3Jkc1swXSArIGNhbnZhcy5jb29yZHNbMl0gPiBjYW52YXMuY2FudmFzLndpZHRoKVxuICAgICAgLy8gY2FudmFzLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICAvLyBpZiAoY2FudmFzLmNvb3Jkc1swXSA8IDApIGNhbnZhcy5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gIH07XG4gIFxuXG4gIFxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICAvLyBkZWJ1Z2dlclxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbWFpbik7XG5cbiIsImltcG9ydCBFbmVteSBmcm9tICcuL0VuZW15J1xuXG5jbGFzcyBCYXR0bGVmaWVsZCB7XG4gICAgY29uc3RydWN0b3IobnVtRW5lbWllcyl7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuMzM7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIC45O1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuYmF0dGxlZmllbGRDb2xvciA9IFwiIzNkZDExZlwiXG4gICAgLy8gIHRoaXMudG93ZXJzQ29udGFpbmVyQ29sb3IgPSBcIiM0NjRmNDRcIlxuICAgIC8vICB0aGlzLnRvd2VyQ29udGFpbmVyQ29vcmRzID0gW3RoaXMuY2FudmFzLndpZHRoICogLjAzLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiAuODUsIHRoaXMuY2FudmFzLndpZHRoICogLjk0LCB0aGlzLmNhbnZhcy5oZWlnaHQgKiAuMTNdXG4gICAgICAgIHRoaXMuY2FzdGxlQ29sb3IgPSBcIiNlZWYyZWRcIlxuICAgICAgICB0aGlzLmNhc3RsZUNvb3JkcyA9IFt0aGlzLmNhbnZhcy53aWR0aCAqIC4wMywgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjkyLCB0aGlzLmNhbnZhcy53aWR0aCAqIC45NCwgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjA3XVxuICAgICAgICB0aGlzLm51bVRvd2VycyA9IDY7XG5cbiAgICAgICAgdGhpcy5udW1FbmVtaWVzID0gbnVtRW5lbWllcztcbiAgICAgICAgdGhpcy5lbmVtaWVzID0ge307XG4gICAgIH1cbiAgICAgY3JlYXRlQ2FudmFzKCl7XG4gICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gICAgIH1cbiAgICAgZHJhd0JhdHRsZWZpZWxkKCl7XG4gICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmJhdHRsZWZpZWxkQ29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICB9XG4gICAgIGRyYXdUb3dlckNvbnRhaW5lcigpe1xuICAgICAgICAvLyAgZGVidWdnZXJcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy50b3dlcnNDb250YWluZXJDb2xvcjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy50b3dlckNvbnRhaW5lckNvb3Jkcyk7XG4gICAgIH1cbiAgICAgZHJhd0Nhc3RsZSgpe1xuICAgICAgICAgLy8gZHJhdyBjYXN0bGUgYmFzZVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNhc3RsZUNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNhc3RsZUNvb3Jkcyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdG93ZXJDb29yZHMgPSBbdGhpcy5jYXN0bGVDb29yZHNbMF0gKyAodGhpcy5jYW52YXMud2lkdGggKiAuMDIpLCB0aGlzLmNhc3RsZUNvb3Jkc1sxXSArIHRoaXMuY2FzdGxlQ29vcmRzWzNdLCB0aGlzLmNhbnZhcy53aWR0aCAqIC4xMzMsIHRoaXMuY2FudmFzLmhlaWdodCAqIC0uMDldXG5cbiAgICAgICAgLy8gZHJhdyBjYXN0bGUgdG93ZXJzXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCIjZDRkOWQyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2JkYmZiYlwiO1xuXG4gICAgICAgIC8vIGRpc3BsYXkgdG93ZXJzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Ub3dlcnM7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50b3dlckNvb3Jkcyk7XG4gICAgICAgICAgICB0b3dlckNvb3Jkc1swXSArPSB0b3dlckNvb3Jkc1syXSArICh0aGlzLmNhbnZhcy53aWR0aCAqIC4wMik7XG4gICAgICAgIH1cbiAgICAgfVxuICAgIGNyZWF0ZUVuZW1pZXMoKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUVuZW1pZXM7IGkrKyl7XG4gICAgICAgICAgICBsZXQgY29vcmRzO1xuICAgICAgICAgICAgbGV0IG1heFggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICBsZXQgbWF4WSA9IC0oTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLmhlaWdodCk7IC8vIHNldCBzbyBlbmVtaWVzIHNwYXduIGFib3ZlXG4gICAgICAgICAgICBsZXQgZW5lbXlTaXplID0gMjA7XG5cbiAgICAgICAgICAgIC8vIHNldCB4IHZhbHVlIG9uIGVubWllcyB0byBzcGF3biB3aXRoaW4gdGhlIGNhbnZhc1xuICAgICAgICAgICAgaWYgKCh0aGlzLmNhbnZhcy53aWR0aCAtIG1heFggPj0gMCkgJiYgdGhpcy5jYW52YXMud2lkdGggLSBtYXhYIDw9IGVuZW15U2l6ZSl7IC8vID4gbWF4IGxlbmd0aFxuICAgICAgICAgICAgICAgIG1heFggLT0gZW5lbXlTaXplO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggbWF4WCA8PSBlbmVteVNpemUpeyAvLyA8IG1heCBsZW5ndGhcbiAgICAgICAgICAgICAgICBtYXhYICs9IGVuZW15U2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldCB5IHZhbHVlIG9uIGVubWllcyB0byBzcGF3biB3aXRoaW4gdGhlIGNhbnZhc1xuICAgICAgICAgICAgaWYgKCh0aGlzLmNhbnZhcy5oZWlnaHQgKyBtYXhZID49IDApKXsgLy8gaGF2ZSBlbmVtaWVzIHNwYXduIG9mZnNjcmVlbiBmcm9tIHRoZSB0b3BcbiAgICAgICAgICAgICAgICBtYXhZIC09IGVuZW15U2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBlbmVteSA9IG5ldyBFbmVteSh0aGlzLmN0eCwgW21heFgsIG1heFldLCBlbmVteVNpemUpO1xuICAgICAgICAgICAgdGhpcy5lbmVtaWVzW2ldID0gZW5lbXk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3RW5lbWllcyhrZXkpe1xuICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW1pZXNba2V5XTtcbiAgICAgICAgaWYgKCEhZW5lbXkgJiYgKGVuZW15LmNvb3Jkc1sxXSA8PSB0aGlzLmNhc3RsZUNvb3Jkc1sxXSkpIGVuZW15LmRyYXcoKTtcbiAgICB9XG4gICAgY2xlYXJFbmVtaWVzKGtleSl7XG4gICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbWllc1trZXldO1xuICAgICAgICBlbmVteS5jbGVhcigpO1xuICAgICAgICBpZiAoKGVuZW15LmNvb3Jkc1sxXSA+PSB0aGlzLmNhc3RsZUNvb3Jkc1sxXSkpIGRlbGV0ZSB0aGlzLmVuZW1pZXNba2V5XTtcblxuICAgIH1cbiAgICB1cGRhdGVFbmVtaWVzKGtleSl7XG4gICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbWllc1trZXldO1xuICAgICAgICBpZiAoZW5lbXkuY29vcmRzWzFdIDw9IHRoaXMuY2FzdGxlQ29vcmRzWzFdKSBlbmVteS51cGRhdGUoKTsgXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmF0dGxlZmllbGQ7IiwiY2xhc3MgRW5lbXkge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCByYWRpdXMpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMuZW5lbXlDb2xvcnMgPSBbXCIjOWJlNWU4XCIsXCIjZTgwYzFlXCIsXCIjN2Y1M2EzXCIsXCIjZmY4NzFmXCIsXCIjZmZmZjBmXCJdO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIC8vIGRyYXcgZW5lbXlcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBsZXQgcmFkaXVzID0gMjA7XG4gICAgICAgIGxldCB4ID0gdGhpcy5jb29yZHNbMF07XG4gICAgICAgIGxldCB5ID0gdGhpcy5jb29yZHNbMV07XG4gICAgICAgIGxldCBzdGFydEFuZ2xlID0gMDtcbiAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5QSSAqIDI7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5lbmVteUNvbG9yc1swXTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY29vcmRzWzFdICs9IDU7XG4gICAgfVxuICAgIGNsZWFyKCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLmNvb3Jkc1swXSx0aGlzLmNvb3Jkc1sxXSwgdGhpcy5tYXhYLCB0aGlzLm1heFkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5lbXkiLCJjbGFzcyBUaW1lciB7XG4gICAgY29uc3RydWN0b3IocmVtYWluaW5nKXtcbiAgICAgICAgdGhpcy5yZW1haW5pbmcgPSByZW1haW5pbmc7XG4gICAgICAgIHRoaXMudGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRoaXMudGltZXIuY2xhc3NMaXN0LmFkZCgndGltZXInKTtcbiAgICAgICAgdGhpcy50aW1lci5pbm5lclRleHQgPSB0aGlzLnJlbWFpbmluZztcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudGljay5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICB9XG4gICAgY3JlYXRlKCl7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZCh0aGlzLnRpbWVyKTtcbiAgICB9XG4gICAgdGljaygpe1xuICAgICAgICB0aGlzLnJlbWFpbmluZyAtPSAxO1xuICAgICAgICB0aGlzLnRpbWVyLmlubmVyVGV4dCA9IHRoaXMucmVtYWluaW5nO1xuICAgIH1cbiAgICBjbGVhcigpe1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLnRpbWVyLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiXSwic291cmNlUm9vdCI6IiJ9
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
  bf.drawEnemies(); // debugger
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
    key: "drawEnemies",
    value: function drawEnemies() {
      // draw enemy
      for (var i = 0; i < this.numEnemies; i++) {
        var enemy = new _Enemy__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, this.canvas.width, this.canvas.height);
        enemy.draw();
      }
    }
  }, {
    key: "updateEnemies",
    value: function updateEnemies() {// this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));
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
  function Enemy(ctx, maxX, maxY) {
    _classCallCheck(this, Enemy);

    this.ctx = ctx;
    this.maxX = maxX;
    this.maxY = maxY;
    this.enemyColors = ["#9be5e8", "#e80c1e", "#7f53a3", "#ff871f", "#ffff0f"];
  }

  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      debugger; // draw enemy

      this.ctx.beginPath();
      var x = Math.random() * this.maxX;
      var y = Math.random() * this.maxY;
      var radius = 20;
      var startAngle = 0;
      var endAngle = Math.PI * 2;
      this.ctx.arc(x, y, radius, startAngle, endAngle);
      this.ctx.fillStyle = this.enemyColors[0];
      this.ctx.fill();
      this.maxX += 10;
      this.maxY += 10;
    }
  }]);

  return Enemy;
}();

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0JhdHRsZWZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0VuZW15LmpzIl0sIm5hbWVzIjpbIm1haW4iLCJiZiIsIkJhdHRsZWZpZWxkIiwiY3JlYXRlQ2FudmFzIiwiZHJhd0JhdHRsZWZpZWxkIiwiZHJhd1Rvd2VyQ29udGFpbmVyIiwiZHJhd0Nhc3RsZSIsImRyYXdFbmVtaWVzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb3BzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsImJvcmRlciIsImN0eCIsImdldENvbnRleHQiLCJiYXR0bGVmaWVsZENvbG9yIiwiY2FzdGxlQ29sb3IiLCJjYXN0bGVDb29yZHMiLCJudW1Ub3dlcnMiLCJudW1FbmVtaWVzIiwiYm9keSIsImFwcGVuZCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidG93ZXJDb29yZHMiLCJzdHJva2VTdHlsZSIsImkiLCJlbmVteSIsIkVuZW15IiwiZHJhdyIsIm1heFgiLCJtYXhZIiwiZW5lbXlDb2xvcnMiLCJiZWdpblBhdGgiLCJ4IiwiTWF0aCIsInJhbmRvbSIsInkiLCJyYWRpdXMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJQSSIsImFyYyIsImZpbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7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LFNBQUtsQixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLaUIsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixDQUFDLFNBQUQsRUFBVyxTQUFYLEVBQXFCLFNBQXJCLEVBQStCLFNBQS9CLEVBQXlDLFNBQXpDLENBQW5CO0FBQ0g7Ozs7MkJBRUs7QUFDRixlQURFLENBRUg7O0FBRUMsV0FBS25CLEdBQUwsQ0FBU29CLFNBQVQ7QUFDQSxVQUFJQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixLQUFLTixJQUE3QjtBQUNBLFVBQUlPLENBQUMsR0FBR0YsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEtBQUtMLElBQTdCO0FBQ0EsVUFBSU8sTUFBTSxHQUFHLEVBQWI7QUFDQSxVQUFJQyxVQUFVLEdBQUcsQ0FBakI7QUFDQSxVQUFJQyxRQUFRLEdBQUdMLElBQUksQ0FBQ00sRUFBTCxHQUFVLENBQXpCO0FBQ0EsV0FBSzVCLEdBQUwsQ0FBUzZCLEdBQVQsQ0FBYVIsQ0FBYixFQUFnQkcsQ0FBaEIsRUFBbUJDLE1BQW5CLEVBQTJCQyxVQUEzQixFQUF1Q0MsUUFBdkM7QUFDQSxXQUFLM0IsR0FBTCxDQUFTUyxTQUFULEdBQXFCLEtBQUtVLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBckI7QUFDQSxXQUFLbkIsR0FBTCxDQUFTOEIsSUFBVDtBQUNBLFdBQUtiLElBQUwsSUFBYSxFQUFiO0FBQ0EsV0FBS0MsSUFBTCxJQUFhLEVBQWI7QUFFSDs7Ozs7O0FBR1VILG9FQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEJhdHRsZWZpZWxkIGZyb20gXCIuL3NjcmlwdHMvQmF0dGxlZmllbGRcIjtcbi8vIGNvbnN0IHRlc3RPYmogPSB7XG4vLyAgIGtleTE6IFwiaGlcIixcbi8vICAga2V5Mjoge1xuLy8gICAgIGtleTM6IFwiSGVsbG9cIixcbi8vICAgfSxcbi8vIH07XG5cbi8vIGNvbnN0IGdyZWV0aW5nID0gdGVzdE9iaj8ua2V5Mj8ua2V5MyB8fCB0ZXN0T2JqLmtleTE7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJcIik7XG4vLyAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIpO1xuLy8gICBjYXJkLmlubmVySFRNTCA9IGA8aDI+JHtncmVldGluZ30gV29ybGQhPC9oMj5gO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcbi8vICAgY29uc3QgaW1nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGltZ0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIiwgXCJpbWFnZS1jYXJkXCIpO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ0NhcmQpO1xuLy8gfSk7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IGJmID0gbmV3IEJhdHRsZWZpZWxkKCk7XG4gIGJmLmNyZWF0ZUNhbnZhcygpO1xuICBiZi5kcmF3QmF0dGxlZmllbGQoKTtcbiAgYmYuZHJhd1Rvd2VyQ29udGFpbmVyKCk7XG4gIGJmLmRyYXdDYXN0bGUoKTtcbiAgYmYuZHJhd0VuZW1pZXMoKTtcbiAgLy8gZGVidWdnZXJcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIG1haW4pO1xuXG4iLCJpbXBvcnQgRW5lbXkgZnJvbSAnLi9FbmVteSdcblxuY2xhc3MgQmF0dGxlZmllbGQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC4zMztcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogLjk7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5iYXR0bGVmaWVsZENvbG9yID0gXCIjM2RkMTFmXCJcbiAgICAvLyAgdGhpcy50b3dlcnNDb250YWluZXJDb2xvciA9IFwiIzQ2NGY0NFwiXG4gICAgLy8gIHRoaXMudG93ZXJDb250YWluZXJDb29yZHMgPSBbdGhpcy5jYW52YXMud2lkdGggKiAuMDMsIHRoaXMuY2FudmFzLmhlaWdodCAqIC44NSwgdGhpcy5jYW52YXMud2lkdGggKiAuOTQsIHRoaXMuY2FudmFzLmhlaWdodCAqIC4xM11cbiAgICAgICAgdGhpcy5jYXN0bGVDb2xvciA9IFwiI2VlZjJlZFwiXG4gICAgICAgIHRoaXMuY2FzdGxlQ29vcmRzID0gW3RoaXMuY2FudmFzLndpZHRoICogLjAzLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiAuOTIsIHRoaXMuY2FudmFzLndpZHRoICogLjk0LCB0aGlzLmNhbnZhcy5oZWlnaHQgKiAuMDddXG4gICAgICAgIHRoaXMubnVtVG93ZXJzID0gNjtcblxuXG4gICAgICAgIHRoaXMubnVtRW5lbWllcyA9IDEwO1xuICAgICB9XG4gICAgIGNyZWF0ZUNhbnZhcygpe1xuICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICAgICB9XG4gICAgIGRyYXdCYXR0bGVmaWVsZCgpe1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5iYXR0bGVmaWVsZENvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgfVxuICAgICBkcmF3VG93ZXJDb250YWluZXIoKXtcbiAgICAgICAgLy8gIGRlYnVnZ2VyXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMudG93ZXJzQ29udGFpbmVyQ29sb3I7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMudG93ZXJDb250YWluZXJDb29yZHMpO1xuICAgICB9XG4gICAgIGRyYXdDYXN0bGUoKXtcbiAgICAgICAgIC8vIGRyYXcgY2FzdGxlIGJhc2VcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jYXN0bGVDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jYXN0bGVDb29yZHMpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRvd2VyQ29vcmRzID0gW3RoaXMuY2FzdGxlQ29vcmRzWzBdICsgKHRoaXMuY2FudmFzLndpZHRoICogLjAyKSwgdGhpcy5jYXN0bGVDb29yZHNbMV0gKyB0aGlzLmNhc3RsZUNvb3Jkc1szXSwgdGhpcy5jYW52YXMud2lkdGggKiAuMTMzLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiAtLjA5XVxuXG4gICAgICAgIC8vIGRyYXcgY2FzdGxlIHRvd2Vyc1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiI2Q0ZDlkMlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNiZGJmYmJcIjtcblxuICAgICAgICAvLyBkaXNwbGF5IHRvd2Vyc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVG93ZXJzOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udG93ZXJDb29yZHMpO1xuICAgICAgICAgICAgdG93ZXJDb29yZHNbMF0gKz0gdG93ZXJDb29yZHNbMl0gKyAodGhpcy5jYW52YXMud2lkdGggKiAuMDIpO1xuICAgICAgICB9XG4gICAgIH1cbiAgICBkcmF3RW5lbWllcygpe1xuICAgICAgICAvLyBkcmF3IGVuZW15XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1FbmVtaWVzOyBpKyspe1xuICAgICAgICAgICAgbGV0IGVuZW15ID0gbmV3IEVuZW15KHRoaXMuY3R4LCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGVuZW15LmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB1cGRhdGVFbmVtaWVzKCkge1xuICAgICAgICAvLyB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCYXR0bGVmaWVsZDsiLCJjbGFzcyBFbmVteSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBtYXhYLCBtYXhZKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMubWF4WCA9IG1heFg7XG4gICAgICAgIHRoaXMubWF4WSA9IG1heFk7XG4gICAgICAgIHRoaXMuZW5lbXlDb2xvcnMgPSBbXCIjOWJlNWU4XCIsXCIjZTgwYzFlXCIsXCIjN2Y1M2EzXCIsXCIjZmY4NzFmXCIsXCIjZmZmZjBmXCJdO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAvLyBkcmF3IGVuZW15XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMubWF4WDtcbiAgICAgICAgbGV0IHkgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5tYXhZO1xuICAgICAgICBsZXQgcmFkaXVzID0gMjA7XG4gICAgICAgIGxldCBzdGFydEFuZ2xlID0gMDtcbiAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5QSSAqIDI7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5lbmVteUNvbG9yc1swXTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLm1heFggKz0gMTA7XG4gICAgICAgIHRoaXMubWF4WSArPSAxMDtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5lbXkiXSwic291cmNlUm9vdCI6IiJ9
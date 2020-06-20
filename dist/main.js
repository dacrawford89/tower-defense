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
  bf.createEnemies();
  bf.drawEnemies();
  var animating = true;

  var animation = function animation() {
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
        var maxY = Math.random() * this.canvas.height;
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
      debugger; // draw enemy

      for (var i = 0; i < this.enemies.length; i++) {
        var enemy = this.enemies[i];
        enemy.draw();
      }
    }
  }, {
    key: "clearEnemies",
    value: function clearEnemies() {
      debugger;

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
      debugger; // draw enemy

      this.ctx.beginPath();
      var radius = 20; // // pick random x coords
      // let x = Math.random() * this.coords[0];

      var x = this.coords[0]; // check if the coord is in bounds

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
      debugger;
      this.ctx.clearRect(0, 0, this.maxX, this.maxY);
    }
  }]);

  return Enemy;
}();

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0JhdHRsZWZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0VuZW15LmpzIl0sIm5hbWVzIjpbIm1haW4iLCJiZiIsIkJhdHRsZWZpZWxkIiwiY3JlYXRlQ2FudmFzIiwiZHJhd0JhdHRsZWZpZWxkIiwiZHJhd1Rvd2VyQ29udGFpbmVyIiwiZHJhd0Nhc3RsZSIsImNyZWF0ZUVuZW1pZXMiLCJkcmF3RW5lbWllcyIsImFuaW1hdGluZyIsImFuaW1hdGlvbiIsImNsZWFyRW5lbWllcyIsInVwZGF0ZUVuZW1pZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvcHMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInN0eWxlIiwiYm9yZGVyIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJhdHRsZWZpZWxkQ29sb3IiLCJjYXN0bGVDb2xvciIsImNhc3RsZUNvb3JkcyIsIm51bVRvd2VycyIsImVuZW1pZXMiLCJudW1FbmVtaWVzIiwiYm9keSIsImFwcGVuZCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidG93ZXJDb29yZHMiLCJzdHJva2VTdHlsZSIsImkiLCJjb29yZHMiLCJtYXhYIiwiTWF0aCIsInJhbmRvbSIsIm1heFkiLCJlbmVteVNpemUiLCJlbmVteSIsIkVuZW15IiwicHVzaCIsImxlbmd0aCIsImRyYXciLCJjbGVhciIsInVwZGF0ZSIsInJhZGl1cyIsImVuZW15Q29sb3JzIiwiYmVnaW5QYXRoIiwieCIsInkiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJQSSIsImFyYyIsImZpbGwiLCJjbGVhclJlY3QiXSwibWFwcGluZ3MiOiI7UUFB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QUFHLEtBQUtoQixNQUFMLENBQVksQ0FBWixDQUFSLENBVEUsQ0FVRjs7QUFHQSxVQUFJaUIsQ0FBQyxHQUFHLEtBQUtqQixNQUFMLENBQVksQ0FBWixDQUFSO0FBQ0EsVUFBSWtCLFVBQVUsR0FBRyxDQUFqQjtBQUNBLFVBQUlDLFFBQVEsR0FBR2pCLElBQUksQ0FBQ2tCLEVBQUwsR0FBVSxDQUF6QjtBQUNBLFdBQUtuQyxHQUFMLENBQVNvQyxHQUFULENBQWFMLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CSixNQUFuQixFQUEyQkssVUFBM0IsRUFBdUNDLFFBQXZDO0FBQ0EsV0FBS2xDLEdBQUwsQ0FBU1UsU0FBVCxHQUFxQixLQUFLbUIsV0FBTCxDQUFpQixDQUFqQixDQUFyQjtBQUNBLFdBQUs3QixHQUFMLENBQVNxQyxJQUFUO0FBQ0g7Ozs2QkFDUTtBQUNMLFdBQUt0QixNQUFMLENBQVksQ0FBWixLQUFrQixDQUFsQjtBQUNIOzs7NEJBQ007QUFDSDtBQUNBLFdBQUtmLEdBQUwsQ0FBU3NDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS3RCLElBQTlCLEVBQW9DLEtBQUtHLElBQXpDO0FBQ0g7Ozs7OztBQUdVRyxvRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBCYXR0bGVmaWVsZCBmcm9tIFwiLi9zY3JpcHRzL0JhdHRsZWZpZWxkXCI7XG4vLyBjb25zdCB0ZXN0T2JqID0ge1xuLy8gICBrZXkxOiBcImhpXCIsXG4vLyAgIGtleTI6IHtcbi8vICAgICBrZXkzOiBcIkhlbGxvXCIsXG4vLyAgIH0sXG4vLyB9O1xuXG4vLyBjb25zdCBncmVldGluZyA9IHRlc3RPYmo/LmtleTI/LmtleTMgfHwgdGVzdE9iai5rZXkxO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiY2VudGVyXCIpO1xuLy8gICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiKTtcbi8vICAgY2FyZC5pbm5lckhUTUwgPSBgPGgyPiR7Z3JlZXRpbmd9IFdvcmxkITwvaDI+YDtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FyZCk7XG4vLyAgIGNvbnN0IGltZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBpbWdDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIsIFwiaW1hZ2UtY2FyZFwiKTtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWdDYXJkKTtcbi8vIH0pO1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBiZiA9IG5ldyBCYXR0bGVmaWVsZCgpO1xuICBiZi5jcmVhdGVDYW52YXMoKTtcbiAgYmYuZHJhd0JhdHRsZWZpZWxkKCk7XG4gIGJmLmRyYXdUb3dlckNvbnRhaW5lcigpO1xuICBiZi5kcmF3Q2FzdGxlKCk7XG4gIGJmLmNyZWF0ZUVuZW1pZXMoKTtcbiAgYmYuZHJhd0VuZW1pZXMoKTtcbiAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG5cbiAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGJmLmNsZWFyRW5lbWllcygpO1xuICAgIGlmIChhbmltYXRpbmcpIGJmLnVwZGF0ZUVuZW1pZXMoKTtcbiAgICBiZi5kcmF3QmF0dGxlZmllbGQoKTtcbiAgICBiZi5kcmF3VG93ZXJDb250YWluZXIoKTtcbiAgICBiZi5kcmF3Q2FzdGxlKCk7XG4gICAgYmYuZHJhd0VuZW1pZXMoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgLy8gaWYgKGNhbnZhcy5jb29yZHNbMF0gKyBjYW52YXMuY29vcmRzWzJdID4gY2FudmFzLmNhbnZhcy53aWR0aClcbiAgICAgIC8vIGNhbnZhcy5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgLy8gaWYgKGNhbnZhcy5jb29yZHNbMF0gPCAwKSBjYW52YXMucmV2ZXJzZUFuaW1hdGlvbigpO1xuICB9O1xuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICAvLyBkZWJ1Z2dlclxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbWFpbik7XG5cbiIsImltcG9ydCBFbmVteSBmcm9tICcuL0VuZW15J1xuXG5jbGFzcyBCYXR0bGVmaWVsZCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjMzO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAuOTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmJhdHRsZWZpZWxkQ29sb3IgPSBcIiMzZGQxMWZcIlxuICAgIC8vICB0aGlzLnRvd2Vyc0NvbnRhaW5lckNvbG9yID0gXCIjNDY0ZjQ0XCJcbiAgICAvLyAgdGhpcy50b3dlckNvbnRhaW5lckNvb3JkcyA9IFt0aGlzLmNhbnZhcy53aWR0aCAqIC4wMywgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjg1LCB0aGlzLmNhbnZhcy53aWR0aCAqIC45NCwgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjEzXVxuICAgICAgICB0aGlzLmNhc3RsZUNvbG9yID0gXCIjZWVmMmVkXCJcbiAgICAgICAgdGhpcy5jYXN0bGVDb29yZHMgPSBbdGhpcy5jYW52YXMud2lkdGggKiAuMDMsIHRoaXMuY2FudmFzLmhlaWdodCAqIC45MiwgdGhpcy5jYW52YXMud2lkdGggKiAuOTQsIHRoaXMuY2FudmFzLmhlaWdodCAqIC4wN11cbiAgICAgICAgdGhpcy5udW1Ub3dlcnMgPSA2O1xuXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xuICAgICAgICB0aGlzLm51bUVuZW1pZXMgPSAxMDtcbiAgICAgfVxuICAgICBjcmVhdGVDYW52YXMoKXtcbiAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgfVxuICAgICBkcmF3QmF0dGxlZmllbGQoKXtcbiAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmF0dGxlZmllbGRDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgIH1cbiAgICAgZHJhd1Rvd2VyQ29udGFpbmVyKCl7XG4gICAgICAgIC8vICBkZWJ1Z2dlclxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnRvd2Vyc0NvbnRhaW5lckNvbG9yO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLnRvd2VyQ29udGFpbmVyQ29vcmRzKTtcbiAgICAgfVxuICAgICBkcmF3Q2FzdGxlKCl7XG4gICAgICAgICAvLyBkcmF3IGNhc3RsZSBiYXNlXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY2FzdGxlQ29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY2FzdGxlQ29vcmRzKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0b3dlckNvb3JkcyA9IFt0aGlzLmNhc3RsZUNvb3Jkc1swXSArICh0aGlzLmNhbnZhcy53aWR0aCAqIC4wMiksIHRoaXMuY2FzdGxlQ29vcmRzWzFdICsgdGhpcy5jYXN0bGVDb29yZHNbM10sIHRoaXMuY2FudmFzLndpZHRoICogLjEzMywgdGhpcy5jYW52YXMuaGVpZ2h0ICogLS4wOV1cblxuICAgICAgICAvLyBkcmF3IGNhc3RsZSB0b3dlcnNcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIiNkNGQ5ZDJcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjYmRiZmJiXCI7XG5cbiAgICAgICAgLy8gZGlzcGxheSB0b3dlcnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRvd2VyczsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRvd2VyQ29vcmRzKTtcbiAgICAgICAgICAgIHRvd2VyQ29vcmRzWzBdICs9IHRvd2VyQ29vcmRzWzJdICsgKHRoaXMuY2FudmFzLndpZHRoICogLjAyKTtcbiAgICAgICAgfVxuICAgICB9XG4gICAgY3JlYXRlRW5lbWllcygpe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtRW5lbWllczsgaSsrKXtcbiAgICAgICAgICAgIGxldCBjb29yZHM7XG4gICAgICAgICAgICBsZXQgbWF4WCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIGxldCBtYXhZID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgIGxldCBlbmVteVNpemUgPSAyMDtcbiAgICAgICAgICAgIGlmICgodGhpcy5jYW52YXMud2lkdGggLSBtYXhYID49IDApICYmIHRoaXMuY2FudmFzLndpZHRoIC0gbWF4WCA8PSBlbmVteVNpemUpeyAvLyA+IG1heCBsZW5ndGhcbiAgICAgICAgICAgICAgICBtYXhYIC09IGVuZW15U2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIG1heFggPD0gZW5lbXlTaXplKXsgLy8gPCBtYXggbGVuZ3RoXG4gICAgICAgICAgICAgICAgbWF4WCArPSBlbmVteVNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZW5lbXkgPSBuZXcgRW5lbXkodGhpcy5jdHgsIFttYXhYLCBtYXhZXSwgZW5lbXlTaXplKTtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKGVuZW15KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3RW5lbWllcygpe1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAvLyBkcmF3IGVuZW15XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVtaWVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbWllc1tpXTtcbiAgICAgICAgICAgIGVuZW15LmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhckVuZW1pZXMoKXtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW1pZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgZW5lbXkgPSB0aGlzLmVuZW1pZXNbaV07XG4gICAgICAgICAgICBlbmVteS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZUVuZW1pZXMoKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW1pZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgZW5lbXkgPSB0aGlzLmVuZW1pZXNbaV07XG4gICAgICAgICAgICBlbmVteS51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJhdHRsZWZpZWxkOyIsImNsYXNzIEVuZW15IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvb3JkcywgcmFkaXVzKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgICAgICB0aGlzLmVuZW15Q29sb3JzID0gW1wiIzliZTVlOFwiLFwiI2U4MGMxZVwiLFwiIzdmNTNhM1wiLFwiI2ZmODcxZlwiLFwiI2ZmZmYwZlwiXTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgIC8vIGRyYXcgZW5lbXlcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgbGV0IHJhZGl1cyA9IDIwO1xuXG4gICAgICAgIC8vIC8vIHBpY2sgcmFuZG9tIHggY29vcmRzXG4gICAgICAgIC8vIGxldCB4ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuY29vcmRzWzBdO1xuICAgICAgICBsZXQgeCA9IHRoaXMuY29vcmRzWzBdO1xuICAgICAgICAvLyBjaGVjayBpZiB0aGUgY29vcmQgaXMgaW4gYm91bmRzXG5cblxuICAgICAgICBsZXQgeSA9IHRoaXMuY29vcmRzWzFdO1xuICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XG4gICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGguUEkgKiAyO1xuICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZW5lbXlDb2xvcnNbMF07XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNvb3Jkc1sxXSArPSAxO1xuICAgIH1cbiAgICBjbGVhcigpe1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5tYXhYLCB0aGlzLm1heFkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5lbXkiXSwic291cmNlUm9vdCI6IiJ9
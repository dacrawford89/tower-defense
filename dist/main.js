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
      // draw enemy
      this.ctx.beginPath();
      var radius = 20;
      debugger;
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
      debugger;
      this.ctx.clearRect(0, 0, this.maxX, this.maxY);
    }
  }]);

  return Enemy;
}();

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0JhdHRsZWZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0VuZW15LmpzIl0sIm5hbWVzIjpbIm1haW4iLCJiZiIsIkJhdHRsZWZpZWxkIiwiY3JlYXRlQ2FudmFzIiwiZHJhd0JhdHRsZWZpZWxkIiwiZHJhd1Rvd2VyQ29udGFpbmVyIiwiZHJhd0Nhc3RsZSIsImNyZWF0ZUVuZW1pZXMiLCJkcmF3RW5lbWllcyIsImFuaW1hdGluZyIsImFuaW1hdGlvbiIsImNsZWFyRW5lbWllcyIsInVwZGF0ZUVuZW1pZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvcHMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInN0eWxlIiwiYm9yZGVyIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJhdHRsZWZpZWxkQ29sb3IiLCJjYXN0bGVDb2xvciIsImNhc3RsZUNvb3JkcyIsIm51bVRvd2VycyIsImVuZW1pZXMiLCJudW1FbmVtaWVzIiwiYm9keSIsImFwcGVuZCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidG93ZXJDb29yZHMiLCJzdHJva2VTdHlsZSIsImkiLCJjb29yZHMiLCJtYXhYIiwiTWF0aCIsInJhbmRvbSIsIm1heFkiLCJlbmVteVNpemUiLCJlbmVteSIsIkVuZW15IiwicHVzaCIsImxlbmd0aCIsImRyYXciLCJjbGVhciIsInVwZGF0ZSIsInJhZGl1cyIsImVuZW15Q29sb3JzIiwiYmVnaW5QYXRoIiwieCIsInkiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJQSSIsImFyYyIsImZpbGwiLCJjbGVhclJlY3QiXSwibWFwcGluZ3MiOiI7UUFB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R0FBRyxLQUFLaEIsTUFBTCxDQUFZLENBQVosQ0FBUjtBQUNBLFVBQUlpQixDQUFDLEdBQUcsS0FBS2pCLE1BQUwsQ0FBWSxDQUFaLENBQVI7QUFDQSxVQUFJa0IsVUFBVSxHQUFHLENBQWpCO0FBQ0EsVUFBSUMsUUFBUSxHQUFHakIsSUFBSSxDQUFDa0IsRUFBTCxHQUFVLENBQXpCO0FBQ0EsV0FBS25DLEdBQUwsQ0FBU29DLEdBQVQsQ0FBYUwsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJKLE1BQW5CLEVBQTJCSyxVQUEzQixFQUF1Q0MsUUFBdkM7QUFDQSxXQUFLbEMsR0FBTCxDQUFTVSxTQUFULEdBQXFCLEtBQUttQixXQUFMLENBQWlCLENBQWpCLENBQXJCO0FBQ0EsV0FBSzdCLEdBQUwsQ0FBU3FDLElBQVQ7QUFDSDs7OzZCQUNRO0FBQ0wsV0FBS3RCLE1BQUwsQ0FBWSxDQUFaLEtBQWtCLENBQWxCO0FBQ0g7Ozs0QkFDTTtBQUNIO0FBQ0EsV0FBS2YsR0FBTCxDQUFTc0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLdEIsSUFBOUIsRUFBb0MsS0FBS0csSUFBekM7QUFDSDs7Ozs7O0FBR1VHLG9FQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEJhdHRsZWZpZWxkIGZyb20gXCIuL3NjcmlwdHMvQmF0dGxlZmllbGRcIjtcbi8vIGNvbnN0IHRlc3RPYmogPSB7XG4vLyAgIGtleTE6IFwiaGlcIixcbi8vICAga2V5Mjoge1xuLy8gICAgIGtleTM6IFwiSGVsbG9cIixcbi8vICAgfSxcbi8vIH07XG5cbi8vIGNvbnN0IGdyZWV0aW5nID0gdGVzdE9iaj8ua2V5Mj8ua2V5MyB8fCB0ZXN0T2JqLmtleTE7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJcIik7XG4vLyAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIpO1xuLy8gICBjYXJkLmlubmVySFRNTCA9IGA8aDI+JHtncmVldGluZ30gV29ybGQhPC9oMj5gO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcbi8vICAgY29uc3QgaW1nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGltZ0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIiwgXCJpbWFnZS1jYXJkXCIpO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ0NhcmQpO1xuLy8gfSk7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IGJmID0gbmV3IEJhdHRsZWZpZWxkKCk7XG4gIGJmLmNyZWF0ZUNhbnZhcygpO1xuICBiZi5kcmF3QmF0dGxlZmllbGQoKTtcbiAgYmYuZHJhd1Rvd2VyQ29udGFpbmVyKCk7XG4gIGJmLmRyYXdDYXN0bGUoKTtcbiAgYmYuY3JlYXRlRW5lbWllcygpO1xuICBiZi5kcmF3RW5lbWllcygpO1xuICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgYmYuY2xlYXJFbmVtaWVzKCk7XG4gICAgaWYgKGFuaW1hdGluZykgYmYudXBkYXRlRW5lbWllcygpO1xuICAgIGJmLmRyYXdCYXR0bGVmaWVsZCgpO1xuICAgIGJmLmRyYXdUb3dlckNvbnRhaW5lcigpO1xuICAgIGJmLmRyYXdDYXN0bGUoKTtcbiAgICBiZi5kcmF3RW5lbWllcygpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAvLyBpZiAoY2FudmFzLmNvb3Jkc1swXSArIGNhbnZhcy5jb29yZHNbMl0gPiBjYW52YXMuY2FudmFzLndpZHRoKVxuICAgICAgLy8gY2FudmFzLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICAvLyBpZiAoY2FudmFzLmNvb3Jkc1swXSA8IDApIGNhbnZhcy5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gIH07XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4gIC8vIGRlYnVnZ2VyXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBtYWluKTtcblxuIiwiaW1wb3J0IEVuZW15IGZyb20gJy4vRW5lbXknXG5cbmNsYXNzIEJhdHRsZWZpZWxkIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuMzM7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIC45O1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuYmF0dGxlZmllbGRDb2xvciA9IFwiIzNkZDExZlwiXG4gICAgLy8gIHRoaXMudG93ZXJzQ29udGFpbmVyQ29sb3IgPSBcIiM0NjRmNDRcIlxuICAgIC8vICB0aGlzLnRvd2VyQ29udGFpbmVyQ29vcmRzID0gW3RoaXMuY2FudmFzLndpZHRoICogLjAzLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiAuODUsIHRoaXMuY2FudmFzLndpZHRoICogLjk0LCB0aGlzLmNhbnZhcy5oZWlnaHQgKiAuMTNdXG4gICAgICAgIHRoaXMuY2FzdGxlQ29sb3IgPSBcIiNlZWYyZWRcIlxuICAgICAgICB0aGlzLmNhc3RsZUNvb3JkcyA9IFt0aGlzLmNhbnZhcy53aWR0aCAqIC4wMywgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjkyLCB0aGlzLmNhbnZhcy53aWR0aCAqIC45NCwgdGhpcy5jYW52YXMuaGVpZ2h0ICogLjA3XVxuICAgICAgICB0aGlzLm51bVRvd2VycyA9IDY7XG5cbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107XG4gICAgICAgIHRoaXMubnVtRW5lbWllcyA9IDEwO1xuICAgICB9XG4gICAgIGNyZWF0ZUNhbnZhcygpe1xuICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICAgICB9XG4gICAgIGRyYXdCYXR0bGVmaWVsZCgpe1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5iYXR0bGVmaWVsZENvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgfVxuICAgICBkcmF3VG93ZXJDb250YWluZXIoKXtcbiAgICAgICAgLy8gIGRlYnVnZ2VyXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMudG93ZXJzQ29udGFpbmVyQ29sb3I7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMudG93ZXJDb250YWluZXJDb29yZHMpO1xuICAgICB9XG4gICAgIGRyYXdDYXN0bGUoKXtcbiAgICAgICAgIC8vIGRyYXcgY2FzdGxlIGJhc2VcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jYXN0bGVDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jYXN0bGVDb29yZHMpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRvd2VyQ29vcmRzID0gW3RoaXMuY2FzdGxlQ29vcmRzWzBdICsgKHRoaXMuY2FudmFzLndpZHRoICogLjAyKSwgdGhpcy5jYXN0bGVDb29yZHNbMV0gKyB0aGlzLmNhc3RsZUNvb3Jkc1szXSwgdGhpcy5jYW52YXMud2lkdGggKiAuMTMzLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiAtLjA5XVxuXG4gICAgICAgIC8vIGRyYXcgY2FzdGxlIHRvd2Vyc1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiI2Q0ZDlkMlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNiZGJmYmJcIjtcblxuICAgICAgICAvLyBkaXNwbGF5IHRvd2Vyc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVG93ZXJzOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udG93ZXJDb29yZHMpO1xuICAgICAgICAgICAgdG93ZXJDb29yZHNbMF0gKz0gdG93ZXJDb29yZHNbMl0gKyAodGhpcy5jYW52YXMud2lkdGggKiAuMDIpO1xuICAgICAgICB9XG4gICAgIH1cbiAgICBjcmVhdGVFbmVtaWVzKCl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1FbmVtaWVzOyBpKyspe1xuICAgICAgICAgICAgbGV0IGNvb3JkcztcbiAgICAgICAgICAgIGxldCBtYXhYID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgbGV0IG1heFkgPSAtKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQpOyAvLyBzZXQgc28gZW5lbWllcyBzcGF3biBhYm92ZVxuICAgICAgICAgICAgbGV0IGVuZW15U2l6ZSA9IDIwO1xuICAgICAgICAgICAgaWYgKCh0aGlzLmNhbnZhcy53aWR0aCAtIG1heFggPj0gMCkgJiYgdGhpcy5jYW52YXMud2lkdGggLSBtYXhYIDw9IGVuZW15U2l6ZSl7IC8vID4gbWF4IGxlbmd0aFxuICAgICAgICAgICAgICAgIG1heFggLT0gZW5lbXlTaXplO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggbWF4WCA8PSBlbmVteVNpemUpeyAvLyA8IG1heCBsZW5ndGhcbiAgICAgICAgICAgICAgICBtYXhYICs9IGVuZW15U2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBlbmVteSA9IG5ldyBFbmVteSh0aGlzLmN0eCwgW21heFgsIG1heFldLCBlbmVteVNpemUpO1xuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2goZW5lbXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdFbmVtaWVzKCl7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIC8vIGRyYXcgZW5lbXlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW1pZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzW2ldO1xuICAgICAgICAgICAgZW5lbXkuZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFyRW5lbWllcygpe1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbWllcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBlbmVteSA9IHRoaXMuZW5lbWllc1tpXTtcbiAgICAgICAgICAgIGVuZW15LmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlRW5lbWllcygpe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbWllcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBlbmVteSA9IHRoaXMuZW5lbWllc1tpXTtcbiAgICAgICAgICAgIGVuZW15LnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmF0dGxlZmllbGQ7IiwiY2xhc3MgRW5lbXkge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCByYWRpdXMpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMuZW5lbXlDb2xvcnMgPSBbXCIjOWJlNWU4XCIsXCIjZTgwYzFlXCIsXCIjN2Y1M2EzXCIsXCIjZmY4NzFmXCIsXCIjZmZmZjBmXCJdO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIC8vIGRyYXcgZW5lbXlcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBsZXQgcmFkaXVzID0gMjA7XG4gICAgICAgIFxuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBsZXQgeCA9IHRoaXMuY29vcmRzWzBdO1xuICAgICAgICBsZXQgeSA9IHRoaXMuY29vcmRzWzFdO1xuICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XG4gICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGguUEkgKiAyO1xuICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZW5lbXlDb2xvcnNbMF07XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNvb3Jkc1sxXSArPSAxO1xuICAgIH1cbiAgICBjbGVhcigpe1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5tYXhYLCB0aGlzLm1heFkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5lbXkiXSwic291cmNlUm9vdCI6IiJ9
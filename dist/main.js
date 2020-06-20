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
    this.enemyColors = ["#9be5e8", "#e80c1e", "#7f53a3", "#ff871f", "#ffff0f"];
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
      var x = 10;
      var y = 10; // draw enemy

      for (var i = 0; i < this.numEnemies; i++) {
        this.ctx.beginPath();
        var radius = 20;
        var startAngle = 0;
        var endAngle = Math.PI * 2;
        this.ctx.arc(x, y, radius, startAngle, endAngle);
        this.ctx.fillStyle = this.enemyColors[0];
        this.ctx.fill(); // x += 10;
        // y += 10;
      }
    }
  }]);

  return Battlefield;
}();

/* harmony default export */ __webpack_exports__["default"] = (Battlefield);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0JhdHRsZWZpZWxkLmpzIl0sIm5hbWVzIjpbIm1haW4iLCJiZiIsIkJhdHRsZWZpZWxkIiwiY3JlYXRlQ2FudmFzIiwiZHJhd0JhdHRsZWZpZWxkIiwiZHJhd1Rvd2VyQ29udGFpbmVyIiwiZHJhd0Nhc3RsZSIsImRyYXdFbmVtaWVzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb3BzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsImJvcmRlciIsImN0eCIsImdldENvbnRleHQiLCJiYXR0bGVmaWVsZENvbG9yIiwiY2FzdGxlQ29sb3IiLCJjYXN0bGVDb29yZHMiLCJudW1Ub3dlcnMiLCJlbmVteUNvbG9ycyIsIm51bUVuZW1pZXMiLCJib2R5IiwiYXBwZW5kIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ0b3dlckNvb3JkcyIsInN0cm9rZVN0eWxlIiwiaSIsIngiLCJ5IiwiYmVnaW5QYXRoIiwicmFkaXVzIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiTWF0aCIsIlBJIiwiYXJjIiwiZmlsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FB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QXZDO0FBQ0EsYUFBS3BCLEdBQUwsQ0FBU1UsU0FBVCxHQUFxQixLQUFLSixXQUFMLENBQWlCLENBQWpCLENBQXJCO0FBQ0EsYUFBS04sR0FBTCxDQUFTd0IsSUFBVCxHQVBxQyxDQVFyQztBQUNBO0FBQ0g7QUFDSDs7Ozs7O0FBRVMxQywwRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBCYXR0bGVmaWVsZCBmcm9tIFwiLi9zY3JpcHRzL0JhdHRsZWZpZWxkXCI7XG4vLyBjb25zdCB0ZXN0T2JqID0ge1xuLy8gICBrZXkxOiBcImhpXCIsXG4vLyAgIGtleTI6IHtcbi8vICAgICBrZXkzOiBcIkhlbGxvXCIsXG4vLyAgIH0sXG4vLyB9O1xuXG4vLyBjb25zdCBncmVldGluZyA9IHRlc3RPYmo/LmtleTI/LmtleTMgfHwgdGVzdE9iai5rZXkxO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiY2VudGVyXCIpO1xuLy8gICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiKTtcbi8vICAgY2FyZC5pbm5lckhUTUwgPSBgPGgyPiR7Z3JlZXRpbmd9IFdvcmxkITwvaDI+YDtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FyZCk7XG4vLyAgIGNvbnN0IGltZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBpbWdDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIsIFwiaW1hZ2UtY2FyZFwiKTtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWdDYXJkKTtcbi8vIH0pO1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBiZiA9IG5ldyBCYXR0bGVmaWVsZCgpO1xuICBiZi5jcmVhdGVDYW52YXMoKTtcbiAgYmYuZHJhd0JhdHRsZWZpZWxkKCk7XG4gIGJmLmRyYXdUb3dlckNvbnRhaW5lcigpO1xuICBiZi5kcmF3Q2FzdGxlKCk7XG4gIGJmLmRyYXdFbmVtaWVzKCk7XG4gIC8vIGRlYnVnZ2VyXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBtYWluKTtcblxuIiwiY2xhc3MgQmF0dGxlZmllbGQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC4zMztcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogLjk7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5iYXR0bGVmaWVsZENvbG9yID0gXCIjM2RkMTFmXCJcbiAgICAvLyAgdGhpcy50b3dlcnNDb250YWluZXJDb2xvciA9IFwiIzQ2NGY0NFwiXG4gICAgLy8gIHRoaXMudG93ZXJDb250YWluZXJDb29yZHMgPSBbdGhpcy5jYW52YXMud2lkdGggKiAuMDMsIHRoaXMuY2FudmFzLmhlaWdodCAqIC44NSwgdGhpcy5jYW52YXMud2lkdGggKiAuOTQsIHRoaXMuY2FudmFzLmhlaWdodCAqIC4xM11cbiAgICAgICAgdGhpcy5jYXN0bGVDb2xvciA9IFwiI2VlZjJlZFwiXG4gICAgICAgIHRoaXMuY2FzdGxlQ29vcmRzID0gW3RoaXMuY2FudmFzLndpZHRoICogLjAzLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiAuOTIsIHRoaXMuY2FudmFzLndpZHRoICogLjk0LCB0aGlzLmNhbnZhcy5oZWlnaHQgKiAuMDddXG4gICAgICAgIHRoaXMubnVtVG93ZXJzID0gNjtcblxuICAgICAgICB0aGlzLmVuZW15Q29sb3JzID0gW1wiIzliZTVlOFwiLFwiI2U4MGMxZVwiLFwiIzdmNTNhM1wiLFwiI2ZmODcxZlwiLFwiI2ZmZmYwZlwiXTtcbiAgICAgICAgdGhpcy5udW1FbmVtaWVzID0gMTA7XG4gICAgIH1cbiAgICAgY3JlYXRlQ2FudmFzKCl7XG4gICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gICAgIH1cbiAgICAgZHJhd0JhdHRsZWZpZWxkKCl7XG4gICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmJhdHRsZWZpZWxkQ29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICB9XG4gICAgIGRyYXdUb3dlckNvbnRhaW5lcigpe1xuICAgICAgICAvLyAgZGVidWdnZXJcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy50b3dlcnNDb250YWluZXJDb2xvcjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy50b3dlckNvbnRhaW5lckNvb3Jkcyk7XG4gICAgIH1cbiAgICAgZHJhd0Nhc3RsZSgpe1xuICAgICAgICAgLy8gZHJhdyBjYXN0bGUgYmFzZVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNhc3RsZUNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNhc3RsZUNvb3Jkcyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdG93ZXJDb29yZHMgPSBbdGhpcy5jYXN0bGVDb29yZHNbMF0gKyAodGhpcy5jYW52YXMud2lkdGggKiAuMDIpLCB0aGlzLmNhc3RsZUNvb3Jkc1sxXSArIHRoaXMuY2FzdGxlQ29vcmRzWzNdLCB0aGlzLmNhbnZhcy53aWR0aCAqIC4xMzMsIHRoaXMuY2FudmFzLmhlaWdodCAqIC0uMDldXG5cbiAgICAgICAgLy8gZHJhdyBjYXN0bGUgdG93ZXJzXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCIjZDRkOWQyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2JkYmZiYlwiO1xuXG4gICAgICAgIC8vIGRpc3BsYXkgdG93ZXJzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Ub3dlcnM7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50b3dlckNvb3Jkcyk7XG4gICAgICAgICAgICB0b3dlckNvb3Jkc1swXSArPSB0b3dlckNvb3Jkc1syXSArICh0aGlzLmNhbnZhcy53aWR0aCAqIC4wMik7XG4gICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGRyYXdFbmVtaWVzKCl7XG4gICAgICAgICBsZXQgeCA9IDEwO1xuICAgICAgICAgbGV0IHkgPSAxMDtcbiAgICAgICAgLy8gZHJhdyBlbmVteVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtRW5lbWllczsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgbGV0IHJhZGl1cyA9IDIwO1xuICAgICAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSAwO1xuICAgICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmVuZW15Q29sb3JzWzBdO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgLy8geCArPSAxMDtcbiAgICAgICAgICAgIC8vIHkgKz0gMTA7XG4gICAgICAgIH1cbiAgICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmF0dGxlZmllbGQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
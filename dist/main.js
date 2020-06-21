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
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");


var testObj = {
  key1: "hi",
  key2: {
    key3: "Hello"
  }
}; // const greeting = testObj?.key2?.key3 || testObj.key1;
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

window.addEventListener("DOMContentLoaded", main);

function main() {
  var canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
  canvas.createCanvas(); // debugger

  var animating = true;

  var animation = function animation() {
    canvas.clearSquare();
    if (animating) canvas.updateSquare();
    canvas.drawSquare();
    window.requestAnimationFrame(animation);
    if (canvas.coords[0] + canvas.coords[2] > canvas.canvas.width) canvas.reverseAnimation();
    if (canvas.coords[0] < 0) canvas.reverseAnimation();
  };

  window.requestAnimationFrame(animation);
  window.addEventListener("keydown", function (event) {
    if (event.which === 32) {
      event.preventDefault();
      canvas.reverseAnimation();
      canvas.setColor("#".concat(Math.floor(Math.random() * 16777215).toString(16)));
    }
  });
  window.addEventListener("mousedown", function (event) {
    event.preventDefault();
    canvas.coords = [event.offsetX, event.offsetY, canvas.canvas.width, canvas.canvas.height];
    canvas.drawSquare();
    console.log(event);
    console.log(canvas.coords); // animating = !animating;
  });
}

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
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

var canvasExample = /*#__PURE__*/function () {
  function canvasExample(props) {
    _classCallCheck(this, canvasExample);

    this.coords = [10, 10, 150, 100];
    this.animationDir = 1;
    this.fillColor = "green";
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * 0.75;
    this.canvas.height = this.canvas.width / 2;
    this.canvas.style.border = "1px solid black";
    this.ctx = this.canvas.getContext("2d");
  }

  _createClass(canvasExample, [{
    key: "createCanvas",
    value: function createCanvas() {
      document.body.append(this.canvas);
    }
  }, {
    key: "drawSquare",
    value: function drawSquare() {
      var _this$ctx;

      debugger;
      this.ctx.fillStyle = this.fillColor;

      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.coords));
    }
  }, {
    key: "updateSquare",
    value: function updateSquare() {
      var _this = this;

      this.coords = this.coords.map(function (coord) {
        return coord += 1 * _this.animationDir;
      });
    }
  }, {
    key: "clearSquare",
    value: function clearSquare() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "reverseAnimation",
    value: function reverseAnimation() {
      this.animationDir *= -1;
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.fillColor = color;
      document.body.style.backgroundColor = color;
      document.body.style.filter = "brightness(150%)";
    }
  }]);

  return canvasExample;
}();

/* harmony default export */ __webpack_exports__["default"] = (canvasExample);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyJdLCJuYW1lcyI6WyJ0ZXN0T2JqIiwia2V5MSIsImtleTIiLCJrZXkzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJjYW52YXMiLCJjYW52YXNFeGFtcGxlIiwiY3JlYXRlQ2FudmFzIiwiYW5pbWF0aW5nIiwiYW5pbWF0aW9uIiwiY2xlYXJTcXVhcmUiLCJ1cGRhdGVTcXVhcmUiLCJkcmF3U3F1YXJlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29vcmRzIiwid2lkdGgiLCJyZXZlcnNlQW5pbWF0aW9uIiwiZXZlbnQiLCJ3aGljaCIsInByZXZlbnREZWZhdWx0Iiwic2V0Q29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIm9mZnNldFgiLCJvZmZzZXRZIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiYW5pbWF0aW9uRGlyIiwiZmlsbENvbG9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJXaWR0aCIsInN0eWxlIiwiYm9yZGVyIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJvZHkiLCJhcHBlbmQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1hcCIsImNvb3JkIiwiY2xlYXJSZWN0IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QUFLSSxZQUFMLElBQXFCLENBQUMsQ0FBdEI7QUFDRDs7OzZCQUVRZ0IsSyxFQUFPO0FBQ2QsV0FBS2YsU0FBTCxHQUFpQmUsS0FBakI7QUFDQWQsY0FBUSxDQUFDTyxJQUFULENBQWNKLEtBQWQsQ0FBb0JZLGVBQXBCLEdBQXNDRCxLQUF0QztBQUNBZCxjQUFRLENBQUNPLElBQVQsQ0FBY0osS0FBZCxDQUFvQmEsTUFBcEI7QUFDRDs7Ozs7O0FBR1kzQyw0RUFBZixFOzs7Ozs7Ozs7OztBQ3RDQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuY29uc3QgdGVzdE9iaiA9IHtcbiAga2V5MTogXCJoaVwiLFxuICBrZXkyOiB7XG4gICAga2V5MzogXCJIZWxsb1wiLFxuICB9LFxufTtcblxuLy8gY29uc3QgZ3JlZXRpbmcgPSB0ZXN0T2JqPy5rZXkyPy5rZXkzIHx8IHRlc3RPYmoua2V5MTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImNlbnRlclwiKTtcbi8vICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIik7XG4vLyAgIGNhcmQuaW5uZXJIVE1MID0gYDxoMj4ke2dyZWV0aW5nfSBXb3JsZCE8L2gyPmA7XG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNhcmQpO1xuLy8gICBjb25zdCBpbWdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgaW1nQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiLCBcImltYWdlLWNhcmRcIik7XG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nQ2FyZCk7XG4vLyB9KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIG1haW4pO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuICBjYW52YXMuY3JlYXRlQ2FudmFzKCk7XG4gIC8vIGRlYnVnZ2VyXG4gIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuXG4gIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBjYW52YXMuY2xlYXJTcXVhcmUoKTtcbiAgICBpZiAoYW5pbWF0aW5nKSBjYW52YXMudXBkYXRlU3F1YXJlKCk7XG4gICAgY2FudmFzLmRyYXdTcXVhcmUoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgaWYgKGNhbnZhcy5jb29yZHNbMF0gKyBjYW52YXMuY29vcmRzWzJdID4gY2FudmFzLmNhbnZhcy53aWR0aClcbiAgICAgIGNhbnZhcy5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgaWYgKGNhbnZhcy5jb29yZHNbMF0gPCAwKSBjYW52YXMucmV2ZXJzZUFuaW1hdGlvbigpO1xuICB9O1xuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LndoaWNoID09PSAzMikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNhbnZhcy5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgICBjYW52YXMuc2V0Q29sb3IoYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YCk7XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNhbnZhcy5jb29yZHMgPSBbZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSwgY2FudmFzLmNhbnZhcy53aWR0aCwgY2FudmFzLmNhbnZhcy5oZWlnaHRdO1xuICAgIGNhbnZhcy5kcmF3U3F1YXJlKCk7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIGNvbnNvbGUubG9nKGNhbnZhcy5jb29yZHMpO1xuICAgIC8vIGFuaW1hdGluZyA9ICFhbmltYXRpbmc7XG4gIH0pO1xufVxuIiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5jb29yZHMgPSBbMTAsIDEwLCAxNTAsIDEwMF07XG4gICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xuICAgIHRoaXMuZmlsbENvbG9yID0gYGdyZWVuYDtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNzU7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIH1cbiAgY3JlYXRlQ2FudmFzKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgfVxuICBkcmF3U3F1YXJlKCkge1xuICAgIGRlYnVnZ2VyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICB9XG4gIHVwZGF0ZVNxdWFyZSgpIHtcbiAgICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgfVxuXG4gIGNsZWFyU3F1YXJlKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gIH1cblxuICBzZXRDb2xvcihjb2xvcikge1xuICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZpbHRlciA9IGBicmlnaHRuZXNzKDE1MCUpYDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNFeGFtcGxlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
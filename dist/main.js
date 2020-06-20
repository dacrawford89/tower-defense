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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsidGVzdE9iaiIsImtleTEiLCJrZXkyIiwia2V5MyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiY2FudmFzIiwiY2FudmFzRXhhbXBsZSIsImNyZWF0ZUNhbnZhcyIsImFuaW1hdGluZyIsImFuaW1hdGlvbiIsImNsZWFyU3F1YXJlIiwidXBkYXRlU3F1YXJlIiwiZHJhd1NxdWFyZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvb3JkcyIsIndpZHRoIiwicmV2ZXJzZUFuaW1hdGlvbiIsImV2ZW50Iiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsInNldENvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJvZmZzZXRYIiwib2Zmc2V0WSIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImFuaW1hdGlvbkRpciIsImZpbGxDb2xvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyV2lkdGgiLCJzdHlsZSIsImJvcmRlciIsImN0eCIsImdldENvbnRleHQiLCJib2R5IiwiYXBwZW5kIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtYXAiLCJjb29yZCIsImNsZWFyUmVjdCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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WUFBTCxJQUFxQixDQUFDLENBQXRCO0FBQ0Q7Ozs2QkFFUWdCLEssRUFBTztBQUNkLFdBQUtmLFNBQUwsR0FBaUJlLEtBQWpCO0FBQ0FkLGNBQVEsQ0FBQ08sSUFBVCxDQUFjSixLQUFkLENBQW9CWSxlQUFwQixHQUFzQ0QsS0FBdEM7QUFDQWQsY0FBUSxDQUFDTyxJQUFULENBQWNKLEtBQWQsQ0FBb0JhLE1BQXBCO0FBQ0Q7Ozs7OztBQUdZM0MsNEVBQWYsRTs7Ozs7Ozs7Ozs7QUN0Q0EsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmNvbnN0IHRlc3RPYmogPSB7XG4gIGtleTE6IFwiaGlcIixcbiAga2V5Mjoge1xuICAgIGtleTM6IFwiSGVsbG9cIixcbiAgfSxcbn07XG5cbi8vIGNvbnN0IGdyZWV0aW5nID0gdGVzdE9iaj8ua2V5Mj8ua2V5MyB8fCB0ZXN0T2JqLmtleTE7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJcIik7XG4vLyAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIpO1xuLy8gICBjYXJkLmlubmVySFRNTCA9IGA8aDI+JHtncmVldGluZ30gV29ybGQhPC9oMj5gO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcbi8vICAgY29uc3QgaW1nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGltZ0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIiwgXCJpbWFnZS1jYXJkXCIpO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ0NhcmQpO1xuLy8gfSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBtYWluKTtcblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbiAgY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuICAvLyBkZWJ1Z2dlclxuICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgY2FudmFzLmNsZWFyU3F1YXJlKCk7XG4gICAgaWYgKGFuaW1hdGluZykgY2FudmFzLnVwZGF0ZVNxdWFyZSgpO1xuICAgIGNhbnZhcy5kcmF3U3F1YXJlKCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIGlmIChjYW52YXMuY29vcmRzWzBdICsgY2FudmFzLmNvb3Jkc1syXSA+IGNhbnZhcy5jYW52YXMud2lkdGgpXG4gICAgICBjYW52YXMucmV2ZXJzZUFuaW1hdGlvbigpO1xuICAgIGlmIChjYW52YXMuY29vcmRzWzBdIDwgMCkgY2FudmFzLnJldmVyc2VBbmltYXRpb24oKTtcbiAgfTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjYW52YXMucmV2ZXJzZUFuaW1hdGlvbigpO1xuICAgICAgY2FudmFzLnNldENvbG9yKGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjYW52YXMuY29vcmRzID0gW2V2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFksIGNhbnZhcy5jYW52YXMud2lkdGgsIGNhbnZhcy5jYW52YXMuaGVpZ2h0XTtcbiAgICBjYW52YXMuZHJhd1NxdWFyZSgpO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICBjb25zb2xlLmxvZyhjYW52YXMuY29vcmRzKTtcbiAgICAvLyBhbmltYXRpbmcgPSAhYW5pbWF0aW5nO1xuICB9KTtcbn1cbiIsImNsYXNzIGNhbnZhc0V4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMuY29vcmRzID0gWzEwLCAxMCwgMTUwLCAxMDBdO1xuICAgIHRoaXMuYW5pbWF0aW9uRGlyID0gMTtcbiAgICB0aGlzLmZpbGxDb2xvciA9IGBncmVlbmA7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAwLjc1O1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB9XG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gIH1cbiAgZHJhd1NxdWFyZSgpIHtcbiAgICBkZWJ1Z2dlclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgfVxuICB1cGRhdGVTcXVhcmUoKSB7XG4gICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5tYXAoKGNvb3JkKSA9PiAoY29vcmQgKz0gMSAqIHRoaXMuYW5pbWF0aW9uRGlyKSk7XG4gIH1cblxuICBjbGVhclNxdWFyZSgpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICB9XG5cbiAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
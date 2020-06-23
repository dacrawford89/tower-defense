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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_Battlefield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Battlefield */ \"./src/scripts/Battlefield.js\");\n/* harmony import */ var _scripts_Timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Timer */ \"./src/scripts/Timer.js\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // const testObj = {\n//   key1: \"hi\",\n//   key2: {\n//     key3: \"Hello\",\n//   },\n// };\n// const greeting = testObj?.key2?.key3 || testObj.key1;\n// window.addEventListener(\"DOMContentLoaded\", () => {\n//   document.body.classList.add(\"center\");\n//   const card = document.createElement(\"div\");\n//   card.classList.add(\"card\", \"center\");\n//   card.innerHTML = `<h2>${greeting} World!</h2>`;\n//   document.body.append(card);\n//   const imgCard = document.createElement(\"div\");\n//   imgCard.classList.add(\"card\", \"center\", \"image-card\");\n//   document.body.appendChild(imgCard);\n// });\n\nvar main = function main() {\n  var bf = new _scripts_Battlefield__WEBPACK_IMPORTED_MODULE_0__[\"default\"](20);\n  bf.createCanvas();\n  bf.drawBattlefield();\n  bf.drawCastle();\n  bf.createTowers();\n  bf.drawTowers();\n  bf.createEnemies();\n  bf.drawEnemies();\n  var animating = true;\n  var timer = new _scripts_Timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0);\n  timer.create();\n\n  var animation = function animation() {\n    bf.drawBattlefield();\n    bf.drawCastle();\n    Object.keys(bf.towers).forEach(function (key) {\n      bf.drawTowers(key);\n    });\n\n    if (timer.remaining < 0 && Object.keys(bf.enemies).length) {\n      timer.clear();\n      bf.attackEnemies();\n      Object.keys(bf.enemies).forEach(function (key) {\n        if (animating) bf.updateEnemies(key);\n        bf.clearEnemies(key);\n        bf.drawEnemies(key);\n      });\n    }\n\n    window.requestAnimationFrame(animation); // if (canvas.coords[0] + canvas.coords[2] > canvas.canvas.width)\n    // canvas.reverseAnimation();\n    // if (canvas.coords[0] < 0) canvas.reverseAnimation();\n  };\n\n  window.requestAnimationFrame(animation);\n};\n\nwindow.addEventListener(\"DOMContentLoaded\", main);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/Battlefield.js":
/*!************************************!*\
  !*** ./src/scripts/Battlefield.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enemy */ \"./src/scripts/Enemy.js\");\n/* harmony import */ var _Castle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Castle */ \"./src/scripts/Castle.js\");\n/* harmony import */ var _Tower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tower */ \"./src/scripts/Tower.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Battlefield = /*#__PURE__*/function () {\n  function Battlefield(numEnemies) {\n    _classCallCheck(this, Battlefield);\n\n    this.canvas = document.createElement('canvas');\n    this.canvas.width = window.innerWidth * .33;\n    this.canvas.height = window.innerHeight * .9;\n    this.canvas.style.border = \"1px solid black\";\n    this.ctx = this.canvas.getContext('2d');\n    this.battlefieldColor = \"#3dd11f\";\n    this.castleCoords = [this.canvas.width * .03, this.canvas.height * .92, this.canvas.width * .94, this.canvas.height * .07];\n    this.firstTowerCoords = [this.castleCoords[0] + this.canvas.width * .02, this.castleCoords[1] + this.castleCoords[3], this.canvas.width * .133, this.canvas.height * -.09];\n    this.numTowers = 6;\n    this.currentLevel = 1;\n    this.numEnemies = numEnemies;\n    this.enemies = {};\n    this.towers = {};\n  }\n\n  _createClass(Battlefield, [{\n    key: \"attackEnemies\",\n    value: function attackEnemies() {\n      var _this = this;\n\n      debugger;\n      var remainingEnemies = Object.keys(this.enemies).length;\n      var enemiesArr = Object.keys(this.enemies).map(function (key) {\n        return _this.enemies[key];\n      });\n      Object.keys(this.towers).forEach(function (towerKey) {\n        if (!_this.towers[towerKey].target) {\n          debugger;\n          var enemyKey = Math.floor(Math.random() * enemiesArr.length);\n          var enemy = enemiesArr[enemyKey];\n          if (enemy.coords[1] < _this.canvas.height && enemy.coords[1] > 0) _this.towers[towerKey].attack(enemy);\n        }\n      });\n      Object.keys(this.enemies).forEach(function (key) {\n        debugger;\n        if (_this.enemies[key].currentHealth <= 0) delete _this.enemies[key];\n      });\n    }\n  }, {\n    key: \"createCanvas\",\n    value: function createCanvas() {\n      document.body.append(this.canvas);\n    }\n  }, {\n    key: \"drawBattlefield\",\n    value: function drawBattlefield() {\n      this.ctx.fillStyle = this.battlefieldColor;\n      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n  }, {\n    key: \"drawCastle\",\n    value: function drawCastle() {\n      var castle = new _Castle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, this.castleCoords);\n      castle.draw();\n    }\n  }, {\n    key: \"createTowers\",\n    value: function createTowers() {\n      for (var i = 0; i < this.numTowers; i++) {\n        var x = this.firstTowerCoords[0];\n        var y = this.firstTowerCoords[1];\n        var width = this.firstTowerCoords[2];\n        var height = this.firstTowerCoords[3];\n        var coords = this.firstTowerCoords;\n        var tower = new _Tower__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, [x, y, width, height]);\n        this.towers[i] = tower;\n        coords[0] += this.firstTowerCoords[2] + this.canvas.width * .02;\n      }\n    }\n  }, {\n    key: \"drawTowers\",\n    value: function drawTowers(key) {\n      var tower = this.towers[key];\n      if (!!tower) tower.draw();\n    }\n  }, {\n    key: \"createEnemies\",\n    value: function createEnemies() {\n      for (var i = 0; i < this.numEnemies; i++) {\n        var coords = void 0;\n        var maxX = Math.random() * this.canvas.width;\n        var maxY = -(Math.random() * this.canvas.height); // set so enemies spawn above\n\n        var enemySize = 20;\n        var health = this.currentLevel * 10; // set x value on enmies to spawn within the canvas\n\n        if (this.canvas.width - maxX >= 0 && this.canvas.width - maxX <= enemySize) {\n          // > max length\n          maxX -= enemySize;\n        } else if (maxX <= enemySize) {\n          // < max length\n          maxX += enemySize;\n        } // set y value on enmies to spawn within the canvas\n\n\n        if (this.canvas.height + maxY >= 0) {\n          // have enemies spawn offscreen from the top\n          maxY -= enemySize;\n        }\n\n        var enemy = new _Enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, [maxX, maxY], enemySize, health);\n        this.enemies[i] = enemy;\n      }\n    }\n  }, {\n    key: \"drawEnemies\",\n    value: function drawEnemies(key) {\n      var enemy = this.enemies[key];\n      if (!!enemy && enemy.coords[1] <= this.castleCoords[1]) enemy.draw();\n    }\n  }, {\n    key: \"clearEnemies\",\n    value: function clearEnemies(key) {\n      var enemy = this.enemies[key];\n      enemy.clear();\n      if (enemy.coords[1] >= this.castleCoords[1]) delete this.enemies[key];\n    }\n  }, {\n    key: \"updateEnemies\",\n    value: function updateEnemies(key) {\n      var enemy = this.enemies[key];\n      if (enemy.coords[1] <= this.castleCoords[1]) enemy.update();\n    }\n  }]);\n\n  return Battlefield;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Battlefield);\n\n//# sourceURL=webpack:///./src/scripts/Battlefield.js?");

/***/ }),

/***/ "./src/scripts/Castle.js":
/*!*******************************!*\
  !*** ./src/scripts/Castle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Castle = /*#__PURE__*/function () {\n  function Castle(ctx, coords) {\n    _classCallCheck(this, Castle);\n\n    this.ctx = ctx;\n    this.coords = coords;\n  }\n\n  _createClass(Castle, [{\n    key: \"draw\",\n    value: function draw() {\n      var _this$ctx;\n\n      this.ctx.fillStyle = \"#eef2ed\";\n\n      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.coords));\n    }\n  }]);\n\n  return Castle;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Castle);\n\n//# sourceURL=webpack:///./src/scripts/Castle.js?");

/***/ }),

/***/ "./src/scripts/Enemy.js":
/*!******************************!*\
  !*** ./src/scripts/Enemy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Enemy = /*#__PURE__*/function () {\n  function Enemy(ctx, coords, radius, health) {\n    _classCallCheck(this, Enemy);\n\n    this.ctx = ctx;\n    this.maxHealth = health;\n    this.currentHealth = health;\n    this.coords = coords;\n    this.enemyColors = [\"#9be5e8\", \"#e80c1e\", \"#7f53a3\", \"#ff871f\", \"#ffff0f\"];\n    this.radius = radius;\n  }\n\n  _createClass(Enemy, [{\n    key: \"draw\",\n    value: function draw() {\n      debugger;\n      this.ctx.beginPath();\n      var radius = 20;\n      var x = this.coords[0];\n      var y = this.coords[1];\n      var startAngle = 0;\n      var endAngle = Math.PI * 2;\n      this.ctx.arc(x, y, radius, startAngle, endAngle);\n      this.ctx.fillStyle = this.enemyColors[0];\n      this.ctx.globalAlpha = this.health / this.maxHealth;\n      this.ctx.fill();\n      this.ctx.globalAlpha = 1;\n      this.ctx.font = \"16px Arial\";\n      this.ctx.fillStyle = \"#ff871f\";\n      this.ctx.fillText(this.currentHealth, x, y);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.coords[1] += 1;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.ctx.clearRect(this.coords[0], this.coords[1], this.maxX, this.maxY);\n    }\n  }]);\n\n  return Enemy;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);\n\n//# sourceURL=webpack:///./src/scripts/Enemy.js?");

/***/ }),

/***/ "./src/scripts/Timer.js":
/*!******************************!*\
  !*** ./src/scripts/Timer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Timer = /*#__PURE__*/function () {\n  function Timer(remaining) {\n    _classCallCheck(this, Timer);\n\n    this.remaining = remaining;\n    this.timer = document.createElement('p');\n    this.timer.classList.add('timer');\n    this.timer.innerText = this.remaining;\n    this.interval = setInterval(this.tick.bind(this), 1000);\n  }\n\n  _createClass(Timer, [{\n    key: \"create\",\n    value: function create() {\n      document.body.prepend(this.timer);\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      this.remaining -= 1;\n      this.timer.innerText = this.remaining;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      clearInterval(this.interval);\n      this.timer.innerText = \"\";\n    }\n  }]);\n\n  return Timer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\n//# sourceURL=webpack:///./src/scripts/Timer.js?");

/***/ }),

/***/ "./src/scripts/Tower.js":
/*!******************************!*\
  !*** ./src/scripts/Tower.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Tower = /*#__PURE__*/function () {\n  function Tower(ctx, coords) {\n    _classCallCheck(this, Tower);\n\n    this.ctx = ctx;\n    this.coords = coords;\n    this.damage = 1;\n    this.speed = 100;\n  }\n\n  _createClass(Tower, [{\n    key: \"draw\",\n    value: function draw() {\n      var _this$ctx;\n\n      this.ctx.strokeStyle = \"#d4d9d2\";\n      this.ctx.fillStyle = \"#bdbfbb\";\n\n      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.coords));\n    }\n  }, {\n    key: \"attack\",\n    value: function attack(enemy) {\n      debugger;\n      console.log('hi');\n      enemy.currentHealth -= this.damage;\n    }\n  }]);\n\n  return Tower;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tower);\n\n//# sourceURL=webpack:///./src/scripts/Tower.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ })

/******/ });
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\nconst Gameboard = () => {\n    let board = Array(100).fill(\"\").\n        reduce((rows, key, index) => (index % 10 == 0 ? rows.push([key])\n        : rows[rows.length-1].push(key)) && rows, []);\n    const ships = {\n        carrier: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(5),\n        battleship: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(4),\n        cruiser: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3),\n        submarine: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3),\n        destroyer: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(2),\n    }\n    const placeShip = (ship, x, y, rotation) => {\n        const length = ships[ship].length;\n        console.log(length);\n        if (rotation === 'vertical') {\n            if (length + y > 10) {\n                return board;\n            } else {\n                for (let i = 0; i < length; i++) {\n                    board[y][x] = 1;\n                    y++;\n                }\n                return board;\n            }\n        } else if (rotation === 'horizontal') {\n            if (length + x > 10) {\n                return;\n            } else {\n                for (let i = 0; i < length; i++) {\n                    board[y][x] = 1;\n                    x++;\n                }\n                return board;\n            }\n        }\n    }\n    return { ships, board, placeShip };\n};\n\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\n\nconsole.log(\"test\");\nconst gameboard1 = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\nconst gameboard2 = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n//console.log(gameboard.createBoard());\ngameboard1.board[1][1] = 1;\nconsole.log(gameboard1.board);\nconsole.log(gameboard1.ships);\ngameboard1.placeShip('battleship', 1, 1, 'vertical');\nconsole.log(gameboard1.board);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\nconst shipFactory = (length) => {\n    const health = Array(length).fill(1);\n    const hit = place => {\n        health[place] = 0;\n    }\n    const isSunk = () => {\n        return health.reduce((a, b) => a + b, 0) === 0;\n    }\n    return {\n        length,\n        health,\n        hit,\n        isSunk\n    };\n};\n\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
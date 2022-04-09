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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\nconst dom = (() => {\n    const createGrid = () => {\n        const gridContainer = document.createElement('div');\n        gridContainer.className = 'grid-container';\n        const grid = document.createElement('div');\n        grid.id = 'grid';\n\n        let rows = 0;\n        let cols = 0;\n        while (cols < 10) {\n            while (rows < 10) {\n                let element = document.createElement('div');\n                element.setAttribute('data-id', ([rows, cols]));\n                grid.appendChild(element);\n                rows ++;\n            }\n            cols++;\n            rows = 0;\n        }\n/*        for (let i = 0; i < 10; i++) {\n            let gridRow = document.createElement('div');\n            gridRow.setAttribute('data-id', ([i, j]));\n            grid.appendChild(gridRow);\n            for (let j = 0; j < 10; j++) {\n                let gridCol = document.createElement('div');\n                gridCol.setAttribute('data-id', ([i, j]));\n                grid.appendChild(gridCol);\n            }\n        }*/\n\n        gridContainer.appendChild(grid);\n        return gridContainer;\n    }\n    const createShips = () =>{\n        const shipContainer = document.createElement('div');\n        shipContainer.className = 'ship-container';\n\n        const carrier = document.createElement('p');\n        const battleship = document.createElement('p');\n        const cruiser = document.createElement('p');\n        const submarine = document.createElement('p');\n        const destroyer = document.createElement('p');\n\n        carrier.id = 'carrier';\n        battleship.id = 'battleship';\n        cruiser.id = 'cruiser';\n        submarine.id = 'submarine';\n        destroyer.id = 'destroyer';\n        shipContainer.appendChild(carrier);\n        shipContainer.appendChild(battleship);\n        shipContainer.appendChild(cruiser);\n        shipContainer.appendChild(submarine);\n        shipContainer.appendChild(destroyer);\n        return shipContainer;\n    }\n    const players = () => {\n        const playerContainer = document.createElement('div');\n        playerContainer.className = 'player-container';\n\n        const player = document.createElement('p');\n        player.id = 'player';\n\n        const element = document.querySelector('.player-container');\n        element.appendChild(player);\n        return element;\n    }\n\n    return {createGrid, createShips, players}\n})();\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
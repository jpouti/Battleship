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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* reset margin & padding from css */\\nhtml {\\n    box-sizing: border-box;\\n}\\n\\n*, *::before, *::after {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: inherit;\\n}\\n\\n.content {\\n    width: 100vw;\\n    height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.header-container {\\n    height: 15vh;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.main-content  {\\n    display: flex;\\n    justify-content: space-between;\\n    margin-left: 5vw;\\n    margin-right: 5vw;\\n}\\n\\n.player-container {\\n    display: grid;\\n    grid-template-columns: repeat(2, 1fr);\\n}\\n\\n.ship-container {\\n    grid-column-start: 1;\\n    grid-row-start: 2;\\n    margin-bottom: 2vh;\\n}\\n\\n.btn-container-player {\\n    grid-column-start: 2;\\n    grid-row-start: 1;\\n    grid-row-end: 3;\\n}\\n\\n.btn-container-player > button {\\n    margin-top: 1vh;\\n    margin-left: 1vw;\\n}\\n\\n#grid1,\\n#grid2 {\\n    display: grid;\\n    grid-template-columns: repeat(10, 4vw);\\n    grid-template-rows: repeat(10, 4vh);\\n}\\n\\n#grid1 > div,\\n#grid2 > div {\\n    border: 0.5px solid black;\\n}\\n\\n#grid1 :hover,\\n#grid2 :hover {\\n    background-color: grey;\\n}\\n\\n.game-btn-container {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    margin-top: 2.5vh;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\nconst dom = (() => {\n    //create 10x10 grid elements\n    const createGrid = (num) => {\n        const gridContainer = document.createElement('div');\n        gridContainer.className = 'grid-container' + num;\n        const grid = document.createElement('div');\n        grid.id = 'grid' + num;\n\n        let rows = 0;\n        let cols = 0;\n        while (cols < 10) {\n            while (rows < 10) {\n                let element = document.createElement('div');\n                element.setAttribute('data-id', ([rows, cols]));\n                element.id = [rows, cols, num];\n                element.className = 'grid-item' + num;\n                grid.appendChild(element);\n                rows ++;\n            }\n            cols++;\n            rows = 0;\n        }\n        gridContainer.appendChild(grid);\n        return gridContainer;\n    }\n    //create elements for ships with id linked to related player\n    const createShips = (player) =>{\n        const shipContainer = document.createElement('div');\n        shipContainer.className = 'ship-container';\n\n        const carrier = document.createElement('div');\n        const battleship = document.createElement('div');\n        const cruiser = document.createElement('div');\n        const submarine = document.createElement('div');\n        const destroyer = document.createElement('div');\n\n        carrier.id = 'carrier-' + player.name;\n        battleship.id = 'battleship-'+ player.name;\n        cruiser.id = 'cruiser-'+ player.name;\n        submarine.id = 'submarine-'+ player.name;\n        destroyer.id = 'destroyer-'+ player.name;\n\n        carrier.textContent = Array(5);\n        battleship.textContent = Array(4);\n        cruiser.textContent = Array(3);\n        submarine.textContent = Array(3);\n        destroyer.textContent = Array(2);\n\n        shipContainer.appendChild(carrier);\n        shipContainer.appendChild(battleship);\n        shipContainer.appendChild(cruiser);\n        shipContainer.appendChild(submarine);\n        shipContainer.appendChild(destroyer);\n        return shipContainer;\n    }\n    // create elements for players\n    const players = (name) => {\n        const playerContainer = document.createElement('div');\n        playerContainer.className = 'player-container';\n        playerContainer.id = 'player-container-' + name.name;\n\n        const player = document.createElement('h3');\n        player.id = name.name;\n        player.textContent = name.name;\n\n        playerContainer.appendChild(player);\n        playerContainer.appendChild(dom.createShips(name));\n        return playerContainer;\n    }\n    // create buttons for player\n    const playerBtns = () => {\n        const btnContainer = document.createElement('div');\n        btnContainer.className = 'btn-container-player';\n\n        const changeNameBtn = document.createElement('button');\n        changeNameBtn.id = 'name-btn-1';\n        changeNameBtn.textContent = 'Change name';\n\n        const shipBtn = document.createElement('button');\n        shipBtn.id = 'ship-btn';\n        shipBtn.textContent = 'Randomize ships';\n\n        const attackBtn = document.createElement('button');\n        attackBtn.id = 'attack-btn';\n        attackBtn.textContent = 'Random attack'\n\n        btnContainer.appendChild(changeNameBtn);\n        btnContainer.appendChild(shipBtn);\n        btnContainer.appendChild(attackBtn);\n\n        return btnContainer;\n    }\n    //create button for computer\n    const computerBtns = () => {\n        const btnContainer = document.createElement('div');\n        btnContainer.className = 'btn-container-computer';\n\n        const changeNameBtn = document.createElement('button');\n        changeNameBtn.id = 'name-btn-2';\n        changeNameBtn.textContent = 'Change name';\n\n        btnContainer.appendChild(changeNameBtn);\n        return btnContainer;\n    }\n    // create buttons related to overall gameplay\n    const gameBtns = () => {\n        const gameBtnContainer = document.createElement('div');\n        gameBtnContainer.className = 'game-btn-container';\n\n        const newGameBtn = document.createElement('button');\n        newGameBtn.id = 'new-btn';\n        newGameBtn.textContent = 'Start Game';\n\n        gameBtnContainer.appendChild(newGameBtn);\n        return gameBtnContainer;\n    }\n    // display gameboard array from selected player in the grid\n    const displayGridPlayer = (player) => {\n        let rows = 0;\n        let cols = 0;\n        while (cols < 10) {\n            while (rows < 10) {\n                let gridElement = document.getElementById([rows, cols, 1]);\n                if (player.gameboard.board[cols][rows] === \"\") {\n                    gridElement.textContent = player.gameboard.board[cols][rows];    \n                } else if (player.gameboard.board[cols][rows] !== \"\") {\n                    gridElement.textContent = player.gameboard.board[cols][rows][0];   \n                }\n                rows ++;\n            }\n            cols++;\n            rows = 0;\n        }\n    }\n    const displayGridComputer = (player) => {\n        let rows = 0;\n        let cols = 0;\n        while (cols < 10) {\n            while (rows < 10) {\n                let gridElement = document.getElementById([rows, cols, 2]);\n                if (player.gameboard.board[cols][rows] === \"\") {\n                    gridElement.textContent = player.gameboard.board[cols][rows];    \n                } else if (player.gameboard.board[cols][rows] === \"miss\") {\n                    gridElement.textContent = 'M'  \n                } else if (player.gameboard.board[cols][rows] === \"hit\") {\n                    gridElement.textContent = 'H';   \n                } else if (player.gameboard.board[cols][rows] !== \"\") {\n                    gridElement.textContent = \"\";   \n                } \n                rows ++;\n            }\n            cols++;\n            rows = 0;\n        }\n    }\n    const pageLoad = (player1, player2) => {\n        const content = document.querySelector('.content');\n\n        while(content.firstChild) {\n            content.removeChild(content.firstChild);\n        }\n\n        const headerContainer = document.createElement('div');\n        headerContainer.className = 'header-container';\n\n        const header = document.createElement('h3');\n        header.textContent = 'Battleship';\n        headerContainer.appendChild(header);\n        content.appendChild(headerContainer);\n\n        const mainContent = document.createElement('div');\n        mainContent.className = 'main-content';\n\n        const player1Content = document.createElement('div');\n        player1Content.className = 'player1-content';\n\n        player1Content.appendChild(dom.players(player1));\n        player1Content.appendChild(dom.createGrid('1'));\n\n        const playerContainer1 = player1Content.firstChild;\n        playerContainer1.appendChild(playerBtns());\n\n        const player2Content = document.createElement('div');\n        player2Content.className = 'player2-content';\n\n        player2Content.appendChild(dom.players(player2));\n        player2Content.appendChild(dom.createGrid('2'));\n        \n        const playerContainer2 = player2Content.firstChild;\n        playerContainer2.appendChild(computerBtns());\n\n        mainContent.appendChild(player1Content);\n        mainContent.appendChild(player2Content);\n        content.appendChild(mainContent);\n        content.appendChild(gameBtns());\n    }\n    return {createGrid, createShips, players, displayGridPlayer, displayGridComputer, pageLoad}\n})();\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\nconst game = (() => {\n    const changeName = (player, newName) => {\n        const playerName = document.getElementById(player.name);\n        playerName.textContent = newName;\n        player.name = newName;\n    }\n    const randomShip = (player) => {\n        player.gameboard.clearBoard();\n        player.gameboard.randomPlacement();\n        _dom_js__WEBPACK_IMPORTED_MODULE_1__.dom.displayGridPlayer(player);\n    }\n    const newGame = (player1, player2) => {\n        _dom_js__WEBPACK_IMPORTED_MODULE_1__.dom.displayGridPlayer(player1);\n        _dom_js__WEBPACK_IMPORTED_MODULE_1__.dom.displayGridComputer(player2);\n        let turn = 0;\n        const checkTurn = () => {\n            if (turn % 2 === 0) {\n                console.log(player1);\n                return player1;\n            } else if (turn % 2 !== 0) {\n                console.log(player2);\n                return player2;\n            }\n        }\n        const activateGrid = () => {\n            const grid = document.querySelectorAll('#grid2');\n            grid.forEach(item => {\n                item.addEventListener('click', listener);\n            });\n        };\n        const listener = (event) => {\n            const y = event.path[0].id[0];\n            const x = event.path[0].id[2];\n            if (player2.gameboard.board[x][y] === 'miss' || player2.gameboard.board[x][y] === 'hit') {\n                return;\n            } else if (player2.gameboard.board[x][y].length > 1 || player2.gameboard.board[x][y] === '') {\n                player1.attack(x, y, player2);\n                _dom_js__WEBPACK_IMPORTED_MODULE_1__.dom.displayGridComputer(player2);\n                if (winner() !== false) {\n                    console.log(winner());\n                    return;\n                }\n                turn++;\n\n                player2.computerAttack(player1);\n                _dom_js__WEBPACK_IMPORTED_MODULE_1__.dom.displayGridPlayer(player1);\n                if (winner() !== false) {\n                    console.log(winner());\n                } \n                return;\n            }\n        }\n        const deactivateGrid = () => {\n            const grid = document.querySelectorAll('#grid2');\n            grid.forEach(item => {\n                item.removeEventListener('click', listener);\n            });\n        };     \n        const winner = () => {\n            if (player1.gameboard.everythingLost() === true) {\n                console.log('p2 won');\n                deactivateGrid();\n                deactivateRandomAttack();\n                return player2;\n            } else if (player2.gameboard.everythingLost() === true) {\n                console.log('p1 won');\n                deactivateGrid();\n                deactivateRandomAttack();\n                return player1;\n            } else {\n                return false;\n            }\n        }\n        const randomAttackPlayer = () => {\n            player1.computerAttack(player2);\n            _dom_js__WEBPACK_IMPORTED_MODULE_1__.dom.displayGridComputer(player2);\n            if (winner() !== false) {\n                console.log(winner());\n                return;\n            }\n            turn++;\n    \n            player2.computerAttack(player1);\n            _dom_js__WEBPACK_IMPORTED_MODULE_1__.dom.displayGridPlayer(player1);\n            if (winner() !== false) {\n                console.log(winner());\n            } \n            return;\n        }\n        const activateRandomAttack = () => {\n            const randomAttackBtn = document.getElementById('attack-btn');\n            randomAttackBtn.addEventListener('click', randomAttackPlayer);\n        }\n        const deactivateRandomAttack = () => {\n            const randomAttackBtn = document.getElementById('attack-btn');\n            randomAttackBtn.removeEventListener('click', randomAttackPlayer);\n        }\n        activateGrid();\n        activateRandomAttack();\n    }\n    return { changeName, newGame, randomShip };\n})();\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\nconst Gameboard = () => {\n    let board = Array(100).fill(\"\").\n        reduce((rows, key, index) => (index % 10 == 0 ? rows.push([key])\n        : rows[rows.length-1].push(key)) && rows, []);\n    const ships = {\n        carrier: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(5),\n        battleship: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(4),\n        cruiser: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3),\n        submarine: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3),\n        destroyer: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(2),\n    }\n    const placeShip = (ship, x, y, rotation) => {\n        const length = ships[ship].length;\n        if (placementCheck(ship, rotation, x, y) === true) {\n            if (rotation === 'vertical') {\n                if (length + y > 10) {\n                    console.log(\"Can't cheat! The ship must be placed inside the gameboard, please try again!\");\n                    return board;\n                } else {\n                    for (let i = 0; i < length; i++) {\n                        board[y][x] = [1, ship, i]; // i to indicate place for hit function\n                        y++;\n                    }\n                    return board;\n                }\n            } else if (rotation === 'horizontal') {\n                if (length + x > 10) {\n                    console.log(\"Can't cheat! The ship must be placed inside the gameboard, please try again!\");\n                    return board;\n                } else {\n                    for (let i = 0; i < length; i++) {\n                        board[y][x] = [1, ship, i]; // i to indicate place for hit function\n                        x++;\n                    }\n                    return board;\n                }\n            }   \n        } else if (placementCheck(ship, rotation, x, y) !== true) {\n            return false;\n        }\n    }\n    const receiveAttack = (x, y) => {\n        if (board[x][y][0] === 1) {\n            const ship = board[x][y][1];\n            const place = board[x][y][2];\n            board[x][y] = 'hit';\n            ships[ship].hit(place);\n            ships[ship].isSunk();\n            return board;\n        } else if (board[x][y] === \"\") {\n            board[x][y] = 'miss';\n            return board;\n        } else if (board[x][y] === 'hit' || board[x][y] === 'miss') {\n            console.log('You have already shot here, please try again for a new spot');\n            return board;\n        }\n    }\n    const everythingLost = () => {\n        return Object.values(ships).every(item => item.isSunk() === true);\n    }\n    const placementCheck = (ship, rotation, x, y) => {\n        const length = ships[ship].length;\n        const placemetArray = [];\n        if (rotation === 'vertical') {\n            for (let index = 0; index < length; index++) {\n                placemetArray.push(board[y + index][x]);\n            };\n            if (placemetArray.every(e => e === \"\")) {\n                return true;\n            } else if (placemetArray.every(e => e !== \"\")) {\n                return false;\n            };\n        } else if (rotation === 'horizontal') {\n            for (let index = 0; index < length; index++) {\n                placemetArray.push(board[y][x + index]);\n            };\n            if (placemetArray.every(e => e === \"\")) {\n                return true;\n            } else if (placemetArray.every(e => e !== \"\")) {\n                return false;\n            }\n        }\n    }\n    const randomCoordinates = (ship, rotation) => {\n        if (rotation === 'vertical') {\n            const x = Math.floor(Math.random() * 10);\n            const y = Math.floor(Math.random() * (10 - ships[ship].length));   \n            return {x, y};\n        } else if (rotation === 'horizontal') {\n            const x = Math.floor(Math.random() * (10 - ships[ship].length));\n            const y = Math.floor(Math.random() * 10);   \n            return {x, y};\n        }\n    }\n    const randomPlacement = () => {\n        const rotationValues = ['horizontal', 'vertical'];\n        let randomRotation;\n        let x;\n        let y;\n        let loop;\n        Object.getOwnPropertyNames(ships).forEach(item => {\n            do {\n                randomRotation = Math.floor(Math.random() * rotationValues.length);\n                let coords = randomCoordinates(item, rotationValues[randomRotation]);\n                x = coords.x;\n                y = coords.y;\n                loop = placeShip(item, x, y, rotationValues[randomRotation]);\n                placeShip(item, x, y, rotationValues[randomRotation]);\n            } while (loop === false);\n        });\n    };\n    const clearBoard = () => {\n        for (let i = 0; i < board.length; i++) {\n            let row = board[i];\n            for (let j = 0; j < row.length; j++) {\n                board[i][j] = \"\";\n            }\n        }\n        return board;\n    }\n    return { ships, board, placeShip, receiveAttack, everythingLost, placementCheck, randomPlacement, clearBoard };\n};\n\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n// create page with default player names and settings\nconst player1 = (0,_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)('Player1');\nconst player2 = (0,_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)('Computer');\n_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom.pageLoad(player1, player2);\n_game_js__WEBPACK_IMPORTED_MODULE_1__.game.randomShip(player1);\nplayer2.gameboard.randomPlacement();\n\n//create event listeners for buttons\nconst changeNameBtnPlayer1 = document.getElementById('name-btn-1');\nchangeNameBtnPlayer1.addEventListener('click', () => {\n    let input = prompt('Please give a new name for your player!');\n    _game_js__WEBPACK_IMPORTED_MODULE_1__.game.changeName(player1, input);\n});\n\nconst changeNameBtnPlayer2 = document.getElementById('name-btn-2');\nchangeNameBtnPlayer2.addEventListener('click', () => {\n    let input = prompt('Please give a new name for your player!');\n    _game_js__WEBPACK_IMPORTED_MODULE_1__.game.changeName(player2, input);\n});\n\nconst randomShips = document.getElementById('ship-btn');\nrandomShips.addEventListener('click', shipListener);\n\nconst startGame = document.getElementById('new-btn');\nstartGame.addEventListener('click', () => {\n    _game_js__WEBPACK_IMPORTED_MODULE_1__.game.newGame(player1, player2);\n    randomShips.removeEventListener('click', shipListener); // remove option to change ship locations after new game is called\n})\n\nfunction shipListener() {\n    _game_js__WEBPACK_IMPORTED_MODULE_1__.game.randomShip(player1);\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\n\nconst Player = (name) => {\n    const gameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n    const attack = (x, y, player) => {\n        player.gameboard.receiveAttack(x, y);\n    }\n    let computerAttackArray = [];\n    const computerAttack = (player) => {\n        let x = Math.floor(Math.random() * 10);\n        let y = Math.floor(Math.random() * 10);\n        if (player.gameboard.board[x][y] === '' || player.gameboard.board[x][y][0] === 1) {\n            player.gameboard.receiveAttack(x, y);\n            computerAttackArray.push({x, y});\n        } else {\n            computerAttack(player);\n        }\n    }\n    return {\n        name,\n        gameboard,\n        computerAttackArray,\n        attack,\n        computerAttack,\n    };\n};\n\n\n\n//# sourceURL=webpack:///./src/player.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
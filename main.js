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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Klee+One&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --ink: #2e2925;\n  --muted: #716961;\n  --cream: #fffaf1;\n  --paper: #fffdf8;\n  --red: #b94a3c;\n  --gold: #d7a34b;\n  --line: #eadfce;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  color: var(--ink);\n  background: var(--cream);\n  font-family: \"DM Sans\", sans-serif;\n  line-height: 1.6;\n}\n\n.site-header {\n  padding: 3rem 1.5rem 0;\n  text-align: center;\n  background: var(--paper);\n  border-bottom: 1px solid var(--line);\n}\n\n.header-inner,\n.page {\n  width: min(100% - 3rem, 960px);\n  margin: 0 auto;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  line-height: 1.15;\n}\n\nh1,\nh2 {\n  font-family: \"Klee One\", cursive;\n  font-weight: 700;\n}\n\nh1 {\n  color: var(--red);\n  font-size: clamp(2.4rem, 7vw, 4.5rem);\n}\n\nh2 {\n  margin-bottom: 1rem;\n  font-size: clamp(2rem, 5vw, 3.25rem);\n}\n\nh3 {\n  font-size: 1.15rem;\n}\n\n.eyebrow {\n  margin: 0 0 0.75rem;\n  color: var(--red);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.tagline {\n  margin: 0.75rem auto 2rem;\n  color: var(--muted);\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.nav-button,\n.text-button {\n  border: 0;\n  cursor: pointer;\n  font: inherit;\n}\n\n.nav-button {\n  padding: 0.8rem 1.5rem;\n  color: var(--muted);\n  background: transparent;\n  border-bottom: 3px solid transparent;\n}\n\n.nav-button:hover,\n.nav-button.active {\n  color: var(--red);\n  border-bottom-color: var(--red);\n}\n\n.page {\n  padding: 4.5rem 0;\n}\n\n.home-page {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 4rem;\n  align-items: center;\n  width: 100%;\n  max-width: none;\n  padding: 5rem max(1.5rem, calc((100% - 960px) / 2));\n  background-image: linear-gradient(\n    90deg,\n    rgba(255, 250, 241, 0.96),\n    rgba(255, 250, 241, 0.78)\n  ), var(--hero-image);\n  background-position: center;\n  background-size: cover;\n}\n\n.lead {\n  color: var(--muted);\n  font-size: 1.15rem;\n}\n\n.feature-card,\n.story-card,\n.details-card,\n.dish-card {\n  background: var(--paper);\n  border: 1px solid var(--line);\n  border-radius: 0.5rem;\n}\n\n.feature-card,\n.story-card,\n.details-card {\n  padding: 2rem;\n}\n\n.feature-image,\n.story-image,\n.owner-image,\n.dish-image {\n  display: block;\n  width: 100%;\n  object-fit: cover;\n}\n\n.feature-image {\n  height: 240px;\n  margin: -2rem -2rem 2rem;\n  width: calc(100% + 4rem);\n  border-radius: 0.5rem 0.5rem 0 0;\n}\n\n.feature-card {\n  border-top: 5px solid var(--gold);\n}\n\n.feature-card h3 {\n  margin-bottom: 0.75rem;\n}\n\n.text-button {\n  padding: 0;\n  color: var(--red);\n  background: transparent;\n  font-weight: 700;\n}\n\n.text-button:hover {\n  text-decoration: underline;\n}\n\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n  margin-top: 2.5rem;\n}\n\n.dish-card {\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem;\n}\n\n.dish-image {\n  margin: -1.5rem -1.5rem 1.5rem;\n  width: calc(100% + 3rem);\n  height: 240px;\n  object-fit: cover;\n  border-radius: 0.5rem 0.5rem 0 0;\n}\n\n.dish-heading {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  min-height: 2.6em;\n  margin-bottom: 0.75rem;\n}\n\n.dish-card p {\n  min-height: 4.8em;\n  margin: 0;\n  color: var(--muted);\n}\n\n.details-card p {\n  margin: 0;\n  color: var(--muted);\n}\n\n.hours {\n  white-space: nowrap;\n}\n\n.price {\n  color: var(--red);\n  font-weight: 700;\n}\n\n.about-page {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 1rem;\n}\n\n.story-card {\n  border-top: 5px solid var(--gold);\n}\n\n.story-image {\n  height: 240px;\n  margin: -2rem -2rem 2rem;\n  width: calc(100% + 4rem);\n  border-radius: 0.5rem 0.5rem 0 0;\n}\n\n.owner-image {\n  height: 220px;\n  margin-bottom: 1.5rem;\n  border-radius: 0.25rem;\n}\n\n.details-card h3 {\n  margin-bottom: 1rem;\n}\n\n.dining-info {\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--line);\n}\n\n.chef-info .eyebrow {\n  margin-bottom: 0.5rem;\n}\n\n.chef-info h3 {\n  margin-bottom: 0.35rem;\n}\n\n@media (max-width: 700px) {\n  .home-page,\n  .about-page,\n  .menu-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .page {\n    padding: 3rem 0;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restauraunt_page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restauraunt_page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restauraunt_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restauraunt_page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restauraunt_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restauraunt_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restauraunt_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restauraunt_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restauraunt_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restauraunt_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/assets/food/apple_rissoto.jpg"
/*!*******************************************!*\
  !*** ./src/assets/food/apple_rissoto.jpg ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e569d2efbbbdfb7551c2.jpg\";\n\n//# sourceURL=webpack://restauraunt_page/./src/assets/food/apple_rissoto.jpg?\n}");

/***/ },

/***/ "./src/assets/food/chaliapin_steak_bowl.jpg"
/*!**************************************************!*\
  !*** ./src/assets/food/chaliapin_steak_bowl.jpg ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"da646fddb7b9e4c944f1.jpg\";\n\n//# sourceURL=webpack://restauraunt_page/./src/assets/food/chaliapin_steak_bowl.jpg?\n}");

/***/ },

/***/ "./src/assets/food/cheese_feathered_hanetsuki_gyoza.jpg"
/*!**************************************************************!*\
  !*** ./src/assets/food/cheese_feathered_hanetsuki_gyoza.jpg ***!
  \**************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a71613c2dfd972ce84ff.jpg\";\n\n//# sourceURL=webpack://restauraunt_page/./src/assets/food/cheese_feathered_hanetsuki_gyoza.jpg?\n}");

/***/ },

/***/ "./src/assets/food/evolving_nori_bento.jpg"
/*!*************************************************!*\
  !*** ./src/assets/food/evolving_nori_bento.jpg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"fbef2abef4706d5da050.jpg\";\n\n//# sourceURL=webpack://restauraunt_page/./src/assets/food/evolving_nori_bento.jpg?\n}");

/***/ },

/***/ "./src/assets/food/gotcha-pork-roast-5.jpg"
/*!*************************************************!*\
  !*** ./src/assets/food/gotcha-pork-roast-5.jpg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3b0016f9ec854b7a06fe.jpg\";\n\n//# sourceURL=webpack://restauraunt_page/./src/assets/food/gotcha-pork-roast-5.jpg?\n}");

/***/ },

/***/ "./src/assets/food/rainbow_terrine.jpg"
/*!*********************************************!*\
  !*** ./src/assets/food/rainbow_terrine.jpg ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ad4e4ecc509ceadcbd6f.jpg\";\n\n//# sourceURL=webpack://restauraunt_page/./src/assets/food/rainbow_terrine.jpg?\n}");

/***/ },

/***/ "./src/assets/food/sumire_karage_roll.jpg"
/*!************************************************!*\
  !*** ./src/assets/food/sumire_karage_roll.jpg ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8f1742f005f323dffa2b.jpg\";\n\n//# sourceURL=webpack://restauraunt_page/./src/assets/food/sumire_karage_roll.jpg?\n}");

/***/ },

/***/ "./src/assets/food/transforming_furikake_gohan.jpg"
/*!*********************************************************!*\
  !*** ./src/assets/food/transforming_furikake_gohan.jpg ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f17be16a6101f8a7780a.jpg\";\n\n//# sourceURL=webpack://restauraunt_page/./src/assets/food/transforming_furikake_gohan.jpg?\n}");

/***/ },

/***/ "./src/assets/owner/joichiro_yukihara.jpg"
/*!************************************************!*\
  !*** ./src/assets/owner/joichiro_yukihara.jpg ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"bdab59197ef1364dcd19.jpg\";\n\n//# sourceURL=webpack://restauraunt_page/./src/assets/owner/joichiro_yukihara.jpg?\n}");

/***/ },

/***/ "./src/assets/restauraunt/restauraunt_yukihara.jpg"
/*!*********************************************************!*\
  !*** ./src/assets/restauraunt/restauraunt_yukihara.jpg ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a3324093d5f4d8fb197a.jpg\";\n\n//# sourceURL=webpack://restauraunt_page/./src/assets/restauraunt/restauraunt_yukihara.jpg?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _assets_owner_joichiro_yukihara_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/owner/joichiro_yukihara.jpg */ \"./src/assets/owner/joichiro_yukihara.jpg\");\n/* harmony import */ var _assets_restauraunt_restauraunt_yukihara_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/restauraunt/restauraunt_yukihara.jpg */ \"./src/assets/restauraunt/restauraunt_yukihara.jpg\");\n\n\n\nfunction createElement(tag, className, text) {\n  const element = document.createElement(tag);\n  element.className = className;\n  if (text) element.textContent = text;\n  return element;\n}\n\nfunction createImage(src, alt, className) {\n  const image = document.createElement(\"img\");\n  image.src = src;\n  image.alt = alt;\n  image.className = className;\n  return image;\n}\n\nfunction loadAbout() {\n  const page = createElement(\"section\", \"page about-page\");\n  const story = createElement(\"div\", \"story-card\");\n  story.append(\n    createImage(\n      _assets_restauraunt_restauraunt_yukihara_jpg__WEBPACK_IMPORTED_MODULE_1__,\n      \"The welcoming dining room of a family restaurant\",\n      \"story-image\"\n    )\n  );\n  story.append(\n    createElement(\"p\", \"eyebrow\", \"Our story\"),\n    createElement(\"h2\", \"\", \"A neighborhood table\"),\n    createElement(\n      \"p\",\n      \"\",\n      \"Restaurant Yukihara began as a small family kitchen and grew one regular, one recipe, and one shared meal at a time.\"\n    ),\n    createElement(\n      \"p\",\n      \"\",\n      \"Our food is rooted in Japanese home cooking, but we are never afraid to experiment. We believe the best meals feel welcoming, generous, and a little unexpected.\"\n    )\n  );\n\n  const details = createElement(\"div\", \"details-card\");\n  details.append(\n    createImage(\n      _assets_owner_joichiro_yukihara_jpg__WEBPACK_IMPORTED_MODULE_0__,\n      \"Jōichirō Yukihara, chef and owner of Restaurant Yukihara\",\n      \"owner-image\"\n    )\n  );\n  const chefInfo = createElement(\"div\", \"chef-info\");\n  chefInfo.append(\n    createElement(\"p\", \"eyebrow\", \"Chef and owner\"),\n    createElement(\"h3\", \"\", \"Jōichirō Yukihara\"),\n  );\n\n  const diningInfo = createElement(\"div\", \"dining-info\");\n  diningInfo.append(\n    createElement(\"h3\", \"\", \"Come dine with us\"),\n    createElement(\"p\", \"hours\", \"Tuesday–Sunday · 11:30–21:00\"),\n    createElement(\"p\", \"\", \"12 Yukihara Lane · Your neighborhood\"),\n    createElement(\"p\", \"\", \"Reservations: (555) 019-1988\")\n  );\n\n  details.append(chefInfo, diningInfo);\n\n  page.append(story, details);\n  return page;\n}\n\n\n//# sourceURL=webpack://restauraunt_page/./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _assets_restauraunt_restauraunt_yukihara_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restauraunt/restauraunt_yukihara.jpg */ \"./src/assets/restauraunt/restauraunt_yukihara.jpg\");\n/* harmony import */ var _assets_food_gotcha_pork_roast_5_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/food/gotcha-pork-roast-5.jpg */ \"./src/assets/food/gotcha-pork-roast-5.jpg\");\n\n\n\nfunction createElement(tag, className, text) {\n  const element = document.createElement(tag);\n  element.className = className;\n  if (text) element.textContent = text;\n  return element;\n}\n\nfunction createImage(src, alt, className) {\n  const image = document.createElement(\"img\");\n  image.src = src;\n  image.alt = alt;\n  image.className = className;\n  return image;\n}\n\nfunction loadHome() {\n  const page = createElement(\"section\", \"page home-page\");\n  page.style.setProperty(\"--hero-image\", `url(${_assets_restauraunt_restauraunt_yukihara_jpg__WEBPACK_IMPORTED_MODULE_0__})`);\n\n  const welcome = createElement(\"div\", \"hero-copy\");\n  welcome.append(\n    createElement(\"p\", \"eyebrow\", \"A tiny family restaurant with a big appetite\"),\n    createElement(\"h2\", \"\", \"Every dish has a story.\"),\n    createElement(\n      \"p\",\n      \"lead\",\n      \"Welcome to Restaurant Yukihara, where classic Japanese comfort food meets a little creative spark.\"\n    ),\n    createElement(\n      \"p\",\n      \"\",\n      \"Pull up a chair, take your time, and let our family cook you something worth remembering.\"\n    )\n  );\n\n  const feature = createElement(\"div\", \"feature-card\");\n  feature.append(\n    createImage(_assets_food_gotcha_pork_roast_5_jpg__WEBPACK_IMPORTED_MODULE_1__, \"Yukihara's Gotcha Pork Roast\", \"feature-image\")\n  );\n  feature.append(\n    createElement(\"p\", \"eyebrow\", \"Tonight's recommendation\"),\n    createElement(\"h3\", \"\", \"Yukihara's Gotcha Pork Roast\"),\n    createElement(\n      \"p\",\n      \"\",\n      \"Tender pork, bright vegetables, and a savory apple-onion sauce served with rice.\"\n    ),\n    createElement(\"button\", \"text-button\", \"See the full menu\")\n  );\n  feature.querySelector(\"button\").addEventListener(\"click\", () => {\n    document.querySelector('[data-tab=\"menu\"]').click();\n  });\n\n  page.append(welcome, feature);\n  return page;\n}\n\n\n//# sourceURL=webpack://restauraunt_page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\nconst content = document.querySelector(\"#content\");\nconst buttons = document.querySelectorAll(\".nav-button\");\nconst tabs = {\n  home: _home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome,\n  menu: _menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu,\n  about: _about_js__WEBPACK_IMPORTED_MODULE_3__.loadAbout,\n};\n\nfunction showTab(tabName) {\n  content.replaceChildren(tabs[tabName]());\n  buttons.forEach((button) => {\n    button.classList.toggle(\"active\", button.dataset.tab === tabName);\n  });\n}\n\nbuttons.forEach((button) => {\n  button.addEventListener(\"click\", () => showTab(button.dataset.tab));\n});\n\nshowTab(\"home\");\n\n\n//# sourceURL=webpack://restauraunt_page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_food_chaliapin_steak_bowl_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/food/chaliapin_steak_bowl.jpg */ \"./src/assets/food/chaliapin_steak_bowl.jpg\");\n/* harmony import */ var _assets_food_gotcha_pork_roast_5_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/food/gotcha-pork-roast-5.jpg */ \"./src/assets/food/gotcha-pork-roast-5.jpg\");\n/* harmony import */ var _assets_food_apple_rissoto_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/food/apple_rissoto.jpg */ \"./src/assets/food/apple_rissoto.jpg\");\n/* harmony import */ var _assets_food_transforming_furikake_gohan_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/food/transforming_furikake_gohan.jpg */ \"./src/assets/food/transforming_furikake_gohan.jpg\");\n/* harmony import */ var _assets_food_cheese_feathered_hanetsuki_gyoza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/food/cheese_feathered_hanetsuki_gyoza.jpg */ \"./src/assets/food/cheese_feathered_hanetsuki_gyoza.jpg\");\n/* harmony import */ var _assets_food_sumire_karage_roll_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/food/sumire_karage_roll.jpg */ \"./src/assets/food/sumire_karage_roll.jpg\");\n/* harmony import */ var _assets_food_evolving_nori_bento_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/food/evolving_nori_bento.jpg */ \"./src/assets/food/evolving_nori_bento.jpg\");\n/* harmony import */ var _assets_food_rainbow_terrine_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/food/rainbow_terrine.jpg */ \"./src/assets/food/rainbow_terrine.jpg\");\n\n\n\n\n\n\n\n\n\nfunction createElement(tag, className, text) {\n  const element = document.createElement(tag);\n  element.className = className;\n  if (text) element.textContent = text;\n  return element;\n}\n\nfunction createImage(src, alt, className) {\n  const image = document.createElement(\"img\");\n  image.src = src;\n  image.alt = alt;\n  image.className = className;\n  return image;\n}\n\nconst dishes = [\n  {\n    name: \"Chaliapin Steak Don\",\n    description: \"Tender steak served over rice with a rich onion sauce.\",\n    price: \"$18\",\n    image: _assets_food_chaliapin_steak_bowl_jpg__WEBPACK_IMPORTED_MODULE_0__,\n  },\n  {\n    name: \"Roast Pork, Just Kidding\",\n    description: \"A creative mock-roast made with mashed potatoes, vegetables, and bacon.\",\n    price: \"$24\",\n    image: _assets_food_gotcha_pork_roast_5_jpg__WEBPACK_IMPORTED_MODULE_1__,\n  },\n  {\n    name: \"Apple Risotto\",\n    description: \"A creamy risotto featuring the sweet and savory flavor of apple.\",\n    price: \"$12\",\n    image: _assets_food_apple_rissoto_jpg__WEBPACK_IMPORTED_MODULE_2__,\n  },\n  {\n    name: \"Transforming Furikake Gohan\",\n    description: \"Breakfast rice topped with scrambled eggs and broth cubes that melt into a rich sauce.\",\n    price: \"$16\",\n    image: _assets_food_transforming_furikake_gohan_jpg__WEBPACK_IMPORTED_MODULE_3__,\n  },\n  {\n    name: \"Cheese-Feathered Hanetsuki Gyōza\",\n    description: \"Chicken-wing dumplings pan-fried over a delicate, crispy cheese feather.\",\n    price: \"$17\",\n    image: _assets_food_cheese_feathered_hanetsuki_gyoza_jpg__WEBPACK_IMPORTED_MODULE_4__,\n  },\n  {\n    name: \"Sumire Karaage Roll\",\n    description: \"Crispy karaage, fresh greens, and a turmeric crepe rolled into one bright bite.\",\n    price: \"$16\",\n    image: _assets_food_sumire_karage_roll_jpg__WEBPACK_IMPORTED_MODULE_5__,\n  },\n  {\n    name: \"Time Fuse: Brazen Youngster-Style Primeval Meat\",\n    description: \"A bold, rustic meat dish with a dramatic presentation and rich savory flavor.\",\n    price: \"$19\",\n    image: _assets_food_evolving_nori_bento_jpg__WEBPACK_IMPORTED_MODULE_6__,\n  },\n  {\n    name: \"Rainbow Terrine\",\n    description: \"A colorful layered terrine showcasing contrasting flavors and textures in every slice.\",\n    price: \"$21\",\n    image: _assets_food_rainbow_terrine_jpg__WEBPACK_IMPORTED_MODULE_7__,\n  },\n];\n\nfunction loadMenu() {\n  const page = createElement(\"section\", \"page\");\n  page.append(\n    createElement(\"p\", \"eyebrow\", \"From our kitchen\"),\n    createElement(\"h2\", \"\", \"A menu made for sharing\"),\n    createElement(\n      \"p\",\n      \"lead\",\n      \"Familiar ingredients, careful technique, and a few surprises from our family recipe book.\"\n    )\n  );\n\n  const list = createElement(\"div\", \"menu-grid\");\n  dishes.forEach((dish) => {\n    const card = createElement(\"article\", \"dish-card\");\n    card.append(createImage(dish.image, `${dish.name} dish`, \"dish-image\"));\n    const heading = createElement(\"div\", \"dish-heading\");\n    heading.append(\n      createElement(\"h3\", \"\", dish.name),\n      createElement(\"span\", \"price\", dish.price)\n    );\n    card.append(heading, createElement(\"p\", \"\", dish.description));\n    list.append(card);\n  });\n\n  page.append(list);\n  return page;\n}\n\n\n//# sourceURL=webpack://restauraunt_page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
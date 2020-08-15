module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-composite */ \"react-composite\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-upload-gallery */ \"react-upload-gallery\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/masahiromatsui/gaming-next/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst IndexPage = () => __jsx(react_composite__WEBPACK_IMPORTED_MODULE_1__[\"Composite\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}, __jsx(\"h1\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }\n}, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\"), __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_2___default.a, {\n  customRequest: ({\n    uid,\n    file,\n    data,\n    // blob\n    send,\n    action,\n    headers,\n    onProgress,\n    onSuccess,\n    onError\n  }) => {\n    const response = {\n      url: 'ec2-54-203-205-102.us-west-2.compute.amazonaws.com:5000'\n    };\n    onProgress(uid, response);\n    onSuccess(uid, response);\n    onError(uid, {\n      action,\n      status,\n      response\n    });\n  },\n  action: \"/segmentation\" // upload route\n  ,\n  source: response => response.url,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiLCJ1aWQiLCJmaWxlIiwiZGF0YSIsInNlbmQiLCJhY3Rpb24iLCJoZWFkZXJzIiwib25Qcm9ncmVzcyIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJyZXNwb25zZSIsInVybCIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBbUIsR0FBRyxNQUN4QixNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhFQURKLEVBRUksTUFBQywyREFBRDtBQUNJLGVBQWEsRUFBRSxDQUFDO0FBQ1pDLE9BRFk7QUFFWkMsUUFGWTtBQUdaQyxRQUhZO0FBR047QUFDTkMsUUFKWTtBQUtaQyxVQUxZO0FBTVpDLFdBTlk7QUFPWkMsY0FQWTtBQVFaQyxhQVJZO0FBU1pDO0FBVFksR0FBRCxLQVVUO0FBQ0YsVUFBTUMsUUFBUSxHQUFHO0FBQUVDLFNBQUcsRUFBRTtBQUFQLEtBQWpCO0FBRUFKLGNBQVUsQ0FBQ04sR0FBRCxFQUFNUyxRQUFOLENBQVY7QUFDQUYsYUFBUyxDQUFDUCxHQUFELEVBQU1TLFFBQU4sQ0FBVDtBQUNBRCxXQUFPLENBQUNSLEdBQUQsRUFBTTtBQUNUSSxZQURTO0FBRVRPLFlBRlM7QUFHVEY7QUFIUyxLQUFOLENBQVA7QUFLSCxHQXJCTDtBQXNCTixRQUFNLEVBQUMsZUF0QkQsQ0FzQmlCO0FBdEJqQjtBQXVCSSxRQUFNLEVBQUVBLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxHQXZCakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZKLENBREo7O0FBK0JlWCx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gJ3JlYWN0LWNvbXBvc2l0ZSc7XHJcbmltcG9ydCBSVUcgZnJvbSAncmVhY3QtdXBsb2FkLWdhbGxlcnknXHJcblxyXG5jb25zdCBJbmRleFBhZ2U6IE5leHRQYWdlID0gKCkgPT4gKFxyXG4gICAgPENvbXBvc2l0ZT5cclxuICAgICAgICA8aDE+44GS44O844G/44KT44GQIGhvZ2Ug44GY44GH44Gt44KM44O844GfPC9oMT5cclxuICAgICAgICA8UlVHXHJcbiAgICAgICAgICAgIGN1c3RvbVJlcXVlc3Q9eyh7XHJcbiAgICAgICAgICAgICAgICB1aWQsXHJcbiAgICAgICAgICAgICAgICBmaWxlLFxyXG4gICAgICAgICAgICAgICAgZGF0YSwgLy8gYmxvYlxyXG4gICAgICAgICAgICAgICAgc2VuZCxcclxuICAgICAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgb25FcnJvclxyXG4gICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHsgdXJsOiAnZWMyLTU0LTIwMy0yMDUtMTAyLnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMCcgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3ModWlkLCByZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyh1aWQsIHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgb25FcnJvcih1aWQsIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9fVxyXG4gIGFjdGlvbj1cIi9zZWdtZW50YXRpb25cIiAvLyB1cGxvYWQgcm91dGVcclxuICAgICAgICAgICAgc291cmNlPXtyZXNwb25zZSA9PiByZXNwb25zZS51cmx9XHJcbiAgICAgICAgLz5cclxuICAgIDwvQ29tcG9zaXRlPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-composite":
/*!**********************************!*\
  !*** external "react-composite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-composite\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb21wb3NpdGVcIj82OGYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWNvbXBvc2l0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvbXBvc2l0ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-composite\n");

/***/ }),

/***/ "react-upload-gallery":
/*!***************************************!*\
  !*** external "react-upload-gallery" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-upload-gallery\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC11cGxvYWQtZ2FsbGVyeVwiP2QzZDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtdXBsb2FkLWdhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC11cGxvYWQtZ2FsbGVyeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-upload-gallery\n");

/***/ })

/******/ });
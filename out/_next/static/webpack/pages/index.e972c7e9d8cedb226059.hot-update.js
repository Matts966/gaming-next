webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/resize_util.ts":
/*!******************************!*\
  !*** ./pages/resize_util.ts ***!
  \******************************/
/*! exports provided: ResizeUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResizeUtil\", function() { return ResizeUtil; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ResizeUtil = /*#__PURE__*/function () {\n  function ResizeUtil() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ResizeUtil);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ResizeUtil, [{\n    key: \"compress\",\n    value: function compress(file, imageWidth, afterAction) {\n      var canvas = document.createElement(\"canvas\");\n      var ctx = canvas.getContext('2d');\n      var image = new Image();\n      canvas.width = 0;\n      canvas.height = 0;\n      image.src = URL.createObjectURL(file);\n\n      image.onload = function () {\n        if (image.width <= imageWidth) {\n          afterAction(file);\n        }\n\n        var w = imageWidth;\n        var h = image.height * (imageWidth / image.width);\n        canvas.width = w;\n        canvas.height = h;\n        ctx.drawImage(image, 0, 0, w, h);\n        canvas.toBlob(function (blob) {\n          new File([blob], file.name, {\n            type: \"application/octet-stream\"\n          });\n        });\n      };\n    }\n  }]);\n\n  return ResizeUtil;\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzaXplX3V0aWwudHM/ZWNiMCJdLCJuYW1lcyI6WyJSZXNpemVVdGlsIiwiZmlsZSIsImltYWdlV2lkdGgiLCJhZnRlckFjdGlvbiIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJpbWFnZSIsIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJvbmxvYWQiLCJ3IiwiaCIsImRyYXdJbWFnZSIsInRvQmxvYiIsImJsb2IiLCJGaWxlIiwibmFtZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFVBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUNjQyxJQURkLEVBQ3lCQyxVQUR6QixFQUM0Q0MsV0FENUMsRUFDMkU7QUFDbkUsVUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFVBQUlDLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQSxVQUFJQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFaO0FBRUFOLFlBQU0sQ0FBQ08sS0FBUCxHQUFlLENBQWY7QUFDQVAsWUFBTSxDQUFDUSxNQUFQLEdBQWdCLENBQWhCO0FBRUFILFdBQUssQ0FBQ0ksR0FBTixHQUFZQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JkLElBQXBCLENBQVo7O0FBQ0FRLFdBQUssQ0FBQ08sTUFBTixHQUFlLFlBQUs7QUFDaEIsWUFBSVAsS0FBSyxDQUFDRSxLQUFOLElBQWVULFVBQW5CLEVBQStCO0FBQzNCQyxxQkFBVyxDQUFDRixJQUFELENBQVg7QUFDSDs7QUFFRCxZQUFJZ0IsQ0FBQyxHQUFHZixVQUFSO0FBQ0EsWUFBSWdCLENBQUMsR0FBR1QsS0FBSyxDQUFDRyxNQUFOLElBQWdCVixVQUFVLEdBQUNPLEtBQUssQ0FBQ0UsS0FBakMsQ0FBUjtBQUVBUCxjQUFNLENBQUNPLEtBQVAsR0FBZU0sQ0FBZjtBQUNBYixjQUFNLENBQUNRLE1BQVAsR0FBZ0JNLENBQWhCO0FBRUFYLFdBQUcsQ0FBQ1ksU0FBSixDQUFjVixLQUFkLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCUSxDQUEzQixFQUE4QkMsQ0FBOUI7QUFFQWQsY0FBTSxDQUFDZ0IsTUFBUCxDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUNwQixjQUFJQyxJQUFKLENBQVMsQ0FBQ0QsSUFBRCxDQUFULEVBQWlCcEIsSUFBSSxDQUFDc0IsSUFBdEIsRUFBNEI7QUFBRUMsZ0JBQUksRUFBRTtBQUFSLFdBQTVCO0FBQ0gsU0FGRDtBQUdILE9BaEJEO0FBaUJIO0FBM0JMOztBQUFBO0FBQUEiLCJmaWxlIjoiLi9wYWdlcy9yZXNpemVfdXRpbC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZXNpemVVdGlsIHtcbiAgICBjb21wcmVzcyAoZmlsZTpGaWxlLCBpbWFnZVdpZHRoOm51bWJlciwgYWZ0ZXJBY3Rpb246KGZpbGU6RmlsZSk9PnZvaWQpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpXG5cbiAgICAgICAgY2FudmFzLndpZHRoID0gMFxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMFxuXG4gICAgICAgIGltYWdlLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCk9PiB7XG4gICAgICAgICAgICBpZiAoaW1hZ2Uud2lkdGggPD0gaW1hZ2VXaWR0aCkge1xuICAgICAgICAgICAgICAgIGFmdGVyQWN0aW9uKGZpbGUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB3ID0gaW1hZ2VXaWR0aFxuICAgICAgICAgICAgdmFyIGggPSBpbWFnZS5oZWlnaHQgKiAoaW1hZ2VXaWR0aC9pbWFnZS53aWR0aClcblxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhcblxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgdywgaClcblxuICAgICAgICAgICAgY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgICAgICAgICAgIG5ldyBGaWxlKFtibG9iXSwgZmlsZS5uYW1lLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/resize_util.ts\n");

/***/ })

})
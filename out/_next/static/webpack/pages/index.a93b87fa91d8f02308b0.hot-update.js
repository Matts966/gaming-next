webpackHotUpdate_N_E("pages/index",{

/***/ "./resize_util/resize_util.ts":
/*!************************************!*\
  !*** ./resize_util/resize_util.ts ***!
  \************************************/
/*! exports provided: ResizeUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResizeUtil\", function() { return ResizeUtil; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ResizeUtil = /*#__PURE__*/function () {\n  function ResizeUtil() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ResizeUtil);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ResizeUtil, [{\n    key: \"compress\",\n    value: function compress(file, imageWidth, afterAction) {\n      var canvas = document.createElement(\"canvas\");\n      var ctx = canvas.getContext('2d');\n      var image = new Image();\n      canvas.width = 0;\n      canvas.height = 0;\n      image.src = URL.createObjectURL(file);\n\n      image.onload = function () {\n        if (image.width <= imageWidth) {\n          afterAction(file);\n        }\n\n        var w = imageWidth;\n        var h = image.height * (imageWidth / image.width);\n        canvas.width = w;\n        canvas.height = h;\n        ctx.drawImage(image, 0, 0, w, h);\n        console.log(\"image resized!\", w, h);\n        canvas.toBlob(function (blob) {\n          afterAction(new File([blob], file.name, {\n            type: file.type\n          }));\n        });\n      };\n    }\n  }]);\n\n  return ResizeUtil;\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVzaXplX3V0aWwvcmVzaXplX3V0aWwudHM/N2I3ZiJdLCJuYW1lcyI6WyJSZXNpemVVdGlsIiwiZmlsZSIsImltYWdlV2lkdGgiLCJhZnRlckFjdGlvbiIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJpbWFnZSIsIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJvbmxvYWQiLCJ3IiwiaCIsImRyYXdJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJ0b0Jsb2IiLCJibG9iIiwiRmlsZSIsIm5hbWUiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxVQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFDY0MsSUFEZCxFQUN5QkMsVUFEekIsRUFDNENDLFdBRDVDLEVBQzJFO0FBQ25FLFVBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQSxVQUFJQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUVBTixZQUFNLENBQUNPLEtBQVAsR0FBZSxDQUFmO0FBQ0FQLFlBQU0sQ0FBQ1EsTUFBUCxHQUFnQixDQUFoQjtBQUVBSCxXQUFLLENBQUNJLEdBQU4sR0FBWUMsR0FBRyxDQUFDQyxlQUFKLENBQW9CZCxJQUFwQixDQUFaOztBQUNBUSxXQUFLLENBQUNPLE1BQU4sR0FBZSxZQUFLO0FBQ2hCLFlBQUlQLEtBQUssQ0FBQ0UsS0FBTixJQUFlVCxVQUFuQixFQUErQjtBQUMzQkMscUJBQVcsQ0FBQ0YsSUFBRCxDQUFYO0FBQ0g7O0FBRUQsWUFBSWdCLENBQUMsR0FBR2YsVUFBUjtBQUNBLFlBQUlnQixDQUFDLEdBQUdULEtBQUssQ0FBQ0csTUFBTixJQUFnQlYsVUFBVSxHQUFDTyxLQUFLLENBQUNFLEtBQWpDLENBQVI7QUFFQVAsY0FBTSxDQUFDTyxLQUFQLEdBQWVNLENBQWY7QUFDQWIsY0FBTSxDQUFDUSxNQUFQLEdBQWdCTSxDQUFoQjtBQUVBWCxXQUFHLENBQUNZLFNBQUosQ0FBY1YsS0FBZCxFQUFxQixDQUFyQixFQUF3QixDQUF4QixFQUEyQlEsQ0FBM0IsRUFBOEJDLENBQTlCO0FBRUFFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCSixDQUE5QixFQUFpQ0MsQ0FBakM7QUFFQWQsY0FBTSxDQUFDa0IsTUFBUCxDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUNwQnBCLHFCQUFXLENBQUMsSUFBSXFCLElBQUosQ0FBUyxDQUFDRCxJQUFELENBQVQsRUFBaUJ0QixJQUFJLENBQUN3QixJQUF0QixFQUE0QjtBQUFFQyxnQkFBSSxFQUFFekIsSUFBSSxDQUFDeUI7QUFBYixXQUE1QixDQUFELENBQVg7QUFDSCxTQUZEO0FBR0gsT0FsQkQ7QUFtQkg7QUE3Qkw7O0FBQUE7QUFBQSIsImZpbGUiOiIuL3Jlc2l6ZV91dGlsL3Jlc2l6ZV91dGlsLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJlc2l6ZVV0aWwge1xuICAgIGNvbXByZXNzIChmaWxlOkZpbGUsIGltYWdlV2lkdGg6bnVtYmVyLCBhZnRlckFjdGlvbjooZmlsZTpGaWxlKT0+dm9pZCkge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKClcblxuICAgICAgICBjYW52YXMud2lkdGggPSAwXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAwXG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKT0+IHtcbiAgICAgICAgICAgIGlmIChpbWFnZS53aWR0aCA8PSBpbWFnZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgYWZ0ZXJBY3Rpb24oZmlsZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHcgPSBpbWFnZVdpZHRoXG4gICAgICAgICAgICB2YXIgaCA9IGltYWdlLmhlaWdodCAqIChpbWFnZVdpZHRoL2ltYWdlLndpZHRoKVxuXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB3XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaFxuXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3LCBoKVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImltYWdlIHJlc2l6ZWQhXCIsIHcsIGgpXG5cbiAgICAgICAgICAgIGNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHtcbiAgICAgICAgICAgICAgICBhZnRlckFjdGlvbihuZXcgRmlsZShbYmxvYl0sIGZpbGUubmFtZSwgeyB0eXBlOiBmaWxlLnR5cGUgfSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resize_util/resize_util.ts\n");

/***/ })

})
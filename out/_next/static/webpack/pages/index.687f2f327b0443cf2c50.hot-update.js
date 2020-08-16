webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nfunction customRequest(_ref) {\n  var uid = _ref.uid,\n      file = _ref.file,\n      send = _ref.send,\n      action = _ref.action,\n      headers = _ref.headers,\n      onProgress = _ref.onProgress,\n      onSuccess = _ref.onSuccess,\n      onError = _ref.onError;\n  var form = new FormData(); // send file \n\n  form.append('image', file);\n  var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n  var source = CancelToken.source();\n  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n    onUploadProgress: function onUploadProgress(_ref2) {\n      var total = _ref2.total,\n          loaded = _ref2.loaded;\n      onProgress(uid, Math.round(loaded / total * 50));\n    },\n    onDownloadProgress: function onDownloadProgress(_ref3) {\n      var total = _ref3.total,\n          loaded = _ref3.loaded;\n      onProgress(uid, Math.round(50 + loaded / total * 50));\n    },\n    cancelToken: source.token,\n    responseType: 'arraybuffer'\n  }).then(function (_ref4) {\n    var response = _ref4.data;\n    var url = window.URL || window.webkitURL;\n    var blob = new Blob([response], {\n      type: 'image/gif'\n    });\n    var objUrl = url.createObjectURL(blob);\n    console.log(objUrl);\n    onSuccess(uid, {\n      source: objUrl\n    });\n  })[\"catch\"](function (error) {\n    onError(uid, {\n      action: action,\n      status: error.request,\n      response: error.response\n    });\n  });\n  return {\n    abort: function abort() {\n      source.cancel();\n    }\n  };\n}\n\nfunction uploadToImgurAndOpen(_x) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image) {\n    var blob, reader;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.next = 4;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 4:\n            blob = _context.sent;\n            reader = new FileReader();\n            reader.readAsDataURL(blob);\n\n            reader.onloadend = function () {\n              var base64data = reader.result;\n              var form = new FormData(); // send file \n\n              form.append('image', base64data);\n              var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n              var source = CancelToken.source();\n              axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n                cancelToken: source.token,\n                headers: {\n                  'Authorization': 'Client-ID 4409588f10776f7'\n                }\n              }).then(function (_ref5) {\n                var response = _ref5.data;\n                var win = window.open(response.data.link, '_blank');\n                win.focus();\n              })[\"catch\"](function (error) {\n                alert(error);\n              });\n            };\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\"), __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest,\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    onClick: function onClick(image) {\n      return uploadToImgurAndOpen(image);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }));\n};\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiY3VzdG9tUmVxdWVzdCIsInVpZCIsImZpbGUiLCJzZW5kIiwiYWN0aW9uIiwiaGVhZGVycyIsIm9uUHJvZ3Jlc3MiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInNvdXJjZSIsInBvc3QiLCJvblVwbG9hZFByb2dyZXNzIiwidG90YWwiLCJsb2FkZWQiLCJNYXRoIiwicm91bmQiLCJvbkRvd25sb2FkUHJvZ3Jlc3MiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwicmVzcG9uc2VUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInVybCIsIndpbmRvdyIsIlVSTCIsIndlYmtpdFVSTCIsImJsb2IiLCJCbG9iIiwidHlwZSIsIm9ialVybCIsImNyZWF0ZU9iamVjdFVSTCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN0YXR1cyIsInJlcXVlc3QiLCJhYm9ydCIsImNhbmNlbCIsInVwbG9hZFRvSW1ndXJBbmRPcGVuIiwiaW1hZ2UiLCJjb25maXJtIiwiZmV0Y2giLCJyIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJiYXNlNjRkYXRhIiwicmVzdWx0Iiwid2luIiwib3BlbiIsImxpbmsiLCJmb2N1cyIsImFsZXJ0IiwiSW5kZXhQYWdlIiwiY3VycmVudEltYWdlIiwiaW1hZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULE9BQTZGO0FBQUEsTUFBcEVDLEdBQW9FLFFBQXBFQSxHQUFvRTtBQUFBLE1BQS9EQyxJQUErRCxRQUEvREEsSUFBK0Q7QUFBQSxNQUF6REMsSUFBeUQsUUFBekRBLElBQXlEO0FBQUEsTUFBbkRDLE1BQW1ELFFBQW5EQSxNQUFtRDtBQUFB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LENBQUNpQixPQUFQLENBQWUsa0NBQWYsQ0FBUDtBQUNILEtBTEw7QUFNSSxXQUFPLEVBQUUsaUJBQUNELEtBQUQ7QUFBQSxhQUFXRCxvQkFBb0IsQ0FBQ0MsS0FBRCxDQUEvQjtBQUFBLEtBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBRHdCO0FBQUEsQ0FBNUI7O0tBQU1lLFM7QUFjU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tICdyZWFjdC1jb21wb3NpdGUnO1xyXG5pbXBvcnQgUlVHLCB7IERyYWdBcmVhLCBDYXJkIH0gZnJvbSAncmVhY3QtdXBsb2FkLWdhbGxlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmZ1bmN0aW9uIGN1c3RvbVJlcXVlc3QoeyB1aWQsIGZpbGUsIHNlbmQsIGFjdGlvbiwgaGVhZGVycywgb25Qcm9ncmVzcywgb25TdWNjZXNzLCBvbkVycm9yIH0pIHtcclxuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAvLyBzZW5kIGZpbGUgXHJcbiAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKVxyXG5cclxuICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cclxuICAgIGNvbnN0IHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpXHJcblxyXG4gICAgYXhpb3MucG9zdChcclxuICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgZm9ybSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6ICh7IHRvdGFsLCBsb2FkZWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQobG9hZGVkIC8gdG90YWwgKiA1MCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6ICh7IHRvdGFsLCBsb2FkZWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQoNTAgKyBsb2FkZWQgLyB0b3RhbCAqIDUwKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW4sXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcclxuICAgICAgICB9XHJcbiAgICApLnRoZW4oKHsgZGF0YTogcmVzcG9uc2UgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3BvbnNlXSwgeyB0eXBlOiAnaW1hZ2UvZ2lmJyB9KVxyXG4gICAgICAgIGNvbnN0IG9ialVybCA9IHVybC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgY29uc29sZS5sb2cob2JqVXJsKTtcclxuICAgICAgICBvblN1Y2Nlc3ModWlkLCB7IHNvdXJjZTogb2JqVXJsIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgb25FcnJvcih1aWQsIHtcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICBzdGF0dXM6IGVycm9yLnJlcXVlc3QsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlOiBlcnJvci5yZXNwb25zZVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWJvcnQoKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZS5jYW5jZWwoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBsb2FkVG9JbWd1ckFuZE9wZW4oaW1hZ2UpIHtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ1NoYXJlIG9uIGltZ3VyPycpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IGZldGNoKGltYWdlLnNvdXJjZSkudGhlbihyID0+IHIuYmxvYigpKTtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBiYXNlNjRkYXRhID0gcmVhZGVyLnJlc3VsdDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICAvLyBzZW5kIGZpbGUgXHJcbiAgICAgICAgZm9ybS5hcHBlbmQoJ2ltYWdlJywgYmFzZTY0ZGF0YSlcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cclxuICAgICAgICBjb25zdCBzb3VyY2UgPSBDYW5jZWxUb2tlbi5zb3VyY2UoKVxyXG5cclxuICAgICAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICBcImh0dHBzOi8vYXBpLmltZ3VyLmNvbS8zL2ltYWdlXCIsXHJcbiAgICAgICAgICAgIGZvcm0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW4sXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQ2xpZW50LUlEIDQ0MDk1ODhmMTA3NzZmNycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS50aGVuKCh7IGRhdGE6IHJlc3BvbnNlIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2luID0gd2luZG93Lm9wZW4ocmVzcG9uc2UuZGF0YS5saW5rLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgIHdpbi5mb2N1cygpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgSW5kZXhQYWdlOiBOZXh0UGFnZSA9ICgpID0+IChcclxuICAgIDxDb21wb3NpdGU+XHJcbiAgICAgICAgPGgxPuOBkuODvOOBv+OCk+OBkCBob2dlIOOBmOOBh+OBreOCjOODvOOBnzwvaDE+XHJcbiAgICAgICAgPFJVR1xyXG4gICAgICAgICAgICBhY3Rpb249XCIvc2VydmVyL3NlZ21lbnRhdGlvblwiIC8vIHVwbG9hZCByb3V0ZVxyXG4gICAgICAgICAgICBjdXN0b21SZXF1ZXN0PXtjdXN0b21SZXF1ZXN0fVxyXG4gICAgICAgICAgICBvbkNvbmZpcm1EZWxldGU9eyhjdXJyZW50SW1hZ2UsIGltYWdlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPycpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhpbWFnZSkgPT4gdXBsb2FkVG9JbWd1ckFuZE9wZW4oaW1hZ2UpfT5cclxuICAgICAgICA8L1JVRz5cclxuICAgIDwvQ29tcG9zaXRlPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
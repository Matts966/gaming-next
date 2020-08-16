webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nfunction customRequest(_ref) {\n  var uid = _ref.uid,\n      file = _ref.file,\n      send = _ref.send,\n      action = _ref.action,\n      headers = _ref.headers,\n      onProgress = _ref.onProgress,\n      onSuccess = _ref.onSuccess,\n      onError = _ref.onError;\n  var form = new FormData(); // send file \n\n  form.append('image', file);\n  var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n  var source = CancelToken.source();\n  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n    onUploadProgress: function onUploadProgress(_ref2) {\n      var total = _ref2.total,\n          loaded = _ref2.loaded;\n      onProgress(uid, Math.round(loaded / total * 50));\n    },\n    onDownloadProgress: function onDownloadProgress(_ref3) {\n      var total = _ref3.total,\n          loaded = _ref3.loaded;\n      onProgress(uid, Math.round(50 + loaded / total * 50));\n    },\n    cancelToken: source.token,\n    responseType: 'arraybuffer'\n  }).then(function (_ref4) {\n    var response = _ref4.data;\n    var url = window.URL || window.webkitURL;\n    var blob = new Blob([response], {\n      type: 'image/gif'\n    });\n    var objUrl = url.createObjectURL(blob);\n    console.log(objUrl);\n    onSuccess(uid, {\n      source: objUrl\n    });\n  })[\"catch\"](function (error) {\n    onError(uid, {\n      action: action,\n      status: error.request,\n      response: error.response\n    });\n  });\n  return {\n    abort: function abort() {\n      source.cancel();\n    }\n  };\n}\n\nfunction uploadToImgurAndOpen(_x) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image) {\n    var blob, reader;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.next = 4;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 4:\n            blob = _context.sent;\n            reader = new FileReader();\n            reader.readAsDataURL(blob);\n\n            reader.onloadend = function () {\n              var base64data = reader.result;\n              var form = new FormData(); // send file \n\n              form.append('image', base64data.toString());\n              var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n              var source = CancelToken.source();\n              axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n                cancelToken: source.token,\n                headers: {\n                  'authorization': 'Client-ID 4409588f10776f7'\n                }\n              }).then(function (_ref5) {\n                var response = _ref5.data;\n                var win = window.open(response.data.link, '_blank');\n                win.focus();\n              })[\"catch\"](function (error) {\n                alert(error);\n              });\n            };\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\"), __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest,\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    onClick: function onClick(image) {\n      return uploadToImgurAndOpen(image);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }));\n};\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiY3VzdG9tUmVxdWVzdCIsInVpZCIsImZpbGUiLCJzZW5kIiwiYWN0aW9uIiwiaGVhZGVycyIsIm9uUHJvZ3Jlc3MiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInNvdXJjZSIsInBvc3QiLCJvblVwbG9hZFByb2dyZXNzIiwidG90YWwiLCJsb2FkZWQiLCJNYXRoIiwicm91bmQiLCJvbkRvd25sb2FkUHJvZ3Jlc3MiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwicmVzcG9uc2VUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInVybCIsIndpbmRvdyIsIlVSTCIsIndlYmtpdFVSTCIsImJsb2IiLCJCbG9iIiwidHlwZSIsIm9ialVybCIsImNyZWF0ZU9iamVjdFVSTCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN0YXR1cyIsInJlcXVlc3QiLCJhYm9ydCIsImNhbmNlbCIsInVwbG9hZFRvSW1ndXJBbmRPcGVuIiwiaW1hZ2UiLCJjb25maXJtIiwiZmV0Y2giLCJyIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJiYXNlNjRkYXRhIiwicmVzdWx0IiwidG9TdHJpbmciLCJ3aW4iLCJvcGVuIiwibGluayIsImZvY3VzIiwiYWxlcnQiLCJJbmRleFBhZ2UiLCJjdXJyZW50SW1hZ2UiLCJpbWFnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FBNkY7QUFBQSxNQUFwRUMsR0FBb0UsUUFBcEVBLEdBQW9FO0FBQUEsTUFBL0RDLElBQStELFFBQS9EQSxJQUErRDtBQUFBLE1BQXpEQyxJQUF5RCxRQUF6REEsSUFBeUQ7QUFBQSxNQUFuREMsTUFBbUQsUUFBbkRB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QUFmLEVBQTBCO0FBQ3ZDLGFBQU9sQyxNQUFNLENBQUNpQixPQUFQLENBQWUsa0NBQWYsQ0FBUDtBQUNILEtBTEw7QUFNSSxXQUFPLEVBQUUsaUJBQUNELEtBQUQ7QUFBQSxhQUFXRCxvQkFBb0IsQ0FBQ0MsS0FBRCxDQUEvQjtBQUFBLEtBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBRHdCO0FBQUEsQ0FBNUI7O0tBQU1nQixTO0FBY1NBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgQ29tcG9zaXRlIH0gZnJvbSAncmVhY3QtY29tcG9zaXRlJztcclxuaW1wb3J0IFJVRywgeyBEcmFnQXJlYSwgQ2FyZCB9IGZyb20gJ3JlYWN0LXVwbG9hZC1nYWxsZXJ5J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5mdW5jdGlvbiBjdXN0b21SZXF1ZXN0KHsgdWlkLCBmaWxlLCBzZW5kLCBhY3Rpb24sIGhlYWRlcnMsIG9uUHJvZ3Jlc3MsIG9uU3VjY2Vzcywgb25FcnJvciB9KSB7XHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgLy8gc2VuZCBmaWxlIFxyXG4gICAgZm9ybS5hcHBlbmQoJ2ltYWdlJywgZmlsZSlcclxuXHJcbiAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuXHJcbiAgICBjb25zdCBzb3VyY2UgPSBDYW5jZWxUb2tlbi5zb3VyY2UoKVxyXG5cclxuICAgIGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgIGZvcm0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3ModWlkLCBNYXRoLnJvdW5kKGxvYWRlZCAvIHRvdGFsICogNTApKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25Eb3dubG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3ModWlkLCBNYXRoLnJvdW5kKDUwICsgbG9hZGVkIC8gdG90YWwgKiA1MCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlLnRva2VuLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXHJcbiAgICAgICAgfVxyXG4gICAgKS50aGVuKCh7IGRhdGE6IHJlc3BvbnNlIH0pID0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XHJcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXNwb25zZV0sIHsgdHlwZTogJ2ltYWdlL2dpZicgfSlcclxuICAgICAgICBjb25zdCBvYmpVcmwgPSB1cmwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9ialVybCk7XHJcbiAgICAgICAgb25TdWNjZXNzKHVpZCwgeyBzb3VyY2U6IG9ialVybCB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIG9uRXJyb3IodWlkLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgc3RhdHVzOiBlcnJvci5yZXF1ZXN0LFxyXG4gICAgICAgICAgICByZXNwb25zZTogZXJyb3IucmVzcG9uc2VcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFib3J0KCkge1xyXG4gICAgICAgICAgICBzb3VyY2UuY2FuY2VsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlKSB7XHJcbiAgICBpZiAoIXdpbmRvdy5jb25maXJtKCdTaGFyZSBvbiBpbWd1cj8nKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBmZXRjaChpbWFnZS5zb3VyY2UpLnRoZW4ociA9PiByLmJsb2IoKSk7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgYmFzZTY0ZGF0YSA9IHJlYWRlci5yZXN1bHQ7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgLy8gc2VuZCBmaWxlIFxyXG4gICAgICAgIGZvcm0uYXBwZW5kKCdpbWFnZScsIGJhc2U2NGRhdGEudG9TdHJpbmcoKSlcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cclxuICAgICAgICBjb25zdCBzb3VyY2UgPSBDYW5jZWxUb2tlbi5zb3VyY2UoKVxyXG5cclxuICAgICAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICBcImh0dHBzOi8vYXBpLmltZ3VyLmNvbS8zL2ltYWdlXCIsXHJcbiAgICAgICAgICAgIGZvcm0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW4sXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiAnQ2xpZW50LUlEIDQ0MDk1ODhmMTA3NzZmNycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS50aGVuKCh7IGRhdGE6IHJlc3BvbnNlIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2luID0gd2luZG93Lm9wZW4ocmVzcG9uc2UuZGF0YS5saW5rLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgIHdpbi5mb2N1cygpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgSW5kZXhQYWdlOiBOZXh0UGFnZSA9ICgpID0+IChcclxuICAgIDxDb21wb3NpdGU+XHJcbiAgICAgICAgPGgxPuOBkuODvOOBv+OCk+OBkCBob2dlIOOBmOOBh+OBreOCjOODvOOBnzwvaDE+XHJcbiAgICAgICAgPFJVR1xyXG4gICAgICAgICAgICBhY3Rpb249XCIvc2VydmVyL3NlZ21lbnRhdGlvblwiIC8vIHVwbG9hZCByb3V0ZVxyXG4gICAgICAgICAgICBjdXN0b21SZXF1ZXN0PXtjdXN0b21SZXF1ZXN0fVxyXG4gICAgICAgICAgICBvbkNvbmZpcm1EZWxldGU9eyhjdXJyZW50SW1hZ2UsIGltYWdlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPycpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhpbWFnZSkgPT4gdXBsb2FkVG9JbWd1ckFuZE9wZW4oaW1hZ2UpfT5cclxuICAgICAgICA8L1JVRz5cclxuICAgIDwvQ29tcG9zaXRlPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
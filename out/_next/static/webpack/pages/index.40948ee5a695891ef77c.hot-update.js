webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nfunction customRequest(_ref) {\n  var uid = _ref.uid,\n      file = _ref.file,\n      send = _ref.send,\n      action = _ref.action,\n      headers = _ref.headers,\n      onProgress = _ref.onProgress,\n      onSuccess = _ref.onSuccess,\n      onError = _ref.onError;\n  var form = new FormData(); // send file \n\n  form.append('image', file);\n  var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n  var source = CancelToken.source();\n  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n    onUploadProgress: function onUploadProgress(_ref2) {\n      var total = _ref2.total,\n          loaded = _ref2.loaded;\n      onProgress(uid, Math.round(loaded / total * 50));\n    },\n    onDownloadProgress: function onDownloadProgress(_ref3) {\n      var total = _ref3.total,\n          loaded = _ref3.loaded;\n      onProgress(uid, Math.round(50 + loaded / total * 50));\n    },\n    cancelToken: source.token,\n    responseType: 'arraybuffer'\n  }).then(function (_ref4) {\n    var response = _ref4.data;\n    var url = window.URL || window.webkitURL;\n    var blob = new Blob([response], {\n      type: 'image/gif'\n    });\n    var objUrl = url.createObjectURL(blob);\n    alert(\"Gamingify success! Z\");\n    onSuccess(uid, {\n      source: objUrl\n    });\n  })[\"catch\"](function (error) {\n    onError(uid, {\n      action: action,\n      status: error.request,\n      response: error.response\n    });\n  });\n  return {\n    abort: function abort() {\n      source.cancel();\n    }\n  };\n}\n\nfunction uploadToImgurAndOpen(_x) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image) {\n    var blob, form, CancelToken, source;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.next = 4;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 4:\n            blob = _context.sent;\n            form = new FormData(); // send file\n\n            form.append('image', blob);\n            CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n            source = CancelToken.source();\n            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n              cancelToken: source.token,\n              headers: {\n                'Authorization': 'Client-ID 4409588f10776f7'\n              }\n            }).then(function (_ref5) {\n              var response = _ref5.data;\n              var win = window.open(response.data.link, '_blank');\n              win.focus();\n            })[\"catch\"](function (error) {\n              alert(error);\n            });\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\"), __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest,\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    onClick: function onClick(image) {\n      return uploadToImgurAndOpen(image);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }));\n};\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiY3VzdG9tUmVxdWVzdCIsInVpZCIsImZpbGUiLCJzZW5kIiwiYWN0aW9uIiwiaGVhZGVycyIsIm9uUHJvZ3Jlc3MiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInNvdXJjZSIsInBvc3QiLCJvblVwbG9hZFByb2dyZXNzIiwidG90YWwiLCJsb2FkZWQiLCJNYXRoIiwicm91bmQiLCJvbkRvd25sb2FkUHJvZ3Jlc3MiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwicmVzcG9uc2VUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInVybCIsIndpbmRvdyIsIlVSTCIsIndlYmtpdFVSTCIsImJsb2IiLCJCbG9iIiwidHlwZSIsIm9ialVybCIsImNyZWF0ZU9iamVjdFVSTCIsImFsZXJ0IiwiZXJyb3IiLCJzdGF0dXMiLCJyZXF1ZXN0IiwiYWJvcnQiLCJjYW5jZWwiLCJ1cGxvYWRUb0ltZ3VyQW5kT3BlbiIsImltYWdlIiwiY29uZmlybSIsImZldGNoIiwiciIsIndpbiIsIm9wZW4iLCJsaW5rIiwiZm9jdXMiLCJJbmRleFBhZ2UiLCJjdXJyZW50SW1hZ2UiLCJpbWFnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FBNkY7QUFBQSxNQUFwRUMsR0FBb0UsUUFBcEVBLEdBQW9FO0FBQUEsTUFBL0RDLElBQStELFFBQS9EQSxJQUErRDtBQUFBLE1BQXpEQyxJQUF5RCxRQUF6REEsSUFBeUQ7QUFBQSxNQUFuREMsTUFBbUQsUUFBbkRBLE1BQW1EO0FBQUEsTUFBM0NDLE9BQTJDLFFBQTNDQSxPQUEyQztBQUFBLE1BQWxDQyxVQUFrQyxRQUFsQ0EsVUFBa0M7QUFBQSxNQUF0QkMsU0FBc0IsUUFBdEJBLFNBQXNC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LE1BQU0sQ0FBQ1MsS0FEeEI7QUFFSWxCLHFCQUFPLEVBQUU7QUFDTCxpQ0FBaUI7QUFEWjtBQUZiLGFBSEosRUFTRW9CLElBVEYsQ0FTTyxpQkFBd0I7QUFBQSxrQkFBZkMsUUFBZSxTQUFyQkMsSUFBcUI7QUFDM0Isa0JBQU1xQixHQUFHLEdBQUduQixNQUFNLENBQUNvQixJQUFQLENBQVl2QixRQUFRLENBQUNDLElBQVQsQ0FBY3VCLElBQTFCLEVBQWdDLFFBQWhDLENBQVo7QUFDQUYsaUJBQUcsQ0FBQ0csS0FBSjtBQUNILGFBWkQsV0FZUyxVQUFBYixLQUFLLEVBQUk7QUFDZEQsbUJBQUssQ0FBQ0MsS0FBRCxDQUFMO0FBQ0gsYUFkRDs7QUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBK0JBLElBQU1jLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCO0FBQUEsU0FDeEIsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnRkFESixFQUVJLE1BQUMsMkRBQUQ7QUFDSSxVQUFNLEVBQUMsc0JBRFgsQ0FDa0M7QUFEbEM7QUFFSSxpQkFBYSxFQUFFcEQsYUFGbkI7QUFHSSxtQkFBZSxFQUFFLHlCQUFDcUQsWUFBRCxFQUFlQyxNQUFmLEVBQTBCO0FBQ3ZDLGFBQU96QixNQUFNLENBQUNnQixPQUFQLENBQWUsa0NBQWYsQ0FBUDtBQUNILEtBTEw7QUFNSSxXQUFPLEVBQUUsaUJBQUNELEtBQUQ7QUFBQSxhQUFXRCxvQkFBb0IsQ0FBQ0MsS0FBRCxDQUEvQjtBQUFBLEtBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBRHdCO0FBQUEsQ0FBNUI7O0tBQU1RLFM7QUFjU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tICdyZWFjdC1jb21wb3NpdGUnO1xyXG5pbXBvcnQgUlVHLCB7IERyYWdBcmVhLCBDYXJkIH0gZnJvbSAncmVhY3QtdXBsb2FkLWdhbGxlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmZ1bmN0aW9uIGN1c3RvbVJlcXVlc3QoeyB1aWQsIGZpbGUsIHNlbmQsIGFjdGlvbiwgaGVhZGVycywgb25Qcm9ncmVzcywgb25TdWNjZXNzLCBvbkVycm9yIH0pIHtcclxuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAvLyBzZW5kIGZpbGUgXHJcbiAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKVxyXG5cclxuICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cclxuICAgIGNvbnN0IHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpXHJcblxyXG4gICAgYXhpb3MucG9zdChcclxuICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgZm9ybSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6ICh7IHRvdGFsLCBsb2FkZWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQobG9hZGVkIC8gdG90YWwgKiA1MCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6ICh7IHRvdGFsLCBsb2FkZWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQoNTAgKyBsb2FkZWQgLyB0b3RhbCAqIDUwKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW4sXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcclxuICAgICAgICB9XHJcbiAgICApLnRoZW4oKHsgZGF0YTogcmVzcG9uc2UgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3BvbnNlXSwgeyB0eXBlOiAnaW1hZ2UvZ2lmJyB9KVxyXG4gICAgICAgIGNvbnN0IG9ialVybCA9IHVybC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgYWxlcnQoXCJHYW1pbmdpZnkgc3VjY2VzcyEgWlwiKVxyXG4gICAgICAgIG9uU3VjY2Vzcyh1aWQsIHsgc291cmNlOiBvYmpVcmwgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBvbkVycm9yKHVpZCwge1xyXG4gICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgIHN0YXR1czogZXJyb3IucmVxdWVzdCxcclxuICAgICAgICAgICAgcmVzcG9uc2U6IGVycm9yLnJlc3BvbnNlXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhYm9ydCgpIHtcclxuICAgICAgICAgICAgc291cmNlLmNhbmNlbCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGxvYWRUb0ltZ3VyQW5kT3BlbihpbWFnZSkge1xyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSgnU2hhcmUgb24gaW1ndXI/JykpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBibG9iID0gYXdhaXQgZmV0Y2goaW1hZ2Uuc291cmNlKS50aGVuKHIgPT4gci5ibG9iKCkpOyAgICAgICAgICAgICAgXHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgLy8gc2VuZCBmaWxlXHJcbiAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBibG9iKVxyXG5cclxuICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cclxuICAgIGNvbnN0IHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpXHJcblxyXG4gICAgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLmltZ3VyLmNvbS8zL2ltYWdlXCIsXHJcbiAgICAgICAgZm9ybSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW4sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0NsaWVudC1JRCA0NDA5NTg4ZjEwNzc2ZjcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICkudGhlbigoeyBkYXRhOiByZXNwb25zZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2luID0gd2luZG93Lm9wZW4ocmVzcG9uc2UuZGF0YS5saW5rLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgd2luLmZvY3VzKCk7XHJcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IpXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBJbmRleFBhZ2U6IE5leHRQYWdlID0gKCkgPT4gKFxyXG4gICAgPENvbXBvc2l0ZT5cclxuICAgICAgICA8aDE+44GS44O844G/44KT44GQIGhvZ2Ug44GY44GH44Gt44KM44O844GfPC9oMT5cclxuICAgICAgICA8UlVHXHJcbiAgICAgICAgICAgIGFjdGlvbj1cIi9zZXJ2ZXIvc2VnbWVudGF0aW9uXCIgLy8gdXBsb2FkIHJvdXRlXHJcbiAgICAgICAgICAgIGN1c3RvbVJlcXVlc3Q9e2N1c3RvbVJlcXVlc3R9XHJcbiAgICAgICAgICAgIG9uQ29uZmlybURlbGV0ZT17KGN1cnJlbnRJbWFnZSwgaW1hZ2VzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/JylcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KGltYWdlKSA9PiB1cGxvYWRUb0ltZ3VyQW5kT3BlbihpbWFnZSl9PlxyXG4gICAgICAgIDwvUlVHPlxyXG4gICAgPC9Db21wb3NpdGU+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
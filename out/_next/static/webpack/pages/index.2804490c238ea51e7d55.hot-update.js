webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\",\n    _this2 = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction uploadToImgurAndOpen(_x, _x2) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image, addToast) {\n    var _this3 = this;\n\n    var blob, form, CancelToken, source;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.next = 4;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 4:\n            blob = _context.sent;\n            form = new FormData(); // send file\n\n            form.append('image', blob);\n            form.append('title', \"#げーみんぐhogeじぇねれーた\");\n            form.append('description', \"#げーみんぐhogeじぇねれーた\");\n            CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n            source = CancelToken.source();\n            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n              cancelToken: source.token,\n              headers: {\n                'Authorization': 'Client-ID 4409588f10776f7'\n              }\n            }).then(function (_ref5) {\n              var response = _ref5.data;\n              addToast(__jsx(\"a\", {\n                href: response.data.link,\n                __self: _this3,\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 33,\n                  columnNumber: 18\n                }\n              }, \"Share success! Click here to open!\"), {\n                appearance: 'success'\n              });\n            })[\"catch\"](function (error) {\n              addToast(error.message, {\n                appearance: 'error'\n              });\n            });\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunc;\n\nfunction customRequest(addToast) {\n  var _this = this;\n\n  return function (_ref) {\n    var uid = _ref.uid,\n        file = _ref.file,\n        send = _ref.send,\n        action = _ref.action,\n        headers = _ref.headers,\n        onProgress = _ref.onProgress,\n        onSuccess = _ref.onSuccess,\n        onError = _ref.onError;\n    var form = new FormData(); // send file \n\n    form.append('image', file);\n    var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n    var source = CancelToken.source();\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n      onUploadProgress: function onUploadProgress(_ref2) {\n        var total = _ref2.total,\n            loaded = _ref2.loaded;\n        onProgress(uid, Math.round(loaded / total * 50));\n      },\n      onDownloadProgress: function onDownloadProgress(_ref3) {\n        var total = _ref3.total,\n            loaded = _ref3.loaded;\n        onProgress(uid, Math.round(50 + loaded / total * 50));\n      },\n      cancelToken: source.token,\n      responseType: 'arraybuffer'\n    }).then(function (_ref4) {\n      var response = _ref4.data;\n      var url = window.URL || window.webkitURL;\n      var blob = new Blob([response], {\n        type: 'image/gif'\n      });\n      var objUrl = url.createObjectURL(blob);\n      addToast(__jsx(\"a\", {\n        href: \"#\",\n        onClick: uploadToImgurAndOpen({\n          source: objUrl\n        }, addToast),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 17\n        }\n      }, \"Gamingify success! Click image or here to share!\"), {\n        appearance: 'success'\n      });\n      onSuccess(uid, {\n        source: objUrl\n      });\n    })[\"catch\"](function (error) {\n      addToast(error.message, {\n        appearance: 'error'\n      });\n      onError(uid, {\n        action: action,\n        status: error.request,\n        response: error.response\n      });\n    });\n    return {\n      abort: function abort() {\n        source.cancel();\n      }\n    };\n  };\n}\n\nvar RUGWithToasts = function RUGWithToasts() {\n  _s();\n\n  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"])(),\n      addToast = _useToasts.addToast;\n\n  return __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest(addToast),\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    onClick: function onClick(image) {\n      uploadToImgurAndOpen(image, addToast);\n    },\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 12\n    }\n  });\n};\n\n_s(RUGWithToasts, \"U6FMp6hByBBuG5GNVFUFStpOnow=\", false, function () {\n  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"]];\n});\n\n_c = RUGWithToasts;\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"ToastProvider\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 5\n    }\n  }, __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\"), __jsx(RUGWithToasts, {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  })));\n};\n\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RUGWithToasts\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXBsb2FkVG9JbWd1ckFuZE9wZW4iLCJpbWFnZSIsImFkZFRvYXN0Iiwid2luZG93IiwiY29uZmlybSIsImZldGNoIiwic291cmNlIiwidGhlbiIsInIiLCJibG9iIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInBvc3QiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZGF0YSIsImxpbmsiLCJhcHBlYXJhbmNlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZnVuYyIsImN1c3RvbVJlcXVlc3QiLCJ1aWQiLCJmaWxlIiwic2VuZCIsImFjdGlvbiIsIm9uUHJvZ3Jlc3MiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwib25VcGxvYWRQcm9ncmVzcyIsInRvdGFsIiwibG9hZGVkIiwiTWF0aCIsInJvdW5kIiwib25Eb3dubG9hZFByb2dyZXNzIiwicmVzcG9uc2VUeXBlIiwidXJsIiwiVVJMIiwid2Via2l0VVJMIiwiQmxvYiIsInR5cGUiLCJvYmpVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdGF0dXMiLCJyZXF1ZXN0IiwiYWJvcnQiLCJjYW5jZWwiLCJSVUdXaXRoVG9hc3RzIiwidXNlVG9hc3RzIiwiY3VycmVudEltYWdlIiwiaW1hZ2VzIiwiSW5kZXhQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztTQUVlQSxvQjs7Ozs7Mk1BQWYsaUJBQW9DQyxLQUFwQyxFQUEyQ0MsUUFBM0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ1NDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLGlCQUFmLENBRFQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQUt1QkMsS0FBSyxDQUFDSixLQUFLLENBQUNLLE1B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LElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLG1CQUNIQywyRUFBUyxFQUROO0FBQUEsTUFDaEJuRCxRQURnQixjQUNoQkEsUUFEZ0I7O0FBR3hCLFNBQU8sTUFBQywyREFBRDtBQUNILFVBQU0sRUFBQyxzQkFESixDQUMyQjtBQUQzQjtBQUVILGlCQUFhLEVBQUV3QixhQUFhLENBQUN4QixRQUFELENBRnpCO0FBR0gsbUJBQWUsRUFBRSx5QkFBQ29ELFlBQUQsRUFBZUMsTUFBZixFQUEwQjtBQUN2QyxhQUFPcEQsTUFBTSxDQUFDQyxPQUFQLENBQWUsa0NBQWYsQ0FBUDtBQUNILEtBTEU7QUFNSCxXQUFPLEVBQUUsaUJBQUNILEtBQUQsRUFBVztBQUNoQkQsMEJBQW9CLENBQUNDLEtBQUQsRUFBUUMsUUFBUixDQUFwQjtBQUNILEtBUkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBVUQsQ0FiSDs7R0FBTWtELGE7VUFDbUJDLG1FOzs7S0FEbkJELGE7O0FBZU4sSUFBTUksU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0I7QUFBQSxTQUN4QixNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdGQURKLEVBRUksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLENBRHdCO0FBQUEsQ0FBNUI7O01BQU1BLFM7QUFTU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tICdyZWFjdC1jb21wb3NpdGUnO1xyXG5pbXBvcnQgUlVHLCB7IERyYWdBcmVhLCBDYXJkIH0gZnJvbSAncmVhY3QtdXBsb2FkLWdhbGxlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgVG9hc3RQcm92aWRlciwgdXNlVG9hc3RzIH0gZnJvbSAncmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucydcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdCkge1xyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSgnU2hhcmUgb24gaW1ndXI/JykpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBibG9iID0gYXdhaXQgZmV0Y2goaW1hZ2Uuc291cmNlKS50aGVuKHIgPT4gci5ibG9iKCkpOyAgICAgICAgICAgICAgXHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgLy8gc2VuZCBmaWxlXHJcbiAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBibG9iKVxyXG4gICAgZm9ybS5hcHBlbmQoJ3RpdGxlJywgXCIj44GS44O844G/44KT44GQaG9nZeOBmOOBh+OBreOCjOODvOOBn1wiKVxyXG4gICAgZm9ybS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgXCIj44GS44O844G/44KT44GQaG9nZeOBmOOBh+OBreOCjOODvOOBn1wiKVxyXG5cclxuICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cclxuICAgIGNvbnN0IHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpXHJcblxyXG4gICAgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLmltZ3VyLmNvbS8zL2ltYWdlXCIsXHJcbiAgICAgICAgZm9ybSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW4sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0NsaWVudC1JRCA0NDA5NTg4ZjEwNzc2ZjcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICkudGhlbigoeyBkYXRhOiByZXNwb25zZSB9KSA9PiB7XHJcbiAgICAgICAgYWRkVG9hc3QoPGEgaHJlZj17cmVzcG9uc2UuZGF0YS5saW5rfT5TaGFyZSBzdWNjZXNzISBDbGljayBoZXJlIHRvIG9wZW4hPC9hPiwgeyBhcHBlYXJhbmNlOiAnc3VjY2VzcycgfSlcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBhZGRUb2FzdChlcnJvci5tZXNzYWdlLCB7IGFwcGVhcmFuY2U6ICdlcnJvcicgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmNcclxuXHJcbmZ1bmN0aW9uIGN1c3RvbVJlcXVlc3QoYWRkVG9hc3QpIHtcclxuICAgIHJldHVybiAoeyB1aWQsIGZpbGUsIHNlbmQsIGFjdGlvbiwgaGVhZGVycywgb25Qcm9ncmVzcywgb25TdWNjZXNzLCBvbkVycm9yIH0pID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIC8vIHNlbmQgZmlsZSBcclxuICAgICAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKVxyXG5cclxuICAgICAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuXHJcbiAgICAgICAgY29uc3Qgc291cmNlID0gQ2FuY2VsVG9rZW4uc291cmNlKClcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICBmb3JtLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzKHVpZCwgTWF0aC5yb3VuZChsb2FkZWQgLyB0b3RhbCAqIDUwKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Eb3dubG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzKHVpZCwgTWF0aC5yb3VuZCg1MCArIGxvYWRlZCAvIHRvdGFsICogNTApKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS50aGVuKCh7IGRhdGE6IHJlc3BvbnNlIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xyXG4gICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3BvbnNlXSwgeyB0eXBlOiAnaW1hZ2UvZ2lmJyB9KVxyXG4gICAgICAgICAgICBjb25zdCBvYmpVcmwgPSB1cmwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICBhZGRUb2FzdChcclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dXBsb2FkVG9JbWd1ckFuZE9wZW4oeyBzb3VyY2U6IG9ialVybCB9LCBhZGRUb2FzdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIEdhbWluZ2lmeSBzdWNjZXNzISBDbGljayBpbWFnZSBvciBoZXJlIHRvIHNoYXJlIVxyXG4gICAgICAgICAgICAgICAgPC9hPiwgeyBhcHBlYXJhbmNlOiAnc3VjY2VzcycgfSlcclxuICAgICAgICAgICAgb25TdWNjZXNzKHVpZCwgeyBzb3VyY2U6IG9ialVybCB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGFkZFRvYXN0KGVycm9yLm1lc3NhZ2UsIHsgYXBwZWFyYW5jZTogJ2Vycm9yJyB9KVxyXG4gICAgICAgICAgICBvbkVycm9yKHVpZCwge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBlcnJvci5yZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGVycm9yLnJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UuY2FuY2VsKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgUlVHV2l0aFRvYXN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpXHJcbiAgXHJcbiAgICByZXR1cm4gPFJVR1xyXG4gICAgICAgIGFjdGlvbj1cIi9zZXJ2ZXIvc2VnbWVudGF0aW9uXCIgLy8gdXBsb2FkIHJvdXRlXHJcbiAgICAgICAgY3VzdG9tUmVxdWVzdD17Y3VzdG9tUmVxdWVzdChhZGRUb2FzdCl9XHJcbiAgICAgICAgb25Db25maXJtRGVsZXRlPXsoY3VycmVudEltYWdlLCBpbWFnZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPycpXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNsaWNrPXsoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgdXBsb2FkVG9JbWd1ckFuZE9wZW4oaW1hZ2UsIGFkZFRvYXN0KVxyXG4gICAgICAgIH19PlxyXG4gICAgPC9SVUc+XHJcbiAgfVxyXG5cclxuY29uc3QgSW5kZXhQYWdlOiBOZXh0UGFnZSA9ICgpID0+IChcclxuICAgIDxUb2FzdFByb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb3NpdGU+XHJcbiAgICAgICAgICAgIDxoMT7jgZLjg7zjgb/jgpPjgZAgaG9nZSDjgZjjgYfjga3jgozjg7zjgZ88L2gxPlxyXG4gICAgICAgICAgICA8UlVHV2l0aFRvYXN0cyAvPlxyXG4gICAgICAgIDwvQ29tcG9zaXRlPlxyXG4gICAgPC9Ub2FzdFByb3ZpZGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
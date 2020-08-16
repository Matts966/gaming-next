webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _resize_util_resize_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resize_util/resize_util */ \"./resize_util/resize_util.ts\");\n\n\n\nvar _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\",\n    _this2 = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction uploadToImgurAndOpen(_x, _x2, _x3, _x4) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image, addToast, uid, onProgress) {\n    var _this3 = this;\n\n    var blob, form, CancelToken, source;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.next = 4;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 4:\n            blob = _context.sent;\n            form = new FormData(); // send file\n\n            form.append('image', blob);\n            form.append('title', \"#げーみんぐhogeじぇねれーた\");\n            form.append('description', \"#げーみんぐhogeじぇねれーた\");\n            CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n            source = CancelToken.source();\n            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n              onUploadProgress: function onUploadProgress(_ref5) {\n                var total = _ref5.total,\n                    loaded = _ref5.loaded;\n                onProgress(uid, Math.round(loaded / total * 50));\n              },\n              onDownloadProgress: function onDownloadProgress(_ref6) {\n                var total = _ref6.total,\n                    loaded = _ref6.loaded;\n                onProgress(uid, Math.round(50 + loaded / total * 50));\n              },\n              cancelToken: source.token,\n              headers: {\n                'Authorization': 'Client-ID 4409588f10776f7'\n              }\n            }).then(function (_ref7) {\n              var response = _ref7.data;\n              addToast(__jsx(\"a\", {\n                href: response.data.link,\n                __self: _this3,\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 18\n                }\n              }, \"Share success! Click here to open!\"), {\n                appearance: 'success'\n              });\n            })[\"catch\"](function (error) {\n              addToast(error.message, {\n                appearance: 'error'\n              });\n            });\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction getUploadToImgurAndOpen(image, addToast, uid, onProgress) {\n  return function () {\n    uploadToImgurAndOpen(image, addToast, uid, onProgress);\n  };\n}\n\nfunction customRequest(addToast) {\n  var _this = this;\n\n  return function (_ref) {\n    var uid = _ref.uid,\n        file = _ref.file,\n        send = _ref.send,\n        action = _ref.action,\n        headers = _ref.headers,\n        onProgress = _ref.onProgress,\n        onSuccess = _ref.onSuccess,\n        onError = _ref.onError;\n    var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n    var source = CancelToken.source();\n    var form = new FormData();\n    var resize_util = new _resize_util_resize_util__WEBPACK_IMPORTED_MODULE_7__[\"ResizeUtil\"]();\n    resize_util.compress(file, 500, function (file) {\n      // send file \n      form.append('image', file);\n      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n        onUploadProgress: function onUploadProgress(_ref2) {\n          var total = _ref2.total,\n              loaded = _ref2.loaded;\n          onProgress(uid, Math.round(loaded / total * 50));\n        },\n        onDownloadProgress: function onDownloadProgress(_ref3) {\n          var total = _ref3.total,\n              loaded = _ref3.loaded;\n          onProgress(uid, Math.round(50 + loaded / total * 50));\n        },\n        cancelToken: source.token,\n        responseType: 'arraybuffer'\n      }).then(function (_ref4) {\n        var response = _ref4.data;\n        var url = window.URL || window.webkitURL;\n        var blob = new Blob([response], {\n          type: 'image/gif'\n        });\n        var objUrl = url.createObjectURL(blob);\n        addToast(__jsx(\"a\", {\n          onClick: getUploadToImgurAndOpen({\n            source: objUrl\n          }, addToast, uid, onProgress),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 21\n          }\n        }, \"Gamingify success! Click  here to share!\"), {\n          appearance: 'success'\n        });\n        onSuccess(uid, {\n          source: objUrl\n        });\n      })[\"catch\"](function (error) {\n        addToast(error.message, {\n          appearance: 'error'\n        });\n        onError(uid, {\n          action: action,\n          status: error.request,\n          response: error.response\n        });\n      });\n    });\n    return {\n      abort: function abort() {\n        source.cancel();\n      }\n    };\n  };\n}\n\nvar RUGWithToasts = function RUGWithToasts() {\n  _s();\n\n  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"])(),\n      addToast = _useToasts.addToast;\n\n  return __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest(addToast),\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 12\n    }\n  });\n};\n\n_s(RUGWithToasts, \"U6FMp6hByBBuG5GNVFUFStpOnow=\", false, function () {\n  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"]];\n});\n\n_c = RUGWithToasts;\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"ToastProvider\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 5\n    }\n  }, __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\"), __jsx(RUGWithToasts, {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 13\n    }\n  })));\n};\n\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RUGWithToasts\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXBsb2FkVG9JbWd1ckFuZE9wZW4iLCJpbWFnZSIsImFkZFRvYXN0IiwidWlkIiwib25Qcm9ncmVzcyIsIndpbmRvdyIsImNvbmZpcm0iLCJmZXRjaCIsInNvdXJjZSIsInRoZW4iLCJyIiwiYmxvYiIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJwb3N0Iiwib25VcGxvYWRQcm9ncmVzcyIsInRvdGFsIiwibG9hZGVkIiwiTWF0aCIsInJvdW5kIiwib25Eb3dubG9hZFByb2dyZXNzIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImhlYWRlcnMiLCJyZXNwb25zZSIsImRhdGEiLCJsaW5rIiwiYXBwZWFyYW5jZSIsImVycm9yIiwibWVzc2FnZSIsImdldFVwbG9hZFRvSW1ndXJBbmRPcGVuIiwiY3VzdG9tUmVxdWVzdCIsImZpbGUiLCJzZW5kIiwiYWN0aW9uIiwib25TdWNjZXNzIiwib25FcnJvciIsInJlc2l6ZV91dGlsIiwiUmVzaXplVXRpbCIsImNvbXByZXNzIiwicmVzcG9uc2VUeXBlIiwidXJsIiwiVVJMIiwid2Via2l0VVJMIiwiQmxvYiIsInR5cGUiLCJvYmpVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdGF0dXMiLCJyZXF1ZXN0IiwiYWJvcnQiLCJjYW5jZWwiLCJSVUdXaXRoVG9hc3RzIiwidXNlVG9hc3RzIiwiY3VycmVudEltYWdlIiwiaW1hZ2VzIiwiSW5kZXhQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztTQUVlQSxvQjs7Ozs7Mk1BQWYsaUJBQW9DQyxLQUFwQyxFQUEyQ0MsUUFBM0MsRUFBcURDLEdBQXJELEVBQTBEQyxVQUExRDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDU0MsTUFBTSxDQUFDQyxP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Q0gsVUFBTSxFQUFDLHNCQURKLENBQzJCO0FBRDNCO0FBRUgsaUJBQWEsRUFBRWdDLGFBQWEsQ0FBQ2hDLFFBQUQsQ0FGekI7QUFHSCxtQkFBZSxFQUFFLHlCQUFDdUQsWUFBRCxFQUFlQyxNQUFmLEVBQTBCO0FBQ3ZDLGFBQU9yRCxNQUFNLENBQUNDLE9BQVAsQ0FBZSxrQ0FBZixDQUFQO0FBQ0gsS0FMRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFPRCxDQVZIOztHQUFNaUQsYTtVQUNtQkMsbUU7OztLQURuQkQsYTs7QUFZTixJQUFNSSxTQUFtQixHQUFHLFNBQXRCQSxTQUFzQjtBQUFBLFNBQ3hCLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0ZBREosRUFFSSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosQ0FEd0I7QUFBQSxDQUE1Qjs7TUFBTUEsUztBQVNTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gJ3JlYWN0LWNvbXBvc2l0ZSc7XHJcbmltcG9ydCBSVUcsIHsgRHJhZ0FyZWEsIENhcmQgfSBmcm9tICdyZWFjdC11cGxvYWQtZ2FsbGVyeSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBUb2FzdFByb3ZpZGVyLCB1c2VUb2FzdHMgfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQgeyBSZXNpemVVdGlsIH0gZnJvbSAnLi4vcmVzaXplX3V0aWwvcmVzaXplX3V0aWwnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBsb2FkVG9JbWd1ckFuZE9wZW4oaW1hZ2UsIGFkZFRvYXN0LCB1aWQsIG9uUHJvZ3Jlc3MpIHtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ1NoYXJlIG9uIGltZ3VyPycpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IGZldGNoKGltYWdlLnNvdXJjZSkudGhlbihyID0+IHIuYmxvYigpKTsgICAgICAgICAgICAgIFxyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIC8vIHNlbmQgZmlsZVxyXG4gICAgZm9ybS5hcHBlbmQoJ2ltYWdlJywgYmxvYilcclxuICAgIGZvcm0uYXBwZW5kKCd0aXRsZScsIFwiI+OBkuODvOOBv+OCk+OBkGhvZ2XjgZjjgYfjga3jgozjg7zjgZ9cIilcclxuICAgIGZvcm0uYXBwZW5kKCdkZXNjcmlwdGlvbicsIFwiI+OBkuODvOOBv+OCk+OBkGhvZ2XjgZjjgYfjga3jgozjg7zjgZ9cIilcclxuXHJcbiAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuXHJcbiAgICBjb25zdCBzb3VyY2UgPSBDYW5jZWxUb2tlbi5zb3VyY2UoKVxyXG5cclxuICAgIGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwczovL2FwaS5pbWd1ci5jb20vMy9pbWFnZVwiLFxyXG4gICAgICAgIGZvcm0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3ModWlkLCBNYXRoLnJvdW5kKGxvYWRlZCAvIHRvdGFsICogNTApKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25Eb3dubG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3ModWlkLCBNYXRoLnJvdW5kKDUwICsgbG9hZGVkIC8gdG90YWwgKiA1MCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlLnRva2VuLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdDbGllbnQtSUQgNDQwOTU4OGYxMDc3NmY3JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICApLnRoZW4oKHsgZGF0YTogcmVzcG9uc2UgfSkgPT4ge1xyXG4gICAgICAgIGFkZFRvYXN0KDxhIGhyZWY9e3Jlc3BvbnNlLmRhdGEubGlua30+U2hhcmUgc3VjY2VzcyEgQ2xpY2sgaGVyZSB0byBvcGVuITwvYT4sIHsgYXBwZWFyYW5jZTogJ3N1Y2Nlc3MnIH0pXHJcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgYWRkVG9hc3QoZXJyb3IubWVzc2FnZSwgeyBhcHBlYXJhbmNlOiAnZXJyb3InIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcGxvYWRUb0ltZ3VyQW5kT3BlbihpbWFnZSwgYWRkVG9hc3QsIHVpZCwgb25Qcm9ncmVzcykge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB1cGxvYWRUb0ltZ3VyQW5kT3BlbihpbWFnZSwgYWRkVG9hc3QsIHVpZCwgb25Qcm9ncmVzcylcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3VzdG9tUmVxdWVzdChhZGRUb2FzdCkge1xyXG4gICAgcmV0dXJuICh7IHVpZCwgZmlsZSwgc2VuZCwgYWN0aW9uLCBoZWFkZXJzLCBvblByb2dyZXNzLCBvblN1Y2Nlc3MsIG9uRXJyb3IgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cclxuICAgICAgICBjb25zdCBzb3VyY2UgPSBDYW5jZWxUb2tlbi5zb3VyY2UoKVxyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc2l6ZV91dGlsID0gbmV3IFJlc2l6ZVV0aWwoKVxyXG4gICAgICAgIHJlc2l6ZV91dGlsLmNvbXByZXNzKGZpbGUsIDUwMCwgKGZpbGUpID0+IHtcclxuICAgICAgICAgICAgLy8gc2VuZCBmaWxlIFxyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKVxyXG5cclxuICAgICAgICAgICAgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgICAgIGZvcm0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKHsgdG90YWwsIGxvYWRlZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3ModWlkLCBNYXRoLnJvdW5kKGxvYWRlZCAvIHRvdGFsICogNTApKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uRG93bmxvYWRQcm9ncmVzczogKHsgdG90YWwsIGxvYWRlZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3ModWlkLCBNYXRoLnJvdW5kKDUwICsgbG9hZGVkIC8gdG90YWwgKiA1MCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVG9rZW46IHNvdXJjZS50b2tlbixcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkudGhlbigoeyBkYXRhOiByZXNwb25zZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3BvbnNlXSwgeyB0eXBlOiAnaW1hZ2UvZ2lmJyB9KVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqVXJsID0gdXJsLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2dldFVwbG9hZFRvSW1ndXJBbmRPcGVuKHsgc291cmNlOiBvYmpVcmwgfSwgYWRkVG9hc3QsIHVpZCwgb25Qcm9ncmVzcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1pbmdpZnkgc3VjY2VzcyEgQ2xpY2sgIGhlcmUgdG8gc2hhcmUhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPiwgeyBhcHBlYXJhbmNlOiAnc3VjY2VzcycgfSlcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyh1aWQsIHsgc291cmNlOiBvYmpVcmwgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdChlcnJvci5tZXNzYWdlLCB7IGFwcGVhcmFuY2U6ICdlcnJvcicgfSlcclxuICAgICAgICAgICAgICAgIG9uRXJyb3IodWlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogZXJyb3IucmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogZXJyb3IucmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UuY2FuY2VsKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgUlVHV2l0aFRvYXN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpXHJcbiAgXHJcbiAgICByZXR1cm4gPFJVR1xyXG4gICAgICAgIGFjdGlvbj1cIi9zZXJ2ZXIvc2VnbWVudGF0aW9uXCIgLy8gdXBsb2FkIHJvdXRlXHJcbiAgICAgICAgY3VzdG9tUmVxdWVzdD17Y3VzdG9tUmVxdWVzdChhZGRUb2FzdCl9XHJcbiAgICAgICAgb25Db25maXJtRGVsZXRlPXsoY3VycmVudEltYWdlLCBpbWFnZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPycpXHJcbiAgICAgICAgfX0+XHJcbiAgICA8L1JVRz5cclxuICB9XHJcblxyXG5jb25zdCBJbmRleFBhZ2U6IE5leHRQYWdlID0gKCkgPT4gKFxyXG4gICAgPFRvYXN0UHJvdmlkZXI+XHJcbiAgICAgICAgPENvbXBvc2l0ZT5cclxuICAgICAgICAgICAgPGgxPuOBkuODvOOBv+OCk+OBkCBob2dlIOOBmOOBh+OBreOCjOODvOOBnzwvaDE+XHJcbiAgICAgICAgICAgIDxSVUdXaXRoVG9hc3RzIC8+XHJcbiAgICAgICAgPC9Db21wb3NpdGU+XHJcbiAgICA8L1RvYXN0UHJvdmlkZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
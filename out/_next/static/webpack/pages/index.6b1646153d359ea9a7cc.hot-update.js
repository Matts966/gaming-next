webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\",\n    _this2 = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction uploadToImgurAndOpen(_x, _x2) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image, addToast) {\n    var _this3 = this;\n\n    var blob, form, CancelToken, source;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.next = 4;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 4:\n            blob = _context.sent;\n            form = new FormData(); // send file\n\n            form.append('image', blob);\n            form.append('title', \"#げーみんぐhogeじぇねれーた\");\n            form.append('description', \"#げーみんぐhogeじぇねれーた\");\n            CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n            source = CancelToken.source();\n            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n              cancelToken: source.token,\n              headers: {\n                'Authorization': 'Client-ID 4409588f10776f7'\n              }\n            }).then(function (_ref5) {\n              var response = _ref5.data;\n              addToast(__jsx(\"a\", {\n                href: response.data.link,\n                __self: _this3,\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 33,\n                  columnNumber: 18\n                }\n              }, \"Share success! Click here to open!\"), {\n                appearance: 'success'\n              });\n            })[\"catch\"](function (error) {\n              addToast(error.message, {\n                appearance: 'error'\n              });\n            });\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction getUploadToImgurAndOpen(image, addToast) {\n  return;\n}\n\nfunction customRequest(addToast) {\n  var _this = this;\n\n  return function (_ref) {\n    var uid = _ref.uid,\n        file = _ref.file,\n        send = _ref.send,\n        action = _ref.action,\n        headers = _ref.headers,\n        onProgress = _ref.onProgress,\n        onSuccess = _ref.onSuccess,\n        onError = _ref.onError;\n    var form = new FormData(); // send file \n\n    form.append('image', file);\n    var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n    var source = CancelToken.source();\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n      onUploadProgress: function onUploadProgress(_ref2) {\n        var total = _ref2.total,\n            loaded = _ref2.loaded;\n        onProgress(uid, Math.round(loaded / total * 50));\n      },\n      onDownloadProgress: function onDownloadProgress(_ref3) {\n        var total = _ref3.total,\n            loaded = _ref3.loaded;\n        onProgress(uid, Math.round(50 + loaded / total * 50));\n      },\n      cancelToken: source.token,\n      responseType: 'arraybuffer'\n    }).then(function (_ref4) {\n      var response = _ref4.data;\n      var url = window.URL || window.webkitURL;\n      var blob = new Blob([response], {\n        type: 'image/gif'\n      });\n      var objUrl = url.createObjectURL(blob);\n      addToast(__jsx(\"a\", {\n        href: \"#\",\n        onClick: uploadToImgurAndOpen({\n          source: objUrl\n        }, addToast),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 17\n        }\n      }, \"Gamingify success! Click image or here to share!\"), {\n        appearance: 'success'\n      });\n      onSuccess(uid, {\n        source: objUrl\n      });\n    })[\"catch\"](function (error) {\n      addToast(error.message, {\n        appearance: 'error'\n      });\n      onError(uid, {\n        action: action,\n        status: error.request,\n        response: error.response\n      });\n    });\n    return {\n      abort: function abort() {\n        source.cancel();\n      }\n    };\n  };\n}\n\nvar RUGWithToasts = function RUGWithToasts() {\n  _s();\n\n  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"])(),\n      addToast = _useToasts.addToast;\n\n  return __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest(addToast),\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    onClick: function onClick(image) {\n      uploadToImgurAndOpen(image, addToast);\n    },\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 12\n    }\n  });\n};\n\n_s(RUGWithToasts, \"U6FMp6hByBBuG5GNVFUFStpOnow=\", false, function () {\n  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"]];\n});\n\n_c = RUGWithToasts;\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"ToastProvider\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 5\n    }\n  }, __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\"), __jsx(RUGWithToasts, {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  })));\n};\n\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RUGWithToasts\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXBsb2FkVG9JbWd1ckFuZE9wZW4iLCJpbWFnZSIsImFkZFRvYXN0Iiwid2luZG93IiwiY29uZmlybSIsImZldGNoIiwic291cmNlIiwidGhlbiIsInIiLCJibG9iIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInBvc3QiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZGF0YSIsImxpbmsiLCJhcHBlYXJhbmNlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0VXBsb2FkVG9JbWd1ckFuZE9wZW4iLCJjdXN0b21SZXF1ZXN0IiwidWlkIiwiZmlsZSIsInNlbmQiLCJhY3Rpb24iLCJvblByb2dyZXNzIiwib25TdWNjZXNzIiwib25FcnJvciIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJ0b3RhbCIsImxvYWRlZCIsIk1hdGgiLCJyb3VuZCIsIm9uRG93bmxvYWRQcm9ncmVzcyIsInJlc3BvbnNlVHlwZSIsInVybCIsIlVSTCIsIndlYmtpdFVSTCIsIkJsb2IiLCJ0eXBlIiwib2JqVXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RhdHVzIiwicmVxdWVzdCIsImFib3J0IiwiY2FuY2VsIiwiUlVHV2l0aFRvYXN0cyIsInVzZVRvYXN0cyIsImN1cnJlbnRJbWFnZSIsImltYWdlcyIsIkluZGV4UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7U0FFZUEsb0I7Ozs7OzJNQUFmLGlCQUFvQ0MsS0FBcEMsRUFBMkNDLFFBQTNDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNTQyxNQUFNLENBQUNDLE9BQVAsQ0FBZSxpQkFBZixDQURUO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxtQkFLdUJDLEtBQUss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REcsbUJBQ0s7QUFDSjVDLGNBQU0sQ0FBQzZDLE1BQVA7QUFDSDtBQUhFLEtBQVA7QUFLSCxHQTlDRDtBQStDSDs7QUFFRCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxtQkFDSEMsMkVBQVMsRUFETjtBQUFBLE1BQ2hCbkQsUUFEZ0IsY0FDaEJBLFFBRGdCOztBQUd4QixTQUFPLE1BQUMsMkRBQUQ7QUFDSCxVQUFNLEVBQUMsc0JBREosQ0FDMkI7QUFEM0I7QUFFSCxpQkFBYSxFQUFFd0IsYUFBYSxDQUFDeEIsUUFBRCxDQUZ6QjtBQUdILG1CQUFlLEVBQUUseUJBQUNvRCxZQUFELEVBQWVDLE1BQWYsRUFBMEI7QUFDdkMsYUFBT3BELE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLGtDQUFmLENBQVA7QUFDSCxLQUxFO0FBTUgsV0FBTyxFQUFFLGlCQUFDSCxLQUFELEVBQVc7QUFDaEJELDBCQUFvQixDQUFDQyxLQUFELEVBQVFDLFFBQVIsQ0FBcEI7QUFDSCxLQVJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQVVELENBYkg7O0dBQU1rRCxhO1VBQ21CQyxtRTs7O0tBRG5CRCxhOztBQWVOLElBQU1JLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCO0FBQUEsU0FDeEIsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnRkFESixFQUVJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixDQUR3QjtBQUFBLENBQTVCOztNQUFNQSxTO0FBU1NBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgQ29tcG9zaXRlIH0gZnJvbSAncmVhY3QtY29tcG9zaXRlJztcclxuaW1wb3J0IFJVRywgeyBEcmFnQXJlYSwgQ2FyZCB9IGZyb20gJ3JlYWN0LXVwbG9hZC1nYWxsZXJ5J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IFRvYXN0UHJvdmlkZXIsIHVzZVRvYXN0cyB9IGZyb20gJ3JlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnMnXHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGxvYWRUb0ltZ3VyQW5kT3BlbihpbWFnZSwgYWRkVG9hc3QpIHtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ1NoYXJlIG9uIGltZ3VyPycpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IGZldGNoKGltYWdlLnNvdXJjZSkudGhlbihyID0+IHIuYmxvYigpKTsgICAgICAgICAgICAgIFxyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIC8vIHNlbmQgZmlsZVxyXG4gICAgZm9ybS5hcHBlbmQoJ2ltYWdlJywgYmxvYilcclxuICAgIGZvcm0uYXBwZW5kKCd0aXRsZScsIFwiI+OBkuODvOOBv+OCk+OBkGhvZ2XjgZjjgYfjga3jgozjg7zjgZ9cIilcclxuICAgIGZvcm0uYXBwZW5kKCdkZXNjcmlwdGlvbicsIFwiI+OBkuODvOOBv+OCk+OBkGhvZ2XjgZjjgYfjga3jgozjg7zjgZ9cIilcclxuXHJcbiAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuXHJcbiAgICBjb25zdCBzb3VyY2UgPSBDYW5jZWxUb2tlbi5zb3VyY2UoKVxyXG5cclxuICAgIGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwczovL2FwaS5pbWd1ci5jb20vMy9pbWFnZVwiLFxyXG4gICAgICAgIGZvcm0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlLnRva2VuLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdDbGllbnQtSUQgNDQwOTU4OGYxMDc3NmY3JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICApLnRoZW4oKHsgZGF0YTogcmVzcG9uc2UgfSkgPT4ge1xyXG4gICAgICAgIGFkZFRvYXN0KDxhIGhyZWY9e3Jlc3BvbnNlLmRhdGEubGlua30+U2hhcmUgc3VjY2VzcyEgQ2xpY2sgaGVyZSB0byBvcGVuITwvYT4sIHsgYXBwZWFyYW5jZTogJ3N1Y2Nlc3MnIH0pXHJcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgYWRkVG9hc3QoZXJyb3IubWVzc2FnZSwgeyBhcHBlYXJhbmNlOiAnZXJyb3InIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcGxvYWRUb0ltZ3VyQW5kT3BlbihpbWFnZSwgYWRkVG9hc3QpIHtcclxuICAgIHJldHVyblxyXG59XHJcblxyXG5mdW5jdGlvbiBjdXN0b21SZXF1ZXN0KGFkZFRvYXN0KSB7XHJcbiAgICByZXR1cm4gKHsgdWlkLCBmaWxlLCBzZW5kLCBhY3Rpb24sIGhlYWRlcnMsIG9uUHJvZ3Jlc3MsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICAvLyBzZW5kIGZpbGUgXHJcbiAgICAgICAgZm9ybS5hcHBlbmQoJ2ltYWdlJywgZmlsZSlcclxuXHJcbiAgICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlblxyXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpXHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgZm9ybSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKHsgdG90YWwsIGxvYWRlZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQobG9hZGVkIC8gdG90YWwgKiA1MCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uRG93bmxvYWRQcm9ncmVzczogKHsgdG90YWwsIGxvYWRlZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQoNTAgKyBsb2FkZWQgLyB0b3RhbCAqIDUwKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsVG9rZW46IHNvdXJjZS50b2tlbixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkudGhlbigoeyBkYXRhOiByZXNwb25zZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXNwb25zZV0sIHsgdHlwZTogJ2ltYWdlL2dpZicgfSlcclxuICAgICAgICAgICAgY29uc3Qgb2JqVXJsID0gdXJsLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgYWRkVG9hc3QoXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3VwbG9hZFRvSW1ndXJBbmRPcGVuKHsgc291cmNlOiBvYmpVcmwgfSwgYWRkVG9hc3QpfT5cclxuICAgICAgICAgICAgICAgICAgICBHYW1pbmdpZnkgc3VjY2VzcyEgQ2xpY2sgaW1hZ2Ugb3IgaGVyZSB0byBzaGFyZSFcclxuICAgICAgICAgICAgICAgIDwvYT4sIHsgYXBwZWFyYW5jZTogJ3N1Y2Nlc3MnIH0pXHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcyh1aWQsIHsgc291cmNlOiBvYmpVcmwgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBhZGRUb2FzdChlcnJvci5tZXNzYWdlLCB7IGFwcGVhcmFuY2U6ICdlcnJvcicgfSlcclxuICAgICAgICAgICAgb25FcnJvcih1aWQsIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgICAgIHN0YXR1czogZXJyb3IucmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBlcnJvci5yZXNwb25zZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFib3J0KCkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlLmNhbmNlbCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFJVR1dpdGhUb2FzdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKVxyXG4gIFxyXG4gICAgcmV0dXJuIDxSVUdcclxuICAgICAgICBhY3Rpb249XCIvc2VydmVyL3NlZ21lbnRhdGlvblwiIC8vIHVwbG9hZCByb3V0ZVxyXG4gICAgICAgIGN1c3RvbVJlcXVlc3Q9e2N1c3RvbVJlcXVlc3QoYWRkVG9hc3QpfVxyXG4gICAgICAgIG9uQ29uZmlybURlbGV0ZT17KGN1cnJlbnRJbWFnZSwgaW1hZ2VzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbGljaz17KGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdClcclxuICAgICAgICB9fT5cclxuICAgIDwvUlVHPlxyXG4gIH1cclxuXHJcbmNvbnN0IEluZGV4UGFnZTogTmV4dFBhZ2UgPSAoKSA9PiAoXHJcbiAgICA8VG9hc3RQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9zaXRlPlxyXG4gICAgICAgICAgICA8aDE+44GS44O844G/44KT44GQIGhvZ2Ug44GY44GH44Gt44KM44O844GfPC9oMT5cclxuICAgICAgICAgICAgPFJVR1dpdGhUb2FzdHMgLz5cclxuICAgICAgICA8L0NvbXBvc2l0ZT5cclxuICAgIDwvVG9hc3RQcm92aWRlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
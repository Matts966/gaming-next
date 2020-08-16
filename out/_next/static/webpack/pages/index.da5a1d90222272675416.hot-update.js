webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _resize_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resize_util */ \"./pages/resize_util.ts\");\n\n\n\nvar _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\",\n    _this2 = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction uploadToImgurAndOpen(_x, _x2) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image, addToast) {\n    var _this3 = this;\n\n    var blob, form, CancelToken, source;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.next = 4;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 4:\n            blob = _context.sent;\n            form = new FormData(); // send file\n\n            form.append('image', blob);\n            form.append('title', \"#げーみんぐhogeじぇねれーた\");\n            form.append('description', \"#げーみんぐhogeじぇねれーた\");\n            CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n            source = CancelToken.source();\n            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n              cancelToken: source.token,\n              headers: {\n                'Authorization': 'Client-ID 4409588f10776f7'\n              }\n            }).then(function (_ref5) {\n              var response = _ref5.data;\n              addToast(__jsx(\"a\", {\n                href: response.data.link,\n                __self: _this3,\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 34,\n                  columnNumber: 18\n                }\n              }, \"Share success! Click here to open!\"), {\n                appearance: 'success'\n              });\n            })[\"catch\"](function (error) {\n              addToast(error.message, {\n                appearance: 'error'\n              });\n            });\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction getUploadToImgurAndOpen(image, addToast) {\n  return function () {\n    uploadToImgurAndOpen(image, addToast);\n  };\n}\n\nfunction customRequest(addToast) {\n  var _this = this;\n\n  return function (_ref) {\n    var uid = _ref.uid,\n        file = _ref.file,\n        send = _ref.send,\n        action = _ref.action,\n        headers = _ref.headers,\n        onProgress = _ref.onProgress,\n        onSuccess = _ref.onSuccess,\n        onError = _ref.onError;\n    var form = new FormData();\n    _resize_util__WEBPACK_IMPORTED_MODULE_7__[\"ResizeUtil\"].re; // send file \n\n    form.append('image', file);\n    var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n    var source = CancelToken.source();\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n      onUploadProgress: function onUploadProgress(_ref2) {\n        var total = _ref2.total,\n            loaded = _ref2.loaded;\n        onProgress(uid, Math.round(loaded / total * 50));\n      },\n      onDownloadProgress: function onDownloadProgress(_ref3) {\n        var total = _ref3.total,\n            loaded = _ref3.loaded;\n        onProgress(uid, Math.round(50 + loaded / total * 50));\n      },\n      cancelToken: source.token,\n      responseType: 'arraybuffer'\n    }).then(function (_ref4) {\n      var response = _ref4.data;\n      var url = window.URL || window.webkitURL;\n      var blob = new Blob([response], {\n        type: 'image/gif'\n      });\n      var objUrl = url.createObjectURL(blob);\n      addToast(__jsx(\"a\", {\n        href: \"#\",\n        onClick: getUploadToImgurAndOpen({\n          source: objUrl\n        }, addToast),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 17\n        }\n      }, \"Gamingify success! Click image or here to share!\"), {\n        appearance: 'success'\n      });\n      onSuccess(uid, {\n        source: objUrl\n      });\n    })[\"catch\"](function (error) {\n      addToast(error.message, {\n        appearance: 'error'\n      });\n      onError(uid, {\n        action: action,\n        status: error.request,\n        response: error.response\n      });\n    });\n    return {\n      abort: function abort() {\n        source.cancel();\n      }\n    };\n  };\n}\n\nvar RUGWithToasts = function RUGWithToasts() {\n  _s();\n\n  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"])(),\n      addToast = _useToasts.addToast;\n\n  return __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest(addToast),\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    onClick: function onClick(image) {\n      uploadToImgurAndOpen(image, addToast);\n    },\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 12\n    }\n  });\n};\n\n_s(RUGWithToasts, \"U6FMp6hByBBuG5GNVFUFStpOnow=\", false, function () {\n  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"]];\n});\n\n_c = RUGWithToasts;\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"ToastProvider\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 5\n    }\n  }, __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\"), __jsx(RUGWithToasts, {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }\n  })));\n};\n\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RUGWithToasts\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXBsb2FkVG9JbWd1ckFuZE9wZW4iLCJpbWFnZSIsImFkZFRvYXN0Iiwid2luZG93IiwiY29uZmlybSIsImZldGNoIiwic291cmNlIiwidGhlbiIsInIiLCJibG9iIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInBvc3QiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZGF0YSIsImxpbmsiLCJhcHBlYXJhbmNlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0VXBsb2FkVG9JbWd1ckFuZE9wZW4iLCJjdXN0b21SZXF1ZXN0IiwidWlkIiwiZmlsZSIsInNlbmQiLCJhY3Rpb24iLCJvblByb2dyZXNzIiwib25TdWNjZXNzIiwib25FcnJvciIsIlJlc2l6ZVV0aWwiLCJyZSIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJ0b3RhbCIsImxvYWRlZCIsIk1hdGgiLCJyb3VuZCIsIm9uRG93bmxvYWRQcm9ncmVzcyIsInJlc3BvbnNlVHlwZSIsInVybCIsIlVSTCIsIndlYmtpdFVSTCIsIkJsb2IiLCJ0eXBlIiwib2JqVXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RhdHVzIiwicmVxdWVzdCIsImFib3J0IiwiY2FuY2VsIiwiUlVHV2l0aFRvYXN0cyIsInVzZVRvYXN0cyIsImN1cnJlbnRJbWFnZSIsImltYWdlcyIsIkluZGV4UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7U0FFZUEsb0I7Ozs7OzJNQUFmLGlCQUFvQ0MsS0FBcEMsRUFBMkNDLFFBQTNDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNTQyxNQUFNLENBQUNDLE9BQVAsQ0FBZSxpQkFBZixDQURUO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFB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QSxDQUE1Qjs7TUFBTUEsUztBQVNTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gJ3JlYWN0LWNvbXBvc2l0ZSc7XHJcbmltcG9ydCBSVUcsIHsgRHJhZ0FyZWEsIENhcmQgfSBmcm9tICdyZWFjdC11cGxvYWQtZ2FsbGVyeSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBUb2FzdFByb3ZpZGVyLCB1c2VUb2FzdHMgfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQgeyBSZXNpemVVdGlsIH0gZnJvbSAnLi9yZXNpemVfdXRpbCc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGxvYWRUb0ltZ3VyQW5kT3BlbihpbWFnZSwgYWRkVG9hc3QpIHtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ1NoYXJlIG9uIGltZ3VyPycpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IGZldGNoKGltYWdlLnNvdXJjZSkudGhlbihyID0+IHIuYmxvYigpKTsgICAgICAgICAgICAgIFxyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIC8vIHNlbmQgZmlsZVxyXG4gICAgZm9ybS5hcHBlbmQoJ2ltYWdlJywgYmxvYilcclxuICAgIGZvcm0uYXBwZW5kKCd0aXRsZScsIFwiI+OBkuODvOOBv+OCk+OBkGhvZ2XjgZjjgYfjga3jgozjg7zjgZ9cIilcclxuICAgIGZvcm0uYXBwZW5kKCdkZXNjcmlwdGlvbicsIFwiI+OBkuODvOOBv+OCk+OBkGhvZ2XjgZjjgYfjga3jgozjg7zjgZ9cIilcclxuXHJcbiAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuXHJcbiAgICBjb25zdCBzb3VyY2UgPSBDYW5jZWxUb2tlbi5zb3VyY2UoKVxyXG5cclxuICAgIGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwczovL2FwaS5pbWd1ci5jb20vMy9pbWFnZVwiLFxyXG4gICAgICAgIGZvcm0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlLnRva2VuLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdDbGllbnQtSUQgNDQwOTU4OGYxMDc3NmY3JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICApLnRoZW4oKHsgZGF0YTogcmVzcG9uc2UgfSkgPT4ge1xyXG4gICAgICAgIGFkZFRvYXN0KDxhIGhyZWY9e3Jlc3BvbnNlLmRhdGEubGlua30+U2hhcmUgc3VjY2VzcyEgQ2xpY2sgaGVyZSB0byBvcGVuITwvYT4sIHsgYXBwZWFyYW5jZTogJ3N1Y2Nlc3MnIH0pXHJcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgYWRkVG9hc3QoZXJyb3IubWVzc2FnZSwgeyBhcHBlYXJhbmNlOiAnZXJyb3InIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcGxvYWRUb0ltZ3VyQW5kT3BlbihpbWFnZSwgYWRkVG9hc3QpIHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgdXBsb2FkVG9JbWd1ckFuZE9wZW4oaW1hZ2UsIGFkZFRvYXN0KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjdXN0b21SZXF1ZXN0KGFkZFRvYXN0KSB7XHJcbiAgICByZXR1cm4gKHsgdWlkLCBmaWxlLCBzZW5kLCBhY3Rpb24sIGhlYWRlcnMsIG9uUHJvZ3Jlc3MsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICBSZXNpemVVdGlsLnJlXHJcblxyXG4gICAgICAgIC8vIHNlbmQgZmlsZSBcclxuICAgICAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKVxyXG5cclxuICAgICAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuXHJcbiAgICAgICAgY29uc3Qgc291cmNlID0gQ2FuY2VsVG9rZW4uc291cmNlKClcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICBmb3JtLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzKHVpZCwgTWF0aC5yb3VuZChsb2FkZWQgLyB0b3RhbCAqIDUwKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Eb3dubG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzKHVpZCwgTWF0aC5yb3VuZCg1MCArIGxvYWRlZCAvIHRvdGFsICogNTApKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS50aGVuKCh7IGRhdGE6IHJlc3BvbnNlIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xyXG4gICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3BvbnNlXSwgeyB0eXBlOiAnaW1hZ2UvZ2lmJyB9KVxyXG4gICAgICAgICAgICBjb25zdCBvYmpVcmwgPSB1cmwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICBhZGRUb2FzdChcclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17Z2V0VXBsb2FkVG9JbWd1ckFuZE9wZW4oeyBzb3VyY2U6IG9ialVybCB9LCBhZGRUb2FzdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIEdhbWluZ2lmeSBzdWNjZXNzISBDbGljayBpbWFnZSBvciBoZXJlIHRvIHNoYXJlIVxyXG4gICAgICAgICAgICAgICAgPC9hPiwgeyBhcHBlYXJhbmNlOiAnc3VjY2VzcycgfSlcclxuICAgICAgICAgICAgb25TdWNjZXNzKHVpZCwgeyBzb3VyY2U6IG9ialVybCB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGFkZFRvYXN0KGVycm9yLm1lc3NhZ2UsIHsgYXBwZWFyYW5jZTogJ2Vycm9yJyB9KVxyXG4gICAgICAgICAgICBvbkVycm9yKHVpZCwge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBlcnJvci5yZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGVycm9yLnJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UuY2FuY2VsKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgUlVHV2l0aFRvYXN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpXHJcbiAgXHJcbiAgICByZXR1cm4gPFJVR1xyXG4gICAgICAgIGFjdGlvbj1cIi9zZXJ2ZXIvc2VnbWVudGF0aW9uXCIgLy8gdXBsb2FkIHJvdXRlXHJcbiAgICAgICAgY3VzdG9tUmVxdWVzdD17Y3VzdG9tUmVxdWVzdChhZGRUb2FzdCl9XHJcbiAgICAgICAgb25Db25maXJtRGVsZXRlPXsoY3VycmVudEltYWdlLCBpbWFnZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPycpXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNsaWNrPXsoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgdXBsb2FkVG9JbWd1ckFuZE9wZW4oaW1hZ2UsIGFkZFRvYXN0KVxyXG4gICAgICAgIH19PlxyXG4gICAgPC9SVUc+XHJcbiAgfVxyXG5cclxuY29uc3QgSW5kZXhQYWdlOiBOZXh0UGFnZSA9ICgpID0+IChcclxuICAgIDxUb2FzdFByb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb3NpdGU+XHJcbiAgICAgICAgICAgIDxoMT7jgZLjg7zjgb/jgpPjgZAgaG9nZSDjgZjjgYfjga3jgozjg7zjgZ88L2gxPlxyXG4gICAgICAgICAgICA8UlVHV2l0aFRvYXN0cyAvPlxyXG4gICAgICAgIDwvQ29tcG9zaXRlPlxyXG4gICAgPC9Ub2FzdFByb3ZpZGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
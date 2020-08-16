webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _resize_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resize_util */ \"./pages/resize_util.ts\");\n\n\n\nvar _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\",\n    _this2 = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction uploadToImgurAndOpen(_x, _x2) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image, addToast) {\n    var _this3 = this;\n\n    var blob, form, CancelToken, source;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.next = 4;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 4:\n            blob = _context.sent;\n            form = new FormData(); // send file\n\n            form.append('image', blob);\n            form.append('title', \"#げーみんぐhogeじぇねれーた\");\n            form.append('description', \"#げーみんぐhogeじぇねれーた\");\n            CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n            source = CancelToken.source();\n            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n              cancelToken: source.token,\n              headers: {\n                'Authorization': 'Client-ID 4409588f10776f7'\n              }\n            }).then(function (_ref5) {\n              var response = _ref5.data;\n              addToast(__jsx(\"a\", {\n                href: response.data.link,\n                __self: _this3,\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 34,\n                  columnNumber: 18\n                }\n              }, \"Share success! Click here to open!\"), {\n                appearance: 'success'\n              });\n            })[\"catch\"](function (error) {\n              addToast(error.message, {\n                appearance: 'error'\n              });\n            });\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction getUploadToImgurAndOpen(image, addToast) {\n  return function () {\n    uploadToImgurAndOpen(image, addToast);\n  };\n}\n\nfunction customRequest(addToast) {\n  var _this = this;\n\n  return function (_ref) {\n    var uid = _ref.uid,\n        file = _ref.file,\n        send = _ref.send,\n        action = _ref.action,\n        headers = _ref.headers,\n        onProgress = _ref.onProgress,\n        onSuccess = _ref.onSuccess,\n        onError = _ref.onError;\n    var form = new FormData();\n    var resize_util = new _resize_util__WEBPACK_IMPORTED_MODULE_7__[\"ResizeUtil\"]();\n    resize_util.compress(file, 500, function (blob) {\n      // send file \n      form.append('image', blob);\n      var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n      var source = CancelToken.source();\n      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n        onUploadProgress: function onUploadProgress(_ref2) {\n          var total = _ref2.total,\n              loaded = _ref2.loaded;\n          onProgress(uid, Math.round(loaded / total * 50));\n        },\n        onDownloadProgress: function onDownloadProgress(_ref3) {\n          var total = _ref3.total,\n              loaded = _ref3.loaded;\n          onProgress(uid, Math.round(50 + loaded / total * 50));\n        },\n        cancelToken: source.token,\n        responseType: 'arraybuffer'\n      }).then(function (_ref4) {\n        var response = _ref4.data;\n        var url = window.URL || window.webkitURL;\n        var blob = new Blob([response], {\n          type: 'image/gif'\n        });\n        var objUrl = url.createObjectURL(blob);\n        addToast(__jsx(\"a\", {\n          onClick: getUploadToImgurAndOpen({\n            source: objUrl\n          }, addToast),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 21\n          }\n        }, \"Gamingify success! Click image or here to share!\"), {\n          appearance: 'success'\n        });\n        onSuccess(uid, {\n          source: objUrl\n        });\n      })[\"catch\"](function (error) {\n        addToast(error.message, {\n          appearance: 'error'\n        });\n        onError(uid, {\n          action: action,\n          status: error.request,\n          response: error.response\n        });\n      });\n      return {\n        abort: function abort() {\n          source.cancel();\n        }\n      };\n    });\n  };\n}\n\nvar RUGWithToasts = function RUGWithToasts() {\n  _s();\n\n  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"])(),\n      addToast = _useToasts.addToast;\n\n  return __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest(addToast),\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    onClick: function onClick(image) {\n      uploadToImgurAndOpen(image, addToast);\n    },\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 12\n    }\n  });\n};\n\n_s(RUGWithToasts, \"U6FMp6hByBBuG5GNVFUFStpOnow=\", false, function () {\n  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"]];\n});\n\n_c = RUGWithToasts;\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"ToastProvider\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 5\n    }\n  }, __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\"), __jsx(RUGWithToasts, {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  })));\n};\n\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RUGWithToasts\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXBsb2FkVG9JbWd1ckFuZE9wZW4iLCJpbWFnZSIsImFkZFRvYXN0Iiwid2luZG93IiwiY29uZmlybSIsImZldGNoIiwic291cmNlIiwidGhlbiIsInIiLCJibG9iIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInBvc3QiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZGF0YSIsImxpbmsiLCJhcHBlYXJhbmNlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0VXBsb2FkVG9JbWd1ckFuZE9wZW4iLCJjdXN0b21SZXF1ZXN0IiwidWlkIiwiZmlsZSIsInNlbmQiLCJhY3Rpb24iLCJvblByb2dyZXNzIiwib25TdWNjZXNzIiwib25FcnJvciIsInJlc2l6ZV91dGlsIiwiUmVzaXplVXRpbCIsImNvbXByZXNzIiwib25VcGxvYWRQcm9ncmVzcyIsInRvdGFsIiwibG9hZGVkIiwiTWF0aCIsInJvdW5kIiwib25Eb3dubG9hZFByb2dyZXNzIiwicmVzcG9uc2VUeXBlIiwidXJsIiwiVVJMIiwid2Via2l0VVJMIiwiQmxvYiIsInR5cGUiLCJvYmpVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdGF0dXMiLCJyZXF1ZXN0IiwiYWJvcnQiLCJjYW5jZWwiLCJSVUdXaXRoVG9hc3RzIiwidXNlVG9hc3RzIiwiY3VycmVudEltYWdlIiwiaW1hZ2VzIiwiSW5kZXhQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztTQUVlQSxvQjs7Ozs7Mk1BQWYsaUJBQW9DQyxLQUFwQyxFQUEyQ0MsUUFBM0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ1NDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLGlCQUFmLENBRFQ7QUFBQTtB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdGQURKLEVBRUksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLENBRHdCO0FBQUEsQ0FBNUI7O01BQU1BLFM7QUFTU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tICdyZWFjdC1jb21wb3NpdGUnO1xyXG5pbXBvcnQgUlVHLCB7IERyYWdBcmVhLCBDYXJkIH0gZnJvbSAncmVhY3QtdXBsb2FkLWdhbGxlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgVG9hc3RQcm92aWRlciwgdXNlVG9hc3RzIH0gZnJvbSAncmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucydcclxuaW1wb3J0IHsgUmVzaXplVXRpbCB9IGZyb20gJy4vcmVzaXplX3V0aWwnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBsb2FkVG9JbWd1ckFuZE9wZW4oaW1hZ2UsIGFkZFRvYXN0KSB7XHJcbiAgICBpZiAoIXdpbmRvdy5jb25maXJtKCdTaGFyZSBvbiBpbWd1cj8nKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBmZXRjaChpbWFnZS5zb3VyY2UpLnRoZW4ociA9PiByLmJsb2IoKSk7ICAgICAgICAgICAgICBcclxuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAvLyBzZW5kIGZpbGVcclxuICAgIGZvcm0uYXBwZW5kKCdpbWFnZScsIGJsb2IpXHJcbiAgICBmb3JtLmFwcGVuZCgndGl0bGUnLCBcIiPjgZLjg7zjgb/jgpPjgZBob2dl44GY44GH44Gt44KM44O844GfXCIpXHJcbiAgICBmb3JtLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBcIiPjgZLjg7zjgb/jgpPjgZBob2dl44GY44GH44Gt44KM44O844GfXCIpXHJcblxyXG4gICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlblxyXG4gICAgY29uc3Qgc291cmNlID0gQ2FuY2VsVG9rZW4uc291cmNlKClcclxuXHJcbiAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuaW1ndXIuY29tLzMvaW1hZ2VcIixcclxuICAgICAgICBmb3JtLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FuY2VsVG9rZW46IHNvdXJjZS50b2tlbixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQ2xpZW50LUlEIDQ0MDk1ODhmMTA3NzZmNycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgKS50aGVuKCh7IGRhdGE6IHJlc3BvbnNlIH0pID0+IHtcclxuICAgICAgICBhZGRUb2FzdCg8YSBocmVmPXtyZXNwb25zZS5kYXRhLmxpbmt9PlNoYXJlIHN1Y2Nlc3MhIENsaWNrIGhlcmUgdG8gb3BlbiE8L2E+LCB7IGFwcGVhcmFuY2U6ICdzdWNjZXNzJyB9KVxyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGFkZFRvYXN0KGVycm9yLm1lc3NhZ2UsIHsgYXBwZWFyYW5jZTogJ2Vycm9yJyB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXBsb2FkVG9JbWd1ckFuZE9wZW4oaW1hZ2UsIGFkZFRvYXN0KSB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3VzdG9tUmVxdWVzdChhZGRUb2FzdCkge1xyXG4gICAgcmV0dXJuICh7IHVpZCwgZmlsZSwgc2VuZCwgYWN0aW9uLCBoZWFkZXJzLCBvblByb2dyZXNzLCBvblN1Y2Nlc3MsIG9uRXJyb3IgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzaXplX3V0aWwgPSBuZXcgUmVzaXplVXRpbCgpXHJcbiAgICAgICAgcmVzaXplX3V0aWwuY29tcHJlc3MoZmlsZSwgNTAwLCAoYmxvYikgPT4ge1xyXG4gICAgICAgICAgICAvLyBzZW5kIGZpbGUgXHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdpbWFnZScsIGJsb2IpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuXHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpXHJcblxyXG4gICAgICAgICAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgZm9ybSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQobG9hZGVkIC8gdG90YWwgKiA1MCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25Eb3dubG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQoNTAgKyBsb2FkZWQgLyB0b3RhbCAqIDUwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS50aGVuKCh7IGRhdGE6IHJlc3BvbnNlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzcG9uc2VdLCB7IHR5cGU6ICdpbWFnZS9naWYnIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmpVcmwgPSB1cmwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17Z2V0VXBsb2FkVG9JbWd1ckFuZE9wZW4oeyBzb3VyY2U6IG9ialVybCB9LCBhZGRUb2FzdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1pbmdpZnkgc3VjY2VzcyEgQ2xpY2sgaW1hZ2Ugb3IgaGVyZSB0byBzaGFyZSFcclxuICAgICAgICAgICAgICAgICAgICA8L2E+LCB7IGFwcGVhcmFuY2U6ICdzdWNjZXNzJyB9KVxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKHVpZCwgeyBzb3VyY2U6IG9ialVybCB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KGVycm9yLm1lc3NhZ2UsIHsgYXBwZWFyYW5jZTogJ2Vycm9yJyB9KVxyXG4gICAgICAgICAgICAgICAgb25FcnJvcih1aWQsIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBlcnJvci5yZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBlcnJvci5yZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydCgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2UuY2FuY2VsKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFJVR1dpdGhUb2FzdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKVxyXG4gIFxyXG4gICAgcmV0dXJuIDxSVUdcclxuICAgICAgICBhY3Rpb249XCIvc2VydmVyL3NlZ21lbnRhdGlvblwiIC8vIHVwbG9hZCByb3V0ZVxyXG4gICAgICAgIGN1c3RvbVJlcXVlc3Q9e2N1c3RvbVJlcXVlc3QoYWRkVG9hc3QpfVxyXG4gICAgICAgIG9uQ29uZmlybURlbGV0ZT17KGN1cnJlbnRJbWFnZSwgaW1hZ2VzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbGljaz17KGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdClcclxuICAgICAgICB9fT5cclxuICAgIDwvUlVHPlxyXG4gIH1cclxuXHJcbmNvbnN0IEluZGV4UGFnZTogTmV4dFBhZ2UgPSAoKSA9PiAoXHJcbiAgICA8VG9hc3RQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9zaXRlPlxyXG4gICAgICAgICAgICA8aDE+44GS44O844G/44KT44GQIGhvZ2Ug44GY44GH44Gt44KM44O844GfPC9oMT5cclxuICAgICAgICAgICAgPFJVR1dpdGhUb2FzdHMgLz5cclxuICAgICAgICA8L0NvbXBvc2l0ZT5cclxuICAgIDwvVG9hc3RQcm92aWRlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
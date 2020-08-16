webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction customRequest(addToast) {\n  return function (_ref) {\n    var uid = _ref.uid,\n        file = _ref.file,\n        send = _ref.send,\n        action = _ref.action,\n        headers = _ref.headers,\n        onProgress = _ref.onProgress,\n        onSuccess = _ref.onSuccess,\n        onError = _ref.onError;\n    var form = new FormData(); // send file \n\n    form.append('image', file);\n    var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n    var source = CancelToken.source();\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n      onUploadProgress: function onUploadProgress(_ref2) {\n        var total = _ref2.total,\n            loaded = _ref2.loaded;\n        onProgress(uid, Math.round(loaded / total * 50));\n      },\n      onDownloadProgress: function onDownloadProgress(_ref3) {\n        var total = _ref3.total,\n            loaded = _ref3.loaded;\n        onProgress(uid, Math.round(50 + loaded / total * 50));\n      },\n      cancelToken: source.token,\n      responseType: 'arraybuffer'\n    }).then(function (_ref4) {\n      var response = _ref4.data;\n      var url = window.URL || window.webkitURL;\n      var blob = new Blob([response], {\n        type: 'image/gif'\n      });\n      var objUrl = url.createObjectURL(blob);\n      addToast(\"Gamingify success! Click image to share!\", {\n        appearance: 'success'\n      });\n      onSuccess(uid, {\n        source: objUrl\n      });\n    })[\"catch\"](function (error) {\n      addToast(error.message, {\n        appearance: 'error'\n      });\n      onError(uid, {\n        action: action,\n        status: error.request,\n        response: error.response\n      });\n    });\n    return {\n      abort: function abort() {\n        source.cancel();\n      }\n    };\n  };\n}\n\nfunction uploadToImgurAndOpen(_x, _x2) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image, addToast) {\n    var blob, form, CancelToken, source;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.next = 4;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 4:\n            blob = _context.sent;\n            form = new FormData(); // send file\n\n            form.append('image', blob);\n            form.append('description', \"#げーみんぐhogeじぇねれーた\");\n            CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n            source = CancelToken.source();\n            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n              cancelToken: source.token,\n              headers: {\n                'Authorization': 'Client-ID 4409588f10776f7'\n              }\n            }).then(function (_ref5) {\n              var response = _ref5.data;\n              var win = window.open(response.data.link, '_blank');\n              win.focus();\n            })[\"catch\"](function (error) {\n              addToast(error.message, {\n                appearance: 'error'\n              });\n            });\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nvar RUGWithToasts = function RUGWithToasts() {\n  _s();\n\n  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"])(),\n      addToast = _useToasts.addToast;\n\n  return __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest(add),\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    onClick: function onClick(image) {\n      uploadToImgurAndOpen(image, addToast);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 12\n    }\n  });\n};\n\n_s(RUGWithToasts, \"U6FMp6hByBBuG5GNVFUFStpOnow=\", false, function () {\n  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"]];\n});\n\n_c = RUGWithToasts;\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"ToastProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 5\n    }\n  }, __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\")));\n};\n\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RUGWithToasts\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiY3VzdG9tUmVxdWVzdCIsImFkZFRvYXN0IiwidWlkIiwiZmlsZSIsInNlbmQiLCJhY3Rpb24iLCJoZWFkZXJzIiwib25Qcm9ncmVzcyIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJDYW5jZWxUb2tlbiIsImF4aW9zIiwic291cmNlIiwicG9zdCIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJ0b3RhbCIsImxvYWRlZCIsIk1hdGgiLCJyb3VuZCIsIm9uRG93bmxvYWRQcm9ncmVzcyIsImNhbmNlbFRva2VuIiwidG9rZW4iLCJyZXNwb25zZVR5cGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwidXJsIiwid2luZG93IiwiVVJMIiwid2Via2l0VVJMIiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwib2JqVXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwiYXBwZWFyYW5jZSIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1cyIsInJlcXVlc3QiLCJhYm9ydCIsImNhbmNlbCIsInVwbG9hZFRvSW1ndXJBbmRPcGVuIiwiaW1hZ2UiLCJjb25maXJtIiwiZmV0Y2giLCJyIiwid2luIiwib3BlbiIsImxpbmsiLCJmb2N1cyIsIlJVR1dpdGhUb2FzdHMiLCJ1c2VUb2FzdHMiLCJhZGQiLCJjdXJyZW50SW1hZ2UiLCJpbWFnZXMiLCJJbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsUUFBdkIsRUFBaUM7QUFDN0IsU0FBTyxnQkFBMEU7QUFBQSxRQUF2RUMsR0FBdUUsUUFBdkVBLEdBQXVFO0FBQUEsUUFBbEVDLElBQWtFLFFBQWxFQSxJQUFrRTtBQUFBLFFBQTVEQyxJQUE0RCxRQUE1REEsSUFBNEQ7QUFBQSxRQUF0REMsTUFBc0QsUUFBdERB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WUFBRCxFQUFlQyxNQUFmLEVBQTBCO0FBQ3ZDLGFBQU81QixNQUFNLENBQUNpQixPQUFQLENBQWUsa0NBQWYsQ0FBUDtBQUNILEtBTEU7QUFNSCxXQUFPLEVBQUUsaUJBQUNELEtBQUQsRUFBVztBQUNoQkQsMEJBQW9CLENBQUNDLEtBQUQsRUFBUTdDLFFBQVIsQ0FBcEI7QUFDSCxLQVJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQVVELENBYkg7O0dBQU1xRCxhO1VBQ21CQyxtRTs7O0tBRG5CRCxhOztBQWVOLElBQU1LLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCO0FBQUEsU0FDeEIsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnRkFESixDQURKLENBRHdCO0FBQUEsQ0FBNUI7O01BQU1BLFM7QUFTU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tICdyZWFjdC1jb21wb3NpdGUnO1xyXG5pbXBvcnQgUlVHLCB7IERyYWdBcmVhLCBDYXJkIH0gZnJvbSAncmVhY3QtdXBsb2FkLWdhbGxlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgVG9hc3RQcm92aWRlciwgdXNlVG9hc3RzIH0gZnJvbSAncmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucydcclxuXHJcbmZ1bmN0aW9uIGN1c3RvbVJlcXVlc3QoYWRkVG9hc3QpIHtcclxuICAgIHJldHVybiAoeyB1aWQsIGZpbGUsIHNlbmQsIGFjdGlvbiwgaGVhZGVycywgb25Qcm9ncmVzcywgb25TdWNjZXNzLCBvbkVycm9yIH0pID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIC8vIHNlbmQgZmlsZSBcclxuICAgICAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKVxyXG5cclxuICAgICAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuXHJcbiAgICAgICAgY29uc3Qgc291cmNlID0gQ2FuY2VsVG9rZW4uc291cmNlKClcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICBmb3JtLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzKHVpZCwgTWF0aC5yb3VuZChsb2FkZWQgLyB0b3RhbCAqIDUwKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Eb3dubG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzKHVpZCwgTWF0aC5yb3VuZCg1MCArIGxvYWRlZCAvIHRvdGFsICogNTApKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS50aGVuKCh7IGRhdGE6IHJlc3BvbnNlIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xyXG4gICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3BvbnNlXSwgeyB0eXBlOiAnaW1hZ2UvZ2lmJyB9KVxyXG4gICAgICAgICAgICBjb25zdCBvYmpVcmwgPSB1cmwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICBhZGRUb2FzdChcIkdhbWluZ2lmeSBzdWNjZXNzISBDbGljayBpbWFnZSB0byBzaGFyZSFcIiwgeyBhcHBlYXJhbmNlOiAnc3VjY2VzcycgfSlcclxuICAgICAgICAgICAgb25TdWNjZXNzKHVpZCwgeyBzb3VyY2U6IG9ialVybCB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGFkZFRvYXN0KGVycm9yLm1lc3NhZ2UsIHsgYXBwZWFyYW5jZTogJ2Vycm9yJyB9KVxyXG4gICAgICAgICAgICBvbkVycm9yKHVpZCwge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBlcnJvci5yZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGVycm9yLnJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UuY2FuY2VsKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBsb2FkVG9JbWd1ckFuZE9wZW4oaW1hZ2UsIGFkZFRvYXN0KSB7XHJcbiAgICBpZiAoIXdpbmRvdy5jb25maXJtKCdTaGFyZSBvbiBpbWd1cj8nKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBmZXRjaChpbWFnZS5zb3VyY2UpLnRoZW4ociA9PiByLmJsb2IoKSk7ICAgICAgICAgICAgICBcclxuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAvLyBzZW5kIGZpbGVcclxuICAgIGZvcm0uYXBwZW5kKCdpbWFnZScsIGJsb2IpXHJcbiAgICBmb3JtLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBcIiPjgZLjg7zjgb/jgpPjgZBob2dl44GY44GH44Gt44KM44O844GfXCIpXHJcblxyXG4gICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlblxyXG4gICAgY29uc3Qgc291cmNlID0gQ2FuY2VsVG9rZW4uc291cmNlKClcclxuXHJcbiAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuaW1ndXIuY29tLzMvaW1hZ2VcIixcclxuICAgICAgICBmb3JtLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FuY2VsVG9rZW46IHNvdXJjZS50b2tlbixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQ2xpZW50LUlEIDQ0MDk1ODhmMTA3NzZmNycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgKS50aGVuKCh7IGRhdGE6IHJlc3BvbnNlIH0pID0+IHtcclxuICAgICAgICBjb25zdCB3aW4gPSB3aW5kb3cub3BlbihyZXNwb25zZS5kYXRhLmxpbmssICdfYmxhbmsnKTtcclxuICAgICAgICB3aW4uZm9jdXMoKTtcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBhZGRUb2FzdChlcnJvci5tZXNzYWdlLCB7IGFwcGVhcmFuY2U6ICdlcnJvcicgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IFJVR1dpdGhUb2FzdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKVxyXG4gIFxyXG4gICAgcmV0dXJuIDxSVUdcclxuICAgICAgICBhY3Rpb249XCIvc2VydmVyL3NlZ21lbnRhdGlvblwiIC8vIHVwbG9hZCByb3V0ZVxyXG4gICAgICAgIGN1c3RvbVJlcXVlc3Q9e2N1c3RvbVJlcXVlc3QoYWRkKX1cclxuICAgICAgICBvbkNvbmZpcm1EZWxldGU9eyhjdXJyZW50SW1hZ2UsIGltYWdlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/JylcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eyhpbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICB1cGxvYWRUb0ltZ3VyQW5kT3BlbihpbWFnZSwgYWRkVG9hc3QpXHJcbiAgICAgICAgfX0+XHJcbiAgICA8L1JVRz5cclxuICB9XHJcblxyXG5jb25zdCBJbmRleFBhZ2U6IE5leHRQYWdlID0gKCkgPT4gKFxyXG4gICAgPFRvYXN0UHJvdmlkZXI+XHJcbiAgICAgICAgPENvbXBvc2l0ZT5cclxuICAgICAgICAgICAgPGgxPuOBkuODvOOBv+OCk+OBkCBob2dlIOOBmOOBh+OBreOCjOODvOOBnzwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvQ29tcG9zaXRlPlxyXG4gICAgPC9Ub2FzdFByb3ZpZGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
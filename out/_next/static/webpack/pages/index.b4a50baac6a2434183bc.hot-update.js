webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction customRequest(addToast) {\n  return function (_ref) {\n    var uid = _ref.uid,\n        file = _ref.file,\n        send = _ref.send,\n        action = _ref.action,\n        headers = _ref.headers,\n        onProgress = _ref.onProgress,\n        onSuccess = _ref.onSuccess,\n        onError = _ref.onError;\n    var form = new FormData(); // send file \n\n    form.append('image', file);\n    var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n    var source = CancelToken.source();\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n      onUploadProgress: function onUploadProgress(_ref2) {\n        var total = _ref2.total,\n            loaded = _ref2.loaded;\n        onProgress(uid, Math.round(loaded / total * 50));\n      },\n      onDownloadProgress: function onDownloadProgress(_ref3) {\n        var total = _ref3.total,\n            loaded = _ref3.loaded;\n        onProgress(uid, Math.round(50 + loaded / total * 50));\n      },\n      cancelToken: source.token,\n      responseType: 'arraybuffer'\n    }).then(function (_ref4) {\n      var response = _ref4.data;\n      var url = window.URL || window.webkitURL;\n      var blob = new Blob([response], {\n        type: 'image/gif'\n      });\n      var objUrl = url.createObjectURL(blob);\n      addToast(\"Gamingify success! Click image to share!\", {\n        appearance: 'success'\n      });\n      onSuccess(uid, {\n        source: objUrl\n      });\n    })[\"catch\"](function (error) {\n      addToast(error.message, {\n        appearance: 'error'\n      });\n      onError(uid, {\n        action: action,\n        status: error.request,\n        response: error.response\n      });\n    });\n    return {\n      abort: function abort() {\n        source.cancel();\n      }\n    };\n  };\n}\n\nfunction uploadToImgurAndOpen(_x, _x2) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image, addToast) {\n    var blob, form, CancelToken, source;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.next = 4;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 4:\n            blob = _context.sent;\n            form = new FormData(); // send file\n\n            form.append('image', blob);\n            form.append('description', \"#げーみんぐhogeじぇねれーた\");\n            CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n            source = CancelToken.source();\n            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n              cancelToken: source.token,\n              headers: {\n                'Authorization': 'Client-ID 4409588f10776f7'\n              }\n            }).then(function (_ref5) {\n              var response = _ref5.data;\n              var win = window.open(response.data.link, '_blank');\n              win.focus();\n            })[\"catch\"](function (error) {\n              addToast(error.message, {\n                appearance: 'error'\n              });\n            });\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nvar RUGWithToasts = function RUGWithToasts() {\n  _s();\n\n  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"])(),\n      addToast = _useToasts.addToast;\n\n  return __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest(a),\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    onClick: function onClick(image) {\n      uploadToImgurAndOpen(image, addToast);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 12\n    }\n  });\n};\n\n_s(RUGWithToasts, \"U6FMp6hByBBuG5GNVFUFStpOnow=\", false, function () {\n  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"]];\n});\n\n_c = RUGWithToasts;\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"ToastProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 5\n    }\n  }, __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\")));\n};\n\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RUGWithToasts\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiY3VzdG9tUmVxdWVzdCIsImFkZFRvYXN0IiwidWlkIiwiZmlsZSIsInNlbmQiLCJhY3Rpb24iLCJoZWFkZXJzIiwib25Qcm9ncmVzcyIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJDYW5jZWxUb2tlbiIsImF4aW9zIiwic291cmNlIiwicG9zdCIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJ0b3RhbCIsImxvYWRlZCIsIk1hdGgiLCJyb3VuZCIsIm9uRG93bmxvYWRQcm9ncmVzcyIsImNhbmNlbFRva2VuIiwidG9rZW4iLCJyZXNwb25zZVR5cGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwidXJsIiwid2luZG93IiwiVVJMIiwid2Via2l0VVJMIiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwib2JqVXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwiYXBwZWFyYW5jZSIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1cyIsInJlcXVlc3QiLCJhYm9ydCIsImNhbmNlbCIsInVwbG9hZFRvSW1ndXJBbmRPcGVuIiwiaW1hZ2UiLCJjb25maXJtIiwiZmV0Y2giLCJyIiwid2luIiwib3BlbiIsImxpbmsiLCJmb2N1cyIsIlJVR1dpdGhUb2FzdHMiLCJ1c2VUb2FzdHMiLCJhIiwiY3VycmVudEltYWdlIiwiaW1hZ2VzIiwiSW5kZXhQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDO0FBQzdCLFNBQU8sZ0JBQTBFO0FBQUEsUUFBdkVDLEdBQXVFLFFBQXZFQSxHQUF1RTtBQUFBLFFBQWxFQyxJQUFrRSxRQUFsRUEsSUFBa0U7QUFBQSxRQUE1REMsSUFBNEQsUUFBNURBLElBQTREO0FBQUEsUUFBdERDLE1BQXNELFFBQXREQSxN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QUQsRUFBZUMsTUFBZixFQUEwQjtBQUN2QyxhQUFPNUIsTUFBTSxDQUFDaUIsT0FBUCxDQUFlLGtDQUFmLENBQVA7QUFDSCxLQUxFO0FBTUgsV0FBTyxFQUFFLGlCQUFDRCxLQUFELEVBQVc7QUFDaEJELDBCQUFvQixDQUFDQyxLQUFELEVBQVE3QyxRQUFSLENBQXBCO0FBQ0gsS0FSRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFVRCxDQWJIOztHQUFNcUQsYTtVQUNtQkMsbUU7OztLQURuQkQsYTs7QUFlTixJQUFNSyxTQUFtQixHQUFHLFNBQXRCQSxTQUFzQjtBQUFBLFNBQ3hCLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0ZBREosQ0FESixDQUR3QjtBQUFBLENBQTVCOztNQUFNQSxTO0FBU1NBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgQ29tcG9zaXRlIH0gZnJvbSAncmVhY3QtY29tcG9zaXRlJztcclxuaW1wb3J0IFJVRywgeyBEcmFnQXJlYSwgQ2FyZCB9IGZyb20gJ3JlYWN0LXVwbG9hZC1nYWxsZXJ5J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IFRvYXN0UHJvdmlkZXIsIHVzZVRvYXN0cyB9IGZyb20gJ3JlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnMnXHJcblxyXG5mdW5jdGlvbiBjdXN0b21SZXF1ZXN0KGFkZFRvYXN0KSB7XHJcbiAgICByZXR1cm4gKHsgdWlkLCBmaWxlLCBzZW5kLCBhY3Rpb24sIGhlYWRlcnMsIG9uUHJvZ3Jlc3MsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICAvLyBzZW5kIGZpbGUgXHJcbiAgICAgICAgZm9ybS5hcHBlbmQoJ2ltYWdlJywgZmlsZSlcclxuXHJcbiAgICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlblxyXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpXHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgZm9ybSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKHsgdG90YWwsIGxvYWRlZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQobG9hZGVkIC8gdG90YWwgKiA1MCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uRG93bmxvYWRQcm9ncmVzczogKHsgdG90YWwsIGxvYWRlZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQoNTAgKyBsb2FkZWQgLyB0b3RhbCAqIDUwKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsVG9rZW46IHNvdXJjZS50b2tlbixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkudGhlbigoeyBkYXRhOiByZXNwb25zZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXNwb25zZV0sIHsgdHlwZTogJ2ltYWdlL2dpZicgfSlcclxuICAgICAgICAgICAgY29uc3Qgb2JqVXJsID0gdXJsLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgYWRkVG9hc3QoXCJHYW1pbmdpZnkgc3VjY2VzcyEgQ2xpY2sgaW1hZ2UgdG8gc2hhcmUhXCIsIHsgYXBwZWFyYW5jZTogJ3N1Y2Nlc3MnIH0pXHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcyh1aWQsIHsgc291cmNlOiBvYmpVcmwgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBhZGRUb2FzdChlcnJvci5tZXNzYWdlLCB7IGFwcGVhcmFuY2U6ICdlcnJvcicgfSlcclxuICAgICAgICAgICAgb25FcnJvcih1aWQsIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgICAgIHN0YXR1czogZXJyb3IucmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBlcnJvci5yZXNwb25zZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFib3J0KCkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlLmNhbmNlbCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdCkge1xyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSgnU2hhcmUgb24gaW1ndXI/JykpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBibG9iID0gYXdhaXQgZmV0Y2goaW1hZ2Uuc291cmNlKS50aGVuKHIgPT4gci5ibG9iKCkpOyAgICAgICAgICAgICAgXHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgLy8gc2VuZCBmaWxlXHJcbiAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBibG9iKVxyXG4gICAgZm9ybS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgXCIj44GS44O844G/44KT44GQaG9nZeOBmOOBh+OBreOCjOODvOOBn1wiKVxyXG5cclxuICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cclxuICAgIGNvbnN0IHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpXHJcblxyXG4gICAgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLmltZ3VyLmNvbS8zL2ltYWdlXCIsXHJcbiAgICAgICAgZm9ybSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW4sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0NsaWVudC1JRCA0NDA5NTg4ZjEwNzc2ZjcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICkudGhlbigoeyBkYXRhOiByZXNwb25zZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2luID0gd2luZG93Lm9wZW4ocmVzcG9uc2UuZGF0YS5saW5rLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgd2luLmZvY3VzKCk7XHJcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgYWRkVG9hc3QoZXJyb3IubWVzc2FnZSwgeyBhcHBlYXJhbmNlOiAnZXJyb3InIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBSVUdXaXRoVG9hc3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKClcclxuICBcclxuICAgIHJldHVybiA8UlVHXHJcbiAgICAgICAgYWN0aW9uPVwiL3NlcnZlci9zZWdtZW50YXRpb25cIiAvLyB1cGxvYWQgcm91dGVcclxuICAgICAgICBjdXN0b21SZXF1ZXN0PXtjdXN0b21SZXF1ZXN0KGEpfVxyXG4gICAgICAgIG9uQ29uZmlybURlbGV0ZT17KGN1cnJlbnRJbWFnZSwgaW1hZ2VzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbGljaz17KGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdClcclxuICAgICAgICB9fT5cclxuICAgIDwvUlVHPlxyXG4gIH1cclxuXHJcbmNvbnN0IEluZGV4UGFnZTogTmV4dFBhZ2UgPSAoKSA9PiAoXHJcbiAgICA8VG9hc3RQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9zaXRlPlxyXG4gICAgICAgICAgICA8aDE+44GS44O844G/44KT44GQIGhvZ2Ug44GY44GH44Gt44KM44O844GfPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9Db21wb3NpdGU+XHJcbiAgICA8L1RvYXN0UHJvdmlkZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _resize_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resize_util */ \"./pages/resize_util.ts\");\n\n\n\nvar _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\",\n    _this2 = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction uploadToImgurAndOpen(_x, _x2) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image, addToast) {\n    var _this3 = this;\n\n    var blob, form, CancelToken, source;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.next = 4;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 4:\n            blob = _context.sent;\n            form = new FormData(); // send file\n\n            form.append('image', blob);\n            form.append('title', \"#げーみんぐhogeじぇねれーた\");\n            form.append('description', \"#げーみんぐhogeじぇねれーた\");\n            CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n            source = CancelToken.source();\n            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n              cancelToken: source.token,\n              headers: {\n                'Authorization': 'Client-ID 4409588f10776f7'\n              }\n            }).then(function (_ref5) {\n              var response = _ref5.data;\n              addToast(__jsx(\"a\", {\n                href: response.data.link,\n                __self: _this3,\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 34,\n                  columnNumber: 18\n                }\n              }, \"Share success! Click here to open!\"), {\n                appearance: 'success'\n              });\n            })[\"catch\"](function (error) {\n              addToast(error.message, {\n                appearance: 'error'\n              });\n            });\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction getUploadToImgurAndOpen(image, addToast) {\n  return function () {\n    uploadToImgurAndOpen(image, addToast);\n  };\n}\n\nfunction customRequest(addToast) {\n  var _this = this;\n\n  return function (_ref) {\n    var uid = _ref.uid,\n        file = _ref.file,\n        send = _ref.send,\n        action = _ref.action,\n        headers = _ref.headers,\n        onProgress = _ref.onProgress,\n        onSuccess = _ref.onSuccess,\n        onError = _ref.onError;\n    co;\n    var form = new FormData();\n    var resize_util = new _resize_util__WEBPACK_IMPORTED_MODULE_7__[\"ResizeUtil\"]();\n    resize_util.compress(file, 500, function (blob) {\n      // send file \n      form.append('image', blob);\n      var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n      var source = CancelToken.source();\n      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n        onUploadProgress: function onUploadProgress(_ref2) {\n          var total = _ref2.total,\n              loaded = _ref2.loaded;\n          onProgress(uid, Math.round(loaded / total * 50));\n        },\n        onDownloadProgress: function onDownloadProgress(_ref3) {\n          var total = _ref3.total,\n              loaded = _ref3.loaded;\n          onProgress(uid, Math.round(50 + loaded / total * 50));\n        },\n        cancelToken: source.token,\n        responseType: 'arraybuffer'\n      }).then(function (_ref4) {\n        var response = _ref4.data;\n        var url = window.URL || window.webkitURL;\n        var blob = new Blob([response], {\n          type: 'image/gif'\n        });\n        var objUrl = url.createObjectURL(blob);\n        addToast(__jsx(\"a\", {\n          onClick: getUploadToImgurAndOpen({\n            source: objUrl\n          }, addToast),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 21\n          }\n        }, \"Gamingify success! Click image or here to share!\"), {\n          appearance: 'success'\n        });\n        onSuccess(uid, {\n          source: objUrl\n        });\n      })[\"catch\"](function (error) {\n        addToast(error.message, {\n          appearance: 'error'\n        });\n        onError(uid, {\n          action: action,\n          status: error.request,\n          response: error.response\n        });\n      });\n      return {\n        abort: function abort() {\n          source.cancel();\n        }\n      };\n    });\n  };\n}\n\nvar RUGWithToasts = function RUGWithToasts() {\n  _s();\n\n  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"])(),\n      addToast = _useToasts.addToast;\n\n  return __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest(addToast),\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    onClick: function onClick(image) {\n      uploadToImgurAndOpen(image, addToast);\n    },\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 12\n    }\n  });\n};\n\n_s(RUGWithToasts, \"U6FMp6hByBBuG5GNVFUFStpOnow=\", false, function () {\n  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"]];\n});\n\n_c = RUGWithToasts;\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"ToastProvider\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 5\n    }\n  }, __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 13\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\"), __jsx(RUGWithToasts, {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }\n  })));\n};\n\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RUGWithToasts\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXBsb2FkVG9JbWd1ckFuZE9wZW4iLCJpbWFnZSIsImFkZFRvYXN0Iiwid2luZG93IiwiY29uZmlybSIsImZldGNoIiwic291cmNlIiwidGhlbiIsInIiLCJibG9iIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInBvc3QiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZGF0YSIsImxpbmsiLCJhcHBlYXJhbmNlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0VXBsb2FkVG9JbWd1ckFuZE9wZW4iLCJjdXN0b21SZXF1ZXN0IiwidWlkIiwiZmlsZSIsInNlbmQiLCJhY3Rpb24iLCJvblByb2dyZXNzIiwib25TdWNjZXNzIiwib25FcnJvciIsImNvIiwicmVzaXplX3V0aWwiLCJSZXNpemVVdGlsIiwiY29tcHJlc3MiLCJvblVwbG9hZFByb2dyZXNzIiwidG90YWwiLCJsb2FkZWQiLCJNYXRoIiwicm91bmQiLCJvbkRvd25sb2FkUHJvZ3Jlc3MiLCJyZXNwb25zZVR5cGUiLCJ1cmwiLCJVUkwiLCJ3ZWJraXRVUkwiLCJCbG9iIiwidHlwZSIsIm9ialVybCIsImNyZWF0ZU9iamVjdFVSTCIsInN0YXR1cyIsInJlcXVlc3QiLCJhYm9ydCIsImNhbmNlbCIsIlJVR1dpdGhUb2FzdHMiLCJ1c2VUb2FzdHMiLCJjdXJyZW50SW1hZ2UiLCJpbWFnZXMiLCJJbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1NBRWVBLG9COzs7OzsyTUFBZixpQkFBb0NDLEtBQXBDLEVBQTJDQyxRQUEzQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDU0MsTUFBTSxDQUFDQyxPQUFQLENBQWUsaUJBQWYsQ0FEVDtB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Q0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnRkFESixFQUVJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixDQUR3QjtBQUFBLENBQTVCOztNQUFNQSxTO0FBU1NBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgQ29tcG9zaXRlIH0gZnJvbSAncmVhY3QtY29tcG9zaXRlJztcclxuaW1wb3J0IFJVRywgeyBEcmFnQXJlYSwgQ2FyZCB9IGZyb20gJ3JlYWN0LXVwbG9hZC1nYWxsZXJ5J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IFRvYXN0UHJvdmlkZXIsIHVzZVRvYXN0cyB9IGZyb20gJ3JlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCB7IFJlc2l6ZVV0aWwgfSBmcm9tICcuL3Jlc2l6ZV91dGlsJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdCkge1xyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSgnU2hhcmUgb24gaW1ndXI/JykpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBibG9iID0gYXdhaXQgZmV0Y2goaW1hZ2Uuc291cmNlKS50aGVuKHIgPT4gci5ibG9iKCkpOyAgICAgICAgICAgICAgXHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgLy8gc2VuZCBmaWxlXHJcbiAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBibG9iKVxyXG4gICAgZm9ybS5hcHBlbmQoJ3RpdGxlJywgXCIj44GS44O844G/44KT44GQaG9nZeOBmOOBh+OBreOCjOODvOOBn1wiKVxyXG4gICAgZm9ybS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgXCIj44GS44O844G/44KT44GQaG9nZeOBmOOBh+OBreOCjOODvOOBn1wiKVxyXG5cclxuICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cclxuICAgIGNvbnN0IHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpXHJcblxyXG4gICAgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLmltZ3VyLmNvbS8zL2ltYWdlXCIsXHJcbiAgICAgICAgZm9ybSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW4sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0NsaWVudC1JRCA0NDA5NTg4ZjEwNzc2ZjcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICkudGhlbigoeyBkYXRhOiByZXNwb25zZSB9KSA9PiB7XHJcbiAgICAgICAgYWRkVG9hc3QoPGEgaHJlZj17cmVzcG9uc2UuZGF0YS5saW5rfT5TaGFyZSBzdWNjZXNzISBDbGljayBoZXJlIHRvIG9wZW4hPC9hPiwgeyBhcHBlYXJhbmNlOiAnc3VjY2VzcycgfSlcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBhZGRUb2FzdChlcnJvci5tZXNzYWdlLCB7IGFwcGVhcmFuY2U6ICdlcnJvcicgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdCkge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB1cGxvYWRUb0ltZ3VyQW5kT3BlbihpbWFnZSwgYWRkVG9hc3QpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGN1c3RvbVJlcXVlc3QoYWRkVG9hc3QpIHtcclxuICAgIHJldHVybiAoeyB1aWQsIGZpbGUsIHNlbmQsIGFjdGlvbiwgaGVhZGVycywgb25Qcm9ncmVzcywgb25TdWNjZXNzLCBvbkVycm9yIH0pID0+IHtcclxuICAgICAgICBjb1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc2l6ZV91dGlsID0gbmV3IFJlc2l6ZVV0aWwoKVxyXG4gICAgICAgIHJlc2l6ZV91dGlsLmNvbXByZXNzKGZpbGUsIDUwMCwgKGJsb2IpID0+IHtcclxuICAgICAgICAgICAgLy8gc2VuZCBmaWxlIFxyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBibG9iKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlblxyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBDYW5jZWxUb2tlbi5zb3VyY2UoKVxyXG5cclxuICAgICAgICAgICAgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgICAgIGZvcm0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKHsgdG90YWwsIGxvYWRlZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3ModWlkLCBNYXRoLnJvdW5kKGxvYWRlZCAvIHRvdGFsICogNTApKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uRG93bmxvYWRQcm9ncmVzczogKHsgdG90YWwsIGxvYWRlZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3ModWlkLCBNYXRoLnJvdW5kKDUwICsgbG9hZGVkIC8gdG90YWwgKiA1MCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVG9rZW46IHNvdXJjZS50b2tlbixcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkudGhlbigoeyBkYXRhOiByZXNwb25zZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3BvbnNlXSwgeyB0eXBlOiAnaW1hZ2UvZ2lmJyB9KVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqVXJsID0gdXJsLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2dldFVwbG9hZFRvSW1ndXJBbmRPcGVuKHsgc291cmNlOiBvYmpVcmwgfSwgYWRkVG9hc3QpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2FtaW5naWZ5IHN1Y2Nlc3MhIENsaWNrIGltYWdlIG9yIGhlcmUgdG8gc2hhcmUhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPiwgeyBhcHBlYXJhbmNlOiAnc3VjY2VzcycgfSlcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyh1aWQsIHsgc291cmNlOiBvYmpVcmwgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdChlcnJvci5tZXNzYWdlLCB7IGFwcGVhcmFuY2U6ICdlcnJvcicgfSlcclxuICAgICAgICAgICAgICAgIG9uRXJyb3IodWlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogZXJyb3IucmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogZXJyb3IucmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlLmNhbmNlbCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBSVUdXaXRoVG9hc3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKClcclxuICBcclxuICAgIHJldHVybiA8UlVHXHJcbiAgICAgICAgYWN0aW9uPVwiL3NlcnZlci9zZWdtZW50YXRpb25cIiAvLyB1cGxvYWQgcm91dGVcclxuICAgICAgICBjdXN0b21SZXF1ZXN0PXtjdXN0b21SZXF1ZXN0KGFkZFRvYXN0KX1cclxuICAgICAgICBvbkNvbmZpcm1EZWxldGU9eyhjdXJyZW50SW1hZ2UsIGltYWdlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/JylcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eyhpbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICB1cGxvYWRUb0ltZ3VyQW5kT3BlbihpbWFnZSwgYWRkVG9hc3QpXHJcbiAgICAgICAgfX0+XHJcbiAgICA8L1JVRz5cclxuICB9XHJcblxyXG5jb25zdCBJbmRleFBhZ2U6IE5leHRQYWdlID0gKCkgPT4gKFxyXG4gICAgPFRvYXN0UHJvdmlkZXI+XHJcbiAgICAgICAgPENvbXBvc2l0ZT5cclxuICAgICAgICAgICAgPGgxPuOBkuODvOOBv+OCk+OBkCBob2dlIOOBmOOBh+OBreOCjOODvOOBnzwvaDE+XHJcbiAgICAgICAgICAgIDxSVUdXaXRoVG9hc3RzIC8+XHJcbiAgICAgICAgPC9Db21wb3NpdGU+XHJcbiAgICA8L1RvYXN0UHJvdmlkZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
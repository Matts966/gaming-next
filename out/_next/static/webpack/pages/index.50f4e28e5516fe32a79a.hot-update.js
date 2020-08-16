webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _resize_util_resize_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resize_util/resize_util */ \"./resize_util/resize_util.ts\");\n\n\n\nvar _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\",\n    _this2 = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction uploadToImgurAndOpen(_x, _x2, _x3) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image, addToast, onProgress) {\n    var _this3 = this;\n\n    var blob, form, CancelToken, source;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.next = 4;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 4:\n            blob = _context.sent;\n            form = new FormData(); // send file\n\n            form.append('image', blob);\n            form.append('title', \"#げーみんぐhogeじぇねれーた\");\n            form.append('description', \"#げーみんぐhogeじぇねれーた\");\n            CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n            source = CancelToken.source();\n            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n              onUploadProgress: function onUploadProgress(_ref5) {\n                var total = _ref5.total,\n                    loaded = _ref5.loaded;\n                onProgress(uid, Math.round(loaded / total * 50));\n              },\n              onDownloadProgress: function onDownloadProgress(_ref6) {\n                var total = _ref6.total,\n                    loaded = _ref6.loaded;\n                onProgress(uid, Math.round(50 + loaded / total * 50));\n              },\n              cancelToken: source.token,\n              headers: {\n                'Authorization': 'Client-ID 4409588f10776f7'\n              }\n            }).then(function (_ref7) {\n              var response = _ref7.data;\n              addToast(__jsx(\"a\", {\n                href: response.data.link,\n                __self: _this3,\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 18\n                }\n              }, \"Share success! Click here to open!\"), {\n                appearance: 'success'\n              });\n            })[\"catch\"](function (error) {\n              addToast(error.message, {\n                appearance: 'error'\n              });\n            });\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction getUploadToImgurAndOpen(image, addToast, onProgr) {\n  return function () {\n    uploadToImgurAndOpen(image, addToast);\n  };\n}\n\nfunction customRequest(addToast) {\n  var _this = this;\n\n  return function (_ref) {\n    var uid = _ref.uid,\n        file = _ref.file,\n        send = _ref.send,\n        action = _ref.action,\n        headers = _ref.headers,\n        onProgress = _ref.onProgress,\n        onSuccess = _ref.onSuccess,\n        onError = _ref.onError;\n    var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n    var source = CancelToken.source();\n    var form = new FormData();\n    var resize_util = new _resize_util_resize_util__WEBPACK_IMPORTED_MODULE_7__[\"ResizeUtil\"]();\n    resize_util.compress(file, 500, function (file) {\n      // send file \n      form.append('image', file);\n      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n        onUploadProgress: function onUploadProgress(_ref2) {\n          var total = _ref2.total,\n              loaded = _ref2.loaded;\n          onProgress(uid, Math.round(loaded / total * 50));\n        },\n        onDownloadProgress: function onDownloadProgress(_ref3) {\n          var total = _ref3.total,\n              loaded = _ref3.loaded;\n          onProgress(uid, Math.round(50 + loaded / total * 50));\n        },\n        cancelToken: source.token,\n        responseType: 'arraybuffer'\n      }).then(function (_ref4) {\n        var response = _ref4.data;\n        var url = window.URL || window.webkitURL;\n        var blob = new Blob([response], {\n          type: 'image/gif'\n        });\n        var objUrl = url.createObjectURL(blob);\n        addToast(__jsx(\"a\", {\n          onClick: getUploadToImgurAndOpen({\n            source: objUrl\n          }, addToast),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 21\n          }\n        }, \"Gamingify success! Click image or here to share!\"), {\n          appearance: 'success'\n        });\n        onSuccess(uid, {\n          source: objUrl\n        });\n      })[\"catch\"](function (error) {\n        addToast(error.message, {\n          appearance: 'error'\n        });\n        onError(uid, {\n          action: action,\n          status: error.request,\n          response: error.response\n        });\n      });\n    });\n    return {\n      abort: function abort() {\n        source.cancel();\n      }\n    };\n  };\n}\n\nvar RUGWithToasts = function RUGWithToasts() {\n  _s();\n\n  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"])(),\n      addToast = _useToasts.addToast;\n\n  return __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest(addToast),\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 12\n    }\n  });\n};\n\n_s(RUGWithToasts, \"U6FMp6hByBBuG5GNVFUFStpOnow=\", false, function () {\n  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"]];\n});\n\n_c = RUGWithToasts;\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"ToastProvider\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 5\n    }\n  }, __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\"), __jsx(RUGWithToasts, {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 13\n    }\n  })));\n};\n\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RUGWithToasts\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXBsb2FkVG9JbWd1ckFuZE9wZW4iLCJpbWFnZSIsImFkZFRvYXN0Iiwib25Qcm9ncmVzcyIsIndpbmRvdyIsImNvbmZpcm0iLCJmZXRjaCIsInNvdXJjZSIsInRoZW4iLCJyIiwiYmxvYiIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJwb3N0Iiwib25VcGxvYWRQcm9ncmVzcyIsInRvdGFsIiwibG9hZGVkIiwidWlkIiwiTWF0aCIsInJvdW5kIiwib25Eb3dubG9hZFByb2dyZXNzIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImhlYWRlcnMiLCJyZXNwb25zZSIsImRhdGEiLCJsaW5rIiwiYXBwZWFyYW5jZSIsImVycm9yIiwibWVzc2FnZSIsImdldFVwbG9hZFRvSW1ndXJBbmRPcGVuIiwib25Qcm9nciIsImN1c3RvbVJlcXVlc3QiLCJmaWxlIiwic2VuZCIsImFjdGlvbiIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJyZXNpemVfdXRpbCIsIlJlc2l6ZVV0aWwiLCJjb21wcmVzcyIsInJlc3BvbnNlVHlwZSIsInVybCIsIlVSTCIsIndlYmtpdFVSTCIsIkJsb2IiLCJ0eXBlIiwib2JqVXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RhdHVzIiwicmVxdWVzdCIsImFib3J0IiwiY2FuY2VsIiwiUlVHV2l0aFRvYXN0cyIsInVzZVRvYXN0cyIsImN1cnJlbnRJbWFnZSIsImltYWdlcyIsIkluZGV4UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7U0FFZUEsb0I7Ozs7OzJNQUFmLGlCQUFvQ0MsS0FBcEMsRUFBMkNDLFFBQTNDLEVBQXFEQyxVQUFyRDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDU0MsTUFBTSxDQUFDQyxPQUFQ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LENBRnpCO0FBR0gsbUJBQWUsRUFBRSx5QkFBQ3dELFlBQUQsRUFBZUMsTUFBZixFQUEwQjtBQUN2QyxhQUFPdkQsTUFBTSxDQUFDQyxPQUFQLENBQWUsa0NBQWYsQ0FBUDtBQUNILEtBTEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBT0QsQ0FWSDs7R0FBTW1ELGE7VUFDbUJDLG1FOzs7S0FEbkJELGE7O0FBWU4sSUFBTUksU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0I7QUFBQSxTQUN4QixNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdGQURKLEVBRUksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLENBRHdCO0FBQUEsQ0FBNUI7O01BQU1BLFM7QUFTU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tICdyZWFjdC1jb21wb3NpdGUnO1xyXG5pbXBvcnQgUlVHLCB7IERyYWdBcmVhLCBDYXJkIH0gZnJvbSAncmVhY3QtdXBsb2FkLWdhbGxlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgVG9hc3RQcm92aWRlciwgdXNlVG9hc3RzIH0gZnJvbSAncmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucydcclxuaW1wb3J0IHsgUmVzaXplVXRpbCB9IGZyb20gJy4uL3Jlc2l6ZV91dGlsL3Jlc2l6ZV91dGlsJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdCwgb25Qcm9ncmVzcykge1xyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSgnU2hhcmUgb24gaW1ndXI/JykpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBibG9iID0gYXdhaXQgZmV0Y2goaW1hZ2Uuc291cmNlKS50aGVuKHIgPT4gci5ibG9iKCkpOyAgICAgICAgICAgICAgXHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgLy8gc2VuZCBmaWxlXHJcbiAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBibG9iKVxyXG4gICAgZm9ybS5hcHBlbmQoJ3RpdGxlJywgXCIj44GS44O844G/44KT44GQaG9nZeOBmOOBh+OBreOCjOODvOOBn1wiKVxyXG4gICAgZm9ybS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgXCIj44GS44O844G/44KT44GQaG9nZeOBmOOBh+OBreOCjOODvOOBn1wiKVxyXG5cclxuICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cclxuICAgIGNvbnN0IHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpXHJcblxyXG4gICAgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLmltZ3VyLmNvbS8zL2ltYWdlXCIsXHJcbiAgICAgICAgZm9ybSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6ICh7IHRvdGFsLCBsb2FkZWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQobG9hZGVkIC8gdG90YWwgKiA1MCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6ICh7IHRvdGFsLCBsb2FkZWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQoNTAgKyBsb2FkZWQgLyB0b3RhbCAqIDUwKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW4sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0NsaWVudC1JRCA0NDA5NTg4ZjEwNzc2ZjcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICkudGhlbigoeyBkYXRhOiByZXNwb25zZSB9KSA9PiB7XHJcbiAgICAgICAgYWRkVG9hc3QoPGEgaHJlZj17cmVzcG9uc2UuZGF0YS5saW5rfT5TaGFyZSBzdWNjZXNzISBDbGljayBoZXJlIHRvIG9wZW4hPC9hPiwgeyBhcHBlYXJhbmNlOiAnc3VjY2VzcycgfSlcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBhZGRUb2FzdChlcnJvci5tZXNzYWdlLCB7IGFwcGVhcmFuY2U6ICdlcnJvcicgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdCwgb25Qcm9ncikge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB1cGxvYWRUb0ltZ3VyQW5kT3BlbihpbWFnZSwgYWRkVG9hc3QpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGN1c3RvbVJlcXVlc3QoYWRkVG9hc3QpIHtcclxuICAgIHJldHVybiAoeyB1aWQsIGZpbGUsIHNlbmQsIGFjdGlvbiwgaGVhZGVycywgb25Qcm9ncmVzcywgb25TdWNjZXNzLCBvbkVycm9yIH0pID0+IHtcclxuICAgICAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuXHJcbiAgICAgICAgY29uc3Qgc291cmNlID0gQ2FuY2VsVG9rZW4uc291cmNlKClcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNpemVfdXRpbCA9IG5ldyBSZXNpemVVdGlsKClcclxuICAgICAgICByZXNpemVfdXRpbC5jb21wcmVzcyhmaWxlLCA1MDAsIChmaWxlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHNlbmQgZmlsZSBcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2ltYWdlJywgZmlsZSlcclxuXHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBmb3JtLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6ICh7IHRvdGFsLCBsb2FkZWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzKHVpZCwgTWF0aC5yb3VuZChsb2FkZWQgLyB0b3RhbCAqIDUwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6ICh7IHRvdGFsLCBsb2FkZWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzKHVpZCwgTWF0aC5yb3VuZCg1MCArIGxvYWRlZCAvIHRvdGFsICogNTApKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLnRoZW4oKHsgZGF0YTogcmVzcG9uc2UgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXNwb25zZV0sIHsgdHlwZTogJ2ltYWdlL2dpZicgfSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9ialVybCA9IHVybC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdChcclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtnZXRVcGxvYWRUb0ltZ3VyQW5kT3Blbih7IHNvdXJjZTogb2JqVXJsIH0sIGFkZFRvYXN0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWluZ2lmeSBzdWNjZXNzISBDbGljayBpbWFnZSBvciBoZXJlIHRvIHNoYXJlIVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT4sIHsgYXBwZWFyYW5jZTogJ3N1Y2Nlc3MnIH0pXHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3ModWlkLCB7IHNvdXJjZTogb2JqVXJsIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoZXJyb3IubWVzc2FnZSwgeyBhcHBlYXJhbmNlOiAnZXJyb3InIH0pXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yKHVpZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGVycm9yLnJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IGVycm9yLnJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFib3J0KCkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlLmNhbmNlbCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFJVR1dpdGhUb2FzdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKVxyXG4gIFxyXG4gICAgcmV0dXJuIDxSVUdcclxuICAgICAgICBhY3Rpb249XCIvc2VydmVyL3NlZ21lbnRhdGlvblwiIC8vIHVwbG9hZCByb3V0ZVxyXG4gICAgICAgIGN1c3RvbVJlcXVlc3Q9e2N1c3RvbVJlcXVlc3QoYWRkVG9hc3QpfVxyXG4gICAgICAgIG9uQ29uZmlybURlbGV0ZT17KGN1cnJlbnRJbWFnZSwgaW1hZ2VzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nKVxyXG4gICAgICAgIH19PlxyXG4gICAgPC9SVUc+XHJcbiAgfVxyXG5cclxuY29uc3QgSW5kZXhQYWdlOiBOZXh0UGFnZSA9ICgpID0+IChcclxuICAgIDxUb2FzdFByb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb3NpdGU+XHJcbiAgICAgICAgICAgIDxoMT7jgZLjg7zjgb/jgpPjgZAgaG9nZSDjgZjjgYfjga3jgozjg7zjgZ88L2gxPlxyXG4gICAgICAgICAgICA8UlVHV2l0aFRvYXN0cyAvPlxyXG4gICAgICAgIDwvQ29tcG9zaXRlPlxyXG4gICAgPC9Ub2FzdFByb3ZpZGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
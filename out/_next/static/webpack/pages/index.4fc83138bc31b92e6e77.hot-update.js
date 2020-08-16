webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _resize_util_resize_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resize_util/resize_util */ \"./resize_util/resize_util.ts\");\n\n\n\nvar _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\",\n    _this2 = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction uploadToImgurAndOpen(_x, _x2, _x3, _x4) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image, addToast, uid, onProgress) {\n    var _this3 = this;\n\n    var blob, form, CancelToken, source;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            image.re;\n\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 3;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 3:\n            _context.next = 5;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 5:\n            blob = _context.sent;\n            form = new FormData(); // send file\n\n            form.append('image', blob);\n            form.append('title', \"#げーみんぐhogeじぇねれーた\");\n            form.append('description', \"#げーみんぐhogeじぇねれーた\");\n            CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n            source = CancelToken.source();\n            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n              onUploadProgress: function onUploadProgress(_ref5) {\n                var total = _ref5.total,\n                    loaded = _ref5.loaded;\n                onProgress(uid, Math.round(loaded / total * 50));\n              },\n              onDownloadProgress: function onDownloadProgress(_ref6) {\n                var total = _ref6.total,\n                    loaded = _ref6.loaded;\n                onProgress(uid, Math.round(50 + loaded / total * 50));\n              },\n              cancelToken: source.token,\n              headers: {\n                'Authorization': 'Client-ID 4409588f10776f7'\n              }\n            }).then(function (_ref7) {\n              var response = _ref7.data;\n              addToast(__jsx(\"a\", {\n                href: response.data.link,\n                __self: _this3,\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 18\n                }\n              }, \"Share success! Click here to open!\"), {\n                appearance: 'success'\n              });\n            })[\"catch\"](function (error) {\n              addToast(error.message, {\n                appearance: 'error'\n              });\n            });\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction getUploadToImgurAndOpen(image, addToast, uid, onProgress) {\n  return function () {\n    uploadToImgurAndOpen(image, addToast, uid, onProgress);\n  };\n}\n\nfunction customRequest(addToast) {\n  var _this = this;\n\n  return function (_ref) {\n    var uid = _ref.uid,\n        file = _ref.file,\n        send = _ref.send,\n        action = _ref.action,\n        headers = _ref.headers,\n        onProgress = _ref.onProgress,\n        onSuccess = _ref.onSuccess,\n        onError = _ref.onError;\n    var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n    var source = CancelToken.source();\n    var form = new FormData();\n    var resize_util = new _resize_util_resize_util__WEBPACK_IMPORTED_MODULE_7__[\"ResizeUtil\"]();\n    resize_util.compress(file, 500, function (file) {\n      // send file \n      form.append('image', file);\n      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n        onUploadProgress: function onUploadProgress(_ref2) {\n          var total = _ref2.total,\n              loaded = _ref2.loaded;\n          onProgress(uid, Math.round(loaded / total * 50));\n        },\n        onDownloadProgress: function onDownloadProgress(_ref3) {\n          var total = _ref3.total,\n              loaded = _ref3.loaded;\n          onProgress(uid, Math.round(50 + loaded / total * 50));\n        },\n        cancelToken: source.token,\n        responseType: 'arraybuffer'\n      }).then(function (_ref4) {\n        var response = _ref4.data;\n        var url = window.URL || window.webkitURL;\n        var blob = new Blob([response], {\n          type: 'image/gif'\n        });\n        var objUrl = url.createObjectURL(blob);\n        addToast(__jsx(\"a\", {\n          onClick: getUploadToImgurAndOpen({\n            source: objUrl\n          }, addToast, uid, onProgress),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 21\n          }\n        }, \"Gamingify success! Click here to share!\"), {\n          appearance: 'success'\n        });\n        onSuccess(uid, {\n          source: objUrl\n        });\n      })[\"catch\"](function (error) {\n        addToast(error.message, {\n          appearance: 'error'\n        });\n        onError(uid, {\n          action: action,\n          status: error.request,\n          response: error.response\n        });\n      });\n    });\n    return {\n      abort: function abort() {\n        source.cancel();\n      }\n    };\n  };\n}\n\nvar RUGWithToasts = function RUGWithToasts() {\n  _s();\n\n  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"])(),\n      addToast = _useToasts.addToast;\n\n  return __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest(addToast),\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 12\n    }\n  });\n};\n\n_s(RUGWithToasts, \"U6FMp6hByBBuG5GNVFUFStpOnow=\", false, function () {\n  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"]];\n});\n\n_c = RUGWithToasts;\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"ToastProvider\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 5\n    }\n  }, __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\"), __jsx(RUGWithToasts, {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 13\n    }\n  })));\n};\n\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RUGWithToasts\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXBsb2FkVG9JbWd1ckFuZE9wZW4iLCJpbWFnZSIsImFkZFRvYXN0IiwidWlkIiwib25Qcm9ncmVzcyIsInJlIiwid2luZG93IiwiY29uZmlybSIsImZldGNoIiwic291cmNlIiwidGhlbiIsInIiLCJibG9iIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInBvc3QiLCJvblVwbG9hZFByb2dyZXNzIiwidG90YWwiLCJsb2FkZWQiLCJNYXRoIiwicm91bmQiLCJvbkRvd25sb2FkUHJvZ3Jlc3MiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZGF0YSIsImxpbmsiLCJhcHBlYXJhbmNlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0VXBsb2FkVG9JbWd1ckFuZE9wZW4iLCJjdXN0b21SZXF1ZXN0IiwiZmlsZSIsInNlbmQiLCJhY3Rpb24iLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwicmVzaXplX3V0aWwiLCJSZXNpemVVdGlsIiwiY29tcHJlc3MiLCJyZXNwb25zZVR5cGUiLCJ1cmwiLCJVUkwiLCJ3ZWJraXRVUkwiLCJCbG9iIiwidHlwZSIsIm9ialVybCIsImNyZWF0ZU9iamVjdFVSTCIsInN0YXR1cyIsInJlcXVlc3QiLCJhYm9ydCIsImNhbmNlbCIsIlJVR1dpdGhUb2FzdHMiLCJ1c2VUb2FzdHMiLCJjdXJyZW50SW1hZ2UiLCJpbWFnZXMiLCJJbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1NBRWVBLG9COzs7OzsyTUFBZixpQkFBb0NDLEtBQXBDLEVBQTJDQyxRQUEzQyxFQUFxREMsR0FBckQsRUFBMERDLFVBQTFEO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJSCxpQkFBSyxDQUFDSSxF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QSxRQURnQjs7QUFHeEIsU0FBTyxNQUFDLDJEQUFEO0FBQ0gsVUFBTSxFQUFDLHNCQURKLENBQzJCO0FBRDNCO0FBRUgsaUJBQWEsRUFBRWlDLGFBQWEsQ0FBQ2pDLFFBQUQsQ0FGekI7QUFHSCxtQkFBZSxFQUFFLHlCQUFDd0QsWUFBRCxFQUFlQyxNQUFmLEVBQTBCO0FBQ3ZDLGFBQU9yRCxNQUFNLENBQUNDLE9BQVAsQ0FBZSxrQ0FBZixDQUFQO0FBQ0gsS0FMRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFPRCxDQVZIOztHQUFNaUQsYTtVQUNtQkMsbUU7OztLQURuQkQsYTs7QUFZTixJQUFNSSxTQUFtQixHQUFHLFNBQXRCQSxTQUFzQjtBQUFBLFNBQ3hCLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0ZBREosRUFFSSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosQ0FEd0I7QUFBQSxDQUE1Qjs7TUFBTUEsUztBQVNTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gJ3JlYWN0LWNvbXBvc2l0ZSc7XHJcbmltcG9ydCBSVUcsIHsgRHJhZ0FyZWEsIENhcmQgfSBmcm9tICdyZWFjdC11cGxvYWQtZ2FsbGVyeSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBUb2FzdFByb3ZpZGVyLCB1c2VUb2FzdHMgfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQgeyBSZXNpemVVdGlsIH0gZnJvbSAnLi4vcmVzaXplX3V0aWwvcmVzaXplX3V0aWwnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBsb2FkVG9JbWd1ckFuZE9wZW4oaW1hZ2UsIGFkZFRvYXN0LCB1aWQsIG9uUHJvZ3Jlc3MpIHtcclxuICAgIGltYWdlLnJlXHJcblxyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSgnU2hhcmUgb24gaW1ndXI/JykpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBibG9iID0gYXdhaXQgZmV0Y2goaW1hZ2Uuc291cmNlKS50aGVuKHIgPT4gci5ibG9iKCkpOyAgICAgICAgICAgICAgXHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgLy8gc2VuZCBmaWxlXHJcbiAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBibG9iKVxyXG4gICAgZm9ybS5hcHBlbmQoJ3RpdGxlJywgXCIj44GS44O844G/44KT44GQaG9nZeOBmOOBh+OBreOCjOODvOOBn1wiKVxyXG4gICAgZm9ybS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgXCIj44GS44O844G/44KT44GQaG9nZeOBmOOBh+OBreOCjOODvOOBn1wiKVxyXG5cclxuICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cclxuICAgIGNvbnN0IHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpXHJcblxyXG4gICAgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLmltZ3VyLmNvbS8zL2ltYWdlXCIsXHJcbiAgICAgICAgZm9ybSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6ICh7IHRvdGFsLCBsb2FkZWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQobG9hZGVkIC8gdG90YWwgKiA1MCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6ICh7IHRvdGFsLCBsb2FkZWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQoNTAgKyBsb2FkZWQgLyB0b3RhbCAqIDUwKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW4sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0NsaWVudC1JRCA0NDA5NTg4ZjEwNzc2ZjcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICkudGhlbigoeyBkYXRhOiByZXNwb25zZSB9KSA9PiB7XHJcbiAgICAgICAgYWRkVG9hc3QoPGEgaHJlZj17cmVzcG9uc2UuZGF0YS5saW5rfT5TaGFyZSBzdWNjZXNzISBDbGljayBoZXJlIHRvIG9wZW4hPC9hPiwgeyBhcHBlYXJhbmNlOiAnc3VjY2VzcycgfSlcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBhZGRUb2FzdChlcnJvci5tZXNzYWdlLCB7IGFwcGVhcmFuY2U6ICdlcnJvcicgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdCwgdWlkLCBvblByb2dyZXNzKSB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdCwgdWlkLCBvblByb2dyZXNzKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjdXN0b21SZXF1ZXN0KGFkZFRvYXN0KSB7XHJcbiAgICByZXR1cm4gKHsgdWlkLCBmaWxlLCBzZW5kLCBhY3Rpb24sIGhlYWRlcnMsIG9uUHJvZ3Jlc3MsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlblxyXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpXHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzaXplX3V0aWwgPSBuZXcgUmVzaXplVXRpbCgpXHJcbiAgICAgICAgcmVzaXplX3V0aWwuY29tcHJlc3MoZmlsZSwgNTAwLCAoZmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBzZW5kIGZpbGUgXHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdpbWFnZScsIGZpbGUpXHJcblxyXG4gICAgICAgICAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgZm9ybSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQobG9hZGVkIC8gdG90YWwgKiA1MCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25Eb3dubG9hZFByb2dyZXNzOiAoeyB0b3RhbCwgbG9hZGVkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh1aWQsIE1hdGgucm91bmQoNTAgKyBsb2FkZWQgLyB0b3RhbCAqIDUwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS50aGVuKCh7IGRhdGE6IHJlc3BvbnNlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzcG9uc2VdLCB7IHR5cGU6ICdpbWFnZS9naWYnIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmpVcmwgPSB1cmwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17Z2V0VXBsb2FkVG9JbWd1ckFuZE9wZW4oeyBzb3VyY2U6IG9ialVybCB9LCBhZGRUb2FzdCwgdWlkLCBvblByb2dyZXNzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWluZ2lmeSBzdWNjZXNzISBDbGljayBoZXJlIHRvIHNoYXJlIVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT4sIHsgYXBwZWFyYW5jZTogJ3N1Y2Nlc3MnIH0pXHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3ModWlkLCB7IHNvdXJjZTogb2JqVXJsIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoZXJyb3IubWVzc2FnZSwgeyBhcHBlYXJhbmNlOiAnZXJyb3InIH0pXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yKHVpZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGVycm9yLnJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IGVycm9yLnJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFib3J0KCkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlLmNhbmNlbCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFJVR1dpdGhUb2FzdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKVxyXG4gIFxyXG4gICAgcmV0dXJuIDxSVUdcclxuICAgICAgICBhY3Rpb249XCIvc2VydmVyL3NlZ21lbnRhdGlvblwiIC8vIHVwbG9hZCByb3V0ZVxyXG4gICAgICAgIGN1c3RvbVJlcXVlc3Q9e2N1c3RvbVJlcXVlc3QoYWRkVG9hc3QpfVxyXG4gICAgICAgIG9uQ29uZmlybURlbGV0ZT17KGN1cnJlbnRJbWFnZSwgaW1hZ2VzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nKVxyXG4gICAgICAgIH19PlxyXG4gICAgPC9SVUc+XHJcbiAgfVxyXG5cclxuY29uc3QgSW5kZXhQYWdlOiBOZXh0UGFnZSA9ICgpID0+IChcclxuICAgIDxUb2FzdFByb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb3NpdGU+XHJcbiAgICAgICAgICAgIDxoMT7jgZLjg7zjgb/jgpPjgZAgaG9nZSDjgZjjgYfjga3jgozjg7zjgZ88L2gxPlxyXG4gICAgICAgICAgICA8UlVHV2l0aFRvYXN0cyAvPlxyXG4gICAgICAgIDwvQ29tcG9zaXRlPlxyXG4gICAgPC9Ub2FzdFByb3ZpZGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
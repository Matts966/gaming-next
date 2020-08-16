webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composite */ \"./node_modules/react-composite/index.js\");\n/* harmony import */ var react_composite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_composite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-upload-gallery */ \"./node_modules/react-upload-gallery/dist/index.js\");\n/* harmony import */ var react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/masahiromatsui/gaming-hoge-generator/client/pages/index.tsx\",\n    _s3 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction customRequest(addToast) {\n  var _s = $RefreshSig$(),\n      _s2 = $RefreshSig$();\n\n  var form = new FormData(); // send file \n\n  form.append('image', file);\n  var CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n  var source = CancelToken.source();\n  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(action, form, {\n    onUploadProgress: function onUploadProgress(_ref) {\n      var total = _ref.total,\n          loaded = _ref.loaded;\n      onProgress(uid, Math.round(loaded / total * 50));\n    },\n    onDownloadProgress: function onDownloadProgress(_ref2) {\n      var total = _ref2.total,\n          loaded = _ref2.loaded;\n      onProgress(uid, Math.round(50 + loaded / total * 50));\n    },\n    cancelToken: source.token,\n    responseType: 'arraybuffer'\n  }).then(_s(function (_ref3) {\n    _s();\n\n    var response = _ref3.data;\n    var url = window.URL || window.webkitURL;\n    var blob = new Blob([response], {\n      type: 'image/gif'\n    });\n    var objUrl = url.createObjectURL(blob);\n\n    var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"])(),\n        addToast = _useToasts.addToast;\n\n    addToast(\"Gamingify success! Click image to share!\", {\n      appearance: 'success'\n    });\n    onSuccess(uid, {\n      source: objUrl\n    });\n  }, \"U6FMp6hByBBuG5GNVFUFStpOnow=\", false, function () {\n    return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"]];\n  }))[\"catch\"](_s2(function (error) {\n    _s2();\n\n    var _useToasts2 = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"])(),\n        addToast = _useToasts2.addToast;\n\n    addToast(error.message, {\n      appearance: 'error'\n    });\n    onError(uid, {\n      action: action,\n      status: error.request,\n      response: error.response\n    });\n  }, \"U6FMp6hByBBuG5GNVFUFStpOnow=\", false, function () {\n    return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"]];\n  }));\n  return {\n    abort: function abort() {\n      source.cancel();\n    }\n  };\n}\n\nfunction uploadToImgurAndOpen(_x, _x2) {\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nfunction _uploadToImgurAndOpen() {\n  _uploadToImgurAndOpen = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(image, addToast) {\n    var blob, form, CancelToken, source;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (window.confirm('Share on imgur?')) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.next = 4;\n            return fetch(image.source).then(function (r) {\n              return r.blob();\n            });\n\n          case 4:\n            blob = _context.sent;\n            form = new FormData(); // send file\n\n            form.append('image', blob);\n            form.append('description', \"#げーみんぐhogeじぇねれーた\");\n            CancelToken = axios__WEBPACK_IMPORTED_MODULE_5___default.a.CancelToken;\n            source = CancelToken.source();\n            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://api.imgur.com/3/image\", form, {\n              cancelToken: source.token,\n              headers: {\n                'Authorization': 'Client-ID 4409588f10776f7'\n              }\n            }).then(function (_ref4) {\n              var response = _ref4.data;\n              var win = window.open(response.data.link, '_blank');\n              win.focus();\n            })[\"catch\"](function (error) {\n              addToast(error.message, {\n                appearance: 'error'\n              });\n            });\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadToImgurAndOpen.apply(this, arguments);\n}\n\nvar RUGWithToasts = function RUGWithToasts() {\n  _s3();\n\n  var _useToasts3 = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"])(),\n      addToast = _useToasts3.addToast;\n\n  return __jsx(react_upload_gallery__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    action: \"/server/segmentation\" // upload route\n    ,\n    customRequest: customRequest,\n    onConfirmDelete: function onConfirmDelete(currentImage, images) {\n      return window.confirm('Are you sure you want to delete?');\n    },\n    onClick: function onClick(image) {\n      uploadToImgurAndOpen(image, addToast);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 12\n    }\n  });\n};\n\n_s3(RUGWithToasts, \"U6FMp6hByBBuG5GNVFUFStpOnow=\", false, function () {\n  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"useToasts\"]];\n});\n\n_c = RUGWithToasts;\n\nvar IndexPage = function IndexPage() {\n  return __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__[\"ToastProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 5\n    }\n  }, __jsx(react_composite__WEBPACK_IMPORTED_MODULE_3__[\"Composite\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, \"\\u3052\\u30FC\\u307F\\u3093\\u3050 hoge \\u3058\\u3047\\u306D\\u308C\\u30FC\\u305F\")));\n};\n\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RUGWithToasts\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiY3VzdG9tUmVxdWVzdCIsImFkZFRvYXN0IiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmlsZSIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJzb3VyY2UiLCJwb3N0IiwiYWN0aW9uIiwib25VcGxvYWRQcm9ncmVzcyIsInRvdGFsIiwibG9hZGVkIiwib25Qcm9ncmVzcyIsInVpZCIsIk1hdGgiLCJyb3VuZCIsIm9uRG93bmxvYWRQcm9ncmVzcyIsImNhbmNlbFRva2VuIiwidG9rZW4iLCJyZXNwb25zZVR5cGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwidXJsIiwid2luZG93IiwiVVJMIiwid2Via2l0VVJMIiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwib2JqVXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwidXNlVG9hc3RzIiwiYXBwZWFyYW5jZSIsIm9uU3VjY2VzcyIsImVycm9yIiwibWVzc2FnZSIsIm9uRXJyb3IiLCJzdGF0dXMiLCJyZXF1ZXN0IiwiYWJvcnQiLCJjYW5jZWwiLCJ1cGxvYWRUb0ltZ3VyQW5kT3BlbiIsImltYWdlIiwiY29uZmlybSIsImZldGNoIiwiciIsImhlYWRlcnMiLCJ3aW4iLCJvcGVuIiwibGluayIsImZvY3VzIiwiUlVHV2l0aFRvYXN0cyIsImN1cnJlbnRJbWFnZSIsImltYWdlcyIsIkluZGV4UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxRQUF2QixFQUFtQztBQUFBO0FBQUE7O0FBQy9CLE1BQU1DLElBQUksR0FBRyxJQUFJQyxRQUFKLEVBQWIsQ0FEK0IsQ0FHL0I7O0FBQ0FELE1BQUksQ0FBQ0UsTUFBTCxDQUFZLE9BQVosRUFBcUJDLElBQXJCO0FBRUEsTUFBTUMsV0FBVyxHQUFHQyw0Q0FBSyxDQUFDRCxXQUExQjtB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QUFvQixDQUFDQyxLQUFELEVBQVE1QyxRQUFSLENBQXBCO0FBQ0gsS0FSRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFVRCxDQWJIOztJQUFNcUQsYTtVQUNtQnBCLG1FOzs7S0FEbkJvQixhOztBQWVOLElBQU1HLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCO0FBQUEsU0FDeEIsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnRkFESixDQURKLENBRHdCO0FBQUEsQ0FBNUI7O01BQU1BLFM7QUFTU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tICdyZWFjdC1jb21wb3NpdGUnO1xyXG5pbXBvcnQgUlVHLCB7IERyYWdBcmVhLCBDYXJkIH0gZnJvbSAncmVhY3QtdXBsb2FkLWdhbGxlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgVG9hc3RQcm92aWRlciwgdXNlVG9hc3RzIH0gZnJvbSAncmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucydcclxuXHJcbmZ1bmN0aW9uIGN1c3RvbVJlcXVlc3QoYWRkVG9hc3QsICkge1xyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIC8vIHNlbmQgZmlsZSBcclxuICAgIGZvcm0uYXBwZW5kKCdpbWFnZScsIGZpbGUpXHJcblxyXG4gICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlblxyXG4gICAgY29uc3Qgc291cmNlID0gQ2FuY2VsVG9rZW4uc291cmNlKClcclxuXHJcbiAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgIGFjdGlvbixcclxuICAgICAgICBmb3JtLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKHsgdG90YWwsIGxvYWRlZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzKHVpZCwgTWF0aC5yb3VuZChsb2FkZWQgLyB0b3RhbCAqIDUwKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRG93bmxvYWRQcm9ncmVzczogKHsgdG90YWwsIGxvYWRlZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzKHVpZCwgTWF0aC5yb3VuZCg1MCArIGxvYWRlZCAvIHRvdGFsICogNTApKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsVG9rZW46IHNvdXJjZS50b2tlbixcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxyXG4gICAgICAgIH1cclxuICAgICkudGhlbigoeyBkYXRhOiByZXNwb25zZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xyXG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzcG9uc2VdLCB7IHR5cGU6ICdpbWFnZS9naWYnIH0pXHJcbiAgICAgICAgY29uc3Qgb2JqVXJsID0gdXJsLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKVxyXG4gICAgICAgIGFkZFRvYXN0KFwiR2FtaW5naWZ5IHN1Y2Nlc3MhIENsaWNrIGltYWdlIHRvIHNoYXJlIVwiLCB7IGFwcGVhcmFuY2U6ICdzdWNjZXNzJyB9KVxyXG4gICAgICAgIG9uU3VjY2Vzcyh1aWQsIHsgc291cmNlOiBvYmpVcmwgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKVxyXG4gICAgICAgIGFkZFRvYXN0KGVycm9yLm1lc3NhZ2UsIHsgYXBwZWFyYW5jZTogJ2Vycm9yJyB9KVxyXG4gICAgICAgIG9uRXJyb3IodWlkLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgc3RhdHVzOiBlcnJvci5yZXF1ZXN0LFxyXG4gICAgICAgICAgICByZXNwb25zZTogZXJyb3IucmVzcG9uc2VcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFib3J0KCkge1xyXG4gICAgICAgICAgICBzb3VyY2UuY2FuY2VsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdCkge1xyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSgnU2hhcmUgb24gaW1ndXI/JykpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBibG9iID0gYXdhaXQgZmV0Y2goaW1hZ2Uuc291cmNlKS50aGVuKHIgPT4gci5ibG9iKCkpOyAgICAgICAgICAgICAgXHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgLy8gc2VuZCBmaWxlXHJcbiAgICBmb3JtLmFwcGVuZCgnaW1hZ2UnLCBibG9iKVxyXG4gICAgZm9ybS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgXCIj44GS44O844G/44KT44GQaG9nZeOBmOOBh+OBreOCjOODvOOBn1wiKVxyXG5cclxuICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cclxuICAgIGNvbnN0IHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpXHJcblxyXG4gICAgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLmltZ3VyLmNvbS8zL2ltYWdlXCIsXHJcbiAgICAgICAgZm9ybSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW4sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0NsaWVudC1JRCA0NDA5NTg4ZjEwNzc2ZjcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICkudGhlbigoeyBkYXRhOiByZXNwb25zZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2luID0gd2luZG93Lm9wZW4ocmVzcG9uc2UuZGF0YS5saW5rLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgd2luLmZvY3VzKCk7XHJcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgYWRkVG9hc3QoZXJyb3IubWVzc2FnZSwgeyBhcHBlYXJhbmNlOiAnZXJyb3InIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBSVUdXaXRoVG9hc3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKClcclxuICBcclxuICAgIHJldHVybiA8UlVHXHJcbiAgICAgICAgYWN0aW9uPVwiL3NlcnZlci9zZWdtZW50YXRpb25cIiAvLyB1cGxvYWQgcm91dGVcclxuICAgICAgICBjdXN0b21SZXF1ZXN0PXtjdXN0b21SZXF1ZXN0fVxyXG4gICAgICAgIG9uQ29uZmlybURlbGV0ZT17KGN1cnJlbnRJbWFnZSwgaW1hZ2VzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbGljaz17KGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHVwbG9hZFRvSW1ndXJBbmRPcGVuKGltYWdlLCBhZGRUb2FzdClcclxuICAgICAgICB9fT5cclxuICAgIDwvUlVHPlxyXG4gIH1cclxuXHJcbmNvbnN0IEluZGV4UGFnZTogTmV4dFBhZ2UgPSAoKSA9PiAoXHJcbiAgICA8VG9hc3RQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9zaXRlPlxyXG4gICAgICAgICAgICA8aDE+44GS44O844G/44KT44GQIGhvZ2Ug44GY44GH44Gt44KM44O844GfPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9Db21wb3NpdGU+XHJcbiAgICA8L1RvYXN0UHJvdmlkZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
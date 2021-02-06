webpackHotUpdate_N_E("pages/index",{

/***/ "./components/GoogleSheetsAuth/GoogleSheetsAuth.tsx":
/*!**********************************************************!*\
  !*** ./components/GoogleSheetsAuth/GoogleSheetsAuth.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Development_FSD_scrum_team_4_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var _jsxFileName = "E:\\Development\\FSD\\scrum-team-4\\components\\GoogleSheetsAuth\\GoogleSheetsAuth.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var GoogleSheetsAuth = function GoogleSheetsAuth() {
  _s();

  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  var userInfoURL = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      token = _useState[0],
      setToken = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      fullName = _useState2[0],
      setFullName = _useState2[1];

  var parseHash = function parseHash(hash) {
    var hashParsed = hash.split('&').reduce(function (acc, item) {
      var _item$split = item.split('='),
          _item$split2 = Object(E_Development_FSD_scrum_team_4_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_item$split, 2),
          key = _item$split2[0],
          value = _item$split2[1];

      acc[key] = value;
      return acc;
    }, {});
    return hashParsed;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var hash = window.location.hash.substring(1);
    var accessToken = parseHash(hash).access_token;

    if (accessToken !== token) {
      setToken(accessToken);
      fetch(userInfoURL + accessToken).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(accessToken);
        setFullName(data.name);
      })["catch"](function () {
        return null;
      });
    }
  }); // redirect_uri: 'https://nirall.github.io/4thScrumTM/'

  var params = {
    client_id: '278391526312-6kbfkm4q08r53re4eu0fdms6jnmio6lu.apps.googleusercontent.com',
    redirect_uri: 'http://localhost:3000',
    scope: 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/userinfo.profile',
    state: 'authorization_google_sheets',
    response_type: 'token'
  };
  var authParamsFormatted = Object.keys(params).reduce(function (acc, param, index) {
    if (index === 0) {
      return "".concat(acc).concat(param, "=").concat(params[param]);
    }

    return "".concat(acc, "&").concat(param, "=").concat(params[param]);
  }, '?');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: oauth2Endpoint + authParamsFormatted,
      children: "click"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: fullName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      children: "Click"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(GoogleSheetsAuth, "oggjJFAIFFUuBFq//Wz0KWe6Hpk=");

_c = GoogleSheetsAuth;
/* harmony default export */ __webpack_exports__["default"] = (GoogleSheetsAuth);

var _c;

$RefreshReg$(_c, "GoogleSheetsAuth");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVTaGVldHNBdXRoL0dvb2dsZVNoZWV0c0F1dGgudHN4Il0sIm5hbWVzIjpbIkdvb2dsZVNoZWV0c0F1dGgiLCJvYXV0aDJFbmRwb2ludCIsInVzZXJJbmZvVVJMIiwidXNlU3RhdGUiLCJ0b2tlbiIsInNldFRva2VuIiwiZnVsbE5hbWUiLCJzZXRGdWxsTmFtZSIsInBhcnNlSGFzaCIsImhhc2giLCJoYXNoUGFyc2VkIiwic3BsaXQiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwia2V5IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwicGFyYW1zIiwiY2xpZW50X2lkIiwicmVkaXJlY3RfdXJpIiwic2NvcGUiLCJzdGF0ZSIsInJlc3BvbnNlX3R5cGUiLCJhdXRoUGFyYW1zRm9ybWF0dGVkIiwiT2JqZWN0Iiwia2V5cyIsInBhcmFtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUM3QixNQUFNQyxjQUFjLEdBQUcsOENBQXZCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLHNFQUFwQjs7QUFGNkIsa0JBSUhDLHNEQUFRLENBQUMsRUFBRCxDQUpMO0FBQUEsTUFJdEJDLEtBSnNCO0FBQUEsTUFJZkMsUUFKZTs7QUFBQSxtQkFLR0Ysc0RBQVEsQ0FBQyxFQUFELENBTFg7QUFBQSxNQUt0QkcsUUFMc0I7QUFBQSxNQUtaQyxXQUxZOztBQU83QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQWtCO0FBQ2xDLFFBQU1DLFVBQVUsR0FBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVcsR0FBWCxFQUFnQkMsTUFBaEIsQ0FBdUIsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFBQSx3QkFDbENBLElBQUksQ0FBQ0gsS0FBTCxDQUFXLEdBQVgsQ0FEa0M7QUFBQTtBQUFBLFVBQ2hESSxHQURnRDtBQUFBLFVBQzNDQyxLQUQyQzs7QUFFdkRILFNBQUcsQ0FBQ0UsR0FBRCxDQUFILEdBQVdDLEtBQVg7QUFDQSxhQUFPSCxHQUFQO0FBQ0QsS0FKa0IsRUFJaEIsRUFKZ0IsQ0FBbkI7QUFNQSxXQUFPSCxVQUFQO0FBQ0QsR0FSRDs7QUFVQU8seURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTVIsSUFBSSxHQUFHUyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JWLElBQWhCLENBQXFCVyxTQUFyQixDQUErQixDQUEvQixDQUFiO0FBQ0EsUUFBTUMsV0FBVyxHQUFHYixTQUFTLENBQUNDLElBQUQsQ0FBVCxDQUFnQmEsWUFBcEM7O0FBQ0EsUUFBSUQsV0FBVyxLQUFLakIsS0FBcEIsRUFBMkI7QUFDekJDLGNBQVEsQ0FBQ2dCLFdBQUQsQ0FBUjtBQUNBRSxXQUFLLENBQUNyQixXQUFXLEdBQUdtQixXQUFmLENBQUwsQ0FDR0csSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxlQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLE9BRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQsRUFBVTtBQUNkQyxlQUFPLENBQUNDLEdBQVIsQ0FBWVIsV0FBWjtBQUNBZCxtQkFBVyxDQUFDb0IsSUFBSSxDQUFDRyxJQUFOLENBQVg7QUFDRCxPQUxILFdBTVM7QUFBQSxlQUFNLElBQU47QUFBQSxPQU5UO0FBT0Q7QUFDRixHQWJRLENBQVQsQ0FqQjZCLENBZ0M3Qjs7QUFDQSxNQUFNQyxNQUFvQixHQUFHO0FBQzNCQyxhQUFTLEVBQUUsMEVBRGdCO0FBRTNCQyxnQkFBWSxFQUFFLHVCQUZhO0FBRzNCQyxTQUFLLEVBQUUsK0ZBSG9CO0FBSTNCQyxTQUFLLEVBQUUsNkJBSm9CO0FBSzNCQyxpQkFBYSxFQUFFO0FBTFksR0FBN0I7QUFRQSxNQUFNQyxtQkFBbUIsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlSLE1BQVosRUFBb0JuQixNQUFwQixDQUEyQixVQUFDQyxHQUFELEVBQU0yQixLQUFOLEVBQWFDLEtBQWIsRUFBdUI7QUFDNUUsUUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZix1QkFBVTVCLEdBQVYsU0FBZ0IyQixLQUFoQixjQUF5QlQsTUFBTSxDQUFDUyxLQUFELENBQS9CO0FBQ0Q7O0FBRUQscUJBQVUzQixHQUFWLGNBQWlCMkIsS0FBakIsY0FBMEJULE1BQU0sQ0FBQ1MsS0FBRCxDQUFoQztBQUNELEdBTjJCLEVBTXpCLEdBTnlCLENBQTVCO0FBUUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFHLFVBQUksRUFBRXZDLGNBQWMsR0FBR29DLG1CQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBSWpDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBQSxnQkFBSUU7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQU9BLENBeERGOztHQUFNTixnQjs7S0FBQUEsZ0I7QUEwRFNBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRiZWVkZmYyNDJmMjBhNzM5YzI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCB0eXBlIE9iamVjdFN0cmluZyA9IHtcclxuICBbaW5kZXg6IHN0cmluZ106IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgR29vZ2xlU2hlZXRzQXV0aCA9ICgpID0+IHtcclxuICBjb25zdCBvYXV0aDJFbmRwb2ludCA9ICdodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aCc7XHJcbiAgY29uc3QgdXNlckluZm9VUkwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL3VzZXJpbmZvP2FsdD1qc29uJmFjY2Vzc190b2tlbj0nO1xyXG5cclxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZnVsbE5hbWUsIHNldEZ1bGxOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgcGFyc2VIYXNoID0gKGhhc2g6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgaGFzaFBhcnNlZCA9IGhhc2guc3BsaXQoJyYnKS5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBpdGVtLnNwbGl0KCc9Jyk7XHJcbiAgICAgIGFjY1trZXldID0gdmFsdWU7XHJcbiAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSBhcyBPYmplY3RTdHJpbmcpO1xyXG5cclxuICAgIHJldHVybiBoYXNoUGFyc2VkO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHBhcnNlSGFzaChoYXNoKS5hY2Nlc3NfdG9rZW47XHJcbiAgICBpZiAoYWNjZXNzVG9rZW4gIT09IHRva2VuKSB7XHJcbiAgICAgIHNldFRva2VuKGFjY2Vzc1Rva2VuKTtcclxuICAgICAgZmV0Y2godXNlckluZm9VUkwgKyBhY2Nlc3NUb2tlbilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgICAgc2V0RnVsbE5hbWUoZGF0YS5uYW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiBudWxsKTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyByZWRpcmVjdF91cmk6ICdodHRwczovL25pcmFsbC5naXRodWIuaW8vNHRoU2NydW1UTS8nXHJcbiAgY29uc3QgcGFyYW1zOiBPYmplY3RTdHJpbmcgPSB7XHJcbiAgICBjbGllbnRfaWQ6ICcyNzgzOTE1MjYzMTItNmtiZmttNHEwOHI1M3JlNGV1MGZkbXM2am5taW82bHUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxyXG4gICAgcmVkaXJlY3RfdXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgIHNjb3BlOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHMgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5wcm9maWxlJyxcclxuICAgIHN0YXRlOiAnYXV0aG9yaXphdGlvbl9nb29nbGVfc2hlZXRzJyxcclxuICAgIHJlc3BvbnNlX3R5cGU6ICd0b2tlbidcclxuICB9XHJcblxyXG4gIGNvbnN0IGF1dGhQYXJhbXNGb3JtYXR0ZWQgPSBPYmplY3Qua2V5cyhwYXJhbXMpLnJlZHVjZSgoYWNjLCBwYXJhbSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gYCR7YWNjfSR7cGFyYW19PSR7cGFyYW1zW3BhcmFtXX1gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke2FjY30mJHtwYXJhbX09JHtwYXJhbXNbcGFyYW1dfWBcclxuICB9LCAnPycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGEgaHJlZj17b2F1dGgyRW5kcG9pbnQgKyBhdXRoUGFyYW1zRm9ybWF0dGVkfT5jbGljazwvYT5cclxuICAgICAgPHA+e3Rva2VufTwvcD5cclxuICAgICAgPHA+e2Z1bGxOYW1lfTwvcD5cclxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPkNsaWNrPC9idXR0b24+XHJcbiAgICA8Lz5cclxuKX07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29nbGVTaGVldHNBdXRoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
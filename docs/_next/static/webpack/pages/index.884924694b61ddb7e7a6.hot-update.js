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

    if (accessToken) {
      console.log(accessToken);
      setToken(accessToken);
      fetch(userInfoURL + accessToken).then(function (response) {
        return response.json();
      }).then(function (data) {
        setFullName(data.name);
      })["catch"](function () {
        return null;
      });
    }
  }, [fullName]); // redirect_uri: 'https://nirall.github.io/4thScrumTM/'

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVTaGVldHNBdXRoL0dvb2dsZVNoZWV0c0F1dGgudHN4Il0sIm5hbWVzIjpbIkdvb2dsZVNoZWV0c0F1dGgiLCJvYXV0aDJFbmRwb2ludCIsInVzZXJJbmZvVVJMIiwidXNlU3RhdGUiLCJ0b2tlbiIsInNldFRva2VuIiwiZnVsbE5hbWUiLCJzZXRGdWxsTmFtZSIsInBhcnNlSGFzaCIsImhhc2giLCJoYXNoUGFyc2VkIiwic3BsaXQiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwia2V5IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJuYW1lIiwicGFyYW1zIiwiY2xpZW50X2lkIiwicmVkaXJlY3RfdXJpIiwic2NvcGUiLCJzdGF0ZSIsInJlc3BvbnNlX3R5cGUiLCJhdXRoUGFyYW1zRm9ybWF0dGVkIiwiT2JqZWN0Iiwia2V5cyIsInBhcmFtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUM3QixNQUFNQyxjQUFjLEdBQUcsOENBQXZCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLHNFQUFwQjs7QUFGNkIsa0JBSUhDLHNEQUFRLENBQUMsRUFBRCxDQUpMO0FBQUEsTUFJdEJDLEtBSnNCO0FBQUEsTUFJZkMsUUFKZTs7QUFBQSxtQkFLR0Ysc0RBQVEsQ0FBQyxFQUFELENBTFg7QUFBQSxNQUt0QkcsUUFMc0I7QUFBQSxNQUtaQyxXQUxZOztBQU83QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQWtCO0FBQ2xDLFFBQU1DLFVBQVUsR0FBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVcsR0FBWCxFQUFnQkMsTUFBaEIsQ0FBdUIsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFBQSx3QkFDbENBLElBQUksQ0FBQ0gsS0FBTCxDQUFXLEdBQVgsQ0FEa0M7QUFBQTtBQUFBLFVBQ2hESSxHQURnRDtBQUFBLFVBQzNDQyxLQUQyQzs7QUFFdkRILFNBQUcsQ0FBQ0UsR0FBRCxDQUFILEdBQVdDLEtBQVg7QUFDQSxhQUFPSCxHQUFQO0FBQ0QsS0FKa0IsRUFJaEIsRUFKZ0IsQ0FBbkI7QUFNQSxXQUFPSCxVQUFQO0FBQ0QsR0FSRDs7QUFVQU8seURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTVIsSUFBSSxHQUFHUyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JWLElBQWhCLENBQXFCVyxTQUFyQixDQUErQixDQUEvQixDQUFiO0FBQ0EsUUFBTUMsV0FBVyxHQUFHYixTQUFTLENBQUNDLElBQUQsQ0FBVCxDQUFnQmEsWUFBcEM7O0FBQ0EsUUFBSUQsV0FBSixFQUFpQjtBQUNmRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsV0FBWjtBQUNBaEIsY0FBUSxDQUFDZ0IsV0FBRCxDQUFSO0FBQ0FJLFdBQUssQ0FBQ3ZCLFdBQVcsR0FBR21CLFdBQWYsQ0FBTCxDQUNHSyxJQURILENBQ1EsVUFBQ0MsUUFBRDtBQUFBLGVBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsT0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2R0QixtQkFBVyxDQUFDc0IsSUFBSSxDQUFDQyxJQUFOLENBQVg7QUFDRCxPQUpILFdBS1M7QUFBQSxlQUFNLElBQU47QUFBQSxPQUxUO0FBTUQ7QUFDRixHQWJRLEVBYU4sQ0FBQ3hCLFFBQUQsQ0FiTSxDQUFULENBakI2QixDQWdDN0I7O0FBQ0EsTUFBTXlCLE1BQW9CLEdBQUc7QUFDM0JDLGFBQVMsRUFBRSwwRUFEZ0I7QUFFM0JDLGdCQUFZLEVBQUUsdUJBRmE7QUFHM0JDLFNBQUssRUFBRSwrRkFIb0I7QUFJM0JDLFNBQUssRUFBRSw2QkFKb0I7QUFLM0JDLGlCQUFhLEVBQUU7QUFMWSxHQUE3QjtBQVFBLE1BQU1DLG1CQUFtQixHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVIsTUFBWixFQUFvQm5CLE1BQXBCLENBQTJCLFVBQUNDLEdBQUQsRUFBTTJCLEtBQU4sRUFBYUMsS0FBYixFQUF1QjtBQUM1RSxRQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLHVCQUFVNUIsR0FBVixTQUFnQjJCLEtBQWhCLGNBQXlCVCxNQUFNLENBQUNTLEtBQUQsQ0FBL0I7QUFDRDs7QUFFRCxxQkFBVTNCLEdBQVYsY0FBaUIyQixLQUFqQixjQUEwQlQsTUFBTSxDQUFDUyxLQUFELENBQWhDO0FBQ0QsR0FOMkIsRUFNekIsR0FOeUIsQ0FBNUI7QUFRQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUcsVUFBSSxFQUFFdkMsY0FBYyxHQUFHb0MsbUJBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGdCQUFJakM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFBLGdCQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBLGtCQURGO0FBT0EsQ0F4REY7O0dBQU1OLGdCOztLQUFBQSxnQjtBQTBEU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODg0OTI0Njk0YjYxZGRiN2U3YTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IHR5cGUgT2JqZWN0U3RyaW5nID0ge1xyXG4gIFtpbmRleDogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBHb29nbGVTaGVldHNBdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IG9hdXRoMkVuZHBvaW50ID0gJ2h0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi92Mi9hdXRoJztcclxuICBjb25zdCB1c2VySW5mb1VSTCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvdXNlcmluZm8/YWx0PWpzb24mYWNjZXNzX3Rva2VuPSc7XHJcblxyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmdWxsTmFtZSwgc2V0RnVsbE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBwYXJzZUhhc2ggPSAoaGFzaDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBoYXNoUGFyc2VkID0gaGFzaC5zcGxpdCgnJicpLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGl0ZW0uc3BsaXQoJz0nKTtcclxuICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9IGFzIE9iamVjdFN0cmluZyk7XHJcblxyXG4gICAgcmV0dXJuIGhhc2hQYXJzZWQ7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcGFyc2VIYXNoKGhhc2gpLmFjY2Vzc190b2tlbjtcclxuICAgIGlmIChhY2Nlc3NUb2tlbikge1xyXG4gICAgICBjb25zb2xlLmxvZyhhY2Nlc3NUb2tlbik7XHJcbiAgICAgIHNldFRva2VuKGFjY2Vzc1Rva2VuKTtcclxuICAgICAgZmV0Y2godXNlckluZm9VUkwgKyBhY2Nlc3NUb2tlbilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0RnVsbE5hbWUoZGF0YS5uYW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiBudWxsKTtcclxuICAgIH1cclxuICB9LCBbZnVsbE5hbWVdKVxyXG5cclxuICAvLyByZWRpcmVjdF91cmk6ICdodHRwczovL25pcmFsbC5naXRodWIuaW8vNHRoU2NydW1UTS8nXHJcbiAgY29uc3QgcGFyYW1zOiBPYmplY3RTdHJpbmcgPSB7XHJcbiAgICBjbGllbnRfaWQ6ICcyNzgzOTE1MjYzMTItNmtiZmttNHEwOHI1M3JlNGV1MGZkbXM2am5taW82bHUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxyXG4gICAgcmVkaXJlY3RfdXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgIHNjb3BlOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHMgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5wcm9maWxlJyxcclxuICAgIHN0YXRlOiAnYXV0aG9yaXphdGlvbl9nb29nbGVfc2hlZXRzJyxcclxuICAgIHJlc3BvbnNlX3R5cGU6ICd0b2tlbidcclxuICB9XHJcblxyXG4gIGNvbnN0IGF1dGhQYXJhbXNGb3JtYXR0ZWQgPSBPYmplY3Qua2V5cyhwYXJhbXMpLnJlZHVjZSgoYWNjLCBwYXJhbSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gYCR7YWNjfSR7cGFyYW19PSR7cGFyYW1zW3BhcmFtXX1gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke2FjY30mJHtwYXJhbX09JHtwYXJhbXNbcGFyYW1dfWBcclxuICB9LCAnPycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGEgaHJlZj17b2F1dGgyRW5kcG9pbnQgKyBhdXRoUGFyYW1zRm9ybWF0dGVkfT5jbGljazwvYT5cclxuICAgICAgPHA+e3Rva2VufTwvcD5cclxuICAgICAgPHA+e2Z1bGxOYW1lfTwvcD5cclxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPkNsaWNrPC9idXR0b24+XHJcbiAgICA8Lz5cclxuKX07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29nbGVTaGVldHNBdXRoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
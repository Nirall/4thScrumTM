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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    firstName: '',
    lastName: ''
  }),
      fullName = _useState2[0],
      setFullName = _useState2[1];

  var parseHash = function parseHash(hash) {
    var resOAuth = hash.split('&').reduce(function (acc, item) {
      var _item$split = item.split('='),
          _item$split2 = Object(E_Development_FSD_scrum_team_4_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_item$split, 2),
          key = _item$split2[0],
          value = _item$split2[1];

      acc[key] = value;
      return acc;
    }, {});
    return resOAuth;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var hash = window.location.hash.substring(1);

    if (hash) {
      setToken(parseHash(hash).access_token);
      fetch(userInfoURL + token).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        return null;
      }).then(function (data) {
        setFullName({
          firstName: data.name,
          lastName: data.family_name
        });
      })["catch"](function (data) {
        return console.log(data);
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
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: fullName.firstName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: fullName.lastName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      children: "Click"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(GoogleSheetsAuth, "UtZGEqBvyA+EU8oyKVD9XXS2pVs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVTaGVldHNBdXRoL0dvb2dsZVNoZWV0c0F1dGgudHN4Il0sIm5hbWVzIjpbIkdvb2dsZVNoZWV0c0F1dGgiLCJvYXV0aDJFbmRwb2ludCIsInVzZXJJbmZvVVJMIiwidXNlU3RhdGUiLCJ0b2tlbiIsInNldFRva2VuIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJmdWxsTmFtZSIsInNldEZ1bGxOYW1lIiwicGFyc2VIYXNoIiwiaGFzaCIsInJlc09BdXRoIiwic3BsaXQiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwia2V5IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsImFjY2Vzc190b2tlbiIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZGF0YSIsIm5hbWUiLCJmYW1pbHlfbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbXMiLCJjbGllbnRfaWQiLCJyZWRpcmVjdF91cmkiLCJzY29wZSIsInN0YXRlIiwicmVzcG9uc2VfdHlwZSIsImF1dGhQYXJhbXNGb3JtYXR0ZWQiLCJPYmplY3QiLCJrZXlzIiwicGFyYW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBTUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLGNBQWMsR0FBRyw4Q0FBdkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsc0VBQXBCOztBQUY2QixrQkFJSEMsc0RBQVEsQ0FBQyxFQUFELENBSkw7QUFBQSxNQUl0QkMsS0FKc0I7QUFBQSxNQUlmQyxRQUplOztBQUFBLG1CQUtHRixzREFBUSxDQUFDO0FBQ3ZDRyxhQUFTLEVBQUUsRUFENEI7QUFFdkNDLFlBQVEsRUFBRTtBQUY2QixHQUFELENBTFg7QUFBQSxNQUt0QkMsUUFMc0I7QUFBQSxNQUtaQyxXQUxZOztB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ODIwMDI1MzVhNTNlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgdHlwZSBPYmplY3RTdHJpbmcgPSB7XHJcbiAgW2luZGV4OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEdvb2dsZVNoZWV0c0F1dGggPSAoKSA9PiB7XHJcbiAgY29uc3Qgb2F1dGgyRW5kcG9pbnQgPSAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGgnO1xyXG4gIGNvbnN0IHVzZXJJbmZvVVJMID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS91c2VyaW5mbz9hbHQ9anNvbiZhY2Nlc3NfdG9rZW49JztcclxuXHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgbGFzdE5hbWU6ICcnXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHBhcnNlSGFzaCA9IChoYXNoOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlc09BdXRoID0gaGFzaC5zcGxpdCgnJicpLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGl0ZW0uc3BsaXQoJz0nKTtcclxuICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9IGFzIE9iamVjdFN0cmluZyk7XHJcblxyXG4gICAgcmV0dXJuIHJlc09BdXRoO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XHJcbiAgICBpZiAoaGFzaCkge1xyXG4gICAgICBzZXRUb2tlbihwYXJzZUhhc2goaGFzaCkuYWNjZXNzX3Rva2VuKTtcclxuICAgICAgZmV0Y2godXNlckluZm9VUkwgKyB0b2tlbilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0RnVsbE5hbWUoe1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IGRhdGEuZmFtaWx5X25hbWUsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICB9KVxyXG5cclxuICAvLyByZWRpcmVjdF91cmk6ICdodHRwczovL25pcmFsbC5naXRodWIuaW8vNHRoU2NydW1UTS8nXHJcbiAgY29uc3QgcGFyYW1zOiBPYmplY3RTdHJpbmcgPSB7XHJcbiAgICBjbGllbnRfaWQ6ICcyNzgzOTE1MjYzMTItNmtiZmttNHEwOHI1M3JlNGV1MGZkbXM2am5taW82bHUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxyXG4gICAgcmVkaXJlY3RfdXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgIHNjb3BlOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHMgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5wcm9maWxlJyxcclxuICAgIHN0YXRlOiAnYXV0aG9yaXphdGlvbl9nb29nbGVfc2hlZXRzJyxcclxuICAgIHJlc3BvbnNlX3R5cGU6ICd0b2tlbidcclxuICB9XHJcblxyXG4gIGNvbnN0IGF1dGhQYXJhbXNGb3JtYXR0ZWQgPSBPYmplY3Qua2V5cyhwYXJhbXMpLnJlZHVjZSgoYWNjLCBwYXJhbSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gYCR7YWNjfSR7cGFyYW19PSR7cGFyYW1zW3BhcmFtXX1gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke2FjY30mJHtwYXJhbX09JHtwYXJhbXNbcGFyYW1dfWBcclxuICB9LCAnPycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGEgaHJlZj17b2F1dGgyRW5kcG9pbnQgKyBhdXRoUGFyYW1zRm9ybWF0dGVkfT5jbGljazwvYT5cclxuICAgICAgPHA+e3Rva2VufTwvcD5cclxuICAgICAgPHA+e2Z1bGxOYW1lLmZpcnN0TmFtZX08L3A+XHJcbiAgICAgIDxwPntmdWxsTmFtZS5sYXN0TmFtZX08L3A+XHJcbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5DbGljazwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbil9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlU2hlZXRzQXV0aDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
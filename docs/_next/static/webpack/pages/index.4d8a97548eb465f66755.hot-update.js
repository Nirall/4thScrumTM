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

    if (hash) {
      setToken(parseHash(hash).access_token);
      fetch(userInfoURL + token).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        return null;
      }).then(function (data) {
        setFullName(data.name);
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
      lineNumber: 61,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: fullName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      children: "Click"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVTaGVldHNBdXRoL0dvb2dsZVNoZWV0c0F1dGgudHN4Il0sIm5hbWVzIjpbIkdvb2dsZVNoZWV0c0F1dGgiLCJvYXV0aDJFbmRwb2ludCIsInVzZXJJbmZvVVJMIiwidXNlU3RhdGUiLCJ0b2tlbiIsInNldFRva2VuIiwiZnVsbE5hbWUiLCJzZXRGdWxsTmFtZSIsInBhcnNlSGFzaCIsImhhc2giLCJoYXNoUGFyc2VkIiwic3BsaXQiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwia2V5IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsImFjY2Vzc190b2tlbiIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZGF0YSIsIm5hbWUiLCJwYXJhbXMiLCJjbGllbnRfaWQiLCJyZWRpcmVjdF91cmkiLCJzY29wZSIsInN0YXRlIiwicmVzcG9uc2VfdHlwZSIsImF1dGhQYXJhbXNGb3JtYXR0ZWQiLCJPYmplY3QiLCJrZXlzIiwicGFyYW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBTUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLGNBQWMsR0FBRyw4Q0FBdkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsc0VBQXBCOztBQUY2QixrQkFJSEMsc0RBQVEsQ0FBQyxFQUFELENBSkw7QUFBQSxNQUl0QkMsS0FKc0I7QUFBQSxNQUlmQyxRQUplOztBQUFBLG1CQUtHRixzREFBUSxDQUFDLEVBQUQsQ0FMWDtBQUFBLE1BS3RCRyxRQUxzQjtBQUFBLE1BS1pDLFdBTFk7O0FBTzdCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBa0I7QUFDbEMsUUFBTUMsVUFBVSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxHQUFYLEVBQWdCQyxNQUFoQixDQUF1QixVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUFBLHdCQUNsQ0EsSUFBSSxDQUFDSCxLQUFMLENBQVcsR0FBWCxDQURrQztBQUFBO0FBQUEsVUFDaERJLEdBRGdEO0FBQUEsVUFDM0NDLEtBRDJDOztBQUV2REgsU0FBRyxDQUFDRSxHQUFELENBQUgsR0FBV0MsS0FBWDtBQUNBLGFBQU9ILEdBQVA7QUFDRCxLQUprQixFQUloQixFQUpnQixDQUFuQjtBQU1BLFdBQU9ILFVBQVA7QUFDRCxHQVJEOztBQVVBTyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNUixJQUFJLEdBQUdTLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlYsSUFBaEIsQ0FBcUJXLFNBQXJCLENBQStCLENBQS9CLENBQWI7O0FBQ0EsUUFBSVgsSUFBSixFQUFVO0FBQ1JKLGNBQVEsQ0FBQ0csU0FBUyxDQUFDQyxJQUFELENBQVQsQ0FBZ0JZLFlBQWpCLENBQVI7QUFDQUMsV0FBSyxDQUFDcEIsV0FBVyxHQUFHRSxLQUFmLENBQUwsQ0FDR21CLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsWUFBSUEsUUFBUSxDQUFDQyxFQUFiLEVBQWlCO0FBQ2YsaUJBQU9ELFFBQVEsQ0FBQ0UsSUFBVCxFQUFQO0FBQ0Q7O0FBRUQsZUFBTyxJQUFQO0FBQ0QsT0FQSCxFQVFHSCxJQVJILENBUVEsVUFBQ0ksSUFBRCxFQUFVO0FBQ2RwQixtQkFBVyxDQUFDb0IsSUFBSSxDQUFDQyxJQUFOLENBQVg7QUFDRCxPQVZIO0FBV0Q7QUFDRixHQWhCUSxDQUFULENBakI2QixDQW1DN0I7O0FBQ0EsTUFBTUMsTUFBb0IsR0FBRztBQUMzQkMsYUFBUyxFQUFFLDBFQURnQjtBQUUzQkMsZ0JBQVksRUFBRSx1QkFGYTtBQUczQkMsU0FBSyxFQUFFLCtGQUhvQjtBQUkzQkMsU0FBSyxFQUFFLDZCQUpvQjtBQUszQkMsaUJBQWEsRUFBRTtBQUxZLEdBQTdCO0FBUUEsTUFBTUMsbUJBQW1CLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUixNQUFaLEVBQW9CakIsTUFBcEIsQ0FBMkIsVUFBQ0MsR0FBRCxFQUFNeUIsS0FBTixFQUFhQyxLQUFiLEVBQXVCO0FBQzVFLFFBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2YsdUJBQVUxQixHQUFWLFNBQWdCeUIsS0FBaEIsY0FBeUJULE1BQU0sQ0FBQ1MsS0FBRCxDQUEvQjtBQUNEOztBQUVELHFCQUFVekIsR0FBVixjQUFpQnlCLEtBQWpCLGNBQTBCVCxNQUFNLENBQUNTLEtBQUQsQ0FBaEM7QUFDRCxHQU4yQixFQU16QixHQU55QixDQUE1QjtBQVFBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBRyxVQUFJLEVBQUVyQyxjQUFjLEdBQUdrQyxtQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsZ0JBQUkvQjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsZ0JBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFPQSxDQTNERjs7R0FBTU4sZ0I7O0tBQUFBLGdCO0FBNkRTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZDhhOTc1NDhlYjQ2NWY2Njc1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgdHlwZSBPYmplY3RTdHJpbmcgPSB7XHJcbiAgW2luZGV4OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEdvb2dsZVNoZWV0c0F1dGggPSAoKSA9PiB7XHJcbiAgY29uc3Qgb2F1dGgyRW5kcG9pbnQgPSAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGgnO1xyXG4gIGNvbnN0IHVzZXJJbmZvVVJMID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS91c2VyaW5mbz9hbHQ9anNvbiZhY2Nlc3NfdG9rZW49JztcclxuXHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHBhcnNlSGFzaCA9IChoYXNoOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGhhc2hQYXJzZWQgPSBoYXNoLnNwbGl0KCcmJykucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gaXRlbS5zcGxpdCgnPScpO1xyXG4gICAgICBhY2Nba2V5XSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30gYXMgT2JqZWN0U3RyaW5nKTtcclxuXHJcbiAgICByZXR1cm4gaGFzaFBhcnNlZDtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xyXG4gICAgaWYgKGhhc2gpIHtcclxuICAgICAgc2V0VG9rZW4ocGFyc2VIYXNoKGhhc2gpLmFjY2Vzc190b2tlbik7XHJcbiAgICAgIGZldGNoKHVzZXJJbmZvVVJMICsgdG9rZW4pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldEZ1bGxOYW1lKGRhdGEubmFtZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyByZWRpcmVjdF91cmk6ICdodHRwczovL25pcmFsbC5naXRodWIuaW8vNHRoU2NydW1UTS8nXHJcbiAgY29uc3QgcGFyYW1zOiBPYmplY3RTdHJpbmcgPSB7XHJcbiAgICBjbGllbnRfaWQ6ICcyNzgzOTE1MjYzMTItNmtiZmttNHEwOHI1M3JlNGV1MGZkbXM2am5taW82bHUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxyXG4gICAgcmVkaXJlY3RfdXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgIHNjb3BlOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHMgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5wcm9maWxlJyxcclxuICAgIHN0YXRlOiAnYXV0aG9yaXphdGlvbl9nb29nbGVfc2hlZXRzJyxcclxuICAgIHJlc3BvbnNlX3R5cGU6ICd0b2tlbidcclxuICB9XHJcblxyXG4gIGNvbnN0IGF1dGhQYXJhbXNGb3JtYXR0ZWQgPSBPYmplY3Qua2V5cyhwYXJhbXMpLnJlZHVjZSgoYWNjLCBwYXJhbSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gYCR7YWNjfSR7cGFyYW19PSR7cGFyYW1zW3BhcmFtXX1gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke2FjY30mJHtwYXJhbX09JHtwYXJhbXNbcGFyYW1dfWBcclxuICB9LCAnPycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGEgaHJlZj17b2F1dGgyRW5kcG9pbnQgKyBhdXRoUGFyYW1zRm9ybWF0dGVkfT5jbGljazwvYT5cclxuICAgICAgPHA+e3Rva2VufTwvcD5cclxuICAgICAgPHA+e2Z1bGxOYW1lfTwvcD5cclxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPkNsaWNrPC9idXR0b24+XHJcbiAgICA8Lz5cclxuKX07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29nbGVTaGVldHNBdXRoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
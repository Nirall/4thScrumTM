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
      fetch(userInfoURL + token).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        return null;
      }).then(function (data) {
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
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: fullName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      children: "Click"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVTaGVldHNBdXRoL0dvb2dsZVNoZWV0c0F1dGgudHN4Il0sIm5hbWVzIjpbIkdvb2dsZVNoZWV0c0F1dGgiLCJvYXV0aDJFbmRwb2ludCIsInVzZXJJbmZvVVJMIiwidXNlU3RhdGUiLCJ0b2tlbiIsInNldFRva2VuIiwiZnVsbE5hbWUiLCJzZXRGdWxsTmFtZSIsInBhcnNlSGFzaCIsImhhc2giLCJoYXNoUGFyc2VkIiwic3BsaXQiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwia2V5IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZGF0YSIsIm5hbWUiLCJwYXJhbXMiLCJjbGllbnRfaWQiLCJyZWRpcmVjdF91cmkiLCJzY29wZSIsInN0YXRlIiwicmVzcG9uc2VfdHlwZSIsImF1dGhQYXJhbXNGb3JtYXR0ZWQiLCJPYmplY3QiLCJrZXlzIiwicGFyYW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBTUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLGNBQWMsR0FBRyw4Q0FBdkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsc0VBQXBCOztBQUY2QixrQkFJSEMsc0RBQVEsQ0FBQyxFQUFELENBSkw7QUFBQSxNQUl0QkMsS0FKc0I7QUFBQSxNQUlmQyxRQUplOztBQUFBLG1CQUtHRixzREFBUSxDQUFDLEVBQUQsQ0FMWDtBQUFBLE1BS3RCRyxRQUxzQjtBQUFBLE1BS1pDLFdBTFk7O0FBTzdCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBa0I7QUFDbEMsUUFBTUMsVUFBVSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxHQUFYLEVBQWdCQyxNQUFoQixDQUF1QixVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUFBLHdCQUNsQ0EsSUFBSSxDQUFDSCxLQUFMLENBQVcsR0FBWCxDQURrQztBQUFBO0FBQUEsVUFDaERJLEdBRGdEO0FBQUEsVUFDM0NDLEtBRDJDOztBQUV2REgsU0FBRyxDQUFDRSxHQUFELENBQUgsR0FBV0MsS0FBWDtBQUNBLGFBQU9ILEdBQVA7QUFDRCxLQUprQixFQUloQixFQUpnQixDQUFuQjtBQU1BLFdBQU9ILFVBQVA7QUFDRCxHQVJEOztBQVVBTyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNUixJQUFJLEdBQUdTLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlYsSUFBaEIsQ0FBcUJXLFNBQXJCLENBQStCLENBQS9CLENBQWI7QUFDQSxRQUFNQyxXQUFXLEdBQUdiLFNBQVMsQ0FBQ0MsSUFBRCxDQUFULENBQWdCYSxZQUFwQzs7QUFDQSxRQUFJRCxXQUFKLEVBQWlCO0FBQ2ZFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxXQUFaO0FBQ0FoQixjQUFRLENBQUNnQixXQUFELENBQVI7QUFDQUksV0FBSyxDQUFDdkIsV0FBVyxHQUFHRSxLQUFmLENBQUwsQ0FDR3NCLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsWUFBSUEsUUFBUSxDQUFDQyxFQUFiLEVBQWlCO0FBQ2YsaUJBQU9ELFFBQVEsQ0FBQ0UsSUFBVCxFQUFQO0FBQ0Q7O0FBRUQsZUFBTyxJQUFQO0FBQ0QsT0FQSCxFQVFHSCxJQVJILENBUVEsVUFBQ0ksSUFBRCxFQUFVO0FBQ2R2QixtQkFBVyxDQUFDdUIsSUFBSSxDQUFDQyxJQUFOLENBQVg7QUFDRCxPQVZILFdBV1M7QUFBQSxlQUFNLElBQU47QUFBQSxPQVhUO0FBWUQ7QUFDRixHQW5CUSxDQUFULENBakI2QixDQXNDN0I7O0FBQ0EsTUFBTUMsTUFBb0IsR0FBRztBQUMzQkMsYUFBUyxFQUFFLDBFQURnQjtBQUUzQkMsZ0JBQVksRUFBRSx1QkFGYTtBQUczQkMsU0FBSyxFQUFFLCtGQUhvQjtBQUkzQkMsU0FBSyxFQUFFLDZCQUpvQjtBQUszQkMsaUJBQWEsRUFBRTtBQUxZLEdBQTdCO0FBUUEsTUFBTUMsbUJBQW1CLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUixNQUFaLEVBQW9CcEIsTUFBcEIsQ0FBMkIsVUFBQ0MsR0FBRCxFQUFNNEIsS0FBTixFQUFhQyxLQUFiLEVBQXVCO0FBQzVFLFFBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2YsdUJBQVU3QixHQUFWLFNBQWdCNEIsS0FBaEIsY0FBeUJULE1BQU0sQ0FBQ1MsS0FBRCxDQUEvQjtBQUNEOztBQUVELHFCQUFVNUIsR0FBVixjQUFpQjRCLEtBQWpCLGNBQTBCVCxNQUFNLENBQUNTLEtBQUQsQ0FBaEM7QUFDRCxHQU4yQixFQU16QixHQU55QixDQUE1QjtBQVFBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBRyxVQUFJLEVBQUV4QyxjQUFjLEdBQUdxQyxtQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsZ0JBQUlsQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsZ0JBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFPQSxDQTlERjs7R0FBTU4sZ0I7O0tBQUFBLGdCO0FBZ0VTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YmUyYTU2MDE2NjE0NmI2Mjc4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgdHlwZSBPYmplY3RTdHJpbmcgPSB7XHJcbiAgW2luZGV4OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEdvb2dsZVNoZWV0c0F1dGggPSAoKSA9PiB7XHJcbiAgY29uc3Qgb2F1dGgyRW5kcG9pbnQgPSAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGgnO1xyXG4gIGNvbnN0IHVzZXJJbmZvVVJMID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS91c2VyaW5mbz9hbHQ9anNvbiZhY2Nlc3NfdG9rZW49JztcclxuXHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHBhcnNlSGFzaCA9IChoYXNoOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGhhc2hQYXJzZWQgPSBoYXNoLnNwbGl0KCcmJykucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gaXRlbS5zcGxpdCgnPScpO1xyXG4gICAgICBhY2Nba2V5XSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30gYXMgT2JqZWN0U3RyaW5nKTtcclxuXHJcbiAgICByZXR1cm4gaGFzaFBhcnNlZDtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBwYXJzZUhhc2goaGFzaCkuYWNjZXNzX3Rva2VuO1xyXG4gICAgaWYgKGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjY2Vzc1Rva2VuKTtcclxuICAgICAgc2V0VG9rZW4oYWNjZXNzVG9rZW4pO1xyXG4gICAgICBmZXRjaCh1c2VySW5mb1VSTCArIHRva2VuKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRGdWxsTmFtZShkYXRhLm5hbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IG51bGwpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIHJlZGlyZWN0X3VyaTogJ2h0dHBzOi8vbmlyYWxsLmdpdGh1Yi5pby80dGhTY3J1bVRNLydcclxuICBjb25zdCBwYXJhbXM6IE9iamVjdFN0cmluZyA9IHtcclxuICAgIGNsaWVudF9pZDogJzI3ODM5MTUyNjMxMi02a2Jma200cTA4cjUzcmU0ZXUwZmRtczZqbm1pbzZsdS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXHJcbiAgICByZWRpcmVjdF91cmk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxyXG4gICAgc2NvcGU6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0cyBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLnByb2ZpbGUnLFxyXG4gICAgc3RhdGU6ICdhdXRob3JpemF0aW9uX2dvb2dsZV9zaGVldHMnLFxyXG4gICAgcmVzcG9uc2VfdHlwZTogJ3Rva2VuJ1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXV0aFBhcmFtc0Zvcm1hdHRlZCA9IE9iamVjdC5rZXlzKHBhcmFtcykucmVkdWNlKChhY2MsIHBhcmFtLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBgJHthY2N9JHtwYXJhbX09JHtwYXJhbXNbcGFyYW1dfWBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7YWNjfSYke3BhcmFtfT0ke3BhcmFtc1twYXJhbV19YFxyXG4gIH0sICc/Jyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YSBocmVmPXtvYXV0aDJFbmRwb2ludCArIGF1dGhQYXJhbXNGb3JtYXR0ZWR9PmNsaWNrPC9hPlxyXG4gICAgICA8cD57dG9rZW59PC9wPlxyXG4gICAgICA8cD57ZnVsbE5hbWV9PC9wPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+Q2xpY2s8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4pfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvb2dsZVNoZWV0c0F1dGg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
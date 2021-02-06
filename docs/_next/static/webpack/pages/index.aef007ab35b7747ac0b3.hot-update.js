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
      setToken(function (accessToken) {
        fetch(userInfoURL + accessToken).then(function (response) {
          return response.json();
        }).then(function (data) {
          setFullName(data.name);
        })["catch"](function () {
          return null;
        });
        return accessToken;
      });
    }
  }, [token]); // redirect_uri: 'https://nirall.github.io/4thScrumTM/'

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVTaGVldHNBdXRoL0dvb2dsZVNoZWV0c0F1dGgudHN4Il0sIm5hbWVzIjpbIkdvb2dsZVNoZWV0c0F1dGgiLCJvYXV0aDJFbmRwb2ludCIsInVzZXJJbmZvVVJMIiwidXNlU3RhdGUiLCJ0b2tlbiIsInNldFRva2VuIiwiZnVsbE5hbWUiLCJzZXRGdWxsTmFtZSIsInBhcnNlSGFzaCIsImhhc2giLCJoYXNoUGFyc2VkIiwic3BsaXQiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwia2V5IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJuYW1lIiwicGFyYW1zIiwiY2xpZW50X2lkIiwicmVkaXJlY3RfdXJpIiwic2NvcGUiLCJzdGF0ZSIsInJlc3BvbnNlX3R5cGUiLCJhdXRoUGFyYW1zRm9ybWF0dGVkIiwiT2JqZWN0Iiwia2V5cyIsInBhcmFtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUM3QixNQUFNQyxjQUFjLEdBQUcsOENBQXZCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLHNFQUFwQjs7QUFGNkIsa0JBSUhDLHNEQUFRLENBQUMsRUFBRCxDQUpMO0FBQUEsTUFJdEJDLEtBSnNCO0FBQUEsTUFJZkMsUUFKZTs7QUFBQSxtQkFLR0Ysc0RBQVEsQ0FBQyxFQUFELENBTFg7QUFBQSxNQUt0QkcsUUFMc0I7QUFBQSxNQUtaQyxXQUxZOztBQU83QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQWtCO0FBQ2xDLFFBQU1DLFVBQVUsR0FBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVcsR0FBWCxFQUFnQkMsTUFBaEIsQ0FBdUIsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFBQSx3QkFDbENBLElBQUksQ0FBQ0gsS0FBTCxDQUFXLEdBQVgsQ0FEa0M7QUFBQTtBQUFBLFVBQ2hESSxHQURnRDtBQUFBLFVBQzNDQyxLQUQyQzs7QUFFdkRILFNBQUcsQ0FBQ0UsR0FBRCxDQUFILEdBQVdDLEtBQVg7QUFDQSxhQUFPSCxHQUFQO0FBQ0QsS0FKa0IsRUFJaEIsRUFKZ0IsQ0FBbkI7QUFNQSxXQUFPSCxVQUFQO0FBQ0QsR0FSRDs7QUFVQU8seURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTVIsSUFBSSxHQUFHUyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JWLElBQWhCLENBQXFCVyxTQUFyQixDQUErQixDQUEvQixDQUFiO0FBQ0EsUUFBTUMsV0FBVyxHQUFHYixTQUFTLENBQUNDLElBQUQsQ0FBVCxDQUFnQmEsWUFBcEM7O0FBQ0EsUUFBSUQsV0FBSixFQUFpQjtBQUNmRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsV0FBWjtBQUNBaEIsY0FBUSxDQUFDLFVBQUNnQixXQUFELEVBQWlCO0FBQ3hCSSxhQUFLLENBQUN2QixXQUFXLEdBQUdtQixXQUFmLENBQUwsQ0FDQ0ssSUFERCxDQUNNLFVBQUNDLFFBQUQ7QUFBQSxpQkFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxTQUROLEVBRUNGLElBRkQsQ0FFTSxVQUFDRyxJQUFELEVBQVU7QUFDZHRCLHFCQUFXLENBQUNzQixJQUFJLENBQUNDLElBQU4sQ0FBWDtBQUNELFNBSkQsV0FLTztBQUFBLGlCQUFNLElBQU47QUFBQSxTQUxQO0FBT0EsZUFBT1QsV0FBUDtBQUNELE9BVE8sQ0FBUjtBQVVEO0FBQ0YsR0FoQlEsRUFnQk4sQ0FBQ2pCLEtBQUQsQ0FoQk0sQ0FBVCxDQWpCNkIsQ0FtQzdCOztBQUNBLE1BQU0yQixNQUFvQixHQUFHO0FBQzNCQyxhQUFTLEVBQUUsMEVBRGdCO0FBRTNCQyxnQkFBWSxFQUFFLHVCQUZhO0FBRzNCQyxTQUFLLEVBQUUsK0ZBSG9CO0FBSTNCQyxTQUFLLEVBQUUsNkJBSm9CO0FBSzNCQyxpQkFBYSxFQUFFO0FBTFksR0FBN0I7QUFRQSxNQUFNQyxtQkFBbUIsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlSLE1BQVosRUFBb0JuQixNQUFwQixDQUEyQixVQUFDQyxHQUFELEVBQU0yQixLQUFOLEVBQWFDLEtBQWIsRUFBdUI7QUFDNUUsUUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZix1QkFBVTVCLEdBQVYsU0FBZ0IyQixLQUFoQixjQUF5QlQsTUFBTSxDQUFDUyxLQUFELENBQS9CO0FBQ0Q7O0FBRUQscUJBQVUzQixHQUFWLGNBQWlCMkIsS0FBakIsY0FBMEJULE1BQU0sQ0FBQ1MsS0FBRCxDQUFoQztBQUNELEdBTjJCLEVBTXpCLEdBTnlCLENBQTVCO0FBUUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFHLFVBQUksRUFBRXZDLGNBQWMsR0FBR29DLG1CQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBSWpDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBQSxnQkFBSUU7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQU9BLENBM0RGOztHQUFNTixnQjs7S0FBQUEsZ0I7QUE2RFNBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFlZjAwN2FiMzViNzc0N2FjMGIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCB0eXBlIE9iamVjdFN0cmluZyA9IHtcclxuICBbaW5kZXg6IHN0cmluZ106IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgR29vZ2xlU2hlZXRzQXV0aCA9ICgpID0+IHtcclxuICBjb25zdCBvYXV0aDJFbmRwb2ludCA9ICdodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aCc7XHJcbiAgY29uc3QgdXNlckluZm9VUkwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL3VzZXJpbmZvP2FsdD1qc29uJmFjY2Vzc190b2tlbj0nO1xyXG5cclxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZnVsbE5hbWUsIHNldEZ1bGxOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgcGFyc2VIYXNoID0gKGhhc2g6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgaGFzaFBhcnNlZCA9IGhhc2guc3BsaXQoJyYnKS5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBpdGVtLnNwbGl0KCc9Jyk7XHJcbiAgICAgIGFjY1trZXldID0gdmFsdWU7XHJcbiAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSBhcyBPYmplY3RTdHJpbmcpO1xyXG5cclxuICAgIHJldHVybiBoYXNoUGFyc2VkO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHBhcnNlSGFzaChoYXNoKS5hY2Nlc3NfdG9rZW47XHJcbiAgICBpZiAoYWNjZXNzVG9rZW4pIHtcclxuICAgICAgY29uc29sZS5sb2coYWNjZXNzVG9rZW4pO1xyXG4gICAgICBzZXRUb2tlbigoYWNjZXNzVG9rZW4pID0+IHtcclxuICAgICAgICBmZXRjaCh1c2VySW5mb1VSTCArIGFjY2Vzc1Rva2VuKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRGdWxsTmFtZShkYXRhLm5hbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IG51bGwpO1xyXG5cclxuICAgICAgICByZXR1cm4gYWNjZXNzVG9rZW47XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFt0b2tlbl0pXHJcblxyXG4gIC8vIHJlZGlyZWN0X3VyaTogJ2h0dHBzOi8vbmlyYWxsLmdpdGh1Yi5pby80dGhTY3J1bVRNLydcclxuICBjb25zdCBwYXJhbXM6IE9iamVjdFN0cmluZyA9IHtcclxuICAgIGNsaWVudF9pZDogJzI3ODM5MTUyNjMxMi02a2Jma200cTA4cjUzcmU0ZXUwZmRtczZqbm1pbzZsdS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXHJcbiAgICByZWRpcmVjdF91cmk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxyXG4gICAgc2NvcGU6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0cyBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLnByb2ZpbGUnLFxyXG4gICAgc3RhdGU6ICdhdXRob3JpemF0aW9uX2dvb2dsZV9zaGVldHMnLFxyXG4gICAgcmVzcG9uc2VfdHlwZTogJ3Rva2VuJ1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXV0aFBhcmFtc0Zvcm1hdHRlZCA9IE9iamVjdC5rZXlzKHBhcmFtcykucmVkdWNlKChhY2MsIHBhcmFtLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBgJHthY2N9JHtwYXJhbX09JHtwYXJhbXNbcGFyYW1dfWBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7YWNjfSYke3BhcmFtfT0ke3BhcmFtc1twYXJhbV19YFxyXG4gIH0sICc/Jyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YSBocmVmPXtvYXV0aDJFbmRwb2ludCArIGF1dGhQYXJhbXNGb3JtYXR0ZWR9PmNsaWNrPC9hPlxyXG4gICAgICA8cD57dG9rZW59PC9wPlxyXG4gICAgICA8cD57ZnVsbE5hbWV9PC9wPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+Q2xpY2s8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4pfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvb2dsZVNoZWV0c0F1dGg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
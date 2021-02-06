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
        setFullName(data.name);
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
      lineNumber: 62,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: fullName.firstName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: fullName.lastName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      children: "Click"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVTaGVldHNBdXRoL0dvb2dsZVNoZWV0c0F1dGgudHN4Il0sIm5hbWVzIjpbIkdvb2dsZVNoZWV0c0F1dGgiLCJvYXV0aDJFbmRwb2ludCIsInVzZXJJbmZvVVJMIiwidXNlU3RhdGUiLCJ0b2tlbiIsInNldFRva2VuIiwiZnVsbE5hbWUiLCJzZXRGdWxsTmFtZSIsInBhcnNlSGFzaCIsImhhc2giLCJyZXNPQXV0aCIsInNwbGl0IiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsImtleSIsInZhbHVlIiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJzdWJzdHJpbmciLCJhY2Nlc3NfdG9rZW4iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImRhdGEiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsImNsaWVudF9pZCIsInJlZGlyZWN0X3VyaSIsInNjb3BlIiwic3RhdGUiLCJyZXNwb25zZV90eXBlIiwiYXV0aFBhcmFtc0Zvcm1hdHRlZCIsIk9iamVjdCIsImtleXMiLCJwYXJhbSIsImluZGV4IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUM3QixNQUFNQyxjQUFjLEdBQUcsOENBQXZCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLHNFQUFwQjs7QUFGNkIsa0JBSUhDLHNEQUFRLENBQUMsRUFBRCxDQUpMO0FBQUEsTUFJdEJDLEtBSnNCO0FBQUEsTUFJZkMsUUFKZTs7QUFBQSxtQkFLR0Ysc0RBQVEsQ0FBQyxFQUFELENBTFg7QUFBQSxNQUt0QkcsUUFMc0I7QUFBQSxNQUtaQyxXQUxZOztBQU83QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQWtCO0FBQ2xDLFFBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVcsR0FBWCxFQUFnQkMsTUFBaEIsQ0FBdUIsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFBQSx3QkFDaENBLElBQUksQ0FBQ0gsS0FBTCxDQUFXLEdBQVgsQ0FEZ0M7QUFBQTtBQUFBLFVBQzlDSSxHQUQ4QztBQUFBLFVBQ3pDQyxLQUR5Qzs7QUFFckRILFNBQUcsQ0FBQ0UsR0FBRCxDQUFILEdBQVdDLEtBQVg7QUFDQSxhQUFPSCxHQUFQO0FBQ0QsS0FKZ0IsRUFJZCxFQUpjLENBQWpCO0FBTUEsV0FBT0gsUUFBUDtBQUNELEdBUkQ7O0FBVUFPLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1SLElBQUksR0FBR1MsTUFBTSxDQUFDQyxRQUFQLENBQWdCVixJQUFoQixDQUFxQlcsU0FBckIsQ0FBK0IsQ0FBL0IsQ0FBYjs7QUFDQSxRQUFJWCxJQUFKLEVBQVU7QUFDUkosY0FBUSxDQUFDRyxTQUFTLENBQUNDLElBQUQsQ0FBVCxDQUFnQlksWUFBakIsQ0FBUjtBQUNBQyxXQUFLLENBQUNwQixXQUFXLEdBQUdFLEtBQWYsQ0FBTCxDQUNHbUIsSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQixZQUFJQSxRQUFRLENBQUNDLEVBQWIsRUFBaUI7QUFDZixpQkFBT0QsUUFBUSxDQUFDRSxJQUFULEVBQVA7QUFDRDs7QUFFRCxlQUFPLElBQVA7QUFDRCxPQVBILEVBUUdILElBUkgsQ0FRUSxVQUFDSSxJQUFELEVBQVU7QUFDZHBCLG1CQUFXLENBQUNvQixJQUFJLENBQUNDLElBQU4sQ0FBWDtBQUNELE9BVkgsV0FXUyxVQUFDRCxJQUFEO0FBQUEsZUFBVUUsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVosQ0FBVjtBQUFBLE9BWFQ7QUFZRDtBQUNGLEdBakJRLENBQVQsQ0FqQjZCLENBb0M3Qjs7QUFDQSxNQUFNSSxNQUFvQixHQUFHO0FBQzNCQyxhQUFTLEVBQUUsMEVBRGdCO0FBRTNCQyxnQkFBWSxFQUFFLHVCQUZhO0FBRzNCQyxTQUFLLEVBQUUsK0ZBSG9CO0FBSTNCQyxTQUFLLEVBQUUsNkJBSm9CO0FBSzNCQyxpQkFBYSxFQUFFO0FBTFksR0FBN0I7QUFRQSxNQUFNQyxtQkFBbUIsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlSLE1BQVosRUFBb0JuQixNQUFwQixDQUEyQixVQUFDQyxHQUFELEVBQU0yQixLQUFOLEVBQWFDLEtBQWIsRUFBdUI7QUFDNUUsUUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZix1QkFBVTVCLEdBQVYsU0FBZ0IyQixLQUFoQixjQUF5QlQsTUFBTSxDQUFDUyxLQUFELENBQS9CO0FBQ0Q7O0FBRUQscUJBQVUzQixHQUFWLGNBQWlCMkIsS0FBakIsY0FBMEJULE1BQU0sQ0FBQ1MsS0FBRCxDQUFoQztBQUNELEdBTjJCLEVBTXpCLEdBTnlCLENBQTVCO0FBUUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFHLFVBQUksRUFBRXZDLGNBQWMsR0FBR29DLG1CQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBSWpDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBQSxnQkFBSUUsUUFBUSxDQUFDb0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRTtBQUFBLGdCQUFJcEMsUUFBUSxDQUFDcUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQSxrQkFERjtBQVFBLENBN0RGOztHQUFNM0MsZ0I7O0tBQUFBLGdCO0FBK0RTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNDMwM2NjODk2Yjg0ZDlkZGI1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgdHlwZSBPYmplY3RTdHJpbmcgPSB7XHJcbiAgW2luZGV4OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEdvb2dsZVNoZWV0c0F1dGggPSAoKSA9PiB7XHJcbiAgY29uc3Qgb2F1dGgyRW5kcG9pbnQgPSAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGgnO1xyXG4gIGNvbnN0IHVzZXJJbmZvVVJMID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS91c2VyaW5mbz9hbHQ9anNvbiZhY2Nlc3NfdG9rZW49JztcclxuXHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHBhcnNlSGFzaCA9IChoYXNoOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlc09BdXRoID0gaGFzaC5zcGxpdCgnJicpLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGl0ZW0uc3BsaXQoJz0nKTtcclxuICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9IGFzIE9iamVjdFN0cmluZyk7XHJcblxyXG4gICAgcmV0dXJuIHJlc09BdXRoO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XHJcbiAgICBpZiAoaGFzaCkge1xyXG4gICAgICBzZXRUb2tlbihwYXJzZUhhc2goaGFzaCkuYWNjZXNzX3Rva2VuKTtcclxuICAgICAgZmV0Y2godXNlckluZm9VUkwgKyB0b2tlbilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0RnVsbE5hbWUoZGF0YS5uYW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIHJlZGlyZWN0X3VyaTogJ2h0dHBzOi8vbmlyYWxsLmdpdGh1Yi5pby80dGhTY3J1bVRNLydcclxuICBjb25zdCBwYXJhbXM6IE9iamVjdFN0cmluZyA9IHtcclxuICAgIGNsaWVudF9pZDogJzI3ODM5MTUyNjMxMi02a2Jma200cTA4cjUzcmU0ZXUwZmRtczZqbm1pbzZsdS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXHJcbiAgICByZWRpcmVjdF91cmk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxyXG4gICAgc2NvcGU6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0cyBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLnByb2ZpbGUnLFxyXG4gICAgc3RhdGU6ICdhdXRob3JpemF0aW9uX2dvb2dsZV9zaGVldHMnLFxyXG4gICAgcmVzcG9uc2VfdHlwZTogJ3Rva2VuJ1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXV0aFBhcmFtc0Zvcm1hdHRlZCA9IE9iamVjdC5rZXlzKHBhcmFtcykucmVkdWNlKChhY2MsIHBhcmFtLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBgJHthY2N9JHtwYXJhbX09JHtwYXJhbXNbcGFyYW1dfWBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7YWNjfSYke3BhcmFtfT0ke3BhcmFtc1twYXJhbV19YFxyXG4gIH0sICc/Jyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YSBocmVmPXtvYXV0aDJFbmRwb2ludCArIGF1dGhQYXJhbXNGb3JtYXR0ZWR9PmNsaWNrPC9hPlxyXG4gICAgICA8cD57dG9rZW59PC9wPlxyXG4gICAgICA8cD57ZnVsbE5hbWUuZmlyc3ROYW1lfTwvcD5cclxuICAgICAgPHA+e2Z1bGxOYW1lLmxhc3ROYW1lfTwvcD5cclxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPkNsaWNrPC9idXR0b24+XHJcbiAgICA8Lz5cclxuKX07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29nbGVTaGVldHNBdXRoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useOnScreen.jsx":
/*!*******************************!*\
  !*** ./hooks/useOnScreen.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_is_mounted_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-is-mounted-hook */ "./node_modules/react-is-mounted-hook/lib/index.js");
/* harmony import */ var react_is_mounted_hook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_is_mounted_hook__WEBPACK_IMPORTED_MODULE_2__);


var _s = $RefreshSig$();




var useOnScreen = function useOnScreen(options) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      ref = _useState[0],
      setRef = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var isMount = react_is_mounted_hook__WEBPACK_IMPORTED_MODULE_2___default()();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isMount) {
      var observer = new IntersectionObserver(function (_ref) {
        var _ref2 = Object(C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
            entry = _ref2[0];

        setVisible(entry.isIntersecting);
      }, options);
      if (ref) observer.observe(ref);
      return function () {
        if (ref) {
          observer.unobserve(ref);
        }
      };
    }
  }, [ref, options, isMount]);
  return [setRef, visible];
};

_s(useOnScreen, "3jFHKQZDrj1tEcOCDRZucTpRTp8=", false, function () {
  return [react_is_mounted_hook__WEBPACK_IMPORTED_MODULE_2___default.a];
});

/* harmony default export */ __webpack_exports__["default"] = (useOnScreen);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlT25TY3JlZW4uanN4Il0sIm5hbWVzIjpbInVzZU9uU2NyZWVuIiwib3B0aW9ucyIsInVzZVN0YXRlIiwicmVmIiwic2V0UmVmIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJpc01vdW50IiwidXNlSXNNb3VudGVkIiwidXNlRWZmZWN0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJvYnNlcnZlIiwidW5vYnNlcnZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUMsSUFBTUEsV0FBVyxHQUFFLFNBQWJBLFdBQWEsQ0FBQ0MsT0FBRCxFQUFhO0FBQUE7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsSUFBRCxDQURBO0FBQUEsTUFDdEJDLEdBRHNCO0FBQUEsTUFDbEJDLE1BRGtCOztBQUFBLG1CQUVDRixzREFBUSxDQUFDLEtBQUQsQ0FGVDtBQUFBLE1BRXRCRyxPQUZzQjtBQUFBLE1BRWJDLFVBRmE7O0FBRzdCLE1BQU1DLE9BQU8sR0FBR0MsNERBQVksRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR0YsT0FBSCxFQUFXO0FBQ1AsVUFBTUcsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCLGdCQUFZO0FBQUE7QUFBQSxZQUFWQyxLQUFVOztBQUNsRE4sa0JBQVUsQ0FBQ00sS0FBSyxDQUFDQyxjQUFQLENBQVY7QUFDSCxPQUZnQixFQUVmWixPQUZlLENBQWpCO0FBSUEsVUFBR0UsR0FBSCxFQUNBTyxRQUFRLENBQUNJLE9BQVQsQ0FBaUJYLEdBQWpCO0FBQ0EsYUFBTyxZQUFNO0FBQ1QsWUFBR0EsR0FBSCxFQUFPO0FBQ0hPLGtCQUFRLENBQUNLLFNBQVQsQ0FBbUJaLEdBQW5CO0FBQ0g7QUFDSixPQUpEO0FBS0g7QUFDSixHQWRRLEVBY04sQ0FBQ0EsR0FBRCxFQUFLRixPQUFMLEVBQWFNLE9BQWIsQ0FkTSxDQUFUO0FBZUEsU0FBTyxDQUFDSCxNQUFELEVBQVFDLE9BQVIsQ0FBUDtBQUNILENBckJBOztHQUFNTCxXO1VBR2FRLDREOzs7QUFvQkxSLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRiZDExODg5ZDYwOGZmZmJmNWQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VJc01vdW50ZWQgZnJvbSBcInJlYWN0LWlzLW1vdW50ZWQtaG9va1wiO1xyXG5cclxuIGNvbnN0IHVzZU9uU2NyZWVuID0ob3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgW3JlZixzZXRSZWZdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc01vdW50ID0gdXNlSXNNb3VudGVkKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGlzTW91bnQpe1xyXG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoW2VudHJ5XSk9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuICAgICAgICAgICAgfSxvcHRpb25zKTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZihyZWYpXHJcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUocmVmKVxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVmKXtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUocmVmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtyZWYsb3B0aW9ucyxpc01vdW50XSlcclxuICAgIHJldHVybiBbc2V0UmVmLHZpc2libGVdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZU9uU2NyZWVuOyJdLCJzb3VyY2VSb290IjoiIn0=
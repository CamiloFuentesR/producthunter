webpackHotUpdate_N_E("pages/_app",{

/***/ "./hooks/useAutenticacion.jsx":
/*!************************************!*\
  !*** ./hooks/useAutenticacion.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_is_mounted_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is-mounted-hook */ "./node_modules/react-is-mounted-hook/lib/index.js");
/* harmony import */ var react_is_mounted_hook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_is_mounted_hook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ "./firebase/index.jsx");
var _s = $RefreshSig$();



 //hooks para mantener la autenticacion en el state

var useAutenticacion = function useAutenticacion() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      usuarioAutenticado = _useState[0],
      setUsuarioAutenticado = _useState[1];

  var isMount = react_is_mounted_hook__WEBPACK_IMPORTED_MODULE_1___default()();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var unsuscribe = _firebase__WEBPACK_IMPORTED_MODULE_2__["default"].auth.onAuthStateChanged(function (usuario) {
      if (usuario && isMount) {
        setUsuarioAutenticado(usuario);
      } else {
        setUsuarioAutenticado(null);
      }
    });
    return function () {
      return unsuscribe();
    };
  }, [isMount]);
  return usuarioAutenticado;
};

_s(useAutenticacion, "lWahHT9S0BuokHxynJsfeEomavc=", false, function () {
  return [react_is_mounted_hook__WEBPACK_IMPORTED_MODULE_1___default.a];
});

/* harmony default export */ __webpack_exports__["default"] = (useAutenticacion);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlQXV0ZW50aWNhY2lvbi5qc3giXSwibmFtZXMiOlsidXNlQXV0ZW50aWNhY2lvbiIsInVzZVN0YXRlIiwidXN1YXJpb0F1dGVudGljYWRvIiwic2V0VXN1YXJpb0F1dGVudGljYWRvIiwiaXNNb3VudCIsInVzZUlzTW91bnRlZCIsInVzZUVmZmVjdCIsInVuc3VzY3JpYmUiLCJmaXJlYmFzZSIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c3VhcmlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBSUE7O0FBQ0EsSUFBT0EsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQUEsa0JBQ3dCQyxzREFBUSxDQUFDLElBQUQsQ0FEaEM7QUFBQSxNQUNyQkMsa0JBRHFCO0FBQUEsTUFDREMscUJBREM7O0FBRTVCLE1BQU1DLE9BQU8sR0FBR0MsNERBQVksRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsVUFBVSxHQUFHQyxpREFBUSxDQUFDQyxJQUFULENBQWNDLGtCQUFkLENBQWlDLFVBQUFDLE9BQU8sRUFBSTtBQUMzRCxVQUFHQSxPQUFPLElBQUlQLE9BQWQsRUFBdUI7QUFDbkJELDZCQUFxQixDQUFDUSxPQUFELENBQXJCO0FBQ0gsT0FGRCxNQUVNO0FBQ0ZSLDZCQUFxQixDQUFDLElBQUQsQ0FBckI7QUFDSDtBQUNKLEtBTmtCLENBQW5CO0FBT0EsV0FBTztBQUFBLGFBQU1JLFVBQVUsRUFBaEI7QUFBQSxLQUFQO0FBQ0gsR0FUUSxFQVNOLENBQUNILE9BQUQsQ0FUTSxDQUFUO0FBVUEsU0FBT0Ysa0JBQVA7QUFFSCxDQWhCRDs7R0FBT0YsZ0I7VUFFYUssNEQ7OztBQWdCTEwsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41ZDFmNGE5ZGU1Zjc0ZTI3ZDA4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VJc01vdW50ZWQgZnJvbSAncmVhY3QtaXMtbW91bnRlZC1ob29rJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcblxyXG4vL2hvb2tzIHBhcmEgbWFudGVuZXIgbGEgYXV0ZW50aWNhY2lvbiBlbiBlbCBzdGF0ZVxyXG5jb25zdCAgdXNlQXV0ZW50aWNhY2lvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt1c3VhcmlvQXV0ZW50aWNhZG8sIHNldFVzdWFyaW9BdXRlbnRpY2Fkb10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGlzTW91bnQgPSB1c2VJc01vdW50ZWQoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdW5zdXNjcmliZSA9IGZpcmViYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKHVzdWFyaW8gPT4ge1xyXG4gICAgICAgICAgICBpZih1c3VhcmlvICYmIGlzTW91bnQpIHtcclxuICAgICAgICAgICAgICAgIHNldFVzdWFyaW9BdXRlbnRpY2Fkbyh1c3VhcmlvKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VXN1YXJpb0F1dGVudGljYWRvKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHVuc3VzY3JpYmUoKTtcclxuICAgIH0sIFtpc01vdW50XSlcclxuICAgIHJldHVybiB1c3VhcmlvQXV0ZW50aWNhZG87XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VBdXRlbnRpY2FjaW9uOyJdLCJzb3VyY2VSb290IjoiIn0=
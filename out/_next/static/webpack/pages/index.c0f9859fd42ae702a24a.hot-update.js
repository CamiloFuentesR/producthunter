webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ui/Boton.jsx":
/*!*********************************!*\
  !*** ./components/ui/Boton.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");


var Boton = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("a", {
  target: "ep90l2b0",
  label: "Boton"
})("display:block;font-weight:700;text-transform:uppercase;border:1px solid #d1d1d1;padding:.8rem 2rem;margin:2rem auto;text-align:center;background-color:", function (props) {
  return props.bgColor ? '#DA552F' : 'white';
}, ";color:", function (props) {
  return props.bgColor ? 'white' : '#000';
}, ";&:last-of-type{margin-right:0;}&:hover{cursor:pointer;}@media(max-width:360px){font-weight:300;}" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9rb21cXERlc2t0b3BcXGNhbWlsb1xccmVhY3QtZXN0dWRpb1xccHJ5ZWN0b3MtZGUtanVhblxccHJvZHVjdGh1bnRuZXh0XFxjb21wb25lbnRzXFx1aVxcQm90b24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVzQiIsImZpbGUiOiJDOlxcVXNlcnNcXGxva29tXFxEZXNrdG9wXFxjYW1pbG9cXHJlYWN0LWVzdHVkaW9cXHByeWVjdG9zLWRlLWp1YW5cXHByb2R1Y3RodW50bmV4dFxcY29tcG9uZW50c1xcdWlcXEJvdG9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcbmNvbnN0IEJvdG9uID0gc3R5bGVkLmFgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xyXG4gICAgcGFkZGluZzogLjhyZW0gMnJlbTtcclxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5iZ0NvbG9yPyAnI0RBNTUyRicgOiAnd2hpdGUnfTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmJnQ29sb3IgPyd3aGl0ZSc6ICcjMDAwJ307IFxyXG4gICAgJjpsYXN0LW9mLXR5cGV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6MzYwcHgpe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3RvbjsiXX0= */"));

/* harmony default export */ __webpack_exports__["default"] = (Boton);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9Cb3Rvbi5qc3giXSwibmFtZXMiOlsiQm90b24iLCJwcm9wcyIsImJnQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBQUg7QUFBQTtBQUFBLDhKQVFhLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE9BQU4sR0FBZSxTQUFmLEdBQTJCLE9BQS9CO0FBQUEsQ0FSbEIsYUFTRSxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxPQUFOLEdBQWUsT0FBZixHQUF3QixNQUE1QjtBQUFBLENBVFAsZzZDQUFYOztBQXVCZUYsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzBmOTg1OWZkNDJhZTcwMmEyNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcbmNvbnN0IEJvdG9uID0gc3R5bGVkLmFgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xyXG4gICAgcGFkZGluZzogLjhyZW0gMnJlbTtcclxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5iZ0NvbG9yPyAnI0RBNTUyRicgOiAnd2hpdGUnfTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmJnQ29sb3IgPyd3aGl0ZSc6ICcjMDAwJ307IFxyXG4gICAgJjpsYXN0LW9mLXR5cGV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6MzYwcHgpe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3RvbjsiXSwic291cmNlUm9vdCI6IiJ9
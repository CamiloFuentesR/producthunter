webpackHotUpdate_N_E("pages/buscar",{

/***/ "./hooks/useProductosBusqueda.jsx":
/*!****************************************!*\
  !*** ./hooks/useProductosBusqueda.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ "./firebase/index.jsx");


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var useProductosBusqueda = function useProductosBusqueda(orden, q) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      productos = _useState[0],
      setProductos = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_2__["FirebaseContext"]),
      firebase = _useContext.firebase;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (q) {
      var obtenerProductos = function obtenerProductos() {
        firebase.db.collection('productos').where("productos", "array-contains", "".concat(q)).onSnapshot(manejarSnapShot);
      };

      obtenerProductos();
    }
  }, [q]);

  function manejarSnapShot(snapshot) {
    console.log(snapshot.docs);
    var productos = snapshot.docs.map(function (doc) {
      return _objectSpread({
        id: doc.id
      }, doc.data());
    });
    setProductos(productos);
  }

  return {
    productos: productos
  };
};

_s(useProductosBusqueda, "TywoeUye4QVb1vx5t2jK8viUg10=");

/* harmony default export */ __webpack_exports__["default"] = (useProductosBusqueda);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUHJvZHVjdG9zQnVzcXVlZGEuanN4Il0sIm5hbWVzIjpbInVzZVByb2R1Y3Rvc0J1c3F1ZWRhIiwib3JkZW4iLCJxIiwidXNlU3RhdGUiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c2VFZmZlY3QiLCJvYnRlbmVyUHJvZHVjdG9zIiwiZGIiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJvblNuYXBzaG90IiwibWFuZWphclNuYXBTaG90Iiwic25hcHNob3QiLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsS0FBRCxFQUFPQyxDQUFQLEVBQWE7QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxFQUFELENBREo7QUFBQSxNQUMvQkMsU0FEK0I7QUFBQSxNQUNwQkMsWUFEb0I7O0FBQUEsb0JBRW5CQyx3REFBVSxDQUFDQyx5REFBRCxDQUZTO0FBQUEsTUFFL0JDLFFBRitCLGVBRS9CQSxRQUYrQjs7QUFHdENDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdQLENBQUgsRUFDQTtBQUNJLFVBQU1RLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMvQkYsZ0JBQVEsQ0FBQ0csRUFBVCxDQUFZQyxVQUFaLENBQXVCLFdBQXZCLEVBQW9DQyxLQUFwQyxDQUEwQyxXQUExQyxFQUFzRCxnQkFBdEQsWUFBMEVYLENBQTFFLEdBQStFWSxVQUEvRSxDQUEwRkMsZUFBMUY7QUFDSCxPQUZHOztBQUdKTCxzQkFBZ0I7QUFDbkI7QUFDQSxHQVJRLEVBUU4sQ0FBQ1IsQ0FBRCxDQVJNLENBQVQ7O0FBVUEsV0FBU2EsZUFBVCxDQUF5QkMsUUFBekIsRUFBbUM7QUFDL0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQXJCO0FBQ0EsUUFBTWYsU0FBUyxHQUFHWSxRQUFRLENBQUNHLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxHQUFHLEVBQUk7QUFDdkM7QUFDSUMsVUFBRSxFQUFFRCxHQUFHLENBQUNDO0FBRFosU0FFT0QsR0FBRyxDQUFDRSxJQUFKLEVBRlA7QUFJSCxLQUxpQixDQUFsQjtBQU1BbEIsZ0JBQVksQ0FBQ0QsU0FBRCxDQUFaO0FBQ0g7O0FBRUQsU0FBTztBQUNIQSxhQUFTLEVBQVRBO0FBREcsR0FBUDtBQUdILENBM0JEOztHQUFNSixvQjs7QUE2QlNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1c2Nhci4zYWNhYzQ1ZTIwYzMxOTgxZWRkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuY29uc3QgdXNlUHJvZHVjdG9zQnVzcXVlZGEgPSAob3JkZW4scSkgPT4ge1xyXG4gICAgY29uc3QgW3Byb2R1Y3Rvcywgc2V0UHJvZHVjdG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHtmaXJlYmFzZX0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9kdWN0b3MnKS53aGVyZShcInByb2R1Y3Rvc1wiLFwiYXJyYXktY29udGFpbnNcIixgJHtxfWApLm9uU25hcHNob3QobWFuZWphclNuYXBTaG90KVxyXG4gICAgICAgIH1cclxuICAgICAgICBvYnRlbmVyUHJvZHVjdG9zKCk7XHJcbiAgICB9XHJcbiAgICB9LCBbcV0pO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBtYW5lamFyU25hcFNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzbmFwc2hvdC5kb2NzKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0b3MgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0UHJvZHVjdG9zKHByb2R1Y3Rvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9kdWN0b3NcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUHJvZHVjdG9zQnVzcXVlZGE7XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
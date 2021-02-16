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
/* harmony import */ var C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ "./firebase/index.jsx");




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var useProductosBusqueda = function useProductosBusqueda(orden, q) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      productos = _useState[0],
      setProductos = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_4__["FirebaseContext"]),
      firebase = _useContext.firebase;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (q) {
      var obtenerProductos = /*#__PURE__*/function () {
        var _ref = Object(C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
          var prod, res;
          return C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return firebase.db.collection('productos');

                case 2:
                  prod = _context.sent;
                  console.log(prod);
                  _context.next = 6;
                  return prod.where("productos", "array-contains", q).get();

                case 6:
                  res = _context.sent;
                  console.log(res);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function obtenerProductos() {
          return _ref.apply(this, arguments);
        };
      }();

      obtenerProductos();
    }
  }, [q]);

  function manejarSnapShot(snapshot) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUHJvZHVjdG9zQnVzcXVlZGEuanN4Il0sIm5hbWVzIjpbInVzZVByb2R1Y3Rvc0J1c3F1ZWRhIiwib3JkZW4iLCJxIiwidXNlU3RhdGUiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c2VFZmZlY3QiLCJvYnRlbmVyUHJvZHVjdG9zIiwiZGIiLCJjb2xsZWN0aW9uIiwicHJvZCIsImNvbnNvbGUiLCJsb2ciLCJ3aGVyZSIsImdldCIsInJlcyIsIm1hbmVqYXJTbmFwU2hvdCIsInNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFELEVBQU9DLENBQVAsRUFBYTtBQUFBOztBQUFBLGtCQUNKQyxzREFBUSxDQUFDLEVBQUQsQ0FESjtBQUFBLE1BQy9CQyxTQUQrQjtBQUFBLE1BQ3BCQyxZQURvQjs7QUFBQSxvQkFFbkJDLHdEQUFVLENBQUNDLHlEQUFELENBRlM7QUFBQSxNQUUvQkMsUUFGK0IsZUFFL0JBLFFBRitCOztBQUd0Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1AsQ0FBSCxFQUNBO0FBQ0ksVUFBTVEsZ0JBQWdCO0FBQUEsb1hBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDTkYsUUFBUSxDQUFDRyxFQUFULENBQVlDLFVBQVosQ0FBdUIsV0FBdkIsQ0FETTs7QUFBQTtBQUNwQkMsc0JBRG9CO0FBRXpCQyx5QkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFGeUI7QUFBQSx5QkFHUEEsSUFBSSxDQUFDRyxLQUFMLENBQVcsV0FBWCxFQUF1QixnQkFBdkIsRUFBd0NkLENBQXhDLEVBQTJDZSxHQUEzQyxFQUhPOztBQUFBO0FBR3BCQyxxQkFIb0I7QUFJekJKLHlCQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBWjs7QUFKeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSDs7QUFBQSx3QkFBaEJSLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxTQUF0Qjs7QUFNSkEsc0JBQWdCO0FBQ25CO0FBQ0EsR0FYUSxFQVdOLENBQUNSLENBQUQsQ0FYTSxDQUFUOztBQWFBLFdBQVNpQixlQUFULENBQXlCQyxRQUF6QixFQUFtQztBQUMvQixRQUFNaEIsU0FBUyxHQUFHZ0IsUUFBUSxDQUFDQyxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsR0FBRyxFQUFJO0FBQ3ZDO0FBQ0lDLFVBQUUsRUFBRUQsR0FBRyxDQUFDQztBQURaLFNBRU9ELEdBQUcsQ0FBQ0UsSUFBSixFQUZQO0FBSUgsS0FMaUIsQ0FBbEI7QUFNQXBCLGdCQUFZLENBQUNELFNBQUQsQ0FBWjtBQUNIOztBQUVELFNBQU87QUFDSEEsYUFBUyxFQUFUQTtBQURHLEdBQVA7QUFHSCxDQTdCRDs7R0FBTUosb0I7O0FBK0JTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idXNjYXIuZjhmMDIyMGY0MjNkNDYyMzk5ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZpcmViYXNlQ29udGV4dCB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbmNvbnN0IHVzZVByb2R1Y3Rvc0J1c3F1ZWRhID0gKG9yZGVuLHEpID0+IHtcclxuICAgIGNvbnN0IFtwcm9kdWN0b3MsIHNldFByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCB7ZmlyZWJhc2V9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3Qgb2J0ZW5lclByb2R1Y3RvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICBjb25zdCBwcm9kID0gIGF3YWl0IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kKTtcclxuICAgICAgICAgICBjb25zdCByZXMgPSAgYXdhaXQgcHJvZC53aGVyZShcInByb2R1Y3Rvc1wiLFwiYXJyYXktY29udGFpbnNcIixxKS5nZXQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2J0ZW5lclByb2R1Y3RvcygpO1xyXG4gICAgfVxyXG4gICAgfSwgW3FdKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gbWFuZWphclNuYXBTaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdG9zID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFByb2R1Y3Rvcyhwcm9kdWN0b3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvZHVjdG9zXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVByb2R1Y3Rvc0J1c3F1ZWRhO1xyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
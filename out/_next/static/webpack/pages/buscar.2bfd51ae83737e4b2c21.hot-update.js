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




var useProductosBusqueda = function useProductosBusqueda(orden) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      productos = _useState[0],
      setProductos = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_2__["FirebaseContext"]),
      firebase = _useContext.firebase;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      filtrar = _useState2[0],
      setFiltrar = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var obtenerProductos = function obtenerProductos() {
      firebase.db.collection('productos').orderBy(orden, 'desc').onSnapshot(manejarSnapShot);
    };

    obtenerProductos();
  }, []);

  function manejarSnapShot(snapshot) {
    var productos = snapshot.docs.map(function (doc) {
      return _objectSpread({
        id: doc.id
      }, doc.data());
    });
    setProductos(productos);
  }

  function filtrarDatos(productos, q) {
    var filtro = productos.filter(function (producto) {
      return producto.nombre.toLowerCase().includes('trozo');
    });
    setFiltrar(filtro);
  }

  filtrarDatos();
  console.log(filtrar);
  return {
    productos: productos,
    filtrar: filtrar
  };
};

_s(useProductosBusqueda, "BIDR4gAcJsnBLEzLFI3KqFURL84=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUHJvZHVjdG9zQnVzcXVlZGEuanN4Il0sIm5hbWVzIjpbInVzZVByb2R1Y3Rvc0J1c3F1ZWRhIiwib3JkZW4iLCJ1c2VTdGF0ZSIsInByb2R1Y3RvcyIsInNldFByb2R1Y3RvcyIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsImZpbHRyYXIiLCJzZXRGaWx0cmFyIiwidXNlRWZmZWN0Iiwib2J0ZW5lclByb2R1Y3RvcyIsImRiIiwiY29sbGVjdGlvbiIsIm9yZGVyQnkiLCJvblNuYXBzaG90IiwibWFuZWphclNuYXBTaG90Iiwic25hcHNob3QiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJkYXRhIiwiZmlsdHJhckRhdG9zIiwicSIsImZpbHRybyIsImZpbHRlciIsInByb2R1Y3RvIiwibm9tYnJlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUFBLGtCQUVBQyxzREFBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRTNCQyxTQUYyQjtBQUFBLE1BRWhCQyxZQUZnQjs7QUFBQSxvQkFHZkMsd0RBQVUsQ0FBQ0MseURBQUQsQ0FISztBQUFBLE1BRzNCQyxRQUgyQixlQUczQkEsUUFIMkI7O0FBQUEsbUJBSUpMLHNEQUFRLENBQUMsRUFBRCxDQUpKO0FBQUEsTUFJM0JNLE9BSjJCO0FBQUEsTUFJbEJDLFVBSmtCOztBQUtsQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCSixjQUFRLENBQUNLLEVBQVQsQ0FBWUMsVUFBWixDQUF1QixXQUF2QixFQUFvQ0MsT0FBcEMsQ0FBNENiLEtBQTVDLEVBQWtELE1BQWxELEVBQTBEYyxVQUExRCxDQUFxRUMsZUFBckU7QUFDSCxLQUZEOztBQUdBTCxvQkFBZ0I7QUFDbkIsR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFPQSxXQUFTSyxlQUFULENBQXlCQyxRQUF6QixFQUFtQztBQUMvQixRQUFNZCxTQUFTLEdBQUdjLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUFDLEdBQUcsRUFBSTtBQUN2QztBQUNJQyxVQUFFLEVBQUVELEdBQUcsQ0FBQ0M7QUFEWixTQUVPRCxHQUFHLENBQUNFLElBQUosRUFGUDtBQUlILEtBTGlCLENBQWxCO0FBTUFsQixnQkFBWSxDQUFDRCxTQUFELENBQVo7QUFDSDs7QUFFRCxXQUFTb0IsWUFBVCxDQUFzQnBCLFNBQXRCLEVBQWdDcUIsQ0FBaEMsRUFBa0M7QUFDOUIsUUFBTUMsTUFBTSxHQUFHdEIsU0FBUyxDQUFDdUIsTUFBVixDQUFpQixVQUFBQyxRQUFRO0FBQUEsYUFDcENBLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsV0FBaEIsR0FBOEJDLFFBQTlCLENBQXVDLE9BQXZDLENBRG9DO0FBQUEsS0FBekIsQ0FBZjtBQUdBckIsY0FBVSxDQUFDZ0IsTUFBRCxDQUFWO0FBQ0g7O0FBQ0RGLGNBQVk7QUFFWlEsU0FBTyxDQUFDQyxHQUFSLENBQVl4QixPQUFaO0FBRUEsU0FBTztBQUNITCxhQUFTLEVBQVRBLFNBREc7QUFFSEssV0FBTyxFQUFQQTtBQUZHLEdBQVA7QUFJSCxDQXBDRDs7R0FBTVIsb0I7O0FBc0NTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idXNjYXIuMmJmZDUxYWU4MzczN2U0YjJjMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZpcmViYXNlQ29udGV4dCB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbmNvbnN0IHVzZVByb2R1Y3Rvc0J1c3F1ZWRhID0gb3JkZW4gPT4ge1xyXG5cclxuICAgIGNvbnN0IFtwcm9kdWN0b3MsIHNldFByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCB7ZmlyZWJhc2V9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG4gICAgY29uc3QgW2ZpbHRyYXIsIHNldEZpbHRyYXJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9kdWN0b3MnKS5vcmRlckJ5KG9yZGVuLCdkZXNjJykub25TbmFwc2hvdChtYW5lamFyU25hcFNob3QpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9idGVuZXJQcm9kdWN0b3MoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gbWFuZWphclNuYXBTaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdG9zID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFByb2R1Y3Rvcyhwcm9kdWN0b3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbHRyYXJEYXRvcyhwcm9kdWN0b3MscSl7XHJcbiAgICAgICAgY29uc3QgZmlsdHJvID0gcHJvZHVjdG9zLmZpbHRlcihwcm9kdWN0bz0+KFxyXG4gICAgICAgICAgICBwcm9kdWN0by5ub21icmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygndHJvem8nKVxyXG4gICAgICAgICkpO1xyXG4gICAgICAgIHNldEZpbHRyYXIoZmlsdHJvKTtcclxuICAgIH1cclxuICAgIGZpbHRyYXJEYXRvcygpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZpbHRyYXIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvZHVjdG9zLFxyXG4gICAgICAgIGZpbHRyYXJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUHJvZHVjdG9zQnVzcXVlZGE7XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
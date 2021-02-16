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
  /* useEffect(() => {
      const obtenerProductos = () => {
          // firebase.db.collection('productos').orderBy(orden, 'desc').onSnapshot(manejarSnapShot)
          firebase.db.collection('productos').orderBy(orden,'desc').startAt(`${q}`).onSnapshot(manejarSnapShot)
        }
      obtenerProductos();
  }, []); */

  function manejarSnapShot(snapshot) {
    console.log(snapshot);
    var productos = snapshot.docs.map(function (doc) {
      return _objectSpread({
        id: doc.id
      }, doc.data());
    });
    setProductos(productos);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (q || productos) {
      var filtrarDatos = function filtrarDatos(productos, q) {
        var filtro = productos.filter(function (producto) {
          return producto.nombre.toLowerCase().includes(q) || producto.descripcion.toLowerCase().includes(q);
        });
        setFiltrar(filtro);
      };

      filtrarDatos(productos, q);
    }
  }, [q, productos]);
  return {
    productos: productos,
    filtrar: filtrar
  };
};

_s(useProductosBusqueda, "Ezo2wvOFOpxT4qzlL5Y5XKIG6HA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUHJvZHVjdG9zQnVzcXVlZGEuanN4Il0sIm5hbWVzIjpbInVzZVByb2R1Y3Rvc0J1c3F1ZWRhIiwib3JkZW4iLCJ1c2VTdGF0ZSIsInByb2R1Y3RvcyIsInNldFByb2R1Y3RvcyIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsImZpbHRyYXIiLCJzZXRGaWx0cmFyIiwidXNlRWZmZWN0Iiwib2J0ZW5lclByb2R1Y3RvcyIsImRiIiwiY29sbGVjdGlvbiIsIm9yZGVyQnkiLCJvblNuYXBzaG90IiwibWFuZWphclNuYXBTaG90Iiwic25hcHNob3QiLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsInEiLCJmaWx0cmFyRGF0b3MiLCJmaWx0cm8iLCJmaWx0ZXIiLCJwcm9kdWN0byIsIm5vbWJyZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkZXNjcmlwY2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRUZDLHNEQUFRLENBQUMsRUFBRCxDQUZOO0FBQUEsTUFFN0JDLFNBRjZCO0FBQUEsTUFFbEJDLFlBRmtCOztBQUFBLG9CQUdmQyx3REFBVSxDQUFDQyx5REFBRCxDQUhLO0FBQUEsTUFHNUJDLFFBSDRCLGVBRzVCQSxRQUg0Qjs7QUFBQSxtQkFJTkwsc0RBQVEsQ0FBQyxFQUFELENBSkY7QUFBQSxNQUk3Qk0sT0FKNkI7QUFBQSxNQUlwQkMsVUFKb0I7O0FBT3BDQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0JKLGNBQVEsQ0FBQ0ssRUFBVCxDQUFZQyxVQUFaLENBQXVCLFdBQXZCLEVBQW9DQyxPQUFwQyxDQUE0Q2IsS0FBNUMsRUFBa0QsTUFBbEQsRUFBMERjLFVBQTFELENBQXFFQyxlQUFyRTtBQUNILEtBRkQ7O0FBR0FMLG9CQUFnQjtBQUNuQixHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUksV0FBU0ssZUFBVCxDQUF5QkMsUUFBekIsRUFBbUM7QUFDL0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0EsUUFBTWQsU0FBUyxHQUFHYyxRQUFRLENBQUNHLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxHQUFHLEVBQUk7QUFDdkM7QUFDSUMsVUFBRSxFQUFFRCxHQUFHLENBQUNDO0FBRFosU0FFT0QsR0FBRyxDQUFDRSxJQUFKLEVBRlA7QUFJSCxLQUxpQixDQUFsQjtBQU1BcEIsZ0JBQVksQ0FBQ0QsU0FBRCxDQUFaO0FBQ0g7O0FBRURPLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUllLENBQUMsSUFBSXRCLFNBQVQsRUFBb0I7QUFBQSxVQUdQdUIsWUFITyxHQUdoQixTQUFTQSxZQUFULENBQXNCdkIsU0FBdEIsRUFBaUNzQixDQUFqQyxFQUFvQztBQUNoQyxZQUFNRSxNQUFNLEdBQUd4QixTQUFTLENBQUN5QixNQUFWLENBQWlCLFVBQUFDLFFBQVE7QUFBQSxpQkFDcENBLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsV0FBaEIsR0FBOEJDLFFBQTlCLENBQXVDUCxDQUF2QyxLQUNBSSxRQUFRLENBQUNJLFdBQVQsQ0FBcUJGLFdBQXJCLEdBQW1DQyxRQUFuQyxDQUE0Q1AsQ0FBNUMsQ0FGb0M7QUFBQSxTQUF6QixDQUFmO0FBSUFoQixrQkFBVSxDQUFDa0IsTUFBRCxDQUFWO0FBQ0gsT0FUZTs7QUFVaEJELGtCQUFZLENBQUN2QixTQUFELEVBQVlzQixDQUFaLENBQVo7QUFDSDtBQUVKLEdBZFEsRUFjTixDQUFDQSxDQUFELEVBQUl0QixTQUFKLENBZE0sQ0FBVDtBQWdCQSxTQUFPO0FBQ0hBLGFBQVMsRUFBVEEsU0FERztBQUVISyxXQUFPLEVBQVBBO0FBRkcsR0FBUDtBQUlILENBdkREOztHQUFNUixvQjs7QUF5RFNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1c2Nhci5kMjVlMWZmNDI3OTY5NmQ3ZGVlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuY29uc3QgdXNlUHJvZHVjdG9zQnVzcXVlZGEgPSAob3JkZW4pID0+IHtcclxuXHJcbiAgICBjb25zdCBbcHJvZHVjdG9zLCBzZXRQcm9kdWN0b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgeyBmaXJlYmFzZSB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG4gICAgY29uc3QgW2ZpbHRyYXIsIHNldEZpbHRyYXJdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9idGVuZXJQcm9kdWN0b3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLm9yZGVyQnkob3JkZW4sJ2Rlc2MnKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwU2hvdClcclxuICAgICAgICB9XHJcbiAgICAgICAgb2J0ZW5lclByb2R1Y3RvcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8qIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lclByb2R1Y3RvcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncHJvZHVjdG9zJykub3JkZXJCeShvcmRlbiwgJ2Rlc2MnKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwU2hvdClcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncHJvZHVjdG9zJykub3JkZXJCeShvcmRlbiwnZGVzYycpLnN0YXJ0QXQoYCR7cX1gKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwU2hvdClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9idGVuZXJQcm9kdWN0b3MoKTtcclxuICAgIH0sIFtdKTsgKi9cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbWFuZWphclNuYXBTaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc25hcHNob3QpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RvcyA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0UHJvZHVjdG9zKHByb2R1Y3Rvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocSB8fCBwcm9kdWN0b3MpIHtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBmaWx0cmFyRGF0b3MocHJvZHVjdG9zLCBxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0cm8gPSBwcm9kdWN0b3MuZmlsdGVyKHByb2R1Y3RvID0+IChcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0by5ub21icmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RvLmRlc2NyaXBjaW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSlcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdHJhcihmaWx0cm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbHRyYXJEYXRvcyhwcm9kdWN0b3MsIHEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbcSwgcHJvZHVjdG9zXSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb2R1Y3RvcyxcclxuICAgICAgICBmaWx0cmFyXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVByb2R1Y3Rvc0J1c3F1ZWRhO1xyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      filtrar = _useState2[0],
      setFiltrar = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var obtenerProductos = function obtenerProductos() {
      firebase.db.collection('productos').orderBy(orden, 'desc').onSnapshot(manejarSnapShot);
    };

    obtenerProductos();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var obtenerProductos = function obtenerProductos() {
      // firebase.db.collection('productos').orderBy(orden, 'desc').onSnapshot(manejarSnapShot)
      firebase.db.collection('productos').orderBy(orden, 'desc').startAt("".concat(q)).onSnapshot(manejarSnapShot);
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

_s(useProductosBusqueda, "mb0lh6FH005959CbEijwYte6jLs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUHJvZHVjdG9zQnVzcXVlZGEuanN4Il0sIm5hbWVzIjpbInVzZVByb2R1Y3Rvc0J1c3F1ZWRhIiwib3JkZW4iLCJxIiwidXNlU3RhdGUiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJmaWx0cmFyIiwic2V0RmlsdHJhciIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0b3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwU2hvdCIsInN0YXJ0QXQiLCJzbmFwc2hvdCIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsImRhdGEiLCJmaWx0cmFyRGF0b3MiLCJmaWx0cm8iLCJmaWx0ZXIiLCJwcm9kdWN0byIsIm5vbWJyZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkZXNjcmlwY2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFBQTs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxFQUFELENBRkg7QUFBQSxNQUVoQ0MsU0FGZ0M7QUFBQSxNQUVyQkMsWUFGcUI7O0FBQUEsb0JBR2xCQyx3REFBVSxDQUFDQyx5REFBRCxDQUhRO0FBQUEsTUFHL0JDLFFBSCtCLGVBRy9CQSxRQUgrQjs7QUFBQSxtQkFJVEwsc0RBQVEsQ0FBQyxFQUFELENBSkM7QUFBQSxNQUloQ00sT0FKZ0M7QUFBQSxNQUl2QkMsVUFKdUI7O0FBS3ZDQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0JKLGNBQVEsQ0FBQ0ssRUFBVCxDQUFZQyxVQUFaLENBQXVCLFdBQXZCLEVBQW9DQyxPQUFwQyxDQUE0Q2QsS0FBNUMsRUFBbUQsTUFBbkQsRUFBMkRlLFVBQTNELENBQXNFQyxlQUF0RTtBQUNILEtBRkQ7O0FBR0FMLG9CQUFnQjtBQUNuQixHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0FELHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQjtBQUNBSixjQUFRLENBQUNLLEVBQVQsQ0FBWUMsVUFBWixDQUF1QixXQUF2QixFQUFvQ0MsT0FBcEMsQ0FBNENkLEtBQTVDLEVBQWtELE1BQWxELEVBQTBEaUIsT0FBMUQsV0FBcUVoQixDQUFyRSxHQUEwRWMsVUFBMUUsQ0FBcUZDLGVBQXJGO0FBRUgsS0FKRDs7QUFLQUwsb0JBQWdCO0FBQ25CLEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBVUEsV0FBU0ssZUFBVCxDQUF5QkUsUUFBekIsRUFBbUM7QUFDL0IsUUFBTWYsU0FBUyxHQUFHZSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxHQUFHLEVBQUk7QUFDdkM7QUFDSUMsVUFBRSxFQUFFRCxHQUFHLENBQUNDO0FBRFosU0FFT0QsR0FBRyxDQUFDRSxJQUFKLEVBRlA7QUFJSCxLQUxpQixDQUFsQjtBQU1BbkIsZ0JBQVksQ0FBQ0QsU0FBRCxDQUFaO0FBQ0g7O0FBRURPLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlULENBQUMsSUFBSUUsU0FBVCxFQUFvQjtBQUFBLFVBR1BxQixZQUhPLEdBR2hCLFNBQVNBLFlBQVQsQ0FBc0JyQixTQUF0QixFQUFpQ0YsQ0FBakMsRUFBb0M7QUFDaEMsWUFBTXdCLE1BQU0sR0FBR3RCLFNBQVMsQ0FBQ3VCLE1BQVYsQ0FBaUIsVUFBQUMsUUFBUTtBQUFBLGlCQUNwQ0EsUUFBUSxDQUFDQyxNQUFULENBQWdCQyxXQUFoQixHQUE4QkMsUUFBOUIsQ0FBdUM3QixDQUF2QyxLQUNBMEIsUUFBUSxDQUFDSSxXQUFULENBQXFCRixXQUFyQixHQUFtQ0MsUUFBbkMsQ0FBNEM3QixDQUE1QyxDQUZvQztBQUFBLFNBQXpCLENBQWY7QUFJQVEsa0JBQVUsQ0FBQ2dCLE1BQUQsQ0FBVjtBQUNILE9BVGU7O0FBVWhCRCxrQkFBWSxDQUFDckIsU0FBRCxFQUFZRixDQUFaLENBQVo7QUFDSDtBQUVKLEdBZFEsRUFjTixDQUFDQSxDQUFELEVBQUlFLFNBQUosQ0FkTSxDQUFUO0FBZ0JBLFNBQU87QUFDSEEsYUFBUyxFQUFUQSxTQURHO0FBRUhLLFdBQU8sRUFBUEE7QUFGRyxHQUFQO0FBSUgsQ0FwREQ7O0dBQU1ULG9COztBQXNEU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVzY2FyLjU4ZmY1YWQwZGVkZTJlOWEyMmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGaXJlYmFzZUNvbnRleHQgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5jb25zdCB1c2VQcm9kdWN0b3NCdXNxdWVkYSA9IChvcmRlbiwgcSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtwcm9kdWN0b3MsIHNldFByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCB7IGZpcmViYXNlIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dCk7XHJcbiAgICBjb25zdCBbZmlsdHJhciwgc2V0RmlsdHJhcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9idGVuZXJQcm9kdWN0b3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLm9yZGVyQnkob3JkZW4sICdkZXNjJykub25TbmFwc2hvdChtYW5lamFyU25hcFNob3QpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9idGVuZXJQcm9kdWN0b3MoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9idGVuZXJQcm9kdWN0b3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLm9yZGVyQnkob3JkZW4sICdkZXNjJykub25TbmFwc2hvdChtYW5lamFyU25hcFNob3QpXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLm9yZGVyQnkob3JkZW4sJ2Rlc2MnKS5zdGFydEF0KGAke3F9YCkub25TbmFwc2hvdChtYW5lamFyU25hcFNob3QpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBvYnRlbmVyUHJvZHVjdG9zKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG1hbmVqYXJTbmFwU2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RvcyA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0UHJvZHVjdG9zKHByb2R1Y3Rvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocSB8fCBwcm9kdWN0b3MpIHtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBmaWx0cmFyRGF0b3MocHJvZHVjdG9zLCBxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0cm8gPSBwcm9kdWN0b3MuZmlsdGVyKHByb2R1Y3RvID0+IChcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0by5ub21icmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RvLmRlc2NyaXBjaW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSlcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdHJhcihmaWx0cm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbHRyYXJEYXRvcyhwcm9kdWN0b3MsIHEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbcSwgcHJvZHVjdG9zXSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb2R1Y3RvcyxcclxuICAgICAgICBmaWx0cmFyXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVByb2R1Y3Rvc0J1c3F1ZWRhO1xyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
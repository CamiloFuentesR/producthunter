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
      setFiltrar = _useState2[1]; // useEffect(() => {
  //     const obtenerProductos = () => {
  //         firebase.db.collection('productos').orderBy(orden, 'desc').onSnapshot(manejarSnapShot)
  //     }
  //     obtenerProductos();
  // }, []);


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(q);

    var obtenerProductos = function obtenerProductos() {
      // firebase.db.collection('productos').orderBy(orden, 'desc').onSnapshot(manejarSnapShot)
      firebase.db.collection('productos').orderBy('nombres').startAt("".concat(q)).onSnapshot(manejarSnapShot);
    };

    obtenerProductos();
  }, [q]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUHJvZHVjdG9zQnVzcXVlZGEuanN4Il0sIm5hbWVzIjpbInVzZVByb2R1Y3Rvc0J1c3F1ZWRhIiwib3JkZW4iLCJxIiwidXNlU3RhdGUiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJmaWx0cmFyIiwic2V0RmlsdHJhciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvYnRlbmVyUHJvZHVjdG9zIiwiZGIiLCJjb2xsZWN0aW9uIiwib3JkZXJCeSIsInN0YXJ0QXQiLCJvblNuYXBzaG90IiwibWFuZWphclNuYXBTaG90Iiwic25hcHNob3QiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJkYXRhIiwiZmlsdHJhckRhdG9zIiwiZmlsdHJvIiwiZmlsdGVyIiwicHJvZHVjdG8iLCJub21icmUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGVzY3JpcGNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQUE7O0FBQUEsa0JBRUxDLHNEQUFRLENBQUMsRUFBRCxDQUZIO0FBQUEsTUFFaENDLFNBRmdDO0FBQUEsTUFFckJDLFlBRnFCOztBQUFBLG9CQUdsQkMsd0RBQVUsQ0FBQ0MseURBQUQsQ0FIUTtBQUFBLE1BRy9CQyxRQUgrQixlQUcvQkEsUUFIK0I7O0FBQUEsbUJBSVRMLHNEQUFRLENBQUMsRUFBRCxDQUpDO0FBQUEsTUFJaENNLE9BSmdDO0FBQUEsTUFJdkJDLFVBSnVCLGtCQUt2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlYLENBQVo7O0FBQ0EsUUFBTVksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCO0FBQ0FOLGNBQVEsQ0FBQ08sRUFBVCxDQUFZQyxVQUFaLENBQXVCLFdBQXZCLEVBQW9DQyxPQUFwQyxDQUE0QyxTQUE1QyxFQUF1REMsT0FBdkQsV0FBa0VoQixDQUFsRSxHQUF1RWlCLFVBQXZFLENBQWtGQyxlQUFsRjtBQUVILEtBSkQ7O0FBS0FOLG9CQUFnQjtBQUNuQixHQVJRLEVBUU4sQ0FBQ1osQ0FBRCxDQVJNLENBQVQ7O0FBV0EsV0FBU2tCLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQy9CLFFBQU1qQixTQUFTLEdBQUdpQixRQUFRLENBQUNDLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxHQUFHLEVBQUk7QUFDdkM7QUFDSUMsVUFBRSxFQUFFRCxHQUFHLENBQUNDO0FBRFosU0FFT0QsR0FBRyxDQUFDRSxJQUFKLEVBRlA7QUFJSCxLQUxpQixDQUFsQjtBQU1BckIsZ0JBQVksQ0FBQ0QsU0FBRCxDQUFaO0FBQ0g7O0FBRURPLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlULENBQUMsSUFBSUUsU0FBVCxFQUFvQjtBQUFBLFVBR1B1QixZQUhPLEdBR2hCLFNBQVNBLFlBQVQsQ0FBc0J2QixTQUF0QixFQUFpQ0YsQ0FBakMsRUFBb0M7QUFDaEMsWUFBTTBCLE1BQU0sR0FBR3hCLFNBQVMsQ0FBQ3lCLE1BQVYsQ0FBaUIsVUFBQUMsUUFBUTtBQUFBLGlCQUNwQ0EsUUFBUSxDQUFDQyxNQUFULENBQWdCQyxXQUFoQixHQUE4QkMsUUFBOUIsQ0FBdUMvQixDQUF2QyxLQUNBNEIsUUFBUSxDQUFDSSxXQUFULENBQXFCRixXQUFyQixHQUFtQ0MsUUFBbkMsQ0FBNEMvQixDQUE1QyxDQUZvQztBQUFBLFNBQXpCLENBQWY7QUFJQVEsa0JBQVUsQ0FBQ2tCLE1BQUQsQ0FBVjtBQUNILE9BVGU7O0FBVWhCRCxrQkFBWSxDQUFDdkIsU0FBRCxFQUFZRixDQUFaLENBQVo7QUFDSDtBQUVKLEdBZFEsRUFjTixDQUFDQSxDQUFELEVBQUlFLFNBQUosQ0FkTSxDQUFUO0FBZ0JBLFNBQU87QUFDSEEsYUFBUyxFQUFUQSxTQURHO0FBRUhLLFdBQU8sRUFBUEE7QUFGRyxHQUFQO0FBSUgsQ0FyREQ7O0dBQU1ULG9COztBQXVEU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVzY2FyLjQwNjE0NDI5MGJmNmEwMmVmNzdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGaXJlYmFzZUNvbnRleHQgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5jb25zdCB1c2VQcm9kdWN0b3NCdXNxdWVkYSA9IChvcmRlbiwgcSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtwcm9kdWN0b3MsIHNldFByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCB7IGZpcmViYXNlIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dCk7XHJcbiAgICBjb25zdCBbZmlsdHJhciwgc2V0RmlsdHJhcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IG9idGVuZXJQcm9kdWN0b3MgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLm9yZGVyQnkob3JkZW4sICdkZXNjJykub25TbmFwc2hvdChtYW5lamFyU25hcFNob3QpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIG9idGVuZXJQcm9kdWN0b3MoKTtcclxuICAgIC8vIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHEpO1xyXG4gICAgICAgIGNvbnN0IG9idGVuZXJQcm9kdWN0b3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLm9yZGVyQnkob3JkZW4sICdkZXNjJykub25TbmFwc2hvdChtYW5lamFyU25hcFNob3QpXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLm9yZGVyQnkoJ25vbWJyZXMnKS5zdGFydEF0KGAke3F9YCkub25TbmFwc2hvdChtYW5lamFyU25hcFNob3QpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBvYnRlbmVyUHJvZHVjdG9zKCk7XHJcbiAgICB9LCBbcV0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBtYW5lamFyU25hcFNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0b3MgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFByb2R1Y3Rvcyhwcm9kdWN0b3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHEgfHwgcHJvZHVjdG9zKSB7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZmlsdHJhckRhdG9zKHByb2R1Y3RvcywgcSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdHJvID0gcHJvZHVjdG9zLmZpbHRlcihwcm9kdWN0byA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdG8ubm9tYnJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0by5kZXNjcmlwY2lvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHEpXHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIHNldEZpbHRyYXIoZmlsdHJvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWx0cmFyRGF0b3MocHJvZHVjdG9zLCBxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW3EsIHByb2R1Y3Rvc10pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9kdWN0b3MsXHJcbiAgICAgICAgZmlsdHJhclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VQcm9kdWN0b3NCdXNxdWVkYTtcclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
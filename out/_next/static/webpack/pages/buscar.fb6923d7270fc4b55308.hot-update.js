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
    if (q) {
      var obtenerProductos = function obtenerProductos() {
        // firebase.db.collection('productos').orderBy(orden, 'desc').onSnapshot(manejarSnapShot)
        firebase.db.collection('productos').orderBy(orden, 'desc').startAt("".concat(q)).endAt("".concat(q, " \uF8FF")).onSnapshot(manejarSnapShot);
      };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUHJvZHVjdG9zQnVzcXVlZGEuanN4Il0sIm5hbWVzIjpbInVzZVByb2R1Y3Rvc0J1c3F1ZWRhIiwib3JkZW4iLCJxIiwidXNlU3RhdGUiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJmaWx0cmFyIiwic2V0RmlsdHJhciIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0b3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwic3RhcnRBdCIsImVuZEF0Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwU2hvdCIsInNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsImZpbHRyYXJEYXRvcyIsImZpbHRybyIsImZpbHRlciIsInByb2R1Y3RvIiwibm9tYnJlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImRlc2NyaXBjaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUFBOztBQUFBLGtCQUVMQyxzREFBUSxDQUFDLEVBQUQsQ0FGSDtBQUFBLE1BRWhDQyxTQUZnQztBQUFBLE1BRXJCQyxZQUZxQjs7QUFBQSxvQkFHbEJDLHdEQUFVLENBQUNDLHlEQUFELENBSFE7QUFBQSxNQUcvQkMsUUFIK0IsZUFHL0JBLFFBSCtCOztBQUFBLG1CQUlUTCxzREFBUSxDQUFDLEVBQUQsQ0FKQztBQUFBLE1BSWhDTSxPQUpnQztBQUFBLE1BSXZCQyxVQUp1QixrQkFLdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1QsQ0FBSCxFQUNBO0FBQUMsVUFBTVUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzVCO0FBQ0FKLGdCQUFRLENBQUNLLEVBQVQsQ0FBWUMsVUFBWixDQUF1QixXQUF2QixFQUFvQ0MsT0FBcEMsQ0FBNENkLEtBQTVDLEVBQW1ELE1BQW5ELEVBQTJEZSxPQUEzRCxXQUFzRWQsQ0FBdEUsR0FBMkVlLEtBQTNFLFdBQW9GZixDQUFwRixjQUFnR2dCLFVBQWhHLENBQTJHQyxlQUEzRztBQUdILE9BTEE7O0FBTURQLHNCQUFnQjtBQUFJO0FBQ3ZCLEdBVFEsRUFTTixDQUFDVixDQUFELENBVE0sQ0FBVDs7QUFZQSxXQUFTaUIsZUFBVCxDQUF5QkMsUUFBekIsRUFBbUM7QUFDL0IsUUFBTWhCLFNBQVMsR0FBR2dCLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUFDLEdBQUcsRUFBSTtBQUN2QztBQUNJQyxVQUFFLEVBQUVELEdBQUcsQ0FBQ0M7QUFEWixTQUVPRCxHQUFHLENBQUNFLElBQUosRUFGUDtBQUlILEtBTGlCLENBQWxCO0FBTUFwQixnQkFBWSxDQUFDRCxTQUFELENBQVo7QUFDSDs7QUFFRE8seURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVQsQ0FBQyxJQUFJRSxTQUFULEVBQW9CO0FBQUEsVUFHUHNCLFlBSE8sR0FHaEIsU0FBU0EsWUFBVCxDQUFzQnRCLFNBQXRCLEVBQWlDRixDQUFqQyxFQUFvQztBQUNoQyxZQUFNeUIsTUFBTSxHQUFHdkIsU0FBUyxDQUFDd0IsTUFBVixDQUFpQixVQUFBQyxRQUFRO0FBQUEsaUJBQ3BDQSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLFdBQWhCLEdBQThCQyxRQUE5QixDQUF1QzlCLENBQXZDLEtBQ0EyQixRQUFRLENBQUNJLFdBQVQsQ0FBcUJGLFdBQXJCLEdBQW1DQyxRQUFuQyxDQUE0QzlCLENBQTVDLENBRm9DO0FBQUEsU0FBekIsQ0FBZjtBQUlBUSxrQkFBVSxDQUFDaUIsTUFBRCxDQUFWO0FBQ0gsT0FUZTs7QUFVaEJELGtCQUFZLENBQUN0QixTQUFELEVBQVlGLENBQVosQ0FBWjtBQUNIO0FBRUosR0FkUSxFQWNOLENBQUNBLENBQUQsRUFBSUUsU0FBSixDQWRNLENBQVQ7QUFnQkEsU0FBTztBQUNIQSxhQUFTLEVBQVRBLFNBREc7QUFFSEssV0FBTyxFQUFQQTtBQUZHLEdBQVA7QUFJSCxDQXRERDs7R0FBTVQsb0I7O0FBd0RTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idXNjYXIuZmI2OTIzZDcyNzBmYzRiNTUzMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZpcmViYXNlQ29udGV4dCB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbmNvbnN0IHVzZVByb2R1Y3Rvc0J1c3F1ZWRhID0gKG9yZGVuLCBxKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Byb2R1Y3Rvcywgc2V0UHJvZHVjdG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHsgZmlyZWJhc2UgfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KTtcclxuICAgIGNvbnN0IFtmaWx0cmFyLCBzZXRGaWx0cmFyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3Qgb2J0ZW5lclByb2R1Y3RvcyA9ICgpID0+IHtcclxuICAgIC8vICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncHJvZHVjdG9zJykub3JkZXJCeShvcmRlbiwgJ2Rlc2MnKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwU2hvdClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgb2J0ZW5lclByb2R1Y3RvcygpO1xyXG4gICAgLy8gfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYocSlcclxuICAgICAgICB7Y29uc3Qgb2J0ZW5lclByb2R1Y3RvcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncHJvZHVjdG9zJykub3JkZXJCeShvcmRlbiwgJ2Rlc2MnKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwU2hvdClcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncHJvZHVjdG9zJykub3JkZXJCeShvcmRlbiwgJ2Rlc2MnKS5zdGFydEF0KGAke3F9YCkuZW5kQXQoYCR7cX0gXFx1ZjhmZmApLm9uU25hcHNob3QobWFuZWphclNuYXBTaG90KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9idGVuZXJQcm9kdWN0b3MoKTt9XHJcbiAgICB9LCBbcV0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBtYW5lamFyU25hcFNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0b3MgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFByb2R1Y3Rvcyhwcm9kdWN0b3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHEgfHwgcHJvZHVjdG9zKSB7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZmlsdHJhckRhdG9zKHByb2R1Y3RvcywgcSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdHJvID0gcHJvZHVjdG9zLmZpbHRlcihwcm9kdWN0byA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdG8ubm9tYnJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0by5kZXNjcmlwY2lvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHEpXHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIHNldEZpbHRyYXIoZmlsdHJvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWx0cmFyRGF0b3MocHJvZHVjdG9zLCBxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW3EsIHByb2R1Y3Rvc10pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9kdWN0b3MsXHJcbiAgICAgICAgZmlsdHJhclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VQcm9kdWN0b3NCdXNxdWVkYTtcclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
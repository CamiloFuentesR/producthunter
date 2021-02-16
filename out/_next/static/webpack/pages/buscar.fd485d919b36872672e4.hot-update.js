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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUHJvZHVjdG9zQnVzcXVlZGEuanN4Il0sIm5hbWVzIjpbInVzZVByb2R1Y3Rvc0J1c3F1ZWRhIiwib3JkZW4iLCJxIiwidXNlU3RhdGUiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJmaWx0cmFyIiwic2V0RmlsdHJhciIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0b3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwic3RhcnRBdCIsImVuZEF0Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwU2hvdCIsInNuYXBzaG90IiwiY29uc29sZSIsImxvZyIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsImRhdGEiLCJmaWx0cmFyRGF0b3MiLCJmaWx0cm8iLCJmaWx0ZXIiLCJwcm9kdWN0byIsIm5vbWJyZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkZXNjcmlwY2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFBQTs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxFQUFELENBRkg7QUFBQSxNQUVoQ0MsU0FGZ0M7QUFBQSxNQUVyQkMsWUFGcUI7O0FBQUEsb0JBR2xCQyx3REFBVSxDQUFDQyx5REFBRCxDQUhRO0FBQUEsTUFHL0JDLFFBSCtCLGVBRy9CQSxRQUgrQjs7QUFBQSxtQkFJVEwsc0RBQVEsQ0FBQyxFQUFELENBSkM7QUFBQSxNQUloQ00sT0FKZ0M7QUFBQSxNQUl2QkMsVUFKdUIsa0JBS3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdULENBQUgsRUFDQTtBQUFBLFVBRWFVLGdCQUZiLEdBRUksU0FBU0EsZ0JBQVQsR0FBK0I7QUFDL0I7QUFDQUosZ0JBQVEsQ0FBQ0ssRUFBVCxDQUFZQyxVQUFaLENBQXVCLFdBQXZCLEVBQW9DQyxPQUFwQyxDQUE0Q2QsS0FBNUMsRUFBbUQsTUFBbkQsRUFBMkRlLE9BQTNELFdBQXNFZCxDQUF0RSxHQUEyRWUsS0FBM0UsV0FBb0ZmLENBQXBGLGNBQWdHZ0IsVUFBaEcsQ0FBMkdDLGVBQTNHO0FBRUgsT0FORDs7QUFPQVAsc0JBQWdCO0FBQUk7QUFDdkIsR0FWUSxFQVVOLENBQUNWLENBQUQsQ0FWTSxDQUFUOztBQWFBLFdBQVNpQixlQUFULENBQXlCQyxRQUF6QixFQUFtQztBQUMvQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxRQUFNaEIsU0FBUyxHQUFHZ0IsUUFBUSxDQUFDRyxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsR0FBRyxFQUFJO0FBQ3ZDO0FBQ0lDLFVBQUUsRUFBRUQsR0FBRyxDQUFDQztBQURaLFNBRU9ELEdBQUcsQ0FBQ0UsSUFBSixFQUZQO0FBSUgsS0FMaUIsQ0FBbEI7QUFNQXRCLGdCQUFZLENBQUNELFNBQUQsQ0FBWjtBQUNIOztBQUVETyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJVCxDQUFDLElBQUlFLFNBQVQsRUFBb0I7QUFBQSxVQUdQd0IsWUFITyxHQUdoQixTQUFTQSxZQUFULENBQXNCeEIsU0FBdEIsRUFBaUNGLENBQWpDLEVBQW9DO0FBQ2hDLFlBQU0yQixNQUFNLEdBQUd6QixTQUFTLENBQUMwQixNQUFWLENBQWlCLFVBQUFDLFFBQVE7QUFBQSxpQkFDcENBLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsV0FBaEIsR0FBOEJDLFFBQTlCLENBQXVDaEMsQ0FBdkMsS0FDQTZCLFFBQVEsQ0FBQ0ksV0FBVCxDQUFxQkYsV0FBckIsR0FBbUNDLFFBQW5DLENBQTRDaEMsQ0FBNUMsQ0FGb0M7QUFBQSxTQUF6QixDQUFmO0FBSUFRLGtCQUFVLENBQUNtQixNQUFELENBQVY7QUFDSCxPQVRlOztBQVVoQkQsa0JBQVksQ0FBQ3hCLFNBQUQsRUFBWUYsQ0FBWixDQUFaO0FBQ0g7QUFFSixHQWRRLEVBY04sQ0FBQ0EsQ0FBRCxFQUFJRSxTQUFKLENBZE0sQ0FBVDtBQWdCQSxTQUFPO0FBQ0hBLGFBQVMsRUFBVEEsU0FERztBQUVISyxXQUFPLEVBQVBBO0FBRkcsR0FBUDtBQUlILENBeEREOztHQUFNVCxvQjs7QUEwRFNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1c2Nhci5mZDQ4NWQ5MTliMzY4NzI2NzJlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuY29uc3QgdXNlUHJvZHVjdG9zQnVzcXVlZGEgPSAob3JkZW4sIHEpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcHJvZHVjdG9zLCBzZXRQcm9kdWN0b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgeyBmaXJlYmFzZSB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG4gICAgY29uc3QgW2ZpbHRyYXIsIHNldEZpbHRyYXJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9kdWN0b3MnKS5vcmRlckJ5KG9yZGVuLCAnZGVzYycpLm9uU25hcHNob3QobWFuZWphclNuYXBTaG90KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBvYnRlbmVyUHJvZHVjdG9zKCk7XHJcbiAgICAvLyB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9idGVuZXJQcm9kdWN0b3MgICgpICB7XHJcbiAgICAgICAgICAgIC8vIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLm9yZGVyQnkob3JkZW4sICdkZXNjJykub25TbmFwc2hvdChtYW5lamFyU25hcFNob3QpXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLm9yZGVyQnkob3JkZW4sICdkZXNjJykuc3RhcnRBdChgJHtxfWApLmVuZEF0KGAke3F9IFxcdWY4ZmZgKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwU2hvdClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9idGVuZXJQcm9kdWN0b3MoKTt9XHJcbiAgICB9LCBbcV0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBtYW5lamFyU25hcFNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzbmFwc2hvdCk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdG9zID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRQcm9kdWN0b3MocHJvZHVjdG9zKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChxIHx8IHByb2R1Y3Rvcykge1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbHRyYXJEYXRvcyhwcm9kdWN0b3MsIHEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRybyA9IHByb2R1Y3Rvcy5maWx0ZXIocHJvZHVjdG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RvLm5vbWJyZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHEpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdG8uZGVzY3JpcGNpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKVxyXG4gICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0cmFyKGZpbHRybyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlsdHJhckRhdG9zKHByb2R1Y3RvcywgcSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtxLCBwcm9kdWN0b3NdKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvZHVjdG9zLFxyXG4gICAgICAgIGZpbHRyYXJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUHJvZHVjdG9zQnVzcXVlZGE7XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
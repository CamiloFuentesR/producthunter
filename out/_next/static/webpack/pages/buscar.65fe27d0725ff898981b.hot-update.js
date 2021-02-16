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
      var obtenerProductos = function obtenerProductos(q) {
        // firebase.db.collection('productos').orderBy(orden, 'desc').onSnapshot(manejarSnapShot)
        firebase.db.collection('productos').orderBy(orden, 'desc').startAt("".concat(q)).endAt("".concat(q, " \uF8FF")).onSnapshot(manejarSnapShot);
      };

      obtenerProductos(q);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUHJvZHVjdG9zQnVzcXVlZGEuanN4Il0sIm5hbWVzIjpbInVzZVByb2R1Y3Rvc0J1c3F1ZWRhIiwib3JkZW4iLCJxIiwidXNlU3RhdGUiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJmaWx0cmFyIiwic2V0RmlsdHJhciIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0b3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwic3RhcnRBdCIsImVuZEF0Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwU2hvdCIsInNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsImZpbHRyYXJEYXRvcyIsImZpbHRybyIsImZpbHRlciIsInByb2R1Y3RvIiwibm9tYnJlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImRlc2NyaXBjaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUFBOztBQUFBLGtCQUVMQyxzREFBUSxDQUFDLEVBQUQsQ0FGSDtBQUFBLE1BRWhDQyxTQUZnQztBQUFBLE1BRXJCQyxZQUZxQjs7QUFBQSxvQkFHbEJDLHdEQUFVLENBQUNDLHlEQUFELENBSFE7QUFBQSxNQUcvQkMsUUFIK0IsZUFHL0JBLFFBSCtCOztBQUFBLG1CQUlUTCxzREFBUSxDQUFDLEVBQUQsQ0FKQztBQUFBLE1BSWhDTSxPQUpnQztBQUFBLE1BSXZCQyxVQUp1QixrQkFLdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1QsQ0FBSCxFQUNBO0FBRUksVUFBTVUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDVixDQUFELEVBQU87QUFDaEM7QUFDQU0sZ0JBQVEsQ0FBQ0ssRUFBVCxDQUFZQyxVQUFaLENBQXVCLFdBQXZCLEVBQW9DQyxPQUFwQyxDQUE0Q2QsS0FBNUMsRUFBbUQsTUFBbkQsRUFBMkRlLE9BQTNELFdBQXNFZCxDQUF0RSxHQUEyRWUsS0FBM0UsV0FBb0ZmLENBQXBGLGNBQWdHZ0IsVUFBaEcsQ0FBMkdDLGVBQTNHO0FBRUgsT0FKRzs7QUFLSlAsc0JBQWdCLENBQUNWLENBQUQsQ0FBaEI7QUFBcUI7QUFDeEIsR0FWUSxFQVVOLENBQUNBLENBQUQsQ0FWTSxDQUFUOztBQWFBLFdBQVNpQixlQUFULENBQXlCQyxRQUF6QixFQUFtQztBQUMvQixRQUFNaEIsU0FBUyxHQUFHZ0IsUUFBUSxDQUFDQyxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsR0FBRyxFQUFJO0FBQ3ZDO0FBQ0lDLFVBQUUsRUFBRUQsR0FBRyxDQUFDQztBQURaLFNBRU9ELEdBQUcsQ0FBQ0UsSUFBSixFQUZQO0FBSUgsS0FMaUIsQ0FBbEI7QUFNQXBCLGdCQUFZLENBQUNELFNBQUQsQ0FBWjtBQUNIOztBQUVETyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJVCxDQUFDLElBQUlFLFNBQVQsRUFBb0I7QUFBQSxVQUdQc0IsWUFITyxHQUdoQixTQUFTQSxZQUFULENBQXNCdEIsU0FBdEIsRUFBaUNGLENBQWpDLEVBQW9DO0FBQ2hDLFlBQU15QixNQUFNLEdBQUd2QixTQUFTLENBQUN3QixNQUFWLENBQWlCLFVBQUFDLFFBQVE7QUFBQSxpQkFDcENBLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsV0FBaEIsR0FBOEJDLFFBQTlCLENBQXVDOUIsQ0FBdkMsS0FDQTJCLFFBQVEsQ0FBQ0ksV0FBVCxDQUFxQkYsV0FBckIsR0FBbUNDLFFBQW5DLENBQTRDOUIsQ0FBNUMsQ0FGb0M7QUFBQSxTQUF6QixDQUFmO0FBSUFRLGtCQUFVLENBQUNpQixNQUFELENBQVY7QUFDSCxPQVRlOztBQVVoQkQsa0JBQVksQ0FBQ3RCLFNBQUQsRUFBWUYsQ0FBWixDQUFaO0FBQ0g7QUFFSixHQWRRLEVBY04sQ0FBQ0EsQ0FBRCxFQUFJRSxTQUFKLENBZE0sQ0FBVDtBQWdCQSxTQUFPO0FBQ0hBLGFBQVMsRUFBVEEsU0FERztBQUVISyxXQUFPLEVBQVBBO0FBRkcsR0FBUDtBQUlILENBdkREOztHQUFNVCxvQjs7QUF5RFNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1c2Nhci42NWZlMjdkMDcyNWZmODk4OTgxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuY29uc3QgdXNlUHJvZHVjdG9zQnVzcXVlZGEgPSAob3JkZW4sIHEpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcHJvZHVjdG9zLCBzZXRQcm9kdWN0b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgeyBmaXJlYmFzZSB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG4gICAgY29uc3QgW2ZpbHRyYXIsIHNldEZpbHRyYXJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9kdWN0b3MnKS5vcmRlckJ5KG9yZGVuLCAnZGVzYycpLm9uU25hcHNob3QobWFuZWphclNuYXBTaG90KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBvYnRlbmVyUHJvZHVjdG9zKCk7XHJcbiAgICAvLyB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG9idGVuZXJQcm9kdWN0b3MgPSAocSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9kdWN0b3MnKS5vcmRlckJ5KG9yZGVuLCAnZGVzYycpLm9uU25hcHNob3QobWFuZWphclNuYXBTaG90KVxyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9kdWN0b3MnKS5vcmRlckJ5KG9yZGVuLCAnZGVzYycpLnN0YXJ0QXQoYCR7cX1gKS5lbmRBdChgJHtxfSBcXHVmOGZmYCkub25TbmFwc2hvdChtYW5lamFyU25hcFNob3QpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBvYnRlbmVyUHJvZHVjdG9zKHEpO31cclxuICAgIH0sIFtxXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG1hbmVqYXJTbmFwU2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RvcyA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0UHJvZHVjdG9zKHByb2R1Y3Rvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocSB8fCBwcm9kdWN0b3MpIHtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBmaWx0cmFyRGF0b3MocHJvZHVjdG9zLCBxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0cm8gPSBwcm9kdWN0b3MuZmlsdGVyKHByb2R1Y3RvID0+IChcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0by5ub21icmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RvLmRlc2NyaXBjaW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSlcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdHJhcihmaWx0cm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbHRyYXJEYXRvcyhwcm9kdWN0b3MsIHEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbcSwgcHJvZHVjdG9zXSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb2R1Y3RvcyxcclxuICAgICAgICBmaWx0cmFyXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVByb2R1Y3Rvc0J1c3F1ZWRhO1xyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
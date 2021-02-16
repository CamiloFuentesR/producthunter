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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      filtrar = _useState2[0],
      setFiltrar = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var obtenerProductos = /*#__PURE__*/function () {
      var _ref = Object(C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return firebase.db.collection('productos').orderBy(orden, 'desc').onSnapshot(manejarSnapShot);

              case 2:
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
  }, []);

  function manejarSnapShot(_x) {
    return _manejarSnapShot.apply(this, arguments);
  }

  function _manejarSnapShot() {
    _manejarSnapShot = Object(C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(snapshot) {
      var productos;
      return C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return snapshot.docs.map(function (doc) {
                return _objectSpread({
                  id: doc.id
                }, doc.data());
              });

            case 2:
              productos = _context2.sent;
              setProductos(productos);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _manejarSnapShot.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (productos) {
      var filtrarDatos = function filtrarDatos(productos, q) {
        var filtro = productos.filter(function (producto) {
          return producto.nombre.toLowerCase().includes(q) || producto.descripcion.toLowerCase().includes(q);
        });
        setFiltrar(filtro);
      };

      filtrarDatos(productos, q);
    }
  }, [productos]);
  return {
    productos: productos,
    filtrar: filtrar
  };
};

_s(useProductosBusqueda, "mSBp5WAclY3nV4/lzgzQ0ngoHsE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUHJvZHVjdG9zQnVzcXVlZGEuanN4Il0sIm5hbWVzIjpbInVzZVByb2R1Y3Rvc0J1c3F1ZWRhIiwib3JkZW4iLCJxIiwidXNlU3RhdGUiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJmaWx0cmFyIiwic2V0RmlsdHJhciIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0b3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwU2hvdCIsInNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsImZpbHRyYXJEYXRvcyIsImZpbHRybyIsImZpbHRlciIsInByb2R1Y3RvIiwibm9tYnJlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImRlc2NyaXBjaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEtBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQUE7O0FBQUEsa0JBRUpDLHNEQUFRLENBQUMsRUFBRCxDQUZKO0FBQUEsTUFFL0JDLFNBRitCO0FBQUEsTUFFcEJDLFlBRm9COztBQUFBLG9CQUduQkMsd0RBQVUsQ0FBQ0MseURBQUQsQ0FIUztBQUFBLE1BRy9CQyxRQUgrQixlQUcvQkEsUUFIK0I7O0FBQUEsbUJBSVJMLHNEQUFRLENBQUMsRUFBRCxDQUpBO0FBQUEsTUFJL0JNLE9BSitCO0FBQUEsTUFJdEJDLFVBSnNCOztBQUt0Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsZ0JBQWdCO0FBQUEsa1hBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ2ZKLFFBQVEsQ0FBQ0ssRUFBVCxDQUFZQyxVQUFaLENBQXVCLFdBQXZCLEVBQW9DQyxPQUFwQyxDQUE0Q2QsS0FBNUMsRUFBa0QsTUFBbEQsRUFBMERlLFVBQTFELENBQXFFQyxlQUFyRSxDQURlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQWhCTCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsT0FBdEI7O0FBR0FBLG9CQUFnQjtBQUNuQixHQUxRLEVBS04sRUFMTSxDQUFUOztBQUxzQyxXQVl2QkssZUFadUI7QUFBQTtBQUFBOztBQUFBO0FBQUEsd1hBWXRDLGtCQUErQkMsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDNEJBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUFDLEdBQUcsRUFBSTtBQUM3QztBQUNJQyxvQkFBRSxFQUFFRCxHQUFHLENBQUNDO0FBRFosbUJBRU9ELEdBQUcsQ0FBQ0UsSUFBSixFQUZQO0FBSUgsZUFMdUIsQ0FENUI7O0FBQUE7QUFDVW5CLHVCQURWO0FBT0lDLDBCQUFZLENBQUNELFNBQUQsQ0FBWjs7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVpzQztBQUFBO0FBQUE7O0FBc0J0Q08seURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1AsU0FBSCxFQUNBO0FBQUEsVUFBVW9CLFlBQVYsR0FBQyxTQUFTQSxZQUFULENBQXNCcEIsU0FBdEIsRUFBZ0NGLENBQWhDLEVBQWtDO0FBQy9CLFlBQU11QixNQUFNLEdBQUdyQixTQUFTLENBQUNzQixNQUFWLENBQWlCLFVBQUFDLFFBQVE7QUFBQSxpQkFDcENBLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsV0FBaEIsR0FBOEJDLFFBQTlCLENBQXVDNUIsQ0FBdkMsS0FDQXlCLFFBQVEsQ0FBQ0ksV0FBVCxDQUFxQkYsV0FBckIsR0FBbUNDLFFBQW5DLENBQTRDNUIsQ0FBNUMsQ0FGb0M7QUFBQSxTQUF6QixDQUFmO0FBSUFRLGtCQUFVLENBQUNlLE1BQUQsQ0FBVjtBQUNILE9BTkQ7O0FBT0FELGtCQUFZLENBQUNwQixTQUFELEVBQVdGLENBQVgsQ0FBWjtBQUNDO0FBRUosR0FaUSxFQVlOLENBQUNFLFNBQUQsQ0FaTSxDQUFUO0FBY0EsU0FBTztBQUNIQSxhQUFTLEVBQVRBLFNBREc7QUFFSEssV0FBTyxFQUFQQTtBQUZHLEdBQVA7QUFJSCxDQXhDRDs7R0FBTVQsb0I7O0FBMENTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idXNjYXIuOTJiMzViZWQ1ZDM0N2ZhM2Y0OTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZpcmViYXNlQ29udGV4dCB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbmNvbnN0IHVzZVByb2R1Y3Rvc0J1c3F1ZWRhID0gKG9yZGVuLHEpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcHJvZHVjdG9zLCBzZXRQcm9kdWN0b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qge2ZpcmViYXNlfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KTtcclxuICAgIGNvbnN0IFtmaWx0cmFyLCBzZXRGaWx0cmFyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lclByb2R1Y3RvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncHJvZHVjdG9zJykub3JkZXJCeShvcmRlbiwnZGVzYycpLm9uU25hcHNob3QobWFuZWphclNuYXBTaG90KVxyXG4gICAgICAgIH1cclxuICAgICAgICBvYnRlbmVyUHJvZHVjdG9zKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIG1hbmVqYXJTbmFwU2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RvcyA9YXdhaXQgIHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRQcm9kdWN0b3MocHJvZHVjdG9zKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHByb2R1Y3RvcylcclxuICAgICAgICB7ZnVuY3Rpb24gZmlsdHJhckRhdG9zKHByb2R1Y3RvcyxxKXtcclxuICAgICAgICAgICAgY29uc3QgZmlsdHJvID0gcHJvZHVjdG9zLmZpbHRlcihwcm9kdWN0bz0+KFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdG8ubm9tYnJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSkgfHxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RvLmRlc2NyaXBjaW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSlcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIHNldEZpbHRyYXIoZmlsdHJvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlsdHJhckRhdG9zKHByb2R1Y3RvcyxxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW3Byb2R1Y3Rvc10pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9kdWN0b3MsXHJcbiAgICAgICAgZmlsdHJhclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VQcm9kdWN0b3NCdXNxdWVkYTtcclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
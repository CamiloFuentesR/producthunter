webpackHotUpdate_N_E("pages/buscar",{

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./pages/buscar.jsx":
/*!**************************!*\
  !*** ./pages/buscar.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layouts/Layout */ "./components/layouts/Layout.jsx");
/* harmony import */ var _hooks_useProductos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useProductos */ "./hooks/useProductos.jsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");



var _jsxFileName = "C:\\Users\\lokom\\Desktop\\camilo\\react-estudio\\pryectos-de-juan\\producthuntnext\\pages\\buscar.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                            text-align: center;\n                        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Buscar = function Buscar() {
  _s();

  //recibiendo el parametro de busqueda desde la url
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var q = router.query.q; //todos los productos

  var _useProductos = Object(_hooks_useProductos__WEBPACK_IMPORTED_MODULE_5__["default"])('creado'),
      productos = _useProductos.productos;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      resultado = _useState[0],
      setResultado = _useState[1];

  console.log(productos);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //transformar toda la busqueda en minuscula
    var busqueda = q.toLowerCase();
    var filtro = productos.filter(function (producto) {
      return producto.nombre.toLowerCase().includes(busqueda) || producto.descripcion.toLowerCase().includes(busqueda);
    });
    setResultado(filtro);
  }, [q, productos]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "listado-productos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, productos.length > 0 ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("ul", {
    className: "bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, productos.map(function (producto) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(DetallesProducto, Object(C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      key: producto.id
    }, producto, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    }));
  })) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
    css: css(_templateObject()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, "No hay productos para mostrar")))));
};

_s(Buscar, "un6k+sK30Smlc1/MQZGBjQpEFCo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], _hooks_useProductos__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = Buscar;
/* harmony default export */ __webpack_exports__["default"] = (Buscar);

var _c;

$RefreshReg$(_c, "Buscar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVzY2FyLmpzeCJdLCJuYW1lcyI6WyJCdXNjYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxIiwicXVlcnkiLCJ1c2VQcm9kdWN0b3MiLCJwcm9kdWN0b3MiLCJ1c2VTdGF0ZSIsInJlc3VsdGFkbyIsInNldFJlc3VsdGFkbyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJidXNxdWVkYSIsInRvTG93ZXJDYXNlIiwiZmlsdHJvIiwiZmlsdGVyIiwicHJvZHVjdG8iLCJub21icmUiLCJpbmNsdWRlcyIsImRlc2NyaXBjaW9uIiwibGVuZ3RoIiwibWFwIiwiaWQiLCJjc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFHakI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSmlCLE1BS0ZDLENBTEUsR0FLSUYsTUFMSixDQUtWRyxLQUxVLENBS0ZELENBTEUsRUFPakI7O0FBUGlCLHNCQVFJRSxtRUFBWSxDQUFDLFFBQUQsQ0FSaEI7QUFBQSxNQVFUQyxTQVJTLGlCQVFUQSxTQVJTOztBQUFBLGtCQVNpQkMsc0RBQVEsQ0FBQyxFQUFELENBVHpCO0FBQUEsTUFTVkMsU0FUVTtBQUFBLE1BU0NDLFlBVEQ7O0FBV2pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsU0FBWjtBQUVBTSx5REFBUyxDQUFDLFlBQU07QUFDWjtBQUNBLFFBQU1DLFFBQVEsR0FBR1YsQ0FBQyxDQUFDVyxXQUFGLEVBQWpCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHVCxTQUFTLENBQUNVLE1BQVYsQ0FBaUIsVUFBQUMsUUFBUTtBQUFBLGFBQ3BDQSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JKLFdBQWhCLEdBQThCSyxRQUE5QixDQUF1Q04sUUFBdkMsS0FDQUksUUFBUSxDQUFDRyxXQUFULENBQXFCTixXQUFyQixHQUFtQ0ssUUFBbkMsQ0FBNENOLFFBQTVDLENBRm9DO0FBQUEsS0FBekIsQ0FBZjtBQU1BSixnQkFBWSxDQUFDTSxNQUFELENBQVo7QUFDSCxHQVZRLEVBVU4sQ0FBQ1osQ0FBRCxFQUFJRyxTQUFKLENBVk0sQ0FBVDtBQVlBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNZLDJEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSjtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFBLFNBQVMsQ0FBQ2UsTUFBVixHQUFtQixDQUFuQixHQUVKO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLZixTQUFTLENBQUNnQixHQUFWLENBQWMsVUFBQUwsUUFBUTtBQUFBLFdBQ25CLDJEQUFDLGdCQUFEO0FBQ0ksU0FBRyxFQUFFQSxRQUFRLENBQUNNO0FBRGxCLE9BRVFOLFFBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURtQjtBQUFBLEdBQXRCLENBREwsQ0FGSSxHQVdKO0FBQUcsT0FBRyxFQUFFTyxHQUFGLG1CQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBYkosQ0FESixDQURJLENBRFosQ0FESjtBQTBCSCxDQW5ERDs7R0FBTXhCLE07VUFJYUUscUQsRUFJTUcsMkQ7OztLQVJuQkwsTTtBQW9EU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVzY2FyLjU4NjNkY2EzYTdmNGRhMmU2ZjMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpXG4gICAgfVxuICB9KSk7XG59IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvTGF5b3V0JztcclxuaW1wb3J0IHVzZVByb2R1Y3RvcyBmcm9tICcuLi9ob29rcy91c2VQcm9kdWN0b3MnO1xyXG5cclxuY29uc3QgQnVzY2FyID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICAvL3JlY2liaWVuZG8gZWwgcGFyYW1ldHJvIGRlIGJ1c3F1ZWRhIGRlc2RlIGxhIHVybFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7cXVlcnk6IHtxfX0gPSByb3V0ZXI7XHJcbiAgICBcclxuICAgIC8vdG9kb3MgbG9zIHByb2R1Y3Rvc1xyXG4gICAgY29uc3QgeyBwcm9kdWN0b3N9ID0gdXNlUHJvZHVjdG9zKCdjcmVhZG8nKTtcclxuICAgIGNvbnN0IFtyZXN1bHRhZG8sIHNldFJlc3VsdGFkb10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdG9zKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy90cmFuc2Zvcm1hciB0b2RhIGxhIGJ1c3F1ZWRhIGVuIG1pbnVzY3VsYVxyXG4gICAgICAgIGNvbnN0IGJ1c3F1ZWRhID0gcS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRybyA9IHByb2R1Y3Rvcy5maWx0ZXIocHJvZHVjdG89PiAoXHJcbiAgICAgICAgICAgIHByb2R1Y3RvLm5vbWJyZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c3F1ZWRhKSB8fFxyXG4gICAgICAgICAgICBwcm9kdWN0by5kZXNjcmlwY2lvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c3F1ZWRhKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIHNldFJlc3VsdGFkbyhmaWx0cm8pO1xyXG4gICAgfSwgW3EsIHByb2R1Y3Rvc10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RhZG8tcHJvZHVjdG9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5lZG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rvcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3Rvcy5tYXAocHJvZHVjdG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhbGxlc1Byb2R1Y3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdG8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY3NzPXtjc3NgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9Pk5vIGhheSBwcm9kdWN0b3MgcGFyYSBtb3N0cmFyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1c2NhcjsgIl0sInNvdXJjZVJvb3QiOiIifQ==
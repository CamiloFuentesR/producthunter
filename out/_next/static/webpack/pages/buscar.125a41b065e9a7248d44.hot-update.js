webpackHotUpdate_N_E("pages/buscar",{

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
/* harmony import */ var _components_layouts_DetallesProducto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layouts/DetallesProducto */ "./components/layouts/DetallesProducto.jsx");
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layouts/Layout */ "./components/layouts/Layout.jsx");
/* harmony import */ var _hooks_useProductos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useProductos */ "./hooks/useProductos.jsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");



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

  var _useProductos = Object(_hooks_useProductos__WEBPACK_IMPORTED_MODULE_6__["default"])('creado'),
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
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    className: "listado-productos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, productos.length > 0 ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("ul", {
    className: "bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, resultado.map(function (producto) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_layouts_DetallesProducto__WEBPACK_IMPORTED_MODULE_4__["default"], Object(C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      key: producto.id
    }, producto, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 33
      }
    }));
  })) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {
    css: css(_templateObject()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, "No hay productos para mostrar")))));
};

_s(Buscar, "un6k+sK30Smlc1/MQZGBjQpEFCo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], _hooks_useProductos__WEBPACK_IMPORTED_MODULE_6__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVzY2FyLmpzeCJdLCJuYW1lcyI6WyJCdXNjYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxIiwicXVlcnkiLCJ1c2VQcm9kdWN0b3MiLCJwcm9kdWN0b3MiLCJ1c2VTdGF0ZSIsInJlc3VsdGFkbyIsInNldFJlc3VsdGFkbyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJidXNxdWVkYSIsInRvTG93ZXJDYXNlIiwiZmlsdHJvIiwiZmlsdGVyIiwicHJvZHVjdG8iLCJub21icmUiLCJpbmNsdWRlcyIsImRlc2NyaXBjaW9uIiwibGVuZ3RoIiwibWFwIiwiaWQiLCJjc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUdqQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFKaUIsTUFLRkMsQ0FMRSxHQUtJRixNQUxKLENBS1ZHLEtBTFUsQ0FLRkQsQ0FMRSxFQU9qQjs7QUFQaUIsc0JBUUlFLG1FQUFZLENBQUMsUUFBRCxDQVJoQjtBQUFBLE1BUVRDLFNBUlMsaUJBUVRBLFNBUlM7O0FBQUEsa0JBU2lCQyxzREFBUSxDQUFDLEVBQUQsQ0FUekI7QUFBQSxNQVNWQyxTQVRVO0FBQUEsTUFTQ0MsWUFURDs7QUFXakJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxTQUFaO0FBRUFNLHlEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0EsUUFBTUMsUUFBUSxHQUFHVixDQUFDLENBQUNXLFdBQUYsRUFBakI7QUFDQSxRQUFNQyxNQUFNLEdBQUdULFNBQVMsQ0FBQ1UsTUFBVixDQUFpQixVQUFBQyxRQUFRO0FBQUEsYUFDcENBLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkosV0FBaEIsR0FBOEJLLFFBQTlCLENBQXVDTixRQUF2QyxLQUNBSSxRQUFRLENBQUNHLFdBQVQsQ0FBcUJOLFdBQXJCLEdBQW1DSyxRQUFuQyxDQUE0Q04sUUFBNUMsQ0FGb0M7QUFBQSxLQUF6QixDQUFmO0FBTUFKLGdCQUFZLENBQUNNLE1BQUQsQ0FBWjtBQUNILEdBVlEsRUFVTixDQUFDWixDQUFELEVBQUlHLFNBQUosQ0FWTSxDQUFUO0FBWUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1ksMkRBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNKO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUUEsU0FBUyxDQUFDZSxNQUFWLEdBQW1CLENBQW5CLEdBRUo7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tiLFNBQVMsQ0FBQ2MsR0FBVixDQUFjLFVBQUFMLFFBQVE7QUFBQSxXQUNuQiwyREFBQyw0RUFBRDtBQUNJLFNBQUcsRUFBRUEsUUFBUSxDQUFDTTtBQURsQixPQUVRTixRQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEbUI7QUFBQSxHQUF0QixDQURMLENBRkksR0FXSjtBQUFHLE9BQUcsRUFBRU8sR0FBRixtQkFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQWJKLENBREosQ0FESSxDQURaLENBREo7QUEwQkgsQ0FuREQ7O0dBQU14QixNO1VBSWFFLHFELEVBSU1HLDJEOzs7S0FSbkJMLE07QUFvRFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1c2Nhci4xMjVhNDFiMDY1ZTlhNzI0OGQ0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERldGFsbGVzUHJvZHVjdG8gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL0RldGFsbGVzUHJvZHVjdG8nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXQnO1xyXG5pbXBvcnQgdXNlUHJvZHVjdG9zIGZyb20gJy4uL2hvb2tzL3VzZVByb2R1Y3Rvcyc7XHJcblxyXG5jb25zdCBCdXNjYXIgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgIC8vcmVjaWJpZW5kbyBlbCBwYXJhbWV0cm8gZGUgYnVzcXVlZGEgZGVzZGUgbGEgdXJsXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtxdWVyeToge3F9fSA9IHJvdXRlcjtcclxuICAgIFxyXG4gICAgLy90b2RvcyBsb3MgcHJvZHVjdG9zXHJcbiAgICBjb25zdCB7IHByb2R1Y3Rvc30gPSB1c2VQcm9kdWN0b3MoJ2NyZWFkbycpO1xyXG4gICAgY29uc3QgW3Jlc3VsdGFkbywgc2V0UmVzdWx0YWRvXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0b3MpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL3RyYW5zZm9ybWFyIHRvZGEgbGEgYnVzcXVlZGEgZW4gbWludXNjdWxhXHJcbiAgICAgICAgY29uc3QgYnVzcXVlZGEgPSBxLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgZmlsdHJvID0gcHJvZHVjdG9zLmZpbHRlcihwcm9kdWN0bz0+IChcclxuICAgICAgICAgICAgcHJvZHVjdG8ubm9tYnJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzcXVlZGEpIHx8XHJcbiAgICAgICAgICAgIHByb2R1Y3RvLmRlc2NyaXBjaW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzcXVlZGEpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApKTtcclxuXHJcbiAgICAgICAgc2V0UmVzdWx0YWRvKGZpbHRybyk7XHJcbiAgICB9LCBbcSwgcHJvZHVjdG9zXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGFkby1wcm9kdWN0b3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdG9zLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0YWRvLm1hcChwcm9kdWN0byA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERldGFsbGVzUHJvZHVjdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0by5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb2R1Y3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjc3M9e2Nzc2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH0+Tm8gaGF5IHByb2R1Y3RvcyBwYXJhIG1vc3RyYXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnVzY2FyOyAiXSwic291cmNlUm9vdCI6IiJ9
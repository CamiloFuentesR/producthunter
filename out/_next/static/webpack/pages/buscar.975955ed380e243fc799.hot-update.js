webpackHotUpdate_N_E("pages/buscar",{

/***/ "./pages/buscar.jsx":
/*!**************************!*\
  !*** ./pages/buscar.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_DetallesProducto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/DetallesProducto */ "./components/layouts/DetallesProducto.jsx");
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layouts/Layout */ "./components/layouts/Layout.jsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _hooks_useProductosBusqueda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useProductosBusqueda */ "./hooks/useProductosBusqueda.jsx");


var _jsxFileName = "C:\\Users\\lokom\\Desktop\\camilo\\react-estudio\\pryectos-de-juan\\producthuntnext\\pages\\buscar.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









var _ref = false ? undefined : {
  name: "lpkpof-Buscar",
  styles: "text-align:center;label:Buscar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9rb21cXERlc2t0b3BcXGNhbWlsb1xccmVhY3QtZXN0dWRpb1xccHJ5ZWN0b3MtZGUtanVhblxccHJvZHVjdGh1bnRuZXh0XFxwYWdlc1xcYnVzY2FyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRG1DIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbG9rb21cXERlc2t0b3BcXGNhbWlsb1xccmVhY3QtZXN0dWRpb1xccHJ5ZWN0b3MtZGUtanVhblxccHJvZHVjdGh1bnRuZXh0XFxwYWdlc1xcYnVzY2FyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBEZXRhbGxlc1Byb2R1Y3RvIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9EZXRhbGxlc1Byb2R1Y3RvJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvTGF5b3V0JztcclxuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHVzZVByb2R1Y3Rvc0J1c3F1ZWRhIGZyb20gJy4uL2hvb2tzL3VzZVByb2R1Y3Rvc0J1c3F1ZWRhJztcclxuXHJcbmNvbnN0IEJ1c2NhciA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgLy9yZWNpYmllbmRvIGVsIHBhcmFtZXRybyBkZSBidXNxdWVkYSBkZXNkZSBsYSB1cmxcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge3F1ZXJ5OiB7cX19ID0gcm91dGVyO1xyXG4gICAgXHJcbiAgICAvL3RvZG9zIGxvcyBwcm9kdWN0b3NcclxuICAgIGNvbnN0IHsgcHJvZHVjdG9zLGZpbHRyYXJ9ID0gdXNlUHJvZHVjdG9zQnVzcXVlZGEoJ3ZvdG9zJyxxKTtcclxuICAgIGNvbnN0IFtyZXN1bHRhZG8sIHNldFJlc3VsdGFkb10gPSB1c2VTdGF0ZShbXSk7XHJcbiBcclxuICAgIGNvbnNvbGUubG9nKGZpbHRyYXIpXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICAvL3RyYW5zZm9ybWFyIHRvZGEgbGEgYnVzcXVlZGEgZW4gbWludXNjdWxhXHJcbiAgICAvLyAgICAgaWYocSlcclxuICAgIC8vICAgICB7Y29uc3QgYnVzcXVlZGEgPSBxLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAvLyAgICAgY29uc3QgZmlsdHJvID0gcHJvZHVjdG9zLmZpbHRlcihwcm9kdWN0bz0+IChcclxuICAgIC8vICAgICAgICAgcHJvZHVjdG8ubm9tYnJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzcXVlZGEpIHx8XHJcbiAgICAvLyAgICAgICAgIHByb2R1Y3RvLmRlc2NyaXBjaW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzcXVlZGEpXHJcbiAgICAvLyAgICAgICAgICkpO1xyXG5cclxuICAgIC8vICAgICBzZXRSZXN1bHRhZG8oZmlsdHJvKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LCBbcSwgcHJvZHVjdG9zXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vdHJhbnNmb3JtYXIgdG9kYSBsYSBidXNxdWVkYSBlbiBtaW51c2N1bGFcclxuICAgICAgICBcclxuICAgICAgICBpZihxKVxyXG4gICAgICAgIHtzZXRSZXN1bHRhZG8oZmlsdHJhcik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0YWRvKX1cclxuICAgIH0sIFtxLGZpbHRyYXJdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0YWRvLXByb2R1Y3Rvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0b3MubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHRhZG8ubWFwKHByb2R1Y3RvID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGV0YWxsZXNQcm9kdWN0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3RvLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvZHVjdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfT5ObyBoYXkgcHJvZHVjdG9zIHBhcmEgbW9zdHJhcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdXNjYXI7ICJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Buscar = function Buscar() {
  _s();

  //recibiendo el parametro de busqueda desde la url
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var q = router.query.q; //todos los productos

  var _useProductosBusqueda = Object(_hooks_useProductosBusqueda__WEBPACK_IMPORTED_MODULE_6__["default"])('votos', q),
      productos = _useProductosBusqueda.productos,
      filtrar = _useProductosBusqueda.filtrar;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      resultado = _useState[0],
      setResultado = _useState[1];

  console.log(filtrar); // useEffect(() => {
  //     //transformar toda la busqueda en minuscula
  //     if(q)
  //     {const busqueda = q.toLowerCase();
  //     const filtro = productos.filter(producto=> (
  //         producto.nombre.toLowerCase().includes(busqueda) ||
  //         producto.descripcion.toLowerCase().includes(busqueda)
  //         ));
  //     setResultado(filtro);
  //     }
  // }, [q, productos])

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //transformar toda la busqueda en minuscula
    if (q) {
      setResultado(filtrar);
      console.log(resultado);
    }
  }, [q, filtrar]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "listado-productos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, productos.length > 0 ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    className: "bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, resultado.map(function (producto) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_layouts_DetallesProducto__WEBPACK_IMPORTED_MODULE_3__["default"], Object(C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: producto.id
    }, producto, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 33
      }
    }));
  })) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    css: _ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "No hay productos para mostrar")))));
};

_s(Buscar, "73SCpcOg2+3aQCzh2YqKR3z9rVY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], _hooks_useProductosBusqueda__WEBPACK_IMPORTED_MODULE_6__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVzY2FyLmpzeCJdLCJuYW1lcyI6WyJCdXNjYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxIiwicXVlcnkiLCJ1c2VQcm9kdWN0b3NCdXNxdWVkYSIsInByb2R1Y3RvcyIsImZpbHRyYXIiLCJ1c2VTdGF0ZSIsInJlc3VsdGFkbyIsInNldFJlc3VsdGFkbyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0byIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUdqQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFKaUIsTUFLRkMsQ0FMRSxHQUtJRixNQUxKLENBS1ZHLEtBTFUsQ0FLRkQsQ0FMRSxFQU9qQjs7QUFQaUIsOEJBUVlFLDJFQUFvQixDQUFDLE9BQUQsRUFBU0YsQ0FBVCxDQVJoQztBQUFBLE1BUVRHLFNBUlMseUJBUVRBLFNBUlM7QUFBQSxNQVFDQyxPQVJELHlCQVFDQSxPQVJEOztBQUFBLGtCQVNpQkMsc0RBQVEsQ0FBQyxFQUFELENBVHpCO0FBQUEsTUFTVkMsU0FUVTtBQUFBLE1BU0NDLFlBVEQ7O0FBV2pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsT0FBWixFQVhpQixDQWFqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBTSx5REFBUyxDQUFDLFlBQU07QUFDWjtBQUVBLFFBQUdWLENBQUgsRUFDQTtBQUFDTyxrQkFBWSxDQUFDSCxPQUFELENBQVo7QUFDREksYUFBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7QUFBdUI7QUFDMUIsR0FOUSxFQU1OLENBQUNOLENBQUQsRUFBR0ksT0FBSCxDQU5NLENBQVQ7QUFRQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDWSwyREFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0o7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRRCxTQUFTLENBQUNRLE1BQVYsR0FBbUIsQ0FBbkIsR0FFSjtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0wsU0FBUyxDQUFDTSxHQUFWLENBQWMsVUFBQUMsUUFBUTtBQUFBLFdBQ25CLDJEQUFDLDRFQUFEO0FBQ0ksU0FBRyxFQUFFQSxRQUFRLENBQUNDO0FBRGxCLE9BRVFELFFBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURtQjtBQUFBLEdBQXRCLENBREwsQ0FGSSxHQVdKO0FBQUcsT0FBRyxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBYkosQ0FESixDQURJLENBRFosQ0FESjtBQTBCSCxDQTVERDs7R0FBTWhCLE07VUFJYUUscUQsRUFJY0csbUU7OztLQVIzQkwsTTtBQTZEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVzY2FyLjk3NTk1NWVkMzgwZTI0M2ZjNzk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRGV0YWxsZXNQcm9kdWN0byBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvRGV0YWxsZXNQcm9kdWN0byc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL0xheW91dCc7XHJcbmltcG9ydCB7Y3NzfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB1c2VQcm9kdWN0b3NCdXNxdWVkYSBmcm9tICcuLi9ob29rcy91c2VQcm9kdWN0b3NCdXNxdWVkYSc7XHJcblxyXG5jb25zdCBCdXNjYXIgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgIC8vcmVjaWJpZW5kbyBlbCBwYXJhbWV0cm8gZGUgYnVzcXVlZGEgZGVzZGUgbGEgdXJsXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtxdWVyeToge3F9fSA9IHJvdXRlcjtcclxuICAgIFxyXG4gICAgLy90b2RvcyBsb3MgcHJvZHVjdG9zXHJcbiAgICBjb25zdCB7IHByb2R1Y3RvcyxmaWx0cmFyfSA9IHVzZVByb2R1Y3Rvc0J1c3F1ZWRhKCd2b3RvcycscSk7XHJcbiAgICBjb25zdCBbcmVzdWx0YWRvLCBzZXRSZXN1bHRhZG9dID0gdXNlU3RhdGUoW10pO1xyXG4gXHJcbiAgICBjb25zb2xlLmxvZyhmaWx0cmFyKVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgLy90cmFuc2Zvcm1hciB0b2RhIGxhIGJ1c3F1ZWRhIGVuIG1pbnVzY3VsYVxyXG4gICAgLy8gICAgIGlmKHEpXHJcbiAgICAvLyAgICAge2NvbnN0IGJ1c3F1ZWRhID0gcS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgLy8gICAgIGNvbnN0IGZpbHRybyA9IHByb2R1Y3Rvcy5maWx0ZXIocHJvZHVjdG89PiAoXHJcbiAgICAvLyAgICAgICAgIHByb2R1Y3RvLm5vbWJyZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c3F1ZWRhKSB8fFxyXG4gICAgLy8gICAgICAgICBwcm9kdWN0by5kZXNjcmlwY2lvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c3F1ZWRhKVxyXG4gICAgLy8gICAgICAgICApKTtcclxuXHJcbiAgICAvLyAgICAgc2V0UmVzdWx0YWRvKGZpbHRybyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSwgW3EsIHByb2R1Y3Rvc10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL3RyYW5zZm9ybWFyIHRvZGEgbGEgYnVzcXVlZGEgZW4gbWludXNjdWxhXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocSlcclxuICAgICAgICB7c2V0UmVzdWx0YWRvKGZpbHRyYXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdGFkbyl9XHJcbiAgICB9LCBbcSxmaWx0cmFyXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGFkby1wcm9kdWN0b3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdG9zLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0YWRvLm1hcChwcm9kdWN0byA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERldGFsbGVzUHJvZHVjdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0by5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb2R1Y3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjc3M9e2Nzc2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH0+Tm8gaGF5IHByb2R1Y3RvcyBwYXJhIG1vc3RyYXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnVzY2FyOyAiXSwic291cmNlUm9vdCI6IiJ9
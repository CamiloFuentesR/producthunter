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
/* harmony import */ var _hooks_useProductos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useProductos */ "./hooks/useProductos.jsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _hooks_useProductosBusqueda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useProductosBusqueda */ "./hooks/useProductosBusqueda.jsx");


var _jsxFileName = "C:\\Users\\lokom\\Desktop\\camilo\\react-estudio\\pryectos-de-juan\\producthuntnext\\pages\\buscar.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










var _ref = false ? undefined : {
  name: "lpkpof-Buscar",
  styles: "text-align:center;label:Buscar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9rb21cXERlc2t0b3BcXGNhbWlsb1xccmVhY3QtZXN0dWRpb1xccHJ5ZWN0b3MtZGUtanVhblxccHJvZHVjdGh1bnRuZXh0XFxwYWdlc1xcYnVzY2FyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RG1DIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbG9rb21cXERlc2t0b3BcXGNhbWlsb1xccmVhY3QtZXN0dWRpb1xccHJ5ZWN0b3MtZGUtanVhblxccHJvZHVjdGh1bnRuZXh0XFxwYWdlc1xcYnVzY2FyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBEZXRhbGxlc1Byb2R1Y3RvIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9EZXRhbGxlc1Byb2R1Y3RvJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvTGF5b3V0JztcclxuaW1wb3J0IHVzZVByb2R1Y3RvcyBmcm9tICcuLi9ob29rcy91c2VQcm9kdWN0b3MnO1xyXG5pbXBvcnQge2Nzc30gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgdXNlUHJvZHVjdG9zQnVzcXVlZGEgZnJvbSAnLi4vaG9va3MvdXNlUHJvZHVjdG9zQnVzcXVlZGEnO1xyXG5cclxuY29uc3QgQnVzY2FyID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICAvL3JlY2liaWVuZG8gZWwgcGFyYW1ldHJvIGRlIGJ1c3F1ZWRhIGRlc2RlIGxhIHVybFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7cXVlcnk6IHtxfX0gPSByb3V0ZXI7XHJcbiAgICBcclxuICAgIC8vdG9kb3MgbG9zIHByb2R1Y3Rvc1xyXG4gICAgLy8gY29uc3QgeyBwcm9kdWN0b3N9ID0gdXNlUHJvZHVjdG9zKCd2b3RvcycpO1xyXG4gICAgY29uc3QgW3Jlc3VsdGFkbywgc2V0UmVzdWx0YWRvXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHtwcm9kdWN0b3N9ID0gdXNlUHJvZHVjdG9zQnVzcXVlZGEoJ3ZvdG9zJyxxKTtcclxuXHJcbiAgICAvL3Byb2R1Y3RvcyBwb3IgZmlsdHJvIGEgbGEgZGJcclxuICAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RvcylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vdHJhbnNmb3JtYXIgdG9kYSBsYSBidXNxdWVkYSBlbiBtaW51c2N1bGFcclxuICAgICAgICBpZihxKVxyXG4gICAgICAgIHtjb25zdCBidXNxdWVkYSA9IHEudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBmaWx0cm8gPSBwcm9kdWN0b3MuZmlsdGVyKHByb2R1Y3RvPT4gKFxyXG4gICAgICAgICAgICBwcm9kdWN0by5ub21icmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNxdWVkYSkgfHxcclxuICAgICAgICAgICAgcHJvZHVjdG8uZGVzY3JpcGNpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNxdWVkYSlcclxuICAgICAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIHNldFJlc3VsdGFkbyhmaWx0cm8pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtxLCBwcm9kdWN0b3NdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0YWRvLXByb2R1Y3Rvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRhZG8ubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHRhZG8ubWFwKHByb2R1Y3RvID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGV0YWxsZXNQcm9kdWN0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3RvLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvZHVjdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfT5ObyBoYXkgcHJvZHVjdG9zIHBhcmEgbW9zdHJhcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdXNjYXI7ICJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Buscar = function Buscar() {
  _s();

  //recibiendo el parametro de busqueda desde la url
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var q = router.query.q; //todos los productos
  // const { productos} = useProductos('votos');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      resultado = _useState[0],
      setResultado = _useState[1];

  var _useProductosBusqueda = Object(_hooks_useProductosBusqueda__WEBPACK_IMPORTED_MODULE_7__["default"])('votos', q),
      productos = _useProductosBusqueda.productos; //productos por filtro a la db


  console.log(productos);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //transformar toda la busqueda en minuscula
    if (q) {
      var busqueda = q.toLowerCase();
      var filtro = productos.filter(function (producto) {
        return producto.nombre.toLowerCase().includes(busqueda) || producto.descripcion.toLowerCase().includes(busqueda);
      });
      setResultado(filtro);
    }
  }, [q, productos]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "listado-productos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, resultado.length > 0 ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("ul", {
    className: "bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, resultado.map(function (producto) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_layouts_DetallesProducto__WEBPACK_IMPORTED_MODULE_3__["default"], Object(C_Users_lokom_Desktop_camilo_react_estudio_pryectos_de_juan_producthuntnext_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: producto.id
    }, producto, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 33
      }
    }));
  })) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
    css: _ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "No hay productos para mostrar")))));
};

_s(Buscar, "pyc67NF/fapKd0NlK5UPF4upLC0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], _hooks_useProductosBusqueda__WEBPACK_IMPORTED_MODULE_7__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVzY2FyLmpzeCJdLCJuYW1lcyI6WyJCdXNjYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxIiwicXVlcnkiLCJ1c2VTdGF0ZSIsInJlc3VsdGFkbyIsInNldFJlc3VsdGFkbyIsInVzZVByb2R1Y3Rvc0J1c3F1ZWRhIiwicHJvZHVjdG9zIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImJ1c3F1ZWRhIiwidG9Mb3dlckNhc2UiLCJmaWx0cm8iLCJmaWx0ZXIiLCJwcm9kdWN0byIsIm5vbWJyZSIsImluY2x1ZGVzIiwiZGVzY3JpcGNpb24iLCJsZW5ndGgiLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFHakI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSmlCLE1BS0ZDLENBTEUsR0FLSUYsTUFMSixDQUtWRyxLQUxVLENBS0ZELENBTEUsRUFPakI7QUFDQTs7QUFSaUIsa0JBU2lCRSxzREFBUSxDQUFDLEVBQUQsQ0FUekI7QUFBQSxNQVNWQyxTQVRVO0FBQUEsTUFTQ0MsWUFURDs7QUFBQSw4QkFVR0MsMkVBQW9CLENBQUMsT0FBRCxFQUFTTCxDQUFULENBVnZCO0FBQUEsTUFVVk0sU0FWVSx5QkFVVkEsU0FWVSxFQVlqQjs7O0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixTQUFaO0FBRUFHLHlEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0EsUUFBR1QsQ0FBSCxFQUNBO0FBQUMsVUFBTVUsUUFBUSxHQUFHVixDQUFDLENBQUNXLFdBQUYsRUFBakI7QUFDRCxVQUFNQyxNQUFNLEdBQUdOLFNBQVMsQ0FBQ08sTUFBVixDQUFpQixVQUFBQyxRQUFRO0FBQUEsZUFDcENBLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkosV0FBaEIsR0FBOEJLLFFBQTlCLENBQXVDTixRQUF2QyxLQUNBSSxRQUFRLENBQUNHLFdBQVQsQ0FBcUJOLFdBQXJCLEdBQW1DSyxRQUFuQyxDQUE0Q04sUUFBNUMsQ0FGb0M7QUFBQSxPQUF6QixDQUFmO0FBS0FOLGtCQUFZLENBQUNRLE1BQUQsQ0FBWjtBQUNDO0FBQ0osR0FYUSxFQVdOLENBQUNaLENBQUQsRUFBSU0sU0FBSixDQVhNLENBQVQ7QUFhQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDWSwyREFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0o7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRSCxTQUFTLENBQUNlLE1BQVYsR0FBbUIsQ0FBbkIsR0FFSjtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS2YsU0FBUyxDQUFDZ0IsR0FBVixDQUFjLFVBQUFMLFFBQVE7QUFBQSxXQUNuQiwyREFBQyw0RUFBRDtBQUNJLFNBQUcsRUFBRUEsUUFBUSxDQUFDTTtBQURsQixPQUVRTixRQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEbUI7QUFBQSxHQUF0QixDQURMLENBRkksR0FXSjtBQUFHLE9BQUcsTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQWJKLENBREosQ0FESSxDQURaLENBREo7QUEwQkgsQ0F4REQ7O0dBQU1qQixNO1VBSWFFLHFELEVBTUtNLG1FOzs7S0FWbEJSLE07QUF5RFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1c2Nhci5iZTI1NmZlOGE4MDhkODNhOGI1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERldGFsbGVzUHJvZHVjdG8gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL0RldGFsbGVzUHJvZHVjdG8nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXQnO1xyXG5pbXBvcnQgdXNlUHJvZHVjdG9zIGZyb20gJy4uL2hvb2tzL3VzZVByb2R1Y3Rvcyc7XHJcbmltcG9ydCB7Y3NzfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB1c2VQcm9kdWN0b3NCdXNxdWVkYSBmcm9tICcuLi9ob29rcy91c2VQcm9kdWN0b3NCdXNxdWVkYSc7XHJcblxyXG5jb25zdCBCdXNjYXIgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgIC8vcmVjaWJpZW5kbyBlbCBwYXJhbWV0cm8gZGUgYnVzcXVlZGEgZGVzZGUgbGEgdXJsXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtxdWVyeToge3F9fSA9IHJvdXRlcjtcclxuICAgIFxyXG4gICAgLy90b2RvcyBsb3MgcHJvZHVjdG9zXHJcbiAgICAvLyBjb25zdCB7IHByb2R1Y3Rvc30gPSB1c2VQcm9kdWN0b3MoJ3ZvdG9zJyk7XHJcbiAgICBjb25zdCBbcmVzdWx0YWRvLCBzZXRSZXN1bHRhZG9dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qge3Byb2R1Y3Rvc30gPSB1c2VQcm9kdWN0b3NCdXNxdWVkYSgndm90b3MnLHEpO1xyXG5cclxuICAgIC8vcHJvZHVjdG9zIHBvciBmaWx0cm8gYSBsYSBkYlxyXG4gICAgXHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdG9zKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy90cmFuc2Zvcm1hciB0b2RhIGxhIGJ1c3F1ZWRhIGVuIG1pbnVzY3VsYVxyXG4gICAgICAgIGlmKHEpXHJcbiAgICAgICAge2NvbnN0IGJ1c3F1ZWRhID0gcS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRybyA9IHByb2R1Y3Rvcy5maWx0ZXIocHJvZHVjdG89PiAoXHJcbiAgICAgICAgICAgIHByb2R1Y3RvLm5vbWJyZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c3F1ZWRhKSB8fFxyXG4gICAgICAgICAgICBwcm9kdWN0by5kZXNjcmlwY2lvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c3F1ZWRhKVxyXG4gICAgICAgICAgICApKTtcclxuXHJcbiAgICAgICAgc2V0UmVzdWx0YWRvKGZpbHRybyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3EsIHByb2R1Y3Rvc10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RhZG8tcHJvZHVjdG9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5lZG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdGFkby5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3VsdGFkby5tYXAocHJvZHVjdG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhbGxlc1Byb2R1Y3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdG8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY3NzPXtjc3NgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9Pk5vIGhheSBwcm9kdWN0b3MgcGFyYSBtb3N0cmFyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1c2NhcjsgIl0sInNvdXJjZVJvb3QiOiIifQ==
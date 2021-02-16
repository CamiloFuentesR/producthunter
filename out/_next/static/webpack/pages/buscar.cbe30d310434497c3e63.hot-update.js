webpackHotUpdate_N_E("pages/buscar",{

/***/ "./pages/buscar.jsx":
/*!**************************!*\
  !*** ./pages/buscar.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/Layout */ "./components/layouts/Layout.jsx");
/* harmony import */ var _hooks_useProductos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useProductos */ "./hooks/useProductos.jsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var _jsxFileName = "C:\\Users\\lokom\\Desktop\\camilo\\react-estudio\\pryectos-de-juan\\producthuntnext\\pages\\buscar.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var Buscar = function Buscar() {
  _s();

  //recibiendo el parametro de busqueda desde la url
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  var q = router.query.q; //todos los productos

  var _useProductos = Object(_hooks_useProductos__WEBPACK_IMPORTED_MODULE_3__["default"])('creado'),
      productos = _useProductos.productos;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      resultado = _useState[0],
      setResultado = _useState[1];

  console.log(productos);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    //transformar toda la busqueda en minuscula
    var busqueda = q.toLowerCase();
    var filtro = productos.filter(function (producto) {
      return producto.nombre.toLowerCase().includes(busqueda) || producto.descripcion.toLowerCase().includes(busqueda);
    });
    setResultado(filtro);
  }, [q, productos]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Buscar")));
};

_s(Buscar, "un6k+sK30Smlc1/MQZGBjQpEFCo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"], _hooks_useProductos__WEBPACK_IMPORTED_MODULE_3__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVzY2FyLmpzeCJdLCJuYW1lcyI6WyJCdXNjYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxIiwicXVlcnkiLCJ1c2VQcm9kdWN0b3MiLCJwcm9kdWN0b3MiLCJ1c2VTdGF0ZSIsInJlc3VsdGFkbyIsInNldFJlc3VsdGFkbyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJidXNxdWVkYSIsInRvTG93ZXJDYXNlIiwiZmlsdHJvIiwiZmlsdGVyIiwicHJvZHVjdG8iLCJub21icmUiLCJpbmNsdWRlcyIsImRlc2NyaXBjaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFHakI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSmlCLE1BS0ZDLENBTEUsR0FLSUYsTUFMSixDQUtWRyxLQUxVLENBS0ZELENBTEUsRUFPakI7O0FBUGlCLHNCQVFJRSxtRUFBWSxDQUFDLFFBQUQsQ0FSaEI7QUFBQSxNQVFUQyxTQVJTLGlCQVFUQSxTQVJTOztBQUFBLGtCQVNpQkMsc0RBQVEsQ0FBQyxFQUFELENBVHpCO0FBQUEsTUFTVkMsU0FUVTtBQUFBLE1BU0NDLFlBVEQ7O0FBV2pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsU0FBWjtBQUVBTSx5REFBUyxDQUFDLFlBQU07QUFDWjtBQUNBLFFBQU1DLFFBQVEsR0FBR1YsQ0FBQyxDQUFDVyxXQUFGLEVBQWpCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHVCxTQUFTLENBQUNVLE1BQVYsQ0FBaUIsVUFBQUMsUUFBUTtBQUFBLGFBQ3BDQSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JKLFdBQWhCLEdBQThCSyxRQUE5QixDQUF1Q04sUUFBdkMsS0FDQUksUUFBUSxDQUFDRyxXQUFULENBQXFCTixXQUFyQixHQUFtQ0ssUUFBbkMsQ0FBNENOLFFBQTVDLENBRm9DO0FBQUEsS0FBekIsQ0FBZjtBQU1BSixnQkFBWSxDQUFDTSxNQUFELENBQVo7QUFDSCxHQVZRLEVBVU4sQ0FBQ1osQ0FBRCxFQUFJRyxTQUFKLENBVk0sQ0FBVDtBQVlBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLDJEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosQ0FESixDQURKO0FBT0gsQ0FoQ0Q7O0dBQU1OLE07VUFJYUUscUQsRUFJTUcsMkQ7OztLQVJuQkwsTTtBQWlDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVzY2FyLmNiZTMwZDMxMDQzNDQ5N2MzZTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXQnO1xyXG5pbXBvcnQgdXNlUHJvZHVjdG9zIGZyb20gJy4uL2hvb2tzL3VzZVByb2R1Y3Rvcyc7XHJcblxyXG5jb25zdCBCdXNjYXIgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgIC8vcmVjaWJpZW5kbyBlbCBwYXJhbWV0cm8gZGUgYnVzcXVlZGEgZGVzZGUgbGEgdXJsXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtxdWVyeToge3F9fSA9IHJvdXRlcjtcclxuICAgIFxyXG4gICAgLy90b2RvcyBsb3MgcHJvZHVjdG9zXHJcbiAgICBjb25zdCB7IHByb2R1Y3Rvc30gPSB1c2VQcm9kdWN0b3MoJ2NyZWFkbycpO1xyXG4gICAgY29uc3QgW3Jlc3VsdGFkbywgc2V0UmVzdWx0YWRvXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0b3MpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL3RyYW5zZm9ybWFyIHRvZGEgbGEgYnVzcXVlZGEgZW4gbWludXNjdWxhXHJcbiAgICAgICAgY29uc3QgYnVzcXVlZGEgPSBxLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgZmlsdHJvID0gcHJvZHVjdG9zLmZpbHRlcihwcm9kdWN0bz0+IChcclxuICAgICAgICAgICAgcHJvZHVjdG8ubm9tYnJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzcXVlZGEpIHx8XHJcbiAgICAgICAgICAgIHByb2R1Y3RvLmRlc2NyaXBjaW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzcXVlZGEpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApKTtcclxuXHJcbiAgICAgICAgc2V0UmVzdWx0YWRvKGZpbHRybyk7XHJcbiAgICB9LCBbcSwgcHJvZHVjdG9zXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDE+QnVzY2FyPC9oMT5cclxuICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1c2NhcjsgIl0sInNvdXJjZVJvb3QiOiIifQ==
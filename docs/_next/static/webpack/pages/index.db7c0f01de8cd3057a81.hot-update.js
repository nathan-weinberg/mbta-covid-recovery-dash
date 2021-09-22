webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/TopLine/TopLineChart.tsx":
/*!*************************************************!*\
  !*** ./src/components/TopLine/TopLineChart.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopLineChart.module.scss */ \"./src/components/TopLine/TopLineChart.module.scss\");\n/* harmony import */ var _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/TopLine/TopLineChart.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar TopLineChart = function TopLineChart(props) {\n  _s();\n\n  var sparklineData = props.sparklineData,\n      pieData = props.pieData;\n  var pieCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var pieCanvasElement = pieCanvasRef.current;\n\n    if (pieCanvasElement) {\n      var pieCanvasContext = pieCanvasElement.getContext(\"2d\");\n      new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(pieCanvasContext, {\n        type: \"doughnut\",\n        data: pieData,\n        options: {\n          legend: {\n            display: false\n          },\n          tooltips: {\n            enabled: false\n          },\n          tooltip: {\n            enabled: false\n          }\n        }\n      });\n    }\n  }, [props.pieData]);\n  var lineCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var lineCanvasElement = lineCanvasRef.current;\n\n    if (lineCanvasElement) {\n      var lineCanvasContext = lineCanvasElement.getContext(\"2d\");\n      new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(lineCanvasContext, {\n        type: \"line\",\n        data: sparklineData,\n        options: {\n          tooltips: {\n            enabled: false\n          },\n          legend: {\n            display: false\n          },\n          layout: {\n            padding: -10\n          },\n          scales: {\n            xAxes: [{\n              gridLines: {\n                drawBorder: false,\n                tickMarkLength: 0,\n                drawOnChartArea: false\n              },\n              ticks: {\n                display: false,\n                maxTicksLimit: 2\n              }\n            }],\n            yAxes: [{\n              gridLines: {\n                drawBorder: false,\n                tickMarkLength: 0,\n                drawOnChartArea: false\n              },\n              ticks: {\n                display: false\n              }\n            }]\n          },\n          elements: {\n            point: {\n              radius: 0\n            }\n          }\n        }\n      });\n    }\n  }, [props.sparklineData]);\n  return __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.flexWrap,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.flexCol,\n    key: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, __jsx(\"canvas\", {\n    ref: pieCanvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: _TopLineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.flexCol,\n    key: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, __jsx(\"canvas\", {\n    ref: lineCanvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(TopLineChart, \"DM/NyJ6v5B+mRlRxPUXAHJ1g4rs=\");\n\n_c = TopLineChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopLineChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"TopLineChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9wTGluZS9Ub3BMaW5lQ2hhcnQudHN4PzQwM2QiXSwibmFtZXMiOlsiVG9wTGluZUNoYXJ0IiwicHJvcHMiLCJzcGFya2xpbmVEYXRhIiwicGllRGF0YSIsInBpZUNhbnZhc1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInBpZUNhbnZhc0VsZW1lbnQiLCJjdXJyZW50IiwicGllQ2FudmFzQ29udGV4dCIsImdldENvbnRleHQiLCJDaGFydCIsInR5cGUiLCJkYXRhIiwib3B0aW9ucyIsImxlZ2VuZCIsImRpc3BsYXkiLCJ0b29sdGlwcyIsImVuYWJsZWQiLCJ0b29sdGlwIiwibGluZUNhbnZhc1JlZiIsImxpbmVDYW52YXNFbGVtZW50IiwibGluZUNhbnZhc0NvbnRleHQiLCJsYXlvdXQiLCJwYWRkaW5nIiwic2NhbGVzIiwieEF4ZXMiLCJncmlkTGluZXMiLCJkcmF3Qm9yZGVyIiwidGlja01hcmtMZW5ndGgiLCJkcmF3T25DaGFydEFyZWEiLCJ0aWNrcyIsIm1heFRpY2tzTGltaXQiLCJ5QXhlcyIsImVsZW1lbnRzIiwicG9pbnQiLCJyYWRpdXMiLCJzdHlsZXMiLCJmbGV4V3JhcCIsImZsZXhDb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFPQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQWtCO0FBQUE7O0FBQUEsTUFDM0JDLGFBRDJCLEdBQ0FELEtBREEsQ0FDM0JDLGFBRDJCO0FBQUEsTUFDWkMsT0FEWSxHQUNBRixLQURBLENBQ1pFLE9BRFk7QUFFbkMsTUFBTUMsWUFBWSxHQUFHQyxvREFBTSxDQUEyQixJQUEzQixDQUEzQjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxnQkFBZ0IsR0FBR0gsWUFBWSxDQUFDSSxPQUF0Qzs7QUFDQSxRQUFJRCxnQkFBSixFQUFzQjtBQUNsQixVQUFNRSxnQkFBZ0IsR0FB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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvcExpbmVDaGFydC5tb2R1bGUuc2Nzc1wiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIHNwYXJrbGluZURhdGE6IGFueTtcbiAgICBwaWVEYXRhOiBhbnk7XG59O1xuXG5jb25zdCBUb3BMaW5lQ2hhcnQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBzcGFya2xpbmVEYXRhLCBwaWVEYXRhIH0gPSBwcm9wcztcbiAgICBjb25zdCBwaWVDYW52YXNSZWYgPSB1c2VSZWY8bnVsbCB8IEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBwaWVDYW52YXNFbGVtZW50ID0gcGllQ2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmIChwaWVDYW52YXNFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwaWVDYW52YXNDb250ZXh0ID0gcGllQ2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICBuZXcgQ2hhcnQocGllQ2FudmFzQ29udGV4dCwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZG91Z2hudXRcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBwaWVEYXRhLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMucGllRGF0YV0pO1xuXG4gICAgY29uc3QgbGluZUNhbnZhc1JlZiA9IHVzZVJlZjxudWxsIHwgSFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmVDYW52YXNFbGVtZW50ID0gbGluZUNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAobGluZUNhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmVDYW52YXNDb250ZXh0ID0gbGluZUNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgbmV3IENoYXJ0KGxpbmVDYW52YXNDb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogc3BhcmtsaW5lRGF0YSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAtMTAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeEF4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0JvcmRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrTWFya0xlbmd0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdPbkNoYXJ0QXJlYTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3Qm9yZGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tNYXJrTGVuZ3RoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd09uQ2hhcnRBcmVhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5zcGFya2xpbmVEYXRhXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhXcmFwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleENvbH0ga2V5PXsxfT5cbiAgICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17cGllQ2FudmFzUmVmfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhDb2x9IGtleT17MX0+XG4gICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e2xpbmVDYW52YXNSZWZ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcExpbmVDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TopLine/TopLineChart.tsx\n");

/***/ })

})
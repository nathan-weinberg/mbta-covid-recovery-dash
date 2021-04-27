webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/LineCard/TphChart.tsx":
/*!**********************************************!*\
  !*** ./src/components/LineCard/TphChart.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chartjs_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-color */ \"./node_modules/chartjs-color/index.js\");\n/* harmony import */ var chartjs_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_color__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! time */ \"./src/time.ts\");\n/* harmony import */ var _LineCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LineCard.module.scss */ \"./src/components/LineCard/LineCard.module.scss\");\n/* harmony import */ var _LineCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_LineCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/LineCard/TphChart.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar lineTickValues = Object(time__WEBPACK_IMPORTED_MODULE_3__[\"getHourlyTickValues\"])(1);\n\nvar TphChart = function TphChart(props) {\n  _s();\n\n  var color = props.color,\n      baselineTph = props.baselineTph,\n      currentTph = props.currentTph,\n      highestTph = props.highestTph;\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var ctx = canvasRef.current.getContext(\"2d\");\n    var currentColor = chartjs_color__WEBPACK_IMPORTED_MODULE_2___default()(color).alpha(0.4).rgbString();\n    var datasets = [{\n      label: \"Pre-COVID trips per hour\",\n      data: baselineTph,\n      // steppedLine: true,\n      borderColor: color,\n      borderWidth: 2,\n      backgroundColor: \"rgba(0,0,0,0)\"\n    }, {\n      label: \"Current trips per hour\",\n      data: currentTph,\n      // steppedLine: true,\n      borderWidth: 2,\n      borderColor: \"rgba(0,0,0,0)\",\n      backgroundColor: currentColor\n    }];\n    var chart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(ctx, {\n      type: \"line\",\n      data: {\n        labels: lineTickValues,\n        datasets: datasets\n      },\n      options: {\n        maintainAspectRatio: false,\n        animation: {\n          duration: 0\n        },\n        legend: {\n          position: \"top\",\n          align: \"end\",\n          labels: {\n            boxWidth: 15\n          }\n        },\n        scales: {\n          xAxes: [{\n            gridLines: {\n              display: false\n            },\n            ticks: {\n              maxTicksLimit: 12\n            }\n          }],\n          yAxes: [{\n            gridLines: {\n              display: false\n            },\n            ticks: {\n              maxTicksLimit: 4,\n              suggestedMax: highestTph\n            }\n          }]\n        },\n        tooltips: {\n          mode: \"index\",\n          intersect: false,\n          callbacks: {\n            label: function label(_ref) {\n              var datasetIndex = _ref.datasetIndex,\n                  index = _ref.index;\n              var _datasets$datasetInde = datasets[datasetIndex],\n                  label = _datasets$datasetInde.label,\n                  data = _datasets$datasetInde.data;\n              return \"\".concat(label, \": \").concat(data[index], \" (each direction)\");\n            }\n          }\n        },\n        elements: {\n          line: {\n            tension: 0\n          },\n          point: {\n            radius: 0\n          }\n        }\n      }\n    });\n    return function () {\n      return chart.destroy();\n    };\n  }, [baselineTph, currentTph]);\n  return __jsx(\"div\", {\n    className: _LineCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tphChartContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, __jsx(\"canvas\", {\n    ref: canvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(TphChart, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n\n_c = TphChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TphChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"TphChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGluZUNhcmQvVHBoQ2hhcnQudHN4PzNmYmMiXSwibmFtZXMiOlsibGluZVRpY2tWYWx1ZXMiLCJnZXRIb3VybHlUaWNrVmFsdWVzIiwiVHBoQ2hhcnQiLCJwcm9wcyIsImNvbG9yIiwiYmFzZWxpbmVUcGgiLCJjdXJyZW50VHBoIiwiaGlnaGVzdFRwaCIsImNhbnZhc1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN0eCIsImN1cnJlbnQiLCJnZXRDb250ZXh0IiwiY3VycmVudENvbG9yIiwiQ29sb3IiLCJhbHBoYSIsInJnYlN0cmluZyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJhY2tncm91bmRDb2xvciIsImNoYXJ0IiwiQ2hhcnQiLCJ0eXBlIiwibGFiZWxzIiwib3B0aW9ucyIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJhbmltYXRpb24iLCJkdXJhdGlvbiIsImxlZ2VuZCIsInBvc2l0aW9uIiwiYWxpZ24iLCJib3hXaWR0aCIsInNjYWxlcyIsInhBeGVzIiwiZ3JpZExpbmVzIiwiZGlzcGxheSIsInRpY2tzIiwibWF4VGlja3NMaW1pdCIsInlBeGVzIiwic3VnZ2VzdGVkTWF4IiwidG9vbHRpcHMiLCJtb2RlIiwiaW50ZXJzZWN0IiwiY2FsbGJhY2tzIiwiZGF0YXNldEluZGV4IiwiaW5kZXgiLCJlbGVtZW50cyIsImxpbmUiLCJ0ZW5zaW9uIiwicG9pbnQiLCJyYWRpdXMiLCJkZXN0cm95Iiwic3R5bGVzIiwidHBoQ2hhcnRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLGdFQUFtQixDQUFDLENBQUQsQ0FBMUM7O0FBU0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBOztBQUFBLE1B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QUFBLEtBQVA7QUFDSCxHQXpFUSxFQXlFTixDQUFDbEQsV0FBRCxFQUFjQyxVQUFkLENBekVNLENBQVQ7QUEyRUEsU0FDSTtBQUFLLGFBQVMsRUFBRWtELDREQUFNLENBQUNDLGlCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxPQUFHLEVBQUVqRCxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBS0gsQ0FwRkQ7O0dBQU1OLFE7O0tBQUFBLFE7QUFzRlNBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGluZUNhcmQvVHBoQ2hhcnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcImNoYXJ0anMtY29sb3JcIjtcblxuaW1wb3J0IHsgVHJpcHNQZXJIb3VyIH0gZnJvbSBcInR5cGVzXCI7XG5pbXBvcnQgeyBnZXRIb3VybHlUaWNrVmFsdWVzIH0gZnJvbSBcInRpbWVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9MaW5lQ2FyZC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBsaW5lVGlja1ZhbHVlcyA9IGdldEhvdXJseVRpY2tWYWx1ZXMoMSk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgYmFzZWxpbmVUcGg6IFRyaXBzUGVySG91cjtcbiAgICBjdXJyZW50VHBoOiBUcmlwc1BlckhvdXI7XG4gICAgaGlnaGVzdFRwaDogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG59O1xuXG5jb25zdCBUcGhDaGFydCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNvbG9yLCBiYXNlbGluZVRwaCwgY3VycmVudFRwaCwgaGlnaGVzdFRwaCB9ID0gcHJvcHM7XG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXNSZWYuY3VycmVudCEuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sb3IgPSBDb2xvcihjb2xvcikuYWxwaGEoMC40KS5yZ2JTdHJpbmcoKTtcblxuICAgICAgICBjb25zdCBkYXRhc2V0cyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJQcmUtQ09WSUQgdHJpcHMgcGVyIGhvdXJcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBiYXNlbGluZVRwaCBhcyBhbnksXG4gICAgICAgICAgICAgICAgLy8gc3RlcHBlZExpbmU6IHRydWUsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkN1cnJlbnQgdHJpcHMgcGVyIGhvdXJcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBjdXJyZW50VHBoIGFzIGFueSxcbiAgICAgICAgICAgICAgICAvLyBzdGVwcGVkTGluZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjdXJyZW50Q29sb3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiBsaW5lVGlja1ZhbHVlcyxcbiAgICAgICAgICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7IGR1cmF0aW9uOiAwIH0sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7IGJveFdpZHRoOiAxNSB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7IGRpc3BsYXk6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogMTIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7IGRpc3BsYXk6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGVkTWF4OiBoaWdoZXN0VHBoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJpbmRleFwiLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoeyBkYXRhc2V0SW5kZXgsIGluZGV4IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGxhYmVsLCBkYXRhIH0gPSBkYXRhc2V0c1tkYXRhc2V0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtsYWJlbH06ICR7ZGF0YVtpbmRleF19IChlYWNoIGRpcmVjdGlvbilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IHsgdGVuc2lvbjogMCB9LFxuICAgICAgICAgICAgICAgICAgICBwb2ludDogeyByYWRpdXM6IDAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjaGFydC5kZXN0cm95KCk7XG4gICAgfSwgW2Jhc2VsaW5lVHBoLCBjdXJyZW50VHBoXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRwaENoYXJ0Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcGhDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/LineCard/TphChart.tsx\n");

/***/ })

})
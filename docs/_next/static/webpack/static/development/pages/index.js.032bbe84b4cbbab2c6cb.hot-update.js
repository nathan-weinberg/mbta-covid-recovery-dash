webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/RouteGrid/RouteGrid.tsx":
/*!************************************************!*\
  !*** ./src/components/RouteGrid/RouteGrid.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./src/components/index.ts\");\n/* harmony import */ var titles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! titles */ \"./src/titles.ts\");\n/* harmony import */ var _useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useInfiniteScroll */ \"./src/components/RouteGrid/useInfiniteScroll.ts\");\n/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sorting */ \"./src/components/RouteGrid/sorting.ts\");\n/* harmony import */ var _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RouteGrid.module.scss */ \"./src/components/RouteGrid/RouteGrid.module.scss\");\n/* harmony import */ var _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/RouteGrid/RouteGrid.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar pagination = 12;\n\nvar defaultFilter = function defaultFilter(x) {\n  return !!x;\n};\n\nvar getDocumentElement = function getDocumentElement() {\n  if (typeof document !== \"undefined\") {\n    return document.documentElement;\n  }\n\n  return null;\n};\n\nvar sortOnKey = function sortOnKey(data, sortFn) {\n  return data.sort(function (a, b) {\n    var ka = sortFn(a);\n    var kb = sortFn(b);\n\n    if (ka === kb) {\n      return 0;\n    } else {\n      return ka > kb ? 1 : -1;\n    }\n  });\n};\n\nvar matchesQuery = function matchesQuery(routeData, query) {\n  var id = routeData.id;\n  var title = titles__WEBPACK_IMPORTED_MODULE_2__[\"routeTitles\"][id];\n  return !query || (title === null || title === void 0 ? void 0 : title.toLowerCase().includes(query)) || id.toLowerCase().includes(query);\n};\n\nvar matchesRouteKindOption = function matchesRouteKindOption(routeData, option) {\n  var routeKind = routeData.routeKind;\n\n  if (option === \"all\") {\n    return true;\n  }\n\n  if (option === \"regional-rail\" || option === \"bus\") {\n    return routeKind === option;\n  }\n\n  return routeKind !== \"regional-rail\" && routeKind !== \"bus\";\n};\n\nvar RouteGrid = function RouteGrid(props) {\n  _s();\n\n  var data = props.data,\n      _props$filter = props.filter,\n      filter = _props$filter === void 0 ? defaultFilter : _props$filter;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(pagination),\n      limit = _useState[0],\n      setLimit = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      query = _useState2[0],\n      setQuery = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"kind\"),\n      sort = _useState3[0],\n      setSort = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"all\"),\n      kindOption = _useState4[0],\n      setKindOption = _useState4[1];\n\n  var availableItems = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return sortOnKey(Object.values(data).filter(function (routeData) {\n      return filter(routeData) && matchesQuery(routeData, query) && matchesRouteKindOption(routeData, kindOption);\n    }), _sorting__WEBPACK_IMPORTED_MODULE_4__[\"sortFunctions\"][sort]);\n  }, [data, filter, query, kindOption, sort]);\n  var shownItems = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return availableItems.slice(0, limit);\n  }, [availableItems, limit]);\n  Object(_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__[\"useInfiniteScroll\"])({\n    element: getDocumentElement(),\n    enabled: limit < availableItems.length,\n    scrollTolerance: 300,\n    onRequestMoreItems: function onRequestMoreItems() {\n      return setLimit(function (l) {\n        return l + pagination;\n      });\n    }\n  });\n\n  var renderRouteKindDropdown = function renderRouteKindDropdown() {\n    return __jsx(\"select\", {\n      className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.select,\n      value: kindOption,\n      onChange: function onChange(e) {\n        setKindOption(e.target.value);\n        setLimit(pagination);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 13\n      }\n    }, __jsx(\"option\", {\n      value: \"all\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 17\n      }\n    }, \"All routes\"), __jsx(\"option\", {\n      value: \"bus\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }\n    }, \"Bus\"), __jsx(\"option\", {\n      value: \"rapid-transit\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 17\n      }\n    }, \"Rapid transit\"), __jsx(\"option\", {\n      value: \"regional-rail\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 17\n      }\n    }, \"Commuter rail\"));\n  };\n\n  return __jsx(\"div\", {\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.routeGridWrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }, \"MBTA Covid Recovery Dashboard\", __jsx(\"div\", {\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.alphaTag,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 17\n    }\n  }, \"Alpha\")), __jsx(\"div\", {\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.controls,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"Filter routes\",\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.filter,\n    value: query,\n    onChange: function onChange(e) {\n      setQuery(e.target.value.toLowerCase().trim());\n      setLimit(pagination);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 17\n    }\n  }), renderRouteKindDropdown()), __jsx(\"div\", {\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.routeGrid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 13\n    }\n  }, shownItems.map(function (item) {\n    return __jsx(components__WEBPACK_IMPORTED_MODULE_1__[\"RouteCard\"], {\n      routeData: item,\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 21\n      }\n    });\n  })));\n};\n\n_s(RouteGrid, \"S5weuInH5eNBTT4CS2DxieeWi6M=\", false, function () {\n  return [_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__[\"useInfiniteScroll\"]];\n});\n\n_c = RouteGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RouteGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"RouteGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3V0ZUdyaWQvUm91dGVHcmlkLnRzeD9iZDVkIl0sIm5hbWVzIjpbInBhZ2luYXRpb24iLCJkZWZhdWx0RmlsdGVyIiwieCIsImdldERvY3VtZW50RWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic29ydE9uS2V5IiwiZGF0YSIsInNvcnRGbiIsInNvcnQiLCJhIiwiYiIsImthIiwia2IiLCJtYXRjaGVzUXVlcnkiLCJyb3V0ZURhdGEiLCJxdWVyeSIsImlkIiwidGl0bGUiLCJyb3V0ZVRpdGxlcyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXRjaGVzUm91dGVLaW5kT3B0aW9uIiwib3B0aW9uIiwicm91dGVLaW5kIiwiUm91dGVHcmlkIiwicHJvcHMiLCJmaWx0ZXIiLCJ1c2VTdGF0ZSIsImxpbWl0Iiwic2V0TGltaXQiLCJzZXRRdWVyeSIsInNldFNvcnQiLCJraW5kT3B0aW9uIiwic2V0S2luZE9wdGlvbiIsImF2YWlsYWJsZUl0ZW1zIiwidXNlTWVtbyIsIk9iamVjdCIsInZhbHVlcyIsInNvcnRGdW5jdGlvbnMiLCJzaG93bkl0ZW1zIiwic2xpY2UiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsImVsZW1lbnQiLCJlbmFibGVkIiwibGVuZ3RoIiwic2Nyb2xsVG9sZXJhbmNlIiwib25SZXF1ZXN0TW9yZUl0ZW1zIiwibCIsInJlbmRlclJvdXRlS2luZERyb3Bkb3duIiwic3R5bGVzIiwic2VsZWN0IiwiZSIsInRhcmdldCIsInZhbHVlIiwicm91dGVHcmlkV3JhcHBlciIsImhlYWRlciIsImFscGhhVGFnIiwiY29udHJvbHMiLCJ0cmltIiwicm91dGVHcmlkIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFTQSxJQUFNQSxVQUFVLEdBQUcsRUFBbkI7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0twQixVQUFVLENBQUNxQixHQUFYLENBQWUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1osTUFBQyxvREFBRDtBQUFXLGVBQVMsRUFBRUEsSUFBdEI7QUFBNEIsU0FBRyxFQUFFQSxJQUFJLENBQUM3QyxFQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFk7QUFBQSxHQUFmLENBREwsQ0FqQkosQ0FESjtBQXlCSCxDQXRFRDs7R0FBTVEsUztVQW9CRmlCLG9FOzs7S0FwQkVqQixTO0FBd0VTQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1JvdXRlR3JpZC9Sb3V0ZUdyaWQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFJvdXRlQ2FyZCB9IGZyb20gXCJjb21wb25lbnRzXCI7XG5pbXBvcnQgeyBSb3V0ZURhdGEgfSBmcm9tIFwidHlwZXNcIjtcbmltcG9ydCB7IHJvdXRlVGl0bGVzIH0gZnJvbSBcInRpdGxlc1wiO1xuXG5pbXBvcnQgeyB1c2VJbmZpbml0ZVNjcm9sbCB9IGZyb20gXCIuL3VzZUluZmluaXRlU2Nyb2xsXCI7XG5pbXBvcnQgeyBzb3J0RnVuY3Rpb25zLCBTb3J0LCBTb3J0Rm4gfSBmcm9tIFwiLi9zb3J0aW5nXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUm91dGVHcmlkLm1vZHVsZS5zY3NzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgZGF0YTogUmVjb3JkPHN0cmluZywgUm91dGVEYXRhPjtcbiAgICBmaWx0ZXI/OiAocjogUm91dGVEYXRhKSA9PiBib29sZWFuO1xufTtcblxudHlwZSBSb3V0ZUtpbmRPcHRpb24gPSBcImFsbFwiIHwgXCJidXNcIiB8IFwicmFwaWQtdHJhbnNpdFwiIHwgXCJyZWdpb25hbC1yYWlsXCI7XG5cbmNvbnN0IHBhZ2luYXRpb24gPSAxMjtcbmNvbnN0IGRlZmF1bHRGaWx0ZXIgPSAoeCkgPT4gISF4O1xuXG5jb25zdCBnZXREb2N1bWVudEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IHNvcnRPbktleSA9IChkYXRhOiBSb3V0ZURhdGFbXSwgc29ydEZuOiBTb3J0Rm4pID0+IHtcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGthID0gc29ydEZuKGEpO1xuICAgICAgICBjb25zdCBrYiA9IHNvcnRGbihiKTtcbiAgICAgICAgaWYgKGthID09PSBrYikge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ga2EgPiBrYiA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuY29uc3QgbWF0Y2hlc1F1ZXJ5ID0gKHJvdXRlRGF0YTogUm91dGVEYXRhLCBxdWVyeTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVEYXRhO1xuICAgIGNvbnN0IHRpdGxlID0gcm91dGVUaXRsZXNbaWRdO1xuICAgIHJldHVybiAhcXVlcnkgfHwgdGl0bGU/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpIHx8IGlkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpO1xufTtcblxuY29uc3QgbWF0Y2hlc1JvdXRlS2luZE9wdGlvbiA9IChyb3V0ZURhdGE6IFJvdXRlRGF0YSwgb3B0aW9uOiBSb3V0ZUtpbmRPcHRpb24pID0+IHtcbiAgICBjb25zdCB7IHJvdXRlS2luZCB9ID0gcm91dGVEYXRhO1xuICAgIGlmIChvcHRpb24gPT09IFwiYWxsXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRpb24gPT09IFwicmVnaW9uYWwtcmFpbFwiIHx8IG9wdGlvbiA9PT0gXCJidXNcIikge1xuICAgICAgICByZXR1cm4gcm91dGVLaW5kID09PSBvcHRpb247XG4gICAgfVxuICAgIHJldHVybiByb3V0ZUtpbmQgIT09IFwicmVnaW9uYWwtcmFpbFwiICYmIHJvdXRlS2luZCAhPT0gXCJidXNcIjtcbn07XG5cbmNvbnN0IFJvdXRlR3JpZCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIGZpbHRlciA9IGRlZmF1bHRGaWx0ZXIgfSA9IHByb3BzO1xuICAgIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGUocGFnaW5hdGlvbik7XG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZTxTb3J0PihcImtpbmRcIik7XG4gICAgY29uc3QgW2tpbmRPcHRpb24sIHNldEtpbmRPcHRpb25dID0gdXNlU3RhdGU8Um91dGVLaW5kT3B0aW9uPihcImFsbFwiKTtcblxuICAgIGNvbnN0IGF2YWlsYWJsZUl0ZW1zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiBzb3J0T25LZXkoXG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEpLmZpbHRlcihcbiAgICAgICAgICAgICAgICAocm91dGVEYXRhKSA9PlxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIocm91dGVEYXRhKSAmJlxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzUXVlcnkocm91dGVEYXRhLCBxdWVyeSkgJiZcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc1JvdXRlS2luZE9wdGlvbihyb3V0ZURhdGEsIGtpbmRPcHRpb24pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc29ydEZ1bmN0aW9uc1tzb3J0XVxuICAgICAgICApO1xuICAgIH0sIFtkYXRhLCBmaWx0ZXIsIHF1ZXJ5LCBraW5kT3B0aW9uLCBzb3J0XSk7XG4gICAgY29uc3Qgc2hvd25JdGVtcyA9IHVzZU1lbW8oKCkgPT4gYXZhaWxhYmxlSXRlbXMuc2xpY2UoMCwgbGltaXQpLCBbYXZhaWxhYmxlSXRlbXMsIGxpbWl0XSk7XG5cbiAgICB1c2VJbmZpbml0ZVNjcm9sbCh7XG4gICAgICAgIGVsZW1lbnQ6IGdldERvY3VtZW50RWxlbWVudCgpLFxuICAgICAgICBlbmFibGVkOiBsaW1pdCA8IGF2YWlsYWJsZUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgc2Nyb2xsVG9sZXJhbmNlOiAzMDAsXG4gICAgICAgIG9uUmVxdWVzdE1vcmVJdGVtczogKCkgPT4gc2V0TGltaXQoKGwpID0+IGwgKyBwYWdpbmF0aW9uKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlclJvdXRlS2luZERyb3Bkb3duID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17a2luZE9wdGlvbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0S2luZE9wdGlvbihlLnRhcmdldC52YWx1ZSBhcyBSb3V0ZUtpbmRPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzZXRMaW1pdChwYWdpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5BbGwgcm91dGVzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJ1c1wiPkJ1czwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyYXBpZC10cmFuc2l0XCI+UmFwaWQgdHJhbnNpdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZWdpb25hbC1yYWlsXCI+Q29tbXV0ZXIgcmFpbDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm91dGVHcmlkV3JhcHBlcn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgICBNQlRBIENvdmlkIFJlY292ZXJ5IERhc2hib2FyZFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxwaGFUYWd9PkFscGhhPC9kaXY+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sc30+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIHJvdXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExpbWl0KHBhZ2luYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3JlbmRlclJvdXRlS2luZERyb3Bkb3duKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm91dGVHcmlkfT5cbiAgICAgICAgICAgICAgICB7c2hvd25JdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlQ2FyZCByb3V0ZURhdGE9e2l0ZW19IGtleT17aXRlbS5pZH0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVHcmlkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RouteGrid/RouteGrid.tsx\n");

/***/ })

})
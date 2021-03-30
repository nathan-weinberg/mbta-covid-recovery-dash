webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/RouteGrid/RouteGrid.tsx":
/*!************************************************!*\
  !*** ./src/components/RouteGrid/RouteGrid.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./src/components/index.ts\");\n/* harmony import */ var titles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! titles */ \"./src/titles.ts\");\n/* harmony import */ var _useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useInfiniteScroll */ \"./src/components/RouteGrid/useInfiniteScroll.ts\");\n/* harmony import */ var _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RouteGrid.module.scss */ \"./src/components/RouteGrid/RouteGrid.module.scss\");\n/* harmony import */ var _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/RouteGrid/RouteGrid.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar pagination = 12;\n\nvar defaultFilter = function defaultFilter(x) {\n  return !!x;\n};\n\nvar getDocumentElement = function getDocumentElement() {\n  if (typeof document !== \"undefined\") {\n    return document.documentElement;\n  }\n\n  return null;\n};\n\nvar sortOnKey = function sortOnKey(data, sortKey) {\n  return data.sort(function (a, b) {\n    var ka = sortKey(a);\n    var kb = sortKey(b);\n\n    if (ka === kb) {\n      return 0;\n    } else {\n      return ka > kb ? 1 : -1;\n    }\n  });\n};\n\nvar matchesQuery = function matchesQuery(routeData, query) {\n  var id = routeData.id;\n  var title = titles__WEBPACK_IMPORTED_MODULE_2__[\"routeTitles\"][id];\n  return !query || (title === null || title === void 0 ? void 0 : title.toLowerCase().includes(query)) || id.toLowerCase().includes(query);\n};\n\nvar matchesRouteKindOption = function matchesRouteKindOption(routeData, option) {\n  var routeKind = routeData.routeKind;\n\n  if (option === \"all\") {\n    return true;\n  }\n\n  if (option === \"regional-rail\" || option === \"bus\") {\n    return routeKind === option;\n  }\n\n  return routeKind !== \"regional-rail\" && routeKind !== \"bus\";\n};\n\nvar RouteGrid = function RouteGrid(props) {\n  _s();\n\n  var data = props.data,\n      _props$filter = props.filter,\n      filter = _props$filter === void 0 ? defaultFilter : _props$filter;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(pagination),\n      limit = _useState[0],\n      setLimit = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      query = _useState2[0],\n      setQuery = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"kind\"),\n      sort = _useState3[0],\n      setSort = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"all\"),\n      kindOption = _useState4[0],\n      setKindOption = _useState4[1];\n\n  var availableItems = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return sortOnKey(Object.values(data).filter(function (routeData) {\n      return filter(routeData) && matchesQuery(routeData, query) && matchesRouteKindOption(routeData, kindOption);\n    }), sortKey);\n  }, [data, filter, query, kindOption]);\n  var shownItems = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return availableItems.slice(0, limit);\n  }, [availableItems, limit]);\n  Object(_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__[\"useInfiniteScroll\"])({\n    element: getDocumentElement(),\n    enabled: limit < availableItems.length,\n    scrollTolerance: 300,\n    onRequestMoreItems: function onRequestMoreItems() {\n      return setLimit(function (l) {\n        return l + pagination;\n      });\n    }\n  });\n\n  var renderRouteKindDropdown = function renderRouteKindDropdown() {\n    return __jsx(\"select\", {\n      className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.select,\n      value: kindOption,\n      onChange: function onChange(e) {\n        setKindOption(e.target.value);\n        setLimit(pagination);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 13\n      }\n    }, __jsx(\"option\", {\n      value: \"all\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }\n    }, \"All routes\"), __jsx(\"option\", {\n      value: \"bus\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 17\n      }\n    }, \"Bus\"), __jsx(\"option\", {\n      value: \"rapid-transit\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 17\n      }\n    }, \"Rapid transit\"), __jsx(\"option\", {\n      value: \"regional-rail\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 17\n      }\n    }, \"Commuter rail\"));\n  };\n\n  return __jsx(\"div\", {\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.routeGridWrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, \"MBTA Covid Recovery Dashboard\", __jsx(\"div\", {\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.alphaTag,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 17\n    }\n  }, \"Alpha\")), __jsx(\"div\", {\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.controls,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"Filter routes\",\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.filter,\n    value: query,\n    onChange: function onChange(e) {\n      setQuery(e.target.value.toLowerCase().trim());\n      setLimit(pagination);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 17\n    }\n  }), renderRouteKindDropdown()), __jsx(\"div\", {\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.routeGrid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  }, shownItems.map(function (item) {\n    return __jsx(components__WEBPACK_IMPORTED_MODULE_1__[\"RouteCard\"], {\n      routeData: item,\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 21\n      }\n    });\n  })));\n};\n\n_s(RouteGrid, \"S5weuInH5eNBTT4CS2DxieeWi6M=\", false, function () {\n  return [_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__[\"useInfiniteScroll\"]];\n});\n\n_c = RouteGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RouteGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"RouteGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3V0ZUdyaWQvUm91dGVHcmlkLnRzeD9iZDVkIl0sIm5hbWVzIjpbInBhZ2luYXRpb24iLCJkZWZhdWx0RmlsdGVyIiwieCIsImdldERvY3VtZW50RWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic29ydE9uS2V5IiwiZGF0YSIsInNvcnRLZXkiLCJzb3J0IiwiYSIsImIiLCJrYSIsImtiIiwibWF0Y2hlc1F1ZXJ5Iiwicm91dGVEYXRhIiwicXVlcnkiLCJpZCIsInRpdGxlIiwicm91dGVUaXRsZXMiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWF0Y2hlc1JvdXRlS2luZE9wdGlvbiIsIm9wdGlvbiIsInJvdXRlS2luZCIsIlJvdXRlR3JpZCIsInByb3BzIiwiZmlsdGVyIiwidXNlU3RhdGUiLCJsaW1pdCIsInNldExpbWl0Iiwic2V0UXVlcnkiLCJzZXRTb3J0Iiwia2luZE9wdGlvbiIsInNldEtpbmRPcHRpb24iLCJhdmFpbGFibGVJdGVtcyIsInVzZU1lbW8iLCJPYmplY3QiLCJ2YWx1ZXMiLCJzaG93bkl0ZW1zIiwic2xpY2UiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsImVsZW1lbnQiLCJlbmFibGVkIiwibGVuZ3RoIiwic2Nyb2xsVG9sZXJhbmNlIiwib25SZXF1ZXN0TW9yZUl0ZW1zIiwibCIsInJlbmRlclJvdXRlS2luZERyb3Bkb3duIiwic3R5bGVzIiwic2VsZWN0IiwiZSIsInRhcmdldCIsInZhbHVlIiwicm91dGVHcmlkV3JhcHBlciIsImhlYWRlciIsImFscGhhVGFnIiwiY29udHJvbHMiLCJ0cmltIiwicm91dGVHcmlkIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFVQSxJQUFNQSxVQUFVLEdBQUcsRUFBbkI7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFEO0FBQUEsU0FBTyxDQUFDLENBQUNBLENBQVQ7QUFBQSxDQUF0Qjs7QUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDN0IsTUFBSSxPQUFPQyxRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ2pDLFdBQU9BLFFBQVEsQ0FBQ0MsZUFBaEI7QUFDSDs7QUFDRCxTQUFPLElBQVA7QUFDSCxDQUxEOztBQU9BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBb0JDLE9BQXBCLEVBQWtEO0FBQ2hFLFNBQU9ELElBQUksQ0FBQ0UsSUFBTCxDQUFVLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3ZCLFFBQU1DLEVBQUUsR0FBR0osT0FBTyxDQUFDRSxDQUFELENBQWxCO0FBQ0EsUUFBTUcsRUFBRSxHQUFHTCxPQUFPLENBQUNHLENBQUQsQ0FBbEI7O0FBQ0EsUUFBSUMsRUFBRSxLQUFLQyxFQUFYLEVBQWU7QUFDWCxhQUFPLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPRCxFQUFFLEdBQUdDLEVBQUwsR0FBVSxDQUFWLEdBQWMsQ0FBQyxDQUF0QjtBQUNIO0FBQ0osR0FSTSxDQUFQO0FBU0gsQ0FWRDs7QUFZQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxTQUFELEVBQXVCQyxLQUF2QixFQUF5QztBQUFBLE1BQ2xEQyxFQURrRCxHQUMzQ0YsU0FEMkMsQ0FDbERFLEVBRGtEO0FBRTFELE1BQU1DLEtBQUssR0FBR0Msa0RBQVcsQ0FBQ0YsRUFBRCxDQUF6QjtBQUNBLFNBQU8sQ0FBQ0QsS0FBRCxLQUFVRSxLQUFWLGFBQVVBLEtBQVYsdUJBQVVBLEtBQUssQ0FBRUUsV0FBUCxHQUFxQkMsUUFBckIsQ0FBOEJMLEtBQTlCLENBQVYsS0FBa0RDLEVBQUUsQ0FBQ0csV0FBSCxHQUFpQkMsUUFBakIsQ0FBMEJMLEtBQTFCLENBQXpEO0FBQ0gsQ0FKRDs7QUFNQSxJQUFNTSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNQLFNBQUQsRUFBdUJRLE1BQXZCLEVBQW1EO0FBQUEsTUFDdEVDLFNBRHNFLEdBQ3hEVCxTQUR3RCxDQUN0RVMsU0FEc0U7O0FBRTlFLE1BQUlELE1BQU0sS0FBSyxLQUFmLEVBQXNCO0FBQ2xCLFdBQU8sSUFBUDtBQUNIOztBQUNELE1BQUlBLE1BQU0sS0FBSyxlQUFYLElBQThCQSxNQUFNLEtBQUssS0FBN0MsRUFBb0Q7QUFDaEQsV0FBT0MsU0FBUyxLQUFLRCxNQUFyQjtBQUNIOztBQUNELFNBQU9DLFNBQVMsS0FBSyxlQUFkLElBQWlDQSxTQUFTLEtBQUssS0FBdEQ7QUFDSCxDQVREOztBQVdBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBa0I7QUFBQTs7QUFBQSxNQUN4Qm5CLElBRHdCLEdBQ1NtQixLQURULENBQ3hCbkIsSUFEd0I7QUFBQSxzQkFDU21CLEtBRFQsQ0FDbEJDLE1BRGtCO0FBQUEsTUFDbEJBLE1BRGtCLDhCQUNUMUIsYUFEUzs7QUFBQSxrQkFFTjJCLHNEQUFRLENBQUM1QixVQUFELENBRkY7QUFBQSxNQUV6QjZCLEtBRnlCO0FBQUEsTUFFbEJDLFFBRmtCOztBQUFBLG1CQUdORixzREFBUSxDQUFDLEVBQUQsQ0FIRjtBQUFBLE1BR3pCWixLQUh5QjtBQUFBLE1BR2xCZSxRQUhrQjs7QUFBQSxtQkFJUkgsc0RBQVEsQ0FBTyxNQUFQLENBSkE7QUFBQSxNQUl6Qm5CLElBSnlCO0FBQUEsTUFJbkJ1QixPQUptQjs7QUFBQSxtQkFLSUosc0RBQVEsQ0FBa0IsS0FBbEIsQ0FMWjtBQUFBLE1BS3pCSyxVQUx5QjtBQUFBLE1BS2JDLGFBTGE7O0FBT2hDLE1BQU1DLGNBQWMsR0FBR0MscURBQU8sQ0FBQyxZQUFNO0FBQ2pDLFdBQU85QixTQUFTLENBQ1orQixNQUFNLENBQUNDLE1BQVAsQ0FBYy9CLElBQWQsRUFBb0JvQixNQUFwQixDQUNJLFVBQUNaLFNBQUQ7QUFBQSxhQUNJWSxNQUFNLENBQUNaLFNBQUQsQ0FBTixJQUNBRCxZQUFZLENBQUNDLFNBQUQsRUFBWUMsS0FBWixDQURaLElBRUFNLHNCQUFzQixDQUFDUCxTQUFELEVBQVlrQixVQUFaLENBSDFCO0FBQUEsS0FESixDQURZLEVBT1p6QixPQVBZLENBQWhCO0FBU0gsR0FWNkIsRUFVM0IsQ0FBQ0QsSUFBRCxFQUFPb0IsTUFBUCxFQUFlWCxLQUFmLEVBQXNCaUIsVUFBdEIsQ0FWMkIsQ0FBOUI7QUFXQSxNQUFNTSxVQUFVLEdBQUdILHFEQUFPLENBQUM7QUFBQSxXQUFNRCxjQUFjLENBQUNLLEtBQWYsQ0FBcUIsQ0FBckIsRUFBd0JYLEtBQXhCLENBQU47QUFBQSxHQUFELEVBQXVDLENBQUNNLGNBQUQsRUFBaUJOLEtBQWpCLENBQXZDLENBQTFCO0FBRUFZLDhFQUFpQixDQUFDO0FBQ2RDLFdBQU8sRUFBRXZDLGtCQUFrQixFQURiO0FBRWR3QyxXQUFPLEVBQUVkLEtBQUssR0FBR00sY0FBYyxDQUFDUyxNQUZsQjtBQUdkQyxtQkFBZSxFQUFFLEdBSEg7QUFJZEMsc0JBQWtCLEVBQUU7QUFBQSxhQUFNaEIsUUFBUSxDQUFDLFVBQUNpQixDQUFEO0FBQUEsZUFBT0EsQ0FBQyxHQUFHL0MsVUFBWDtBQUFBLE9BQUQsQ0FBZDtBQUFBO0FBSk4sR0FBRCxDQUFqQjs7QUFPQSxNQUFNZ0QsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQ2xDLFdBQ0k7QUFDSSxlQUFTLEVBQUVDLDZEQUFNLENBQUNDLE1BRHRCO0FBRUksV0FBSyxFQUFFakIsVUFGWDtBQUdJLGNBQVEsRUFBRSxrQkFBQ2tCLENBQUQsRUFBTztBQUNiakIscUJBQWEsQ0FBQ2lCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDQXZCLGdCQUFRLENBQUM5QixVQUFELENBQVI7QUFDSCxPQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRSTtBQUFRLFdBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkosRUFTSTtBQUFRLFdBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSixFQVVJO0FBQVEsV0FBSyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWSixFQVdJO0FBQVEsV0FBSyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYSixDQURKO0FBZUgsR0FoQkQ7O0FBa0JBLFNBQ0k7QUFBSyxhQUFTLEVBQUVpRCw2REFBTSxDQUFDSyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFFTCw2REFBTSxDQUFDTSxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUVJO0FBQUssYUFBUyxFQUFFTiw2REFBTSxDQUFDTyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosQ0FESixFQUtJO0FBQUssYUFBUyxFQUFFUCw2REFBTSxDQUFDUSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxlQUFXLEVBQUMsZUFEaEI7QUFFSSxhQUFTLEVBQUVSLDZEQUFNLENBQUN0QixNQUZ0QjtBQUdJLFNBQUssRUFBRVgsS0FIWDtBQUlJLFlBQVEsRUFBRSxrQkFBQ21DLENBQUQsRUFBTztBQUNicEIsY0FBUSxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZWpDLFdBQWYsR0FBNkJzQyxJQUE3QixFQUFELENBQVI7QUFDQTVCLGNBQVEsQ0FBQzlCLFVBQUQsQ0FBUjtBQUNILEtBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBVUtnRCx1QkFBdUIsRUFWNUIsQ0FMSixFQWlCSTtBQUFLLGFBQVMsRUFBRUMsNkRBQU0sQ0FBQ1UsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLcEIsVUFBVSxDQUFDcUIsR0FBWCxDQUFlLFVBQUNDLElBQUQ7QUFBQSxXQUNaLE1BQUMsb0RBQUQ7QUFBVyxlQUFTLEVBQUVBLElBQXRCO0FBQTRCLFNBQUcsRUFBRUEsSUFBSSxDQUFDNUMsRUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURZO0FBQUEsR0FBZixDQURMLENBakJKLENBREo7QUF5QkgsQ0F0RUQ7O0dBQU1RLFM7VUFvQkZnQixvRTs7O0tBcEJFaEIsUztBQXdFU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Sb3V0ZUdyaWQvUm91dGVHcmlkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBSb3V0ZUNhcmQgfSBmcm9tIFwiY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgUm91dGVEYXRhIH0gZnJvbSBcInR5cGVzXCI7XG5pbXBvcnQgeyByb3V0ZVRpdGxlcyB9IGZyb20gXCJ0aXRsZXNcIjtcblxuaW1wb3J0IHsgdXNlSW5maW5pdGVTY3JvbGwgfSBmcm9tIFwiLi91c2VJbmZpbml0ZVNjcm9sbFwiO1xuaW1wb3J0IHsgc29ydEZ1bmN0aW9ucywgU29ydCB9IGZyb20gXCIuL3NvcnRpbmdcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Sb3V0ZUdyaWQubW9kdWxlLnNjc3NcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBSb3V0ZURhdGE+O1xuICAgIGZpbHRlcj86IChyOiBSb3V0ZURhdGEpID0+IGJvb2xlYW47XG4gICAgc29ydEtleT86IChyOiBSb3V0ZURhdGEpID0+IHN0cmluZyB8IG51bWJlcjtcbn07XG5cbnR5cGUgUm91dGVLaW5kT3B0aW9uID0gXCJhbGxcIiB8IFwiYnVzXCIgfCBcInJhcGlkLXRyYW5zaXRcIiB8IFwicmVnaW9uYWwtcmFpbFwiO1xuXG5jb25zdCBwYWdpbmF0aW9uID0gMTI7XG5jb25zdCBkZWZhdWx0RmlsdGVyID0gKHgpID0+ICEheDtcblxuY29uc3QgZ2V0RG9jdW1lbnRFbGVtZW50ID0gKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBzb3J0T25LZXkgPSAoZGF0YTogUm91dGVEYXRhW10sIHNvcnRLZXk6IFByb3BzW1wic29ydEtleVwiXSkgPT4ge1xuICAgIHJldHVybiBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3Qga2EgPSBzb3J0S2V5KGEpO1xuICAgICAgICBjb25zdCBrYiA9IHNvcnRLZXkoYik7XG4gICAgICAgIGlmIChrYSA9PT0ga2IpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGthID4ga2IgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmNvbnN0IG1hdGNoZXNRdWVyeSA9IChyb3V0ZURhdGE6IFJvdXRlRGF0YSwgcXVlcnk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlRGF0YTtcbiAgICBjb25zdCB0aXRsZSA9IHJvdXRlVGl0bGVzW2lkXTtcbiAgICByZXR1cm4gIXF1ZXJ5IHx8IHRpdGxlPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSB8fCBpZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KTtcbn07XG5cbmNvbnN0IG1hdGNoZXNSb3V0ZUtpbmRPcHRpb24gPSAocm91dGVEYXRhOiBSb3V0ZURhdGEsIG9wdGlvbjogUm91dGVLaW5kT3B0aW9uKSA9PiB7XG4gICAgY29uc3QgeyByb3V0ZUtpbmQgfSA9IHJvdXRlRGF0YTtcbiAgICBpZiAob3B0aW9uID09PSBcImFsbFwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9uID09PSBcInJlZ2lvbmFsLXJhaWxcIiB8fCBvcHRpb24gPT09IFwiYnVzXCIpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlS2luZCA9PT0gb3B0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gcm91dGVLaW5kICE9PSBcInJlZ2lvbmFsLXJhaWxcIiAmJiByb3V0ZUtpbmQgIT09IFwiYnVzXCI7XG59O1xuXG5jb25zdCBSb3V0ZUdyaWQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBmaWx0ZXIgPSBkZWZhdWx0RmlsdGVyIH0gPSBwcm9wcztcbiAgICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKHBhZ2luYXRpb24pO1xuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGU8U29ydD4oXCJraW5kXCIpO1xuICAgIGNvbnN0IFtraW5kT3B0aW9uLCBzZXRLaW5kT3B0aW9uXSA9IHVzZVN0YXRlPFJvdXRlS2luZE9wdGlvbj4oXCJhbGxcIik7XG5cbiAgICBjb25zdCBhdmFpbGFibGVJdGVtcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gc29ydE9uS2V5KFxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhKS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKHJvdXRlRGF0YSkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyKHJvdXRlRGF0YSkgJiZcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc1F1ZXJ5KHJvdXRlRGF0YSwgcXVlcnkpICYmXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXNSb3V0ZUtpbmRPcHRpb24ocm91dGVEYXRhLCBraW5kT3B0aW9uKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHNvcnRLZXlcbiAgICAgICAgKTtcbiAgICB9LCBbZGF0YSwgZmlsdGVyLCBxdWVyeSwga2luZE9wdGlvbl0pO1xuICAgIGNvbnN0IHNob3duSXRlbXMgPSB1c2VNZW1vKCgpID0+IGF2YWlsYWJsZUl0ZW1zLnNsaWNlKDAsIGxpbWl0KSwgW2F2YWlsYWJsZUl0ZW1zLCBsaW1pdF0pO1xuXG4gICAgdXNlSW5maW5pdGVTY3JvbGwoe1xuICAgICAgICBlbGVtZW50OiBnZXREb2N1bWVudEVsZW1lbnQoKSxcbiAgICAgICAgZW5hYmxlZDogbGltaXQgPCBhdmFpbGFibGVJdGVtcy5sZW5ndGgsXG4gICAgICAgIHNjcm9sbFRvbGVyYW5jZTogMzAwLFxuICAgICAgICBvblJlcXVlc3RNb3JlSXRlbXM6ICgpID0+IHNldExpbWl0KChsKSA9PiBsICsgcGFnaW5hdGlvbiksXG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJSb3V0ZUtpbmREcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3R9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2tpbmRPcHRpb259XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEtpbmRPcHRpb24oZS50YXJnZXQudmFsdWUgYXMgUm91dGVLaW5kT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TGltaXQocGFnaW5hdGlvbik7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsIHJvdXRlczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJidXNcIj5CdXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmFwaWQtdHJhbnNpdFwiPlJhcGlkIHRyYW5zaXQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmVnaW9uYWwtcmFpbFwiPkNvbW11dGVyIHJhaWw8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvdXRlR3JpZFdyYXBwZXJ9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgICAgTUJUQSBDb3ZpZCBSZWNvdmVyeSBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFscGhhVGFnfT5BbHBoYTwvZGl2PlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbHN9PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbHRlciByb3V0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRRdWVyeShlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMaW1pdChwYWdpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJSb3V0ZUtpbmREcm9wZG93bigpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvdXRlR3JpZH0+XG4gICAgICAgICAgICAgICAge3Nob3duSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZUNhcmQgcm91dGVEYXRhPXtpdGVtfSBrZXk9e2l0ZW0uaWR9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlR3JpZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/RouteGrid/RouteGrid.tsx\n");

/***/ })

})
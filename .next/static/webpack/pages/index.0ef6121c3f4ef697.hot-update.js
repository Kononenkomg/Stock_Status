"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/_layout */ \"./src/pages/_layout.tsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  text-align: center;\\n  text-decoration: none;\\n  display: inline-block;\\n  font-size: 16px;\\n  margin-left: 10px;\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = (param)=>{\n    let { user  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // Move the hook call to the component body\n    const removeToken = ()=>{\n        // remove token from cookie\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"token\");\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_pages_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \"Hello \",\n                    user.username\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/x258511/Documents/testing/Stock_Status/src/pages/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledButton, {\n                onClick: removeToken,\n                children: \"Log Out\"\n            }, void 0, false, {\n                fileName: \"/Users/x258511/Documents/testing/Stock_Status/src/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/x258511/Documents/testing/Stock_Status/src/pages/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nconst StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].button.withConfig({\n    displayName: \"pages__StyledButton\",\n    componentId: \"sc-e2af70ea-0\"\n})(_templateObject());\n_c1 = StyledButton;\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"StyledButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNxQztBQUdMO0FBQ1E7QUFDRDtBQU12QyxNQUFNSSxPQUF3QixTQUFjO1FBQWIsRUFBRUMsS0FBSSxFQUFFOztJQUNyQyxNQUFNQyxTQUFTSixzREFBU0EsSUFBSSwyQ0FBMkM7SUFFdkUsTUFBTUssY0FBYyxJQUFNO1FBQ3hCLDJCQUEyQjtRQUMzQk4sd0RBQWMsQ0FBQztRQUNmSyxPQUFPRyxJQUFJLENBQUM7SUFDZDtJQUNBLHFCQUNFLDhEQUFDVCxxREFBTUE7OzBCQUNMLDhEQUFDVTs7b0JBQUU7b0JBQU9MLEtBQUtNLFFBQVE7Ozs7Ozs7MEJBQ3ZCLDhEQUFDQztnQkFBYUMsU0FBU047MEJBQWE7Ozs7Ozs7Ozs7OztBQUcxQztHQWRNSDs7UUFDV0Ysa0RBQVNBOzs7S0FEcEJFOztBQWdCTiwrREFBZUEsSUFBSUEsRUFBQztBQWtDcEIsTUFBTVEsZUFBZVQsMkVBQWE7Ozs7TUFBNUJTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvcGFnZXMvX2xheW91dFwiO1xuaW1wb3J0IHsgcHJveHlDbGllbnQgfSBmcm9tIFwiQC9zZXJ2ZXIvaGVscGVyc1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHVzZXI6IFVzZXI7XG59O1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyB1c2VyIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IC8vIE1vdmUgdGhlIGhvb2sgY2FsbCB0byB0aGUgY29tcG9uZW50IGJvZHlcblxuICBjb25zdCByZW1vdmVUb2tlbiA9ICgpID0+IHtcbiAgICAvLyByZW1vdmUgdG9rZW4gZnJvbSBjb29raWVcbiAgICBDb29raWVzLnJlbW92ZShcInRva2VuXCIpO1xuICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHA+SGVsbG8ge3VzZXIudXNlcm5hbWV9PC9wPlxuICAgICAgPFN0eWxlZEJ1dHRvbiBvbkNsaWNrPXtyZW1vdmVUb2tlbn0+TG9nIE91dDwvU3R5bGVkQnV0dG9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCBjb29raWVzID0gY3R4LnJlcS5jb29raWVzO1xuXG4gIGlmICghY29va2llcy50b2tlbikge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogXCIvbG9naW5cIixcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgc3RhdHVzLCB1c2VyIH0gPSBhd2FpdCBwcm94eUNsaWVudC5hdXRoLmF1dGgucXVlcnkoe1xuICAgIHRva2VuOiBjb29raWVzLnRva2VuLFxuICB9KTtcblxuICBpZiAoc3RhdHVzID09PSBcIm9rXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgdXNlcixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVkaXJlY3Q6IHtcbiAgICAgIGRlc3RpbmF0aW9uOiBcIi9sb2dpblwiLFxuICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJDb29raWVzIiwidXNlUm91dGVyIiwic3R5bGVkIiwiSG9tZSIsInVzZXIiLCJyb3V0ZXIiLCJyZW1vdmVUb2tlbiIsInJlbW92ZSIsInB1c2giLCJwIiwidXNlcm5hbWUiLCJTdHlsZWRCdXR0b24iLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});
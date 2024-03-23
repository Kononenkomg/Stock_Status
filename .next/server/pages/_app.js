"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./next.config.js":
/*!************************!*\
  !*** ./next.config.js ***!
  \************************/
/***/ ((module) => {

eval("/** @type {import('next').NextConfig} */ // we can change url for prod env here\n\nconst baseUrl = \"\";\nconst isProd = false;\nconst assertPrefix = isProd ? baseUrl : \"\";\nconst nextConfig = {\n    reactStrictMode: true,\n    basePath: baseUrl,\n    compiler: {\n        styledComponents: {\n            ssr: true\n        }\n    },\n    rewrites: async ()=>{\n        return {\n            beforeFiles: [\n                {\n                    source: `${assertPrefix}/_next/:path*`,\n                    destination: \"/_next/:path*\"\n                }\n            ],\n            fallback: [\n                {\n                    source: `${baseUrl}/api/:path*`,\n                    destination: \"/api/:path*\"\n                }\n            ]\n        };\n    }\n};\nmodule.exports = nextConfig;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LmNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxzQ0FBc0MsR0FFdEMsc0NBQXNDOztBQUN0QyxNQUFNQSxVQUFVO0FBQ2hCLE1BQU1DLFNBQVMsS0FBSztBQUNwQixNQUFNQyxlQUFlRCxTQUFTRCxVQUFVLEVBQUU7QUFFMUMsTUFBTUcsYUFBYTtJQUNqQkMsaUJBQWlCLElBQUk7SUFDckJDLFVBQVVMO0lBQ1ZNLFVBQVU7UUFDUkMsa0JBQWtCO1lBQ2hCQyxLQUFLLElBQUk7UUFDWDtJQUNGO0lBQ0FDLFVBQVUsVUFBWTtRQUNwQixPQUFPO1lBQ0xDLGFBQWE7Z0JBQ1g7b0JBQ0VDLFFBQVEsQ0FBQyxFQUFFVCxhQUFhLGFBQWEsQ0FBQztvQkFDdENVLGFBQWE7Z0JBQ2Y7YUFDRDtZQUNEQyxVQUFVO2dCQUNSO29CQUNFRixRQUFRLENBQUMsRUFBRVgsUUFBUSxXQUFXLENBQUM7b0JBQy9CWSxhQUFhO2dCQUNmO2FBQ0Q7UUFDSDtJQUNGO0FBQ0Y7QUFFQUUsT0FBT0MsT0FBTyxHQUFHWiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zdGFydGVyLWtpdC8uL25leHQuY29uZmlnLmpzPzAxYjQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEB0eXBlIHtpbXBvcnQoJ25leHQnKS5OZXh0Q29uZmlnfSAqL1xuXG4vLyB3ZSBjYW4gY2hhbmdlIHVybCBmb3IgcHJvZCBlbnYgaGVyZVxuY29uc3QgYmFzZVVybCA9ICcnXG5jb25zdCBpc1Byb2QgPSBmYWxzZVxuY29uc3QgYXNzZXJ0UHJlZml4ID0gaXNQcm9kID8gYmFzZVVybCA6ICcnXG5cbmNvbnN0IG5leHRDb25maWcgPSB7XG4gIHJlYWN0U3RyaWN0TW9kZTogdHJ1ZSxcbiAgYmFzZVBhdGg6IGJhc2VVcmwsXG4gIGNvbXBpbGVyOiB7XG4gICAgc3R5bGVkQ29tcG9uZW50czoge1xuICAgICAgc3NyOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHJld3JpdGVzOiBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJlZm9yZUZpbGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzb3VyY2U6IGAke2Fzc2VydFByZWZpeH0vX25leHQvOnBhdGgqYCxcbiAgICAgICAgICBkZXN0aW5hdGlvbjogJy9fbmV4dC86cGF0aConLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGZhbGxiYWNrOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzb3VyY2U6IGAke2Jhc2VVcmx9L2FwaS86cGF0aCpgLFxuICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL2FwaS86cGF0aConLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9XG4gIH0sXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV4dENvbmZpZ1xuIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJpc1Byb2QiLCJhc3NlcnRQcmVmaXgiLCJuZXh0Q29uZmlnIiwicmVhY3RTdHJpY3RNb2RlIiwiYmFzZVBhdGgiLCJjb21waWxlciIsInN0eWxlZENvbXBvbmVudHMiLCJzc3IiLCJyZXdyaXRlcyIsImJlZm9yZUZpbGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJmYWxsYmFjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./next.config.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/trpc */ \"./src/utils/trpc.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @trpc/client */ \"@trpc/client\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! superjson */ \"superjson\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next.config.js */ \"./next.config.js\");\n/* harmony import */ var next_config_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_config_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_trpc__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _trpc_client__WEBPACK_IMPORTED_MODULE_4__]);\n([_utils_trpc__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _trpc_client__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst basePath = String((next_config_js__WEBPACK_IMPORTED_MODULE_6___default().basePath));\nconst MyApp = ({ Component , pageProps  })=>{\n    const [queryClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient({\n            defaultOptions: {\n                queries: {\n                    refetchOnWindowFocus: false,\n                    refetchOnMount: true,\n                    refetchOnReconnect: false,\n                    keepPreviousData: true,\n                    retry: 1,\n                    cacheTime: 1000 * 60 * 60 * 24 * 7\n                }\n            }\n        }));\n    const [trpcClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>_utils_trpc__WEBPACK_IMPORTED_MODULE_2__.trpc.createClient({\n            transformer: (superjson__WEBPACK_IMPORTED_MODULE_5___default()),\n            links: [\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_4__.httpBatchLink)({\n                    url: `${basePath}/api/trpc`\n                })\n            ]\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Next.js + TRPC + React Query\"\n                }, void 0, false, {\n                    fileName: \"/Users/x258511/Documents/testing/Stock_Status/src/pages/_app.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/x258511/Documents/testing/Stock_Status/src/pages/_app.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_trpc__WEBPACK_IMPORTED_MODULE_2__.trpc.Provider, {\n                client: trpcClient,\n                queryClient: queryClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n                    client: queryClient,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/x258511/Documents/testing/Stock_Status/src/pages/_app.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/x258511/Documents/testing/Stock_Status/src/pages/_app.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/x258511/Documents/testing/Stock_Status/src/pages/_app.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzhDO0FBQ1g7QUFDcUM7QUFDNUI7QUFDWDtBQUNNO0FBQ1g7QUFFNUIsTUFBTVEsV0FBV0MsT0FBT0gsZ0VBQW1CO0FBRTNDLE1BQU1JLFFBQVEsQ0FBQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxHQUEwQjtJQUV6RSxNQUFNLENBQUNDLFlBQVksR0FBR2IsK0NBQVFBLENBQzVCLElBQ0UsSUFBSUUsOERBQVdBLENBQUM7WUFDZFksZ0JBQWdCO2dCQUNkQyxTQUFTO29CQUNQQyxzQkFBc0IsS0FBSztvQkFDM0JDLGdCQUFnQixJQUFJO29CQUNwQkMsb0JBQW9CLEtBQUs7b0JBQ3pCQyxrQkFBa0IsSUFBSTtvQkFDdEJDLE9BQU87b0JBQ1BDLFdBQVcsT0FBTyxLQUFLLEtBQUssS0FBSztnQkFDbkM7WUFDRjtRQUNGO0lBRUosTUFBTSxDQUFDQyxXQUFXLEdBQUd0QiwrQ0FBUUEsQ0FBQyxJQUM1QkMsMERBQWlCLENBQUM7WUFDaEJ1QixhQUFhbkIsa0RBQVNBO1lBQ3RCb0IsT0FBTztnQkFDTHJCLDJEQUFhQSxDQUFDO29CQUNac0IsS0FBSyxDQUFDLEVBQUVsQixTQUFTLFNBQVMsQ0FBQztnQkFDN0I7YUFDRDtRQUNIO0lBR0YscUJBQ0U7OzBCQUNFLDhEQUFDRCxrREFBSUE7MEJBQ0gsNEVBQUNvQjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUMxQixzREFBYTtnQkFBQzRCLFFBQVFQO2dCQUFZVCxhQUFhQTswQkFDOUMsNEVBQUNWLHNFQUFtQkE7b0JBQUMwQixRQUFRaEI7OEJBQzNCLDRFQUFDRjt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zdGFydGVyLWtpdC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHRycGMgfSBmcm9tICdAL3V0aWxzL3RycGMnXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSdcbmltcG9ydCB7IGh0dHBCYXRjaExpbmsgfSBmcm9tICdAdHJwYy9jbGllbnQnXG5pbXBvcnQgc3VwZXJqc29uIGZyb20gJ3N1cGVyanNvbidcbmltcG9ydCBuZXh0Q29uZmlnIGZyb20gJ25leHQuY29uZmlnLmpzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBiYXNlUGF0aCA9IFN0cmluZyhuZXh0Q29uZmlnLmJhc2VQYXRoKVxuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKTogUmVhY3RFbGVtZW50IHwgbnVsbCA9PiB7XG5cbiAgY29uc3QgW3F1ZXJ5Q2xpZW50XSA9IHVzZVN0YXRlKFxuICAgICgpID0+XG4gICAgICBuZXcgUXVlcnlDbGllbnQoe1xuICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgIHJlZmV0Y2hPbk1vdW50OiB0cnVlLFxuICAgICAgICAgICAgcmVmZXRjaE9uUmVjb25uZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gICAgICAgICAgICByZXRyeTogMSxcbiAgICAgICAgICAgIGNhY2hlVGltZTogMTAwMCAqIDYwICogNjAgKiAyNCAqIDdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gIClcbiAgY29uc3QgW3RycGNDbGllbnRdID0gdXNlU3RhdGUoKCkgPT5cbiAgICB0cnBjLmNyZWF0ZUNsaWVudCh7XG4gICAgICB0cmFuc2Zvcm1lcjogc3VwZXJqc29uLFxuICAgICAgbGlua3M6IFtcbiAgICAgICAgaHR0cEJhdGNoTGluayh7XG4gICAgICAgICAgdXJsOiBgJHtiYXNlUGF0aH0vYXBpL3RycGNgXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfSlcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TmV4dC5qcyArIFRSUEMgKyBSZWFjdCBRdWVyeTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8dHJwYy5Qcm92aWRlciBjbGllbnQ9e3RycGNDbGllbnR9IHF1ZXJ5Q2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9ID5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICAgIDwvdHJwYy5Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidHJwYyIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsImh0dHBCYXRjaExpbmsiLCJzdXBlcmpzb24iLCJuZXh0Q29uZmlnIiwiSGVhZCIsImJhc2VQYXRoIiwiU3RyaW5nIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJxdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwicmVmZXRjaE9uTW91bnQiLCJyZWZldGNoT25SZWNvbm5lY3QiLCJrZWVwUHJldmlvdXNEYXRhIiwicmV0cnkiLCJjYWNoZVRpbWUiLCJ0cnBjQ2xpZW50IiwiY3JlYXRlQ2xpZW50IiwidHJhbnNmb3JtZXIiLCJsaW5rcyIsInVybCIsInRpdGxlIiwiUHJvdmlkZXIiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/trpc.ts":
/*!***************************!*\
  !*** ./src/utils/trpc.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"trpc\": () => (/* binding */ trpc)\n/* harmony export */ });\n/* harmony import */ var _trpc_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/react-query */ \"@trpc/react-query\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_react_query__WEBPACK_IMPORTED_MODULE_0__]);\n_trpc_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst trpc = (0,_trpc_react_query__WEBPACK_IMPORTED_MODULE_0__.createTRPCReact)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdHJwYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUc1QyxNQUFNQyxPQUFPRCxrRUFBZUEsR0FBYSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zdGFydGVyLWtpdC8uL3NyYy91dGlscy90cnBjLnRzPzExYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVFJQQ1JlYWN0IH0gZnJvbSAnQHRycGMvcmVhY3QtcXVlcnknXG5pbXBvcnQgdHlwZSB7IEFwcFJvdXRlciB9IGZyb20gJ0Avc2VydmVyL3JvdXRlcnMvX2FwcCdcblxuZXhwb3J0IGNvbnN0IHRycGMgPSBjcmVhdGVUUlBDUmVhY3Q8QXBwUm91dGVyPigpXG4iXSwibmFtZXMiOlsiY3JlYXRlVFJQQ1JlYWN0IiwidHJwYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/trpc.ts\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "superjson":
/*!****************************!*\
  !*** external "superjson" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "@trpc/client":
/*!*******************************!*\
  !*** external "@trpc/client" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/client");;

/***/ }),

/***/ "@trpc/react-query":
/*!************************************!*\
  !*** external "@trpc/react-query" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("@trpc/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
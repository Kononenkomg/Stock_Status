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
exports.id = "pages/api/trpc/[trpc]";
exports.ids = ["pages/api/trpc/[trpc]"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "sqlite3":
/*!**************************!*\
  !*** external "sqlite3" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("sqlite3");

/***/ }),

/***/ "superjson":
/*!****************************!*\
  !*** external "superjson" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ "@trpc/server":
/*!*******************************!*\
  !*** external "@trpc/server" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/server");;

/***/ }),

/***/ "@trpc/server/adapters/next":
/*!*********************************************!*\
  !*** external "@trpc/server/adapters/next" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@trpc/server/adapters/next");;

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/constants/secret.ts":
/*!*********************************!*\
  !*** ./src/constants/secret.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SECRET_KEY\": () => (/* binding */ SECRET_KEY)\n/* harmony export */ });\nconst SECRET_KEY = \"veerySecretKey\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uc3RhbnRzL3NlY3JldC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsYUFBYSxpQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc3RhcnRlci1raXQvLi9zcmMvY29uc3RhbnRzL3NlY3JldC50cz81YjhiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTRUNSRVRfS0VZID0gJ3ZlZXJ5U2VjcmV0S2V5JyJdLCJuYW1lcyI6WyJTRUNSRVRfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/constants/secret.ts\n");

/***/ }),

/***/ "(api)/./src/constants/users.ts":
/*!********************************!*\
  !*** ./src/constants/users.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"USERS\": () => (/* binding */ USERS)\n/* harmony export */ });\nconst USERS = [\n    {\n        id: 1,\n        name: \"John\",\n        email: \"jhon@painters.com\",\n        password: \"123456\",\n        role: \"painter\"\n    },\n    {\n        id: 2,\n        name: \"Jane\",\n        email: \"jane@painters.com\",\n        password: \"123456\",\n        role: \"manager\"\n    },\n    {\n        id: 3,\n        name: \"Adam\",\n        email: \"adam@painters.conm\",\n        password: \"123456\",\n        role: \"admin\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uc3RhbnRzL3VzZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxRQUFRO0lBQ2pCO1FBQ0lDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsTUFBTTtJQUNWO0lBQ0E7UUFDSUosSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxNQUFNO0lBQ1Y7SUFDQTtRQUNJSixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLE1BQU07SUFDVjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXN0YXJ0ZXIta2l0Ly4vc3JjL2NvbnN0YW50cy91c2Vycy50cz9kMWJiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBVU0VSUyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnSm9obicsXG4gICAgICAgIGVtYWlsOiAnamhvbkBwYWludGVycy5jb20nLFxuICAgICAgICBwYXNzd29yZDogJzEyMzQ1NicsXG4gICAgICAgIHJvbGU6ICdwYWludGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ0phbmUnLFxuICAgICAgICBlbWFpbDogJ2phbmVAcGFpbnRlcnMuY29tJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcxMjM0NTYnLFxuICAgICAgICByb2xlOiAnbWFuYWdlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdBZGFtJyxcbiAgICAgICAgZW1haWw6ICdhZGFtQHBhaW50ZXJzLmNvbm0nLFxuICAgICAgICBwYXNzd29yZDogJzEyMzQ1NicsXG4gICAgICAgIHJvbGU6ICdhZG1pbidcbiAgICB9XG5dICAgIl0sIm5hbWVzIjpbIlVTRVJTIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInJvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/constants/users.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/trpc/[trpc].ts":
/*!**************************************!*\
  !*** ./src/pages/api/trpc/[trpc].ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server/adapters/next */ \"@trpc/server/adapters/next\");\n/* harmony import */ var _server_routers_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/server/routers/_app */ \"(api)/./src/server/routers/_app.ts\");\n/* harmony import */ var _server_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/server/context */ \"(api)/./src/server/context.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _server_routers_app__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _server_routers_app__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler({\n    router: _server_routers_app__WEBPACK_IMPORTED_MODULE_1__.appRouter,\n    createContext: _server_context__WEBPACK_IMPORTED_MODULE_2__.createContext\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RycGMvW3RycGNdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0Q7QUFDTDtBQUNEO0FBRWhELGlFQUFlQSw0RUFBNkIsQ0FBQztJQUMzQ0ksUUFBUUgsMERBQVNBO0lBQ2pCQyxhQUFhQSw0REFBQUE7QUFDZixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXN0YXJ0ZXIta2l0Ly4vc3JjL3BhZ2VzL2FwaS90cnBjL1t0cnBjXS50cz9jZTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRycGNOZXh0IGZyb20gJ0B0cnBjL3NlcnZlci9hZGFwdGVycy9uZXh0J1xuaW1wb3J0IHsgYXBwUm91dGVyIH0gZnJvbSAnQC9zZXJ2ZXIvcm91dGVycy9fYXBwJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ0Avc2VydmVyL2NvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IHRycGNOZXh0LmNyZWF0ZU5leHRBcGlIYW5kbGVyKHtcbiAgcm91dGVyOiBhcHBSb3V0ZXIsXG4gIGNyZWF0ZUNvbnRleHQsXG59KVxuIl0sIm5hbWVzIjpbInRycGNOZXh0IiwiYXBwUm91dGVyIiwiY3JlYXRlQ29udGV4dCIsImNyZWF0ZU5leHRBcGlIYW5kbGVyIiwicm91dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/trpc/[trpc].ts\n");

/***/ }),

/***/ "(api)/./src/server/context.ts":
/*!*******************************!*\
  !*** ./src/server/context.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContext\": () => (/* binding */ createContext)\n/* harmony export */ });\nconst createContext = async ({ req , res  })=>{\n    return {\n        req,\n        res\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2NvbnRleHQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUdPLE1BQU1BLGdCQUFnQixPQUFPLEVBQUVDLElBQUcsRUFBRUMsSUFBRyxFQUE0QixHQUFLO0lBQzdFLE9BQU87UUFDTEQ7UUFDQUM7SUFDRjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc3RhcnRlci1raXQvLi9zcmMvc2VydmVyL2NvbnRleHQudHM/YzQzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmZlckFzeW5jUmV0dXJuVHlwZSB9IGZyb20gJ0B0cnBjL3NlcnZlcidcbmltcG9ydCB7IENyZWF0ZU5leHRDb250ZXh0T3B0aW9ucyB9IGZyb20gJ0B0cnBjL3NlcnZlci9hZGFwdGVycy9uZXh0J1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29udGV4dCA9IGFzeW5jICh7IHJlcSwgcmVzIH06IENyZWF0ZU5leHRDb250ZXh0T3B0aW9ucykgPT4ge1xuICByZXR1cm4ge1xuICAgIHJlcSxcbiAgICByZXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ29udGV4dCA9IGluZmVyQXN5bmNSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVDb250ZXh0PlxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/server/context.ts\n");

/***/ }),

/***/ "(api)/./src/server/routers/_app.ts":
/*!************************************!*\
  !*** ./src/server/routers/_app.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appRouter\": () => (/* binding */ appRouter)\n/* harmony export */ });\n/* harmony import */ var _trpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trpc */ \"(api)/./src/server/trpc.ts\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"(api)/./src/server/routers/auth.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc__WEBPACK_IMPORTED_MODULE_0__, _auth__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc__WEBPACK_IMPORTED_MODULE_0__, _auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst appRouter = (0,_trpc__WEBPACK_IMPORTED_MODULE_0__.router)({\n    check: _trpc__WEBPACK_IMPORTED_MODULE_0__.procedure.query(()=>{\n        return {\n            ok: \"Up\"\n        };\n    }),\n    auth: _auth__WEBPACK_IMPORTED_MODULE_1__.authRouter\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL3JvdXRlcnMvX2FwcC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDUjtBQUU1QixNQUFNRyxZQUFZRiw2Q0FBTUEsQ0FBQztJQUM5QkcsT0FBT0osa0RBQWUsQ0FBQyxJQUFNO1FBQzNCLE9BQU87WUFBRU0sSUFBSTtRQUFLO0lBQ3BCO0lBQ0FDLE1BQU1MLDZDQUFVQTtBQUNsQixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXN0YXJ0ZXIta2l0Ly4vc3JjL3NlcnZlci9yb3V0ZXJzL19hcHAudHM/MTc3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9jZWR1cmUsIHJvdXRlciB9IGZyb20gJy4uL3RycGMnXG5pbXBvcnQgeyBhdXRoUm91dGVyIH0gZnJvbSAnLi9hdXRoJ1xuXG5leHBvcnQgY29uc3QgYXBwUm91dGVyID0gcm91dGVyKHtcbiAgY2hlY2s6IHByb2NlZHVyZS5xdWVyeSgoKSA9PiB7XG4gICAgcmV0dXJuIHsgb2s6ICdVcCcgfVxuICB9KSxcbiAgYXV0aDogYXV0aFJvdXRlclxufSlcblxuZXhwb3J0IHR5cGUgQXBwUm91dGVyID0gdHlwZW9mIGFwcFJvdXRlclxuIl0sIm5hbWVzIjpbInByb2NlZHVyZSIsInJvdXRlciIsImF1dGhSb3V0ZXIiLCJhcHBSb3V0ZXIiLCJjaGVjayIsInF1ZXJ5Iiwib2siLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/server/routers/_app.ts\n");

/***/ }),

/***/ "(api)/./src/server/routers/auth.ts":
/*!************************************!*\
  !*** ./src/server/routers/auth.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authRouter\": () => (/* binding */ authRouter)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var _trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trpc */ \"(api)/./src/server/trpc.ts\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_secret__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/secret */ \"(api)/./src/constants/secret.ts\");\n/* harmony import */ var _utils_sqlite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/sqlite */ \"(api)/./src/utils/sqlite.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__, _trpc__WEBPACK_IMPORTED_MODULE_1__]);\n([zod__WEBPACK_IMPORTED_MODULE_0__, _trpc__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst userSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    role: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()\n});\nconst authRouter = (0,_trpc__WEBPACK_IMPORTED_MODULE_1__.router)({\n    auth: _trpc__WEBPACK_IMPORTED_MODULE_1__.procedure.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n        token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()\n    })).query(async ({ input  })=>{\n        const { token  } = input;\n        try {\n            const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, _constants_secret__WEBPACK_IMPORTED_MODULE_3__.SECRET_KEY);\n            if (typeof decoded !== \"string\" && \"email\" in decoded) {\n                const db = (0,_utils_sqlite__WEBPACK_IMPORTED_MODULE_4__.openDB)();\n                const tableExists = await (0,_utils_sqlite__WEBPACK_IMPORTED_MODULE_4__.isTableExists)(db, \"users\");\n                if (!tableExists) {\n                    (0,_utils_sqlite__WEBPACK_IMPORTED_MODULE_4__.initialSetUp)(db);\n                }\n                const user = await (0,_utils_sqlite__WEBPACK_IMPORTED_MODULE_4__.getUserByEmail)(db, decoded.email);\n                const validatedUser = userSchema.parse(user);\n                db.close();\n                return {\n                    status: \"ok\",\n                    user: {\n                        username: validatedUser.name,\n                        email: validatedUser.email,\n                        role: user.role\n                    }\n                };\n            }\n            throw new Error(\"Invalid token\");\n        } catch (err) {\n            // token is invalid\n            throw new Error(\"Invalid token\");\n        }\n    }),\n    login: _trpc__WEBPACK_IMPORTED_MODULE_1__.procedure.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n        email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n        password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()\n    })).mutation(async ({ input  })=>{\n        const { email , password  } = input;\n        const db = (0,_utils_sqlite__WEBPACK_IMPORTED_MODULE_4__.openDB)();\n        const tableExists = await (0,_utils_sqlite__WEBPACK_IMPORTED_MODULE_4__.isTableExists)(db, \"users\");\n        if (!tableExists) {\n            (0,_utils_sqlite__WEBPACK_IMPORTED_MODULE_4__.initialSetUp)(db);\n        }\n        const user = await (0,_utils_sqlite__WEBPACK_IMPORTED_MODULE_4__.getUserByEmail)(db, email);\n        if (!user) {\n            throw new Error(\"Invalid email\");\n        }\n        const validatedUser = userSchema.parse(user);\n        if (validatedUser.password !== password) {\n            throw new Error(\"Invalid password\");\n        }\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n            email\n        }, _constants_secret__WEBPACK_IMPORTED_MODULE_3__.SECRET_KEY);\n        return token;\n    })\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL3JvdXRlcnMvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ29CO0FBQ2I7QUFDaUI7QUFNeEI7QUFFeEIsTUFBTVMsYUFBYVQseUNBQVEsQ0FBQztJQUMxQlcsSUFBSVgseUNBQVE7SUFDWmEsTUFBTWIseUNBQVE7SUFDZGUsT0FBT2YseUNBQVE7SUFDZmdCLFVBQVVoQix5Q0FBUTtJQUNsQmlCLE1BQU1qQix5Q0FBUTtBQUNoQjtBQUVPLE1BQU1rQixhQUFhaEIsNkNBQU1BLENBQUM7SUFDL0JpQixNQUFNbEIsa0RBQ0UsQ0FDSkQseUNBQVEsQ0FBQztRQUNQcUIsT0FBT3JCLHlDQUFRO0lBQ2pCLElBRURzQixLQUFLLENBQUMsT0FBTyxFQUFFRixNQUFLLEVBQUUsR0FBSztRQUMxQixNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHRDtRQUNsQixJQUFJO1lBQ0YsTUFBTUcsVUFBVXBCLDBEQUFVLENBQUNrQixPQUFPakIseURBQVVBO1lBQzVDLElBQUksT0FBT21CLFlBQVksWUFBWSxXQUFXQSxTQUFTO2dCQUNyRCxNQUFNRSxLQUFLakIscURBQU1BO2dCQUNqQixNQUFNa0IsY0FBYyxNQUFNbkIsNERBQWFBLENBQUNrQixJQUFJO2dCQUM1QyxJQUFJLENBQUNDLGFBQWE7b0JBQ2hCcEIsMkRBQVlBLENBQUNtQjtnQkFDZixDQUFDO2dCQUNELE1BQU1FLE9BQU8sTUFBTXRCLDZEQUFjQSxDQUFDb0IsSUFBSUYsUUFBUVIsS0FBSztnQkFDbkQsTUFBTWEsZ0JBQWdCbkIsV0FBV29CLEtBQUssQ0FBQ0Y7Z0JBRXZDRixHQUFHSyxLQUFLO2dCQUNSLE9BQU87b0JBQ0xDLFFBQVE7b0JBQ1JKLE1BQU07d0JBQ0pLLFVBQVVKLGNBQWNmLElBQUk7d0JBQzVCRSxPQUFPYSxjQUFjYixLQUFLO3dCQUMxQkUsTUFBTVUsS0FBS1YsSUFBSTtvQkFDakI7Z0JBQ0Y7WUFDRixDQUFDO1lBQ0QsTUFBTSxJQUFJZ0IsTUFBTSxpQkFBaUI7UUFDbkMsRUFBRSxPQUFPQyxLQUFLO1lBQ1osbUJBQW1CO1lBQ25CLE1BQU0sSUFBSUQsTUFBTSxpQkFBaUI7UUFDbkM7SUFDRjtJQUNGRSxPQUFPbEMsa0RBQ0MsQ0FDSkQseUNBQVEsQ0FBQztRQUNQZSxPQUFPZix5Q0FBUTtRQUNmZ0IsVUFBVWhCLHlDQUFRO0lBQ3BCLElBRURvQyxRQUFRLENBQUMsT0FBTyxFQUFFaEIsTUFBSyxFQUFFLEdBQUs7UUFDN0IsTUFBTSxFQUFFTCxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHSTtRQUM1QixNQUFNSyxLQUFLakIscURBQU1BO1FBQ2pCLE1BQU1rQixjQUFjLE1BQU1uQiw0REFBYUEsQ0FBQ2tCLElBQUk7UUFDNUMsSUFBSSxDQUFDQyxhQUFhO1lBQ2hCcEIsMkRBQVlBLENBQUNtQjtRQUNmLENBQUM7UUFDRCxNQUFNRSxPQUFPLE1BQU10Qiw2REFBY0EsQ0FBQ29CLElBQUlWO1FBQ3RDLElBQUksQ0FBQ1ksTUFBTTtZQUNULE1BQU0sSUFBSU0sTUFBTSxpQkFBaUI7UUFDbkMsQ0FBQztRQUNELE1BQU1MLGdCQUFnQm5CLFdBQVdvQixLQUFLLENBQUNGO1FBRXZDLElBQUlDLGNBQWNaLFFBQVEsS0FBS0EsVUFBVTtZQUN2QyxNQUFNLElBQUlpQixNQUFNLG9CQUFvQjtRQUN0QyxDQUFDO1FBQ0QsTUFBTVosUUFBUWxCLHdEQUFRLENBQUM7WUFBRVk7UUFBTSxHQUFHWCx5REFBVUE7UUFDNUMsT0FBT2lCO0lBQ1Q7QUFDSixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXN0YXJ0ZXIta2l0Ly4vc3JjL3NlcnZlci9yb3V0ZXJzL2F1dGgudHM/NTc1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgcHJvY2VkdXJlLCByb3V0ZXIgfSBmcm9tIFwiLi4vdHJwY1wiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBTRUNSRVRfS0VZIH0gZnJvbSBcIkAvY29uc3RhbnRzL3NlY3JldFwiO1xuaW1wb3J0IHtcbiAgZ2V0VXNlckJ5RW1haWwsXG4gIGluaXRpYWxTZXRVcCxcbiAgaXNUYWJsZUV4aXN0cyxcbiAgb3BlbkRCLFxufSBmcm9tIFwiQC91dGlscy9zcWxpdGVcIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHoubnVtYmVyKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLFxuICBwYXNzd29yZDogei5zdHJpbmcoKSxcbiAgcm9sZTogei5zdHJpbmcoKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYXV0aFJvdXRlciA9IHJvdXRlcih7XG4gIGF1dGg6IHByb2NlZHVyZVxuICAgIC5pbnB1dChcbiAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgdG9rZW46IHouc3RyaW5nKCksXG4gICAgICB9KVxuICAgIClcbiAgICAucXVlcnkoYXN5bmMgKHsgaW5wdXQgfSkgPT4ge1xuICAgICAgY29uc3QgeyB0b2tlbiB9ID0gaW5wdXQ7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgU0VDUkVUX0tFWSk7XG4gICAgICAgIGlmICh0eXBlb2YgZGVjb2RlZCAhPT0gXCJzdHJpbmdcIiAmJiBcImVtYWlsXCIgaW4gZGVjb2RlZCkge1xuICAgICAgICAgIGNvbnN0IGRiID0gb3BlbkRCKCk7XG4gICAgICAgICAgY29uc3QgdGFibGVFeGlzdHMgPSBhd2FpdCBpc1RhYmxlRXhpc3RzKGRiLCBcInVzZXJzXCIpO1xuICAgICAgICAgIGlmICghdGFibGVFeGlzdHMpIHtcbiAgICAgICAgICAgIGluaXRpYWxTZXRVcChkYik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyQnlFbWFpbChkYiwgZGVjb2RlZC5lbWFpbCk7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVkVXNlciA9IHVzZXJTY2hlbWEucGFyc2UodXNlcik7XG4gICAgICAgICAgXG4gICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiBcIm9rXCIsXG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgIHVzZXJuYW1lOiB2YWxpZGF0ZWRVc2VyLm5hbWUsXG4gICAgICAgICAgICAgIGVtYWlsOiB2YWxpZGF0ZWRVc2VyLmVtYWlsLFxuICAgICAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0b2tlblwiKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyB0b2tlbiBpcyBpbnZhbGlkXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdG9rZW5cIik7XG4gICAgICB9XG4gICAgfSksXG4gIGxvZ2luOiBwcm9jZWR1cmVcbiAgICAuaW5wdXQoXG4gICAgICB6Lm9iamVjdCh7XG4gICAgICAgIGVtYWlsOiB6LnN0cmluZygpLFxuICAgICAgICBwYXNzd29yZDogei5zdHJpbmcoKSxcbiAgICAgIH0pXG4gICAgKVxuICAgIC5tdXRhdGlvbihhc3luYyAoeyBpbnB1dCB9KSA9PiB7XG4gICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gaW5wdXQ7XG4gICAgICBjb25zdCBkYiA9IG9wZW5EQigpO1xuICAgICAgY29uc3QgdGFibGVFeGlzdHMgPSBhd2FpdCBpc1RhYmxlRXhpc3RzKGRiLCBcInVzZXJzXCIpO1xuICAgICAgaWYgKCF0YWJsZUV4aXN0cykge1xuICAgICAgICBpbml0aWFsU2V0VXAoZGIpO1xuICAgICAgfVxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXJCeUVtYWlsKGRiLCBlbWFpbCk7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbWFpbFwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbGlkYXRlZFVzZXIgPSB1c2VyU2NoZW1hLnBhcnNlKHVzZXIpO1xuICAgICAgXG4gICAgICBpZiAodmFsaWRhdGVkVXNlci5wYXNzd29yZCAhPT0gcGFzc3dvcmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXNzd29yZFwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oeyBlbWFpbCB9LCBTRUNSRVRfS0VZKTtcbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9KSxcbn0pO1xuIl0sIm5hbWVzIjpbInoiLCJwcm9jZWR1cmUiLCJyb3V0ZXIiLCJqd3QiLCJTRUNSRVRfS0VZIiwiZ2V0VXNlckJ5RW1haWwiLCJpbml0aWFsU2V0VXAiLCJpc1RhYmxlRXhpc3RzIiwib3BlbkRCIiwidXNlclNjaGVtYSIsIm9iamVjdCIsImlkIiwibnVtYmVyIiwibmFtZSIsInN0cmluZyIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIiwiYXV0aFJvdXRlciIsImF1dGgiLCJpbnB1dCIsInRva2VuIiwicXVlcnkiLCJkZWNvZGVkIiwidmVyaWZ5IiwiZGIiLCJ0YWJsZUV4aXN0cyIsInVzZXIiLCJ2YWxpZGF0ZWRVc2VyIiwicGFyc2UiLCJjbG9zZSIsInN0YXR1cyIsInVzZXJuYW1lIiwiRXJyb3IiLCJlcnIiLCJsb2dpbiIsIm11dGF0aW9uIiwic2lnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/server/routers/auth.ts\n");

/***/ }),

/***/ "(api)/./src/server/trpc.ts":
/*!****************************!*\
  !*** ./src/server/trpc.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"procedure\": () => (/* binding */ procedure),\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server */ \"@trpc/server\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superjson */ \"superjson\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server__WEBPACK_IMPORTED_MODULE_0__]);\n_trpc_server__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst t = _trpc_server__WEBPACK_IMPORTED_MODULE_0__.initTRPC.context().create({\n    transformer: (superjson__WEBPACK_IMPORTED_MODULE_1___default())\n});\nconst router = t.router;\nconst procedure = t.procedure;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL3RycGMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDTjtBQUdqQyxNQUFNRSxJQUFJRiwwREFBZ0IsR0FBWUksTUFBTSxDQUFDO0lBQzNDQyxhQUFhSixrREFBU0E7QUFDeEI7QUFFTyxNQUFNSyxTQUFTSixFQUFFSSxNQUFNO0FBQ3ZCLE1BQU1DLFlBQVlMLEVBQUVLLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc3RhcnRlci1raXQvLi9zcmMvc2VydmVyL3RycGMudHM/NDU3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0VFJQQyB9IGZyb20gJ0B0cnBjL3NlcnZlcidcbmltcG9ydCBzdXBlcmpzb24gZnJvbSAnc3VwZXJqc29uJ1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vY29udGV4dCdcblxuY29uc3QgdCA9IGluaXRUUlBDLmNvbnRleHQ8Q29udGV4dD4oKS5jcmVhdGUoe1xuICB0cmFuc2Zvcm1lcjogc3VwZXJqc29uLFxufSlcblxuZXhwb3J0IGNvbnN0IHJvdXRlciA9IHQucm91dGVyXG5leHBvcnQgY29uc3QgcHJvY2VkdXJlID0gdC5wcm9jZWR1cmVcbiJdLCJuYW1lcyI6WyJpbml0VFJQQyIsInN1cGVyanNvbiIsInQiLCJjb250ZXh0IiwiY3JlYXRlIiwidHJhbnNmb3JtZXIiLCJyb3V0ZXIiLCJwcm9jZWR1cmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/server/trpc.ts\n");

/***/ }),

/***/ "(api)/./src/utils/sqlite.ts":
/*!*****************************!*\
  !*** ./src/utils/sqlite.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserByEmail\": () => (/* binding */ getUserByEmail),\n/* harmony export */   \"initialSetUp\": () => (/* binding */ initialSetUp),\n/* harmony export */   \"isTableExists\": () => (/* binding */ isTableExists),\n/* harmony export */   \"openDB\": () => (/* binding */ openDB)\n/* harmony export */ });\n/* harmony import */ var _constants_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants/users */ \"(api)/./src/constants/users.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sqlite3 */ \"sqlite3\");\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sqlite3__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction openDB() {\n    const dbPath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname, \"myDatabase.db\");\n    return new sqlite3__WEBPACK_IMPORTED_MODULE_2__.Database(dbPath);\n}\nfunction initialSetUp(db) {\n    db.serialize(()=>{\n        db.run(\"CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT, role TEXT)\");\n        _constants_users__WEBPACK_IMPORTED_MODULE_0__.USERS.forEach((user)=>{\n            db.run(`INSERT INTO users (id, name, email, password, role) VALUES (${user.id}, \"${user.name}\", \"${user.email}\", \"${user.password}\", \"${user.role}\")`);\n        });\n    });\n}\nfunction isTableExists(db, tableName) {\n    return new Promise((resolve, reject)=>{\n        db.get(`SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`, (err, row)=>{\n            if (err) {\n                reject(err);\n            } else {\n                resolve(!!row);\n            }\n        });\n    });\n}\nfunction getUserByEmail(db, email) {\n    return new Promise((resolve, reject)=>{\n        db.get(`SELECT * FROM users WHERE email='${email}'`, (err, row)=>{\n            if (err) {\n                reject(err);\n            } else {\n                resolve(row);\n            }\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvc3FsaXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQztBQUNsQjtBQUVXO0FBRzVCLFNBQVNHLFNBQVM7SUFDdkIsTUFBTUMsU0FBU0gsbURBQVksQ0FBQ0ssV0FBVztJQUN2QyxPQUFPLElBQUlKLDZDQUFRQSxDQUFDRTtBQUN0QixDQUFDO0FBR00sU0FBU0csYUFBYUMsRUFBb0IsRUFBRTtJQUMvQ0EsR0FBR0MsU0FBUyxDQUFDLElBQU07UUFDakJELEdBQUdFLEdBQUcsQ0FBQztRQUVQViwyREFBYSxDQUFDWSxDQUFBQSxPQUFRO1lBQ3BCSixHQUFHRSxHQUFHLENBQUMsQ0FBQyw0REFBNEQsRUFBRUUsS0FBS0MsRUFBRSxDQUFDLEdBQUcsRUFBRUQsS0FBS0UsSUFBSSxDQUFDLElBQUksRUFBRUYsS0FBS0csS0FBSyxDQUFDLElBQUksRUFBRUgsS0FBS0ksUUFBUSxDQUFDLElBQUksRUFBRUosS0FBS0ssSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN2SjtJQUNGO0FBQ0YsQ0FBQztBQUVJLFNBQVNDLGNBQWNWLEVBQW9CLEVBQUVXLFNBQWlCLEVBQUU7SUFDckUsT0FBTyxJQUFJQyxRQUFpQixDQUFDZixTQUFTZ0IsU0FBVztRQUMvQ2IsR0FBR2MsR0FBRyxDQUFDLENBQUMsNERBQTRELEVBQUVILFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQ0ksS0FBS0MsTUFBUTtZQUNoRyxJQUFJRCxLQUFLO2dCQUNQRixPQUFPRTtZQUNULE9BQU87Z0JBQ0xsQixRQUFRLENBQUMsQ0FBQ21CO1lBQ1osQ0FBQztRQUNIO0lBQ0Y7QUFDRixDQUFDO0FBRU0sU0FBU0MsZUFBZWpCLEVBQW9CLEVBQUVPLEtBQWEsRUFBRTtJQUNsRSxPQUFPLElBQUlLLFFBQWEsQ0FBQ2YsU0FBU2dCLFNBQVc7UUFDM0NiLEdBQUdjLEdBQUcsQ0FBQyxDQUFDLGlDQUFpQyxFQUFFUCxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUNRLEtBQUtDLE1BQVE7WUFDakUsSUFBSUQsS0FBSztnQkFDUEYsT0FBT0U7WUFDVCxPQUFPO2dCQUNMbEIsUUFBUW1CO1lBQ1YsQ0FBQztRQUNIO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXN0YXJ0ZXIta2l0Ly4vc3JjL3V0aWxzL3NxbGl0ZS50cz82MGIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVTRVJTIH0gZnJvbSAnQC9jb25zdGFudHMvdXNlcnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgc3FsaXRlMyBmcm9tICdzcWxpdGUzJztcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnc3FsaXRlMyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5EQigpIHtcbiAgY29uc3QgZGJQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ215RGF0YWJhc2UuZGInKTtcbiAgcmV0dXJuIG5ldyBEYXRhYmFzZShkYlBhdGgpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsU2V0VXAoZGI6IHNxbGl0ZTMuRGF0YWJhc2UpIHtcbiAgICBkYi5zZXJpYWxpemUoKCkgPT4ge1xuICAgICAgZGIucnVuKCdDUkVBVEUgVEFCTEUgdXNlcnMgKGlkIElOVEVHRVIgUFJJTUFSWSBLRVksIG5hbWUgVEVYVCwgZW1haWwgVEVYVCwgcGFzc3dvcmQgVEVYVCwgcm9sZSBURVhUKScpO1xuICAgICAgXG4gICAgICBVU0VSUy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICBkYi5ydW4oYElOU0VSVCBJTlRPIHVzZXJzIChpZCwgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCByb2xlKSBWQUxVRVMgKCR7dXNlci5pZH0sIFwiJHt1c2VyLm5hbWV9XCIsIFwiJHt1c2VyLmVtYWlsfVwiLCBcIiR7dXNlci5wYXNzd29yZH1cIiwgXCIke3VzZXIucm9sZX1cIilgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RhYmxlRXhpc3RzKGRiOiBzcWxpdGUzLkRhdGFiYXNlLCB0YWJsZU5hbWU6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGRiLmdldChgU0VMRUNUIG5hbWUgRlJPTSBzcWxpdGVfbWFzdGVyIFdIRVJFIHR5cGU9J3RhYmxlJyBBTkQgbmFtZT0nJHt0YWJsZU5hbWV9J2AsIChlcnIsIHJvdykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoISFyb3cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJCeUVtYWlsKGRiOiBzcWxpdGUzLkRhdGFiYXNlLCBlbWFpbDogc3RyaW5nKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBkYi5nZXQoYFNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgZW1haWw9JyR7ZW1haWx9J2AsIChlcnIsIHJvdykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocm93KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59Il0sIm5hbWVzIjpbIlVTRVJTIiwicGF0aCIsIkRhdGFiYXNlIiwib3BlbkRCIiwiZGJQYXRoIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImluaXRpYWxTZXRVcCIsImRiIiwic2VyaWFsaXplIiwicnVuIiwiZm9yRWFjaCIsInVzZXIiLCJpZCIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicm9sZSIsImlzVGFibGVFeGlzdHMiLCJ0YWJsZU5hbWUiLCJQcm9taXNlIiwicmVqZWN0IiwiZ2V0IiwiZXJyIiwicm93IiwiZ2V0VXNlckJ5RW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/utils/sqlite.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/trpc/[trpc].ts"));
module.exports = __webpack_exports__;

})();
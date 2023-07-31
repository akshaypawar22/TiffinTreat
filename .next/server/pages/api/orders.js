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
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Orders.js":
/*!**************************!*\
  !*** ./models/Orders.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst OrderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    customer: {\n        type: String,\n        required: true,\n        maxlength: 60\n    },\n    address: {\n        type: String,\n        required: true,\n        maxlength: 200\n    },\n    total: {\n        type: Number,\n        required: true\n    },\n    status: {\n        type: Number,\n        default: 0\n    },\n    method: {\n        type: Number,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", OrderSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxXQUFXLEdBQUcsSUFBSUQsd0RBQWUsQ0FDckM7SUFDRUcsUUFBUSxFQUFFO1FBQ1JDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxTQUFTLEVBQUUsRUFBRTtLQUNkO0lBQ0RDLE9BQU8sRUFBRTtRQUNQSixJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsU0FBUyxFQUFFLEdBQUc7S0FDZjtJQUNERSxLQUFLLEVBQUU7UUFDTEwsSUFBSSxFQUFFTSxNQUFNO1FBQ1pKLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDREssTUFBTSxFQUFFO1FBQ05QLElBQUksRUFBRU0sTUFBTTtRQUNaRSxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0RDLE1BQU0sRUFBRTtRQUNOVCxJQUFJLEVBQUVNLE1BQU07UUFDWkosUUFBUSxFQUFDLElBQUk7S0FDZDtDQUNGLEVBQ0Q7SUFBRVEsVUFBVSxFQUFFLElBQUk7Q0FBRSxDQUNyQjtBQUVELGlFQUFlZCw4REFBcUIsSUFBSUEscURBQWMsQ0FBQyxPQUFPLEVBQUVDLFdBQVcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZGFwcC8uL21vZGVscy9PcmRlcnMuanM/OWM1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBPcmRlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgY3VzdG9tZXI6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWF4bGVuZ3RoOiA2MCxcclxuICAgIH0sXHJcbiAgICBhZGRyZXNzOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1heGxlbmd0aDogMjAwLFxyXG4gICAgfSxcclxuICAgIHRvdGFsOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdDogMCxcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5PcmRlciB8fCBtb25nb29zZS5tb2RlbChcIk9yZGVyXCIsIE9yZGVyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJPcmRlclNjaGVtYSIsIlNjaGVtYSIsImN1c3RvbWVyIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibWF4bGVuZ3RoIiwiYWRkcmVzcyIsInRvdGFsIiwiTnVtYmVyIiwic3RhdHVzIiwiZGVmYXVsdCIsIm1ldGhvZCIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJPcmRlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Orders.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders/index.js":
/*!***********************************!*\
  !*** ./pages/api/orders/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/Orders */ \"(api)/./models/Orders.js\");\n/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/mongo */ \"(api)/./util/mongo.js\");\n\n\nconst handler = async (req, res)=>{\n    const { method  } = req;\n    await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const orders = await _models_Orders__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n            res.status(200).json(orders);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const order = await _models_Orders__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(req.body);\n            res.status(201).json(order);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNDO0FBRTVDLE1BQU1FLE9BQU8sR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNsQyxNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHRixHQUFHO0lBRXRCLE1BQU1GLHVEQUFTLEVBQUUsQ0FBQztJQUVsQixJQUFJSSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxNQUFNLEdBQUcsTUFBTU4sMkRBQVUsRUFBRTtZQUNqQ0ksR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsTUFBTSxDQUFDLENBQUM7U0FDOUIsQ0FBQyxPQUFPSSxHQUFHLEVBQUU7WUFDWk4sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUM7U0FDM0I7S0FDRjtJQUNELElBQUlMLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDckIsSUFBSTtZQUNGLE1BQU1NLEtBQUssR0FBRyxNQUFNWCw2REFBWSxDQUFDRyxHQUFHLENBQUNVLElBQUksQ0FBQztZQUMxQ1QsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0UsS0FBSyxDQUFDLENBQUM7U0FDN0IsQ0FBQyxPQUFPRCxHQUFHLEVBQUU7WUFDWk4sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUM7U0FDM0I7S0FDRjtDQUNGO0FBRUQsaUVBQWVSLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2RhcHAvLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzP2M1OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9yZGVyIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvT3JkZXJzXCI7XHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWwvbW9uZ29cIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xyXG5cclxuICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuXHJcbiAgaWYgKG1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgb3JkZXJzID0gYXdhaXQgT3JkZXIuZmluZCgpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihvcmRlcnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChtZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBvcmRlciA9IGF3YWl0IE9yZGVyLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKG9yZGVyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIk9yZGVyIiwiZGJDb25uZWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm9yZGVycyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwib3JkZXIiLCJjcmVhdGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders/index.js\n");

/***/ }),

/***/ "(api)/./util/mongo.js":
/*!***********************!*\
  !*** ./util/mongo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URL = process.env.MONGO_URL;\nif (!MONGO_URL) {\n    throw new Error(\"Please define the MONGO_URL environment variable inside .env.local\");\n}\n/**\r\n * Global is used here to maintain a cached connection across hot reloads\r\n * in development. This prevents connections growing exponentially\r\n * during API Route usage.\r\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URL, opts).then((mongoose1)=>{\n            return mongoose1;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL21vbmdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxTQUFTLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixTQUFTO0FBRXZDLElBQUksQ0FBQ0EsU0FBUyxFQUFFO0lBQ2QsTUFBTSxJQUFJRyxLQUFLLENBQ2Isb0VBQW9FLENBQ3JFLENBQUM7Q0FDSDtBQUVEO0FBT0EsSUFBSSxDQUFDQyxNQUFNLEVBQUU7SUFDWEEsTUFBTSxHQUFHQyxNQUFNLENBQUNOLFFBQVEsR0FBRztRQUFFTyxJQUFJLEVBQUUsSUFBSTtRQUFFQyxPQUFPLEVBQUUsSUFBSTtLQUFFLENBQUM7Q0FDMUQ7QUFFRCxlQUFlQztJQUNiLElBQUlKLE1BQU0sQ0FBQ0UsSUFBSSxFQUFFOzs7SUFJakIsSUFBSSxDQUFDRixNQUFNLENBQUNHLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxJQUFJLEdBQUc7WUFDWEMsY0FBYzs7UUFHaEJOLE1BQU0sQ0FBQ0csT0FBTyxHQUFHUjtZQUNmLE9BQU9BO1NBQ1IsQ0FBQyxDQUFDO0tBQ0o7SUFDREssTUFBTSxDQUFDRSxJQUFJLEdBQUcsTUFBTUYsQ0FBQUEsdURBQWU7SUFDbkMsT0FBT0EsTUFBTSxDQUFDRSxJQUFJLENBQUM7Q0FDcEI7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2RhcHAvLi91dGlsL21vbmdvLmpzP2MwYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgTU9OR09fVVJMID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMO1xyXG5cclxuaWYgKCFNT05HT19VUkwpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPX1VSTCBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcclxuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XHJcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXHJcbiAqL1xyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xyXG5cclxuaWYgKCFjYWNoZWQpIHtcclxuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xyXG4gIGlmIChjYWNoZWQuY29ubikge1xyXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09fVVJMLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gbW9uZ29vc2U7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09fVVJMIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./util/mongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders/index.js"));
module.exports = __webpack_exports__;

})();
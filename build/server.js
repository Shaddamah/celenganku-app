/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime */ \"regenerator-runtime\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var hpp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hpp */ \"hpp\");\n/* harmony import */ var hpp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hpp__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var xss_clean__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xss-clean */ \"xss-clean\");\n/* harmony import */ var xss_clean__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xss_clean__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global/config */ \"./server/global/config.js\");\n/* harmony import */ var _webpack_dev__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../webpack.dev */ \"./webpack.dev.js\");\n/* harmony import */ var _webpack_dev__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _routes_siswa_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/siswa-routes */ \"./server/routes/siswa-routes.js\");\n/* harmony import */ var _routes_admin_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/admin-routes */ \"./server/routes/admin-routes.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./controllers/auth-controller */ \"./server/controllers/auth-controller.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_4___default()();\nvar HTML_FILE = path__WEBPACK_IMPORTED_MODULE_5___default().join(__dirname, 'index.html');\nvar compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()((_webpack_dev__WEBPACK_IMPORTED_MODULE_13___default()));\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n  publicPath: (_webpack_dev__WEBPACK_IMPORTED_MODULE_13___default().output.publicPath)\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\napp.use(cors__WEBPACK_IMPORTED_MODULE_7___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_8___default()());\napp.use(xss_clean__WEBPACK_IMPORTED_MODULE_10___default()());\napp.use(hpp__WEBPACK_IMPORTED_MODULE_9___default()());\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_11___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default().json({\n  limit: '15kb'\n}));\napp.use('/api/siswa', _routes_siswa_routes__WEBPACK_IMPORTED_MODULE_14__.default);\napp.use('/api/admin', _routes_admin_routes__WEBPACK_IMPORTED_MODULE_15__.default);\napp.get('/token', _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_16__.default.requireAuth, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_16__.default.retrieveToken);\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_6___default().json());\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default().static(__dirname));\napp.use('/', function (req, res) {\n  return res.sendFile(HTML_FILE);\n});\napp.get('*', function (req, res, next) {\n  compiler.outputFileSystem.readFile(path__WEBPACK_IMPORTED_MODULE_5___default().join(_global_config__WEBPACK_IMPORTED_MODULE_12__.default.DIST_DIR, 'index.html'), function (err, result) {\n    if (err) {\n      return next(err);\n    }\n\n    res.set('content-type', 'text/html');\n    res.send(result);\n    res.end();\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://celenganku-app/./server/app.js?");

/***/ }),

/***/ "./server/controllers/admin-controller.js":
/*!************************************************!*\
  !*** ./server/controllers/admin-controller.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _base_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-controller */ \"./server/controllers/base-controller.js\");\n/* harmony import */ var _models_siswa_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/siswa-model */ \"./server/models/siswa-model.js\");\n/* harmony import */ var _global_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/firebase */ \"./server/global/firebase.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/* eslint-disable camelcase */\n\n\n\nvar Admin = _global_firebase__WEBPACK_IMPORTED_MODULE_2__.default.collection('akun_admin');\nvar AdminController = {\n  getAdmin: _base_controller__WEBPACK_IMPORTED_MODULE_0__.default.getOne(_models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.akun),\n  deleteAdmin: _base_controller__WEBPACK_IMPORTED_MODULE_0__.default.deleteOne(_models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.akun, _models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.profil),\n  createAdmin: function () {\n    var _createAdmin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n      var _req$body, id_admin, nama, password, account;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _req$body = req.body, id_admin = _req$body.id_admin, nama = _req$body.nama, password = _req$body.password; // Check if req.body is not empty\n\n              if (!(!id_admin || !nama || !password)) {\n                _context.next = 4;\n                break;\n              }\n\n              return _context.abrupt(\"return\", res.status(404).json({\n                status: 'failed',\n                error: true,\n                message: 'Please provide ID, Name, or password',\n                response: req.body\n              }));\n\n            case 4:\n              _context.next = 6;\n              return Admin.doc(id_admin).get();\n\n            case 6:\n              account = _context.sent;\n\n              if (account.exists) {\n                res.status(401).json({\n                  status: 'failed',\n                  error: true,\n                  message: 'Account with this ID already exist',\n                  response: req.body\n                });\n              }\n\n              _context.next = 10;\n              return Admin.akun.doc(id_admin).set({\n                id_admin: id_admin,\n                nama: nama,\n                password: password\n              });\n\n            case 10:\n              req.body.password = undefined;\n              res.status(200).json({\n                status: 'success',\n                error: false,\n                response: req.body\n              });\n              return _context.abrupt(\"return\", _objectSpread(_objectSpread({}, req.body), {}, {\n                error: false\n              }));\n\n            case 15:\n              _context.prev = 15;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n              res.status(502).json({\n                status: 'success',\n                error: true,\n                response: _context.t0\n              });\n\n            case 19:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 15]]);\n    }));\n\n    function createAdmin(_x, _x2, _x3) {\n      return _createAdmin.apply(this, arguments);\n    }\n\n    return createAdmin;\n  }(),\n  updateAdmin: function () {\n    var _updateAdmin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {\n      var id_admin, account, accountData, updateData;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              id_admin = req.params.id_admin;\n              _context2.next = 4;\n              return Admin.doc(id_admin).get();\n\n            case 4:\n              account = _context2.sent;\n\n              if (!account.exists) {\n                res.status(401).json({\n                  status: 'failed',\n                  error: true,\n                  message: 'Account with this ID doesn\\'t exist',\n                  response: req.body\n                });\n              }\n\n              accountData = account.data();\n              updateData = {\n                id_admin: req.body.id_admin || accountData.id_admin,\n                nama: req.body.nama || accountData.nama,\n                password: req.body.password || accountData.password\n              }; // Check if req.body is not empty\n\n              if (!(!updateData.email || !updateData.password)) {\n                _context2.next = 10;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", res.status(404).json({\n                status: 'failed',\n                error: true,\n                message: 'Please provide Email, or password',\n                response: req.body\n              }));\n\n            case 10:\n              _context2.next = 12;\n              return Admin.doc(id_admin).update({\n                id_admin: updateData.id_admin,\n                nama: updateData.nama,\n                password: updateData.password\n              });\n\n            case 12:\n              req.body.password = undefined;\n              res.status(200).json({\n                status: 'success',\n                error: false,\n                response: req.body\n              });\n              return _context2.abrupt(\"return\", {\n                success: true\n              });\n\n            case 17:\n              _context2.prev = 17;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.log(_context2.t0);\n              res.status(502).json({\n                status: 'failed',\n                error: true,\n                response: _context2.t0\n              });\n\n            case 21:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 17]]);\n    }));\n\n    function updateAdmin(_x4, _x5, _x6) {\n      return _updateAdmin.apply(this, arguments);\n    }\n\n    return updateAdmin;\n  }()\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminController);\n\n//# sourceURL=webpack://celenganku-app/./server/controllers/admin-controller.js?");

/***/ }),

/***/ "./server/controllers/auth-controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth-controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_siswa_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/siswa-model */ \"./server/models/siswa-model.js\");\n/* harmony import */ var _siswa_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./siswa-controller */ \"./server/controllers/siswa-controller.js\");\n/* harmony import */ var _global_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/firebase */ \"./server/global/firebase.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/* eslint-disable camelcase */\n\n/* eslint-disable consistent-return */\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0___default().config();\nvar maxAge = 3 * 24 * 60 * 60;\nvar Admin = _global_firebase__WEBPACK_IMPORTED_MODULE_4__.default.collection('akun_admin');\n\nvar createToken = function createToken(id) {\n  var role = 'user';\n\n  if (id.length < 10) {\n    role = 'admin';\n  }\n\n  var accessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n    id: id,\n    role: role\n  }, process.env.ACCESS_TOKEN_SECRET, {\n    expiresIn: process.env.ACCESS_EXPIRE_TIME\n  });\n  return accessToken;\n};\n\nvar AuthController = {\n  requireAuth: function requireAuth(req, res, next) {\n    var token = req.cookies.jwt;\n\n    if (token) {\n      jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decodedToken) {\n        if (err) {\n          console.log(err.message);\n          res.redirect('/login');\n        } else {\n          next();\n        }\n      });\n    } else {\n      res.redirect('/login');\n    }\n  },\n  restrictTo: function restrictTo() {\n    for (var _len = arguments.length, roles = new Array(_len), _key = 0; _key < _len; _key++) {\n      roles[_key] = arguments[_key];\n    }\n\n    return function (req, res, next) {\n      if (!roles.includes(req.user.role)) {\n        res.status(401).json({\n          status: 'failed',\n          error: true,\n          message: 'You\\'re not allowed to do that action',\n          response: req.body\n        });\n      }\n\n      next();\n    };\n  },\n  adminLogin: function () {\n    var _adminLogin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n      var _req$body, id_admin, password, account, token;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _req$body = req.body, id_admin = _req$body.id_admin, password = _req$body.password;\n\n              if (!(!id_admin || !password)) {\n                _context.next = 4;\n                break;\n              }\n\n              return _context.abrupt(\"return\", res.status(404).json({\n                status: 'failed',\n                error: true,\n                message: 'Please provide ID, or password',\n                response: req.body\n              }));\n\n            case 4:\n              _context.next = 6;\n              return Admin.where('id_admin', '==', id_admin).where('password', '==', password).get();\n\n            case 6:\n              account = _context.sent;\n\n              if (account.empty) {\n                res.status(401).json({\n                  status: 'failed',\n                  error: true,\n                  message: 'Wrong ID or Password',\n                  response: req.body\n                });\n              }\n\n              token = createToken(id_admin);\n              req.body.password = undefined;\n              res.cookie('jwt', token, {\n                httpOnly: true,\n                maxAge: maxAge * 1000\n              });\n              res.status(200).json({\n                status: 'success',\n                error: false,\n                response: req.body\n              });\n              _context.next = 17;\n              break;\n\n            case 14:\n              _context.prev = 14;\n              _context.t0 = _context[\"catch\"](0);\n              next(_context.t0);\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 14]]);\n    }));\n\n    function adminLogin(_x, _x2, _x3) {\n      return _adminLogin.apply(this, arguments);\n    }\n\n    return adminLogin;\n  }(),\n  login: function () {\n    var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {\n      var _req$body2, nisn, password, account, token;\n\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _req$body2 = req.body, nisn = _req$body2.nisn, password = _req$body2.password;\n\n              if (!(!nisn || !password)) {\n                _context2.next = 4;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", res.status(404).json({\n                status: 'failed',\n                error: true,\n                message: 'Please provide NISN, or password',\n                response: req.body\n              }));\n\n            case 4:\n              _context2.next = 6;\n              return _models_siswa_model__WEBPACK_IMPORTED_MODULE_2__.default.akun.where('nisn', '==', nisn).where('password', '==', password).get();\n\n            case 6:\n              account = _context2.sent;\n\n              if (account.empty) {\n                res.status(401).json({\n                  status: 'failed',\n                  error: true,\n                  message: 'Wrong NISN or Password',\n                  response: req.body\n                });\n              }\n\n              token = createToken(nisn);\n              req.body.password = undefined;\n              res.cookie('jwt', token, {\n                httpOnly: true,\n                maxAge: maxAge * 1000\n              });\n              res.status(200).json({\n                status: 'success',\n                error: false,\n                response: req.body\n              });\n              _context2.next = 17;\n              break;\n\n            case 14:\n              _context2.prev = 14;\n              _context2.t0 = _context2[\"catch\"](0);\n              next(_context2.t0);\n\n            case 17:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 14]]);\n    }));\n\n    function login(_x4, _x5, _x6) {\n      return _login.apply(this, arguments);\n    }\n\n    return login;\n  }(),\n  register: function () {\n    var _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {\n      var _yield$SiswaControlle, nisn, token;\n\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return _siswa_controller__WEBPACK_IMPORTED_MODULE_3__.default.createAkunSiswa(req, res, next);\n\n            case 2:\n              _yield$SiswaControlle = _context3.sent;\n              nisn = _yield$SiswaControlle.nisn;\n              console.log(nisn);\n              token = createToken(nisn);\n              req.body.password = undefined;\n              res.cookie('jwt', token, {\n                httpOnly: true,\n                maxAge: maxAge * 1000\n              });\n              res.status(200).json({\n                status: 'success',\n                error: false,\n                response: req.body\n              });\n\n            case 9:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    function register(_x7, _x8, _x9) {\n      return _register.apply(this, arguments);\n    }\n\n    return register;\n  }(),\n  retrieveToken: function () {\n    var _retrieveToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              res.status(200).json({\n                status: 'success',\n                error: false,\n                response: req.cookies.jwt\n              });\n\n            case 1:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    function retrieveToken(_x10, _x11, _x12) {\n      return _retrieveToken.apply(this, arguments);\n    }\n\n    return retrieveToken;\n  }()\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthController);\n\n//# sourceURL=webpack://celenganku-app/./server/controllers/auth-controller.js?");

/***/ }),

/***/ "./server/controllers/base-controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/base-controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_appError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/appError */ \"./server/utils/appError.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/* eslint-disable consistent-return */\n\nvar BaseController = {\n  deleteOne: function deleteOne() {\n    for (var _len = arguments.length, Model = new Array(_len), _key = 0; _key < _len; _key++) {\n      Model[_key] = arguments[_key];\n    }\n\n    return /*#__PURE__*/function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                try {\n                  Model.forEach( /*#__PURE__*/function () {\n                    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(model) {\n                      return regeneratorRuntime.wrap(function _callee$(_context) {\n                        while (1) {\n                          switch (_context.prev = _context.next) {\n                            case 0:\n                              _context.next = 2;\n                              return model.doc(req.params.id)[\"delete\"]();\n\n                            case 2:\n                            case \"end\":\n                              return _context.stop();\n                          }\n                        }\n                      }, _callee);\n                    }));\n\n                    return function (_x4) {\n                      return _ref2.apply(this, arguments);\n                    };\n                  }());\n                  res.status(200).json({\n                    status: 'success',\n                    error: false,\n                    results: \"Deleted \".concat(Model.length, \" document\")\n                  });\n                } catch (error) {\n                  res.status(502).json({\n                    status: 'success',\n                    error: true,\n                    response: error\n                  });\n                }\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n      };\n    }();\n  },\n  updateOne: function updateOne(Model) {\n    return /*#__PURE__*/function () {\n      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {\n        var doc;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.prev = 0;\n                _context3.next = 3;\n                return Model.findByIdAndUpdate(req.params.id, req.body, {\n                  \"new\": true,\n                  runValidators: true\n                });\n\n              case 3:\n                doc = _context3.sent;\n\n                if (doc) {\n                  _context3.next = 6;\n                  break;\n                }\n\n                return _context3.abrupt(\"return\", next(new _utils_appError__WEBPACK_IMPORTED_MODULE_0__.default(404, 'fail', 'No document found with that id'), req, res, next));\n\n              case 6:\n                res.status(200).json(_objectSpread({\n                  status: 'success'\n                }, doc));\n                _context3.next = 12;\n                break;\n\n              case 9:\n                _context3.prev = 9;\n                _context3.t0 = _context3[\"catch\"](0);\n                next(_context3.t0);\n\n              case 12:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, null, [[0, 9]]);\n      }));\n\n      return function (_x5, _x6, _x7) {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n  },\n  getOne: function getOne(Model) {\n    return /*#__PURE__*/function () {\n      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {\n        var doc, data;\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.prev = 0;\n                _context4.next = 3;\n                return Model.doc(req.params.id).get();\n\n              case 3:\n                doc = _context4.sent;\n\n                if (doc.exists) {\n                  _context4.next = 7;\n                  break;\n                }\n\n                res.status(401).json({\n                  status: 'failed',\n                  error: true,\n                  message: 'No document found with that id',\n                  response: req.params\n                });\n                return _context4.abrupt(\"return\", {\n                  success: false\n                });\n\n              case 7:\n                data = doc.data();\n                res.status(200).json(_objectSpread({\n                  status: 'success',\n                  error: false\n                }, data));\n                return _context4.abrupt(\"return\", {\n                  success: true\n                });\n\n              case 12:\n                _context4.prev = 12;\n                _context4.t0 = _context4[\"catch\"](0);\n                res.status(502).json({\n                  status: 'success',\n                  error: true,\n                  response: _context4.t0\n                });\n\n              case 15:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, null, [[0, 12]]);\n      }));\n\n      return function (_x8, _x9, _x10) {\n        return _ref4.apply(this, arguments);\n      };\n    }();\n  },\n  getAll: function getAll(Model) {\n    return /*#__PURE__*/function () {\n      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {\n        var data, snapshot;\n        return regeneratorRuntime.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                _context5.prev = 0;\n                data = [];\n                _context5.next = 4;\n                return Model.get();\n\n              case 4:\n                snapshot = _context5.sent;\n                snapshot.forEach(function (doc) {\n                  data.push(doc.data());\n                });\n                res.status(200).json(_objectSpread({\n                  status: 'success',\n                  error: false,\n                  results: data.length\n                }, data));\n\n                if (!(data.length > 0)) {\n                  _context5.next = 9;\n                  break;\n                }\n\n                return _context5.abrupt(\"return\", {\n                  success: true\n                });\n\n              case 9:\n                return _context5.abrupt(\"return\", {\n                  success: false\n                });\n\n              case 12:\n                _context5.prev = 12;\n                _context5.t0 = _context5[\"catch\"](0);\n                res.status(502).json({\n                  status: 'success',\n                  error: true,\n                  response: _context5.t0\n                });\n\n              case 15:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5, null, [[0, 12]]);\n      }));\n\n      return function (_x11, _x12, _x13) {\n        return _ref5.apply(this, arguments);\n      };\n    }();\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseController);\n\n//# sourceURL=webpack://celenganku-app/./server/controllers/base-controller.js?");

/***/ }),

/***/ "./server/controllers/siswa-controller.js":
/*!************************************************!*\
  !*** ./server/controllers/siswa-controller.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _base_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-controller */ \"./server/controllers/base-controller.js\");\n/* harmony import */ var _models_siswa_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/siswa-model */ \"./server/models/siswa-model.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/* eslint-disable camelcase */\n\n\nvar SiswaController = {\n  getAllSiswaData: _base_controller__WEBPACK_IMPORTED_MODULE_0__.default.getAll(_models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.data),\n  getAllAkunSiswa: _base_controller__WEBPACK_IMPORTED_MODULE_0__.default.getAll(_models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.akun),\n  getDataSiswa: _base_controller__WEBPACK_IMPORTED_MODULE_0__.default.getOne(_models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.data),\n  getProfilSiswa: _base_controller__WEBPACK_IMPORTED_MODULE_0__.default.getOne(_models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.profil),\n  getAkunSiswa: _base_controller__WEBPACK_IMPORTED_MODULE_0__.default.getOne(_models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.akun),\n  deleteAkunSiswa: _base_controller__WEBPACK_IMPORTED_MODULE_0__.default.deleteOne(_models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.akun, _models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.profil),\n  createAkunSiswa: function () {\n    var _createAkunSiswa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n      var _req$body, nisn, email, password, no_telepon, url_foto, data, account;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _req$body = req.body, nisn = _req$body.nisn, email = _req$body.email, password = _req$body.password, no_telepon = _req$body.no_telepon, url_foto = _req$body.url_foto; // Check if req.body is not empty\n\n              if (!(!nisn || !email || !password)) {\n                _context.next = 4;\n                break;\n              }\n\n              return _context.abrupt(\"return\", res.status(404).json({\n                status: 'failed',\n                error: true,\n                message: 'Please provide NISN, Email, or password',\n                response: req.body\n              }));\n\n            case 4:\n              _context.next = 6;\n              return _models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.data.doc(nisn).get();\n\n            case 6:\n              data = _context.sent;\n\n              if (!data.exists) {\n                res.status(401).json({\n                  status: 'failed',\n                  error: true,\n                  message: 'This NISN isn\\'t registered',\n                  response: req.body\n                });\n              } // Check for existed document\n\n\n              _context.next = 10;\n              return _models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.akun.doc(nisn).get();\n\n            case 10:\n              account = _context.sent;\n\n              if (account.exists) {\n                res.status(401).json({\n                  status: 'failed',\n                  error: true,\n                  message: 'Account with this NISN already exist',\n                  response: req.body\n                });\n              }\n\n              _context.next = 14;\n              return _models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.akun.doc(nisn).set({\n                nisn: nisn,\n                email: email,\n                password: password,\n                saldo: 0\n              });\n\n            case 14:\n              _context.next = 16;\n              return _models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.profil.doc(nisn).set({\n                nisn: nisn,\n                no_telepon: no_telepon || '',\n                url_foto: url_foto || ''\n              });\n\n            case 16:\n              req.body.password = undefined;\n              res.status(200).json({\n                status: 'success',\n                error: false,\n                response: req.body\n              });\n              return _context.abrupt(\"return\", _objectSpread(_objectSpread({}, req.body), {}, {\n                error: false\n              }));\n\n            case 21:\n              _context.prev = 21;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n              res.status(502).json({\n                status: 'success',\n                error: true,\n                response: _context.t0\n              });\n\n            case 25:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 21]]);\n    }));\n\n    function createAkunSiswa(_x, _x2, _x3) {\n      return _createAkunSiswa.apply(this, arguments);\n    }\n\n    return createAkunSiswa;\n  }(),\n  updateAkunSiswa: function () {\n    var _updateAkunSiswa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {\n      var nisn, account, accountData, updateData;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              nisn = req.params.id;\n              _context2.next = 4;\n              return _models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.akun.doc(nisn).get();\n\n            case 4:\n              account = _context2.sent;\n\n              if (!account.exists) {\n                res.status(401).json({\n                  status: 'failed',\n                  error: true,\n                  message: 'Account with this NISN doesn\\'t exist',\n                  response: req.body\n                });\n              }\n\n              accountData = account.data();\n              updateData = {\n                email: req.body.email || accountData.email,\n                password: req.body.password || accountData.password,\n                no_telepon: req.body.no_telepon || accountData.no_telepon,\n                url_foto: req.body.url_foto || accountData.url_foto\n              }; // Check for existed document\n\n              _context2.next = 10;\n              return _models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.akun.doc(nisn).update({\n                email: updateData.email,\n                password: updateData.password\n              });\n\n            case 10:\n              _context2.next = 12;\n              return _models_siswa_model__WEBPACK_IMPORTED_MODULE_1__.default.profil.doc(nisn).set({\n                no_telepon: updateData.no_telepon || '',\n                url_foto: updateData.url_foto || ''\n              });\n\n            case 12:\n              req.body.password = undefined;\n              res.status(200).json({\n                status: 'success',\n                error: false,\n                response: req.body\n              });\n              return _context2.abrupt(\"return\", {\n                success: true\n              });\n\n            case 17:\n              _context2.prev = 17;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.log(_context2.t0);\n              res.status(502).json({\n                status: 'failed',\n                error: true,\n                response: _context2.t0\n              });\n\n            case 21:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 17]]);\n    }));\n\n    function updateAkunSiswa(_x4, _x5, _x6) {\n      return _updateAkunSiswa.apply(this, arguments);\n    }\n\n    return updateAkunSiswa;\n  }()\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiswaController);\n\n//# sourceURL=webpack://celenganku-app/./server/controllers/siswa-controller.js?");

/***/ }),

/***/ "./server/global/config.js":
/*!*********************************!*\
  !*** ./server/global/config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar CONFIG = {\n  PORT: process.env.PORT || 8080,\n  DIST_DIR: __dirname\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG);\n\n//# sourceURL=webpack://celenganku-app/./server/global/config.js?");

/***/ }),

/***/ "./server/global/firebase.js":
/*!***********************************!*\
  !*** ./server/global/firebase.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar firebaseConfig = {\n  apiKey: 'AIzaSyAW4XYKvHlGB2n85IrI311kXrFp-S_11YM',\n  authDomain: 'celenganku-app.firebaseapp.com',\n  databaseURL: 'https://celenganku-app.firebaseio.com',\n  projectId: 'celenganku-app',\n  storageBucket: 'celenganku-app.appspot.com',\n  messagingSenderId: '414105942761',\n  appId: '1:414105942761:web:f68bc17372af32cf848e78',\n  measurementId: 'G-QQ3YEP9ZCT'\n};\nvar firebaseInit = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\nvar db = firebaseInit.firestore();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n\n//# sourceURL=webpack://celenganku-app/./server/global/firebase.js?");

/***/ }),

/***/ "./server/models/siswa-model.js":
/*!**************************************!*\
  !*** ./server/models/siswa-model.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _global_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/firebase */ \"./server/global/firebase.js\");\n\nvar Siswa = {\n  data: _global_firebase__WEBPACK_IMPORTED_MODULE_0__.default.collection('data_siswa'),\n  akun: _global_firebase__WEBPACK_IMPORTED_MODULE_0__.default.collection('akun_siswa'),\n  profil: _global_firebase__WEBPACK_IMPORTED_MODULE_0__.default.collection('profil_siswa')\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Siswa);\n\n//# sourceURL=webpack://celenganku-app/./server/models/siswa-model.js?");

/***/ }),

/***/ "./server/routes/admin-routes.js":
/*!***************************************!*\
  !*** ./server/routes/admin-routes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_admin_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/admin-controller */ \"./server/controllers/admin-controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/auth-controller */ \"./server/controllers/auth-controller.js\");\n\n\n\n\nvar adminRoutes = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nadminRoutes.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\nadminRoutes.post('/login', _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__.default.adminLogin);\nadminRoutes.use(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__.default.requireAuth);\nadminRoutes.route('/').get(_controllers_admin_controller__WEBPACK_IMPORTED_MODULE_2__.default.getAdmin);\nadminRoutes.route('/:id').patch(_controllers_admin_controller__WEBPACK_IMPORTED_MODULE_2__.default.updateAdmin)[\"delete\"](_controllers_admin_controller__WEBPACK_IMPORTED_MODULE_2__.default.deleteAdmin);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (adminRoutes);\n\n//# sourceURL=webpack://celenganku-app/./server/routes/admin-routes.js?");

/***/ }),

/***/ "./server/routes/siswa-routes.js":
/*!***************************************!*\
  !*** ./server/routes/siswa-routes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_siswa_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/siswa-controller */ \"./server/controllers/siswa-controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/auth-controller */ \"./server/controllers/auth-controller.js\");\n\n\n\n\nvar siswaRoutes = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nsiswaRoutes.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\nsiswaRoutes.post('/login', _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__.default.login);\nsiswaRoutes.post('/register', _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__.default.register);\nsiswaRoutes.use(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__.default.requireAuth);\nsiswaRoutes.route('/').get(_controllers_siswa_controller__WEBPACK_IMPORTED_MODULE_2__.default.getAllAkunSiswa);\nsiswaRoutes.route('/data').get(_controllers_siswa_controller__WEBPACK_IMPORTED_MODULE_2__.default.getDataSiswa);\nsiswaRoutes.route('/:id').get(_controllers_siswa_controller__WEBPACK_IMPORTED_MODULE_2__.default.getAkunSiswa).patch(_controllers_siswa_controller__WEBPACK_IMPORTED_MODULE_2__.default.updateAkunSiswa)[\"delete\"](_controllers_siswa_controller__WEBPACK_IMPORTED_MODULE_2__.default.deleteAkunSiswa);\nsiswaRoutes.route('/:id/profil').get(_controllers_siswa_controller__WEBPACK_IMPORTED_MODULE_2__.default.getProfilSiswa);\nsiswaRoutes.route('/:id/data').get(_controllers_siswa_controller__WEBPACK_IMPORTED_MODULE_2__.default.getDataSiswa);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (siswaRoutes);\n\n//# sourceURL=webpack://celenganku-app/./server/routes/siswa-routes.js?");

/***/ }),

/***/ "./server/server-dev.js":
/*!******************************!*\
  !*** ./server/server-dev.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./server/app.js\");\n/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/config */ \"./server/global/config.js\");\n\n\n_app__WEBPACK_IMPORTED_MODULE_0__.default.listen(_global_config__WEBPACK_IMPORTED_MODULE_1__.default.PORT, function () {\n  console.log(\"App listening to \".concat(_global_config__WEBPACK_IMPORTED_MODULE_1__.default.PORT, \"....\"));\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack://celenganku-app/./server/server-dev.js?");

/***/ }),

/***/ "./server/utils/appError.js":
/*!**********************************!*\
  !*** ./server/utils/appError.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar AppError = /*#__PURE__*/function (_Error) {\n  _inherits(AppError, _Error);\n\n  var _super = _createSuper(AppError);\n\n  function AppError(statusCode, status, message) {\n    var _this;\n\n    _classCallCheck(this, AppError);\n\n    _this = _super.call(this, message);\n    _this.statusCode = statusCode;\n    _this.status = status;\n    _this.message = message;\n    return _this;\n  }\n\n  return AppError;\n}( /*#__PURE__*/_wrapNativeSuper(Error));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppError);\n\n//# sourceURL=webpack://celenganku-app/./server/utils/appError.js?");

/***/ }),

/***/ "./webpack.common.js":
/*!***************************!*\
  !*** ./webpack.common.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar WebpackBar = __webpack_require__(/*! webpackbar */ \"webpackbar\");\n\nvar HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar CopyWebpackPlugin = __webpack_require__(/*! copy-webpack-plugin */ \"copy-webpack-plugin\");\n\nmodule.exports = {\n  entry: {\n    main: './src/scripts/index.js'\n  },\n  output: {\n    path: path.join(__dirname, 'build'),\n    publicPath: '/',\n    filename: '[name].js'\n  },\n  target: 'web',\n  devtool: 'source-map',\n  module: {\n    rules: [{\n      test: /\\.html$/,\n      use: [{\n        loader: 'html-loader'\n      }]\n    }, {\n      test: /\\.(sa|sc|c)ss$/,\n      use: ['style-loader', {\n        loader: 'css-loader',\n        options: {\n          importLoaders: 1\n        }\n      }, 'postcss-loader']\n    }, {\n      test: /\\.(png|svg|jpg|gif)$/,\n      use: ['file-loader']\n    }]\n  },\n  plugins: [// new WebpackBar({\n  //   name: 'Client',\n  // }),\n  new CopyWebpackPlugin({\n    patterns: [{\n      from: './src/public/',\n      to: './'\n    }]\n  }), new HtmlWebPackPlugin({\n    template: './src/index.html',\n    filename: './index.html',\n    excludeChunks: ['server']\n  })]\n};\n\n//# sourceURL=webpack://celenganku-app/./webpack.common.js?");

/***/ }),

/***/ "./webpack.dev.js":
/*!************************!*\
  !*** ./webpack.dev.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! webpack-merge */ \"webpack-merge\"),\n    merge = _require.merge;\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar common = __webpack_require__(/*! ./webpack.common */ \"./webpack.common.js\");\n\nmodule.exports = merge(common, {\n  mode: 'development',\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  stats: 'errors-only'\n});\n\n//# sourceURL=webpack://celenganku-app/./webpack.dev.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"body-parser\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"cookie-parser\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22cookie-parser%22?");

/***/ }),

/***/ "copy-webpack-plugin":
/*!**************************************!*\
  !*** external "copy-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"copy-webpack-plugin\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22copy-webpack-plugin%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"cors\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"dotenv\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22express%22?");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"firebase/app\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22firebase/app%22?");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"firebase/firestore\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22firebase/firestore%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"helmet\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22helmet%22?");

/***/ }),

/***/ "hpp":
/*!**********************!*\
  !*** external "hpp" ***!
  \**********************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"hpp\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22hpp%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"html-webpack-plugin\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"jsonwebtoken\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22jsonwebtoken%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"path\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22path%22?");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"regenerator-runtime\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22regenerator-runtime%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpack\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpack-dev-middleware\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpack-hot-middleware\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpack-merge\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22webpack-merge%22?");

/***/ }),

/***/ "webpackbar":
/*!*****************************!*\
  !*** external "webpackbar" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpackbar\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22webpackbar%22?");

/***/ }),

/***/ "xss-clean":
/*!****************************!*\
  !*** external "xss-clean" ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"xss-clean\");;\n\n//# sourceURL=webpack://celenganku-app/external_%22xss-clean%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./server/server-dev.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
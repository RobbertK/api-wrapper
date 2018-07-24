/*!
 * BSD 3-Clause License
 * 
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * 
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 * 
 * * Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * hash:0f8f1b5b53c4c42c4d8c, chunkhash:e857530e470fc07f9bab, name:bundle.browser, version:v1.4.19
 */
/*!
 * This bundle contains the following packages:
 * └─ @mapcreator/maps4news (1.4.19) ── BSD 3-clause "New" or "Revised" License (http://www.opensource.org/licenses/BSD-3-Clause) ── package.json
 *    ├─ babel-runtime (6.26.0) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/babel-runtime/package.json
 *    │  ├─ core-js (2.5.6) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/core-js/package.json
 *    │  └─ regenerator-runtime (0.11.1) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/regenerator-runtime/package.json
 *    ├─ case (1.5.5) ── MIT (http://www.opensource.org/licenses/mit-license.php), GPL (http://www.gnu.org/licenses/gpl.html) ── node_modules/case/package.json
 *    ├─ fetch-ponyfill (6.0.2) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/fetch-ponyfill/package.json
 *    │  └─ node-fetch (2.1.2) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/node-fetch/package.json
 *    ├─ formdata-polyfill (3.0.10) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/formdata-polyfill/package.json
 *    ├─ json-stable-stringify (1.0.1) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/json-stable-stringify/package.json
 *    │  └─ jsonify (0.0.0) ── public domain ── node_modules/jsonify/package.json
 *    └─ mitt (1.1.3) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/mitt/package.json
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["maps4news"] = factory();
	else
		root["maps4news"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.license = exports.version = exports.errors = exports.ResourceLister = exports.helpers = exports.resources = exports.StaticClassError = exports.ValidationError = exports.ApiError = exports.DummyFlow = exports.PasswordFlow = exports.ImplicitFlowPopup = exports.ImplicitFlow = exports.OAuth = exports.ResultStatus = exports.JobMonitorFilter = exports.DeletedState = exports.Enum = exports.JobMonitor = exports.StorageManager = exports.RequestParameters = exports.Maps4News = undefined;

var _enums = __webpack_require__(1);

Object.defineProperty(exports, 'DeletedState', {
  enumerable: true,
  get: function get() {
    return _enums.DeletedState;
  }
});
Object.defineProperty(exports, 'JobMonitorFilter', {
  enumerable: true,
  get: function get() {
    return _enums.JobMonitorFilter;
  }
});
Object.defineProperty(exports, 'ResultStatus', {
  enumerable: true,
  get: function get() {
    return _enums.ResultStatus;
  }
});

var _AbstractError = __webpack_require__(96);

Object.keys(_AbstractError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AbstractError[key];
    }
  });
});

var _Maps4News2 = __webpack_require__(97);

var _Maps4News3 = _interopRequireDefault(_Maps4News2);

var _RequestParameters2 = __webpack_require__(135);

var _RequestParameters3 = _interopRequireDefault(_RequestParameters2);

var _StorageManager2 = __webpack_require__(104);

var _StorageManager3 = _interopRequireDefault(_StorageManager2);

var _JobMonitor2 = __webpack_require__(209);

var _JobMonitor3 = _interopRequireDefault(_JobMonitor2);

var _Enum2 = __webpack_require__(3);

var _Enum3 = _interopRequireDefault(_Enum2);

var _OAuth2 = __webpack_require__(102);

var _OAuth3 = _interopRequireDefault(_OAuth2);

var _ImplicitFlow2 = __webpack_require__(210);

var _ImplicitFlow3 = _interopRequireDefault(_ImplicitFlow2);

var _ImplicitFlowPopup2 = __webpack_require__(211);

var _ImplicitFlowPopup3 = _interopRequireDefault(_ImplicitFlowPopup2);

var _PasswordFlow2 = __webpack_require__(212);

var _PasswordFlow3 = _interopRequireDefault(_PasswordFlow2);

var _DummyFlow2 = __webpack_require__(100);

var _DummyFlow3 = _interopRequireDefault(_DummyFlow2);

var _ApiError2 = __webpack_require__(98);

var _ApiError3 = _interopRequireDefault(_ApiError2);

var _ValidationError2 = __webpack_require__(99);

var _ValidationError3 = _interopRequireDefault(_ValidationError2);

var _StaticClassError2 = __webpack_require__(106);

var _StaticClassError3 = _interopRequireDefault(_StaticClassError2);

var _resources2 = __webpack_require__(160);

var _resources = _interopRequireWildcard(_resources2);

var _helpers2 = __webpack_require__(114);

var _helpers = _interopRequireWildcard(_helpers2);

var _ResourceLister2 = __webpack_require__(137);

var _ResourceLister3 = _interopRequireDefault(_ResourceLister2);

var _errors2 = __webpack_require__(213);

var _errors = _interopRequireWildcard(_errors2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Maps4News = _Maps4News3.default; /*
                                          * BSD 3-Clause License
                                          *
                                          * Copyright (c) 2017, MapCreator
                                          * All rights reserved.
                                          *
                                          * Redistribution and use in source and binary forms, with or without
                                          * modification, are permitted provided that the following conditions are met:
                                          *
                                          *  Redistributions of source code must retain the above copyright notice, this
                                          *   list of conditions and the following disclaimer.
                                          *
                                          *  Redistributions in binary form must reproduce the above copyright notice,
                                          *   this list of conditions and the following disclaimer in the documentation
                                          *   and/or other materials provided with the distribution.
                                          *
                                          *  Neither the name of the copyright holder nor the names of its
                                          *   contributors may be used to endorse or promote products derived from
                                          *   this software without specific prior written permission.
                                          *
                                          * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                                          * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                                          * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                                          * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                                          * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                                          * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                                          * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                                          * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                                          * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                                          * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                          */

// Core

exports.RequestParameters = _RequestParameters3.default;
exports.StorageManager = _StorageManager3.default;
exports.JobMonitor = _JobMonitor3.default;

// Enums

exports.Enum = _Enum3.default;

// Flows

exports.OAuth = _OAuth3.default;
exports.ImplicitFlow = _ImplicitFlow3.default;
exports.ImplicitFlowPopup = _ImplicitFlowPopup3.default;
exports.PasswordFlow = _PasswordFlow3.default;
exports.DummyFlow = _DummyFlow3.default;

// Exceptions

exports.ApiError = _ApiError3.default;
exports.ValidationError = _ValidationError3.default;
exports.StaticClassError = _StaticClassError3.default;

// Resources

exports.resources = _resources;

// Helpers

exports.helpers = _helpers;
exports.ResourceLister = _ResourceLister3.default;

// Errors

exports.errors = _errors;

/**
 * Package version
 * @private
 */

var version = exports.version = "v1.4.19";

/**
 * Package license
 * @private
 */
var license = exports.license = "BSD 3-Clause License\n\nCopyright (c) 2017, MapCreator\nAll rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are met:\n\n* Redistributions of source code must retain the above copyright notice, this\n  list of conditions and the following disclaimer.\n\n* Redistributions in binary form must reproduce the above copyright notice,\n  this list of conditions and the following disclaimer in the documentation\n  and/or other materials provided with the distribution.\n\n* Neither the name of the copyright holder nor the names of its\n  contributors may be used to endorse or promote products derived from\n  this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\"\nAND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\nIMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\nDISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE\nFOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL\nDAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR\nSERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER\nCAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,\nOR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResultStatus = exports.JobMonitorFilter = exports.DeletedState = exports.Enum = undefined;

var _DeletedState = __webpack_require__(2);

Object.defineProperty(exports, 'DeletedState', {
  enumerable: true,
  get: function get() {
    return _DeletedState.DeletedState;
  }
});

var _JobMonitorFilter = __webpack_require__(94);

Object.defineProperty(exports, 'JobMonitorFilter', {
  enumerable: true,
  get: function get() {
    return _JobMonitorFilter.JobMonitorFilter;
  }
});

var _ResultStatus = __webpack_require__(95);

Object.defineProperty(exports, 'ResultStatus', {
  enumerable: true,
  get: function get() {
    return _ResultStatus.ResultStatus;
  }
});

var _Enum2 = __webpack_require__(3);

var _Enum3 = _interopRequireDefault(_Enum2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Enum = _Enum3.default; /*
                                * BSD 3-Clause License
                                *
                                * Copyright (c) 2017, MapCreator
                                * All rights reserved.
                                *
                                * Redistribution and use in source and binary forms, with or without
                                * modification, are permitted provided that the following conditions are met:
                                *
                                *  Redistributions of source code must retain the above copyright notice, this
                                *   list of conditions and the following disclaimer.
                                *
                                *  Redistributions in binary form must reproduce the above copyright notice,
                                *   this list of conditions and the following disclaimer in the documentation
                                *   and/or other materials provided with the distribution.
                                *
                                *  Neither the name of the copyright holder nor the names of its
                                *   contributors may be used to endorse or promote products derived from
                                *   this software without specific prior written permission.
                                *
                                * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                                * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                                * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                                * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                                * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                                * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                                * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                                * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                                * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                                * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                */

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeletedState = undefined;

var _Enum = __webpack_require__(3);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Enum containing the possible different values for {@link RequestParameters#deleted}
 * @enum {string}
 * @property {string} ALL - Don't discriminate between deleted items and non-deleted resources
 * @property {string} BOTH - Don't discriminate between deleted items and non-deleted resources
 * @property {string} NONE - Don't return deleted resources
 * @property {string} ONLY - Only return deleted resources
 * @readonly
 */
var DeletedState = exports.DeletedState = new _Enum2.default({
  ALL: 'all',
  BOTH: 'all',
  NONE: 'none',
  ONLY: 'only'
}); /*
     * BSD 3-Clause License
     *
     * Copyright (c) 2017, MapCreator
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     *  Redistributions of source code must retain the above copyright notice, this
     *   list of conditions and the following disclaimer.
     *
     *  Redistributions in binary form must reproduce the above copyright notice,
     *   this list of conditions and the following disclaimer in the documentation
     *   and/or other materials provided with the distribution.
     *
     *  Neither the name of the copyright holder nor the names of its
     *   contributors may be used to endorse or promote products derived from
     *   this software without specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
     * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
     * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
     * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
     * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
     * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
     * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
     * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _case = __webpack_require__(85);

var _reflection = __webpack_require__(86);

var _Unobservable2 = __webpack_require__(93);

var _Unobservable3 = _interopRequireDefault(_Unobservable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base enum class
 * @example
 * const Colors = new Enum(['RED', 'BLACK', 'GREEN', 'WHITE', 'BLUE']);
 *
 * const Answers = new Enum({
 *   YES: true,
 *   NO: false,
 *   // Passing functions as values will turn them into getters
 *   // Getter results will appear in ::values
 *   MAYBE: () => Math.random() >= 0.5,
 * });
 *
 * const FontStyles = new Enum(['italic', 'bold', 'underline', 'regular'], true);
 * FontStyles.ITALIC === 'italic'
 * FontStyles.BOLD   === 'bold'
 *
 * // etc...
 */
var Enum = function (_Unobservable) {
  (0, _inherits3.default)(Enum, _Unobservable);

  /**
   * @param {Object<String, *>|Array<String>} enums - Data to build the enum from
   * @param {boolean} auto - Auto generate enum from data making assumptions about
   *                         the data, requires enums to be of type array.
   */
  function Enum(enums) {
    var auto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    (0, _classCallCheck3.default)(this, Enum);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Enum.__proto__ || Object.getPrototypeOf(Enum)).call(this));

    var isArray = enums instanceof Array;

    if (auto && !isArray) {
      throw new TypeError('Expected enums to be of type "Array" got "' + (0, _reflection.getTypeName)(enums) + '"');
    }

    if (isArray && auto) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = enums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var row = _step.value;

          var key = (0, _case.constant)(row);

          Object.defineProperty(_this, key, {
            enumerable: true,
            value: row
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else if (isArray) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = enums[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _key = _step2.value;

          Object.defineProperty(_this, _key, {
            enumerable: true,
            value: Enum._iota
          });
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    } else {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.keys(enums)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _key2 = _step3.value;

          var init = { enumerable: true };

          if (typeof enums[_key2] === 'function') {
            init.get = enums[_key2];
          } else {
            init.value = enums[_key2];
          }

          Object.defineProperty(_this, _key2, init);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    Object.freeze(_this);
    return _this;
  }

  /**
   * List enum keys
   * @returns {Array} - Enum keys
   */


  (0, _createClass3.default)(Enum, [{
    key: 'keys',
    value: function keys() {
      return Object.keys(this);
    }

    /**
     * List enum values
     * @returns {Array<*>} - Enum values
     */

  }, {
    key: 'values',
    value: function values() {
      var _this2 = this;

      return this.keys().map(function (key) {
        return _this2[key];
      }).filter(function (v, i, s) {
        return s.indexOf(v) === i;
      });
    }
  }], [{
    key: '_iota',
    get: function get() {
      if (!Enum.__iota) {
        Enum.__iota = 0;
      }

      return Enum.__iota++;
    }
  }]);
  return Enum;
}(_Unobservable3.default); /*
                            * BSD 3-Clause License
                            *
                            * Copyright (c) 2017, MapCreator
                            * All rights reserved.
                            *
                            * Redistribution and use in source and binary forms, with or without
                            * modification, are permitted provided that the following conditions are met:
                            *
                            *  Redistributions of source code must retain the above copyright notice, this
                            *   list of conditions and the following disclaimer.
                            *
                            *  Redistributions in binary form must reproduce the above copyright notice,
                            *   this list of conditions and the following disclaimer in the documentation
                            *   and/or other materials provided with the distribution.
                            *
                            *  Neither the name of the copyright holder nor the names of its
                            *   contributors may be used to endorse or promote products derived from
                            *   this software without specific prior written permission.
                            *
                            * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                            * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                            * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                            * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                            * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                            * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                            * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                            * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                            * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                            * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                            */

exports.default = Enum;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(6);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
var $Object = __webpack_require__(11).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(19), 'Object', { defineProperty: __webpack_require__(15).f });


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var core = __webpack_require__(11);
var ctx = __webpack_require__(12);
var hide = __webpack_require__(14);
var has = __webpack_require__(24);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(13);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var createDesc = __webpack_require__(23);
module.exports = __webpack_require__(19) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(18);
var toPrimitive = __webpack_require__(22);
var dP = Object.defineProperty;

exports.f = __webpack_require__(19) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(19) && !__webpack_require__(20)(function () {
  return Object.defineProperty(__webpack_require__(21)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var document = __webpack_require__(10).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(17);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(26);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(27);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(62);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(28), __esModule: true };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(57);
module.exports = __webpack_require__(61).f('iterator');


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(30)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(33)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31);
var defined = __webpack_require__(32);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(34);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(35);
var hide = __webpack_require__(14);
var Iterators = __webpack_require__(36);
var $iterCreate = __webpack_require__(37);
var setToStringTag = __webpack_require__(53);
var getPrototypeOf = __webpack_require__(55);
var ITERATOR = __webpack_require__(54)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(38);
var descriptor = __webpack_require__(23);
var setToStringTag = __webpack_require__(53);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(14)(IteratorPrototype, __webpack_require__(54)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(16);
var dPs = __webpack_require__(39);
var enumBugKeys = __webpack_require__(51);
var IE_PROTO = __webpack_require__(48)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(21)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(52).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var anObject = __webpack_require__(16);
var getKeys = __webpack_require__(40);

module.exports = __webpack_require__(19) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(41);
var enumBugKeys = __webpack_require__(51);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(24);
var toIObject = __webpack_require__(42);
var arrayIndexOf = __webpack_require__(45)(false);
var IE_PROTO = __webpack_require__(48)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(43);
var defined = __webpack_require__(32);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(44);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(42);
var toLength = __webpack_require__(46);
var toAbsoluteIndex = __webpack_require__(47);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(31);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(49)('keys');
var uid = __webpack_require__(50);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(11);
var global = __webpack_require__(10);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(34) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 50 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(10).document;
module.exports = document && document.documentElement;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(15).f;
var has = __webpack_require__(24);
var TAG = __webpack_require__(54)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(49)('wks');
var uid = __webpack_require__(50);
var Symbol = __webpack_require__(10).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(24);
var toObject = __webpack_require__(56);
var IE_PROTO = __webpack_require__(48)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(32);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
var global = __webpack_require__(10);
var hide = __webpack_require__(14);
var Iterators = __webpack_require__(36);
var TO_STRING_TAG = __webpack_require__(54)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(59);
var step = __webpack_require__(60);
var Iterators = __webpack_require__(36);
var toIObject = __webpack_require__(42);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(33)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(54);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
__webpack_require__(74);
__webpack_require__(75);
__webpack_require__(76);
module.exports = __webpack_require__(11).Symbol;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(10);
var has = __webpack_require__(24);
var DESCRIPTORS = __webpack_require__(19);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(35);
var META = __webpack_require__(65).KEY;
var $fails = __webpack_require__(20);
var shared = __webpack_require__(49);
var setToStringTag = __webpack_require__(53);
var uid = __webpack_require__(50);
var wks = __webpack_require__(54);
var wksExt = __webpack_require__(61);
var wksDefine = __webpack_require__(66);
var enumKeys = __webpack_require__(67);
var isArray = __webpack_require__(70);
var anObject = __webpack_require__(16);
var isObject = __webpack_require__(17);
var toIObject = __webpack_require__(42);
var toPrimitive = __webpack_require__(22);
var createDesc = __webpack_require__(23);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(71);
var $GOPD = __webpack_require__(73);
var $DP = __webpack_require__(15);
var $keys = __webpack_require__(40);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(72).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(69).f = $propertyIsEnumerable;
  __webpack_require__(68).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(34)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(50)('meta');
var isObject = __webpack_require__(17);
var has = __webpack_require__(24);
var setDesc = __webpack_require__(15).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(20)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var core = __webpack_require__(11);
var LIBRARY = __webpack_require__(34);
var wksExt = __webpack_require__(61);
var defineProperty = __webpack_require__(15).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(40);
var gOPS = __webpack_require__(68);
var pIE = __webpack_require__(69);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(44);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(42);
var gOPN = __webpack_require__(72).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(41);
var hiddenKeys = __webpack_require__(51).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(69);
var createDesc = __webpack_require__(23);
var toIObject = __webpack_require__(42);
var toPrimitive = __webpack_require__(22);
var has = __webpack_require__(24);
var IE8_DOM_DEFINE = __webpack_require__(18);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(19) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {



/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66)('asyncIterator');


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66)('observable');


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(78);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(82);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(26);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
module.exports = __webpack_require__(11).Object.setPrototypeOf;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(9);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(81).set });


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(17);
var anObject = __webpack_require__(16);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(12)(Function.call, __webpack_require__(73).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(84);
var $Object = __webpack_require__(11).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(38) });


/***/ }),
/* 85 */
/***/ (function(module, exports) {

/*! Case - v1.5.5 - 2018-05-04
* Copyright (c) 2018 Nathan Bubna; Licensed MIT, GPL */
(function() {
    "use strict";
    var unicodes = function(s, prefix) {
        prefix = prefix || '';
        return s.replace(/(^|-)/g, '$1\\u'+prefix).replace(/,/g, '\\u'+prefix);
    },
    basicSymbols = unicodes('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),
    baseLowerCase = 'a-z'+unicodes('DF-F6,F8-FF', '00'),
    baseUpperCase = 'A-Z'+unicodes('C0-D6,D8-DE', '00'),
    improperInTitle = 'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via',
    regexps = function(symbols, lowers, uppers, impropers) {
        symbols = symbols || basicSymbols;
        lowers = lowers || baseLowerCase;
        uppers = uppers || baseUpperCase;
        impropers = impropers || improperInTitle;
        return {
            capitalize: new RegExp('(^|['+symbols+'])(['+lowers+'])', 'g'),
            pascal: new RegExp('(^|['+symbols+'])+(['+lowers+uppers+'])', 'g'),
            fill: new RegExp('['+symbols+']+(.|$)','g'),
            sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+lowers+'])', 'g'),
            improper: new RegExp('\\b('+impropers+')\\b', 'g'),
            relax: new RegExp('([^'+uppers+'])(['+uppers+']*)(['+uppers+'])(?=[^'+uppers+']|$)', 'g'),
            upper: new RegExp('^[^'+lowers+']+$'),
            hole: /[^\s]\s[^\s]/,
            apostrophe: /'/g,
            room: new RegExp('['+symbols+']')
        };
    },
    re = regexps(),
    _ = {
        re: re,
        unicodes: unicodes,
        regexps: regexps,
        types: [],
        up: String.prototype.toUpperCase,
        low: String.prototype.toLowerCase,
        cap: function(s) {
            return _.up.call(s.charAt(0))+s.slice(1);
        },
        decap: function(s) {
            return _.low.call(s.charAt(0))+s.slice(1);
        },
        deapostrophe: function(s) {
            return s.replace(re.apostrophe, '');
        },
        fill: function(s, fill, deapostrophe) {
            if (fill != null) {
                s = s.replace(re.fill, function(m, next) {
                    return next ? fill + next : '';
                });
            }
            if (deapostrophe) {
                s = _.deapostrophe(s);
            }
            return s;
        },
        prep: function(s, fill, pascal, upper) {
            s = s == null ? '' : s + '';// force to string
            if (!upper && re.upper.test(s)) {
                s = _.low.call(s);
            }
            if (!fill && !re.hole.test(s)) {
                var holey = _.fill(s, ' ');
                if (re.hole.test(holey)) {
                    s = holey;
                }
            }
            if (!pascal && !re.room.test(s)) {
                s = s.replace(re.relax, _.relax);
            }
            return s;
        },
        relax: function(m, before, acronym, caps) {
            return before + ' ' + (acronym ? acronym+' ' : '') + caps;
        }
    },
    Case = {
        _: _,
        of: function(s) {
            for (var i=0,m=_.types.length; i<m; i++) {
                if (Case[_.types[i]].apply(Case, arguments) === s){ return _.types[i]; }
            }
        },
        flip: function(s) {
            return s.replace(/\w/g, function(l) {
                return (l == _.up.call(l) ? _.low : _.up).call(l);
            });
        },
        random: function(s) {
            return s.replace(/\w/g, function(l) {
                return (Math.round(Math.random()) ? _.up : _.low).call(l);
            });
        },
        type: function(type, fn) {
            Case[type] = fn;
            _.types.push(type);
        }
    },
    types = {
        lower: function(s, fill, deapostrophe) {
            return _.fill(_.low.call(_.prep(s, fill)), fill, deapostrophe);
        },
        snake: function(s) {
            return Case.lower(s, '_', true);
        },
        constant: function(s) {
            return Case.upper(s, '_', true);
        },
        camel: function(s) {
            return _.decap(Case.pascal(s));
        },
        kebab: function(s) {
            return Case.lower(s, '-', true);
        },
        upper: function(s, fill, deapostrophe) {
            return _.fill(_.up.call(_.prep(s, fill, false, true)), fill, deapostrophe);
        },
        capital: function(s, fill, deapostrophe) {
            return _.fill(_.prep(s).replace(re.capitalize, function(m, border, letter) {
                return border+_.up.call(letter);
            }), fill, deapostrophe);
        },
        header: function(s) {
            return Case.capital(s, '-', true);
        },
        pascal: function(s) {
            return _.fill(_.prep(s, false, true).replace(re.pascal, function(m, border, letter) {
                return _.up.call(letter);
            }), '', true);
        },
        title: function(s) {
            return Case.capital(s).replace(re.improper, function(small, p, i, s) {
                return i > 0 && i < s.lastIndexOf(' ') ? _.low.call(small) : small;
            });
        },
        sentence: function(s, names) {
            s = Case.lower(s).replace(re.sentence, function(m, prelude, letter) {
                return prelude + _.up.call(letter);
            });
            if (names) {
                names.forEach(function(name) {
                    s = s.replace(new RegExp('\\b'+Case.lower(name)+'\\b', "g"), _.cap);
                });
            }
            return s;
        }
    };

    // TODO: Remove "squish" in a future breaking release.
    types.squish = types.pascal;

    for (var type in types) {
        Case.type(type, types[type]);
    }
    // export Case (AMD, commonjs, or global)
    var define = typeof define === "function" ? define : function(){};
    define(typeof module === "object" && module.exports ? module.exports = Case : this.Case = Case);

}).call(this);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.isParentOf = isParentOf;
exports.getTypeName = getTypeName;
exports.mix = mix;

var _Trait = __webpack_require__(87);

var _Trait2 = _interopRequireDefault(_Trait);

var _hash = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tests if the parent is a parent of child
 * @param {function|object} parent - Instance or Class
 * @param {function|object} child - Instance or Class
 * @returns {boolean} - is parent a parent of child
 * @private
 * @example
 * class A {}
 * class B extends A {}
 * class C extends B {}
 *
 * isParentOf(A, C) // true
 * isParentOf(B, C) // true
 * isParentOf(C, C) // true
 * isParentOf(B, A) // false
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

function isParentOf(parent, child) {
  if (parent == null || child == null) {
    return false;
  }

  parent = typeof parent === 'function' ? parent : parent.constructor;
  child = typeof child === 'function' ? child : child.constructor;

  do {
    if (child.name === parent.name) {
      return true;
    }

    child = Object.getPrototypeOf(child);
  } while (child.name !== '');

  return false;
}

/**
 * Get the name of the value type
 * @param {*} value - Any value
 * @private
 * @returns {string} - Value type name
 */
function getTypeName(value) {
  value = typeof value === 'function' ? value : value.constructor;

  return value.name;
}

/**
 * Mix traits into the target class
 * @param {Function} baseClass - Target base class for the traits to be applied to
 * @param {Function} mixins - Traits to be applied
 * @returns {Function} - Constructor with any traits applied
 * @private
 */
function mix(baseClass) {
  for (var _len = arguments.length, mixins = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    mixins[_key - 1] = arguments[_key];
  }

  var cocktail = function (_baseClass) {
    (0, _inherits3.default)(_Cocktail, _baseClass);

    function _Cocktail() {
      var _ref;

      (0, _classCallCheck3.default)(this, _Cocktail);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = _Cocktail.__proto__ || Object.getPrototypeOf(_Cocktail)).call.apply(_ref, [this].concat(args)));

      mixins.map(function (mixin) {
        return mixin.prototype.initializer;
      }).filter(function (_) {
        return _;
      }).forEach(function (initializer) {
        return initializer.call(_this);
      });
      return _this;
    }

    return _Cocktail;
  }(baseClass);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = mixins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var mixin = _step.value;

      if (!isParentOf(_Trait2.default, mixin)) {
        throw new TypeError('Expected mixin to implement Trait for ' + mixin.name);
      }

      copyProps(cocktail.prototype, mixin.prototype);
      copyProps(cocktail, mixin);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  cocktail.__mixins = mixins;

  var hash = (0, _hash.fnv32b)(mixins.map(function (x) {
    return x.name;
  }).join(','));

  Object.defineProperty(cocktail, 'name', { value: 'Cocktail_' + hash });

  return cocktail;
}

/**
 * Copy properties from target to source
 * @param {object} target - Object for the properties to be copied to
 * @param {object} source - Object containing properties to be copied
 * @returns {object} - Resulting object with properties from both parameters
 */
function copyProps(target, source) {
  Object.getOwnPropertyNames(source).concat(Object.getOwnPropertySymbols(source)).forEach(function (prop) {
    if (!prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)) {
      Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
    }
  });
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Trait interface
 * @interface
 */
var Trait = function () {
  function Trait() {
    (0, _classCallCheck3.default)(this, Trait);
  }

  (0, _createClass3.default)(Trait, [{
    key: "initializer",

    /**
     * Optional initialization method
     * @returns {void}
     * @abstract
     */
    value: function initializer() {}
  }]);
  return Trait;
}();

exports.default = Trait;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fnv32b = fnv32b;
exports.hashObject = hashObject;

var _jsonStableStringify = __webpack_require__(89);

var _jsonStableStringify2 = _interopRequireDefault(_jsonStableStringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FNV1_32A_INIT = 0x811c9dc5;

/**
 * Fast hash function for non-cryptographic use
 * @param {string} str - Input to be hashed
 * @returns {string} - String representation of the hash
 * @private
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

function fnv32b(str) {
  var hash = str.split('').map(function (x) {
    return x.charCodeAt(0);
  }).reduce(function (sum, val) {
    sum ^= val;
    return sum + (sum << 1) + (sum << 4) + (sum << 7) + (sum << 8) + (sum << 24);
  }, FNV1_32A_INIT);

  // Avalanche
  hash ^= hash << 3;
  hash += hash >> 5;
  hash ^= hash << 4;
  hash += hash >> 17;
  hash ^= hash << 25;
  hash += hash >> 6;

  return ('0000000' + (hash >>> 0).toString(16)).substr(-8);
}

/**
 * Fast object hashing for non-cryptographic use
 * @param {object} data - input data
 * @returns {string} - String reprisentation of the hash
 * @private
 */
function hashObject(data) {
  return fnv32b((0, _jsonStableStringify2.default)(data));
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(90);

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports.parse = __webpack_require__(91);
exports.stringify = __webpack_require__(92);


/***/ }),
/* 91 */
/***/ (function(module, exports) {

var at, // The index of the current character
    ch, // The current character
    escapee = {
        '"':  '"',
        '\\': '\\',
        '/':  '/',
        b:    '\b',
        f:    '\f',
        n:    '\n',
        r:    '\r',
        t:    '\t'
    },
    text,

    error = function (m) {
        // Call error when something is wrong.
        throw {
            name:    'SyntaxError',
            message: m,
            at:      at,
            text:    text
        };
    },
    
    next = function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        
        // Get the next character. When there are no more characters,
        // return the empty string.
        
        ch = text.charAt(at);
        at += 1;
        return ch;
    },
    
    number = function () {
        // Parse a number value.
        var number,
            string = '';
        
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while (next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error("Bad number");
        } else {
            return number;
        }
    },
    
    string = function () {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff;
        
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            while (next()) {
                if (ch === '"') {
                    next();
                    return string;
                } else if (ch === '\\') {
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                } else {
                    string += ch;
                }
            }
        }
        error("Bad string");
    },

    white = function () {

// Skip whitespace.

        while (ch && ch <= ' ') {
            next();
        }
    },

    word = function () {

// true, false, or null.

        switch (ch) {
        case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
        case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
        case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '" + ch + "'");
    },

    value,  // Place holder for the value function.

    array = function () {

// Parse an array value.

        var array = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array;   // empty array
            }
            while (ch) {
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error("Bad array");
    },

    object = function () {

// Parse an object value.

        var key,
            object = {};

        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object;   // empty object
            }
            while (ch) {
                key = string();
                white();
                next(':');
                if (Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                object[key] = value();
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error("Bad object");
    };

value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

    white();
    switch (ch) {
    case '{':
        return object();
    case '[':
        return array();
    case '"':
        return string();
    case '-':
        return number();
    default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
};

// Return the json_parse function. It will have access to all of the above
// functions and variables.

module.exports = function (source, reviver) {
    var result;
    
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function' ? (function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, value);
    }({'': result}, '')) : result;
};


/***/ }),
/* 92 */
/***/ (function(module, exports) {

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;

function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}

function str(key, holder) {
    // Produce a string from holder[key].
    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];
    
    // If the value has a toJSON method, call it to obtain a replacement value.
    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }
    
    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.
    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }
    
    // What happens next depends on the value's type.
    switch (typeof value) {
        case 'string':
            return quote(value);
        
        case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        
        case 'boolean':
        case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);
            
        case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = [];
            
            // Array.isArray
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                
                // Join all of the elements together, separated with commas, and
                // wrap them in brackets.
                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            
            // If the replacer is an array, use it to select the members to be
            // stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            else {
                // Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            
        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

module.exports = function (value, replacer, space) {
    var i;
    gap = '';
    indent = '';
    
    // If the space parameter is a number, make an indent string containing that
    // many spaces.
    if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
            indent += ' ';
        }
    }
    // If the space parameter is a string, it will be used as the indent string.
    else if (typeof space === 'string') {
        indent = space;
    }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.
    rep = replacer;
    if (replacer && typeof replacer !== 'function'
    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
    }
    
    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.
    return str('', {'': value});
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Makes an object and it's children unobservable by frameworks like Vuejs
 * @protected
 */
var Unobservable = function () {
  function Unobservable() {
    (0, _classCallCheck3.default)(this, Unobservable);
  }

  (0, _createClass3.default)(Unobservable, [{
    key: Symbol.toStringTag,

    /**
     * Overrides the `Object.prototype.toString.call(obj)` result
     * @returns {string} - type name
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
     */
    get: function get() {
      // Anything can go here really as long as it's not 'Object'
      return 'ObjectNoObserve';
    }
  }]);
  return Unobservable;
}();

exports.default = Unobservable;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobMonitorFilter = undefined;

var _Enum = __webpack_require__(3);

var _Enum2 = _interopRequireDefault(_Enum);

var _ResultStatus = __webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Enum containing the possible different values for {@link JobMonitor#filterStatus}
 * @enum {string}
 * @property {string} DEFAULT - All job types
 * @property {string} QUEUED - Job has been queued
 * @property {string} PROCESSING - Job is processing
 * @property {string} COMPLETED - Job has been completed
 * @property {string} CANCEL - Job has been canceled
 * @property {string} FAILED - Job has failed
 * @readonly
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var JobMonitorFilter = exports.JobMonitorFilter = new _Enum2.default(Object.assign({}, _ResultStatus.ResultStatus, { DEFAULT: 'default' }));

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResultStatus = undefined;

var _Enum = __webpack_require__(3);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Enum containing the possible different values for {@link RequestParameters#deleted}
 * @enum {string}
 * @property {string} QUEUED - Job has been queued
 * @property {string} PROCESSING - Job is processing
 * @property {string} COMPLETED - Job has been completed
 * @property {string} CANCEL - Job has been canceled
 * @property {string} FAILED - Job has failed
 * @readonly
 */
var ResultStatus = exports.ResultStatus = new _Enum2.default({
  QUEUED: 'queued',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  CANCEL: 'canceled',
  FAILED: 'failed'
}); /*
     * BSD 3-Clause License
     *
     * Copyright (c) 2017, MapCreator
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     *  Redistributions of source code must retain the above copyright notice, this
     *   list of conditions and the following disclaimer.
     *
     *  Redistributions in binary form must reproduce the above copyright notice,
     *   this list of conditions and the following disclaimer in the documentation
     *   and/or other materials provided with the distribution.
     *
     *  Neither the name of the copyright holder nor the names of its
     *   contributors may be used to endorse or promote products derived from
     *   this software without specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
     * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
     * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
     * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
     * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
     * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
     * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
     * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractMethodError = exports.AbstractClassError = exports.AbstractError = undefined;

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Thrown by abstract methods and classes
 */
var AbstractError = exports.AbstractError = function (_Error) {
  (0, _inherits3.default)(AbstractError, _Error);

  /**
   * AbstractError constructor
   * @param {?String} message - Error message
   */
  function AbstractError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unimplemented';
    (0, _classCallCheck3.default)(this, AbstractError);
    return (0, _possibleConstructorReturn3.default)(this, (AbstractError.__proto__ || Object.getPrototypeOf(AbstractError)).call(this, message));
  }

  return AbstractError;
}(Error);

/**
 * Thrown upon invocation of an abstract class
 * @example
 * class FooBar {
 *   constructor() {
 *     if (this.constructor === FooBar) {
 *       throw new AbstractClassError();
 *     }
 *   }
 * }
 */


var AbstractClassError = exports.AbstractClassError = function (_AbstractError) {
  (0, _inherits3.default)(AbstractClassError, _AbstractError);

  function AbstractClassError() {
    (0, _classCallCheck3.default)(this, AbstractClassError);
    return (0, _possibleConstructorReturn3.default)(this, (AbstractClassError.__proto__ || Object.getPrototypeOf(AbstractClassError)).call(this, 'Can not make an instance of an abstract class'));
  }

  return AbstractClassError;
}(AbstractError);

/**
 * Thrown upon invocation of an abstract method
 */


var AbstractMethodError = exports.AbstractMethodError = function (_AbstractError2) {
  (0, _inherits3.default)(AbstractMethodError, _AbstractError2);

  function AbstractMethodError() {
    (0, _classCallCheck3.default)(this, AbstractMethodError);
    return (0, _possibleConstructorReturn3.default)(this, (AbstractMethodError.__proto__ || Object.getPrototypeOf(AbstractMethodError)).call(this, 'Can not call an abstract method'));
  }

  return AbstractMethodError;
}(AbstractError);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = __webpack_require__(26);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _enums = __webpack_require__(1);

var _ApiError = __webpack_require__(98);

var _ApiError2 = _interopRequireDefault(_ApiError);

var _ValidationError = __webpack_require__(99);

var _ValidationError2 = _interopRequireDefault(_ValidationError);

var _DummyFlow = __webpack_require__(100);

var _DummyFlow2 = _interopRequireDefault(_DummyFlow);

var _OAuth = __webpack_require__(102);

var _OAuth2 = _interopRequireDefault(_OAuth);

var _ResourceProxy = __webpack_require__(128);

var _ResourceProxy2 = _interopRequireDefault(_ResourceProxy);

var _SimpleResourceProxy = __webpack_require__(130);

var _SimpleResourceProxy2 = _interopRequireDefault(_SimpleResourceProxy);

var _ResourceCache = __webpack_require__(133);

var _ResourceCache2 = _interopRequireDefault(_ResourceCache);

var _resources = __webpack_require__(160);

var _ResourceBase2 = __webpack_require__(159);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

var _hash = __webpack_require__(88);

var _Logger = __webpack_require__(208);

var _Logger2 = _interopRequireDefault(_Logger);

var _node = __webpack_require__(108);

var _reflection = __webpack_require__(86);

var _requests = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base API class
 */
var Maps4News = function () {
  /**
   * @param {OAuth} auth - Authentication flow
   * @param {string} host - Remote API host
   */
  function Maps4News() {
    var auth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _DummyFlow2.default();
    var host = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "https://api.maps4news.com";
    (0, _classCallCheck3.default)(this, Maps4News);

    this.auth = auth;
    this.host = host;
    this.autoLogout = true;

    var bool = function bool(str) {
      return String(str).toLowerCase() === 'true';
    };

    /**
     * Defaults for common parameters. These are populated during the build process using the `.env` file.
     * @type {{cacheSeconds: number, shareCache: boolean, autoUpdateSharedCache: boolean, dereferenceCache: boolean}}
     */
    this.defaults = {
      cacheSeconds: Number("1800"),
      shareCache: bool("true"),
      autoUpdateSharedCache: bool("true"),
      dereferenceCache: bool("false")
    };

    this._cache = new _ResourceCache2.default(this);
    this._logger = new _Logger2.default("warn");
  }

  /**
   * Get api version
   * @returns {string} - Api version
   * @constant
   */


  (0, _createClass3.default)(Maps4News, [{
    key: 'saveToken',


    /**
     * Saves the session token so that it can be recovered at a later time. The wrapper can
     * find the token most of the time if the name parameter is left blank.
     * @param {string?} name - name of the token
     * @returns {void}
     */
    value: function saveToken(name) {
      this.auth.token.save(name);
    }

    /**
     * Authenticate with the api using the authentication method provided.
     * @returns {Promise} - Resolves with {@link Maps4News} instance and rejects with {@link OAuthError}
     */

  }, {
    key: 'authenticate',
    value: function authenticate() {
      var _this = this;

      return this.auth.authenticate().then(function () {
        return _this;
      });
    }

    /**
     * Request an url using the API token (if available)
     * @param {string} url - Relative or absolute url, api version will be prepended to relative urls
     * @param {string} method - Http method
     * @param {string|object} data - Raw string or object. If an object is passed it will be encoded
     *                               and the content-type will be set to `application/json`
     * @param {object} headers - Any headers that should be set for the request
     * @param {boolean} bundleResponse - When set to true the promise will resolve with an object {response: {@link Response}, data: *}
     * @returns {Promise} - Resolves with either an object, blob, buffer or the raw data by checking the `Content-Type` header and rejects with {@link ApiError}
     */

  }, {
    key: 'request',
    value: function request(url) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var bundleResponse = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (!url.startsWith('http')) {
        // Removes '/' at the start of the string (if any)
        url = url.replace(/(^\/+)/g, function () {
          return '';
        });
        url = this._host + '/' + this.version + '/' + url;
      }

      method = method.toUpperCase();

      if (!(headers instanceof _requests.Headers)) {
        headers = new _requests.Headers(headers);
      }

      if (this.authenticated) {
        headers.set('Authorization', this.auth.token.toString());
      }

      // Automatically detect possible content-type header
      var isFormData = data instanceof _requests.FormData;

      if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object' && !isFormData) {
        data = JSON.stringify(data);

        if (!headers.has('Content-Type')) {
          headers.set('Content-Type', 'application/json');
        }
      } else if (data && !headers.has('Content-Type') && !isFormData) {
        // headers.set('Content-Type', 'application/x-www-form-urlencoded');
      }

      if (!headers.has('Accept')) {
        headers.set('Accept', 'application/json');
      }

      if (['GET', 'HEAD'].includes(method)) {
        // eslint-disable-next-line no-undefined
        data = undefined;
      }

      var init = {
        headers: headers, method: method,
        redirect: 'follow',
        mode: 'cors'
      };

      if (data) {
        init.body = data;
      }

      return this._fetch(url, init, bundleResponse);
    }
  }, {
    key: '_fetch',
    value: function _fetch(url, init, bundleResponse) {
      var _this2 = this;

      return (0, _requests.fetch)(url, init).then(function (response) {
        var respond = function respond(data) {
          return !bundleResponse ? data : { response: response, data: data };
        };

        if (response.status === 429) {
          var resetTimestamp = Number(response.headers.get('X-RateLimit-Reset')) * 1000;
          var waitTime = resetTimestamp - Date.now();

          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              _this2._fetch(url, init, bundleResponse).then(resolve).catch(reject);
            }, waitTime);
          });
        }

        // Check if there is an error response and parse it
        if (!response.ok) {
          return response.json().then(function (data) {
            throw _this2._parseErrorResponse(data, response.status);
          });
        }

        if (response.headers.has('Content-Type')) {
          var contentType = response.headers.get('Content-Type').toLowerCase();

          // Any type of text
          if (contentType.startsWith('text/')) {
            return response.text().then(respond);
          }

          // Response data
          if (contentType === 'application/json') {
            return response.json().then(function (x) {
              // Just in case, code path should in theory never be reached
              if (typeof x.success === 'boolean' && !x.success) {
                throw _this2._parseErrorResponse(x, response.status);
              }

              return x;
            }).then(function (x) {
              return x.data ? x.data : {};
            }).then(respond);
          }
        }

        if ((0, _node.isNode)()) {
          return response.buffer().then(respond);
        }

        return response.blob().then(respond);
      });
    }
  }, {
    key: '_parseErrorResponse',
    value: function _parseErrorResponse(data, status) {
      var err = data.error;

      if (!err['validation_errors']) {
        var apiError = new _ApiError2.default(err.type, err.message, status, err.trace);

        if (apiError.type === 'AuthenticationException' && apiError.message.startsWith('Unauthenticated') && apiError.code === 401) {
          this.logger.warn('Lost Maps4News session, please re-authenticate');

          if (this.autoLogout) {
            this.logout();
          }
        }

        return apiError;
      }

      return new _ValidationError2.default(err.type, err.message, status, err['validation_errors']);
    }

    /**
     * Static proxy generation
     * @param {string|function} Target - Constructor or url
     * @returns {ResourceProxy} - A proxy for accessing the resource
     * @example
     * api.static('/custom/resource/path/{id}/').get(123);
     *
     * @example
     * class FooBar extends ResourceBase {
     *    get resourceName() {
     *      return 'custom';
     *    }
     * }
     *
     * api.static(FooBar)
     *   .get(1)
     *   .then(console.log);
     */

  }, {
    key: 'static',
    value: function _static(Target) {
      if ((0, _reflection.isParentOf)(_ResourceBase3.default, Target)) {
        return new _ResourceProxy2.default(this, Target);
      }

      var Constructor = function (_ResourceBase) {
        (0, _inherits3.default)(AnonymousResource, _ResourceBase);

        function AnonymousResource() {
          (0, _classCallCheck3.default)(this, AnonymousResource);
          return (0, _possibleConstructorReturn3.default)(this, (AnonymousResource.__proto__ || Object.getPrototypeOf(AnonymousResource)).apply(this, arguments));
        }

        (0, _createClass3.default)(AnonymousResource, [{
          key: 'resourceName',
          get: function get() {
            return 'anonymous';
          }
        }, {
          key: 'resourcePath',
          get: function get() {
            return String(Target);
          }
        }]);
        return AnonymousResource;
      }(_ResourceBase3.default);

      Object.defineProperty(Constructor, 'name', { value: 'AnonymousResource_' + (0, _hash.fnv32b)(String(Target)) });

      return this.static(Constructor);
    }

    /**
     * Choropleth accessor
     * @see {@link Choropleth}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'getSvgSetType',


    /**
     * Get SVG set types
     * @see {@link SvgSet}
     * @returns {Promise} - Resolves with a new {@link Enum} instance and rejects with {@link ApiError}
     */
    value: function getSvgSetType() {
      return this.request('/svgs/sets/types').then(function (data) {
        return new _enums.Enum(data, true);
      });
    }

    /**
     * Get font styles
     * @see {@link Font}
     * @returns {Promise} - Resolves with a new {@link Enum} instance and rejects with {@link ApiError}
     */

  }, {
    key: 'getFontStyles',
    value: function getFontStyles() {
      return this.request('/fonts/styles').then(function (data) {
        return new _enums.Enum(data, true);
      });
    }

    /**
     * Forget the current session
     * This will clean up any stored OAuth states stored using {@link StateContainer} and any OAuth tokens stored
     * @returns {void}
     */

  }, {
    key: 'logout',
    value: function logout() {
      this.auth.forget();
    }

    /**
     * Get if the api should automatically call logout when it counters an AuthenticationException
     * @returns {boolean} - Auto logout
     * @see {@link logout}
     */

  }, {
    key: 'version',
    get: function get() {
      return 'v1';
    }

    /**
     * Get the shared cache instance
     * @returns {ResourceCache} - Shared cache instance
     */

  }, {
    key: 'cache',
    get: function get() {
      return this._cache;
    }

    /**
     * Get authentication provider instance
     * @returns {OAuth} - OAuth instance
     */

  }, {
    key: 'auth',
    get: function get() {
      return this._auth;
    }

    /**
     * Get logger instance
     * @returns {Logger} - Logger instance
     */
    ,


    /**
     * Set authentication provider instance
     * @param {OAuth} value -- OAuth instance
     */
    set: function set(value) {
      if (!(0, _reflection.isParentOf)(_OAuth2.default, value)) {
        throw new TypeError('auth must be an instance of OAuth');
      }

      this._auth = value;
    }

    /**
     * Test if the client is authenticated with the api and has a valid token
     * @returns {boolean} - If the client is authenticated with the api
     */

  }, {
    key: 'logger',
    get: function get() {
      return this._logger;
    }
  }, {
    key: 'authenticated',
    get: function get() {
      return this.auth.authenticated;
    }

    /**
     * The current host
     * @returns {string} - The current host
     */

  }, {
    key: 'host',
    get: function get() {
      return this._host;
    }

    /**
     * The remote host
     * @param {string} value - A valid url
     */
    ,
    set: function set(value) {
      value = value.replace(/\/+$/, '');
      this._host = value;
      this.auth.host = value;
    }
  }, {
    key: 'choropleths',
    get: function get() {
      return this.static(_resources.Choropleth);
    }

    /**
     * Color accessor
     * @see {@link Color}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'colors',
    get: function get() {
      return this.static(_resources.Color);
    }

    /**
     * Tag accessor
     * @see {@link Tag}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'tags',
    get: function get() {
      return this.static(_resources.Tag);
    }

    /**
     * Contract accessor
     * @see {@link Contract}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'contracts',
    get: function get() {
      return this.static(_resources.Contract);
    }

    /**
     * Dimension accessor
     * @see {@link Dimension}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'dimensions',
    get: function get() {
      return this.static(_resources.Dimension);
    }

    /**
     * Dimension set accessor
     * @see {@link DimensionSet}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'dimensionSets',
    get: function get() {
      return this.static(_resources.DimensionSet);
    }

    /**
     * Domain accessor
     * @see {@link Domain}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'domains',
    get: function get() {
      return this.static(_resources.Domain);
    }

    /**
     * Faq accessor
     * @see {@link Faq}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'faqs',
    get: function get() {
      return this.static(_resources.Faq);
    }

    /**
     * Feature accessor
     * @see {@link Feature}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'features',
    get: function get() {
      return this.static(_resources.Feature);
    }

    /**
     * Featured jobs accessor
     * @see {@link Job}
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'featuredMaps',
    get: function get() {
      return new _SimpleResourceProxy2.default(this, _resources.Job, '/jobs/featured');
    }

    /**
     * Font accessor
     * @see {@link Font}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'fonts',
    get: function get() {
      return this.static(_resources.Font);
    }

    /**
     * FontFamily accessor
     * @see {@link FontFamily}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'fontFamilies',
    get: function get() {
      return this.static(_resources.FontFamily);
    }

    /**
     * Highlight accessor
     * @see {@link Highlight}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'highlights',
    get: function get() {
      return this.static(_resources.Highlight);
    }

    /**
     * InsetMap accessor
     * @see {@link InsetMap}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'insetMaps',
    get: function get() {
      return this.static(_resources.InsetMap);
    }

    /**
     * Job accessor
     * @see {@link Job}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'jobs',
    get: function get() {
      return this.static(_resources.Job);
    }

    /**
     * JobShare accessor
     * @see {@link JobShare}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'jobShares',
    get: function get() {
      return this.static(_resources.JobShare);
    }

    /**
     * JobType accessor
     * @see {@link JobType}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'jobTypes',
    get: function get() {
      return this.static(_resources.JobType);
    }

    /**
     * Language accessor
     * @see {@link Language}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'languages',
    get: function get() {
      return this.static(_resources.Language);
    }

    /**
     * Layer accessor
     * @see {@link Layer}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'layers',
    get: function get() {
      return this.static(_resources.Layer);
    }

    /**
     * Mapstyle accessor
     * @see {@link Mapstyle}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'mapstyles',
    get: function get() {
      return this.static(_resources.Mapstyle);
    }

    /**
     * MapstyleSet accessor
     * @see {@link MapstyleSet}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'mapstyleSets',
    get: function get() {
      return this.static(_resources.MapstyleSet);
    }

    /**
     * Notification accessor
     * @see {@link Notification}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'notifications',
    get: function get() {
      return this.static(_resources.Notification);
    }

    /**
     * Organisation accessor
     * @see {@link Organisation}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'organisations',
    get: function get() {
      return this.static(_resources.Organisation);
    }

    /**
     * Permission accessor
     * @see {@link Permission}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'permissions',
    get: function get() {
      return this.static(_resources.Permission);
    }

    /**
     * Role accessor
     * @see {@link Role}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'roles',
    get: function get() {
      return this.static(_resources.Role);
    }

    /**
     * PlaceName accessor
     * @see {@link PlaceName}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'placeNames',
    get: function get() {
      return this.static(_resources.PlaceName);
    }

    /**
     * Svg accessor
     * @see {@link Svg}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'svgs',
    get: function get() {
      return this.static(_resources.Svg);
    }

    /**
     * SvgSet accessor
     * @see {@link SvgSet}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'svgSets',
    get: function get() {
      return this.static(_resources.SvgSet);
    }

    /**
     * User accessor
     * @see {@link User}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'users',
    get: function get() {
      return this.static(_resources.User);
    }
  }, {
    key: 'autoLogout',
    get: function get() {
      return this._autoLogout;
    }

    /**
     * Set if the api should automatically call logout when it counters an AuthenticationException
     * @param {boolean} value - Auto logout
     * @see {@link logout}
     */
    ,
    set: function set(value) {
      this._autoLogout = Boolean(value);
    }
  }]);
  return Maps4News;
}(); /*
      * BSD 3-Clause License
      *
      * Copyright (c) 2017, MapCreator
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, with or without
      * modification, are permitted provided that the following conditions are met:
      *
      *  Redistributions of source code must retain the above copyright notice, this
      *   list of conditions and the following disclaimer.
      *
      *  Redistributions in binary form must reproduce the above copyright notice,
      *   this list of conditions and the following disclaimer in the documentation
      *   and/or other materials provided with the distribution.
      *
      *  Neither the name of the copyright holder nor the names of its
      *   contributors may be used to endorse or promote products derived from
      *   this software without specific prior written permission.
      *
      * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
      * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
      * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
      * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
      * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
      * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */

exports.default = Maps4News;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Errors generated by the API
 */
var ApiError = function () {
  /**
   * @param {String} type - Error type
   * @param {String} message - Error message
   * @param {Number} code - Http error code
   * @param {String|null} trace - Stack trace
   */
  function ApiError(type, message, code) {
    var trace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    (0, _classCallCheck3.default)(this, ApiError);

    this._type = type;
    this._message = message;
    this._code = code;
    this._trace = [];

    if (typeof trace === 'string') {
      this._trace = ApiError._parseTrace(trace);
    }
  }

  /**
   * Error type
   * @returns {String} - Error type
   */


  (0, _createClass3.default)(ApiError, [{
    key: 'toString',


    /**
     * Display-able string
     * @returns {string} - Displayable error string
     */
    value: function toString() {
      return '[' + this._code + '] ' + this._type + ': ' + this._message;
    }
  }, {
    key: 'type',
    get: function get() {
      return this._type;
    }

    /**
     * Error message
     * @returns {String} - Error message
     */

  }, {
    key: 'message',
    get: function get() {
      return this._message;
    }

    /**
     * Http error code
     * @returns {Number} - Http error code
     */

  }, {
    key: 'code',
    get: function get() {
      return this._code;
    }

    /**
     * Returns if the error contained a stacktrace that has been parsed
     * @returns {boolean} - If the Error contains a stacktrace
     */

  }, {
    key: 'hasTrace',
    get: function get() {
      return this._trace.length > 0;
    }

    /**
     * Get the parsed stacktrace from the error
     * @returns {Array<{line: Number, file: String, code: String}>} - Stacktrace
     */

  }, {
    key: 'trace',
    get: function get() {
      return this._trace;
    }
  }], [{
    key: '_parseTrace',
    value: function _parseTrace(input) {
      // https://regex101.com/r/64cAbt/1
      var regex = /^#(\d+)\s(?:(.*?)\((\d+)\)|(.*?)):\s(.*?)$/gm;
      var output = [];
      var match = void 0;

      // eslint-disable-next-line no-cond-assign
      while ((match = regex.exec(input)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (match.index === regex.lastIndex) {
          regex.lastIndex++;
        }

        output.push({
          line: match[3],
          file: match[2] || match[4],
          code: match[5]
        });
      }

      return output;
    }
  }]);
  return ApiError;
}();

exports.default = ApiError;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ApiError2 = __webpack_require__(98);

var _ApiError3 = _interopRequireDefault(_ApiError2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extension of {@link ApiError} containing an extra field for validation errors
 */
var ValidationError = function (_ApiError) {
  (0, _inherits3.default)(ValidationError, _ApiError);

  /**
   * @param {String} type - Error type
   * @param {String} message - Error message
   * @param {Number} code - Http error code
   * @param {Object<String, Array<String>>} validationErrors - Any validation errors
   */
  function ValidationError(type, message, code, validationErrors) {
    (0, _classCallCheck3.default)(this, ValidationError);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ValidationError.__proto__ || Object.getPrototypeOf(ValidationError)).call(this, type, message, code));

    _this._validationErrors = validationErrors;
    return _this;
  }

  /**
   * Any validation errors
   * @returns {Object.<String, Array.<String>>} - Object containing arrays of validation errors where the field is stored in the key
   */


  (0, _createClass3.default)(ValidationError, [{
    key: 'toString',


    /**
     * @inheritDoc
     */
    value: function toString() {
      var _this2 = this;

      var errors = Object.keys(this.validationErrors).map(function (x) {
        return _this2.validationErrors[x];
      });

      return 'There were some validation errors: ' + errors.join(' ');
    }
  }, {
    key: 'validationErrors',
    get: function get() {
      return this._validationErrors;
    }
  }]);
  return ValidationError;
}(_ApiError3.default); /*
                        * BSD 3-Clause License
                        *
                        * Copyright (c) 2017, MapCreator
                        * All rights reserved.
                        *
                        * Redistribution and use in source and binary forms, with or without
                        * modification, are permitted provided that the following conditions are met:
                        *
                        *  Redistributions of source code must retain the above copyright notice, this
                        *   list of conditions and the following disclaimer.
                        *
                        *  Redistributions in binary form must reproduce the above copyright notice,
                        *   this list of conditions and the following disclaimer in the documentation
                        *   and/or other materials provided with the distribution.
                        *
                        *  Neither the name of the copyright holder nor the names of its
                        *   contributors may be used to endorse or promote products derived from
                        *   this software without specific prior written permission.
                        *
                        * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                        * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                        * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                        * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                        * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                        * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                        * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                        * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                        * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                        * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                        */

exports.default = ValidationError;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OAuthError = __webpack_require__(101);

var _OAuthError2 = _interopRequireDefault(_OAuthError);

var _OAuth2 = __webpack_require__(102);

var _OAuth3 = _interopRequireDefault(_OAuth2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Dummy flow for when the token should be available in the
 * cache and no attempt at authentication should be made.
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var DummyFlow = function (_OAuth) {
  (0, _inherits3.default)(DummyFlow, _OAuth);

  function DummyFlow() {
    (0, _classCallCheck3.default)(this, DummyFlow);
    return (0, _possibleConstructorReturn3.default)(this, (DummyFlow.__proto__ || Object.getPrototypeOf(DummyFlow)).call(this, '', []));
  }

  /**
   * Authenticate
   * @returns {Promise} - Promise resolves with {@link OAuthToken} and rejects with {@link OAuthError}
   */


  (0, _createClass3.default)(DummyFlow, [{
    key: 'authenticate',
    value: function authenticate() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (_this2.authenticated) {
          resolve(_this2.token);
        } else {
          reject(new _OAuthError2.default('dummy_error', 'Attempted authentication using a dummy authenticator'));
        }
      });
    }
  }]);
  return DummyFlow;
}(_OAuth3.default);

exports.default = DummyFlow;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * OAuth error
 */
var OAuthError = function (_Error) {
  (0, _inherits3.default)(OAuthError, _Error);

  /**
   * OAuth error response
   * @param {String} error - OAuth error key
   * @param {String} message - OAuth error message
   */
  function OAuthError(error) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (0, _classCallCheck3.default)(this, OAuthError);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OAuthError.__proto__ || Object.getPrototypeOf(OAuthError)).call(this));

    _this._error = String(error);
    _this._message = String(message);
    return _this;
  }

  /**
   * OAuth error message
   * @returns {String} - message
   */


  (0, _createClass3.default)(OAuthError, [{
    key: 'toString',


    /**
     * Displayable error string
     * @returns {String} - error
     */
    value: function toString() {
      var error = this._error;

      if (error.includes('_')) {
        error = error.replace('_', ' ').replace(/^./, function (x) {
          return x.toUpperCase();
        });
      }

      if (this._message) {
        return error + ': ' + this._message;
      }
      return error;
    }
  }, {
    key: 'message',
    get: function get() {
      return this._message;
    }

    /**
     * OAuth error code
     * @returns {String} - error
     */

  }, {
    key: 'error',
    get: function get() {
      return this._error;
    }
  }]);
  return OAuthError;
}(Error);

exports.default = OAuthError;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _AbstractError = __webpack_require__(96);

var _OAuthToken = __webpack_require__(103);

var _OAuthToken2 = _interopRequireDefault(_OAuthToken);

var _StateContainer = __webpack_require__(126);

var _StateContainer2 = _interopRequireDefault(_StateContainer);

var _StorageManager = __webpack_require__(104);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * OAuth base class
 * @abstract
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var OAuth = function () {
  /**
   * @param {String} clientId - OAuth client id
   * @param {Array<String>} scopes - A list of required scopes
   * @returns {void}
   */
  function OAuth(clientId) {
    var scopes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['*'];
    (0, _classCallCheck3.default)(this, OAuth);

    if (this.constructor === OAuth) {
      throw new _AbstractError.AbstractClassError();
    }

    this.clientId = String(clientId);
    this.scopes = scopes;
    this.token = _OAuthToken2.default.recover();
    this.host = "https://api.maps4news.com";
    this.path = '/';
  }

  /**
   * If the current instance has a valid token
   * @returns {Boolean} - if a valid token is availble
   */


  (0, _createClass3.default)(OAuth, [{
    key: 'authenticate',


    /**
     * Authenticate
     * @returns {Promise} - Promise resolves with OAuthToken and rejects with OAuthError
     * @abstract
     */
    value: function authenticate() {
      throw new _AbstractError.AbstractMethodError();
    }

    /**
     * Forget the current session
     * Empty the session token store and forget the api token
     * @returns {void}
     */

  }, {
    key: 'forget',
    value: function forget() {
      _StateContainer2.default.clean();
      _StorageManager2.default.secure.remove(_OAuthToken2.default.storageName);

      this.token = null;
    }

    /**
     * Manually import OAuthToken, usefull for debugging
     * @param {String} token - OAuth token
     * @param {String} [type=Bearer] - token type
     * @param {Date|Number} [expires=5 days] - expire time in seconds or Date
     * @param {Array<string>} [scopes=[]] - Any scopes
     * @returns {void}
     */

  }, {
    key: 'importToken',
    value: function importToken(token) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Bearer';
      var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 432000;
      var scopes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

      this.token = new _OAuthToken2.default(token, type, expires, scopes);
    }
  }, {
    key: 'authenticated',
    get: function get() {
      return this.token !== null && !this.token.expired;
    }
  }]);
  return OAuth;
}();

exports.default = OAuth;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _StorageManager = __webpack_require__(104);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _requests = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Oauth token container
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var OAuthToken = function () {
  /**
   * @param {String} token - OAuth token
   * @param {String} [type=Bearer] - token type
   * @param {Date|Number} [expires=5 days] - expire time in seconds or Date
   * @param {Array<string>} [scopes=[]] - Any scopes
   */
  function OAuthToken(token) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Bearer';
    var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 432000;
    var scopes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    (0, _classCallCheck3.default)(this, OAuthToken);

    this.scopes = scopes;
    this.token = token;
    this.type = type.toLowerCase().replace(/(\s|^)\w/g, function (x) {
      return x.toUpperCase();
    });

    if (typeof expires === 'number') {
      // Expires is in seconds
      this.expires = new Date(Date.now() + expires * 1000);
    } else if (expires instanceof Date) {
      this.expires = expires;
    } else {
      throw new TypeError('Expires not of type Date or Number');
    }
  }

  /**
   * String representation of the token, usable in the Authorization header
   * @returns {string} - String representation
   */


  (0, _createClass3.default)(OAuthToken, [{
    key: 'toString',
    value: function toString() {
      return this.type + ' ' + this.token;
    }

    /**
     * Get equivalent OAuth response object
     * @returns {{access_token: (String|*), token_type: String, expires_in: Number, scope: (Array.<String>|Array|*)}} - Raw response object
     */

  }, {
    key: 'toResponseObject',
    value: function toResponseObject() {
      return {
        'access_token': this.token,
        'token_type': this.type.toLowerCase(),
        'expires_in': this.expires - Date.now(),
        'scope': this.scopes
      };
    }

    /**
     * Export oauth response query string
     * @returns {string} - OAuth response query
     */

  }, {
    key: 'toQueryString',
    value: function toQueryString() {
      return (0, _requests.encodeQueryString)(this.toResponseObject());
    }

    /**
     * If the token has expired
     * @returns {Boolean} - expired
     */

  }, {
    key: 'save',


    /**
     * Store the token for later recovery. Token will be stored in HTTPS cookie if possible.
     * @param {String} name - db key name
     * @returns {void}
     * @see OAuthToken#recover
     */
    value: function save() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : OAuthToken.storageName;

      var data = {
        token: this.token,
        type: this.type,
        expires: this.expires.toUTCString(),
        scopes: this.scopes
      };

      // Third parameter is only used when we're using cookies
      _StorageManager2.default.secure.set(name, JSON.stringify(data), this.expires);
    }

    /**
     * Recover a token by looking through the HTTPS cookies and localStorage
     * @param {String} name - Storage key name
     * @returns {OAuthToken|null} - null if none could be recovered
     * @see OAuthToken#save
     */

  }, {
    key: 'expired',
    get: function get() {
      return new Date() > this.expires;
    }

    /**
     * Internal storage key name
     * @returns {String} - storage name
     * @constant
     */

  }], [{
    key: 'fromResponseObject',


    /**
     * Build instance from response object
     * @param {String|Object} data - object or JSON string
     * @returns {OAuthToken} - New OAuthToken instance
     */
    value: function fromResponseObject(data) {
      if (typeof data === 'string') {
        data = JSON.parse(data);
      }

      // Default expires = 5 days
      var expires = 432000;

      if (typeof data['exipires_in'] !== 'undefined') {
        expires = Number(data['expires_in']);
      } else if (typeof data['expires'] === 'string') {
        expires = new Date(data['expires']);
      }

      return new OAuthToken(data['access_token'], data['token_type'], expires, data['scope'] || []);
    }
  }, {
    key: 'recover',
    value: function recover() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : OAuthToken.storageName;

      var data = _StorageManager2.default.secure.get(name);

      if (!data) {
        return null;
      }

      var obj = JSON.parse(data);
      var instance = new OAuthToken(obj.token, obj.type, new Date(obj.expires), obj.scopes || []);

      if (instance.expired) {
        return null;
      }

      return instance;
    }
  }, {
    key: 'storageName',
    get: function get() {
      return 'api_token';
    }
  }]);
  return OAuthToken;
}();

exports.default = OAuthToken;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _StaticClass2 = __webpack_require__(105);

var _StaticClass3 = _interopRequireDefault(_StaticClass2);

var _CookiesDriver = __webpack_require__(107);

var _CookiesDriver2 = _interopRequireDefault(_CookiesDriver);

var _FileDriver = __webpack_require__(110);

var _FileDriver2 = _interopRequireDefault(_FileDriver);

var _LocalStorageDriver = __webpack_require__(111);

var _LocalStorageDriver2 = _interopRequireDefault(_LocalStorageDriver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var StorageManager = function (_StaticClass) {
  (0, _inherits3.default)(StorageManager, _StaticClass);

  function StorageManager() {
    (0, _classCallCheck3.default)(this, StorageManager);
    return (0, _possibleConstructorReturn3.default)(this, (StorageManager.__proto__ || Object.getPrototypeOf(StorageManager)).apply(this, arguments));
  }

  (0, _createClass3.default)(StorageManager, null, [{
    key: 'available',

    /**
     * Available storage drivers
     * @returns {Array.<function>} - Available storage drivers
     */
    get: function get() {
      return [_LocalStorageDriver2.default,
      // CookiesDriver,
      _FileDriver2.default].filter(function (x) {
        return x.available;
      });
    }

    /**
     * Get LocalStorageDriver instance
     * @returns {LocalStorageDriver} - instance
     */

  }, {
    key: 'localStorage',
    get: function get() {
      return new _LocalStorageDriver2.default();
    }

    /**
     * Get CookiesDriver instance
     * @returns {CookiesDriver} - instance
     */

  }, {
    key: 'cookies',
    get: function get() {
      return new _CookiesDriver2.default();
    }

    /**
     * Get FileDriver instance
     * @returns {FileDriver} - instance
     */

  }, {
    key: 'file',
    get: function get() {
      return new _FileDriver2.default();
    }

    /**
     * Returns the best available storage driver. For a secure driver use {@link StorageManager#secure}
     * @returns {DataStoreContract} - Best available storage driver
     */

  }, {
    key: 'best',
    get: function get() {
      return new this.available[0]();
    }

    /**
     * Returns the a secure storage driver
     * @returns {DataStoreContract} - Secure storage driver
     */

  }, {
    key: 'secure',
    get: function get() {
      var C = this.available.filter(function (x) {
        return x.secure;
      })[0];

      if (typeof C === 'undefined') {
        return StorageManager.best;
      }

      return new C();
    }
  }]);
  return StorageManager;
}(_StaticClass3.default);

exports.default = StorageManager;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _StaticClassError = __webpack_require__(106);

var _StaticClassError2 = _interopRequireDefault(_StaticClassError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Disables the constructor and throws a {@link StaticClassError} when an instance is created.
 * @protected
 */
var StaticClass = function StaticClass() {
  (0, _classCallCheck3.default)(this, StaticClass);

  throw new _StaticClassError2.default();
}; /*
    * BSD 3-Clause License
    *
    * Copyright (c) 2017, MapCreator
    * All rights reserved.
    *
    * Redistribution and use in source and binary forms, with or without
    * modification, are permitted provided that the following conditions are met:
    *
    *  Redistributions of source code must retain the above copyright notice, this
    *   list of conditions and the following disclaimer.
    *
    *  Redistributions in binary form must reproduce the above copyright notice,
    *   this list of conditions and the following disclaimer in the documentation
    *   and/or other materials provided with the distribution.
    *
    *  Neither the name of the copyright holder nor the names of its
    *   contributors may be used to endorse or promote products derived from
    *   this software without specific prior written permission.
    *
    * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
    * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

exports.default = StaticClass;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Thrown upon invocation of a static class
 * @see StaticClass
 */
var StaticClassError = function (_Error) {
  (0, _inherits3.default)(StaticClassError, _Error);

  function StaticClassError() {
    (0, _classCallCheck3.default)(this, StaticClassError);
    return (0, _possibleConstructorReturn3.default)(this, (StaticClassError.__proto__ || Object.getPrototypeOf(StaticClassError)).apply(this, arguments));
  }

  return StaticClassError;
}(Error);

exports.default = StaticClassError;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _node = __webpack_require__(108);

var _DataStoreContract2 = __webpack_require__(109);

var _DataStoreContract3 = _interopRequireDefault(_DataStoreContract2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * @todo fix
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var CookiesDriver = function (_DataStoreContract) {
  (0, _inherits3.default)(CookiesDriver, _DataStoreContract);

  function CookiesDriver() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '_m4n_';
    (0, _classCallCheck3.default)(this, CookiesDriver);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CookiesDriver.__proto__ || Object.getPrototypeOf(CookiesDriver)).call(this));

    _this.__prefix = prefix;
    return _this;
  }

  /**
   * Cookie name prefix
   * @returns {String} - Prefix
   * @private
   */


  (0, _createClass3.default)(CookiesDriver, [{
    key: 'set',


    /**
     * Store a value in the storage
     * @param {String} name - value name
     * @param {*} value - value
     * @param {Date|String} [expires=2050-01-01] - Expiration date
     * @returns {void}
     */
    value: function set(name, value) {
      var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date('2050-01-01');

      name = encodeURIComponent(this._prefix + name);
      value = encodeURIComponent(value);

      if (expires instanceof Date) {
        expires = expires.toUTCString();
      }

      var cookie = name + '=' + value + '; expires=' + expires;

      if (CookiesDriver.secure) {
        cookie += '; secure';
      }

      document.cookie = cookie;
    }

    /**
     * @inheritDoc
     */

  }, {
    key: 'get',
    value: function get(name) {
      name = this._prefix + name;

      return this._toObject()[name];
    }

    /**
     * @inheritDoc
     */

  }, {
    key: 'remove',
    value: function remove(name) {
      name = encodeURIComponent(this._prefix + name);

      var cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT';

      if (CookiesDriver.secure) {
        cookie += ';secure';
      }

      document.cookie = cookie;
    }

    /**
     * @inheritDoc
     */

  }, {
    key: 'keys',
    value: function keys() {
      var regex = new RegExp('^' + this._prefix);

      return Object.keys(this._toObject()).map(function (x) {
        return x.replace(regex, '');
      });
    }

    /**
     * Extract cookies and turn them into a object
     * @returns {Object} - cookies
     * @private
     */

  }, {
    key: '_toObject',
    value: function _toObject() {
      var _this2 = this;

      var cookies = {};

      document.cookie.split(';').map(function (x) {
        return x.trim().split('=').map(decodeURIComponent);
      }).filter(function (x) {
        return x[0].startsWith(_this2._prefix);
      }).forEach(function (x) {
        cookies[x[0]] = x[1];
      });

      return cookies;
    }
  }, {
    key: '_prefix',
    get: function get() {
      return this.__prefix;
    }

    /**
     * @inheritDoc
     */

  }], [{
    key: 'secure',
    get: function get() {
      return window.location.protocol === 'https:';
    }

    /**
     * @inheritDoc
     */

  }, {
    key: 'available',
    get: function get() {
      return !(0, _node.isNode)();
    }
  }]);
  return CookiesDriver;
}(_DataStoreContract3.default);

exports.default = CookiesDriver;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNode = isNode;
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Test if the application is running under nodejs
 * @returns {boolean} - Is the application running under node?
 * @see https://nodejs.org
 * @private
 */
function isNode() {
  return typeof window === 'undefined' && typeof module !== 'undefined' && typeof module.exports !== 'undefined';
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _AbstractError = __webpack_require__(96);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 */
var DataStoreContract = function () {
  function DataStoreContract() {
    (0, _classCallCheck3.default)(this, DataStoreContract);

    if (this.constructor === DataStoreContract) {
      throw new _AbstractError.AbstractClassError();
    }

    if (!this.constructor.available) {
      throw new Error(this.constructor.name + ' is unavailable');
    }
  }

  /**
   * If the driver is currently available
   * @returns {boolean} - Driver availability
   */


  (0, _createClass3.default)(DataStoreContract, [{
    key: 'set',


    /**
     * Store a value in the storage
     * @param {String} name - value name
     * @param {*} value - value
     * @returns {void}
     * @abstract
     */
    value: function set(name, value) {
      throw new _AbstractError.AbstractMethodError();
    }

    /**
     * Get a value from the store
     * @param {String} name - value name
     * @returns {String} - value
     * @abstract
     */

  }, {
    key: 'get',
    value: function get(name) {
      throw new _AbstractError.AbstractMethodError();
    }

    /**
     * Remove a value from the store
     * @param {String} name - value name
     * @returns {void}
     * @abstract
     */

  }, {
    key: 'remove',
    value: function remove(name) {
      throw new _AbstractError.AbstractMethodError();
    }

    /**
     * Clear storage
     * @returns {void}
     */

  }, {
    key: 'clear',
    value: function clear() {
      var _this = this;

      this.keys().map(function (key) {
        return _this.remove(key);
      });
    }

    /**
     * Storage keys
     * @returns {Array<String>} - Stored keys
     * @abstract
     */

  }, {
    key: 'keys',
    value: function keys() {
      throw new _AbstractError.AbstractMethodError();
    }
  }], [{
    key: 'available',
    get: function get() {
      throw new _AbstractError.AbstractMethodError();
    }

    /**
     * If the storage is secure
     * @returns {boolean} - Secure storage
     */

  }, {
    key: 'secure',
    get: function get() {
      return false;
    }
  }]);
  return DataStoreContract;
}(); /*
      * BSD 3-Clause License
      *
      * Copyright (c) 2017, MapCreator
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, with or without
      * modification, are permitted provided that the following conditions are met:
      *
      *  Redistributions of source code must retain the above copyright notice, this
      *   list of conditions and the following disclaimer.
      *
      *  Redistributions in binary form must reproduce the above copyright notice,
      *   this list of conditions and the following disclaimer in the documentation
      *   and/or other materials provided with the distribution.
      *
      *  Neither the name of the copyright holder nor the names of its
      *   contributors may be used to endorse or promote products derived from
      *   this software without specific prior written permission.
      *
      * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
      * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
      * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
      * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
      * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
      * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */

/* eslint-disable no-unused-vars */

exports.default = DataStoreContract;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _node = __webpack_require__(108);

var _DataStoreContract2 = __webpack_require__(109);

var _DataStoreContract3 = _interopRequireDefault(_DataStoreContract2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var FileDriver = function (_DataStoreContract) {
  (0, _inherits3.default)(FileDriver, _DataStoreContract);

  /**
   * @param {String} path - File storage path
   * @inheritDoc
   */
  function FileDriver() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.m4n';
    (0, _classCallCheck3.default)(this, FileDriver);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FileDriver.__proto__ || Object.getPrototypeOf(FileDriver)).call(this));

    _this._path = path;
    return _this;
  }

  /**
   * File storage path
   * @returns {String} - path
   */


  (0, _createClass3.default)(FileDriver, [{
    key: 'set',


    /**
     * @inheritDoc
     */
    value: function set(name, value) {
      var data = this._read();

      data[name] = value;

      this._write(data);
    }

    /**
     * @inheritDoc
     */

  }, {
    key: 'get',
    value: function get(name) {
      return this._read()[name];
    }

    /**
     * @inheritDoc
     */

  }, {
    key: 'remove',
    value: function remove(name) {
      var data = this._read();

      delete data[name];

      this._write(data);
    }

    /**
     * @inheritDoc
     */

  }, {
    key: 'clear',
    value: function clear() {
      this._write({});
    }

    /**
     * @inheritDoc
     */

  }, {
    key: 'keys',
    value: function keys() {
      return Object.keys(this._read());
    }

    /**
     * Read file and parse
     * @returns {Object<String, String>} - Key, value object
     * @private
     */

  }, {
    key: '_read',
    value: function _read() {
      var data = void 0;

      try {
        data = this._fs.readFileSync(this.realPath).toString();
      } catch (e) {
        data = '{}';
      }

      if (!data) {
        return {};
      }

      return JSON.parse(data);
    }

    /**
     * Write data to file
     * @param {Object<String, String>} obj - Key, value object
     * @returns {void}
     * @private
     */

  }, {
    key: '_write',
    value: function _write(obj) {
      var data = JSON.stringify(obj);
      var fd = this._fs.openSync(this.realPath, 'w');

      this._fs.writeSync(fd, data);
      this._fs.closeSync(fd);
    }

    /**
     * Get fs instance
     * @returns {fs} - fs instance
     * @private
     */

  }, {
    key: 'path',
    get: function get() {
      return this._path;
    }

    /**
     * File storage path
     * @param {String} value - path
     */
    ,
    set: function set(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Expected "path" value to be of type "string"');
      }

      this._path = value;
    }
  }, {
    key: 'realPath',
    get: function get() {
      if (this.path.startsWith('/')) {
        return this.path;
      }

      // eslint-disable-next-line no-undef
      return this._fs.realpathSync(this.path);
    }

    /**
     * @inheritDoc
     */

  }, {
    key: '_fs',
    get: function get() {
      if (!this.__fs) {
        // eslint-disable-next-line no-eval
        this.__fs = eval('require("fs")');
      }

      return this.__fs;
    }
  }], [{
    key: 'available',
    get: function get() {
      return (0, _node.isNode)();
    }

    /**
     * @inheritDoc
     */

  }, {
    key: 'secure',
    get: function get() {
      return true;
    }
  }]);
  return FileDriver;
}(_DataStoreContract3.default);

exports.default = FileDriver;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DataStoreContract2 = __webpack_require__(109);

var _DataStoreContract3 = _interopRequireDefault(_DataStoreContract2);

var _node = __webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var LocalStorageDriver = function (_DataStoreContract) {
  (0, _inherits3.default)(LocalStorageDriver, _DataStoreContract);

  function LocalStorageDriver() {
    (0, _classCallCheck3.default)(this, LocalStorageDriver);
    return (0, _possibleConstructorReturn3.default)(this, (LocalStorageDriver.__proto__ || Object.getPrototypeOf(LocalStorageDriver)).apply(this, arguments));
  }

  (0, _createClass3.default)(LocalStorageDriver, [{
    key: 'set',


    /**
     * Store a value in the storage
     * @param {String} name - value name
     * @param {*} value - value
     * @returns {void}
     */
    value: function set(name, value) {
      name = LocalStorageDriver._prefix + name;

      window.localStorage.setItem(name, value);
    }

    /**
     * Get a value from the store
     * @param {String} name - value name
     * @returns {void}
     */

  }, {
    key: 'get',
    value: function get(name) {
      name = LocalStorageDriver._prefix + name;

      return window.localStorage.getItem(name);
    }

    /**
     * Remove a value from the store
     * @param {String} name - value name
     * @returns {void}
     */

  }, {
    key: 'remove',
    value: function remove(name) {
      name = LocalStorageDriver._prefix + name;

      window.localStorage.removeItem(name);
    }

    /**
     * Storage keys
     * @returns {Array<String>} - Stored keys
     */

  }, {
    key: 'keys',
    value: function keys() {
      var keys = [];
      var storage = window.localStorage;
      var prefix = LocalStorageDriver._prefix;

      for (var i = 0; i < storage.length; i++) {
        var key = storage.key(i);

        if (key.startsWith(prefix)) {
          key = key.replace(new RegExp('^' + prefix), '');

          keys.push(key);
        }
      }

      return keys;
    }
  }], [{
    key: '_prefix',

    /**
     * LocalStorage name prefix
     * @returns {String} - Prefix
     * @private
     */
    get: function get() {
      return '_m4n_';
    }

    /**
     * @inheritDoc
     */

  }, {
    key: 'available',
    get: function get() {
      return !(0, _node.isNode)();
    }
  }]);
  return LocalStorageDriver;
}(_DataStoreContract3.default);

exports.default = LocalStorageDriver;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormData = exports.Headers = exports.Response = exports.Request = exports.fetch = undefined;

var _typeof2 = __webpack_require__(26);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.encodeQueryString = encodeQueryString;
exports.downloadFile = downloadFile;

var _fetchPonyfill = __webpack_require__(113);

var _fetchPonyfill2 = _interopRequireDefault(_fetchPonyfill);

var _ApiError = __webpack_require__(98);

var _ApiError2 = _interopRequireDefault(_ApiError);

var _helpers = __webpack_require__(114);

var _node = __webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var _ref = (0, _helpers.windowTest)('fetch') ? window : (0, _fetchPonyfill2.default)({ Promise: Promise }),
    fetch = _ref.fetch,
    Request = _ref.Request,
    Response = _ref.Response,
    Headers = _ref.Headers;

exports.fetch = fetch;
exports.Request = Request;
exports.Response = Response;
exports.Headers = Headers;


function getFormData() {
  if ((0, _helpers.windowTest)('FormData')) {
    return window.FormData;
  } else if (!(0, _node.isNode)()) {
    return __webpack_require__(125);
  }

  // @todo find nodejs polyfill
  return null;
}

/**
 * @private
 */
var FormData = exports.FormData = getFormData();

/**
 * Encodes an object to a http query string with support for recursion
 * @param {object<string, *>} paramsObject - data to be encoded
 * @returns {string} - encoded http query string
 *
 * @private
 */
function encodeQueryString(paramsObject) {
  var query = _encodeQueryString(paramsObject);

  // Removes any extra unused &'s.
  return query.replace(/^&*|&+(?=&)|&*$/g, '');
}

/**
 * Encodes an object to a http query string with support for recursion
 * @param {Object<string, *>} paramsObject - data to be encoded
 * @param {Array<string>} _basePrefix - Used internally for tracking recursion
 * @returns {string} - encoded http query string
 *
 * @see http://stackoverflow.com/a/39828481
 * @private
 */
function _encodeQueryString(paramsObject) {
  var _basePrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return Object.keys(paramsObject).sort().map(function (key) {
    var prefix = _basePrefix.slice(0);

    if ((0, _typeof3.default)(paramsObject[key]) === 'object' && paramsObject[key] !== null) {
      prefix.push(key);

      return _encodeQueryString(paramsObject[key], prefix);
    }

    prefix.push(key);

    var out = '';

    out += encodeURIComponent(prefix.shift()); // main key
    out += prefix.map(function (item) {
      return '[' + encodeURIComponent(item) + ']';
    }).join(''); // optional array keys

    var value = paramsObject[key];

    if (value !== null && typeof value !== 'undefined') {
      out += '=' + encodeURIComponent(value); // value
    }

    return out;
  }).join('&');
}

/**
 * @param {string} url - Target url
 * @param {object<string, string>} headers - Request headers
 * @returns {PromiseLike<{filename: string, blob: string}>} - filename and blob
 * @private
 */
function downloadFile(url) {
  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var out = {};

  return fetch(url, { headers: headers }).then(function (res) {
    if (res.ok) {
      var regex = /(?:^|;\s*)filename=(?:'([^']+)'|"([^"]+)")/i;
      var match = regex.exec(res.headers.get('Content-Disposition'));

      out.filename = (match ? match[1] || match[2] : false) || 'undefined';
      return res.blob();
    }

    return res.json().then(function (data) {
      var err = data.error;

      throw new _ApiError2.default(err.type, err.message, res.status, err.trace);
    });
  }).then(function (blob) {
    out.blob = (window.URL || window.webkitURL).createObjectURL(blob);

    return out;
  });
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function (self) {
  'use strict';

  function fetchPonyfill(options) {
    var Promise = options && options.Promise || self.Promise;
    var XMLHttpRequest = options && options.XMLHttpRequest || self.XMLHttpRequest;
    var global = self;

    return (function () {
      var self = Object.create(global, {
        fetch: {
          value: undefined,
          writable: true
        }
      });

      (function(self) {
        'use strict';

        if (self.fetch) {
          return
        }

        var support = {
          searchParams: 'URLSearchParams' in self,
          iterable: 'Symbol' in self && 'iterator' in Symbol,
          blob: 'FileReader' in self && 'Blob' in self && (function() {
            try {
              new Blob()
              return true
            } catch(e) {
              return false
            }
          })(),
          formData: 'FormData' in self,
          arrayBuffer: 'ArrayBuffer' in self
        }

        if (support.arrayBuffer) {
          var viewClasses = [
            '[object Int8Array]',
            '[object Uint8Array]',
            '[object Uint8ClampedArray]',
            '[object Int16Array]',
            '[object Uint16Array]',
            '[object Int32Array]',
            '[object Uint32Array]',
            '[object Float32Array]',
            '[object Float64Array]'
          ]

          var isDataView = function(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj)
          }

          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
          }
        }

        function normalizeName(name) {
          if (typeof name !== 'string') {
            name = String(name)
          }
          if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
            throw new TypeError('Invalid character in header field name')
          }
          return name.toLowerCase()
        }

        function normalizeValue(value) {
          if (typeof value !== 'string') {
            value = String(value)
          }
          return value
        }

        // Build a destructive iterator for the value list
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift()
              return {done: value === undefined, value: value}
            }
          }

          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator
            }
          }

          return iterator
        }

        function Headers(headers) {
          this.map = {}

          if (headers instanceof Headers) {
            headers.forEach(function(value, name) {
              this.append(name, value)
            }, this)
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              this.append(header[0], header[1])
            }, this)
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name])
            }, this)
          }
        }

        Headers.prototype.append = function(name, value) {
          name = normalizeName(name)
          value = normalizeValue(value)
          var oldValue = this.map[name]
          this.map[name] = oldValue ? oldValue+','+value : value
        }

        Headers.prototype['delete'] = function(name) {
          delete this.map[normalizeName(name)]
        }

        Headers.prototype.get = function(name) {
          name = normalizeName(name)
          return this.has(name) ? this.map[name] : null
        }

        Headers.prototype.has = function(name) {
          return this.map.hasOwnProperty(normalizeName(name))
        }

        Headers.prototype.set = function(name, value) {
          this.map[normalizeName(name)] = normalizeValue(value)
        }

        Headers.prototype.forEach = function(callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this)
            }
          }
        }

        Headers.prototype.keys = function() {
          var items = []
          this.forEach(function(value, name) { items.push(name) })
          return iteratorFor(items)
        }

        Headers.prototype.values = function() {
          var items = []
          this.forEach(function(value) { items.push(value) })
          return iteratorFor(items)
        }

        Headers.prototype.entries = function() {
          var items = []
          this.forEach(function(value, name) { items.push([name, value]) })
          return iteratorFor(items)
        }

        if (support.iterable) {
          Headers.prototype[Symbol.iterator] = Headers.prototype.entries
        }

        function consumed(body) {
          if (body.bodyUsed) {
            return Promise.reject(new TypeError('Already read'))
          }
          body.bodyUsed = true
        }

        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result)
            }
            reader.onerror = function() {
              reject(reader.error)
            }
          })
        }

        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader()
          var promise = fileReaderReady(reader)
          reader.readAsArrayBuffer(blob)
          return promise
        }

        function readBlobAsText(blob) {
          var reader = new FileReader()
          var promise = fileReaderReady(reader)
          reader.readAsText(blob)
          return promise
        }

        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf)
          var chars = new Array(view.length)

          for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i])
          }
          return chars.join('')
        }

        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0)
          } else {
            var view = new Uint8Array(buf.byteLength)
            view.set(new Uint8Array(buf))
            return view.buffer
          }
        }

        function Body() {
          this.bodyUsed = false

          this._initBody = function(body) {
            this._bodyInit = body
            if (!body) {
              this._bodyText = ''
            } else if (typeof body === 'string') {
              this._bodyText = body
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString()
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer)
              // IE 10-11 can't handle a DataView body.
              this._bodyInit = new Blob([this._bodyArrayBuffer])
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body)
            } else {
              throw new Error('unsupported BodyInit type')
            }

            if (!this.headers.get('content-type')) {
              if (typeof body === 'string') {
                this.headers.set('content-type', 'text/plain;charset=UTF-8')
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set('content-type', this._bodyBlob.type)
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
              }
            }
          }

          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this)
              if (rejected) {
                return rejected
              }

              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob)
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]))
              } else if (this._bodyFormData) {
                throw new Error('could not read FormData body as blob')
              } else {
                return Promise.resolve(new Blob([this._bodyText]))
              }
            }

            this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) {
                return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
              } else {
                return this.blob().then(readBlobAsArrayBuffer)
              }
            }
          }

          this.text = function() {
            var rejected = consumed(this)
            if (rejected) {
              return rejected
            }

            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob)
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
            } else if (this._bodyFormData) {
              throw new Error('could not read FormData body as text')
            } else {
              return Promise.resolve(this._bodyText)
            }
          }

          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode)
            }
          }

          this.json = function() {
            return this.text().then(JSON.parse)
          }

          return this
        }

        // HTTP methods whose capitalization should be normalized
        var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

        function normalizeMethod(method) {
          var upcased = method.toUpperCase()
          return (methods.indexOf(upcased) > -1) ? upcased : method
        }

        function Request(input, options) {
          options = options || {}
          var body = options.body

          if (input instanceof Request) {
            if (input.bodyUsed) {
              throw new TypeError('Already read')
            }
            this.url = input.url
            this.credentials = input.credentials
            if (!options.headers) {
              this.headers = new Headers(input.headers)
            }
            this.method = input.method
            this.mode = input.mode
            if (!body && input._bodyInit != null) {
              body = input._bodyInit
              input.bodyUsed = true
            }
          } else {
            this.url = String(input)
          }

          this.credentials = options.credentials || this.credentials || 'omit'
          if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers)
          }
          this.method = normalizeMethod(options.method || this.method || 'GET')
          this.mode = options.mode || this.mode || null
          this.referrer = null

          if ((this.method === 'GET' || this.method === 'HEAD') && body) {
            throw new TypeError('Body not allowed for GET or HEAD requests')
          }
          this._initBody(body)
        }

        Request.prototype.clone = function() {
          return new Request(this, { body: this._bodyInit })
        }

        function decode(body) {
          var form = new FormData()
          body.trim().split('&').forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split('=')
              var name = split.shift().replace(/\+/g, ' ')
              var value = split.join('=').replace(/\+/g, ' ')
              form.append(decodeURIComponent(name), decodeURIComponent(value))
            }
          })
          return form
        }

        function parseHeaders(rawHeaders) {
          var headers = new Headers()
          rawHeaders.split(/\r?\n/).forEach(function(line) {
            var parts = line.split(':')
            var key = parts.shift().trim()
            if (key) {
              var value = parts.join(':').trim()
              headers.append(key, value)
            }
          })
          return headers
        }

        Body.call(Request.prototype)

        function Response(bodyInit, options) {
          if (!options) {
            options = {}
          }

          this.type = 'default'
          this.status = 'status' in options ? options.status : 200
          this.ok = this.status >= 200 && this.status < 300
          this.statusText = 'statusText' in options ? options.statusText : 'OK'
          this.headers = new Headers(options.headers)
          this.url = options.url || ''
          this._initBody(bodyInit)
        }

        Body.call(Response.prototype)

        Response.prototype.clone = function() {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
          })
        }

        Response.error = function() {
          var response = new Response(null, {status: 0, statusText: ''})
          response.type = 'error'
          return response
        }

        var redirectStatuses = [301, 302, 303, 307, 308]

        Response.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError('Invalid status code')
          }

          return new Response(null, {status: status, headers: {location: url}})
        }

        self.Headers = Headers
        self.Request = Request
        self.Response = Response

        self.fetch = function(input, init) {
          return new Promise(function(resolve, reject) {
            var request = new Request(input, init)
            var xhr = new XMLHttpRequest()

            xhr.onload = function() {
              var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || '')
              }
              options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
              var body = 'response' in xhr ? xhr.response : xhr.responseText
              resolve(new Response(body, options))
            }

            xhr.onerror = function() {
              reject(new TypeError('Network request failed'))
            }

            xhr.ontimeout = function() {
              reject(new TypeError('Network request failed'))
            }

            xhr.open(request.method, request.url, true)

            if (request.credentials === 'include') {
              xhr.withCredentials = true
            }

            if ('responseType' in xhr && support.blob) {
              xhr.responseType = 'blob'
            }

            request.headers.forEach(function(value, name) {
              xhr.setRequestHeader(name, value)
            })

            xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
          })
        }
        self.fetch.polyfill = true
      })(typeof self !== 'undefined' ? self : this);


      return {
        fetch: self.fetch,
        Headers: self.Headers,
        Request: self.Request,
        Response: self.Response
      };
    }());
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return fetchPonyfill;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : typeof global !== 'undefined' ? global : this));



/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(115);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.getPaginatedRange = getPaginatedRange;
exports.windowTest = windowTest;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Get all the pages from a {@link PaginatedResourceListing} or a range
 * @param {Promise<PaginatedResourceListing>|PaginatedResourceListing} page - Promise that returns a {@link PaginatedResourceWrapper}
 * @param {?Number} [start=1] - Start page
 * @param {?Number} [stop] - Stop page, defaults to the page count if not filled in.
 * @returns {Promise<Array<ResourceBase>>} - Resolves with an {@link Array} containing {@link PaginatedResourceListing} instance and rejects with {@link ApiError}
 * @example
 * import { helpers } from "@mapcreator/maps4news";
 *
 * const promise = api.users.list(1, 50); // 50 per page is more efficient
 *
 * helpers.getPaginatedRange(promise).then(data => {
 *    data.map(row => `[${row.id}] ${row.name}`) // We just want the names
 *        .forEach(console.log) // Log the names and ids of every user
 * })
 */
function getPaginatedRange(page) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var stop = arguments[2];

  // Resolve promise if any
  if (page instanceof Promise) {
    return page.then(function (res) {
      return getPaginatedRange(res, start, stop);
    });
  }

  var out = page.data;
  var promises = [];

  // Handle defaults
  start = start || page.page;
  stop = stop || page.pageCount;

  if (start === page.page) {
    start++;
  }

  return new Promise(function (resolve, reject) {
    // Get all pages
    for (var i = start; i <= stop; i++) {
      promises.push(page.get(i));
    }

    // Resolve
    Promise.all(promises).then(function (rows) {
      resolve(out.concat.apply(out, (0, _toConsumableArray3.default)(rows.map(function (x) {
        return x.data;
      }))));
    }, reject);
  });
}

/**
 * Quickly check if the window contains a variable
 * @param {string} str - target variable
 * @returns {boolean} - If the window contains the variable
 * @private
 */
function windowTest(str) {
  return typeof window !== 'undefined' && typeof window[str] !== 'undefined';
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(116);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(118);
module.exports = __webpack_require__(11).Array.from;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(12);
var $export = __webpack_require__(9);
var toObject = __webpack_require__(56);
var call = __webpack_require__(119);
var isArrayIter = __webpack_require__(120);
var toLength = __webpack_require__(46);
var createProperty = __webpack_require__(121);
var getIterFn = __webpack_require__(122);

$export($export.S + $export.F * !__webpack_require__(124)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(16);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(36);
var ITERATOR = __webpack_require__(54)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(15);
var createDesc = __webpack_require__(23);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(123);
var ITERATOR = __webpack_require__(54)('iterator');
var Iterators = __webpack_require__(36);
module.exports = __webpack_require__(11).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(44);
var TAG = __webpack_require__(54)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(54)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 125 */
/***/ (function(module, exports) {

;(function(){var k,l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){a!=Array.prototype&&a!=Object.prototype&&(a[b]=e.value)},m="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function n(){n=function(){};m.Symbol||(m.Symbol=p)}var p=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function r(){n();var a=m.Symbol.iterator;a||(a=m.Symbol.iterator=m.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&l(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return u(this)}});r=function(){}}function u(a){var b=0;return v(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function v(a){r();a={next:a};a[m.Symbol.iterator]=function(){return this};return a}function w(a){r();n();r();var b=a[Symbol.iterator];return b?b.call(a):u(a)}
function x(){this.g=!1;this.c=null;this.m=void 0;this.b=1;this.l=this.o=0;this.f=null}function z(a){if(a.g)throw new TypeError("Generator is already running");a.g=!0}x.prototype.h=function(a){this.m=a};x.prototype.i=function(a){this.f={s:a,u:!0};this.b=this.o||this.l};x.prototype["return"]=function(a){this.f={"return":a};this.b=this.l};function A(a,b,e){a.b=e;return{value:b}}function B(a){this.v=a;this.j=[];for(var b in a)this.j.push(b);this.j.reverse()}function C(a){this.a=new x;this.w=a}
C.prototype.h=function(a){z(this.a);if(this.a.c)return D(this,this.a.c.next,a,this.a.h);this.a.h(a);return E(this)};function F(a,b){z(a.a);var e=a.a.c;if(e)return D(a,"return"in e?e["return"]:function(a){return{value:a,done:!0}},b,a.a["return"]);a.a["return"](b);return E(a)}C.prototype.i=function(a){z(this.a);if(this.a.c)return D(this,this.a.c["throw"],a,this.a.h);this.a.i(a);return E(this)};
function D(a,b,e,c){try{var d=b.call(a.a.c,e);if(!(d instanceof Object))throw new TypeError("Iterator result "+d+" is not an object");if(!d.done)return a.a.g=!1,d;var f=d.value}catch(g){return a.a.c=null,a.a.i(g),E(a)}a.a.c=null;c.call(a.a,f);return E(a)}function E(a){for(;a.a.b;)try{var b=a.w(a.a);if(b)return a.a.g=!1,{value:b.value,done:!1}}catch(e){a.a.m=void 0,a.a.i(e)}a.a.g=!1;if(a.a.f){b=a.a.f;a.a.f=null;if(b.u)throw b.s;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function G(a){this.next=function(b){return a.h(b)};this["throw"]=function(b){return a.i(b)};this["return"]=function(b){return F(a,b)};r();this[Symbol.iterator]=function(){return this}}function H(a,b){G.prototype=a.prototype;return new G(new C(b))}
if("undefined"===typeof FormData||!FormData.prototype.keys){var I=function(a,b,e){if(2>arguments.length)throw new TypeError("2 arguments required, but only "+arguments.length+" present.");return b instanceof Blob?[a+"",b,void 0!==e?e+"":"string"===typeof b.name?b.name:"Blob"]:[a+"",b+""]},J=function(a){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");return[a+""]},K=function(a){var b=w(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,
lastModified:a.lastModified}));return a},L="object"===typeof window?window:"object"===typeof self?self:this,M=L.FormData,N=L.XMLHttpRequest&&L.XMLHttpRequest.prototype.send,O=L.Request&&L.fetch;n();var P=L.Symbol&&Symbol.toStringTag,Q=new WeakMap,R=Array.from||function(a){return[].slice.call(a)};P&&(Blob.prototype[P]||(Blob.prototype[P]="Blob"),"File"in L&&!File.prototype[P]&&(File.prototype[P]="File"));try{new File([],"")}catch(a){L.File=function(b,e,c){b=new Blob(b,c);c=c&&void 0!==c.lastModified?
new Date(c.lastModified):new Date;Object.defineProperties(b,{name:{value:e},lastModifiedDate:{value:c},lastModified:{value:+c},toString:{value:function(){return"[object File]"}}});P&&Object.defineProperty(b,P,{value:"File"});return b}}var S=function(a){Q.set(this,Object.create(null));if(!a)return this;a=w(R(a.elements));for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.name&&!b.disabled)if("file"===b.type)for(var e=w(b.files),c=e.next();!c.done;c=e.next())this.append(b.name,c.value);else if("select-multiple"===
b.type||"select-one"===b.type)for(e=w(R(b.options)),c=e.next();!c.done;c=e.next())c=c.value,c.selected&&this.append(b.name,c.value);else"checkbox"===b.type||"radio"===b.type?b.checked&&this.append(b.name,b.value):this.append(b.name,b.value)};k=S.prototype;k.append=function(a,b,e){var c=Q.get(this);c[a]||(c[a]=[]);c[a].push([b,e])};k["delete"]=function(a){delete Q.get(this)[a]};k.entries=function b(){var e=this,c,d,f,g,h,q;return H(b,function(b){switch(b.b){case 1:c=Q.get(e),f=new B(c);case 2:var t;
a:{for(t=f;0<t.j.length;){var y=t.j.pop();if(y in t.v){t=y;break a}}t=null}if(null==(d=t)){b.b=0;break}g=w(c[d]);h=g.next();case 5:if(h.done){b.b=2;break}q=h.value;return A(b,[d,K(q)],6);case 6:h=g.next(),b.b=5}})};k.forEach=function(b,e){for(var c=w(this),d=c.next();!d.done;d=c.next()){var f=w(d.value);d=f.next().value;f=f.next().value;b.call(e,f,d,this)}};k.get=function(b){var e=Q.get(this);return e[b]?K(e[b][0]):null};k.getAll=function(b){return(Q.get(this)[b]||[]).map(K)};k.has=function(b){return b in
Q.get(this)};k.keys=function e(){var c=this,d,f,g,h,q;return H(e,function(e){switch(e.b){case 1:d=w(c),f=d.next();case 2:if(f.done){e.b=0;break}g=f.value;h=w(g);q=h.next().value;return A(e,q,3);case 3:f=d.next(),e.b=2}})};k.set=function(e,c,d){Q.get(this)[e]=[[c,d]]};k.values=function c(){var d=this,f,g,h,q,y;return H(c,function(c){switch(c.b){case 1:f=w(d),g=f.next();case 2:if(g.done){c.b=0;break}h=g.value;q=w(h);q.next();y=q.next().value;return A(c,y,3);case 3:g=f.next(),c.b=2}})};S.prototype._asNative=
function(){for(var c=new M,d=w(this),f=d.next();!f.done;f=d.next()){var g=w(f.value);f=g.next().value;g=g.next().value;c.append(f,g)}return c};S.prototype._blob=function(){for(var c="----formdata-polyfill-"+Math.random(),d=[],f=w(this),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;d.push("--"+c+"\r\n");h instanceof Blob?d.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",
h,"\r\n"):d.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}d.push("--"+c+"--");return new Blob(d,{type:"multipart/form-data; boundary="+c})};n();r();S.prototype[Symbol.iterator]=function(){return this.entries()};S.prototype.toString=function(){return"[object FormData]"};P&&(S.prototype[P]="FormData");[["append",I],["delete",J],["get",J],["getAll",J],["has",J],["set",I]].forEach(function(c){var d=S.prototype[c[0]];S.prototype[c[0]]=function(){return d.apply(this,c[1].apply(this,
R(arguments)))}});N&&(XMLHttpRequest.prototype.send=function(c){c instanceof S?(c=c._blob(),this.setRequestHeader("Content-Type",c.type),N.call(this,c)):N.call(this,c)});if(O){var T=L.fetch;L.fetch=function(c,d){d&&d.body&&d.body instanceof S&&(d.body=d.body._blob());return T(c,d)}}L.FormData=S};
})();


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _StorageManager = __webpack_require__(104);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _StaticClass2 = __webpack_require__(105);

var _StaticClass3 = _interopRequireDefault(_StaticClass2);

var _uuid = __webpack_require__(127);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * State container for keeping track of OAuth states (crsf tokens)
 * @static
 * @private
 */
var StateContainer = function (_StaticClass) {
  (0, _inherits3.default)(StateContainer, _StaticClass);

  function StateContainer() {
    (0, _classCallCheck3.default)(this, StateContainer);
    return (0, _possibleConstructorReturn3.default)(this, (StateContainer.__proto__ || Object.getPrototypeOf(StateContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(StateContainer, null, [{
    key: 'generate',


    /**
     * Generate and store a state that can be checked at a later point
     * @returns {string} - state
     */
    value: function generate() {
      var uuid = _uuid2.default.uuid4();
      var key = StateContainer.prefix + uuid;

      _StorageManager2.default.best.set(key, Date.now());
      return uuid;
    }

    /**
     * Validate a state
     * @param {String} state - state to validate
     * @param {Boolean} purge - remove from state db after validation
     * @returns {Boolean} - if the state is valid
     */

  }, {
    key: 'validate',
    value: function validate(state) {
      var purge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var storage = _StorageManager2.default.best;
      var key = StateContainer.prefix + state;
      var found = typeof storage.get(key) !== 'undefined';

      if (purge && found) {
        storage.remove(key);
      }

      return found;
    }

    /**
     * Remove all states from the state db
     * @returns {void}
     */

  }, {
    key: 'clean',
    value: function clean() {
      var tokens = Object.keys(this.list());

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var token = _step.value;

          _StorageManager2.default.best.remove(StateContainer.prefix + token);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * Get states with their corresponding state db key
     * @returns {Object<String, String>} - List of stored states
     */

  }, {
    key: 'list',
    value: function list() {
      var storage = _StorageManager2.default.best;

      return storage.keys().filter(function (x) {
        return x.startsWith(StateContainer.prefix);
      }).map(function (x) {
        return x.replace(StateContainer.prefix, '');
      }).reduce(function (out, key) {
        out[key] = storage.get(key);

        return out;
      }, {});
    }
  }, {
    key: 'prefix',

    /**
     * LocalStorage key prefix
     * @returns {String} - prefix
     * @constant
     */
    get: function get() {
      return 'oauth_state_';
    }
  }]);
  return StateContainer;
}(_StaticClass3.default); /*
                           * BSD 3-Clause License
                           *
                           * Copyright (c) 2017, MapCreator
                           * All rights reserved.
                           *
                           * Redistribution and use in source and binary forms, with or without
                           * modification, are permitted provided that the following conditions are met:
                           *
                           *  Redistributions of source code must retain the above copyright notice, this
                           *   list of conditions and the following disclaimer.
                           *
                           *  Redistributions in binary form must reproduce the above copyright notice,
                           *   this list of conditions and the following disclaimer in the documentation
                           *   and/or other materials provided with the distribution.
                           *
                           *  Neither the name of the copyright holder nor the names of its
                           *   contributors may be used to endorse or promote products derived from
                           *   this software without specific prior written permission.
                           *
                           * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                           * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                           * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                           * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                           * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                           * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                           * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                           * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                           * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                           * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                           */

exports.default = StateContainer;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _StaticClass2 = __webpack_require__(105);

var _StaticClass3 = _interopRequireDefault(_StaticClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * UUID util class
 * @static
 * @private
 */
var Uuid = function (_StaticClass) {
  (0, _inherits3.default)(Uuid, _StaticClass);

  function Uuid() {
    (0, _classCallCheck3.default)(this, Uuid);
    return (0, _possibleConstructorReturn3.default)(this, (Uuid.__proto__ || Object.getPrototypeOf(Uuid)).apply(this, arguments));
  }

  (0, _createClass3.default)(Uuid, null, [{
    key: 'uuid4',

    /**
     * Generate a UUID4 string
     * @returns {string} - Uuid
     */
    value: function uuid4() {
      var d = new Date().getTime();

      if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); // use high-precision timer if available
      }

      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;

        d = Math.floor(d / 16);
        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
    }

    /**
     * Empty uuid as per spec
     * @returns {string} - Uuid
     */

  }, {
    key: 'nil',
    value: function nil() {
      return '0000000-0000-0000-0000-000000000000';
    }
  }]);
  return Uuid;
}(_StaticClass3.default); /*
                           * BSD 3-Clause License
                           *
                           * Copyright (c) 2017, MapCreator
                           * All rights reserved.
                           *
                           * Redistribution and use in source and binary forms, with or without
                           * modification, are permitted provided that the following conditions are met:
                           *
                           *  Redistributions of source code must retain the above copyright notice, this
                           *   list of conditions and the following disclaimer.
                           *
                           *  Redistributions in binary form must reproduce the above copyright notice,
                           *   this list of conditions and the following disclaimer in the documentation
                           *   and/or other materials provided with the distribution.
                           *
                           *  Neither the name of the copyright holder nor the names of its
                           *   contributors may be used to endorse or promote products derived from
                           *   this software without specific prior written permission.
                           *
                           * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                           * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                           * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                           * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                           * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                           * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                           * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                           * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                           * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                           * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                           */

exports.default = Uuid;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(129);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = __webpack_require__(26);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _enums = __webpack_require__(1);

var _requests = __webpack_require__(112);

var _SimpleResourceProxy2 = __webpack_require__(130);

var _SimpleResourceProxy3 = _interopRequireDefault(_SimpleResourceProxy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Proxy for accessing resource. This will make sure that they
 * are properly wrapped before the promise resolves.
 * @protected
 */
var ResourceProxy = function (_SimpleResourceProxy) {
  (0, _inherits3.default)(ResourceProxy, _SimpleResourceProxy);

  /**
   * @param {Maps4News} api - Instance of the api
   * @param {ResourceBase} Target - Target to wrap
   * @param {?string} [altUrl=null] - Internal use, Optional alternative url for more complex routing
   * @param {object} seedData - Internal use, used for seeding ::new
   */
  function ResourceProxy(api, Target) {
    var altUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var seedData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    (0, _classCallCheck3.default)(this, ResourceProxy);
    return (0, _possibleConstructorReturn3.default)(this, (ResourceProxy.__proto__ || Object.getPrototypeOf(ResourceProxy)).call(this, api, Target, altUrl, seedData));
  }

  /**
   * Parse selector
   * @param {Number|String|Object} [id=] - The resource id to be requested
   * @returns {Object} - Parsed selector
   * @private
   */


  (0, _createClass3.default)(ResourceProxy, [{
    key: '_parseSelector',
    value: function _parseSelector(id) {
      if (id === '' || id === null) {
        return {};
      }

      switch (typeof id === 'undefined' ? 'undefined' : (0, _typeof3.default)(id)) {
        case 'number':
        case 'string':
          return (0, _defineProperty3.default)({}, this.Target.resourceUrlKey, id);
        case 'object':
          return id;
        default:
          return {};
      }
    }

    /**
     * Get target resource
     * @param {Number|String|Object} [id=] - The resource id to be requested
     * @param {String} deleted - Determains if the resource should be shown if deleted, requires special resource permissions. Possible values: only, none, all
     * @returns {Promise} - Resolves with {@link ResourceBase} instance and rejects with {@link ApiError}
     */

  }, {
    key: 'get',
    value: function get(id) {
      var _this2 = this;

      var deleted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _enums.DeletedState.NONE;

      var data = Object.assign({}, this._seedData, this._parseSelector(id));
      var url = this.new(data).url;
      var glue = url.includes('?') ? '&' : '?';

      url += glue + (0, _requests.encodeQueryString)({ deleted: deleted });

      return this._api.request(url).then(function (result) {
        return _this2.new(result);
      });
    }

    /**
     * Select target resource without obtaining data
     * @param {Number|String} [id=] - Resource id
     * @returns {ResourceBase} - Empty target resource
     * @example
     * api.users.select('me').colors().then(doSomethingCool);
     */

  }, {
    key: 'select',
    value: function select(id) {
      var data = Object.assign({}, this._seedData, this._parseSelector(id));

      return this.new(data);
    }
  }]);
  return ResourceProxy;
}(_SimpleResourceProxy3.default); /*
                                   * BSD 3-Clause License
                                   *
                                   * Copyright (c) 2017, MapCreator
                                   * All rights reserved.
                                   *
                                   * Redistribution and use in source and binary forms, with or without
                                   * modification, are permitted provided that the following conditions are met:
                                   *
                                   *  Redistributions of source code must retain the above copyright notice, this
                                   *   list of conditions and the following disclaimer.
                                   *
                                   *  Redistributions in binary form must reproduce the above copyright notice,
                                   *   this list of conditions and the following disclaimer in the documentation
                                   *   and/or other materials provided with the distribution.
                                   *
                                   *  Neither the name of the copyright holder nor the names of its
                                   *   contributors may be used to endorse or promote products derived from
                                   *   this software without specific prior written permission.
                                   *
                                   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                                   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                                   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                                   * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                                   * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                                   * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                                   * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                                   * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                                   * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                                   * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                   */

exports.default = ResourceProxy;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(6);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(26);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _PaginatedResourceListing = __webpack_require__(131);

var _PaginatedResourceListing2 = _interopRequireDefault(_PaginatedResourceListing);

var _RequestParameters = __webpack_require__(135);

var _RequestParameters2 = _interopRequireDefault(_RequestParameters);

var _ResourceLister = __webpack_require__(137);

var _ResourceLister2 = _interopRequireDefault(_ResourceLister);

var _ResourceBase = __webpack_require__(159);

var _ResourceBase2 = _interopRequireDefault(_ResourceBase);

var _reflection = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Proxy for accessing resource. This will make sure that they
 * are properly wrapped before the promise resolves.
 * @protected
 */
var SimpleResourceProxy = function () {
  /**
   * @param {Maps4News} api - Instance of the api
   * @param {ResourceBase} Target - Target to wrap
   * @param {?string} [altUrl=null] - Internal use, Optional alternative url for more complex routing
   * @param {object} seedData - Internal use, used for seeding ::new
   */
  function SimpleResourceProxy(api, Target) {
    var altUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var seedData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    (0, _classCallCheck3.default)(this, SimpleResourceProxy);

    if (!(0, _reflection.isParentOf)(_ResourceBase2.default, Target)) {
      throw new TypeError('Target is not a child of ResourceBase');
    }

    if (typeof Target !== 'function') {
      throw new TypeError('Target must to be a class not an instance');
    }

    if (altUrl) {
      this.__baseUrl = altUrl;
    }

    this._api = api;
    this._Target = Target;
    this._seedData = seedData;
  }

  /**
   * Proxy target url
   * @returns {string} url
   * @example
   * api.layers.select(100).organisations.baseUrl === "https://maponline-api.dev/v1/layers/100/organisations"
   */


  (0, _createClass3.default)(SimpleResourceProxy, [{
    key: 'new',


    /**
     * Build a new instance of the target
     * @param {Object<String, *>} data - Data for the object to be populated with
     * @returns {ResourceBase} - Resource with target data
     */
    value: function _new() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // Merge but don't overwrite using seed data
      data = Object.assign({}, this._seedData, data);

      return new this.Target(this._api, data);
    }

    /**
     * List target resource
     * @param {Number|Object|RequestParameters} [params] - Parameters or the page number to be requested
     * @param {Number} [params.page=1] - The page to be requested
     * @param {Number} [params.perPage=this.api.defaults.perPage] - Amount of items per page. This is silently capped by the API
     * @param {Number} [params.sort=''] - Amount of items per page. This is silently capped by the API
     * @param {Number} [params.deleted=this.api.defaults.showDeleted] - Show deleted resources, posible values: only, none, all
     * @param {?Object<String, String|Array<String>>} [params.search] - Search parameters
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance and rejects with {@link ApiError}
     * @example
     * // Find layers with a name that starts with "test" and a scale_min between 1 and 10
     * // See Api documentation for search query syntax
     * const search = {
     *   name: '^:test',
     *   scale_min: ['>:1', '<:10'],
     * };
     *
     * api.layers.list({perPage: 10, search});
     */

  }, {
    key: 'list',
    value: function list() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var resolver = this._buildResolver(params);

      return resolver.getPage(resolver.page);
    }

    /**
     * List target resource
     * @param {Number|Object|RequestParameters} [params] - Parameters or the page to be requested
     * @param {Number} [params.page=1] - The page to be requested
     * @param {Number} [params.perPage=this.api.defaults.perPage] - Amount of items per page. This is silently capped by the API
     * @param {Array<String>|string} [params.sort=''] - Comma separated list or array
     * @param {String} [params.deleted=this.api.defaults.showDeleted] - Show deleted resources, posible values: only, none, all
     * @param {Boolean} [params.shareCache=this.api.defaults.shareCache] - Share cache across instances
     * @param {?Object<String, String|Array<String>>} [params.search] - Search parameters
     * @returns {PaginatedResourceWrapper} - Wrapped paginated resource
     * @example
     * // Find layers with a name that starts with "test" and a scale_min between 1 and 10
     * // See Api documentation for search query syntax
     * const search = {
     *   name: '^:test',
     *   scale_min: ['>:1', '<:10'],
     * };
     *
     * api.layers.listandWrap({perPage: 10, search});
     */

  }, {
    key: 'listAndWrap',
    value: function listAndWrap() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var resolver = this._buildResolver(params);
      var wrapped = resolver.wrap(resolver.page);

      wrapped.get(resolver.page);
      return wrapped;
    }

    /**
     * Get the resource lister
     *
     * @param {object|RequestParameters} parameters - parameters
     * @param {number} maxRows - Maximum amount of rows
     * @returns {ResourceLister} - Resource lister
     */

  }, {
    key: 'lister',
    value: function lister() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var maxRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

      return new _ResourceLister2.default(this.api, this.baseUrl, this.Target, parameters, maxRows, this.Target.resourceUrlKey);
    }
  }, {
    key: '_buildResolver',
    value: function _buildResolver() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var paramType = typeof params === 'undefined' ? 'undefined' : (0, _typeof3.default)(params);
      var url = this.baseUrl;

      if (!['number', 'object'].includes(paramType)) {
        throw new TypeError('Expected params to be of type number or object. Got "' + paramType + '"');
      }

      if (paramType === 'number') {
        return this._buildResolver({ page: params });
      }

      if (!(params instanceof _RequestParameters2.default)) {
        params = new _RequestParameters2.default(params);
      }

      return new _PaginatedResourceListing2.default(this._api, url, this.Target, params);
    }
  }, {
    key: 'baseUrl',
    get: function get() {
      if (!this.__baseUrl) {
        this.__baseUrl = this.new().baseUrl;
      }

      return this.__baseUrl;
    }

    /**
     * Get api instance
     * @returns {Maps4News} - Api instance
     */

  }, {
    key: 'api',
    get: function get() {
      return this._api;
    }

    /**
     * Target to wrap results in
     * @returns {ResourceBase} - Target constructor
     * @constructor
     */

  }, {
    key: 'Target',
    get: function get() {
      return this._Target;
    }

    /**
     * The name of the target
     * @returns {String} - Target name
     * @example
     * api.colors.accessorName === 'Color'
     * api.fontFamilies.accessorName = 'Font Families'
     */

  }, {
    key: 'accessorName',
    get: function get() {
      return this.Target.name.replace(/([A-Z])/g, function (x) {
        return ' ' + x;
      }).trim();
    }
  }]);
  return SimpleResourceProxy;
}(); /*
      * BSD 3-Clause License
      *
      * Copyright (c) 2017, MapCreator
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, with or without
      * modification, are permitted provided that the following conditions are met:
      *
      *  Redistributions of source code must retain the above copyright notice, this
      *   list of conditions and the following disclaimer.
      *
      *  Redistributions in binary form must reproduce the above copyright notice,
      *   this list of conditions and the following disclaimer in the documentation
      *   and/or other materials provided with the distribution.
      *
      *  Neither the name of the copyright holder nor the names of its
      *   contributors may be used to endorse or promote products derived from
      *   this software without specific prior written permission.
      *
      * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
      * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
      * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
      * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
      * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
      * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */

exports.default = SimpleResourceProxy;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Maps4News = __webpack_require__(97);

var _Maps4News2 = _interopRequireDefault(_Maps4News);

var _PaginatedResourceWrapper = __webpack_require__(132);

var _PaginatedResourceWrapper2 = _interopRequireDefault(_PaginatedResourceWrapper);

var _RequestParameters = __webpack_require__(135);

var _RequestParameters2 = _interopRequireDefault(_RequestParameters);

var _reflection = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Proxy for accessing paginated resources
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var PaginatedResourceListing = function () {
  /**
   * @param {Maps4News} api - Instance of the api
   * @param {String} route - Resource route
   * @param {ResourceBase} Target - Wrapper target
   * @param {RequestParameters} parameters - Request parameters
   * @param {Number} pageCount - Resolved page count
   * @param {Number} rowCount - Resolved rowCount
   * @param {Array<ResourceBase>} data - Resolved data
   * @private
   */
  function PaginatedResourceListing(api, route, Target, parameters) {
    var pageCount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var rowCount = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var data = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
    (0, _classCallCheck3.default)(this, PaginatedResourceListing);

    if (!(0, _reflection.isParentOf)(_Maps4News2.default, api)) {
      throw new TypeError('Expected api to be of type Maps4News');
    }

    if (!(0, _reflection.isParentOf)(_RequestParameters2.default, parameters)) {
      parameters = new _RequestParameters2.default(parameters);
    }

    this._api = api;

    this.route = route;
    this._Target = Target;
    this._parameters = parameters;
    this._pageCount = pageCount;
    this._rows = rowCount;
    this._data = data;
  }

  /**
   * Get api instance
   * @returns {Maps4News} - Api instance
   */


  (0, _createClass3.default)(PaginatedResourceListing, [{
    key: 'getPage',


    /**
     * Get target page
     * @param {Number} page - Page number
     * @param {Number} perPage - Amount of items per page (max 50)
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance and rejects with {@link ApiError}
     */
    value: function getPage() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;

      var query = this.parameters.copy();

      query.page = page;
      query.perPage = perPage;

      var glue = this.route.includes('?') ? '&' : '?';
      var url = this.route + glue + query.encode();

      return this.api.request(url, 'GET', {}, {}, true).then(function (output) {
        var headers = output.response.headers;

        var getOrDefault = function getOrDefault(x, y) {
          return headers.has(x) ? headers.get(x) : y;
        };

        var rowCount = Number(getOrDefault('X-Paginate-Total', output.data.length));
        var totalPages = Number(getOrDefault('X-Paginate-Pages', 1));
        var parameters = _this.parameters.copy();

        parameters.page = page;

        return new PaginatedResourceListing(_this.api, _this.route, _this._Target, parameters, totalPages, rowCount, output.data.map(function (row) {
          return new _this._Target(_this.api, row);
        }));
      });
    }

    /**
     * If there is a next page
     * @returns {boolean} - If there is a next page
     */

  }, {
    key: 'next',


    /**
     * Get next page
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance and rejects with {@link ApiError}
     */
    value: function next() {
      return this.getPage(this.page + 1);
    }

    /**
     * Get previous page
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance and rejects with {@link ApiError}
     */

  }, {
    key: 'previous',
    value: function previous() {
      return this.getPage(this.page - 1);
    }

    /**
     * Wraps {@link PaginatedResourceWrapper} around the page
     * @param {Boolean} shareCache - Share cache across instances
     * @returns {PaginatedResourceWrapper} - Wrapped resource listing
     */

  }, {
    key: 'wrap',
    value: function wrap() {
      var shareCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.api.defaults._shareCache;

      return new _PaginatedResourceWrapper2.default(this, this.api, shareCache);
    }
  }, {
    key: 'api',
    get: function get() {
      return this._api;
    }

    /**
     * Target route
     * @returns {String} - url
     */

  }, {
    key: 'route',
    get: function get() {
      return this._route;
    }

    /**
     * Override the target route
     * @param {String} value - route
     */
    ,
    set: function set(value) {
      if (!value.startsWith('https://') && !value.startsWith('http://')) {
        if (!value.startsWith('/')) {
          value = '/' + value;
        }

        value = this._api.host + '/' + this._api.version + value;
      }

      this._route = value;
    }

    /**
     * Target to wrap results in
     * @returns {ResourceBase} - Target constructor
     * @constructor
     */

  }, {
    key: 'Target',
    get: function get() {
      return this._Target;
    }

    /**
     * Request parameters
     * @returns {RequestParameters} - Request parameters
     */

  }, {
    key: 'parameters',
    get: function get() {
      return this._parameters;
    }

    /**
     * Request parameters
     * @param {RequestParameters} value - Request parameters
     */
    ,
    set: function set(value) {
      this._parameters = value;
    }

    /**
     * Current page number
     * @returns {Number} - Current page
     */

  }, {
    key: 'page',
    get: function get() {
      return this.parameters.page;
    }

    /**
     * Maximum amount of items per page
     * @returns {Number} - Amount of items
     */

  }, {
    key: 'perPage',
    get: function get() {
      return this.parameters.perPage;
    }

    /**
     * Set sort direction
     * @returns {String} - Sort
     * @example
     * const sort = ['-name', 'id']
     */

  }, {
    key: 'sort',
    get: function get() {
      return this.parameters.sort;
    }

    /**
     * Current sorting value
     * @param {String} value - Sort
     */
    ,
    set: function set(value) {
      this.parameters.sort = value;
    }

    /**
     * Deleted items filter state
     * @returns {String} value - Deleted items filter state
     * @see {@link DeletedState}
     */

  }, {
    key: 'deleted',
    get: function get() {
      return this.parameters.deleted;
    }

    /**
     * Deleted items filter state
     * @param {String} value - Deleted items filter state
     * @see {@link DeletedState}
     */
    ,
    set: function set(value) {
      this.parameters.deleted = value;
    }

    /**
     * Amount of pages available
     * @returns {Number} - Page count
     */

  }, {
    key: 'pageCount',
    get: function get() {
      return this._pageCount;
    }

    /**
     * Page data
     * @returns {Array<ResourceBase>} - Wrapped data
     */

  }, {
    key: 'data',
    get: function get() {
      return this._data;
    }

    /**
     * Row count
     * @returns {Number} - Row count
     */

  }, {
    key: 'rows',
    get: function get() {
      return this._rows;
    }

    /**
     * Optional search query
     * @default {}
     * @return {Object<String, String|Array<String>>} - Query
     */

  }, {
    key: 'query',
    get: function get() {
      return this.parameters.search;
    }

    /**
     * Optional search query
     * @param {Object<String, String|Array<String>>} value - Query
     * @throws TypeError
     * @default {}
     * @see {@link ResourceProxy#search}
     */
    ,
    set: function set(value) {
      this.parameters.search = value;
    }
  }, {
    key: 'hasNext',
    get: function get() {
      return this.page < this.pageCount;
    }

    /**
     * If there is a previous page
     * @returns {boolean} - If there is a previous page
     */

  }, {
    key: 'hasPrevious',
    get: function get() {
      return this.page > 1;
    }

    /**
     * Used for caching pages internally
     * @returns {string} - Cache token
     * @see {@link PaginatedResourceWrapper}
     * @see {@link ResourceCache}
     */

  }, {
    key: 'cacheToken',
    get: function get() {
      return this.parameters.token();
    }
  }]);
  return PaginatedResourceListing;
}();

exports.default = PaginatedResourceListing;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _PaginatedResourceListing = __webpack_require__(131);

var _PaginatedResourceListing2 = _interopRequireDefault(_PaginatedResourceListing);

var _ResourceCache = __webpack_require__(133);

var _ResourceCache2 = _interopRequireDefault(_ResourceCache);

var _hash = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used for wrapping {@link PaginatedResourceListing} to make it spa friendly
 * @todo Allow for manual cache updates, ex: a resource has been modified, deleted, created
 */
var PaginatedResourceWrapper = function () {
  /**
   *
   * @param {PaginatedResourceListing} listing - Listing result
   * @param {Maps4News} api - Instance of the api
   * @param {Boolean} shareCache - Share cache across instances
   */
  function PaginatedResourceWrapper(listing) {
    var _this = this;

    var api = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : listing.api;
    var shareCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : api.defaults.shareCache;
    (0, _classCallCheck3.default)(this, PaginatedResourceWrapper);


    // Fields
    this._api = api;
    this._shareCache = shareCache;
    this._currentPage = 1;
    this._context = [];

    /**
     * Available data assembled from the cache
     * @type {Array<ResourceBase>} - Available data
     */
    this.data = [];

    // Internal
    this._localCache = new _ResourceCache2.default(api, this.api.defaults.cacheSeconds);
    this._inflight = [];
    this._last = listing;
    this._waiting = false;

    this.on('invalidate', function () {
      return _this.rebuild();
    });

    this._promiseCallback(listing);
  }

  (0, _createClass3.default)(PaginatedResourceWrapper, [{
    key: 'get',


    /**
     * Manually fetch a page. This will change the current page.
     * @param {Number|Array<Number>} pageId - Page(s) to fetch
     * @returns {void}
     */
    value: function get(pageId) {
      if (pageId instanceof Array) {
        pageId.map(this.get);
      } else {
        this._waiting = true;

        this._inflight.push(pageId);
        this._last.getPage(pageId).then(this._promiseCallback);
      }
    }

    /**
     * Grab the next page
     * @returns {void}
     */

  }, {
    key: 'next',
    value: function next() {
      this.get(++this.currentPage);
    }

    /**
     * Grab the previous page
     * @returns {void}
     */

  }, {
    key: 'previous',
    value: function previous() {
      this.get(--this.currentPage);
    }

    /**
     * Manually rebuild the data
     * @returns {void}
     */

  }, {
    key: 'rebuild',
    value: function rebuild() {
      this.data = this.cache.resolve(this.route, this._last.cacheToken).filter(function (value) {
        return typeof value !== 'undefined';
      });

      this.cache.emitter.emit('post-rebuild', { resourceUrl: this._last.route });
    }

    /**
     * Updates the cached pages.
     * @param {Boolean} flush - Clear the cached route data
     * @returns {void}
     * @example
     * function onRefresh() {
     *   if(wrapper.waiting) {
     *     return; // not done yet
     *   }
     *
     *   wrapper.off('post-rebuild', onRefresh);
     *
     *   // Do stuff here
     * }
     *
     * wrapper.on('post-rebuild', onRefresh);
     * wrapper.refresh();
     */

  }, {
    key: 'refresh',
    value: function refresh() {
      var _this2 = this;

      var flush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (flush) {
        this.cache.clear(this.route);
      }

      this.cache.collectPages(this.route, this._last.cacheToken).map(function (page) {
        return _this2.get(page.page);
      });
    }

    /**
     * Returns the page number that is currently being used as a reference point
     * @returns {Number} - The current page
     * @see {@link PaginatedResourceWrapper#next}
     * @see {@link PaginatedResourceWrapper#previous}
     */

  }, {
    key: 'query',


    /**
     * Set the request params and submit
     * @param {?Object<String, *>} value - Query
     * @throws TypeError
     * @default {}
     * @see {@link ResourceProxy#search}
     * @returns {Object<String, String|Array<String>>} - query
     */
    value: function query() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!value || value === this.query()) {
        return this._last.query;
      }

      this._context[this._last.cacheToken] = this._last;

      var token = (0, _hash.hashObject)(value);

      if (this._context[token]) {
        this._last = this._context[token];
      } else {
        var parameters = this._last.parameters.copy();

        parameters.page = 1;
        parameters.apply(value);

        this._last = new _PaginatedResourceListing2.default(this.api, this._last.route, this._last.Target, parameters);
        this.get(parameters.page);
        this.currentPage = 1;
      }

      this.rebuild();

      return this.query();
    }

    /**
     * Get api instance
     * @returns {Maps4News} - Api instance
     */

  }, {
    key: 'on',


    /**
     * Register an event handler for the given type.
     *
     * @param {string} type - Type of event to listen for, or `"*"` for all events.
     * @param {function(eventType: string, event: any): void|function(event: any): void} handler - Function to call in response to the given event.
     * @returns {void}
     */
    value: function on(type, handler) {
      var _this3 = this;

      this.cache.emitter.on(type, function (t, e) {
        if (type === '*' && e.resourceUrl === _this3.route) {
          handler(t, e);
        } else if (type !== '*' && t.resourceUrl === _this3.route) {
          handler(t);
        }
      });
    }

    /**
     * Function to call in response to the given event
     *
     * @param {string} type - Type of event to unregister `handler` from, or `"*"`
     * @param {function(event: any): void} handler - Handler function to remove.
     * @returns {void}
     */

  }, {
    key: 'off',
    value: function off(type, handler) {
      this.cache.emitter.off(type, handler);
    }
  }, {
    key: '_promiseCallback',
    get: function get() {
      var _this4 = this;

      return function (result) {
        var query = _this4.query();

        _this4._last = result;
        _this4._query = query;

        _this4.cache.push(result);

        var inflightId = _this4.inflight.findIndex(function (x) {
          return x === result.page;
        });

        if (inflightId >= 0) {
          _this4._inflight.splice(inflightId, 1);
        }

        _this4._waiting = _this4.inflight.length > 0;

        _this4.rebuild();
      };
    }
  }, {
    key: 'currentPage',
    get: function get() {
      return this._currentPage;
    }

    /**
     * Set the current page number
     * @param {Number} value - page number
     */
    ,
    set: function set(value) {
      this._currentPage = Math.max(1, value);
    }

    /**
     * Get the route of the resource
     * @returns {String} - route
     */

  }, {
    key: 'route',
    get: function get() {
      return this._last.route;
    }

    /**
     * Override the resource route
     * @param {String} value - route
     */
    ,
    set: function set(value) {
      this._route = value;
    }

    /**
     * Row count
     * @returns {Number} - Row count
     */

  }, {
    key: 'rows',
    get: function get() {
      return this._last.rows;
    }

    /**
     * Get the number of pages available
     * @returns {Number} - Page count
     */

  }, {
    key: 'pageCount',
    get: function get() {
      return this._last.pageCount;
    }
  }, {
    key: 'api',
    get: function get() {
      return this._api;
    }

    /**
     * Get the active cache instance
     * @returns {ResourceCache} - Cache instance
     */

  }, {
    key: 'cache',
    get: function get() {
      return this.shareCache ? this.api.cache : this._localCache;
    }

    /**
     * Get if the shared cache should be used
     * @returns {Boolean} - Should the shared cache be used
     */

  }, {
    key: 'shareCache',
    get: function get() {
      return this._shareCache;
    }

    /**
     * Sets if the shared cache should be used
     * @param {Boolean} value - Should the shared cache be used
     */
    ,
    set: function set(value) {
      this._shareCache = Boolean(value);
    }

    /**
     * If there is a next page
     * @returns {boolean} - If there is a next page
     */

  }, {
    key: 'hasNext',
    get: function get() {
      return this.inflight.length === 0 ? this._last.hasNext : this.currentPage < this.pageCount;
    }

    /**
     * If there is a previous page
     * @returns {boolean} - If there is a previous page
     */

  }, {
    key: 'hasPrevious',
    get: function get() {
      return this._last.hasPrevious;
    }

    /**
     * List of page numbers that are still mid-flight
     * @returns {Array} - Page numbers that are still mid-flight
     */

  }, {
    key: 'inflight',
    get: function get() {
      return this._inflight;
    }

    /**
     * Returns if there are still requests mid-flight
     * @returns {boolean} - Returns if the wrapper is waiting for requests to finish
     */

  }, {
    key: 'waiting',
    get: function get() {
      return this._waiting;
    }
  }]);
  return PaginatedResourceWrapper;
}(); /*
      * BSD 3-Clause License
      *
      * Copyright (c) 2017, MapCreator
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, with or without
      * modification, are permitted provided that the following conditions are met:
      *
      *  Redistributions of source code must retain the above copyright notice, this
      *   list of conditions and the following disclaimer.
      *
      *  Redistributions in binary form must reproduce the above copyright notice,
      *   this list of conditions and the following disclaimer in the documentation
      *   and/or other materials provided with the distribution.
      *
      *  Neither the name of the copyright holder nor the names of its
      *   contributors may be used to endorse or promote products derived from
      *   this software without specific prior written permission.
      *
      * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
      * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
      * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
      * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
      * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
      * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */

exports.default = PaginatedResourceWrapper;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _mitt = __webpack_require__(134);

var _mitt2 = _interopRequireDefault(_mitt);

var _Unobservable2 = __webpack_require__(93);

var _Unobservable3 = _interopRequireDefault(_Unobservable2);

var _uuid = __webpack_require__(127);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used for caching resources. Requires the resource to have an unique id field
 * @see {@link PaginatedResourceWrapper}
 * @todo Add periodic data refreshing while idle, most likely implemented in cache (maybe v1/resource?timestamp=123 where it will give modified records since)
 */
var ResourceCache = function (_Unobservable) {
  (0, _inherits3.default)(ResourceCache, _Unobservable);

  function ResourceCache(api) {
    var cacheTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : api.defaults.cacheSeconds;
    var dereference = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : api.defaults.dereferenceCache;
    (0, _classCallCheck3.default)(this, ResourceCache);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ResourceCache.__proto__ || Object.getPrototypeOf(ResourceCache)).call(this));

    _this._api = api;
    _this.cacheTime = cacheTime;
    _this.dereference = dereference;
    _this.emitter = (0, _mitt2.default)();

    _this._storage = {};
    return _this;
  }

  /**
   * Push a page into the cache
   * @param {PaginatedResourceListing} page - Data to be cached
   * @returns {void}
   */


  (0, _createClass3.default)(ResourceCache, [{
    key: 'push',
    value: function push(page) {
      var _this2 = this;

      if (page.rows === 0) {
        return; // Don't insert empty pages
      }

      delete page['__ob__']; // Remove VueJs observer

      // Test if this is data we can actually work with by testing if there are any non-numeric ids (undefined etc)
      var invalidData = page.data.map(function (row) {
        return row.id;
      }).filter(function (x) {
        return typeof x !== 'number';
      }).length > 0;

      if (invalidData) {
        throw new TypeError('Missing or invalid row.id for page.data. Data rows must to contain a numeric "id" field.');
      }

      var validThrough = this._timestamp + this.cacheTime;
      var cacheId = _uuid2.default.uuid4();
      var data = {
        page: page, validThrough: validThrough,
        id: cacheId,
        timeout: setTimeout(function () {
          return _this2._deleteCacheIds(cacheId);
        }, this.cacheTime * 1000)
      };

      var storage = this._storage[page.route] || (this._storage[page.route] = {});

      (storage[page.cacheToken] || (storage[page.cacheToken] = [])).push(data);

      this.emitter.emit('push', { page: page, validThrough: validThrough, resourceUrl: page.route });
      this.emitter.emit('invalidate', { resourceUrl: page.route });
    }

    /**
     * Delete from cache using cacheId
     * @param {String|Array<String>} ids - cache ids
     * @returns {void}
     */

  }, {
    key: '_deleteCacheIds',
    value: function _deleteCacheIds(ids) {
      if (!(ids instanceof Array)) {
        this._deleteCacheIds([ids]);
        return;
      }

      var found = 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(this._storage)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var resourceUrl = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = Object.keys(this._storage[resourceUrl])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var token = _step2.value;

              var entries = this._storage[resourceUrl][token];

              for (var i = 0; i < entries.length; i++) {
                if (ids.includes(entries[i].id)) {
                  entries.splice(i, 1);
                  i--;
                  found++;

                  if (found === ids.length) {
                    return;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * Revalidate all data and delete stale data
     * @param {String} resourceUrl - Resource url
     * @returns {void}
     */

  }, {
    key: 'revalidate',
    value: function revalidate() {
      var _this3 = this;

      var resourceUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!resourceUrl) {
        Object.keys(this._storage).map(this.revalidate);
      } else if (this._storage[resourceUrl]) {
        var storage = this._storage[resourceUrl];

        // Remove old data from the cache and stop old timeouts
        Object.keys(storage).forEach(function (key) {
          storage[key].filter(function (row) {
            return row.validThrough < _this3._timestamp;
          }).forEach(function (row) {
            return clearTimeout(row.timeout);
          });

          storage[key] = storage[key].filter(function (row) {
            return row.validThrough >= _this3._timestamp;
          });
        });

        var junk = Object.keys(storage).filter(function (key) {
          return storage[key].length === 0;
        });

        // Delete empty
        junk.forEach(function (key) {
          return delete storage[key];
        });
        if (Object.keys(storage).length === 0) {
          delete this._storage[resourceUrl];
        }

        if (junk.length > 0) {
          this.emitter.emit('invalidate', { resourceUrl: resourceUrl });
        }
      }
    }

    /**
     * Collect relevant cached pages
     * @param {String} resourceUrl - resource url
     * @param {String} cacheToken - Cache token
     * @see {@link PaginatedResourceListing#cacheToken}
     * @returns {Array<PaginatedResourceListing>} - Relevant cached pages
     */

  }, {
    key: 'collectPages',
    value: function collectPages(resourceUrl) {
      var cacheToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      cacheToken = cacheToken.toLowerCase();

      // Storage array or []
      var storage = (this._storage[resourceUrl] || {})[cacheToken] || [];

      // Sort by validThrough and extract pages
      // SORT BY page, validThrough ASCENDING
      return storage.sort(function (a, b) {
        if (a.page === b.page) {
          return a.validThrough - b.validThrough;
        }

        return a.page - b.page;
      });
    }

    /**
     * Clears the cache
     * @param {String} resourceUrl - Resource url
     * @returns {void}
     */

  }, {
    key: 'clear',
    value: function clear() {
      var _this4 = this;

      var resourceUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!resourceUrl) {
        Object.keys(this._storage).forEach(function (url) {
          _this4.emitter.emit('invalidate', { resourceUrl: url });
        });

        this._storage = {};
      } else {
        delete this._storage[resourceUrl];
        this.emitter.emit('invalidate', { resourceUrl: resourceUrl });
      }
    }

    /**
     * Resolve cache and return indexed data
     * @param {String} resourceUrl - Resource url
     * @param {String} cacheToken - Cache token
     * @see {@link PaginatedResourceListing#cacheToken}
     * @returns {Array<ResourceBase>} - Indexed relevant data
     * @todo add page numbers or range as optional parameter
     */

  }, {
    key: 'resolve',
    value: function resolve(resourceUrl) {
      var cacheToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      cacheToken = cacheToken.toLowerCase();

      // List ordered from old to new
      var data = this.collectPages(resourceUrl, cacheToken);
      var out = [];

      var lastPage = void 0;
      var startIndex = 0;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var row = _step3.value;

          var page = row.page;

          // Skip empty pages
          if (page.data.length === 0) {
            continue;
          }

          // Have we parsed the same page already?
          if (typeof lastPage !== 'undefined' && lastPage === page.page) {
            var ii = void 0;

            for (var i = 0; i < page.data.length; i++) {
              ii = i + startIndex; // Get relative index for `out`

              if (typeof out[ii] === 'undefined') {
                out.push(page.data[i]); // Push if there is no data
              } else if (page.data[i].id !== out[ii].id) {
                out[ii] = page.data[i];

                // lookbehind
                for (var j = 0; j < startIndex; j++) {
                  if (out[j].id === out[ii].id) {
                    out.splice(j, 1);

                    startIndex--;
                    i--;
                    ii--;
                    j--;
                  }
                }
              }
            }

            // Remove trailing data
            if (typeof ii !== 'undefined') {
              out.splice(ii + 1, out.length);
            }
          } else {
            // First time page number is parsed, just append it.
            startIndex = out.length;

            page.data.map(function (x) {
              return out.push(x);
            });
          }

          lastPage = row.page.page;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (this.dereference) {
        return out.map(function (x) {
          return x.clone();
        });
      }

      return out;
    }

    /**
     * Update records in the cache manually lazily. Any matching instance found will be updated.
     * @param {ResourceBase|Array<ResourceBase>} rows - Data to be updated
     * @returns {void} - nothing
     */

  }, {
    key: 'update',
    value: function update(rows) {
      if (!(rows instanceof Array)) {
        this.update([rows]);
        return;
      }

      // Split up data into types
      var data = {};
      var ids = {};

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = rows[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var row = _step4.value;

          var key = row.constructor.name;

          (data[key] || (data[key] = [])).push(row);
          (ids[key] || (ids[key] = [])).push(row.id);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      var models = Object.keys(data);

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = Object.keys(this._storage)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var resourceUrl = _step5.value;

          var invalidate = false;

          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = Object.keys(this._storage[resourceUrl])[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var token = _step6.value;

              var entries = this._storage[resourceUrl][token];

              var _iteratorNormalCompletion7 = true;
              var _didIteratorError7 = false;
              var _iteratorError7 = undefined;

              try {
                for (var _iterator7 = entries[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                  var entry = _step7.value;

                  var page = entry.page;

                  if (page.data.length === 0) {
                    continue;
                  }

                  var _key = page.data[0].constructor.name;

                  if (!models.includes(_key)) {
                    break;
                  }

                  var _loop = function _loop(_row) {
                    if (!ids[_key].includes(_row.id)) {
                      return 'continue';
                    }

                    var index = ids[_key].findIndex(function (x) {
                      return x === _row.id;
                    });
                    var value = data[_key][index];

                    value.sanitize();

                    value.fieldNames.forEach(function (x) {
                      _row[x] = value[x];
                    });

                    invalidate = true;
                  };

                  var _iteratorNormalCompletion8 = true;
                  var _didIteratorError8 = false;
                  var _iteratorError8 = undefined;

                  try {
                    for (var _iterator8 = page.data[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                      var _row = _step8.value;

                      var _ret = _loop(_row);

                      if (_ret === 'continue') continue;
                    }
                  } catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                      }
                    } finally {
                      if (_didIteratorError8) {
                        throw _iteratorError8;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion7 && _iterator7.return) {
                    _iterator7.return();
                  }
                } finally {
                  if (_didIteratorError7) {
                    throw _iteratorError7;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          if (invalidate) {
            this.emitter.emit('invalidate', { resourceUrl: resourceUrl });
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }

    /**
     * Get a usable timestamp
     * @returns {number} - timestamp
     * @private
     */

  }, {
    key: '_timestamp',
    get: function get() {
      return Math.floor(Date.now() / 1000);
    }
  }]);
  return ResourceCache;
}(_Unobservable3.default); /*
                            * BSD 3-Clause License
                            *
                            * Copyright (c) 2017, MapCreator
                            * All rights reserved.
                            *
                            * Redistribution and use in source and binary forms, with or without
                            * modification, are permitted provided that the following conditions are met:
                            *
                            *  Redistributions of source code must retain the above copyright notice, this
                            *   list of conditions and the following disclaimer.
                            *
                            *  Redistributions in binary form must reproduce the above copyright notice,
                            *   this list of conditions and the following disclaimer in the documentation
                            *   and/or other materials provided with the distribution.
                            *
                            *  Neither the name of the copyright holder nor the names of its
                            *   contributors may be used to endorse or promote products derived from
                            *   this software without specific prior written permission.
                            *
                            * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                            * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                            * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                            * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                            * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                            * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                            * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                            * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                            * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                            * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                            */

exports.default = ResourceCache;

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(26);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _case = __webpack_require__(85);

var _events = __webpack_require__(136);

var _enums = __webpack_require__(1);

var _hash = __webpack_require__(88);

var _reflection = __webpack_require__(86);

var _requests = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used for keeping track of the request parameters
 *
 * @fires RequestParameters#change
 * @fires RequestParameters#change:page
 * @fires RequestParameters#change:perPage
 * @fires RequestParameters#change:search
 * @fires RequestParameters#change:sort
 * @fires RequestParameters#change:deleted
 * @fires RequestParameters#change:extra
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var RequestParameters = function (_EventEmitter) {
  (0, _inherits3.default)(RequestParameters, _EventEmitter);

  /**
   * RequestParameters constructor
   * @param {Object} object - properties
   */
  function RequestParameters() {
    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, RequestParameters);

    // Apply defaults
    var _this = (0, _possibleConstructorReturn3.default)(this, (RequestParameters.__proto__ || Object.getPrototypeOf(RequestParameters)).call(this));

    RequestParameters.keys().forEach(function (x) {
      return _this._resolve(x);
    });

    // Apply properties
    _this.apply(object);
    return _this;
  }

  // region instance
  // region instance getters
  /**
   * Get page number
   * @returns {Number} - Page number
   * @throws TypeError
   */


  (0, _createClass3.default)(RequestParameters, [{
    key: '_resolve',


    // endregion validators

    value: function _resolve(name) {
      var _name = '_' + name;

      if (!this[_name]) {
        // Confuse esdoc
        (this || {})[_name] = RequestParameters[name];
      }

      return this[_name];
    }
  }, {
    key: '_update',
    value: function _update(name, value) {
      var _name = '_' + name;

      value = RequestParameters['_validate' + (0, _case.pascal)(name)](value);
      (this || {})[_name] = value; // Weird syntax confuses esdoc

      /**
       * Change event.
       *
       * @event RequestParameters#change
       * @type {object}
       * @property {string} name - Parameter name
       * @property {*} value - New value
       */
      this.emit('change', { name: name, value: value });
      this.emit('change:' + name, value);
    }

    // region utils
    /**
     * Urlencode parameters
     * @returns {string} - HTTP query
     */

  }, {
    key: 'encode',
    value: function encode() {
      return (0, _requests.encodeQueryString)(this.toParameterObject());
    }

    /**
     * Convert to object
     * @returns {Object} - Object
     */

  }, {
    key: 'toObject',
    value: function toObject() {
      var _this2 = this;

      return RequestParameters.keys().reduce(function (obj, key) {
        obj[(0, _case.snake)(key)] = _this2._resolve(key);
        return obj;
      }, {});
    }

    /**
     * Convert to object
     * @returns {Object} - Object
     */

  }, {
    key: 'toParameterObject',
    value: function toParameterObject() {
      var _this3 = this;

      var data = {};

      RequestParameters.keys().forEach(function (key) {
        // Skip extra key
        if (key === 'extra') {
          return;
        }

        data[(0, _case.snake)(key)] = _this3._resolve(key);
      });

      // Fix column names for sort
      data.sort = data.sort.map(function (x) {
        return (0, _case.snake)(x).replace(/^_/, '-');
      }).join(',');

      // Fix column names for search
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(data.search)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          var snakeKey = key.split(',').map(_case.snake).join(',');

          if (key !== snakeKey) {
            data.search[snakeKey] = data.search[key];
            delete data.search[key];
          }
        }

        // Overwrite using extra properties
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var extra = this._resolve('extra');

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(extra)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _key = _step2.value;

          data[_key] = extra[_key];
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return data;
    }

    /**
     * Copy object
     * @returns {RequestParameters} - Copy
     */

  }, {
    key: 'copy',
    value: function copy() {
      return new RequestParameters(this.toObject());
    }

    /**
     * Different parameters
     * @returns {Array<String>} - keys
     */

  }, {
    key: 'token',


    /**
     * Generates a cache token
     * @returns {string} - Cache token
     */
    value: function token() {
      var data = this.toObject();

      delete data['page'];
      delete data['per_page'];

      return (0, _hash.hashObject)(data);
    }

    /**
     * Resets all parameters back to default
     * @returns {void}
     */

  }, {
    key: 'apply',


    /**
     * Apply parameters from object
     * @param {object|RequestParameters} params - parameters
     * @returns {void}
     */
    value: function apply(params) {
      if (params instanceof RequestParameters) {
        params = params.toObject();
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.keys(params)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var key = _step3.value;

          var Key = (0, _case.camel)(key);

          if (key[0] === '_' || !RequestParameters.keys().includes(Key)) {
            continue;
          }

          this._update(Key, params[key]);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
    // endregion utils

  }, {
    key: 'page',
    get: function get() {
      return this._resolve('page');
    }

    /**
     * Get rows per page
     * @returns {Number} - Per page
     * @throws TypeError
     */
    ,


    // endregion instance getters

    // region instance setters
    /**
     * Page number
     * @param {Number} value - Page number
     */
    set: function set(value) {
      this._update('page', value);
    }

    /**
     * Rows per page number
     * @param {Number} value - Per page
     */

  }, {
    key: 'perPage',
    get: function get() {
      return this._resolve('perPage');
    }

    /**
     * Search query
     * @returns {Object<String, String|Array<String>>} - Query
     * @throws TypeError
     */
    ,
    set: function set(value) {
      this._update('perPage', value);
    }

    /**
     * Search query
     * @param {Object<String, String|Array<String>>} value - Search query
     */

  }, {
    key: 'search',
    get: function get() {
      return this._resolve('search');
    }

    /**
     * Get sort options
     * @returns {Array<String>} - Per page
     * @throws TypeError
     */
    ,
    set: function set(value) {
      this._update('search', value);
    }

    /**
     * Sort query
     * @param {Array<String>} value - Sort query
     */

  }, {
    key: 'sort',
    get: function get() {
      return this._resolve('sort');
    }

    /**
     * If deleted items should be shown
     * @returns {String} - Deleted items filter state
     * @see {@link DeletedState}
     */
    ,
    set: function set(value) {
      this._update('sort', value);
    }

    /**
     * Deleted items filter state
     * @param {String} value - Deleted items filter state
     * @see {@link DeletedState}
     */

  }, {
    key: 'deleted',
    get: function get() {
      return this._resolve('deleted');
    }

    /**
     * Extra parameters
     * @returns {Object} - Extra parameters
     */
    ,
    set: function set(value) {
      this._update('deleted', value);
    }

    /**
     * Extra request parameters
     * @param {Object} value - Extra request parameters
     */

  }, {
    key: 'extra',
    get: function get() {
      return this._resolve('extra');
    },
    set: function set(value) {
      this._update('extra', value);
    }

    // endregion instance setters
    // endregion instance

    // region static
    // region getters
    /**
     * Default page number
     * @returns {Number} - Page number
     */

  }], [{
    key: '_validatePage',


    // endregion setters
    // endregion static

    // region validators
    /**
     * Validators should work the same as laravel's ::validate method. This means
     * this means that they will throw a TypeError or return a normalized result.
     */

    value: function _validatePage(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Expected page to be of type \'number\' instead got \'' + (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) + '\'');
      }

      return Math.round(value);
    }
  }, {
    key: '_validatePerPage',
    value: function _validatePerPage(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Expected page to be of type \'Number\' instead got \'' + (0, _reflection.getTypeName)(value) + '\'');
      }

      value = Math.round(value);
      value = Math.min(RequestParameters.maxPerPage, value); // Upper limit is 50 by default
      value = Math.max(1, value); // Lower limit is 1

      return value;
    }
  }, {
    key: '_validateMaxPerPage',
    value: function _validateMaxPerPage(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Expected page to be of type \'Number\' instead got \'' + (0, _reflection.getTypeName)(value) + '\'');
      }

      if (value < 1) {
        throw new TypeError('Value must be greater or equal to 1');
      }

      return value;
    }
  }, {
    key: '_validateSearch',
    value: function _validateSearch(value) {
      if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) !== 'object' || Array.isArray(value)) {
        throw new TypeError('Expected value to be of type "Object" got "' + (0, _reflection.getTypeName)(value) + '"');
      }

      // Normalization macro
      var normalize = function normalize(x) {
        return typeof x === 'number' ? x.toString() : x;
      };

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.keys(value)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var key = _step4.value;

          key = normalize(key);
          value[key] = normalize(value[key]);

          if (typeof key !== 'string') {
            throw new TypeError('Expected key to be of type "String" got "' + (0, _reflection.getTypeName)(key) + '"');
          }

          if (Array.isArray(value[key])) {
            if (value[key].length > 0) {
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = value[key][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var query = _step5.value;

                  if (typeof query !== 'string' && typeof query !== 'number') {
                    throw new TypeError('Expected query for "' + key + '" to be of type "String" or "Number" got "' + (0, _reflection.getTypeName)(query) + '"');
                  }
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }
            } else {
              // Drop empty nodes
              delete value[key];
            }
          } else if (value[key] === null) {
            delete value[key];
          } else if (typeof value[key] !== 'string') {
            throw new TypeError('Expected query value to be of type "String" or "Array" got "' + (0, _reflection.getTypeName)(value[key]) + '"');
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return value;
    }
  }, {
    key: '_validateSort',
    value: function _validateSort(value) {
      if (typeof value === 'string') {
        return this._validateSort(value.split(','));
      }

      if (!(value instanceof Array)) {
        throw new TypeError('Expected sort value to be of type "Array" got "' + (0, _reflection.getTypeName)(value) + '"');
      }

      // Array keys type checking
      value.filter(function (x) {
        return typeof x !== 'string';
      }).forEach(function (x) {
        throw new TypeError('Expected sort array values to be of type "String" got "' + (0, _reflection.getTypeName)(x) + '"');
      });

      // Don't do regex matching because it's something
      // we can just let the server do for us.

      return value;
    }
  }, {
    key: '_validateDeleted',
    value: function _validateDeleted(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Expected deleted to be of type "string" got "' + (0, _reflection.getTypeName)(value) + '". See: DeletedState');
      }

      value = value.toLowerCase();

      var possible = _enums.DeletedState.values();

      if (!possible.includes(value)) {
        throw new TypeError('Expected deleted to be one of ' + possible.join(', ') + ', got ' + value);
      }

      return value;
    }
  }, {
    key: '_validateExtra',
    value: function _validateExtra(value) {
      if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) !== 'object') {
        throw new TypeError('Expected extra to be of type \'object\', got \'' + (0, _reflection.getTypeName)(value) + '\'');
      }

      return value;
    }
  }, {
    key: 'keys',
    value: function keys() {
      // enumeration is disabled for properties
      return ['page', 'perPage', 'search', 'sort', 'deleted', 'extra'];
    }
  }, {
    key: 'resetDefaults',
    value: function resetDefaults() {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = RequestParameters.keys()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var key = _step6.value;

          delete RequestParameters['_' + key];
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }
  }, {
    key: 'page',
    get: function get() {
      return RequestParameters._page || 1;
    }

    /**
     * Default per page
     * @returns {Number} - Per page
     */
    ,


    // endregion getters

    // region setters
    /**
     * Default page number
     * @param {Number} value - Page number
     */
    set: function set(value) {
      RequestParameters._page = RequestParameters._validatePage(value);
    }

    /**
     * Default per page
     * @param {Number} value - Per page
     */

  }, {
    key: 'perPage',
    get: function get() {
      return RequestParameters._perPage || Number("12") || 12;
    }

    /**
     * Gets the maximum allowed value for perPage
     * Some users will have a special permission that allows them to fetch more than 50 resources at once
     * @returns {Number} - Maximum amount of resources per page
     */
    ,
    set: function set(value) {
      RequestParameters._perPage = RequestParameters._validatePerPage(value);
    }

    /**
     * Sets the maximum allowed value for perPage
     * Some users will have a special permission that allows them to fetch more than 50 resources at once
     * @param {Number} value - Maximum amount of resources per page
     */

  }, {
    key: 'maxPerPage',
    get: function get() {
      return RequestParameters._maxPerPage || 50;
    }

    /**
     * Default search query
     * @returns {Object<String, String|Array<String>>} - Search query
     */
    ,
    set: function set(value) {
      RequestParameters._maxPerPage = RequestParameters._validateMaxPerPage(value);
    }

    /**
     * Default search query
     * @param {Object<String, String|Array<String>>} value - Search query
     */

  }, {
    key: 'search',
    get: function get() {
      return RequestParameters._search || {};
    }

    /**
     * Default sort query
     * @returns {Array<String>} - Sort query
     */
    ,
    set: function set(value) {
      RequestParameters._search = RequestParameters._validateSearch(value);
    }

    /**
     * Default sort query
     * @param {Array<String>} value - Sort query
     */

  }, {
    key: 'sort',
    get: function get() {
      return RequestParameters._sort || [];
    }

    /**
     * Default deleted items filter state
     * @returns {String} -  Deleted items filter state
     */
    ,
    set: function set(value) {
      RequestParameters._sort = RequestParameters._validateSort(value);
    }

    /**
     * Default deleted items filter state
     * @param {String} value -  Deleted items filter state
     */

  }, {
    key: 'deleted',
    get: function get() {
      return RequestParameters._deleted || _enums.DeletedState.NONE;
    }

    /**
     * Default extra request parameters
     * @returns {Object} - Extra request parameters
     */
    ,
    set: function set(value) {
      RequestParameters._deleted = RequestParameters._validateDeleted(value);
    }

    /**
     * Default extra request parameters
     * @param {Object} value - Extra request parameters
     */

  }, {
    key: 'extra',
    get: function get() {
      return RequestParameters._extra || {};
    },
    set: function set(value) {
      RequestParameters._extra = RequestParameters._validateExtra(value);
    }
  }]);
  return RequestParameters;
}(_events.EventEmitter);

exports.default = RequestParameters;

/***/ }),
/* 136 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(26);

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = __webpack_require__(115);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = __webpack_require__(138);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(141);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _case = __webpack_require__(85);

var _events = __webpack_require__(136);

var _Maps4News = __webpack_require__(97);

var _Maps4News2 = _interopRequireDefault(_Maps4News);

var _RequestParameters = __webpack_require__(135);

var _RequestParameters2 = _interopRequireDefault(_RequestParameters);

var _ResourceBase = __webpack_require__(159);

var _ResourceBase2 = _interopRequireDefault(_ResourceBase);

var _reflection = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Paginated resource lister
 *
 * @fires ResourceLister#update
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2018, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var ResourceLister = function (_EventEmitter) {
  (0, _inherits3.default)(ResourceLister, _EventEmitter);

  /**
   * ResourceLister constructor
   *
   * @param {Maps4News} api - Api instance
   * @param {string} route - Resource url route
   * @param {Constructor<ResourceBase>} Resource - Resource constructor
   * @param {?RequestParameters} parameters - Request parameters
   * @param {number} [maxRows=50] - Initial max rows
   * @param {string} [key=id] - Key
   */
  function ResourceLister(api, route) {
    var Resource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _ResourceBase2.default;
    var parameters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var maxRows = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 50;
    var key = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'id';
    (0, _classCallCheck3.default)(this, ResourceLister);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ResourceLister.__proto__ || Object.getPrototypeOf(ResourceLister)).call(this));

    if (!(0, _reflection.isParentOf)(_Maps4News2.default, api)) {
      throw new TypeError('Expected api to be of type Maps4News');
    }

    _this._api = api;
    _this._Resource = Resource;
    _this._route = route || new _this.Resource(api, {}).baseUrl;
    _this._parameters = new _RequestParameters2.default(parameters || { perPage: _RequestParameters2.default.maxPerPage });
    _this._key = (0, _case.snake)(key);
    _this._waiting = false;

    _this.parameters.perPage = _RequestParameters2.default.maxPerPage;
    _this.autoUpdate = true;
    _this.maxRows = maxRows;

    _this._reset();
    return _this;
  }

  /**
   * Get if there are more resources to fetch. It indicates if the maxRows can be increased.
   * @returns {boolean} - if more rows are available
   */


  (0, _createClass3.default)(ResourceLister, [{
    key: '_reset',


    /**
     * Reset the instance
     *
     * @returns {void}
     * @private
     */
    value: function _reset() {
      this._parameterToken = this.parameters.token();

      this._realData = [];
      this._data = [];
      this._keys = [];

      delete this._availableRows;
    }

    /**
     * Update the server data
     *
     * @returns {Promise<void>} - Resolves when the data has been updated
     * @async
     */

  }, {
    key: 'update',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.waiting) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:

                this._waiting = true;

                _context.prev = 3;

                if (this._parameterToken !== this.parameters.token()) {
                  this._reset();
                }

                if (!(this._realData.length < this.maxRows)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 8;
                return this._fetchMore();

              case 8:

                if (this.data.length !== this.maxRows) {
                  this._data = this._realData.slice(0, this.maxRows);
                }

              case 9:
                _context.prev = 9;

                this._waiting = false;
                return _context.finish(9);

              case 12:

                /**
                 * Update event.
                 * Called when the ResourceLister has updated
                 *
                 * @event RequestLister#update
                 */
                this.emit('update');

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[3,, 9, 12]]);
      }));

      function update() {
        return _ref.apply(this, arguments);
      }

      return update;
    }()

    /**
     * Fetch more data from the server
     * @returns {Promise<void>} - Resolves when _availableRows has been updated
     * @private
     */

  }, {
    key: '_fetchMore',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _ref3,
            _this2 = this;

        var startPage, endPage, glue, promises, page, parameters, url, promise, responses, data;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                startPage = 1 + Math.floor(this.rowCount / this.parameters.perPage);
                endPage = Math.ceil(this.maxRows / this.parameters.perPage);
                glue = this.route.includes('?') ? '&' : '?';
                promises = [];


                for (page = startPage; page <= endPage; page++) {
                  parameters = this.parameters.copy();


                  parameters.page = page;

                  url = this.route + glue + parameters.encode();
                  promise = this.api.request(url, 'GET', {}, {}, true);


                  promises.push(promise);
                }

                // Wait for responses and flatten data
                _context2.next = 7;
                return Promise.all(promises);

              case 7:
                responses = _context2.sent;
                data = (_ref3 = []).concat.apply(_ref3, (0, _toConsumableArray3.default)(responses.map(function (x) {
                  return x.data;
                })));


                this._availableRows = Number(responses[0].response.headers.get('X-Paginate-Total')) || 0;

                data.forEach(function (row) {
                  return _this2.push(row, false);
                });

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _fetchMore() {
        return _ref2.apply(this, arguments);
      }

      return _fetchMore;
    }()

    /**
     * Returns the iterable
     * @returns {Iterator} - iterator
     */

  }, {
    key: Symbol.iterator,
    value: function value() {
      return this.data[Symbol.iterator]();
    }

    /**
     * Push a row to the data collection
     *
     * This will append the row or update an existing row based on the key. If autoMaxRows is set to true and maxRows only needs to be increased by one for the new resource to show up it will
     * @param {ResourceLister.Resource} row - resource
     * @param {boolean} autoMaxRows - Increase maxRows if needed
     * @returns {void}
     */

  }, {
    key: 'push',
    value: function push(row) {
      var _this3 = this;

      var autoMaxRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!(0, _reflection.isParentOf)(this.Resource, row)) {
        row = new this.Resource(this.api, row);
      }

      var index = this._keys.findIndex(function (i) {
        return i === row[_this3._key];
      });

      if (index >= 0) {
        this._realData[index] = row;

        if (typeof this._data[index] !== 'undefined') {
          this._data[index] = row;
        }
      } else {
        this._realData.push(row);

        this._keys.push(row[this._key]);

        if (autoMaxRows && this.maxRows + 1 === this._realData.length) {
          this.maxRows++;

          this._data.push(row);
        }
      }
    }
  }, {
    key: 'hasMore',
    get: function get() {
      return typeof this.availableRows === 'undefined' || this.availableRows > this.maxRows;
    }

    /**
     * Get if the instance is waiting for data
     * @returns {boolean} - waiting for data
     */

  }, {
    key: 'waiting',
    get: function get() {
      return this._waiting;
    }

    /**
     * Get the request parameters
     * @returns {RequestParameters} - parameters
     */

  }, {
    key: 'parameters',
    get: function get() {
      return this._parameters;
    }

    /**
     * Set the request parameters
     *
     * If you set {@link ResourceLister#autoUpdate} to true then {@link ResourceLister#update}
     * will automatically be called when the parameters are updated.
     * @see ResourceLister#autoUpdate
     * @param {RequestParameters} object - parameters
     */
    ,
    set: function set(object) {
      this.parameters.apply(object);
    }

    /**
     * Resource constructor accessor, used for building the resource instance
     * @returns {Constructor<ResourceBase>} - resource constructor
     */

  }, {
    key: 'Resource',
    get: function get() {
      return this._Resource;
    }

    /**
     * Get the route (url)
     * @returns {string} - route
     */

  }, {
    key: 'route',
    get: function get() {
      return this._route;
    }

    /**
     * Get the data
     * @returns {Array<ResourceLister.Resource>} - data
     */

  }, {
    key: 'data',
    get: function get() {
      return this._data;
    }

    /**
     * Get the api instance
     * @returns {Maps4News} - api instance
     */

  }, {
    key: 'api',
    get: function get() {
      return this._api;
    }

    /**
     * Get the row count
     *
     * @see {ResourceLister.data}
     * @returns {number} - row count
     */

  }, {
    key: 'rowCount',
    get: function get() {
      return this.data.length;
    }

    /**
     * Get the maximum amount of rows allowed
     * @returns {number} - max rows
     */

  }, {
    key: 'maxRows',
    get: function get() {
      return this._maxRows;
    }

    /**
     * Set the maximum amount of rows allowed
     * @param {number} value - max rows
     */
    ,
    set: function set(value) {
      value = Number(value);

      if (Number.isNaN(value)) {
        throw new TypeError('Expected maxRows to be numeric got ' + (typeof raw === 'undefined' ? 'undefined' : (0, _typeof3.default)(raw)));
      }

      this._maxRows = value;

      if (this.autoUpdate) {
        // noinspection JSIgnoredPromiseFromCall
        this.update();
      }
    }

    /**
     * Get the number of rows the server has available
     * @returns {number} - number of rows
     */

  }, {
    key: 'availableRows',
    get: function get() {
      return this._availableRows;
    }

    /**
     * Set if {@link ResourceLister#update} should be called when {@link ResourceLister#parameters} is updated
     *
     * @see ResourceLister#update
     * @see ResourceLister#parameters
     * @param {boolean} value - auto update
     */

  }, {
    key: 'autoUpdate',
    set: function set(value) {
      value = Boolean(value);

      if (this.autoUpdate !== value) {
        this._autoUpdate = value;

        if (typeof this._boundUpdate === 'undefined') {
          this._boundUpdate = this.update.bind(this);
        }

        if (this.autoUpdate) {
          this.parameters.on('change', this._boundUpdate);
        } else {
          this.parameters.off('change', this._boundUpdate);
        }
      }
    }

    /**
     * Get if {@link ResourceLister#update} should be called when {@link ResourceLister#parameters} is updated
     *
     * @see ResourceLister#update
     * @see ResourceLister#parameters
     */
    ,
    get: function get() {
      return this._autoUpdate;
    }
  }]);
  return ResourceLister;
}(_events.EventEmitter);

exports.default = ResourceLister;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(139);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(140);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 140 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(142);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
__webpack_require__(29);
__webpack_require__(57);
__webpack_require__(144);
__webpack_require__(157);
__webpack_require__(158);
module.exports = __webpack_require__(11).Promise;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(34);
var global = __webpack_require__(10);
var ctx = __webpack_require__(12);
var classof = __webpack_require__(123);
var $export = __webpack_require__(9);
var isObject = __webpack_require__(17);
var aFunction = __webpack_require__(13);
var anInstance = __webpack_require__(145);
var forOf = __webpack_require__(146);
var speciesConstructor = __webpack_require__(147);
var task = __webpack_require__(148).set;
var microtask = __webpack_require__(150)();
var newPromiseCapabilityModule = __webpack_require__(151);
var perform = __webpack_require__(152);
var userAgent = __webpack_require__(153);
var promiseResolve = __webpack_require__(154);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(54)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(155)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(53)($Promise, PROMISE);
__webpack_require__(156)(PROMISE);
Wrapper = __webpack_require__(11)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(124)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(12);
var call = __webpack_require__(119);
var isArrayIter = __webpack_require__(120);
var anObject = __webpack_require__(16);
var toLength = __webpack_require__(46);
var getIterFn = __webpack_require__(122);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(16);
var aFunction = __webpack_require__(13);
var SPECIES = __webpack_require__(54)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(12);
var invoke = __webpack_require__(149);
var html = __webpack_require__(52);
var cel = __webpack_require__(21);
var global = __webpack_require__(10);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(44)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 149 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var macrotask = __webpack_require__(148).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(44)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(13);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var isObject = __webpack_require__(17);
var newPromiseCapability = __webpack_require__(151);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(14);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(10);
var core = __webpack_require__(11);
var dP = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(19);
var SPECIES = __webpack_require__(54)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(9);
var core = __webpack_require__(11);
var global = __webpack_require__(10);
var speciesConstructor = __webpack_require__(147);
var promiseResolve = __webpack_require__(154);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(151);
var perform = __webpack_require__(152);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _case = __webpack_require__(85);

var _AbstractError = __webpack_require__(96);

var _Maps4News = __webpack_require__(97);

var _Maps4News2 = _interopRequireDefault(_Maps4News);

var _SimpleResourceProxy = __webpack_require__(130);

var _SimpleResourceProxy2 = _interopRequireDefault(_SimpleResourceProxy);

var _reflection = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unique(input) {
  return input.filter(function (v, i) {
    return input.findIndex(function (vv) {
      return vv === v;
    }) === i;
  });
}

/**
 * Resource base
 * @abstract
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var ResourceBase = function () {
  /**
   * @param {Maps4News} api - Api instance
   * @param {Object<String, *>} data - Item data
   */
  function ResourceBase(api) {
    var _this = this;

    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, ResourceBase);

    if (this.constructor === ResourceBase) {
      throw new _AbstractError.AbstractClassError();
    }

    if (!(0, _reflection.isParentOf)(_Maps4News2.default, api)) {
      throw new TypeError('Expected api to be of type Maps4News');
    }

    // Normalize keys to snake_case
    // Fix data types
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.keys(data)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        var newKey = (0, _case.snake)(key);

        data[newKey] = this.constructor._guessType(newKey, data[key]);

        if (newKey !== key) {
          delete data[key];
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this._baseProperties = data || {};
    this._properties = {};
    this._api = api;

    var fields = Object.keys(this._baseProperties);

    // Apply properties
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _key = _step2.value;

        this._applyProperty(_key);
      }

      // Add deleted field if possible
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    if (fields.includes('deleted_at')) {
      Object.defineProperty(this, 'deleted', {
        enumerable: true,
        configurable: true,

        get: function get() {
          return Boolean(_this.deletedAt);
        }
      });
    }

    /* We keep track of any new fields by recording the
     * keys the object currently has. We don't need no
     * fancy-pants observers, Proxies etc.
     * snake_case only
     */
    this._knownFields = Object.keys(this).filter(function (x) {
      return x[0] !== '_';
    });
  }

  /**
   * Get api instance
   * @returns {Maps4News} - Api instance
   */


  (0, _createClass3.default)(ResourceBase, [{
    key: '_updateProperties',


    /**
     * Moves new fields to this._properties and turns them into a getter/setter
     * @returns {void}
     * @protected
     */
    value: function _updateProperties() {
      var _this2 = this;

      // Build a list of new fields
      var fields = Object.keys(this).filter(function (x) {
        return x[0] !== '_';
      }).filter(function (x) {
        return !_this2._knownFields.includes(x);
      });

      // Move the pointer from this to the properties object
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = fields[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var key = _step3.value;

          var newKey = (0, _case.snake)(key);

          this._properties[newKey] = this[key];
          delete this[key];

          this._applyProperty(newKey);
          this._knownFields.push(newKey);
        }

        // Build a list of new BaseProperty fields
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      fields = Object.keys(this._baseProperties).filter(function (x) {
        return !_this2._knownFields.includes((0, _case.camel)(x));
      });

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = fields[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _key2 = _step4.value;

          this._applyProperty(_key2);
          this._knownFields.push(_key2);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      this._knownFields = unique(this._knownFields);
    }

    /**
     * Clean up instance and commit all changes locally.
     * This means that any changed fields will be marked
     * as unchanged whilst  keeping their new values. The
     * changes will not be saved.
     * @returns {void}
     */

  }, {
    key: 'sanitize',
    value: function sanitize() {
      this._updateProperties();
      Object.assign(this._baseProperties, this._properties);
      this._properties = {};
    }

    /**
     * Resets model instance to it's original state
     * @param {Array<string>|string|null} [fields=null] - Fields to reset, defaults to all fields
     * @returns {void}
     */

  }, {
    key: 'reset',
    value: function reset() {
      var _this3 = this;

      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this._updateProperties();

      if (typeof fields === 'string') {
        this.reset([fields]);
      } else if (fields === null) {
        this._properties = {}; // Delete all
      } else if (Array.isArray(fields)) {
        fields.map(String).map(_case.snake).forEach(function (field) {
          return delete _this3._properties[field];
        });
      }
    }

    /**
     * Clone the object
     * @returns {ResourceBase} - Exact clone of the object
     */

  }, {
    key: 'clone',
    value: function clone() {
      this._updateProperties();

      var out = new this.constructor(this.api, this._baseProperties);

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = Object.keys(this._properties)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var key = _step5.value;

          out[key] = this._properties[key];
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return out;
    }

    /**
     * Refresh the resource by requesting it from the server again
     * @param {Boolean} updateSelf - Update the current instance
     * @returns {Promise} - Resolves with {@link ResourceBase} instance and rejects with {@link ApiError}
     */

  }, {
    key: 'refresh',
    value: function refresh() {
      var _this4 = this;

      var updateSelf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return this._api.request(this.url).then(function (data) {
        if (updateSelf) {
          _this4._properties = {};
          _this4._baseProperties = data;

          _this4._updateProperties();
        }

        return new _this4.constructor(_this4._api, data);
      });
    }

    /**
     * Create proxy for property
     * @param {string} key - property key
     * @returns {void}
     * @private
     */

  }, {
    key: '_applyProperty',
    value: function _applyProperty(key) {
      var _this5 = this;

      var desc = {
        enumerable: true,
        configurable: true,

        get: function get() {
          if (_this5._properties.hasOwnProperty(key)) {
            return _this5._properties[key];
          }

          return _this5._baseProperties[key];
        }
      };

      if (!this._protectedFields.includes(key) && !this.constructor.readonly) {
        desc.set = function (val) {
          _this5._properties[key] = ResourceBase._guessType(key, val);
          delete _this5._url; // Clears url cache
        };
      }

      var newKey = (0, _case.camel)(key);

      Object.defineProperty(this, newKey, desc);
    }

    /**
     * Guess type based on property name
     * @param {string} name - Field name
     * @param {*} value - Field Value
     * @private
     * @returns {*} - Original or converted value
     */

  }, {
    key: 'toString',


    /**
     * String representation of the resource, similar to Python's __repr__
     * @returns {string} - Resource name and id
     */
    value: function toString() {
      return this.constructor.name + '(' + this[this.resourceUrlKey] + ')';
    }

    /**
     * Transform instance to object
     * @param {boolean} [camelCaseKeys=false] - camelCase object keys
     * @returns {{}} - object
     */

  }, {
    key: 'toObject',
    value: function toObject() {
      var camelCaseKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this._updateProperties();

      var out = Object.assign({}, this._baseProperties, this._properties);

      if (camelCaseKeys) {
        for (var key in Object.keys(out)) {
          var ccKey = (0, _case.camel)(key);

          if (key !== ccKey) {
            out[ccKey] = out[key];

            delete out[key];
          }
        }
      }

      return out;
    }

    /**
     * Macro for resource listing
     * @param {ResourceBase} Target - Target object
     * @param {?String} url - Target url, if null it will guess
     * @param {object} seedData - Internal use, used for seeding SimpleResourceProxy::new
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     * @protected
     */

  }, {
    key: '_proxyResourceList',
    value: function _proxyResourceList(Target) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var seedData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!url) {
        var resource = new Target(this.api).resourceName.replace(/s+$/, '');

        url = this.url + '/' + resource + 's';
      }

      return new _SimpleResourceProxy2.default(this.api, Target, url, seedData);
    }
  }, {
    key: 'api',
    get: function get() {
      return this._api;
    }

    /**
     * Resource path template
     * @returns {String} - Path template
     * @todo move to constructor
     */

  }, {
    key: 'resourcePath',
    get: function get() {
      return '/' + this.resourceName + '/{id}';
    }

    /**
     * Resource name
     * @returns {String} - Resource name
     * @todo move to constructor
     * @abstract
     */

  }, {
    key: 'resourceName',
    get: function get() {
      throw new _AbstractError.AbstractError();
    }

    /**
     * Returns the url key of the resource
     * @returns {String} - Resource key
     */

  }, {
    key: '_protectedFields',


    /**
     * Protected read-only fields
     * @returns {Array<string>} - Array containing the protected fields
     * @todo move to constructor
     * @protected
     */
    get: function get() {
      return ['id', 'created_at', 'updated_at', 'deleted_at'];
    }

    /**
     * Returns if the resource is readonly
     * @returns {boolean} - readonly
     */

  }, {
    key: 'ownable',


    /**
     * If the resource can be owned by an organisation
     * @returns {boolean} - Can be owned by an organisation
     */
    get: function get() {
      return false;
    }

    /**
     * Auto generated resource url
     * @returns {string} - Resource url
     */

  }, {
    key: 'url',
    get: function get() {
      var _this6 = this;

      if (!this._url) {
        var url = this._api.host + '/' + this._api.version + this.resourcePath;

        // Find and replace any keys
        url = url.replace(/{(\w+)}/g, function (match, key) {
          return _this6[(0, _case.camel)(key)];
        });

        this._url = url;
      }

      return this._url;
    }

    /**
     * Auto generated Resource base url
     * @returns {string} - Resource base url
     */

  }, {
    key: 'baseUrl',
    get: function get() {
      var basePath = this.resourcePath.match(/^(\/[^{]+\b)/)[1];

      return this._api.host + '/' + this._api.version + basePath;
    }

    /**
     * List fields that contain object data
     * @returns {Array<String>} - A list of fields
     */

  }, {
    key: 'fieldNames',
    get: function get() {
      return Object.keys(this._baseProperties).map(_case.camel);
    }
  }], [{
    key: '_guessType',
    value: function _guessType(name, value) {
      var regexp = /(?:^|_)([^_$]+)$/g;
      var match = regexp.exec(name);
      var idMacros = ['last', 'me', 'mine'];

      if (match === null || typeof value !== 'string') {
        return value;
      }

      switch (match[1]) {
        case 'end':
        case 'start':
        case 'at':
          return new Date(value.replace(' ', 'T'));
        case 'id':
          // Test if the value is in fact a macro
          if (idMacros.includes(String(value).toLowerCase())) {
            return value;
          }

          return Number(value);
        default:
          return value;
      }
    }
  }, {
    key: 'resourceUrlKey',
    get: function get() {
      return 'id';
    }
  }, {
    key: 'readonly',
    get: function get() {
      return false;
    }
  }]);
  return ResourceBase;
}();

exports.default = ResourceBase;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = exports.User = exports.Tag = exports.SvgSet = exports.Svg = exports.Role = exports.PlaceName = exports.Permission = exports.Organisation = exports.Notification = exports.MapstyleSet = exports.Mapstyle = exports.Layer = exports.Language = exports.JobType = exports.JobShare = exports.JobRevision = exports.JobResult = exports.JobMonitorRow = exports.Job = exports.InsetMap = exports.Highlight = exports.FontFamily = exports.Font = exports.Feature = exports.Faq = exports.Domain = exports.DimensionSet = exports.Dimension = exports.Contract = exports.Color = exports.Choropleth = undefined;

var _Choropleth2 = __webpack_require__(161);

var _Choropleth3 = _interopRequireDefault(_Choropleth2);

var _Color2 = __webpack_require__(162);

var _Color3 = _interopRequireDefault(_Color2);

var _Contract2 = __webpack_require__(168);

var _Contract3 = _interopRequireDefault(_Contract2);

var _Dimension2 = __webpack_require__(171);

var _Dimension3 = _interopRequireDefault(_Dimension2);

var _DimensionSet2 = __webpack_require__(169);

var _DimensionSet3 = _interopRequireDefault(_DimensionSet2);

var _Domain2 = __webpack_require__(173);

var _Domain3 = _interopRequireDefault(_Domain2);

var _Faq2 = __webpack_require__(195);

var _Faq3 = _interopRequireDefault(_Faq2);

var _Feature2 = __webpack_require__(174);

var _Feature3 = _interopRequireDefault(_Feature2);

var _Font2 = __webpack_require__(176);

var _Font3 = _interopRequireDefault(_Font2);

var _FontFamily2 = __webpack_require__(175);

var _FontFamily3 = _interopRequireDefault(_FontFamily2);

var _Highlight2 = __webpack_require__(196);

var _Highlight3 = _interopRequireDefault(_Highlight2);

var _InsetMap2 = __webpack_require__(197);

var _InsetMap3 = _interopRequireDefault(_InsetMap2);

var _Job2 = __webpack_require__(188);

var _Job3 = _interopRequireDefault(_Job2);

var _JobMonitorRow2 = __webpack_require__(198);

var _JobMonitorRow3 = _interopRequireDefault(_JobMonitorRow2);

var _JobResult2 = __webpack_require__(189);

var _JobResult3 = _interopRequireDefault(_JobResult2);

var _JobRevision2 = __webpack_require__(190);

var _JobRevision3 = _interopRequireDefault(_JobRevision2);

var _JobShare2 = __webpack_require__(177);

var _JobShare3 = _interopRequireDefault(_JobShare2);

var _JobType2 = __webpack_require__(178);

var _JobType3 = _interopRequireDefault(_JobType2);

var _Language2 = __webpack_require__(191);

var _Language3 = _interopRequireDefault(_Language2);

var _Layer2 = __webpack_require__(179);

var _Layer3 = _interopRequireDefault(_Layer2);

var _Mapstyle2 = __webpack_require__(183);

var _Mapstyle3 = _interopRequireDefault(_Mapstyle2);

var _MapstyleSet2 = __webpack_require__(182);

var _MapstyleSet3 = _interopRequireDefault(_MapstyleSet2);

var _Notification2 = __webpack_require__(192);

var _Notification3 = _interopRequireDefault(_Notification2);

var _Organisation2 = __webpack_require__(166);

var _Organisation3 = _interopRequireDefault(_Organisation2);

var _Permission2 = __webpack_require__(193);

var _Permission3 = _interopRequireDefault(_Permission2);

var _PlaceName2 = __webpack_require__(207);

var _PlaceName3 = _interopRequireDefault(_PlaceName2);

var _Role2 = __webpack_require__(194);

var _Role3 = _interopRequireDefault(_Role2);

var _Svg2 = __webpack_require__(185);

var _Svg3 = _interopRequireDefault(_Svg2);

var _SvgSet2 = __webpack_require__(184);

var _SvgSet3 = _interopRequireDefault(_SvgSet2);

var _Tag2 = __webpack_require__(186);

var _Tag3 = _interopRequireDefault(_Tag2);

var _User2 = __webpack_require__(187);

var _User3 = _interopRequireDefault(_User2);

var _CrudBase = __webpack_require__(163);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _CrudSetBase = __webpack_require__(170);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _ResourceBase = __webpack_require__(159);

var _ResourceBase2 = _interopRequireDefault(_ResourceBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Choropleth = _Choropleth3.default; /*
                                            * BSD 3-Clause License
                                            *
                                            * Copyright (c) 2017, MapCreator
                                            * All rights reserved.
                                            *
                                            * Redistribution and use in source and binary forms, with or without
                                            * modification, are permitted provided that the following conditions are met:
                                            *
                                            *  Redistributions of source code must retain the above copyright notice, this
                                            *   list of conditions and the following disclaimer.
                                            *
                                            *  Redistributions in binary form must reproduce the above copyright notice,
                                            *   this list of conditions and the following disclaimer in the documentation
                                            *   and/or other materials provided with the distribution.
                                            *
                                            *  Neither the name of the copyright holder nor the names of its
                                            *   contributors may be used to endorse or promote products derived from
                                            *   this software without specific prior written permission.
                                            *
                                            * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                                            * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                                            * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                                            * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                                            * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                                            * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                                            * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                                            * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                                            * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                                            * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                            */

exports.Color = _Color3.default;
exports.Contract = _Contract3.default;
exports.Dimension = _Dimension3.default;
exports.DimensionSet = _DimensionSet3.default;
exports.Domain = _Domain3.default;
exports.Faq = _Faq3.default;
exports.Feature = _Feature3.default;
exports.Font = _Font3.default;
exports.FontFamily = _FontFamily3.default;
exports.Highlight = _Highlight3.default;
exports.InsetMap = _InsetMap3.default;
exports.Job = _Job3.default;
exports.JobMonitorRow = _JobMonitorRow3.default;
exports.JobResult = _JobResult3.default;
exports.JobRevision = _JobRevision3.default;
exports.JobShare = _JobShare3.default;
exports.JobType = _JobType3.default;
exports.Language = _Language3.default;
exports.Layer = _Layer3.default;
exports.Mapstyle = _Mapstyle3.default;
exports.MapstyleSet = _MapstyleSet3.default;
exports.Notification = _Notification3.default;
exports.Organisation = _Organisation3.default;
exports.Permission = _Permission3.default;
exports.PlaceName = _PlaceName3.default;
exports.Role = _Role3.default;
exports.Svg = _Svg3.default;
exports.SvgSet = _SvgSet3.default;
exports.Tag = _Tag3.default;
exports.User = _User3.default;


/**
 * @private
 */
var base = exports.base = {
  CrudBase: _CrudBase2.default, CrudSetBase: _CrudSetBase2.default, ResourceBase: _ResourceBase2.default
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ResourceBase2 = __webpack_require__(159);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Choropleth resource
 */
var Choropleth = function (_ResourceBase) {
  (0, _inherits3.default)(Choropleth, _ResourceBase);

  function Choropleth() {
    (0, _classCallCheck3.default)(this, Choropleth);
    return (0, _possibleConstructorReturn3.default)(this, (Choropleth.__proto__ || Object.getPrototypeOf(Choropleth)).apply(this, arguments));
  }

  (0, _createClass3.default)(Choropleth, [{
    key: 'resourceName',
    get: function get() {
      return 'choropleths';
    }
  }]);
  return Choropleth;
}(_ResourceBase3.default); /*
                            * BSD 3-Clause License
                            *
                            * Copyright (c) 2017, MapCreator
                            * All rights reserved.
                            *
                            * Redistribution and use in source and binary forms, with or without
                            * modification, are permitted provided that the following conditions are met:
                            *
                            *  Redistributions of source code must retain the above copyright notice, this
                            *   list of conditions and the following disclaimer.
                            *
                            *  Redistributions in binary form must reproduce the above copyright notice,
                            *   this list of conditions and the following disclaimer in the documentation
                            *   and/or other materials provided with the distribution.
                            *
                            *  Neither the name of the copyright holder nor the names of its
                            *   contributors may be used to endorse or promote products derived from
                            *   this software without specific prior written permission.
                            *
                            * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                            * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                            * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                            * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                            * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                            * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                            * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                            * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                            * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                            * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                            */

exports.default = Choropleth;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase = __webpack_require__(163);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _OwnableResource = __webpack_require__(164);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Color resource
 * @extends {CrudBase}
 * @extends {OwnableResource}
 */
var Color = function (_mix) {
  (0, _inherits3.default)(Color, _mix);

  function Color() {
    (0, _classCallCheck3.default)(this, Color);
    return (0, _possibleConstructorReturn3.default)(this, (Color.__proto__ || Object.getPrototypeOf(Color)).apply(this, arguments));
  }

  (0, _createClass3.default)(Color, [{
    key: 'resourceName',
    get: function get() {
      return 'colors';
    }
  }]);
  return Color;
}((0, _reflection.mix)(_CrudBase2.default, _OwnableResource2.default)); /*
                                                                         * BSD 3-Clause License
                                                                         *
                                                                         * Copyright (c) 2017, MapCreator
                                                                         * All rights reserved.
                                                                         *
                                                                         * Redistribution and use in source and binary forms, with or without
                                                                         * modification, are permitted provided that the following conditions are met:
                                                                         *
                                                                         *  Redistributions of source code must retain the above copyright notice, this
                                                                         *   list of conditions and the following disclaimer.
                                                                         *
                                                                         *  Redistributions in binary form must reproduce the above copyright notice,
                                                                         *   this list of conditions and the following disclaimer in the documentation
                                                                         *   and/or other materials provided with the distribution.
                                                                         *
                                                                         *  Neither the name of the copyright holder nor the names of its
                                                                         *   contributors may be used to endorse or promote products derived from
                                                                         *   this software without specific prior written permission.
                                                                         *
                                                                         * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                                                                         * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                                                                         * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                                                                         * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                                                                         * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                                                                         * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                                                                         * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                                                                         * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                                                                         * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                                                                         * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                                                         */

exports.default = Color;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _AbstractError = __webpack_require__(96);

var _ResourceBase2 = __webpack_require__(159);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base of all resource items that support Crud operations
 * @abstract
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var CrudBase = function (_ResourceBase) {
  (0, _inherits3.default)(CrudBase, _ResourceBase);

  /**
   * @param {Maps4News} api - Api instance
   * @param {Object<String, *>} data - Item data
   */
  function CrudBase(api) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, CrudBase);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CrudBase.__proto__ || Object.getPrototypeOf(CrudBase)).call(this, api, data));

    if (_this.constructor === CrudBase) {
      throw new _AbstractError.AbstractClassError();
    }
    return _this;
  }

  /**
   * Build data for create operation
   * @returns {Object<String, *>} - Create data
   * @protected
   */


  (0, _createClass3.default)(CrudBase, [{
    key: '_buildCreateData',
    value: function _buildCreateData() {
      this._updateProperties();

      var out = {};
      var keys = [].concat(Object.keys(this._properties), Object.keys(this._baseProperties)).filter(function (item, pos, self) {
        return self.indexOf(item) === pos;
      });

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          out[key] = this._properties[key] || this._baseProperties[key];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      delete out.id;
      return out;
    }

    /**
     * Save item. This will create a new item if `id` is unset
     * @returns {Promise} - Resolves with {@link CrudBase} instance and rejects with {@link ApiError}
     * .catch(reject)
     * .then(data => {
     *        this._properties = {};
     *        this._baseProperties = data;
     *
     *        this._updateProperties();
     *        resolve(this);
     *      });
     */

  }, {
    key: 'save',
    value: function save() {
      return !this.id ? this._create() : this._update();
    }

    /**
     * Store new item
     * @returns {Promise} - Resolves with {@link CrudBase} instance and rejects with {@link ApiError}
     * @private
     */

  }, {
    key: '_create',
    value: function _create() {
      var _this2 = this;

      return this.api.request(this.baseUrl, 'POST', this._buildCreateData()).then(function (data) {
        _this2._properties = {};
        _this2._baseProperties = data;

        _this2._updateProperties();
        return _this2;
      });
    }

    /**
     * Update existing item
     * @returns {Promise} - Resolves with {@link CrudBase} instance and rejects with {@link ApiError}
     * @private
     */

  }, {
    key: '_update',
    value: function _update() {
      var _this3 = this;

      this._updateProperties();

      // We'll just fake it, no need to bother the server
      // with an empty request.
      if (Object.keys(this._properties).length === 0) {
        return new Promise(function (resolve) {
          return resolve(_this3);
        });
      }

      return this.api.request(this.url, 'PATCH', this._properties).then(function () {
        if (_this3.api.defaults.autoUpdateSharedCache) {
          _this3.api.cache.update(_this3);
        }

        return _this3;
      });
    }

    /**
     * Delete item
     * @param {Boolean} [updateSelf=true] - Update current instance
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with {@link ApiError}
     */

  }, {
    key: 'delete',
    value: function _delete() {
      var _this4 = this;

      var updateSelf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return this.api.request(this.url, 'DELETE').then(function (data) {
        if (updateSelf) {
          _this4._baseProperties['deleted_at'] = new Date();
        }

        return data;
      });
    }

    /**
     * Restore item
     * @param {Boolean} [updateSelf=true] - Update current instance
     * @returns {Promise} - Resolves with {@link CrudBase} instance and rejects with {@link ApiError}
     */

  }, {
    key: 'restore',
    value: function restore() {
      var _this5 = this;

      var updateSelf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return this.api.request(this.url, 'PUT').then(function (data) {
        var instance = new _this5.constructor(_this5.api, data);

        if (updateSelf) {
          _this5._properties = {};
          _this5._baseProperties = data;

          _this5._updateProperties();
        }

        return instance;
      });
    }
  }]);
  return CrudBase;
}(_ResourceBase3.default);

exports.default = CrudBase;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OrganisationProxy = __webpack_require__(165);

var _OrganisationProxy2 = _interopRequireDefault(_OrganisationProxy);

var _Trait2 = __webpack_require__(87);

var _Trait3 = _interopRequireDefault(_Trait2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Provides a {@link ResourceBase} with functions for dealing with being ownable by an organisation
 * @mixin
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var OwnableResource = function (_Trait) {
  (0, _inherits3.default)(OwnableResource, _Trait);

  function OwnableResource() {
    (0, _classCallCheck3.default)(this, OwnableResource);
    return (0, _possibleConstructorReturn3.default)(this, (OwnableResource.__proto__ || Object.getPrototypeOf(OwnableResource)).apply(this, arguments));
  }

  (0, _createClass3.default)(OwnableResource, [{
    key: 'organisations',

    /**
     * Get the list of associated organisations
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */
    get: function get() {
      return new _OrganisationProxy2.default(this.api, this);
    }

    /**
     * If the resource can be owned by an organisation
     * @returns {boolean} - Can be owned by an organisation
     */

  }, {
    key: 'ownable',
    get: function get() {
      return true;
    }
  }]);
  return OwnableResource;
}(_Trait3.default);

exports.default = OwnableResource;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reflection = __webpack_require__(86);

var _SimpleResourceProxy2 = __webpack_require__(130);

var _SimpleResourceProxy3 = _interopRequireDefault(_SimpleResourceProxy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var OrganisationProxy = function (_SimpleResourceProxy) {
  (0, _inherits3.default)(OrganisationProxy, _SimpleResourceProxy);

  /**
   * @param {Maps4News} api - Instance of the api
   * @param {ResourceBase} parent - parent instance
   */
  function OrganisationProxy(api, parent) {
    (0, _classCallCheck3.default)(this, OrganisationProxy);

    // Fixes dependency issue
    var Organisation = __webpack_require__(166).default;

    var _this = (0, _possibleConstructorReturn3.default)(this, (OrganisationProxy.__proto__ || Object.getPrototypeOf(OrganisationProxy)).call(this, api, Organisation, parent.url + '/organisations', {}));

    _this._parent = parent;
    return _this;
  }

  /**
   * Returns parent instance
   * @returns {ResourceBase} - parent instance
   */


  (0, _createClass3.default)(OrganisationProxy, [{
    key: 'sync',


    /**
     * Sync organisations to the parent resource
     * The organisations attached to the target resource will be replaced with the organisations provided in the request.
     * @param {Array<Organisation|number>} organisations - List of items to sync
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */
    value: function sync(organisations) {
      return this._modifyLink(organisations, 'PATCH', this.Target);
    }

    /**
     * Attach organisations to the parent resource
     * The provided organisations will be attached to the resource if they're not already attached
     * @param {Array<Organisation|number>} organisations - List of items to attach
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: 'attach',
    value: function attach(organisations) {
      return this._modifyLink(organisations, 'POST', this.Target);
    }

    /**
     * Detach organisations from the parent resource
     * The provided organisations will be detached from the resource
     * @param {Array<Organisation|number>} organisations - List of items to detach
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: 'detach',
    value: function detach(organisations) {
      return this._modifyLink(organisations, 'DELETE', this.Target);
    }

    /**
     * Attach all organisations to the parent resource
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: 'attachAll',
    value: function attachAll() {
      var url = this.baseUrl + '/all';

      return this.api.request(url, 'POST');
    }

    /**
     * Detach all organisations from the parent resource
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: 'detachAll',
    value: function detachAll() {
      var url = this.baseUrl + '/all';

      return this.api.request(url, 'DELETE');
    }

    /**
     * Sync, attach or unlink resources
     * @param {Array<Organisation>|Array<Number>} items - List of items to sync or attach
     * @param {String} method - Http method to use
     * @param {ResourceBase} Type - Resource type
     * @param {?String} path - Optional appended resource path, will guess if null
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     * @protected
     */

  }, {
    key: '_modifyLink',
    value: function _modifyLink(items, method, Type) {
      var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      if (!path) {
        var resource = new Type(this.api).resourceName.replace(/s+$/, '');

        path = resource + 's';
      }

      var filter = function filter(x) {
        return !(0, _reflection.isParentOf)(Type, x) && !(0, _reflection.isParentOf)(Number, x);
      };
      var isValid = items.filter(filter).length === 0;

      if (!isValid) {
        throw new TypeError('Array must contain either Numbers (resource id) or "' + Type.name + '".');
      }

      var keys = items.map(function (x) {
        return typeof x === 'number' ? x : x.id;
      }).map(Number);

      return this.api.request(this.parent.url + '/' + path, method, { keys: keys });
    }
  }, {
    key: 'parent',
    get: function get() {
      return this._parent;
    }
  }]);
  return OrganisationProxy;
}(_SimpleResourceProxy3.default);

exports.default = OrganisationProxy;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OwnedResourceProxy = __webpack_require__(167);

var _OwnedResourceProxy2 = _interopRequireDefault(_OwnedResourceProxy);

var _CrudBase2 = __webpack_require__(163);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _Color = __webpack_require__(162);

var _Color2 = _interopRequireDefault(_Color);

var _Contract = __webpack_require__(168);

var _Contract2 = _interopRequireDefault(_Contract);

var _DimensionSet = __webpack_require__(169);

var _DimensionSet2 = _interopRequireDefault(_DimensionSet);

var _Domain = __webpack_require__(173);

var _Domain2 = _interopRequireDefault(_Domain);

var _Feature = __webpack_require__(174);

var _Feature2 = _interopRequireDefault(_Feature);

var _FontFamily = __webpack_require__(175);

var _FontFamily2 = _interopRequireDefault(_FontFamily);

var _JobShare = __webpack_require__(177);

var _JobShare2 = _interopRequireDefault(_JobShare);

var _JobType = __webpack_require__(178);

var _JobType2 = _interopRequireDefault(_JobType);

var _Layer = __webpack_require__(179);

var _Layer2 = _interopRequireDefault(_Layer);

var _MapstyleSet = __webpack_require__(182);

var _MapstyleSet2 = _interopRequireDefault(_MapstyleSet);

var _SvgSet = __webpack_require__(184);

var _SvgSet2 = _interopRequireDefault(_SvgSet);

var _Tag = __webpack_require__(186);

var _Tag2 = _interopRequireDefault(_Tag);

var _User = __webpack_require__(187);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Organisation = function (_CrudBase) {
  (0, _inherits3.default)(Organisation, _CrudBase);

  function Organisation() {
    (0, _classCallCheck3.default)(this, Organisation);
    return (0, _possibleConstructorReturn3.default)(this, (Organisation.__proto__ || Object.getPrototypeOf(Organisation)).apply(this, arguments));
  }

  (0, _createClass3.default)(Organisation, [{
    key: 'getTree',


    /**
     * Get a tree representation of the organisation's relationships
     * @returns {Promise<Array<Organisation>>} - List of organisation root nodes. Organisations contain an extra property called "children"
     * @example
     * function printTree(nodes, prefix = '-') {
     *  for (const node of nodes) {
     *    console.log(`${prefix} ${node.name}`);
     *
     *    printTree(node.children, prefix + '-');
     *  }
     * }
     *
     * organisation.getTree().then(printTree)
     */
    value: function getTree() {
      var _this2 = this;

      return this._api.request(this.url + '/tree').then(function (data) {
        return data.map(function (root) {
          return _this2._parseTree(root);
        });
      });
    }
  }, {
    key: '_parseTree',
    value: function _parseTree(rawNode) {
      var _this3 = this;

      var node = new this.constructor(this._api, rawNode);

      node.children = node.children.map(function (child) {
        return _this3._parseTree(child);
      });

      return node;
    }

    /**
     * Builds OwnedResourceProxy instance
     * @param {constructor} Target - target class
     * @returns {OwnedResourceProxy} - proxy instance
     * @private
     */

  }, {
    key: '_proxyBuilder',
    value: function _proxyBuilder(Target) {
      return new _OwnedResourceProxy2.default(this.api, this, Target);
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'organisations';
    }

    // Resource listing
    /**
     * Get a proxy for font families linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'fontFamilies',
    get: function get() {
      return this._proxyBuilder(_FontFamily2.default);
    }

    /**
     * Get a proxy for dimension sets linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'dimensionSets',
    get: function get() {
      return this._proxyBuilder(_DimensionSet2.default);
    }

    /**
     * Get a proxy for mapstyle sets linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'mapstyleSets',
    get: function get() {
      return this._proxyBuilder(_MapstyleSet2.default);
    }

    /**
     * Get a proxy for svg sets linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'svgSets',
    get: function get() {
      return this._proxyBuilder(_SvgSet2.default);
    }

    /**
     * Get a proxy for colors linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'colors',
    get: function get() {
      return this._proxyBuilder(_Color2.default);
    }

    /**
     * Get a proxy for tags linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'tags',
    get: function get() {
      return this._proxyBuilder(_Tag2.default);
    }

    /**
     * Get a proxy for features linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'features',
    get: function get() {
      return this._proxyBuilder(_Feature2.default);
    }

    /**
     * Get a proxy for layers linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'layers',
    get: function get() {
      return this._proxyBuilder(_Layer2.default);
    }

    /**
     * Get a proxy for job types linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'jobTypes',
    get: function get() {
      return this._proxyBuilder(_JobType2.default);
    }

    /**
     * Get a proxy for job shares linked to the organisation
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'jobShares',
    get: function get() {
      return this._proxyResourceList(_JobShare2.default);
    }

    /**
     * Get a proxy for users linked to the organisation
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'users',
    get: function get() {
      return this._proxyResourceList(_User2.default);
    }

    /**
     * Get a proxy for contracts linked to the organisation
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'contracts',
    get: function get() {
      return this._proxyResourceList(_Contract2.default);
    }

    /**
     * Get a proxy for contracts linked to the organisation
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'domains',
    get: function get() {
      return this._proxyResourceList(_Domain2.default);
    }
  }]);
  return Organisation;
}(_CrudBase3.default); /*
                        * BSD 3-Clause License
                        *
                        * Copyright (c) 2017, MapCreator
                        * All rights reserved.
                        *
                        * Redistribution and use in source and binary forms, with or without
                        * modification, are permitted provided that the following conditions are met:
                        *
                        *  Redistributions of source code must retain the above copyright notice, this
                        *   list of conditions and the following disclaimer.
                        *
                        *  Redistributions in binary form must reproduce the above copyright notice,
                        *   this list of conditions and the following disclaimer in the documentation
                        *   and/or other materials provided with the distribution.
                        *
                        *  Neither the name of the copyright holder nor the names of its
                        *   contributors may be used to endorse or promote products derived from
                        *   this software without specific prior written permission.
                        *
                        * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                        * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                        * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                        * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                        * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                        * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                        * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                        * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                        * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                        * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                        */

exports.default = Organisation;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(26);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _SimpleResourceProxy2 = __webpack_require__(130);

var _SimpleResourceProxy3 = _interopRequireDefault(_SimpleResourceProxy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used for proxying resource => organisation
 */
var OwnedResourceProxy = function (_SimpleResourceProxy) {
  (0, _inherits3.default)(OwnedResourceProxy, _SimpleResourceProxy);

  /**
   * OwnedResourceProxy Constructor
   * @param {Maps4News} api - api instance
   * @param {ResourceBase} parent - parent instance
   * @param {constructor} Target - target constructor
   */
  function OwnedResourceProxy(api, parent, Target) {
    (0, _classCallCheck3.default)(this, OwnedResourceProxy);

    var resource = new Target(api).resourceName.replace(/s+$/, '');
    var url = parent.url + '/' + resource + 's';

    return (0, _possibleConstructorReturn3.default)(this, (OwnedResourceProxy.__proto__ || Object.getPrototypeOf(OwnedResourceProxy)).call(this, api, Target, url));
  }

  /**
   * Sync items to the organisation
   * @param {Array<ResourceBase>|Array<number>|ResourceBase|number} items - List of items to sync
   * @returns {Promise} - Resolves with an empty {@link Object} and rejects with an {@link ApiError} instance.
   * @throws {TypeError} If the provided items are not of the same type as the proxy target
   * @see http://es6-features.org/#PromiseCombination
   */


  (0, _createClass3.default)(OwnedResourceProxy, [{
    key: 'sync',
    value: function sync(items) {
      return this._modifyResourceLink(items, 'PATCH');
    }

    /**
     * Attach items to the organisation
     * @param {Array<ResourceBase>|Array<number>|ResourceBase|number} items - List of items to attach
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with an {@link ApiError} instance.
     * @throws {TypeError}If the provided items are not of the same type as the proxy target
     * @see http://es6-features.org/#PromiseCombination
     */

  }, {
    key: 'attach',
    value: function attach(items) {
      return this._modifyResourceLink(items, 'POST');
    }

    /**
     * Detach items from the organisation
     * @param {Array<ResourceBase>|Array<number>|ResourceBase|number} items - List of items to unlink
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with an {@link ApiError} instance.
     * @throws {TypeError} If the provided items are not of the same type as the proxy target
     * @see http://es6-features.org/#PromiseCombination
     */

  }, {
    key: 'detach',
    value: function detach(items) {
      return this._modifyResourceLink(items, 'DELETE');
    }

    /**
     * Attach parent resource to all organisations
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: 'attachAll',
    value: function attachAll() {
      var url = this.baseUrl + '/all';

      return this.api.request(url, 'POST');
    }

    /**
     * Detach parent resource to all organisations
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: 'detachAll',
    value: function detachAll() {
      var url = this.baseUrl + '/all';

      return this.api.request(url, 'DELETE');
    }

    /**
     * @param {Array<ResourceBase>|Array<number>|ResourceBase|number} items - List of items to sync, attach or detach
     * @param {string} method - http method
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     * @private
     */

  }, {
    key: '_modifyResourceLink',
    value: function _modifyResourceLink(items, method) {
      if (!(items instanceof Array)) {
        items = [items];
      }

      var keys = items.map(function (x) {
        return (typeof x === 'undefined' ? 'undefined' : (0, _typeof3.default)(x)) === 'object' && x.id ? x.id : x;
      }).map(Number).filter(function (x) {
        return !Number.isNaN(x);
      });

      if (!keys.length === 0) {
        throw new TypeError('Expected items to be of type Array<ResourceBase>, Array<number>, ResourceBase or number}');
      }

      return this.api.request(this.baseUrl, method, { keys: keys });
    }
  }]);
  return OwnedResourceProxy;
}(_SimpleResourceProxy3.default); /*
                                   * BSD 3-Clause License
                                   *
                                   * Copyright (c) 2017, MapCreator
                                   * All rights reserved.
                                   *
                                   * Redistribution and use in source and binary forms, with or without
                                   * modification, are permitted provided that the following conditions are met:
                                   *
                                   *  Redistributions of source code must retain the above copyright notice, this
                                   *   list of conditions and the following disclaimer.
                                   *
                                   *  Redistributions in binary form must reproduce the above copyright notice,
                                   *   this list of conditions and the following disclaimer in the documentation
                                   *   and/or other materials provided with the distribution.
                                   *
                                   *  Neither the name of the copyright holder nor the names of its
                                   *   contributors may be used to endorse or promote products derived from
                                   *   this software without specific prior written permission.
                                   *
                                   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                                   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                                   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                                   * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                                   * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                                   * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                                   * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                                   * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                                   * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                                   * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                   */

exports.default = OwnedResourceProxy;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase2 = __webpack_require__(163);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Contract resource
 */
var Contract = function (_CrudBase) {
  (0, _inherits3.default)(Contract, _CrudBase);

  function Contract() {
    (0, _classCallCheck3.default)(this, Contract);
    return (0, _possibleConstructorReturn3.default)(this, (Contract.__proto__ || Object.getPrototypeOf(Contract)).apply(this, arguments));
  }

  (0, _createClass3.default)(Contract, [{
    key: '_update',


    /**
     * @inheritDoc
     * @override
     */
    value: function _update() {
      var _this2 = this;

      this._updateProperties();

      // We'll just fake it, no need to bother the server
      // with an empty request.
      if (Object.keys(this._properties).length === 0) {
        return new Promise(function () {
          return _this2;
        });
      }

      var data = Object.assign({}, this._properties);

      if (typeof data['date_start'] === 'undefined') {
        data['date_start'] = this.dateStart;
      }

      if (typeof data['date_end'] === 'undefined') {
        data['date_end'] = this.dateEnd;
      }

      if (data['date_start'] instanceof Date) {
        data['date_start'] = this._formatDate(data['date_start']);
      }

      if (data['date_end'] instanceof Date) {
        data['date_end'] = this._formatDate(data['date_end']);
      }

      return this.api.request(this.url, 'PATCH', data).then(function () {
        if (_this2.api.defaults.autoUpdateSharedCache) {
          _this2.api.cache.update(_this2);
        }

        return _this2;
      });
    }

    /**
     * @inheritDoc
     * @override
     */

  }, {
    key: '_create',
    value: function _create() {
      var _this3 = this;

      var createData = this._buildCreateData();

      if (createData['date_start'] instanceof Date) {
        createData['date_start'] = this._formatDate(createData['date_start']);
      }

      if (createData['date_end'] instanceof Date) {
        createData['date_end'] = this._formatDate(createData['date_end']);
      }

      return this.api.request(this.baseUrl, 'POST', createData).then(function (data) {
        _this3._properties = {};
        _this3._baseProperties = data;

        _this3._updateProperties();
        return _this3;
      });
    }

    /**
     * Convert Date into server format
     * @param {Date} date - target
     * @returns {String} - formatted date
     * @private
     */

  }, {
    key: '_formatDate',
    value: function _formatDate(date) {
      var pad = function pad(num) {
        return ('00' + num).slice(-Math.max(String(num).length, 2));
      };

      var out = [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()].map(pad).join('-');

      out += ' ' + [date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()].map(pad).join(':');

      return out;
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'contracts';
    }
  }]);
  return Contract;
}(_CrudBase3.default); /*
                        * BSD 3-Clause License
                        *
                        * Copyright (c) 2017, MapCreator
                        * All rights reserved.
                        *
                        * Redistribution and use in source and binary forms, with or without
                        * modification, are permitted provided that the following conditions are met:
                        *
                        *  Redistributions of source code must retain the above copyright notice, this
                        *   list of conditions and the following disclaimer.
                        *
                        *  Redistributions in binary form must reproduce the above copyright notice,
                        *   this list of conditions and the following disclaimer in the documentation
                        *   and/or other materials provided with the distribution.
                        *
                        *  Neither the name of the copyright holder nor the names of its
                        *   contributors may be used to endorse or promote products derived from
                        *   this software without specific prior written permission.
                        *
                        * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                        * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                        * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                        * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                        * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                        * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                        * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                        * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                        * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                        * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                        */

exports.default = Contract;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudSetBase = __webpack_require__(170);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _Dimension = __webpack_require__(171);

var _Dimension2 = _interopRequireDefault(_Dimension);

var _OwnableResource = __webpack_require__(164);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Dimension sets
 * @extends {CrudSetBase}
 * @extends {OwnableResource}
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var DimensionSet = function (_mix) {
  (0, _inherits3.default)(DimensionSet, _mix);

  function DimensionSet() {
    (0, _classCallCheck3.default)(this, DimensionSet);
    return (0, _possibleConstructorReturn3.default)(this, (DimensionSet.__proto__ || Object.getPrototypeOf(DimensionSet)).apply(this, arguments));
  }

  (0, _createClass3.default)(DimensionSet, [{
    key: 'resourcePath',
    get: function get() {
      return '/dimensions/sets/{id}';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'dimension-sets';
    }
  }, {
    key: '_Child',
    get: function get() {
      return _Dimension2.default;
    }
  }]);
  return DimensionSet;
}((0, _reflection.mix)(_CrudSetBase2.default, _OwnableResource2.default));

exports.default = DimensionSet;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _AbstractError = __webpack_require__(96);

var _CrudBase2 = __webpack_require__(163);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _case = __webpack_require__(85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Crud base for resource sets
 * @abstract
 */
var CrudSetBase = function (_CrudBase) {
  (0, _inherits3.default)(CrudSetBase, _CrudBase);

  function CrudSetBase() {
    (0, _classCallCheck3.default)(this, CrudSetBase);
    return (0, _possibleConstructorReturn3.default)(this, (CrudSetBase.__proto__ || Object.getPrototypeOf(CrudSetBase)).apply(this, arguments));
  }

  (0, _createClass3.default)(CrudSetBase, [{
    key: 'items',


    /**
     * Get items associated with the set
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */
    get: function get() {
      var url = this.url + '/items';

      var data = {};

      data[this.foreignKeyName] = this.id;

      return this._proxyResourceList(this._Child, url, data);
    }

    /**
     * Child constructor
     * @returns {ResourceBase} - Child constructor
     * @constructor
     * @abstract
     * @protected
     */

  }, {
    key: '_Child',
    get: function get() {
      throw new _AbstractError.AbstractError();
    }

    /**
     * Get the foreign key name
     * @returns {string} - Foreign key name
     * @example
     * api.fontFamilies.select(1).foreignKeyName === 'fontFamilyId'
     */

  }, {
    key: 'foreignKeyName',
    get: function get() {
      if (!this._fk) {
        var key = this.constructor.name; // ex: FontFamily

        key = (0, _case.camel)(key); // ex: fontFamily

        this._fk = key + 'Id';
      }

      return this._fk;
    }
  }]);
  return CrudSetBase;
}(_CrudBase3.default); /*
                        * BSD 3-Clause License
                        *
                        * Copyright (c) 2017, MapCreator
                        * All rights reserved.
                        *
                        * Redistribution and use in source and binary forms, with or without
                        * modification, are permitted provided that the following conditions are met:
                        *
                        *  Redistributions of source code must retain the above copyright notice, this
                        *   list of conditions and the following disclaimer.
                        *
                        *  Redistributions in binary form must reproduce the above copyright notice,
                        *   this list of conditions and the following disclaimer in the documentation
                        *   and/or other materials provided with the distribution.
                        *
                        *  Neither the name of the copyright holder nor the names of its
                        *   contributors may be used to endorse or promote products derived from
                        *   this software without specific prior written permission.
                        *
                        * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                        * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                        * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                        * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                        * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                        * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                        * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                        * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                        * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                        * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                        */

exports.default = CrudSetBase;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudSetItemBase2 = __webpack_require__(172);

var _CrudSetItemBase3 = _interopRequireDefault(_CrudSetItemBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Dimension resource
 */
var Dimension = function (_CrudSetItemBase) {
  (0, _inherits3.default)(Dimension, _CrudSetItemBase);

  function Dimension() {
    (0, _classCallCheck3.default)(this, Dimension);
    return (0, _possibleConstructorReturn3.default)(this, (Dimension.__proto__ || Object.getPrototypeOf(Dimension)).apply(this, arguments));
  }

  (0, _createClass3.default)(Dimension, [{
    key: 'resourceName',
    get: function get() {
      return 'dimensions';
    }
  }]);
  return Dimension;
}(_CrudSetItemBase3.default); /*
                               * BSD 3-Clause License
                               *
                               * Copyright (c) 2017, MapCreator
                               * All rights reserved.
                               *
                               * Redistribution and use in source and binary forms, with or without
                               * modification, are permitted provided that the following conditions are met:
                               *
                               *  Redistributions of source code must retain the above copyright notice, this
                               *   list of conditions and the following disclaimer.
                               *
                               *  Redistributions in binary form must reproduce the above copyright notice,
                               *   this list of conditions and the following disclaimer in the documentation
                               *   and/or other materials provided with the distribution.
                               *
                               *  Neither the name of the copyright holder nor the names of its
                               *   contributors may be used to endorse or promote products derived from
                               *   this software without specific prior written permission.
                               *
                               * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                               * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                               * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                               * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                               * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                               * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                               * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                               * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                               * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                               * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                               */

exports.default = Dimension;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _AbstractError = __webpack_require__(96);

var _CrudBase2 = __webpack_require__(163);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Items that are part of a set
 * @abstract
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2018, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var CrudSetItemBase = function (_CrudBase) {
  (0, _inherits3.default)(CrudSetItemBase, _CrudBase);

  /**
   * @param {Maps4News} api - Api instance
   * @param {Object<String, *>} data - Item data
   */
  function CrudSetItemBase(api) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, CrudSetItemBase);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CrudSetItemBase.__proto__ || Object.getPrototypeOf(CrudSetItemBase)).call(this, api, data));

    if (_this.constructor === _CrudBase3.default) {
      throw new _AbstractError.AbstractClassError();
    }
    return _this;
  }

  /**
   * Get the parent id
   * @returns {?number|undefined} - Parent number
   */


  (0, _createClass3.default)(CrudSetItemBase, [{
    key: 'parentId',
    get: function get() {
      if (this.hasParent) {
        return Number(this[this.parentKey]);
      }

      return [][0]; // same as "undefined"
    }

    /**
     * Get the parent key
     * @returns {string} - Parent key
     */

  }, {
    key: 'parentKey',
    get: function get() {
      return this.resourceName.replace(/s$/, '_set_id');
    }

    /**
     * Returns if the resource has a parent resource set
     * @returns {boolean} - if the resource has a parent
     * @see ResourceBase::hasParent
     */

  }, {
    key: 'hasParent',
    get: function get() {
      return typeof this.parentKey === 'string';
    }
  }]);
  return CrudSetItemBase;
}(_CrudBase3.default);

exports.default = CrudSetItemBase;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase2 = __webpack_require__(163);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Domain resource
 */
var Domain = function (_CrudBase) {
  (0, _inherits3.default)(Domain, _CrudBase);

  function Domain() {
    (0, _classCallCheck3.default)(this, Domain);
    return (0, _possibleConstructorReturn3.default)(this, (Domain.__proto__ || Object.getPrototypeOf(Domain)).apply(this, arguments));
  }

  (0, _createClass3.default)(Domain, [{
    key: 'resourceName',
    get: function get() {
      return 'domains';
    }
  }]);
  return Domain;
}(_CrudBase3.default); /*
                        * BSD 3-Clause License
                        *
                        * Copyright (c) 2017, MapCreator
                        * All rights reserved.
                        *
                        * Redistribution and use in source and binary forms, with or without
                        * modification, are permitted provided that the following conditions are met:
                        *
                        *  Redistributions of source code must retain the above copyright notice, this
                        *   list of conditions and the following disclaimer.
                        *
                        *  Redistributions in binary form must reproduce the above copyright notice,
                        *   this list of conditions and the following disclaimer in the documentation
                        *   and/or other materials provided with the distribution.
                        *
                        *  Neither the name of the copyright holder nor the names of its
                        *   contributors may be used to endorse or promote products derived from
                        *   this software without specific prior written permission.
                        *
                        * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                        * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                        * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                        * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                        * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                        * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                        * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                        * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                        * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                        * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                        */

exports.default = Domain;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase = __webpack_require__(163);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _OwnableResource = __webpack_require__(164);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Feature
 * @extends {CrudBase}
 * @extends {OwnableResource}
 */
var Feature = function (_mix) {
  (0, _inherits3.default)(Feature, _mix);

  function Feature() {
    (0, _classCallCheck3.default)(this, Feature);
    return (0, _possibleConstructorReturn3.default)(this, (Feature.__proto__ || Object.getPrototypeOf(Feature)).apply(this, arguments));
  }

  (0, _createClass3.default)(Feature, [{
    key: 'resourceName',
    get: function get() {
      return 'features';
    }
  }]);
  return Feature;
}((0, _reflection.mix)(_CrudBase2.default, _OwnableResource2.default)); /*
                                                                         * BSD 3-Clause License
                                                                         *
                                                                         * Copyright (c) 2017, MapCreator
                                                                         * All rights reserved.
                                                                         *
                                                                         * Redistribution and use in source and binary forms, with or without
                                                                         * modification, are permitted provided that the following conditions are met:
                                                                         *
                                                                         *  Redistributions of source code must retain the above copyright notice, this
                                                                         *   list of conditions and the following disclaimer.
                                                                         *
                                                                         *  Redistributions in binary form must reproduce the above copyright notice,
                                                                         *   this list of conditions and the following disclaimer in the documentation
                                                                         *   and/or other materials provided with the distribution.
                                                                         *
                                                                         *  Neither the name of the copyright holder nor the names of its
                                                                         *   contributors may be used to endorse or promote products derived from
                                                                         *   this software without specific prior written permission.
                                                                         *
                                                                         * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                                                                         * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                                                                         * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                                                                         * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                                                                         * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                                                                         * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                                                                         * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                                                                         * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                                                                         * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                                                                         * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                                                         */

exports.default = Feature;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OwnableResource = __webpack_require__(164);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(86);

var _CrudSetBase = __webpack_require__(170);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _Font = __webpack_require__(176);

var _Font2 = _interopRequireDefault(_Font);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Font family
 * @extends {CrudSetBase}
 * @extends {OwnableResource}
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var FontFamily = function (_mix) {
  (0, _inherits3.default)(FontFamily, _mix);

  function FontFamily() {
    (0, _classCallCheck3.default)(this, FontFamily);
    return (0, _possibleConstructorReturn3.default)(this, (FontFamily.__proto__ || Object.getPrototypeOf(FontFamily)).apply(this, arguments));
  }

  (0, _createClass3.default)(FontFamily, [{
    key: 'resourcePath',
    get: function get() {
      return '/fonts/families/{id}';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'font-families';
    }
  }, {
    key: '_Child',
    get: function get() {
      return _Font2.default;
    }
  }]);
  return FontFamily;
}((0, _reflection.mix)(_CrudSetBase2.default, _OwnableResource2.default));

exports.default = FontFamily;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudSetItemBase2 = __webpack_require__(172);

var _CrudSetItemBase3 = _interopRequireDefault(_CrudSetItemBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Font = function (_CrudSetItemBase) {
  (0, _inherits3.default)(Font, _CrudSetItemBase);

  function Font() {
    (0, _classCallCheck3.default)(this, Font);
    return (0, _possibleConstructorReturn3.default)(this, (Font.__proto__ || Object.getPrototypeOf(Font)).apply(this, arguments));
  }

  (0, _createClass3.default)(Font, [{
    key: 'resourceName',
    get: function get() {
      return 'fonts';
    }
  }, {
    key: 'parentKey',
    get: function get() {
      return 'font_family_id';
    }
  }]);
  return Font;
}(_CrudSetItemBase3.default); /*
                               * BSD 3-Clause License
                               *
                               * Copyright (c) 2017, MapCreator
                               * All rights reserved.
                               *
                               * Redistribution and use in source and binary forms, with or without
                               * modification, are permitted provided that the following conditions are met:
                               *
                               *  Redistributions of source code must retain the above copyright notice, this
                               *   list of conditions and the following disclaimer.
                               *
                               *  Redistributions in binary form must reproduce the above copyright notice,
                               *   this list of conditions and the following disclaimer in the documentation
                               *   and/or other materials provided with the distribution.
                               *
                               *  Neither the name of the copyright holder nor the names of its
                               *   contributors may be used to endorse or promote products derived from
                               *   this software without specific prior written permission.
                               *
                               * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                               * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                               * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                               * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                               * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                               * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                               * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                               * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                               * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                               * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                               */

exports.default = Font;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase2 = __webpack_require__(163);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JobShare = function (_CrudBase) {
  (0, _inherits3.default)(JobShare, _CrudBase);

  function JobShare() {
    (0, _classCallCheck3.default)(this, JobShare);
    return (0, _possibleConstructorReturn3.default)(this, (JobShare.__proto__ || Object.getPrototypeOf(JobShare)).apply(this, arguments));
  }

  (0, _createClass3.default)(JobShare, [{
    key: 'save',

    /**
     * Unsupported method implemented due to CrudBase abstraction
     * @returns {void}
     * @throws Error
     * @private
     */
    value: function save() {
      throw new Error('Unsupported method JobShare::save');
    }

    /**
     * Accessor for {@link JobShareVisibility} enum
     * @returns {JobShareVisibility} - Accessor for enum
     */

  }, {
    key: 'resourcePath',
    get: function get() {
      return '/jobs/shares/{id}';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'job-shares';
    }
  }], [{
    key: 'visibility',
    get: function get() {
      return JobShareVisibility;
    }
  }]);
  return JobShare;
}(_CrudBase3.default);

/**
 * Job share visibility enum
 * @enum {String}
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

exports.default = JobShare;

var JobShareVisibility = function () {
  function JobShareVisibility() {
    (0, _classCallCheck3.default)(this, JobShareVisibility);
  }

  (0, _createClass3.default)(JobShareVisibility, null, [{
    key: 'PRIVATE',
    get: function get() {
      return 'private';
    }
  }, {
    key: 'ORGANISATION',
    get: function get() {
      return 'organisation';
    }
  }]);
  return JobShareVisibility;
}();

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase = __webpack_require__(163);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _OwnableResource = __webpack_require__(164);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Job type
 * @extends {CrudBase}
 * @extends {OwnableResource}
 */
var JobType = function (_mix) {
  (0, _inherits3.default)(JobType, _mix);

  function JobType() {
    (0, _classCallCheck3.default)(this, JobType);
    return (0, _possibleConstructorReturn3.default)(this, (JobType.__proto__ || Object.getPrototypeOf(JobType)).apply(this, arguments));
  }

  (0, _createClass3.default)(JobType, [{
    key: 'resourcePath',
    get: function get() {
      return '/jobs/types/{id}';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'job-types';
    }
  }]);
  return JobType;
}((0, _reflection.mix)(_CrudBase2.default, _OwnableResource2.default)); /*
                                                                         * BSD 3-Clause License
                                                                         *
                                                                         * Copyright (c) 2017, MapCreator
                                                                         * All rights reserved.
                                                                         *
                                                                         * Redistribution and use in source and binary forms, with or without
                                                                         * modification, are permitted provided that the following conditions are met:
                                                                         *
                                                                         *  Redistributions of source code must retain the above copyright notice, this
                                                                         *   list of conditions and the following disclaimer.
                                                                         *
                                                                         *  Redistributions in binary form must reproduce the above copyright notice,
                                                                         *   this list of conditions and the following disclaimer in the documentation
                                                                         *   and/or other materials provided with the distribution.
                                                                         *
                                                                         *  Neither the name of the copyright holder nor the names of its
                                                                         *   contributors may be used to endorse or promote products derived from
                                                                         *   this software without specific prior written permission.
                                                                         *
                                                                         * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                                                                         * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                                                                         * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                                                                         * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                                                                         * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                                                                         * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                                                                         * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                                                                         * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                                                                         * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                                                                         * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                                                         */

exports.default = JobType;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _HandlesImages = __webpack_require__(180);

var _HandlesImages2 = _interopRequireDefault(_HandlesImages);

var _OwnableResource = __webpack_require__(164);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(86);

var _CrudBase = __webpack_require__(163);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Layer
 * @extends {CrudBase}
 * @extends {OwnableResource}
 * @extends {HandlesImages}
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var Layer = function (_mix) {
  (0, _inherits3.default)(Layer, _mix);

  function Layer() {
    (0, _classCallCheck3.default)(this, Layer);
    return (0, _possibleConstructorReturn3.default)(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layer, [{
    key: 'resourceName',
    get: function get() {
      return 'layers';
    }
  }]);
  return Layer;
}((0, _reflection.mix)(_CrudBase2.default, _OwnableResource2.default, _HandlesImages2.default));

exports.default = Layer;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Trait2 = __webpack_require__(87);

var _Trait3 = _interopRequireDefault(_Trait2);

var _ImageHandler = __webpack_require__(181);

var _ImageHandler2 = _interopRequireDefault(_ImageHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adds the imageHandler to a resource
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var HandlesImages = function (_Trait) {
  (0, _inherits3.default)(HandlesImages, _Trait);

  function HandlesImages() {
    (0, _classCallCheck3.default)(this, HandlesImages);
    return (0, _possibleConstructorReturn3.default)(this, (HandlesImages.__proto__ || Object.getPrototypeOf(HandlesImages)).apply(this, arguments));
  }

  (0, _createClass3.default)(HandlesImages, [{
    key: 'imageHandler',

    /**
     * Handler for item image management
     * @returns {ImageHandler} - Image handler
     */
    get: function get() {
      return new _ImageHandler2.default(this.api, this);
    }
  }]);
  return HandlesImages;
}(_Trait3.default);

exports.default = HandlesImages;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ResourceBase = __webpack_require__(159);

var _ResourceBase2 = _interopRequireDefault(_ResourceBase);

var _Maps4News = __webpack_require__(97);

var _Maps4News2 = _interopRequireDefault(_Maps4News);

var _node = __webpack_require__(108);

var _reflection = __webpack_require__(86);

var _requests = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Image resource handler
 * @protected
 */
var ImageHandler = function () {
  /**
   * @param {Maps4News} api - Api instance
   * @param {ResourceBase} target - Instance of target item
   */
  function ImageHandler(api, target) {
    (0, _classCallCheck3.default)(this, ImageHandler);

    if (!(0, _reflection.isParentOf)(_Maps4News2.default, api)) {
      throw new TypeError('Expected api to be of type Maps4News');
    }

    if (!(0, _reflection.isParentOf)(_ResourceBase2.default, target)) {
      throw new TypeError('Expected target to be of type ResourceBase');
    }

    this._api = api;
    this._target = target;
  }

  /**
   * Get api instance
   * @returns {Maps4News} - Api instance
   */


  (0, _createClass3.default)(ImageHandler, [{
    key: 'delete',


    /**
     * Delete image
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with {@link ApiError}
     */
    value: function _delete() {
      return this._api.request(this.url, 'DELETE');
    }

    /**
     * Get image base64 representation
     * @returns {Promise} - Resolves with a {@link String} containing a blob reference to the image and rejects with {@link ApiError}
     * @example
     * // Browser
     * layer.imageHandler.download().then(url => {
     *   $('img').src = url;
     * });
     *
     * // NodeJs
     * layer.imageHandler.download().then(buffer => {
     *   fs.open(path, 'w', function(err, fd) {
     *     if (err) {
     *         throw 'could not open file: ' + err;
     *     }
     *
     *     // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
     *     fs.write(fd, buffer, 0, buffer.length, null, function(err) {
     *       if (err) throw 'error writing file: ' + err;
     *       fs.close(fd, function() {
     *         console.log('wrote the file successfully');
     *       });
     *     });
     *   });
     * });
     */

  }, {
    key: 'download',
    value: function download() {
      return this.api.request(this.url).then(function (data) {
        if ((0, _node.isNode)()) {
          return data;
        }

        return (window.URL || window.webkitURL).createObjectURL(data);
      });
    }

    /**
     * Upload new image
     * @param {File|Buffer} image - Image file
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with {@link ApiError}
     */

  }, {
    key: 'upload',
    value: function upload(image) {
      var Type = (0, _node.isNode)() ? Buffer : File;

      if (!(0, _reflection.isParentOf)(Type, image)) {
        throw new TypeError('Expected image to be of type File');
      }

      var formData = new _requests.FormData();

      formData.append('image', image);

      return this.api.request(this.url, 'POST', formData);
    }
  }, {
    key: 'api',
    get: function get() {
      return this._api;
    }

    /**
     * Resource url, can be used in an image tag
     * @returns {string} - Resource url
     */

  }, {
    key: 'url',
    get: function get() {
      return this._target.url + '/image';
    }
  }]);
  return ImageHandler;
}(); /*
      * BSD 3-Clause License
      *
      * Copyright (c) 2017, MapCreator
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, with or without
      * modification, are permitted provided that the following conditions are met:
      *
      *  Redistributions of source code must retain the above copyright notice, this
      *   list of conditions and the following disclaimer.
      *
      *  Redistributions in binary form must reproduce the above copyright notice,
      *   this list of conditions and the following disclaimer in the documentation
      *   and/or other materials provided with the distribution.
      *
      *  Neither the name of the copyright holder nor the names of its
      *   contributors may be used to endorse or promote products derived from
      *   this software without specific prior written permission.
      *
      * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
      * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
      * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
      * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
      * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
      * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */

exports.default = ImageHandler;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OwnableResource = __webpack_require__(164);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(86);

var _CrudSetBase = __webpack_require__(170);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _Mapstyle = __webpack_require__(183);

var _Mapstyle2 = _interopRequireDefault(_Mapstyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mapstyle set
 * @extends {CrudSetBase}
 * @extends {OwnableResource}
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var MapstyleSet = function (_mix) {
  (0, _inherits3.default)(MapstyleSet, _mix);

  function MapstyleSet() {
    (0, _classCallCheck3.default)(this, MapstyleSet);
    return (0, _possibleConstructorReturn3.default)(this, (MapstyleSet.__proto__ || Object.getPrototypeOf(MapstyleSet)).apply(this, arguments));
  }

  (0, _createClass3.default)(MapstyleSet, [{
    key: 'resourcePath',
    get: function get() {
      return '/mapstyles/sets/{id}';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'mapstyle-sets';
    }
  }, {
    key: '_Child',
    get: function get() {
      return _Mapstyle2.default;
    }
  }]);
  return MapstyleSet;
}((0, _reflection.mix)(_CrudSetBase2.default, _OwnableResource2.default));

exports.default = MapstyleSet;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _HandlesImages = __webpack_require__(180);

var _HandlesImages2 = _interopRequireDefault(_HandlesImages);

var _reflection = __webpack_require__(86);

var _CrudSetItemBase = __webpack_require__(172);

var _CrudSetItemBase2 = _interopRequireDefault(_CrudSetItemBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @extends {CrudSetItemBase}
 * @extends {HandlesImages}
 */
var Mapstyle = function (_mix) {
  (0, _inherits3.default)(Mapstyle, _mix);

  function Mapstyle() {
    (0, _classCallCheck3.default)(this, Mapstyle);
    return (0, _possibleConstructorReturn3.default)(this, (Mapstyle.__proto__ || Object.getPrototypeOf(Mapstyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(Mapstyle, [{
    key: 'resourceName',
    get: function get() {
      return 'mapstyles';
    }
  }]);
  return Mapstyle;
}((0, _reflection.mix)(_CrudSetItemBase2.default, _HandlesImages2.default)); /*
                                                                              * BSD 3-Clause License
                                                                              *
                                                                              * Copyright (c) 2017, MapCreator
                                                                              * All rights reserved.
                                                                              *
                                                                              * Redistribution and use in source and binary forms, with or without
                                                                              * modification, are permitted provided that the following conditions are met:
                                                                              *
                                                                              *  Redistributions of source code must retain the above copyright notice, this
                                                                              *   list of conditions and the following disclaimer.
                                                                              *
                                                                              *  Redistributions in binary form must reproduce the above copyright notice,
                                                                              *   this list of conditions and the following disclaimer in the documentation
                                                                              *   and/or other materials provided with the distribution.
                                                                              *
                                                                              *  Neither the name of the copyright holder nor the names of its
                                                                              *   contributors may be used to endorse or promote products derived from
                                                                              *   this software without specific prior written permission.
                                                                              *
                                                                              * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                                                                              * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                                                                              * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                                                                              * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                                                                              * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                                                                              * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                                                                              * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                                                                              * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                                                                              * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                                                                              * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                                                              */

exports.default = Mapstyle;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OwnableResource = __webpack_require__(164);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _CrudSetBase = __webpack_require__(170);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _Svg = __webpack_require__(185);

var _Svg2 = _interopRequireDefault(_Svg);

var _reflection = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Svg set
 * @extends {CrudSetBase}
 * @extends {OwnableResource}
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var SvgSet = function (_mix) {
  (0, _inherits3.default)(SvgSet, _mix);

  function SvgSet() {
    (0, _classCallCheck3.default)(this, SvgSet);
    return (0, _possibleConstructorReturn3.default)(this, (SvgSet.__proto__ || Object.getPrototypeOf(SvgSet)).apply(this, arguments));
  }

  (0, _createClass3.default)(SvgSet, [{
    key: 'resourcePath',
    get: function get() {
      return '/svgs/sets/{id}';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'svg-sets';
    }
  }, {
    key: '_Child',
    get: function get() {
      return _Svg2.default;
    }
  }]);
  return SvgSet;
}((0, _reflection.mix)(_CrudSetBase2.default, _OwnableResource2.default));

exports.default = SvgSet;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudSetItemBase2 = __webpack_require__(172);

var _CrudSetItemBase3 = _interopRequireDefault(_CrudSetItemBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = function (_CrudSetItemBase) {
  (0, _inherits3.default)(Svg, _CrudSetItemBase);

  function Svg() {
    (0, _classCallCheck3.default)(this, Svg);
    return (0, _possibleConstructorReturn3.default)(this, (Svg.__proto__ || Object.getPrototypeOf(Svg)).apply(this, arguments));
  }

  (0, _createClass3.default)(Svg, [{
    key: 'resourceName',
    get: function get() {
      return 'svgs';
    }
  }]);
  return Svg;
}(_CrudSetItemBase3.default); /*
                               * BSD 3-Clause License
                               *
                               * Copyright (c) 2017, MapCreator
                               * All rights reserved.
                               *
                               * Redistribution and use in source and binary forms, with or without
                               * modification, are permitted provided that the following conditions are met:
                               *
                               *  Redistributions of source code must retain the above copyright notice, this
                               *   list of conditions and the following disclaimer.
                               *
                               *  Redistributions in binary form must reproduce the above copyright notice,
                               *   this list of conditions and the following disclaimer in the documentation
                               *   and/or other materials provided with the distribution.
                               *
                               *  Neither the name of the copyright holder nor the names of its
                               *   contributors may be used to endorse or promote products derived from
                               *   this software without specific prior written permission.
                               *
                               * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                               * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                               * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                               * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                               * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                               * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                               * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                               * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                               * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                               * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                               */

exports.default = Svg;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase = __webpack_require__(163);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _OwnableResource = __webpack_require__(164);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tag resource
 * @extends {CrudBase}
 * @extends {OwnableResource}
 */
var Tag = function (_mix) {
  (0, _inherits3.default)(Tag, _mix);

  function Tag() {
    (0, _classCallCheck3.default)(this, Tag);
    return (0, _possibleConstructorReturn3.default)(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tag, [{
    key: 'resourceName',
    get: function get() {
      return 'tags';
    }
  }]);
  return Tag;
}((0, _reflection.mix)(_CrudBase2.default, _OwnableResource2.default)); /*
                                                                         * BSD 3-Clause License
                                                                         *
                                                                         * Copyright (c) 2018, MapCreator
                                                                         * All rights reserved.
                                                                         *
                                                                         * Redistribution and use in source and binary forms, with or without
                                                                         * modification, are permitted provided that the following conditions are met:
                                                                         *
                                                                         *  Redistributions of source code must retain the above copyright notice, this
                                                                         *   list of conditions and the following disclaimer.
                                                                         *
                                                                         *  Redistributions in binary form must reproduce the above copyright notice,
                                                                         *   this list of conditions and the following disclaimer in the documentation
                                                                         *   and/or other materials provided with the distribution.
                                                                         *
                                                                         *  Neither the name of the copyright holder nor the names of its
                                                                         *   contributors may be used to endorse or promote products derived from
                                                                         *   this software without specific prior written permission.
                                                                         *
                                                                         * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                                                                         * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                                                                         * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                                                                         * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                                                                         * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                                                                         * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                                                                         * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                                                                         * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                                                                         * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                                                                         * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                                                         */

exports.default = Tag;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OwnedResourceProxy = __webpack_require__(167);

var _OwnedResourceProxy2 = _interopRequireDefault(_OwnedResourceProxy);

var _ResourceProxy = __webpack_require__(128);

var _ResourceProxy2 = _interopRequireDefault(_ResourceProxy);

var _CrudBase2 = __webpack_require__(163);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _Color = __webpack_require__(162);

var _Color2 = _interopRequireDefault(_Color);

var _DimensionSet = __webpack_require__(169);

var _DimensionSet2 = _interopRequireDefault(_DimensionSet);

var _Feature = __webpack_require__(174);

var _Feature2 = _interopRequireDefault(_Feature);

var _FontFamily = __webpack_require__(175);

var _FontFamily2 = _interopRequireDefault(_FontFamily);

var _Job = __webpack_require__(188);

var _Job2 = _interopRequireDefault(_Job);

var _JobShare = __webpack_require__(177);

var _JobShare2 = _interopRequireDefault(_JobShare);

var _JobType = __webpack_require__(178);

var _JobType2 = _interopRequireDefault(_JobType);

var _Language = __webpack_require__(191);

var _Language2 = _interopRequireDefault(_Language);

var _Layer = __webpack_require__(179);

var _Layer2 = _interopRequireDefault(_Layer);

var _MapstyleSet = __webpack_require__(182);

var _MapstyleSet2 = _interopRequireDefault(_MapstyleSet);

var _Notification = __webpack_require__(192);

var _Notification2 = _interopRequireDefault(_Notification);

var _Organisation = __webpack_require__(166);

var _Organisation2 = _interopRequireDefault(_Organisation);

var _Permission = __webpack_require__(193);

var _Permission2 = _interopRequireDefault(_Permission);

var _Role = __webpack_require__(194);

var _Role2 = _interopRequireDefault(_Role);

var _SvgSet = __webpack_require__(184);

var _SvgSet2 = _interopRequireDefault(_SvgSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var User = function (_CrudBase) {
  (0, _inherits3.default)(User, _CrudBase);

  function User() {
    (0, _classCallCheck3.default)(this, User);
    return (0, _possibleConstructorReturn3.default)(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  (0, _createClass3.default)(User, [{
    key: 'ips',


    /**
     * Get all known ips
     * @returns {Promise} - Resolves with {@link array<string>} instance and rejects with {@link ApiError}
     */
    value: function ips() {
      var url = this.url + '/ips';

      return this.api.request(url).then(function (data) {
        return data.map(function (row) {
          return row['ip_address'];
        });
      });
    }

    /**
     * Get the user's organisation
     * @returns {Promise} - Resolves with {@link Organisation} instance and rejects with {@link ApiError}
     */

  }, {
    key: 'organisation',
    value: function organisation() {
      return new _ResourceProxy2.default(this.api, _Organisation2.default).get(this.organisationId);
    }

    /**
     * Get the user's language
     * @returns {Promise} - Resolves with {@link Language} instance and rejects with {@link ApiError}
     */

  }, {
    key: 'language',
    value: function language() {
      return new _ResourceProxy2.default(this.api, _Language2.default).get(this.languageCode);
    }

    // region Resource listing
    /**
     * Get the list notifications linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'resourceName',
    get: function get() {
      return 'users';
    }
  }, {
    key: 'notifications',
    get: function get() {
      return this._proxyResourceList(_Notification2.default);
    }

    /**
     * Get the list mapstyle sets linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'mapstyleSets',
    get: function get() {
      return this._proxyResourceList(_MapstyleSet2.default);
    }

    /**
     * Get the list dimension sets linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'dimensionSets',
    get: function get() {
      return this._proxyResourceList(_DimensionSet2.default);
    }

    /**
     * Get the list font families linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'fontFamilies',
    get: function get() {
      return this._proxyResourceList(_FontFamily2.default);
    }

    /**
     * Get the list svg sets linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'svgSets',
    get: function get() {
      return this._proxyResourceList(_SvgSet2.default);
    }

    /**
     * Get the list colors linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'colors',
    get: function get() {
      return this._proxyResourceList(_Color2.default);
    }

    /**
     * Get the list jobs linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'jobs',
    get: function get() {
      return this._proxyResourceList(_Job2.default);
    }

    /**
     * Get the list features linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'features',
    get: function get() {
      return this._proxyResourceList(_Feature2.default);
    }

    /**
     * Get the list layers linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'layers',
    get: function get() {
      return this._proxyResourceList(_Layer2.default);
    }

    /**
     * Get the list job types linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'jobTypes',
    get: function get() {
      return this._proxyResourceList(_JobType2.default);
    }

    /**
     * Get the list job shares linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'jobShares',
    get: function get() {
      return this._proxyResourceList(_JobShare2.default);
    }

    /**
     * Get the list permissions linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'permissions',
    get: function get() {
      return this._proxyResourceList(_Permission2.default);
    }

    /**
     * Get the list roles linked to the user
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'roles',
    get: function get() {
      return new _OwnedResourceProxy2.default(this.api, this, _Role2.default);
    }

    // endregion

  }]);
  return User;
}(_CrudBase3.default);

exports.default = User;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ResourceProxy = __webpack_require__(128);

var _ResourceProxy2 = _interopRequireDefault(_ResourceProxy);

var _requests = __webpack_require__(112);

var _CrudBase2 = __webpack_require__(163);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _JobResult = __webpack_require__(189);

var _JobResult2 = _interopRequireDefault(_JobResult);

var _JobRevision = __webpack_require__(190);

var _JobRevision2 = _interopRequireDefault(_JobRevision);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Job = function (_CrudBase) {
  (0, _inherits3.default)(Job, _CrudBase);

  function Job() {
    (0, _classCallCheck3.default)(this, Job);
    return (0, _possibleConstructorReturn3.default)(this, (Job.__proto__ || Object.getPrototypeOf(Job)).apply(this, arguments));
  }

  (0, _createClass3.default)(Job, [{
    key: 'downloadPreview',


    /**
     * Get image blob url representation
     * @returns {Promise} - Resolves with a {@link String} containing a blob reference to the image and rejects with {@link ApiError}
     */
    value: function downloadPreview() {
      return (0, _requests.downloadFile)(this.url + '/preview', this._getDownloadHeaders()).then(function (data) {
        return data.blob;
      });
    }

    /**
     * Get archive blob url
     * @returns {PromiseLike<{filename: string, blob: string}>} - Resolves with a blob reference and it's filename and rejects with {@link ApiError}
     */

  }, {
    key: 'downloadOutput',
    value: function downloadOutput() {
      return (0, _requests.downloadFile)(this.url + '/output', this._getDownloadHeaders());
    }

    /**
     * Get the remote output url
     * @returns {Promise} -  Resolves with a {@link String} containing the url to the output and rejects with {@link ApiError}
     */

  }, {
    key: 'getOutputUrl',
    value: function getOutputUrl() {
      return this.api.request(this.url + '/output-url').then(function (x) {
        return x.url;
      });
    }

    /**
     * Get headers for downloading resources
     * @returns {{Accept: string, Authorization: string}} - Request headers
     * @private
     */

  }, {
    key: '_getDownloadHeaders',
    value: function _getDownloadHeaders() {
      return {
        Accept: 'application/json',
        Authorization: this.api.auth.token.toString()
      };
    }
  }, {
    key: 'results',

    /**
     * Get the list of associated job results
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */
    get: function get() {
      return this._proxyResourceList(_JobResult2.default, this.url + '/results');
    }

    /**
     * Get the list job revisions
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'revisions',
    get: function get() {
      var data = {
        jobId: this.id
      };

      return new _ResourceProxy2.default(this.api, _JobRevision2.default, null, data);
    }

    /**
     * Resource name
     * @returns {String} - Resource name
     * @abstract
     */

  }, {
    key: 'resourceName',
    get: function get() {
      return 'jobs';
    }

    /**
     * Get the most up to date preview url
     * @returns {string} - Last preview url
     * @deprecated
     * @see Job#previewUrl
     */

  }, {
    key: 'lastPreviewUrl',
    get: function get() {
      return this.url + '/preview';
    }

    /**
     * Get the most up to date archive url
     * @returns {string} - Last archive url
     */

  }, {
    key: 'lastArchiveUrl',
    get: function get() {
      return this.url + '/revisions/last/result/archive';
    }
  }]);
  return Job;
}(_CrudBase3.default); /*
                        * BSD 3-Clause License
                        *
                        * Copyright (c) 2017, MapCreator
                        * All rights reserved.
                        *
                        * Redistribution and use in source and binary forms, with or without
                        * modification, are permitted provided that the following conditions are met:
                        *
                        *  Redistributions of source code must retain the above copyright notice, this
                        *   list of conditions and the following disclaimer.
                        *
                        *  Redistributions in binary form must reproduce the above copyright notice,
                        *   this list of conditions and the following disclaimer in the documentation
                        *   and/or other materials provided with the distribution.
                        *
                        *  Neither the name of the copyright holder nor the names of its
                        *   contributors may be used to endorse or promote products derived from
                        *   this software without specific prior written permission.
                        *
                        * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                        * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                        * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                        * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                        * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                        * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                        * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                        * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                        * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                        * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                        */

exports.default = Job;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _requests = __webpack_require__(112);

var _ResourceBase2 = __webpack_require__(159);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var JobResult = function (_ResourceBase) {
  (0, _inherits3.default)(JobResult, _ResourceBase);

  function JobResult() {
    (0, _classCallCheck3.default)(this, JobResult);
    return (0, _possibleConstructorReturn3.default)(this, (JobResult.__proto__ || Object.getPrototypeOf(JobResult)).apply(this, arguments));
  }

  (0, _createClass3.default)(JobResult, [{
    key: 'downloadOutput',


    /**
     * Get archive blob url
     * @returns {PromiseLike<{filename: string, blob: string}>} - Resolves with a blob reference and it's filename and rejects with {@link ApiError}
     */
    value: function downloadOutput() {
      return (0, _requests.downloadFile)(this.outputUrl, this._getDownloadHeaders());
    }

    /**
     * Get the output url url
     * @returns {string} - Output url url
     */

  }, {
    key: 'getOutputUrl',


    /**
     * Get the remote output url
     * @returns {Promise} -  Resolves with a {@link String} containing the url to the output and rejects with {@link ApiError}
     */
    value: function getOutputUrl() {
      return this.api.request(this.outputUrlUrl).then(function (x) {
        return x.url;
      });
    }

    /**
     * Job result log url
     * @returns {string} - log url
     */

  }, {
    key: 'downloadLog',


    /**
     * Get log blob url
     * @returns {Promise} - Resolves with a {@link String} containing a blob reference to the archive and rejects with {@link ApiError}
     */
    value: function downloadLog() {
      return (0, _requests.downloadFile)(this.logUrl, this._getDownloadHeaders()).then(function (data) {
        return data.blob;
      });
    }

    /**
     * Job result preview url, usable in an `<img>` tag
     * @returns {string} - Preview url
     */

  }, {
    key: 'downloadPreview',


    /**
     * Get image blob url representation
     * @returns {Promise} - Resolves with a {@link String} containing a blob reference to the image and rejects with {@link ApiError}
     */
    value: function downloadPreview() {
      return (0, _requests.downloadFile)(this.previewUrl, this._getDownloadHeaders()).then(function (data) {
        return data.blob;
      });
    }

    /**
     * Get headers for downloading resources
     * @returns {{Accept: string, Authorization: string}} - Request headers
     * @private
     */

  }, {
    key: '_getDownloadHeaders',
    value: function _getDownloadHeaders() {
      return {
        Accept: 'application/json',
        Authorization: this.api.auth.token.toString()
      };
    }

    /**
     * Mark a job as dealt with
     * This method is for internal use for our support team.
     *
     * @param {boolean} [value=true] - What to set the dealt-with value to
     * @returns {Promise} - A promise that resolves with no data
     */

  }, {
    key: 'dealWith',
    value: function dealWith() {
      var _this2 = this;

      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var method = value ? 'POST' : 'DELETE';

      return this.api.request(this.url + '/deal-with', method).then(function () {
        _this2.dealtWith = value;

        return value;
      });
    }
  }, {
    key: 'resourcePath',
    get: function get() {
      return '/jobs/{job_id}/revisions/{revision}/result';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'job-result';
    }

    /**
     * Get the related job
     * @returns {Promise<Job, ApiError>} - The job related to this row
     */

  }, {
    key: 'job',
    get: function get() {
      return this.api.jobs.get(this.jobId);
    }

    /**
     * Get the related job revision
     * @returns {Promise<JobRevision, ApiError>} - The job revision related to this row
     */

  }, {
    key: 'jobRevision',
    get: function get() {
      return this.api.jobs.select(this.jobId).revisions.get(this.id);
    }

    /**
     * Job result archive url
     * @returns {string} - Archive url
     */

  }, {
    key: 'outputUrl',
    get: function get() {
      return this.url + '/output';
    }
  }, {
    key: 'outputUrlUrl',
    get: function get() {
      return this.url + '/output-url';
    }
  }, {
    key: 'logUrl',
    get: function get() {
      return this.url + '/log';
    }
  }, {
    key: 'previewUrl',
    get: function get() {
      return this.url + '/preview';
    }
  }]);
  return JobResult;
}(_ResourceBase3.default);

exports.default = JobResult;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reflection = __webpack_require__(86);

var _CrudBase2 = __webpack_require__(163);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _JobResult = __webpack_require__(189);

var _JobResult2 = _interopRequireDefault(_JobResult);

var _JobShare = __webpack_require__(177);

var _JobShare2 = _interopRequireDefault(_JobShare);

var _Layer = __webpack_require__(179);

var _Layer2 = _interopRequireDefault(_Layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JobRevision = function (_CrudBase) {
  (0, _inherits3.default)(JobRevision, _CrudBase);

  function JobRevision() {
    (0, _classCallCheck3.default)(this, JobRevision);
    return (0, _possibleConstructorReturn3.default)(this, (JobRevision.__proto__ || Object.getPrototypeOf(JobRevision)).apply(this, arguments));
  }

  (0, _createClass3.default)(JobRevision, [{
    key: 'result',


    /**
     * Get the job result
     * @returns {Promise} - Resolves with a {@link JobResult} instance and rejects with {@link ApiError}
     */
    value: function result() {
      var _this2 = this;

      var url = this.url + '/result';

      return this.api.request(url).then(function (data) {
        data.revision = _this2.revision;

        return new _JobResult2.default(_this2.api, data);
      });
    }

    /**
     * Get a result proxy
     *
     * @returns {JobResult} - Empty job result used for
     */

  }, {
    key: 'save',


    // noinspection JSCheckFunctionSignatures
    /**
     * Save updated job revision
     * @param {Object} object - Map object
     * @param {Array<Layer>|Array<Number>|null} layers - Array containing all layers for this revision. If set to null the same layers will be used
     * @returns {Promise} - Resolves with a new {@link JobRevision} instance and rejects with {@link ApiError}
     * @throws TypeError
     */
    value: function save() {
      var _this3 = this;

      var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var layers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (layers && layers.length > 0) {
        if ((0, _reflection.isParentOf)(_Layer2.default, layers[0])) {
          layers = layers.map(function (layer) {
            return layer.id;
          });
        } else if (typeof layers[0] !== 'number') {
          throw new TypeError('layers property is not of type Array<Layer>, Array<Number> or null');
        }
      }

      var data = {
        'object': JSON.stringify(object),
        'language_code': this.languageCode,
        'mapstyle_set_id': this.mapstyleSetId
      };

      if (layers) {
        data.layers = layers;
      }

      return this.api.request(this.baseUrl, 'POST', data).then(function (data) {
        return new JobRevision(_this3.api, data);
      });
    }

    /**
     * Get job object
     * @returns {Promise} - Resolves with {@link Object} instance containing the map object and rejects with {@link ApiError}
     * @todo document object format
     */

  }, {
    key: 'object',
    value: function object() {
      var url = this.url + '/object';

      return this.api.request(url);
    }

    /**
     * Build the revision
     * @param {String} callbackUrl - Optional callback url for when the job completes
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with {@link ApiError}
     */

  }, {
    key: 'build',
    value: function build(callbackUrl) {
      var url = this.url + '/build';
      var data = { callback: callbackUrl };

      return this.api.request(url, 'POST', data);
    }

    /**
     * Cancels a running job
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with {@link ApiError}
     */

  }, {
    key: 'cancel',
    value: function cancel() {
      var url = this.url + '/cancel';

      return this.api.request(url, 'POST');
    }

    /**
     * Share the job revision
     * @param {String} visibility - See {@link JobShareVisibility}, either `private` or `organisation`
     * @returns {Promise} - Resolves with a {@link String} containing the share link and rejects with {@link ApiError}
     */

  }, {
    key: 'share',
    value: function share() {
      var visibility = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _JobShare2.default.visibility.PRIVATE;

      visibility = visibility.toLowerCase();

      if (visibility !== _JobShare2.default.visibility.ORGANISATION && visibility !== _JobShare2.default.visibility.PRIVATE) {
        throw new Error('Unknown visibility \'' + visibility + '\'');
      }

      var url = this.url + '/share';

      return this.api.request(url, 'POST', { visibility: visibility });
    }

    /**
     * Clones a job revision to the user requesting it
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with {@link ApiError}
     */

  }, {
    key: 'clone',
    value: function clone() {
      var url = this.url + '/clone';

      return this.api.request(url, 'POST');
    }
  }, {
    key: 'baseUrl',
    get: function get() {
      return '/jobs/' + this.jobId + '/revisions';
    }
  }, {
    key: 'resourcePath',
    get: function get() {
      return '/jobs/{job_id}/revisions/{revision}';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'job-revisions';
    }
  }, {
    key: 'layers',


    /**
     * Get layers
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */
    get: function get() {
      return this._proxyResourceList(_Layer2.default);
    }
  }, {
    key: 'resultProxy',
    get: function get() {
      var data = {
        jobId: this.jobId,
        revision: this.revision
      };

      return new _JobResult2.default(this.api, data);
    }
  }], [{
    key: 'resourceUrlKey',
    get: function get() {
      return 'revision';
    }
  }]);
  return JobRevision;
}(_CrudBase3.default); /*
                        * BSD 3-Clause License
                        *
                        * Copyright (c) 2017, MapCreator
                        * All rights reserved.
                        *
                        * Redistribution and use in source and binary forms, with or without
                        * modification, are permitted provided that the following conditions are met:
                        *
                        *  Redistributions of source code must retain the above copyright notice, this
                        *   list of conditions and the following disclaimer.
                        *
                        *  Redistributions in binary form must reproduce the above copyright notice,
                        *   this list of conditions and the following disclaimer in the documentation
                        *   and/or other materials provided with the distribution.
                        *
                        *  Neither the name of the copyright holder nor the names of its
                        *   contributors may be used to endorse or promote products derived from
                        *   this software without specific prior written permission.
                        *
                        * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                        * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                        * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                        * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                        * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                        * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                        * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                        * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                        * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                        * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                        */

exports.default = JobRevision;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase2 = __webpack_require__(163);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Language = function (_CrudBase) {
  (0, _inherits3.default)(Language, _CrudBase);

  function Language() {
    (0, _classCallCheck3.default)(this, Language);
    return (0, _possibleConstructorReturn3.default)(this, (Language.__proto__ || Object.getPrototypeOf(Language)).apply(this, arguments));
  }

  (0, _createClass3.default)(Language, [{
    key: 'toString',
    value: function toString() {
      return this.constructor.name + '(' + this.code + ')';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'languages';
    }
  }, {
    key: 'resourcePath',
    get: function get() {
      return '/' + this.resourceName + '/{code}';
    }
  }], [{
    key: 'resourceUrlKey',
    get: function get() {
      return 'code';
    }
  }]);
  return Language;
}(_CrudBase3.default); /*
                        * BSD 3-Clause License
                        *
                        * Copyright (c) 2017, MapCreator
                        * All rights reserved.
                        *
                        * Redistribution and use in source and binary forms, with or without
                        * modification, are permitted provided that the following conditions are met:
                        *
                        *  Redistributions of source code must retain the above copyright notice, this
                        *   list of conditions and the following disclaimer.
                        *
                        *  Redistributions in binary form must reproduce the above copyright notice,
                        *   this list of conditions and the following disclaimer in the documentation
                        *   and/or other materials provided with the distribution.
                        *
                        *  Neither the name of the copyright holder nor the names of its
                        *   contributors may be used to endorse or promote products derived from
                        *   this software without specific prior written permission.
                        *
                        * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                        * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                        * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                        * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                        * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                        * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                        * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                        * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                        * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                        * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                        */

exports.default = Language;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase2 = __webpack_require__(163);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = function (_CrudBase) {
  (0, _inherits3.default)(Notification, _CrudBase);

  function Notification() {
    (0, _classCallCheck3.default)(this, Notification);
    return (0, _possibleConstructorReturn3.default)(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
  }

  (0, _createClass3.default)(Notification, [{
    key: 'resourceName',
    get: function get() {
      return 'notifications';
    }
  }]);
  return Notification;
}(_CrudBase3.default); /*
                        * BSD 3-Clause License
                        *
                        * Copyright (c) 2017, MapCreator
                        * All rights reserved.
                        *
                        * Redistribution and use in source and binary forms, with or without
                        * modification, are permitted provided that the following conditions are met:
                        *
                        *  Redistributions of source code must retain the above copyright notice, this
                        *   list of conditions and the following disclaimer.
                        *
                        *  Redistributions in binary form must reproduce the above copyright notice,
                        *   this list of conditions and the following disclaimer in the documentation
                        *   and/or other materials provided with the distribution.
                        *
                        *  Neither the name of the copyright holder nor the names of its
                        *   contributors may be used to endorse or promote products derived from
                        *   this software without specific prior written permission.
                        *
                        * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                        * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                        * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                        * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                        * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                        * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                        * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                        * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                        * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                        * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                        */

exports.default = Notification;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ResourceBase2 = __webpack_require__(159);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Permission = function (_ResourceBase) {
  (0, _inherits3.default)(Permission, _ResourceBase);

  function Permission() {
    (0, _classCallCheck3.default)(this, Permission);
    return (0, _possibleConstructorReturn3.default)(this, (Permission.__proto__ || Object.getPrototypeOf(Permission)).apply(this, arguments));
  }

  (0, _createClass3.default)(Permission, [{
    key: 'resourceName',
    get: function get() {
      return 'permissions';
    }
  }]);
  return Permission;
}(_ResourceBase3.default); /*
                            * BSD 3-Clause License
                            *
                            * Copyright (c) 2017, MapCreator
                            * All rights reserved.
                            *
                            * Redistribution and use in source and binary forms, with or without
                            * modification, are permitted provided that the following conditions are met:
                            *
                            *  Redistributions of source code must retain the above copyright notice, this
                            *   list of conditions and the following disclaimer.
                            *
                            *  Redistributions in binary form must reproduce the above copyright notice,
                            *   this list of conditions and the following disclaimer in the documentation
                            *   and/or other materials provided with the distribution.
                            *
                            *  Neither the name of the copyright holder nor the names of its
                            *   contributors may be used to endorse or promote products derived from
                            *   this software without specific prior written permission.
                            *
                            * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                            * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                            * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                            * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                            * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                            * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                            * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                            * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                            * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                            * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                            */

exports.default = Permission;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OwnedResourceProxy = __webpack_require__(167);

var _OwnedResourceProxy2 = _interopRequireDefault(_OwnedResourceProxy);

var _CrudBase2 = __webpack_require__(163);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _Permission = __webpack_require__(193);

var _Permission2 = _interopRequireDefault(_Permission);

var _User = __webpack_require__(187);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Role = function (_CrudBase) {
  (0, _inherits3.default)(Role, _CrudBase);

  function Role() {
    (0, _classCallCheck3.default)(this, Role);
    return (0, _possibleConstructorReturn3.default)(this, (Role.__proto__ || Object.getPrototypeOf(Role)).apply(this, arguments));
  }

  (0, _createClass3.default)(Role, [{
    key: 'permissions',

    /**
     * Get the list permissions linked to the role
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */
    get: function get() {
      return new _OwnedResourceProxy2.default(this.api, this, _Permission2.default);
    }

    /**
     * Get the list users linked to the role
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'users',
    get: function get() {
      return new _OwnedResourceProxy2.default(this.api, this, _User2.default);
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'roles';
    }
  }]);
  return Role;
}(_CrudBase3.default);

exports.default = Role;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase2 = __webpack_require__(163);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Faq resource
 */
var Faq = function (_CrudBase) {
  (0, _inherits3.default)(Faq, _CrudBase);

  function Faq() {
    (0, _classCallCheck3.default)(this, Faq);
    return (0, _possibleConstructorReturn3.default)(this, (Faq.__proto__ || Object.getPrototypeOf(Faq)).apply(this, arguments));
  }

  (0, _createClass3.default)(Faq, [{
    key: 'resourceName',
    get: function get() {
      return 'faqs';
    }
  }]);
  return Faq;
}(_CrudBase3.default); /*
                        * BSD 3-Clause License
                        *
                        * Copyright (c) 2017, MapCreator
                        * All rights reserved.
                        *
                        * Redistribution and use in source and binary forms, with or without
                        * modification, are permitted provided that the following conditions are met:
                        *
                        *  Redistributions of source code must retain the above copyright notice, this
                        *   list of conditions and the following disclaimer.
                        *
                        *  Redistributions in binary form must reproduce the above copyright notice,
                        *   this list of conditions and the following disclaimer in the documentation
                        *   and/or other materials provided with the distribution.
                        *
                        *  Neither the name of the copyright holder nor the names of its
                        *   contributors may be used to endorse or promote products derived from
                        *   this software without specific prior written permission.
                        *
                        * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                        * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                        * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                        * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                        * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                        * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                        * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                        * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                        * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                        * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                        */

exports.default = Faq;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ResourceBase2 = __webpack_require__(159);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Highlight = function (_ResourceBase) {
  (0, _inherits3.default)(Highlight, _ResourceBase);

  function Highlight() {
    (0, _classCallCheck3.default)(this, Highlight);
    return (0, _possibleConstructorReturn3.default)(this, (Highlight.__proto__ || Object.getPrototypeOf(Highlight)).apply(this, arguments));
  }

  (0, _createClass3.default)(Highlight, [{
    key: 'resourceName',
    get: function get() {
      return 'highlights';
    }
  }]);
  return Highlight;
}(_ResourceBase3.default); /*
                            * BSD 3-Clause License
                            *
                            * Copyright (c) 2017, MapCreator
                            * All rights reserved.
                            *
                            * Redistribution and use in source and binary forms, with or without
                            * modification, are permitted provided that the following conditions are met:
                            *
                            *  Redistributions of source code must retain the above copyright notice, this
                            *   list of conditions and the following disclaimer.
                            *
                            *  Redistributions in binary form must reproduce the above copyright notice,
                            *   this list of conditions and the following disclaimer in the documentation
                            *   and/or other materials provided with the distribution.
                            *
                            *  Neither the name of the copyright holder nor the names of its
                            *   contributors may be used to endorse or promote products derived from
                            *   this software without specific prior written permission.
                            *
                            * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                            * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                            * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                            * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                            * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                            * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                            * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                            * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                            * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                            * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                            */

exports.default = Highlight;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ResourceBase2 = __webpack_require__(159);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InsetMap = function (_ResourceBase) {
  (0, _inherits3.default)(InsetMap, _ResourceBase);

  function InsetMap() {
    (0, _classCallCheck3.default)(this, InsetMap);
    return (0, _possibleConstructorReturn3.default)(this, (InsetMap.__proto__ || Object.getPrototypeOf(InsetMap)).apply(this, arguments));
  }

  (0, _createClass3.default)(InsetMap, [{
    key: 'resourceName',
    get: function get() {
      return 'inset-maps';
    }
  }]);
  return InsetMap;
}(_ResourceBase3.default); /*
                            * BSD 3-Clause License
                            *
                            * Copyright (c) 2017, MapCreator
                            * All rights reserved.
                            *
                            * Redistribution and use in source and binary forms, with or without
                            * modification, are permitted provided that the following conditions are met:
                            *
                            *  Redistributions of source code must retain the above copyright notice, this
                            *   list of conditions and the following disclaimer.
                            *
                            *  Redistributions in binary form must reproduce the above copyright notice,
                            *   this list of conditions and the following disclaimer in the documentation
                            *   and/or other materials provided with the distribution.
                            *
                            *  Neither the name of the copyright holder nor the names of its
                            *   contributors may be used to endorse or promote products derived from
                            *   this software without specific prior written permission.
                            *
                            * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                            * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                            * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                            * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                            * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                            * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                            * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                            * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                            * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                            * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                            */

exports.default = InsetMap;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(199);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _JobResult2 = __webpack_require__(189);

var _JobResult3 = _interopRequireDefault(_JobResult2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JobMonitorRow = function (_JobResult) {
  (0, _inherits3.default)(JobMonitorRow, _JobResult);

  function JobMonitorRow() {
    (0, _classCallCheck3.default)(this, JobMonitorRow);
    return (0, _possibleConstructorReturn3.default)(this, (JobMonitorRow.__proto__ || Object.getPrototypeOf(JobMonitorRow)).apply(this, arguments));
  }

  (0, _createClass3.default)(JobMonitorRow, [{
    key: 'resourceName',
    get: function get() {
      return 'job-monitor';
    }

    /**
     * Returns if the resource is readonly
     * @returns {boolean} - readonly
     */

  }, {
    key: 'user',


    /**
     * Get the related job
     * @returns {Promise<Job, ApiError>} - The job related to this row
     */
    get: function get() {
      return this.api.users.get(this.userId);
    }
  }], [{
    key: '_guessType',

    /**
     * Guess type based on property name
     * @param {string} name - Field name
     * @param {*} value - Field Value
     * @private
     * @returns {*} - Original or converted value
     */
    value: function _guessType(name, value) {
      if (['dealt_with', 'bought'].includes(name)) {
        return Boolean(value);
      }

      return (0, _get3.default)(JobMonitorRow.__proto__ || Object.getPrototypeOf(JobMonitorRow), '_guessType', this).call(this, name, value);
    }
  }, {
    key: 'readonly',
    get: function get() {
      return true;
    }
  }]);
  return JobMonitorRow;
}(_JobResult3.default); /*
                         * BSD 3-Clause License
                         *
                         * Copyright (c) 2017, MapCreator
                         * All rights reserved.
                         *
                         * Redistribution and use in source and binary forms, with or without
                         * modification, are permitted provided that the following conditions are met:
                         *
                         *  Redistributions of source code must retain the above copyright notice, this
                         *   list of conditions and the following disclaimer.
                         *
                         *  Redistributions in binary form must reproduce the above copyright notice,
                         *   this list of conditions and the following disclaimer in the documentation
                         *   and/or other materials provided with the distribution.
                         *
                         *  Neither the name of the copyright holder nor the names of its
                         *   contributors may be used to endorse or promote products derived from
                         *   this software without specific prior written permission.
                         *
                         * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                         * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                         * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                         * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                         * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                         * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                         * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                         * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                         * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                         * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                         */

exports.default = JobMonitorRow;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(200);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(204);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(201), __esModule: true };

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(202);
module.exports = __webpack_require__(11).Object.getPrototypeOf;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(56);
var $getPrototypeOf = __webpack_require__(55);

__webpack_require__(203)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9);
var core = __webpack_require__(11);
var fails = __webpack_require__(20);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(205), __esModule: true };

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(206);
var $Object = __webpack_require__(11).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(42);
var $getOwnPropertyDescriptor = __webpack_require__(73).f;

__webpack_require__(203)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ResourceBase2 = __webpack_require__(159);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaceName = function (_ResourceBase) {
  (0, _inherits3.default)(PlaceName, _ResourceBase);

  function PlaceName() {
    (0, _classCallCheck3.default)(this, PlaceName);
    return (0, _possibleConstructorReturn3.default)(this, (PlaceName.__proto__ || Object.getPrototypeOf(PlaceName)).apply(this, arguments));
  }

  (0, _createClass3.default)(PlaceName, [{
    key: 'resourceName',
    get: function get() {
      return 'place-names';
    }
  }]);
  return PlaceName;
}(_ResourceBase3.default); /*
                            * BSD 3-Clause License
                            *
                            * Copyright (c) 2017, MapCreator
                            * All rights reserved.
                            *
                            * Redistribution and use in source and binary forms, with or without
                            * modification, are permitted provided that the following conditions are met:
                            *
                            *  Redistributions of source code must retain the above copyright notice, this
                            *   list of conditions and the following disclaimer.
                            *
                            *  Redistributions in binary form must reproduce the above copyright notice,
                            *   this list of conditions and the following disclaimer in the documentation
                            *   and/or other materials provided with the distribution.
                            *
                            *  Neither the name of the copyright holder nor the names of its
                            *   contributors may be used to endorse or promote products derived from
                            *   this software without specific prior written permission.
                            *
                            * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                            * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                            * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                            * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                            * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                            * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                            * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                            * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                            * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                            * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                            */

exports.default = PlaceName;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Simple logger implementation
 */
var Logger = function () {
  /**
   * Create a Logger instance
   * @param {string} [logLevel=warn] - Log level
   */
  function Logger() {
    var logLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'warn';
    (0, _classCallCheck3.default)(this, Logger);

    this.logLevel = logLevel;
  }

  /**
   * Get available log levels
   * @returns {Array<string>} - Log levels
   */


  (0, _createClass3.default)(Logger, [{
    key: 'getLogLevels',
    value: function getLogLevels() {
      return ['debug', 'info', 'warn', 'error', 'none'];
    }

    /**
     * Log a message
     * @param {string} message - Message to be logged
     * @param {string} level - Log level
     * @returns {void}
     */

  }, {
    key: 'log',
    value: function log(message) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';

      if (level === 'none') {
        return;
      }

      if (this._shouldLog(level)) {
        // eslint-disable-next-line no-console
        console[level](message);
      }
    }

    /**
     * Log a debug message
     * @param {string} message - Message to be logged
     * @returns {void}
     */

  }, {
    key: 'debug',
    value: function debug(message) {
      this.log(message, 'debug');
    }

    /**
     * Log an informative message
     * @param {string} message - Message to be logged
     * @returns {void}
     */

  }, {
    key: 'info',
    value: function info(message) {
      this.log(message, 'info');
    }

    /**
     * Log a warning message
     * @param {string} message - Message to be logged
     * @returns {void}
     */

  }, {
    key: 'warn',
    value: function warn(message) {
      this.log(message, 'warn');
    }

    /**
     * Log an error message
     * @param {string} message - Message to be logged
     * @returns {void}
     */

  }, {
    key: 'error',
    value: function error(message) {
      this.log(message, 'error');
    }

    /**
     * Get the current log level
     * @returns {string} - log level
     */

  }, {
    key: '_shouldLog',
    value: function _shouldLog(level) {
      var _this = this;

      var logLevels = this.getLogLevels();

      var targetLevel = logLevels.findIndex(function (x) {
        return x === level;
      });
      var currentLevel = logLevels.findIndex(function (x) {
        return x === _this.logLevel;
      });

      return targetLevel >= currentLevel;
    }
  }, {
    key: 'logLevel',
    get: function get() {
      return this._logLevel;
    }

    /**
     * Set the current log level
     * @param {string} value - log level
     * @see Logger#getLogLevels
     */
    ,
    set: function set(value) {
      value = value.toLowerCase();

      if (!this.getLogLevels().includes(value)) {
        throw new TypeError('Expected one of ' + this.getLogLevels().join(', ') + '. Got ' + value);
      }

      this._logLevel = value;
    }
  }]);
  return Logger;
}();

exports.default = Logger;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _enums = __webpack_require__(1);

var _Maps4News = __webpack_require__(97);

var _Maps4News2 = _interopRequireDefault(_Maps4News);

var _JobMonitorRow = __webpack_require__(198);

var _JobMonitorRow2 = _interopRequireDefault(_JobMonitorRow);

var _reflection = __webpack_require__(86);

var _requests = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used for monitoring the job queue
 */
var JobMonitor = function () {
  /**
   * JobMonitor constructor
   * @param {Maps4News} api - Api instance
   */
  function JobMonitor(api) {
    (0, _classCallCheck3.default)(this, JobMonitor);

    if (!(0, _reflection.isParentOf)(_Maps4News2.default, api)) {
      throw new TypeError('Expected api to be of type Maps4News');
    }

    this._api = api;

    this._lastUpdate = this._getTimestamp();
    this._data = [];
    this._filterStatus = _enums.JobMonitorFilter.DEFAULT;
    this._filterTags = [];
    this._purge = false;
    this._longPoll = true;
    this._skipMaxUpdate = false;
    this._maxAvailible = {};
  }

  /**
   * Contains the current JobMonitor data
   * @returns {Array<JobMonitorRow>} - Job monitor rows
   */


  (0, _createClass3.default)(JobMonitor, [{
    key: 'update',


    /**
     * Update the job list
     * @returns {Promise<Number, ApiError>} - Resolves with the number of updated rows
     */
    value: function update() {
      var _this = this;

      if (this.waiting || this._lastUpdate === this._getTimestamp()) {
        return new Promise(function (resolve) {
          resolve(0); // Still waiting for the other promise to resolve or we're sure there is no new data
        });
      }

      // Counter so we don't have to worry about racing
      this._waiting = 1;

      if (this._purge) {
        this._data = [];
        this._purge = false;
      }

      // First we need to check if we have enough data to begin with
      var rowCountDiff = Math.min(this.maxRows, this.realMaxRows) - this.data.length;

      if (rowCountDiff < 0) {
        // Remove trailing data
        this._data.splice(this.maxRows, this.data.length - this.maxRows);
        rowCountDiff = 0;
      }

      var requestedRowCount = 0;
      var requests = [];
      var skipLongPoll = rowCountDiff > 0;

      while (rowCountDiff > 0) {
        // @todo Either always do 50 or calculate the correct page number and stuff which takes time...
        var perPage = 50; // Math.min(rowCountDiff, 50);
        var page = Math.floor((this.data.length + requestedRowCount) / perPage) + 1;

        this.api.logger.debug('[JobMonitor] have ' + (this.data.length + requestedRowCount) + ', Diff: ' + rowCountDiff + ',' + ('PerPage: ' + perPage + ', Page: ' + page + ', Target: ' + perPage * page));

        var params = {
          // eslint-disable-next-line
          per_page: perPage,
          page: page
        };

        if (this.filterTags.length > 0) {
          params.tags = this.filterTags;
        }

        var _url = this._baseUrl + '&' + (0, _requests.encodeQueryString)(params);

        requests.push(this.api.request(_url).then(function (data) {
          return data.map(function (x) {
            return new _JobMonitorRow2.default(_this.api, x);
          });
        }));

        requestedRowCount += perPage;
        rowCountDiff -= perPage;
        this._waiting++;
      }

      var out = [];

      // note: Promise.all resolves with the data in the same order as the input
      out.push(Promise.all(requests).then(function (data) {
        // Join data
        data = data.reduce(function (acc, val) {
          return acc.concat(val);
        }, []);

        // Append data
        _this._data = _this.data.concat(data);

        var oldLength = _this.data.length;

        // Remove duplicates
        _this._data = _this.data.filter(function (thing, index, self) {
          return index === self.findIndex(function (t) {
            return t.id === thing.id;
          });
        });

        // We're no longer waiting
        _this._waiting -= requests.length;

        return data.length - (oldLength - _this.data.length);
      }));

      // Fetch updates
      var url = this._baseUrl + '&timestamp=' + Math.floor(this._lastUpdate);

      if (this.longPoll && !skipLongPoll) {
        url += '&long_poll';
      }

      this._lastUpdate = this._getTimestamp();

      out.push(this.api.request(url).then(function (data) {
        return data.map(function (x) {
          return new _JobMonitorRow2.default(_this.api, x);
        });
      }).then(function (data) {
        var lookup = data.map(function (x) {
          return x.id;
        });
        var updateCount = 0;

        for (var i = 0; i < _this._data.length && lookup.length > 0; i++) {
          var ii = lookup.indexOf(_this._data[i].id);

          if (ii !== -1) {
            _this._data[i] = data[ii];

            // Remove the data and the lookup entry
            data.splice(ii, 1);
            lookup.splice(ii, 1);
            updateCount++;
          }
        }

        // Prepend new data
        _this._data = data.concat(_this._data);

        _this._waiting--;

        return updateCount;
      }));

      return Promise.all(out).then(function (x) {
        return x.reduce(function (s, v) {
          return s + v;
        }, 0);
      }).then(function (rowCount) {
        var droppedRowCount = _this.data.length - _this.maxRows;

        // Truncate data if needed
        _this._data.splice(_this.maxRows, _this.data.length - _this.maxRows);

        if (!_this._skipMaxUpdate) {
          _this._maxAvailible[_this._baseUrl] = _this.data.length;
        }

        _this.api.logger.debug('Target: ' + _this.maxRows + ', Actual: ' + _this.data.length + ', Updated: ' + rowCount + ', Dropped: ' + droppedRowCount + ', RealMax: ' + _this.realMaxRows);

        _this._skipMaxUpdate = false;

        return rowCount;
      }).catch(function (e) {
        _this._waiting = 0;
        throw e;
      });
    }

    /**
     * If the JobMonitor is waiting for data. Any update request will
     * resolve with false instantly while this is true.
     * @returns {Boolean} - Waiting for data
     */

  }, {
    key: '_getTimestamp',
    value: function _getTimestamp() {
      return Date.now() / 1000;
    }
  }, {
    key: 'data',
    get: function get() {
      return this._data;
    }

    /**
     * Get api instance
     * @returns {Maps4News} - Api instance
     */

  }, {
    key: 'api',
    get: function get() {
      return this._api;
    }
  }, {
    key: 'waiting',
    get: function get() {
      return this._waiting > 0;
    }

    /**
     * Maximum number of rows to store
     * @returns {number} - Maximum number of rows
     */

  }, {
    key: 'maxRows',
    get: function get() {
      return this._maxRows || Number("100") || 100;
    }

    /**
     * Set the maximum number of rows to store. Updating this value won't take
     * effect until the {@link JobMonitor#update} method has been called.
     * @param {number} value - Maximum number of rows
     */
    ,
    set: function set(value) {
      value = Number(value);
      value = Math.max(1, value);

      this.api.logger.debug('Setting maxRows to ' + value + '. skipping maxUpdate next cycle.');

      this._skipMaxUpdate = true;
      this._maxAvailible[this._baseUrl] = value;
      this._maxRows = value;
    }

    /**
     * Used to get internal reference max rows
     */

  }, {
    key: 'realMaxRows',
    get: function get() {
      return this._maxAvailible[this._baseUrl] || this.maxRows;
    }
  }, {
    key: '_baseUrl',
    get: function get() {
      return '/jobs/monitor/' + this.filterStatus + '?internal=' + !this.hideInternal;
    }

    /**
     * If internal users should be hidden. Updating this value won't take
     * effect until the {@link JobMonitor#update} method has been called.
     * @param {boolean} [value=false] - hide internal users
     */

  }, {
    key: 'hideInternal',
    set: function set(value) {
      value = Boolean(value);

      if (this._hideInternal !== value) {
        this._purge = true;
      }

      this._hideInternal = value;
    }

    /**
     * If internal users should be hidden in the data
     * @returns {boolean} - hide internal users
     */
    ,
    get: function get() {
      return this._hideInternal || false;
    }

    /**
     * Set the filter for the job monitor
     * @param {string} value - Job monitor filter
     * @see JobMonitorFilter
     */

  }, {
    key: 'filterStatus',
    set: function set(value) {
      value = value.toLowerCase();

      if (!_enums.JobMonitorFilter.values().includes(value)) {
        throw new TypeError('Expected value to be property of JobMonitorFilter. Possible options: ' + _enums.JobMonitorFilter.values().join(', '));
      }

      if (this._filterStatus !== value) {
        this._purge = true;
      }

      this._filterStatus = value;
    }

    /**
     * get the filter for the job monitor
     * @returns {string} - Job monitor filter
     */
    ,
    get: function get() {
      return this._filterStatus;
    }
  }, {
    key: 'filterTags',
    set: function set(value) {
      if (Array.isArray('array')) {
        var valueType = value.toString();

        if (valueType !== null && typeof value !== 'undefined') {
          valueType = value.constructor.name;
        }

        throw new TypeError('Expected value to be of type array got ' + valueType + '.');
      }

      this._filterTags = value;
    },
    get: function get() {
      return this._filterTags;
    }

    /**
     * Returns the time the ::update method was called for the last time.
     * @returns {Date} - Last update
     * @see JobMonitor#update
     */

  }, {
    key: 'lastUpdate',
    get: function get() {
      return new Date(this._lastUpdate * 1000);
    }

    /**
     * Get if long polling should be used
     * @returns {boolean} - If long polling should be used
     */

  }, {
    key: 'longPoll',
    get: function get() {
      return this._longPoll;
    }

    /**
     * Set if long polling should be used
     * @param {boolean} value - If long polling should be used
     */
    ,
    set: function set(value) {
      this._longPoll = Boolean(value);
    }
  }]);
  return JobMonitor;
}(); /*
      * BSD 3-Clause License
      *
      * Copyright (c) 2017, MapCreator
      * All rights reserved.
      *
      * Redistribution and use in source and binary forms, with or without
      * modification, are permitted provided that the following conditions are met:
      *
      *  Redistributions of source code must retain the above copyright notice, this
      *   list of conditions and the following disclaimer.
      *
      *  Redistributions in binary form must reproduce the above copyright notice,
      *   this list of conditions and the following disclaimer in the documentation
      *   and/or other materials provided with the distribution.
      *
      *  Neither the name of the copyright holder nor the names of its
      *   contributors may be used to endorse or promote products derived from
      *   this software without specific prior written permission.
      *
      * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
      * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
      * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
      * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
      * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
      * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */

exports.default = JobMonitor;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OAuth2 = __webpack_require__(102);

var _OAuth3 = _interopRequireDefault(_OAuth2);

var _OAuthToken = __webpack_require__(103);

var _OAuthToken2 = _interopRequireDefault(_OAuthToken);

var _StateContainer = __webpack_require__(126);

var _StateContainer2 = _interopRequireDefault(_StateContainer);

var _requests = __webpack_require__(112);

var _OAuthError = __webpack_require__(101);

var _OAuthError2 = _interopRequireDefault(_OAuthError);

var _node = __webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Implicit OAuth flow using redirection
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var ImplicitFlow = function (_OAuth) {
  (0, _inherits3.default)(ImplicitFlow, _OAuth);

  /**
   * Implicit authentication flow
   * @param {String} clientId - OAuth client id
   * @param {String} callbackUrl - callbackUrl for obtaining the token. This should be a
   *                               page with this script on it. If left empty the current
   *                               url will be used.
   * @param {Array<String>} scopes - A list of required scopes
   * @param {Boolean} useState - use state verification
   * @returns {void}
   */
  function ImplicitFlow(clientId) {
    var callbackUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var scopes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['*'];
    var useState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    (0, _classCallCheck3.default)(this, ImplicitFlow);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ImplicitFlow.__proto__ || Object.getPrototypeOf(ImplicitFlow)).call(this, clientId, scopes));

    if ((0, _node.isNode)()) {
      throw new Error(_this.constructor.name + ' can\'t be used under nodejs');
    }

    _this.path = '/oauth/authorize';

    _this.callbackUrl = callbackUrl;
    _this.useState = useState;

    if (!_this.callbackUrl) {
      // Drop the anchor (if any)
      _this.callbackUrl = window.location.toString().split('#')[0];
    }

    _this._anchorParams = ['access_token', 'token_type', 'expires_in'];

    if (_this.useState) {
      _this._anchorParams.push('state');
    }

    if (_this._anchorContainsOAuthResponse()) {
      var anchorParams = _this._getOAuthAnchorParams();

      _this._cleanAnchorParams();

      if (_this.useState && !_StateContainer2.default.validate(anchorParams['state'])) {
        throw Error('Invalid state in url');
      } else {
        _this.token = _OAuthToken2.default.fromResponseObject(anchorParams);
      }
    }
    return _this;
  }

  /**
   * Authenticate
   * @returns {Promise} - Promise resolves with {@link OAuthToken} and rejects with {@link OAuthError}
   */


  (0, _createClass3.default)(ImplicitFlow, [{
    key: 'authenticate',
    value: function authenticate() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (_this2.authenticated) {
          resolve(_this2.token);
        } else if (_this2._anchorContainsError()) {
          var err = _this2._getError();

          _this2._cleanAnchorParams();

          reject(err);
        } else {
          window.location = _this2._buildRedirectUrl();
        }
      });
    }

    /**
     * Builds the url for redirection
     * @returns {String} - Redirect url
     * @protected
     */

  }, {
    key: '_buildRedirectUrl',
    value: function _buildRedirectUrl() {
      var queryParams = {
        'client_id': this.clientId,
        'redirect_uri': this.callbackUrl,
        'response_type': 'token',
        'scope': this.scopes.join(' ')
      };

      if (this.useState) {
        queryParams['state'] = _StateContainer2.default.generate();
      }

      return this.host + this.path + '?' + (0, _requests.encodeQueryString)(queryParams);
    }

    /**
     * Builds an object containing all the anchor parameters
     * @param {String} query - Url hash
     * @returns {Object<String, String>} - Anchor parameters
     * @protected
     */

  }, {
    key: '_getAnchorParams',
    value: function _getAnchorParams() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.hash;

      var out = {};

      query = query.replace(/^#\/?/g, '');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = query.split('&')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var raw = _step.value;

          var pair = raw.split('=').map(decodeURIComponent);

          out[pair[0]] = pair[1];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return out;
    }

    /**
     * Fetch OAuth anchor params
     * @param {Object<String, String>} query - Optional override for the query to analyse, defaults to {@link ImplicitFlow#_getAnchorParams}
     * @returns {Object<String, String>} - List of OAuth anchor parameters
     * @protected
     */

  }, {
    key: '_getOAuthAnchorParams',
    value: function _getOAuthAnchorParams() {
      var _this3 = this;

      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getAnchorParams();

      return Object.keys(query).filter(function (key) {
        return _this3._anchorParams.includes(key);
      }).reduce(function (obj, key) {
        obj[key] = query[key];
        return obj;
      }, {});
    }

    /**
     * Remove OAuth related anchor parameters
     * @returns {void}
     * @protected
     */

  }, {
    key: '_cleanAnchorParams',
    value: function _cleanAnchorParams() {
      var anchorParams = this._getAnchorParams();
      var targets = this._anchorParams;

      // Just in case
      targets.push('state', 'error');

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = targets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;

          // Should silently fail when key doesn't exist
          delete anchorParams[key];
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      window.location.hash = (0, _requests.encodeQueryString)(anchorParams);
    }

    /**
     * Test if the anchor contains an OAuth response
     * @returns {Boolean} - if anchor tested positive for containing an OAuth response
     * @protected
     */

  }, {
    key: '_anchorContainsOAuthResponse',
    value: function _anchorContainsOAuthResponse() {
      var queryKeys = Object.keys(this._getOAuthAnchorParams());

      // Check if all the params are in the anchor
      return this._anchorParams.reduce(function (output, key) {
        return output && queryKeys.includes(key);
      }, true);
    }

    /**
     * Test if the anchor contains an OAuth error
     * @returns {Boolean} - if anchor tested positive for containing an OAuth error
     * @protected
     */

  }, {
    key: '_anchorContainsError',
    value: function _anchorContainsError() {
      return Boolean(this._getAnchorParams()['error']);
    }

    /**
     * Get and return the error in the anchor
     * @returns {OAuthError} - OAuthError object
     * @protected
     */

  }, {
    key: '_getError',
    value: function _getError() {
      if (!this._anchorContainsError()) {
        throw Error('No OAuthError found in anchor');
      }

      var params = this._getAnchorParams();

      return new _OAuthError2.default(params['error'], params['message']);
    }
  }]);
  return ImplicitFlow;
}(_OAuth3.default);

exports.default = ImplicitFlow;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OAuthError = __webpack_require__(101);

var _OAuthError2 = _interopRequireDefault(_OAuthError);

var _StorageManager = __webpack_require__(104);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _ImplicitFlow2 = __webpack_require__(210);

var _ImplicitFlow3 = _interopRequireDefault(_ImplicitFlow2);

var _OAuthToken = __webpack_require__(103);

var _OAuthToken2 = _interopRequireDefault(_OAuthToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Implicit OAuth flow using a pop-up.
 */
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var ImplicitFlowPopup = function (_ImplicitFlow) {
  (0, _inherits3.default)(ImplicitFlowPopup, _ImplicitFlow);

  /**
   * Implicit pop-up authentication flow
   * @param {String} clientId - OAuth client id
   * @param {String} callbackUrl - callbackUrl for obtaining the token. This should be a
   *                               page with this script on it. If left empty the current
   *                               url will be used.
   * @param {Array<String>} scopes - A list of required scopes
   * @param {Boolean} useState - use state verification
   * @param {String} windowOptions - optional window options for the pop-up window
   * @returns {void}
   */
  function ImplicitFlowPopup(clientId) {
    var callbackUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var scopes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['*'];
    var useState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var windowOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "width=800, height=600";
    (0, _classCallCheck3.default)(this, ImplicitFlowPopup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ImplicitFlowPopup.__proto__ || Object.getPrototypeOf(ImplicitFlowPopup)).call(this, clientId, callbackUrl, scopes, useState));

    _this.windowOptions = windowOptions;
    _this._storage = _StorageManager2.default.best;

    if (window.name === ImplicitFlowPopup.popupWindowName) {
      throw new Error('We\'re a flow popup');
    }
    return _this;
  }

  /**
   * Popup window name
   * @returns {String} - window.name of the created pop-up
   * @constant
   */


  (0, _createClass3.default)(ImplicitFlowPopup, [{
    key: 'authenticate',


    /**
     * Authenticate
     * @returns {Promise} - Promise resolves with {@link OAuthToken} and rejects with {@link OAuthError}
     */
    value: function authenticate() {
      var _this2 = this;

      if (window.name === ImplicitFlowPopup.popupWindowName) {
        return new Promise(function () {});
      }

      // Should be super.super.authenticate() :/
      if (this.authenticated) {
        return new Promise(function (resolve) {
          resolve(_this2.token);
        });
      }

      return new Promise(function (resolve, reject) {
        var popup = window.open(_this2._buildRedirectUrl(), ImplicitFlowPopup.popupWindowName, _this2.windowOptions);

        var ticker = setInterval(function () {
          if (popup.closed) {
            reject(new _OAuthError2.default('window_closed', 'Pop-up window was closed before data could be extracted'));
          }

          var done = false;

          try {
            done = !['', 'about:blank'].includes(popup.location.href);
          } catch (e) {
            // Nothing
          }

          if (done) {
            clearInterval(ticker);

            var data = _this2._getAnchorParams(popup.location.hash);

            popup.close();

            if (data.error) {
              reject(new _OAuthError2.default(data.error, data.message));
            } else {
              resolve(_this2.token = _OAuthToken2.default.fromResponseObject(data));
            }
          }
        }, 250);
      });
    }
  }], [{
    key: 'popupWindowName',
    get: function get() {
      return 'm4n_api_auth';
    }
  }]);
  return ImplicitFlowPopup;
}(_ImplicitFlow3.default);

exports.default = ImplicitFlowPopup;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OAuthError = __webpack_require__(101);

var _OAuthError2 = _interopRequireDefault(_OAuthError);

var _node = __webpack_require__(108);

var _requests = __webpack_require__(112);

var _OAuth2 = __webpack_require__(102);

var _OAuth3 = _interopRequireDefault(_OAuth2);

var _OAuthToken = __webpack_require__(103);

var _OAuthToken2 = _interopRequireDefault(_OAuthToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Password authentication flow
 */
var PasswordFlow = function (_OAuth) {
  (0, _inherits3.default)(PasswordFlow, _OAuth);

  /**
   * @param {string} clientId - OAuth client id
   * @param {string} secret - OAuth secret
   * @param {string} username - Valid username (email)
   * @param {string} password - Valid password
   * @param {Array<string>} scopes - A list of required scopes
   */
  function PasswordFlow(clientId, secret, username, password) {
    var scopes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['*'];
    (0, _classCallCheck3.default)(this, PasswordFlow);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PasswordFlow.__proto__ || Object.getPrototypeOf(PasswordFlow)).call(this, clientId, scopes));

    _this._secret = secret;
    _this._username = username;
    _this._password = password;

    _this._path = '/oauth/token';

    // Because the client requires a secret HTTPS is highly recommended
    if (!(0, _node.isNode)()) {
      console.warn('Using PasswordFlow in the browser is unrecommended. More information: https://nnmm.nl/?MXF');

      if (window.location.protocol !== 'https:') {
        console.warn('Page was not loaded using https. You\'re most likely leaking secrets right now');
      }
    }
    return _this;
  }

  /**
   * it's a secret :o (client secret)
   * @returns {String} - secret
   */


  (0, _createClass3.default)(PasswordFlow, [{
    key: 'authenticate',


    /**
     * Authenticate
     * @returns {Promise} - Promise resolves with {@link OAuthToken} and rejects with {@link OAuthError}
     */
    value: function authenticate() {
      var _this2 = this;

      var url = this.host + this._path;
      var query = {
        'grant_type': 'password',
        'client_id': this.clientId,
        'client_secret': this._secret,
        'username': this.username,
        'password': this.password,
        'scope': this.scopes.join(' ')
      };

      var init = {
        method: 'POST',
        body: (0, _requests.encodeQueryString)(query),
        mode: 'cors',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      return (0, _requests.fetch)(url, init).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.error) {
          throw new _OAuthError2.default(data.error, data.message);
        }

        _this2.token = _OAuthToken2.default.fromResponseObject(data);
        _this2.token.scopes = _this2.scopes;

        return _this2.token;
      });
    }
  }, {
    key: 'secret',
    get: function get() {
      return this._secret;
    }

    /**
     * Set client secret
     * @param {String} value - secret
     */
    ,
    set: function set(value) {
      this._secret = value;
    }

    /**
     * Get the username for authentication
     * @returns {String} - Username (email)
     */

  }, {
    key: 'username',
    get: function get() {
      return this._username;
    }

    /**
     * Get the username for authentication
     * @param {String} value - Username (email)
     */
    ,
    set: function set(value) {
      this._username = value;
    }

    /**
     * Get the password
     * @returns {String} - Password
     */

  }, {
    key: 'password',
    get: function get() {
      return this._password;
    }

    /**
     * Set the password
     * @param {String} value - password
     */
    ,
    set: function set(value) {
      this._password = value;
    }

    /**
     * OAuth path
     * @returns {String} - OAuth path
     */

  }, {
    key: 'path',
    get: function get() {
      return this._path;
    }

    /**
     * OAuth path
     * @param {String} value - OAuth path
     */
    ,
    set: function set(value) {
      this._path = value;
    }
  }]);
  return PasswordFlow;
}(_OAuth3.default); /*
                     * BSD 3-Clause License
                     *
                     * Copyright (c) 2017, MapCreator
                     * All rights reserved.
                     *
                     * Redistribution and use in source and binary forms, with or without
                     * modification, are permitted provided that the following conditions are met:
                     *
                     *  Redistributions of source code must retain the above copyright notice, this
                     *   list of conditions and the following disclaimer.
                     *
                     *  Redistributions in binary form must reproduce the above copyright notice,
                     *   this list of conditions and the following disclaimer in the documentation
                     *   and/or other materials provided with the distribution.
                     *
                     *  Neither the name of the copyright holder nor the names of its
                     *   contributors may be used to endorse or promote products derived from
                     *   this software without specific prior written permission.
                     *
                     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                     * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                     * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                     * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                     * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                     * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                     * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                     * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                     */

exports.default = PasswordFlow;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationError = exports.UnsupportedCrudError = exports.StaticClassError = exports.OAuthError = exports.NodeError = exports.ApiError = undefined;

var _AbstractError = __webpack_require__(96);

Object.keys(_AbstractError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AbstractError[key];
    }
  });
});

var _ApiError2 = __webpack_require__(98);

var _ApiError3 = _interopRequireDefault(_ApiError2);

var _NodeError2 = __webpack_require__(214);

var _NodeError3 = _interopRequireDefault(_NodeError2);

var _OAuthError2 = __webpack_require__(101);

var _OAuthError3 = _interopRequireDefault(_OAuthError2);

var _StaticClassError2 = __webpack_require__(106);

var _StaticClassError3 = _interopRequireDefault(_StaticClassError2);

var _UnsupportedCrudError2 = __webpack_require__(215);

var _UnsupportedCrudError3 = _interopRequireDefault(_UnsupportedCrudError2);

var _ValidationError2 = __webpack_require__(99);

var _ValidationError3 = _interopRequireDefault(_ValidationError2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

exports.ApiError = _ApiError3.default;
exports.NodeError = _NodeError3.default;
exports.OAuthError = _OAuthError3.default;
exports.StaticClassError = _StaticClassError3.default;
exports.UnsupportedCrudError = _UnsupportedCrudError3.default;
exports.ValidationError = _ValidationError3.default;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Invoked upon nodejs specific errors
 */
var NodeError = function (_Error) {
  (0, _inherits3.default)(NodeError, _Error);

  function NodeError() {
    (0, _classCallCheck3.default)(this, NodeError);
    return (0, _possibleConstructorReturn3.default)(this, (NodeError.__proto__ || Object.getPrototypeOf(NodeError)).apply(this, arguments));
  }

  return NodeError;
}(Error);

exports.default = NodeError;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(25);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(77);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2017, MapCreator
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 *  Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Thrown upon invocation of an unsupported resources method
 */
var UnsupportedCrudError = function (_Error) {
  (0, _inherits3.default)(UnsupportedCrudError, _Error);

  function UnsupportedCrudError() {
    (0, _classCallCheck3.default)(this, UnsupportedCrudError);
    return (0, _possibleConstructorReturn3.default)(this, (UnsupportedCrudError.__proto__ || Object.getPrototypeOf(UnsupportedCrudError)).apply(this, arguments));
  }

  return UnsupportedCrudError;
}(Error);

exports.default = UnsupportedCrudError;

/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.browser.js.map
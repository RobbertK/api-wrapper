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
 * hash:03a6c76564ef143f6f0d, chunkhash:a2abde30620e5c53ba56, name:bundle, version:v1.4.39
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
})(typeof window === "undefined" ? global : window, function() {
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

var _AbstractError = __webpack_require__(16);

Object.keys(_AbstractError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AbstractError[key];
    }
  });
});

var _Maps4News2 = __webpack_require__(17);

var _Maps4News3 = _interopRequireDefault(_Maps4News2);

var _RequestParameters2 = __webpack_require__(44);

var _RequestParameters3 = _interopRequireDefault(_RequestParameters2);

var _StorageManager2 = __webpack_require__(26);

var _StorageManager3 = _interopRequireDefault(_StorageManager2);

var _JobMonitor2 = __webpack_require__(95);

var _JobMonitor3 = _interopRequireDefault(_JobMonitor2);

var _Enum2 = __webpack_require__(3);

var _Enum3 = _interopRequireDefault(_Enum2);

var _OAuth2 = __webpack_require__(23);

var _OAuth3 = _interopRequireDefault(_OAuth2);

var _ImplicitFlow2 = __webpack_require__(96);

var _ImplicitFlow3 = _interopRequireDefault(_ImplicitFlow2);

var _ImplicitFlowPopup2 = __webpack_require__(97);

var _ImplicitFlowPopup3 = _interopRequireDefault(_ImplicitFlowPopup2);

var _PasswordFlow2 = __webpack_require__(98);

var _PasswordFlow3 = _interopRequireDefault(_PasswordFlow2);

var _DummyFlow2 = __webpack_require__(21);

var _DummyFlow3 = _interopRequireDefault(_DummyFlow2);

var _ApiError2 = __webpack_require__(19);

var _ApiError3 = _interopRequireDefault(_ApiError2);

var _ValidationError2 = __webpack_require__(20);

var _ValidationError3 = _interopRequireDefault(_ValidationError2);

var _StaticClassError2 = __webpack_require__(28);

var _StaticClassError3 = _interopRequireDefault(_StaticClassError2);

var _resources2 = __webpack_require__(53);

var _resources = _interopRequireWildcard(_resources2);

var _helpers2 = __webpack_require__(37);

var _helpers = _interopRequireWildcard(_helpers2);

var _ResourceLister2 = __webpack_require__(51);

var _ResourceLister3 = _interopRequireDefault(_ResourceLister2);

var _errors2 = __webpack_require__(99);

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

var version = exports.version = "v1.4.39";

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

var _JobMonitorFilter = __webpack_require__(14);

Object.defineProperty(exports, 'JobMonitorFilter', {
  enumerable: true,
  get: function get() {
    return _JobMonitorFilter.JobMonitorFilter;
  }
});

var _ResultStatus = __webpack_require__(15);

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

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _case = __webpack_require__(8);

var _reflection = __webpack_require__(9);

var _Unobservable2 = __webpack_require__(13);

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
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("case");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.isParentOf = isParentOf;
exports.getTypeName = getTypeName;
exports.mix = mix;

var _Trait = __webpack_require__(10);

var _Trait2 = _interopRequireDefault(_Trait);

var _hash = __webpack_require__(11);

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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fnv32b = fnv32b;
exports.hashObject = hashObject;

var _jsonStableStringify = __webpack_require__(12);

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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("json-stable-stringify");

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobMonitorFilter = undefined;

var _Enum = __webpack_require__(3);

var _Enum2 = _interopRequireDefault(_Enum);

var _ResultStatus = __webpack_require__(15);

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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractMethodError = exports.AbstractClassError = exports.AbstractError = undefined;

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = __webpack_require__(18);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _enums = __webpack_require__(1);

var _ApiError = __webpack_require__(19);

var _ApiError2 = _interopRequireDefault(_ApiError);

var _ValidationError = __webpack_require__(20);

var _ValidationError2 = _interopRequireDefault(_ValidationError);

var _DummyFlow = __webpack_require__(21);

var _DummyFlow2 = _interopRequireDefault(_DummyFlow);

var _OAuth = __webpack_require__(23);

var _OAuth2 = _interopRequireDefault(_OAuth);

var _OAuthToken = __webpack_require__(34);

var _OAuthToken2 = _interopRequireDefault(_OAuthToken);

var _ResourceProxy = __webpack_require__(42);

var _ResourceProxy2 = _interopRequireDefault(_ResourceProxy);

var _SimpleResourceProxy = __webpack_require__(46);

var _SimpleResourceProxy2 = _interopRequireDefault(_SimpleResourceProxy);

var _ResourceCache = __webpack_require__(49);

var _ResourceCache2 = _interopRequireDefault(_ResourceCache);

var _resources = __webpack_require__(53);

var _ResourceBase2 = __webpack_require__(52);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

var _hash = __webpack_require__(11);

var _Logger = __webpack_require__(94);

var _Logger2 = _interopRequireDefault(_Logger);

var _node = __webpack_require__(30);

var _reflection = __webpack_require__(9);

var _requests = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base API class
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

var Maps4News = function () {
  /**
   * @param {OAuth|string} auth - Authentication flow
   * @param {string} host - Remote API host
   */
  function Maps4News() {
    var auth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _DummyFlow2.default();
    var host = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "https://api.maps4news.com";
    (0, _classCallCheck3.default)(this, Maps4News);

    if (typeof auth === 'string') {
      var token = auth;

      auth = new _DummyFlow2.default();

      auth.token = new _OAuthToken2.default(token, 'Bearer', new Date('2100-01-01T01:00:00'), ['*']);
    }

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

    this._cache = new _ResourceCache2.default(this.defaults.cacheSeconds, this.defaults.dereferenceCache);
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
     *    static get resourceName() {
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
          key: 'resourcePath',
          get: function get() {
            return String(Target);
          }
        }], [{
          key: 'resourceName',
          get: function get() {
            return 'anonymous';
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
      this.auth.logout();
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
}();

exports.default = Maps4News;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ApiError2 = __webpack_require__(19);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OAuthError = __webpack_require__(22);

var _OAuthError2 = _interopRequireDefault(_OAuthError);

var _OAuth2 = __webpack_require__(23);

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

  /**
   * @param {String} [clientId=] - OAuth client id
   * @param {Array<String>} scopes - A list of required scopes
   * @returns {void}
   */
  function DummyFlow() {
    var clientId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var scopes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['*'];
    (0, _classCallCheck3.default)(this, DummyFlow);
    return (0, _possibleConstructorReturn3.default)(this, (DummyFlow.__proto__ || Object.getPrototypeOf(DummyFlow)).call(this, clientId, scopes));
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(24);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(25);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _AbstractError = __webpack_require__(16);

var _ApiError = __webpack_require__(19);

var _ApiError2 = _interopRequireDefault(_ApiError);

var _OAuthError = __webpack_require__(22);

var _OAuthError2 = _interopRequireDefault(_OAuthError);

var _StorageManager = __webpack_require__(26);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _OAuthToken = __webpack_require__(34);

var _OAuthToken2 = _interopRequireDefault(_OAuthToken);

var _StateContainer = __webpack_require__(40);

var _StateContainer2 = _interopRequireDefault(_StateContainer);

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
    this.token = clientId !== null ? _OAuthToken2.default.recover() : null;
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
     * Invalidates the session token
     * @async
     * @returns {Promise<void>} - Promise that resolves with no value
     * @throws {OAuthError} - If de-authentication fails
     * @throws {ApiError} - If the api returns errors
     */

  }, {
    key: 'logout',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var url, init, response, body, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.token) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                url = this.host + '/oauth/logout';
                init = {
                  method: 'POST',
                  mode: 'cors',
                  redirect: 'follow',
                  headers: {
                    'Accept': 'application/json',
                    'Authorization': this.token.toString()
                  }
                };
                _context.prev = 4;
                _context.next = 7;
                return fetch(url, init);

              case 7:
                response = _context.sent;
                _context.next = 10;
                return response.text();

              case 10:
                body = _context.sent;
                data = JSON.parse(body);

                if (data.success) {
                  _context.next = 14;
                  break;
                }

                throw new _ApiError2.default(data.error.type, data.error.message, response.status);

              case 14:
                if (response.ok) {
                  _context.next = 16;
                  break;
                }

                throw new _OAuthError2.default('logout_fail', 'Logout failed:\n' + body);

              case 16:
                _context.prev = 16;

                this.forget();
                return _context.finish(16);

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[4,, 16, 19]]);
      }));

      function logout() {
        return _ref.apply(this, arguments);
      }

      return logout;
    }()

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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _StaticClass2 = __webpack_require__(27);

var _StaticClass3 = _interopRequireDefault(_StaticClass2);

var _CookiesDriver = __webpack_require__(29);

var _CookiesDriver2 = _interopRequireDefault(_CookiesDriver);

var _FileDriver = __webpack_require__(32);

var _FileDriver2 = _interopRequireDefault(_FileDriver);

var _LocalStorageDriver = __webpack_require__(33);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _StaticClassError = __webpack_require__(28);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _node = __webpack_require__(30);

var _DataStoreContract2 = __webpack_require__(31);

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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _AbstractError = __webpack_require__(16);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _node = __webpack_require__(30);

var _DataStoreContract2 = __webpack_require__(31);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DataStoreContract2 = __webpack_require__(31);

var _DataStoreContract3 = _interopRequireDefault(_DataStoreContract2);

var _node = __webpack_require__(30);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _StorageManager = __webpack_require__(26);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _requests = __webpack_require__(35);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormData = exports.Headers = exports.Response = exports.Request = exports.fetch = undefined;

var _typeof2 = __webpack_require__(18);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.encodeQueryString = encodeQueryString;
exports.downloadFile = downloadFile;

var _fetchPonyfill = __webpack_require__(36);

var _fetchPonyfill2 = _interopRequireDefault(_fetchPonyfill);

var _ApiError = __webpack_require__(19);

var _ApiError2 = _interopRequireDefault(_ApiError);

var _helpers = __webpack_require__(37);

var _node = __webpack_require__(30);

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
    return __webpack_require__(39);
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
      var disposition = res.headers.get('Content-Disposition');

      if (disposition && disposition.indexOf('attachment') !== -1) {
        var matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(disposition);

        if (matches != null && matches[1]) {
          out.filename = matches[1].replace(/['"]/g, '');
        }
      } else {
        out.filename = 'Unknown Filename.zip';
      }

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
/* 36 */
/***/ (function(module, exports) {

module.exports = require("fetch-ponyfill");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(38);

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
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("formdata-polyfill");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _StorageManager = __webpack_require__(26);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _StaticClass2 = __webpack_require__(27);

var _StaticClass3 = _interopRequireDefault(_StaticClass2);

var _uuid = __webpack_require__(41);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _StaticClass2 = __webpack_require__(27);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(43);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = __webpack_require__(18);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _RequestParameters = __webpack_require__(44);

var _RequestParameters2 = _interopRequireDefault(_RequestParameters);

var _requests = __webpack_require__(35);

var _SimpleResourceProxy2 = __webpack_require__(46);

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

      var deleted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _RequestParameters2.default.deleted;

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
/* 43 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(18);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _case = __webpack_require__(8);

var _events = __webpack_require__(45);

var _enums = __webpack_require__(1);

var _hash = __webpack_require__(11);

var _reflection = __webpack_require__(9);

var _requests = __webpack_require__(35);

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
      var preventEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var _name = '_' + name;

      value = RequestParameters['_validate' + (0, _case.pascal)(name)](value);
      (this || {})[_name] = value; // Weird syntax confuses esdoc

      if (!preventEvent) {
        /**
         * Change event.
         *
         * @event RequestParameters#change
         * @type {Array<object>}
         * @property {string} name - Parameter name
         * @property {*} value - New value
         */
        this.emit('change', [{ name: name, value: value }]);
        this.emit('change:' + name, value);
      }

      return value;
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

        // Cast search values
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

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(data.search)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _key = _step2.value;

          if (typeof data.search[_key] === 'boolean') {
            data.search[_key] = Number(data.search[_key]);
          }

          if (data.search[_key] === null) {
            data.search[_key] = '';
          }
        }

        // Overwrite using extra properties
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

      var extra = this._resolve('extra');

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.keys(extra)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _key2 = _step3.value;

          data[_key2] = extra[_key2];
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
     * @returns {Object[]} - Array containing the updated values
     * @todo update JSDoc
     */
    value: function apply(params) {
      if (params instanceof RequestParameters) {
        params = params.toObject();
      }

      var out = [];

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.keys(params)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var key = _step4.value;

          var Key = (0, _case.camel)(key);

          if (key[0] === '_' || !RequestParameters.keys().includes(Key)) {
            continue;
          }

          out.push({
            name: Key,
            value: this._update(Key, params[key], true)
          });
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

      this.emit('change', out);

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = out[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _ref = _step5.value;
          var name = _ref.name;
          var value = _ref.value;

          this.emit('change:' + name, value);
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
     * Rows per page
     * @param {Number} value - Per page
     */

  }, {
    key: 'perPage',
    get: function get() {
      return this._resolve('perPage');
    }

    /**
     * Get pagination offset
     * @returns {Number} - Offset
     * @throws TypeError
     */
    ,
    set: function set(value) {
      this._update('perPage', value);
    }

    /**
     * Pagination offset
     * @param {Number} value - Offset
     */

  }, {
    key: 'offset',
    get: function get() {
      return this._resolve('offset');
    }

    /**
     * Search query
     * @returns {Object<String, String|Array<String>>} - Query
     * @throws TypeError
     */
    ,
    set: function set(value) {
      this._update('offset', value);
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

      if (value < 0) {
        throw new TypeError('Page must be a positive number');
      }

      if (Number.isNaN(value) || !Number.isFinite(value)) {
        throw new TypeError('Page must be a real number');
      }

      if (Math.round(value) !== value) {
        throw new TypeError('Page must be a natural number');
      }

      return Math.round(value);
    }
  }, {
    key: '_validatePerPage',
    value: function _validatePerPage(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Expected per page to be of type \'Number\' instead got \'' + (0, _reflection.getTypeName)(value) + '\'');
      }

      if (value <= 0) {
        throw new TypeError('Per page must be greater than zero');
      }

      if (Number.isNaN(value) || !Number.isFinite(value)) {
        throw new TypeError('Per page must be a real number');
      }

      if (Math.round(value) !== value) {
        throw new TypeError('Per page must be a natural number');
      }

      // Upper limit is 50 by default
      value = Math.min(RequestParameters.maxPerPage, value);

      return value;
    }
  }, {
    key: '_validateOffset',
    value: function _validateOffset(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Expected offset to be of type \'Number\' instead got \'' + (0, _reflection.getTypeName)(value) + '\'');
      }

      if (value < 0) {
        throw new TypeError('Offset must be a positive number');
      }

      if (Number.isNaN(value) || !Number.isFinite(value)) {
        throw new TypeError('Offset must be a real number');
      }

      if (Math.round(value) !== value) {
        throw new TypeError('Offset must be a natural number');
      }

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

      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = Object.keys(value)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var key = _step6.value;

          key = normalize(key);
          value[key] = normalize(value[key]);

          if (typeof key !== 'string') {
            throw new TypeError('Expected key to be of type "String" got "' + (0, _reflection.getTypeName)(key) + '"');
          }

          if (Array.isArray(value[key])) {
            if (value[key].length > 0) {
              var _iteratorNormalCompletion7 = true;
              var _didIteratorError7 = false;
              var _iteratorError7 = undefined;

              try {
                for (var _iterator7 = value[key][Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                  var query = _step7.value;

                  if (!['string', 'number', 'boolean'].includes(typeof query === 'undefined' ? 'undefined' : (0, _typeof3.default)(query)) && query !== null) {
                    throw new TypeError('Expected query for "' + key + '" to be of type "String", "Boolean", "Number" or "null" got "' + (0, _reflection.getTypeName)(query) + '"');
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
            } else {
              // Drop empty nodes
              delete value[key];
            }
          } else if (value[key] === null) {
            delete value[key];
          } else if (!['string', 'number', 'boolean'].includes((0, _typeof3.default)(value[key])) && value[key] !== null) {
            throw new TypeError('Expected query value to be of type "String", "Boolean", "Number", "Array" or "null" got "' + (0, _reflection.getTypeName)(value[key]) + '"');
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
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = RequestParameters.keys()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var key = _step8.value;

          delete RequestParameters['_' + key];
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
     * Default pagination offset
     * @returns {Number} - Offset
     */
    ,
    set: function set(value) {
      RequestParameters._perPage = RequestParameters._validatePerPage(value);
    }

    /**
     * Default pagination offset
     * @param {Number} value - Offset
     */

  }, {
    key: 'offset',
    get: function get() {
      return RequestParameters._offset || 0;
    }

    /**
     * Gets the maximum allowed value for perPage
     * Some users will have a special permission that allows them to fetch more than 50 resources at once
     * @returns {Number} - Maximum amount of resources per page
     */
    ,
    set: function set(value) {
      RequestParameters._offset = RequestParameters._validateOffset(value);
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
/* 45 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(18);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _PaginatedResourceListing = __webpack_require__(47);

var _PaginatedResourceListing2 = _interopRequireDefault(_PaginatedResourceListing);

var _RequestParameters = __webpack_require__(44);

var _RequestParameters2 = _interopRequireDefault(_RequestParameters);

var _ResourceLister = __webpack_require__(51);

var _ResourceLister2 = _interopRequireDefault(_ResourceLister);

var _ResourceBase = __webpack_require__(52);

var _ResourceBase2 = _interopRequireDefault(_ResourceBase);

var _reflection = __webpack_require__(9);

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
     * @deprecated
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Maps4News = __webpack_require__(17);

var _Maps4News2 = _interopRequireDefault(_Maps4News);

var _PaginatedResourceWrapper = __webpack_require__(48);

var _PaginatedResourceWrapper2 = _interopRequireDefault(_PaginatedResourceWrapper);

var _RequestParameters = __webpack_require__(44);

var _RequestParameters2 = _interopRequireDefault(_RequestParameters);

var _reflection = __webpack_require__(9);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _PaginatedResourceListing = __webpack_require__(47);

var _PaginatedResourceListing2 = _interopRequireDefault(_PaginatedResourceListing);

var _ResourceCache = __webpack_require__(49);

var _ResourceCache2 = _interopRequireDefault(_ResourceCache);

var _hash = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used for wrapping {@link PaginatedResourceListing} to make it spa friendly
 * @todo Allow for manual cache updates, ex: a resource has been modified, deleted, created
 * @deprecated
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
    this._localCache = new _ResourceCache2.default(this.api.defaults.cacheSeconds, this.api.defaults.dereferenceCache);
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _mitt = __webpack_require__(50);

var _mitt2 = _interopRequireDefault(_mitt);

var _Unobservable2 = __webpack_require__(13);

var _Unobservable3 = _interopRequireDefault(_Unobservable2);

var _uuid = __webpack_require__(41);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used for caching resources. Requires the resource to have an unique id field
 * @see {@link PaginatedResourceWrapper}
 * @deprecated
 * @todo Add periodic data refreshing while idle, most likely implemented in cache (maybe v1/resource?timestamp=123 where it will give modified records since)
 */
var ResourceCache = function (_Unobservable) {
  (0, _inherits3.default)(ResourceCache, _Unobservable);

  function ResourceCache(cacheTime, dereference) {
    (0, _classCallCheck3.default)(this, ResourceCache);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ResourceCache.__proto__ || Object.getPrototypeOf(ResourceCache)).call(this));

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
        Object.keys(this._storage).map(function (x) {
          return _this3.revalidate(x);
        });
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
/* 50 */
/***/ (function(module, exports) {

module.exports = require("mitt");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(18);

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = __webpack_require__(38);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = __webpack_require__(24);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(25);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _case = __webpack_require__(8);

var _events = __webpack_require__(45);

var _Maps4News = __webpack_require__(17);

var _Maps4News2 = _interopRequireDefault(_Maps4News);

var _RequestParameters = __webpack_require__(44);

var _RequestParameters2 = _interopRequireDefault(_RequestParameters);

var _ResourceBase = __webpack_require__(52);

var _ResourceBase2 = _interopRequireDefault(_ResourceBase);

var _reflection = __webpack_require__(9);

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

        if (autoMaxRows) {
          this.maxRows++;

          this._data.push(row);
        }
      }
    }

    /**
     * Same as `this.maxRows += this.parameters.perPage`
     * @param {number} [rows=parameters.perPage] - Amount to increment maxRows with
     * @returns {void}
     */

  }, {
    key: 'loadMore',
    value: function loadMore() {
      var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parameters.perPage;

      this.maxRows += rows;
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _case = __webpack_require__(8);

var _AbstractError = __webpack_require__(16);

var _Maps4News = __webpack_require__(17);

var _Maps4News2 = _interopRequireDefault(_Maps4News);

var _SimpleResourceProxy = __webpack_require__(46);

var _SimpleResourceProxy2 = _interopRequireDefault(_SimpleResourceProxy);

var _reflection = __webpack_require__(9);

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
        var resource = Target.resourceName.replace(/s+$/, '');

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
      return '/' + this.constructor.resourceName + '/{id}';
    }

    /**
     * Resource name
     * @returns {String} - Resource name
     * @todo move to constructor
     * @abstract
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
    key: 'resourceName',
    get: function get() {
      throw new _AbstractError.AbstractError();
    }

    /**
     * Returns the url key of the resource
     * @returns {String} - Resource key
     */

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = exports.User = exports.Tag = exports.SvgSet = exports.Svg = exports.Role = exports.PlaceName = exports.Permission = exports.Organisation = exports.Notification = exports.MapstyleSet = exports.Mapstyle = exports.Layer = exports.Language = exports.JobType = exports.JobShare = exports.JobRevision = exports.JobResult = exports.JobMonitorRow = exports.Job = exports.InsetMap = exports.Highlight = exports.FontFamily = exports.Font = exports.Feature = exports.Faq = exports.Domain = exports.DimensionSet = exports.Dimension = exports.Contract = exports.Color = exports.Choropleth = undefined;

var _Choropleth2 = __webpack_require__(54);

var _Choropleth3 = _interopRequireDefault(_Choropleth2);

var _Color2 = __webpack_require__(55);

var _Color3 = _interopRequireDefault(_Color2);

var _Contract2 = __webpack_require__(61);

var _Contract3 = _interopRequireDefault(_Contract2);

var _Dimension2 = __webpack_require__(64);

var _Dimension3 = _interopRequireDefault(_Dimension2);

var _DimensionSet2 = __webpack_require__(62);

var _DimensionSet3 = _interopRequireDefault(_DimensionSet2);

var _Domain2 = __webpack_require__(66);

var _Domain3 = _interopRequireDefault(_Domain2);

var _Faq2 = __webpack_require__(88);

var _Faq3 = _interopRequireDefault(_Faq2);

var _Feature2 = __webpack_require__(67);

var _Feature3 = _interopRequireDefault(_Feature2);

var _Font2 = __webpack_require__(69);

var _Font3 = _interopRequireDefault(_Font2);

var _FontFamily2 = __webpack_require__(68);

var _FontFamily3 = _interopRequireDefault(_FontFamily2);

var _Highlight2 = __webpack_require__(89);

var _Highlight3 = _interopRequireDefault(_Highlight2);

var _InsetMap2 = __webpack_require__(90);

var _InsetMap3 = _interopRequireDefault(_InsetMap2);

var _Job2 = __webpack_require__(81);

var _Job3 = _interopRequireDefault(_Job2);

var _JobMonitorRow2 = __webpack_require__(91);

var _JobMonitorRow3 = _interopRequireDefault(_JobMonitorRow2);

var _JobResult2 = __webpack_require__(82);

var _JobResult3 = _interopRequireDefault(_JobResult2);

var _JobRevision2 = __webpack_require__(83);

var _JobRevision3 = _interopRequireDefault(_JobRevision2);

var _JobShare2 = __webpack_require__(70);

var _JobShare3 = _interopRequireDefault(_JobShare2);

var _JobType2 = __webpack_require__(71);

var _JobType3 = _interopRequireDefault(_JobType2);

var _Language2 = __webpack_require__(84);

var _Language3 = _interopRequireDefault(_Language2);

var _Layer2 = __webpack_require__(72);

var _Layer3 = _interopRequireDefault(_Layer2);

var _Mapstyle2 = __webpack_require__(76);

var _Mapstyle3 = _interopRequireDefault(_Mapstyle2);

var _MapstyleSet2 = __webpack_require__(75);

var _MapstyleSet3 = _interopRequireDefault(_MapstyleSet2);

var _Notification2 = __webpack_require__(85);

var _Notification3 = _interopRequireDefault(_Notification2);

var _Organisation2 = __webpack_require__(59);

var _Organisation3 = _interopRequireDefault(_Organisation2);

var _Permission2 = __webpack_require__(86);

var _Permission3 = _interopRequireDefault(_Permission2);

var _PlaceName2 = __webpack_require__(93);

var _PlaceName3 = _interopRequireDefault(_PlaceName2);

var _Role2 = __webpack_require__(87);

var _Role3 = _interopRequireDefault(_Role2);

var _Svg2 = __webpack_require__(78);

var _Svg3 = _interopRequireDefault(_Svg2);

var _SvgSet2 = __webpack_require__(77);

var _SvgSet3 = _interopRequireDefault(_SvgSet2);

var _Tag2 = __webpack_require__(79);

var _Tag3 = _interopRequireDefault(_Tag2);

var _User2 = __webpack_require__(80);

var _User3 = _interopRequireDefault(_User2);

var _CrudBase = __webpack_require__(56);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _CrudSetBase = __webpack_require__(63);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _ResourceBase = __webpack_require__(52);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ResourceBase2 = __webpack_require__(52);

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

  (0, _createClass3.default)(Choropleth, null, [{
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase = __webpack_require__(56);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _OwnableResource = __webpack_require__(57);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(9);

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

  (0, _createClass3.default)(Color, null, [{
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _AbstractError = __webpack_require__(16);

var _ResourceBase2 = __webpack_require__(52);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OrganisationProxy = __webpack_require__(58);

var _OrganisationProxy2 = _interopRequireDefault(_OrganisationProxy);

var _Trait2 = __webpack_require__(10);

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reflection = __webpack_require__(9);

var _SimpleResourceProxy2 = __webpack_require__(46);

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
    var Organisation = __webpack_require__(59).default;

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
     * @param {function(new:ResourceBase)} Type - Resource type
     * @param {?String} path - Optional appended resource path, will guess if null
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     * @protected
     */

  }, {
    key: '_modifyLink',
    value: function _modifyLink(items, method, Type) {
      var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      if (!path) {
        var resource = Type.resourceName.replace(/s+$/, '');

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(24);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(25);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OwnedResourceProxy = __webpack_require__(60);

var _OwnedResourceProxy2 = _interopRequireDefault(_OwnedResourceProxy);

var _CrudBase2 = __webpack_require__(56);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _Color = __webpack_require__(55);

var _Color2 = _interopRequireDefault(_Color);

var _Contract = __webpack_require__(61);

var _Contract2 = _interopRequireDefault(_Contract);

var _DimensionSet = __webpack_require__(62);

var _DimensionSet2 = _interopRequireDefault(_DimensionSet);

var _Domain = __webpack_require__(66);

var _Domain2 = _interopRequireDefault(_Domain);

var _Feature = __webpack_require__(67);

var _Feature2 = _interopRequireDefault(_Feature);

var _FontFamily = __webpack_require__(68);

var _FontFamily2 = _interopRequireDefault(_FontFamily);

var _JobShare = __webpack_require__(70);

var _JobShare2 = _interopRequireDefault(_JobShare);

var _JobType = __webpack_require__(71);

var _JobType2 = _interopRequireDefault(_JobType);

var _Layer = __webpack_require__(72);

var _Layer2 = _interopRequireDefault(_Layer);

var _MapstyleSet = __webpack_require__(75);

var _MapstyleSet2 = _interopRequireDefault(_MapstyleSet);

var _SvgSet = __webpack_require__(77);

var _SvgSet2 = _interopRequireDefault(_SvgSet);

var _Tag = __webpack_require__(79);

var _Tag2 = _interopRequireDefault(_Tag);

var _User = __webpack_require__(80);

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
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._api.request(this.url + '/tree');

              case 2:
                data = _context.sent;
                return _context.abrupt('return', data.map(function (root) {
                  return _this2._parseTree(root);
                }));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTree() {
        return _ref.apply(this, arguments);
      }

      return getTree;
    }()
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
    key: 'fontFamilies',


    // Resource listing
    /**
     * Get a proxy for font families linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */
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
  }], [{
    key: 'resourceName',
    get: function get() {
      return 'organisations';
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(18);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _SimpleResourceProxy2 = __webpack_require__(46);

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

    var resource = Target.resourceName.replace(/s+$/, '');
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase2 = __webpack_require__(56);

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
  }], [{
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudSetBase = __webpack_require__(63);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _Dimension = __webpack_require__(64);

var _Dimension2 = _interopRequireDefault(_Dimension);

var _OwnableResource = __webpack_require__(57);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(9);

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
    key: '_Child',
    get: function get() {
      return _Dimension2.default;
    }
  }], [{
    key: 'resourceName',
    get: function get() {
      return 'dimension-sets';
    }
  }]);
  return DimensionSet;
}((0, _reflection.mix)(_CrudSetBase2.default, _OwnableResource2.default));

exports.default = DimensionSet;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _AbstractError = __webpack_require__(16);

var _CrudBase2 = __webpack_require__(56);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _case = __webpack_require__(8);

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudSetItemBase2 = __webpack_require__(65);

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

  (0, _createClass3.default)(Dimension, null, [{
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _AbstractError = __webpack_require__(16);

var _CrudBase2 = __webpack_require__(56);

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
      return this.constructor.resourceName.replace(/s$/, '_set_id');
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase2 = __webpack_require__(56);

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

  (0, _createClass3.default)(Domain, null, [{
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase = __webpack_require__(56);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _OwnableResource = __webpack_require__(57);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(9);

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

  (0, _createClass3.default)(Feature, null, [{
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OwnableResource = __webpack_require__(57);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(9);

var _CrudSetBase = __webpack_require__(63);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _Font = __webpack_require__(69);

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
    key: '_Child',
    get: function get() {
      return _Font2.default;
    }
  }], [{
    key: 'resourceName',
    get: function get() {
      return 'font-families';
    }
  }]);
  return FontFamily;
}((0, _reflection.mix)(_CrudSetBase2.default, _OwnableResource2.default));

exports.default = FontFamily;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudSetItemBase2 = __webpack_require__(65);

var _CrudSetItemBase3 = _interopRequireDefault(_CrudSetItemBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Font = function (_CrudSetItemBase) {
  (0, _inherits3.default)(Font, _CrudSetItemBase);

  function Font() {
    (0, _classCallCheck3.default)(this, Font);
    return (0, _possibleConstructorReturn3.default)(this, (Font.__proto__ || Object.getPrototypeOf(Font)).apply(this, arguments));
  }

  (0, _createClass3.default)(Font, [{
    key: 'parentKey',
    get: function get() {
      return 'font_family_id';
    }
  }], [{
    key: 'resourceName',
    get: function get() {
      return 'fonts';
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase2 = __webpack_require__(56);

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
  }], [{
    key: 'visibility',
    get: function get() {
      return JobShareVisibility;
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'job-shares';
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase = __webpack_require__(56);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _OwnableResource = __webpack_require__(57);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(9);

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
  }], [{
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _HandlesImages = __webpack_require__(73);

var _HandlesImages2 = _interopRequireDefault(_HandlesImages);

var _OwnableResource = __webpack_require__(57);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(9);

var _CrudBase = __webpack_require__(56);

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

  (0, _createClass3.default)(Layer, null, [{
    key: 'resourceName',
    get: function get() {
      return 'layers';
    }
  }]);
  return Layer;
}((0, _reflection.mix)(_CrudBase2.default, _OwnableResource2.default, _HandlesImages2.default));

exports.default = Layer;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Trait2 = __webpack_require__(10);

var _Trait3 = _interopRequireDefault(_Trait2);

var _ImageHandler = __webpack_require__(74);

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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(24);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(25);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Maps4News = __webpack_require__(17);

var _Maps4News2 = _interopRequireDefault(_Maps4News);

var _ResourceBase = __webpack_require__(52);

var _ResourceBase2 = _interopRequireDefault(_ResourceBase);

var _node = __webpack_require__(30);

var _reflection = __webpack_require__(9);

var _requests = __webpack_require__(35);

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
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.api.request('' + this.url);

              case 2:
                data = _context.sent;

                if (!(0, _node.isNode)()) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt('return', data);

              case 5:
                return _context.abrupt('return', (window.URL || window.webkitURL).createObjectURL(data));

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function download() {
        return _ref.apply(this, arguments);
      }

      return download;
    }()

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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OwnableResource = __webpack_require__(57);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(9);

var _CrudSetBase = __webpack_require__(63);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _Mapstyle = __webpack_require__(76);

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
    key: '_Child',
    get: function get() {
      return _Mapstyle2.default;
    }
  }], [{
    key: 'resourceName',
    get: function get() {
      return 'mapstyle-sets';
    }
  }]);
  return MapstyleSet;
}((0, _reflection.mix)(_CrudSetBase2.default, _OwnableResource2.default));

exports.default = MapstyleSet;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _HandlesImages = __webpack_require__(73);

var _HandlesImages2 = _interopRequireDefault(_HandlesImages);

var _reflection = __webpack_require__(9);

var _CrudSetItemBase = __webpack_require__(65);

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

  (0, _createClass3.default)(Mapstyle, null, [{
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OwnableResource = __webpack_require__(57);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _CrudSetBase = __webpack_require__(63);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _Svg = __webpack_require__(78);

var _Svg2 = _interopRequireDefault(_Svg);

var _reflection = __webpack_require__(9);

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
    key: '_Child',
    get: function get() {
      return _Svg2.default;
    }
  }], [{
    key: 'resourceName',
    get: function get() {
      return 'svg-sets';
    }
  }]);
  return SvgSet;
}((0, _reflection.mix)(_CrudSetBase2.default, _OwnableResource2.default));

exports.default = SvgSet;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudSetItemBase2 = __webpack_require__(65);

var _CrudSetItemBase3 = _interopRequireDefault(_CrudSetItemBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = function (_CrudSetItemBase) {
  (0, _inherits3.default)(Svg, _CrudSetItemBase);

  function Svg() {
    (0, _classCallCheck3.default)(this, Svg);
    return (0, _possibleConstructorReturn3.default)(this, (Svg.__proto__ || Object.getPrototypeOf(Svg)).apply(this, arguments));
  }

  (0, _createClass3.default)(Svg, null, [{
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase = __webpack_require__(56);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _OwnableResource = __webpack_require__(57);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(9);

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

  (0, _createClass3.default)(Tag, null, [{
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OwnedResourceProxy = __webpack_require__(60);

var _OwnedResourceProxy2 = _interopRequireDefault(_OwnedResourceProxy);

var _ResourceProxy = __webpack_require__(42);

var _ResourceProxy2 = _interopRequireDefault(_ResourceProxy);

var _CrudBase2 = __webpack_require__(56);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _Color = __webpack_require__(55);

var _Color2 = _interopRequireDefault(_Color);

var _DimensionSet = __webpack_require__(62);

var _DimensionSet2 = _interopRequireDefault(_DimensionSet);

var _Feature = __webpack_require__(67);

var _Feature2 = _interopRequireDefault(_Feature);

var _FontFamily = __webpack_require__(68);

var _FontFamily2 = _interopRequireDefault(_FontFamily);

var _Job = __webpack_require__(81);

var _Job2 = _interopRequireDefault(_Job);

var _JobShare = __webpack_require__(70);

var _JobShare2 = _interopRequireDefault(_JobShare);

var _JobType = __webpack_require__(71);

var _JobType2 = _interopRequireDefault(_JobType);

var _Language = __webpack_require__(84);

var _Language2 = _interopRequireDefault(_Language);

var _Layer = __webpack_require__(72);

var _Layer2 = _interopRequireDefault(_Layer);

var _MapstyleSet = __webpack_require__(75);

var _MapstyleSet2 = _interopRequireDefault(_MapstyleSet);

var _Notification = __webpack_require__(85);

var _Notification2 = _interopRequireDefault(_Notification);

var _Organisation = __webpack_require__(59);

var _Organisation2 = _interopRequireDefault(_Organisation);

var _Permission = __webpack_require__(86);

var _Permission2 = _interopRequireDefault(_Permission);

var _Role = __webpack_require__(87);

var _Role2 = _interopRequireDefault(_Role);

var _SvgSet = __webpack_require__(77);

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

  }], [{
    key: 'resourceName',
    get: function get() {
      return 'users';
    }
  }]);
  return User;
}(_CrudBase3.default);

exports.default = User;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ResourceProxy = __webpack_require__(42);

var _ResourceProxy2 = _interopRequireDefault(_ResourceProxy);

var _requests = __webpack_require__(35);

var _CrudBase2 = __webpack_require__(56);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _JobResult = __webpack_require__(82);

var _JobResult2 = _interopRequireDefault(_JobResult);

var _JobRevision = __webpack_require__(83);

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
    key: 'lastPreviewUrl',


    /**
     * Get the most up to date preview url
     * @returns {string} - Last preview url
     * @deprecated
     * @see Job#previewUrl
     */
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
  }], [{
    key: 'resourceName',
    get: function get() {
      return 'jobs';
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _requests = __webpack_require__(35);

var _ResourceBase2 = __webpack_require__(52);

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
      return (0, _requests.downloadFile)('' + this.previewUrl, this._getDownloadHeaders()).then(function (data) {
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
    key: 'job',


    /**
     * Get the related job
     * @returns {Promise<Job, ApiError>} - The job related to this row
     */
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
  }], [{
    key: 'resourceName',
    get: function get() {
      return 'job-result';
    }
  }]);
  return JobResult;
}(_ResourceBase3.default);

exports.default = JobResult;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reflection = __webpack_require__(9);

var _CrudBase2 = __webpack_require__(56);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _JobResult = __webpack_require__(82);

var _JobResult2 = _interopRequireDefault(_JobResult);

var _JobShare = __webpack_require__(70);

var _JobShare2 = _interopRequireDefault(_JobShare);

var _Layer = __webpack_require__(72);

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
        data.jobId = _this2.jobId;
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
    key: 'resourceName',
    get: function get() {
      return 'job-revisions';
    }
  }, {
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase2 = __webpack_require__(56);

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
    key: 'resourcePath',
    get: function get() {
      return '/' + this.constructor.resourceName + '/{code}';
    }
  }], [{
    key: 'resourceName',
    get: function get() {
      return 'languages';
    }
  }, {
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase2 = __webpack_require__(56);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = function (_CrudBase) {
  (0, _inherits3.default)(Notification, _CrudBase);

  function Notification() {
    (0, _classCallCheck3.default)(this, Notification);
    return (0, _possibleConstructorReturn3.default)(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
  }

  (0, _createClass3.default)(Notification, null, [{
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ResourceBase2 = __webpack_require__(52);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Permission = function (_ResourceBase) {
  (0, _inherits3.default)(Permission, _ResourceBase);

  function Permission() {
    (0, _classCallCheck3.default)(this, Permission);
    return (0, _possibleConstructorReturn3.default)(this, (Permission.__proto__ || Object.getPrototypeOf(Permission)).apply(this, arguments));
  }

  (0, _createClass3.default)(Permission, null, [{
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

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OwnedResourceProxy = __webpack_require__(60);

var _OwnedResourceProxy2 = _interopRequireDefault(_OwnedResourceProxy);

var _CrudBase2 = __webpack_require__(56);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _Permission = __webpack_require__(86);

var _Permission2 = _interopRequireDefault(_Permission);

var _User = __webpack_require__(80);

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
  }], [{
    key: 'resourceName',
    get: function get() {
      return 'roles';
    }
  }]);
  return Role;
}(_CrudBase3.default);

exports.default = Role;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CrudBase2 = __webpack_require__(56);

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

  (0, _createClass3.default)(Faq, null, [{
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ResourceBase2 = __webpack_require__(52);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Highlight = function (_ResourceBase) {
  (0, _inherits3.default)(Highlight, _ResourceBase);

  function Highlight() {
    (0, _classCallCheck3.default)(this, Highlight);
    return (0, _possibleConstructorReturn3.default)(this, (Highlight.__proto__ || Object.getPrototypeOf(Highlight)).apply(this, arguments));
  }

  (0, _createClass3.default)(Highlight, null, [{
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ResourceBase2 = __webpack_require__(52);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InsetMap = function (_ResourceBase) {
  (0, _inherits3.default)(InsetMap, _ResourceBase);

  function InsetMap() {
    (0, _classCallCheck3.default)(this, InsetMap);
    return (0, _possibleConstructorReturn3.default)(this, (InsetMap.__proto__ || Object.getPrototypeOf(InsetMap)).apply(this, arguments));
  }

  (0, _createClass3.default)(InsetMap, null, [{
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(92);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _JobResult2 = __webpack_require__(82);

var _JobResult3 = _interopRequireDefault(_JobResult2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JobMonitorRow = function (_JobResult) {
  (0, _inherits3.default)(JobMonitorRow, _JobResult);

  function JobMonitorRow() {
    (0, _classCallCheck3.default)(this, JobMonitorRow);
    return (0, _possibleConstructorReturn3.default)(this, (JobMonitorRow.__proto__ || Object.getPrototypeOf(JobMonitorRow)).apply(this, arguments));
  }

  (0, _createClass3.default)(JobMonitorRow, [{
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
    key: 'resourceName',
    get: function get() {
      return 'job-monitor';
    }

    /**
     * Returns if the resource is readonly
     * @returns {boolean} - readonly
     */

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
/* 92 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/get");

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

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ResourceBase2 = __webpack_require__(52);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaceName = function (_ResourceBase) {
  (0, _inherits3.default)(PlaceName, _ResourceBase);

  function PlaceName() {
    (0, _classCallCheck3.default)(this, PlaceName);
    return (0, _possibleConstructorReturn3.default)(this, (PlaceName.__proto__ || Object.getPrototypeOf(PlaceName)).apply(this, arguments));
  }

  (0, _createClass3.default)(PlaceName, null, [{
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
/* 94 */
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
/* 95 */
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

var _Maps4News = __webpack_require__(17);

var _Maps4News2 = _interopRequireDefault(_Maps4News);

var _JobMonitorRow = __webpack_require__(91);

var _JobMonitorRow2 = _interopRequireDefault(_JobMonitorRow);

var _reflection = __webpack_require__(9);

var _requests = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used for monitoring the job queue
 */
var JobMonitor = function () {
  /**
   * JobMonitor constructor
   * @param {Maps4News} api - Api instance
   * @param {number} [maxRows=100] - Default maximum amount of rows
   * @param {boolean} [longPoll=true] - Use long-polling instead of regular poling
   */
  function JobMonitor(api) {
    var maxRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number("100");
    var longPoll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    (0, _classCallCheck3.default)(this, JobMonitor);

    if (!(0, _reflection.isParentOf)(_Maps4News2.default, api)) {
      throw new TypeError('Expected api to be of type Maps4News');
    }

    this._api = api;

    this._maxAvailible = {};
    this._maxRows = Math.max(1, Number(maxRows));
    this._longPoll = Boolean(longPoll);
    this._lastUpdate = this._getTimestamp();
    this._data = [];
    this._filterStatus = _enums.JobMonitorFilter.DEFAULT;
    this._filterTags = [];
    this._purge = false;
    this._skipMaxUpdate = false;
  }

  /**
   * Contains the current JobMonitor data
   * @returns {Array<JobMonitorRow>} - Job monitor rows
   */


  (0, _createClass3.default)(JobMonitor, [{
    key: 'loadMore',


    /**
     * Update maxRows and run update()
     * @param {number} [count=50] - Amount to increase maxRows by
     * @returns {Promise<Number, ApiError>} - Resolves with the number of updated rows
     */
    value: function loadMore() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;

      this.maxRows += count;

      return this.update();
    }

    /**
     * Update the job list
     * @returns {Promise<Number, ApiError>} - Resolves with the number of updated rows
     */

  }, {
    key: 'update',
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OAuth2 = __webpack_require__(23);

var _OAuth3 = _interopRequireDefault(_OAuth2);

var _OAuthToken = __webpack_require__(34);

var _OAuthToken2 = _interopRequireDefault(_OAuthToken);

var _StateContainer = __webpack_require__(40);

var _StateContainer2 = _interopRequireDefault(_StateContainer);

var _requests = __webpack_require__(35);

var _OAuthError = __webpack_require__(22);

var _OAuthError2 = _interopRequireDefault(_OAuthError);

var _node = __webpack_require__(30);

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OAuthError = __webpack_require__(22);

var _OAuthError2 = _interopRequireDefault(_OAuthError);

var _StorageManager = __webpack_require__(26);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _ImplicitFlow2 = __webpack_require__(96);

var _ImplicitFlow3 = _interopRequireDefault(_ImplicitFlow2);

var _OAuthToken = __webpack_require__(34);

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

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _OAuthError = __webpack_require__(22);

var _OAuthError2 = _interopRequireDefault(_OAuthError);

var _node = __webpack_require__(30);

var _requests = __webpack_require__(35);

var _OAuth2 = __webpack_require__(23);

var _OAuth3 = _interopRequireDefault(_OAuth2);

var _OAuthToken = __webpack_require__(34);

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

      var url = this.host + this.path;
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationError = exports.UnsupportedCrudError = exports.StaticClassError = exports.OAuthError = exports.NodeError = exports.ApiError = undefined;

var _AbstractError = __webpack_require__(16);

Object.keys(_AbstractError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AbstractError[key];
    }
  });
});

var _ApiError2 = __webpack_require__(19);

var _ApiError3 = _interopRequireDefault(_ApiError2);

var _NodeError2 = __webpack_require__(100);

var _NodeError3 = _interopRequireDefault(_NodeError2);

var _OAuthError2 = __webpack_require__(22);

var _OAuthError3 = _interopRequireDefault(_OAuthError2);

var _StaticClassError2 = __webpack_require__(28);

var _StaticClassError3 = _interopRequireDefault(_StaticClassError2);

var _UnsupportedCrudError2 = __webpack_require__(101);

var _UnsupportedCrudError3 = _interopRequireDefault(_UnsupportedCrudError2);

var _ValidationError2 = __webpack_require__(20);

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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

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
//# sourceMappingURL=bundle.js.map

/*!
 * This bundle contains the following packages:
 * └─ @mapcreator/maps4news (1.4.45) ── BSD 3-clause "New" or "Revised" License (http://www.opensource.org/licenses/BSD-3-Clause) ── package.json
 *    ├─ @babel/runtime (7.1.2) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/@babel/runtime/package.json
 *    │  └─ regenerator-runtime (0.12.1) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/@babel/runtime ~ regenerator-runtime/package.json
 *    ├─ case (1.5.5) ── MIT (http://www.opensource.org/licenses/mit-license.php), GPL (http://www.gnu.org/licenses/gpl.html) ── node_modules/case/package.json
 *    ├─ fetch-ponyfill (6.0.2) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/fetch-ponyfill/package.json
 *    │  └─ node-fetch (2.1.2) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/node-fetch/package.json
 *    ├─ formdata-polyfill (3.0.12) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/formdata-polyfill/package.json
 *    ├─ json-stable-stringify (1.0.1) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/json-stable-stringify/package.json
 *    │  └─ jsonify (0.0.0) ── public domain ── node_modules/jsonify/package.json
 *    └─ mitt (1.1.3) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/mitt/package.json
 * 
 */
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
 * hash:152f6992f2b605255cb7, chunkhash:81e6b00cc93c3d89aaf3, name:bundle.browser, version:v1.4.45
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
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(11);

var assertThisInitialized = __webpack_require__(15);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(77);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isParentOf", function() { return isParentOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeName", function() { return getTypeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTrait", function() { return hasTrait; });
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _traits_Trait__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);






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
 * Helper class for mix
 * @see mix
 */

var Empty = function Empty() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Empty);
};
/**
 * Mix traits into the target class
 * @param {Function} baseClass - Target base class for the traits to be applied to
 * @param {Function} mixins - Traits to be applied
 * @returns {Function} - Constructor with any traits applied
 * @private
 */


function mix(baseClass) {
  for (var _len = arguments.length, mixins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    mixins[_key - 1] = arguments[_key];
  }

  var cocktail =
  /*#__PURE__*/
  function (_ref) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(_Cocktail, _ref);

    function _Cocktail() {
      var _getPrototypeOf2;

      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, _Cocktail);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default()(_Cocktail)).call.apply(_getPrototypeOf2, [this].concat(args)));
      mixins.map(function (mixin) {
        return mixin.prototype.initializer;
      }).filter(function (initializer) {
        return typeof initializer === 'function';
      }).forEach(function (initializer) {
        return initializer.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)));
      });
      return _this;
    }

    return _Cocktail;
  }(baseClass || Empty);

  for (var _i = 0; _i < mixins.length; _i++) {
    var mixin = mixins[_i];

    if (!isParentOf(_traits_Trait__WEBPACK_IMPORTED_MODULE_5__["default"], mixin)) {
      throw new TypeError("Expected mixin to implement Trait for ".concat(mixin.name));
    }

    copyProps(cocktail.prototype, mixin.prototype);
    copyProps(cocktail, mixin);
  }

  cocktail.__mixins = mixins;
  var hash = Object(_hash__WEBPACK_IMPORTED_MODULE_6__["fnv32b"])(mixins.map(function (x) {
    return x.name;
  }).join(','));
  Object.defineProperty(cocktail, 'name', {
    value: "Cocktail_".concat(hash)
  });
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
    if (!prop.match(/^(?:constructor|initializer|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)) {
      Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
    }
  });
}
/**
 * Checks if the target has a certain trait.
 *
 * @param {Function|Object} Subject - Instance or class
 * @param {Function} Trait - Trait to check for
 * @returns {boolean} - If the subject has the trait
 */


function hasTrait(Subject, Trait) {
  Subject = typeof Subject === 'function' ? Subject : Subject.constructor;

  do {
    if (Array.isArray(Subject.__mixins) && Subject.__mixins.includes(Trait)) {
      return true;
    }

    Subject = Object.getPrototypeOf(Subject);
  } while (Subject.name !== '');

  return false;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CrudBase; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _errors_AbstractError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _ResourceBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);






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
 * Base of all resource items that support Crud operations
 * @abstract
 */

var CrudBase =
/*#__PURE__*/
function (_ResourceBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CrudBase, _ResourceBase);

  /**
   * @param {Maps4News} api - Api instance
   * @param {Object<String, *>} data - Item data
   */
  function CrudBase(api) {
    var _this;

    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CrudBase);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CrudBase).call(this, api, data));

    if (_this.constructor === CrudBase) {
      throw new _errors_AbstractError__WEBPACK_IMPORTED_MODULE_5__["AbstractClassError"]();
    }

    return _this;
  }
  /**
   * Build data for create operation
   * @returns {Object<String, *>} - Create data
   * @protected
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CrudBase, [{
    key: "_buildCreateData",
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
          if (!_iteratorNormalCompletion && _iterator.return != null) {
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
    key: "save",
    value: function save() {
      return !this.id ? this._create() : this._update();
    }
    /**
     * Store new item
     * @returns {Promise} - Resolves with {@link CrudBase} instance and rejects with {@link ApiError}
     * @private
     */

  }, {
    key: "_create",
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
    key: "_update",
    value: function _update() {
      var _this3 = this;

      this._updateProperties(); // We'll just fake it, no need to bother the server
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
    key: "delete",
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
    key: "restore",
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
}(_ResourceBase__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(4);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./src/resources/base/ResourceBase.js
var ResourceBase = __webpack_require__(8);

// CONCATENATED MODULE: ./src/resources/Choropleth.js






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
 * Choropleth resource
 */

var Choropleth_Choropleth =
/*#__PURE__*/
function (_ResourceBase) {
  inherits_default()(Choropleth, _ResourceBase);

  function Choropleth() {
    classCallCheck_default()(this, Choropleth);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Choropleth).apply(this, arguments));
  }

  createClass_default()(Choropleth, null, [{
    key: "resourceName",
    get: function get() {
      return 'choropleths';
    }
  }]);

  return Choropleth;
}(ResourceBase["default"]);


// EXTERNAL MODULE: ./src/resources/Color.js
var Color = __webpack_require__(41);

// EXTERNAL MODULE: ./src/resources/Contract.js
var Contract = __webpack_require__(60);

// EXTERNAL MODULE: ./src/resources/Dimension.js
var Dimension = __webpack_require__(61);

// EXTERNAL MODULE: ./src/resources/DimensionSet.js
var DimensionSet = __webpack_require__(42);

// EXTERNAL MODULE: ./src/resources/Domain.js
var Domain = __webpack_require__(62);

// EXTERNAL MODULE: ./src/resources/base/CrudBase.js
var CrudBase = __webpack_require__(6);

// CONCATENATED MODULE: ./src/resources/Faq.js






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
 * Faq resource
 */

var Faq_Faq =
/*#__PURE__*/
function (_CrudBase) {
  inherits_default()(Faq, _CrudBase);

  function Faq() {
    classCallCheck_default()(this, Faq);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Faq).apply(this, arguments));
  }

  createClass_default()(Faq, null, [{
    key: "resourceName",
    get: function get() {
      return 'faqs';
    }
  }]);

  return Faq;
}(CrudBase["default"]);


// EXTERNAL MODULE: ./src/resources/Feature.js
var Feature = __webpack_require__(43);

// EXTERNAL MODULE: ./src/resources/Font.js
var Font = __webpack_require__(63);

// EXTERNAL MODULE: ./src/resources/FontFamily.js
var FontFamily = __webpack_require__(44);

// CONCATENATED MODULE: ./src/resources/Highlight.js






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


var Highlight_Highlight =
/*#__PURE__*/
function (_ResourceBase) {
  inherits_default()(Highlight, _ResourceBase);

  function Highlight() {
    classCallCheck_default()(this, Highlight);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Highlight).apply(this, arguments));
  }

  createClass_default()(Highlight, null, [{
    key: "resourceName",
    get: function get() {
      return 'highlights';
    }
  }]);

  return Highlight;
}(ResourceBase["default"]);


// CONCATENATED MODULE: ./src/resources/InsetMap.js






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


var InsetMap_InsetMap =
/*#__PURE__*/
function (_ResourceBase) {
  inherits_default()(InsetMap, _ResourceBase);

  function InsetMap() {
    classCallCheck_default()(this, InsetMap);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(InsetMap).apply(this, arguments));
  }

  createClass_default()(InsetMap, null, [{
    key: "resourceName",
    get: function get() {
      return 'inset-maps';
    }
  }]);

  return InsetMap;
}(ResourceBase["default"]);


// EXTERNAL MODULE: ./src/resources/Job.js
var Job = __webpack_require__(45);

// EXTERNAL MODULE: ./src/resources/JobMonitorRow.js
var JobMonitorRow = __webpack_require__(57);

// EXTERNAL MODULE: ./src/resources/JobResult.js
var JobResult = __webpack_require__(31);

// EXTERNAL MODULE: ./src/resources/JobRevision.js
var JobRevision = __webpack_require__(64);

// EXTERNAL MODULE: ./src/resources/JobShare.js
var JobShare = __webpack_require__(29);

// EXTERNAL MODULE: ./src/resources/JobType.js
var JobType = __webpack_require__(46);

// EXTERNAL MODULE: ./src/resources/Language.js
var Language = __webpack_require__(68);

// EXTERNAL MODULE: ./src/resources/Layer.js
var Layer = __webpack_require__(32);

// EXTERNAL MODULE: ./src/resources/Mapstyle.js
var Mapstyle = __webpack_require__(65);

// EXTERNAL MODULE: ./src/resources/MapstyleSet.js
var MapstyleSet = __webpack_require__(47);

// EXTERNAL MODULE: ./src/resources/Notification.js
var Notification = __webpack_require__(69);

// EXTERNAL MODULE: ./src/resources/Organisation.js
var Organisation = __webpack_require__(54);

// EXTERNAL MODULE: ./src/resources/Permission.js
var Permission = __webpack_require__(50);

// CONCATENATED MODULE: ./src/resources/PlaceName.js






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


var PlaceName_PlaceName =
/*#__PURE__*/
function (_ResourceBase) {
  inherits_default()(PlaceName, _ResourceBase);

  function PlaceName() {
    classCallCheck_default()(this, PlaceName);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PlaceName).apply(this, arguments));
  }

  createClass_default()(PlaceName, null, [{
    key: "resourceName",
    get: function get() {
      return 'place-names';
    }
  }]);

  return PlaceName;
}(ResourceBase["default"]);


// EXTERNAL MODULE: ./src/resources/Role.js
var Role = __webpack_require__(70);

// EXTERNAL MODULE: ./src/resources/Svg.js
var Svg = __webpack_require__(66);

// EXTERNAL MODULE: ./src/resources/SvgSet.js
var SvgSet = __webpack_require__(48);

// EXTERNAL MODULE: ./src/resources/Tag.js
var Tag = __webpack_require__(67);

// EXTERNAL MODULE: ./src/resources/User.js
var User = __webpack_require__(49);

// EXTERNAL MODULE: ./src/resources/base/CrudSetBase.js
var CrudSetBase = __webpack_require__(28);

// CONCATENATED MODULE: ./src/resources/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* concated harmony reexport Choropleth */__webpack_require__.d(__webpack_exports__, "Choropleth", function() { return Choropleth_Choropleth; });
/* concated harmony reexport Color */__webpack_require__.d(__webpack_exports__, "Color", function() { return Color["default"]; });
/* concated harmony reexport Contract */__webpack_require__.d(__webpack_exports__, "Contract", function() { return Contract["default"]; });
/* concated harmony reexport Dimension */__webpack_require__.d(__webpack_exports__, "Dimension", function() { return Dimension["default"]; });
/* concated harmony reexport DimensionSet */__webpack_require__.d(__webpack_exports__, "DimensionSet", function() { return DimensionSet["default"]; });
/* concated harmony reexport Domain */__webpack_require__.d(__webpack_exports__, "Domain", function() { return Domain["default"]; });
/* concated harmony reexport Faq */__webpack_require__.d(__webpack_exports__, "Faq", function() { return Faq_Faq; });
/* concated harmony reexport Feature */__webpack_require__.d(__webpack_exports__, "Feature", function() { return Feature["default"]; });
/* concated harmony reexport Font */__webpack_require__.d(__webpack_exports__, "Font", function() { return Font["default"]; });
/* concated harmony reexport FontFamily */__webpack_require__.d(__webpack_exports__, "FontFamily", function() { return FontFamily["default"]; });
/* concated harmony reexport Highlight */__webpack_require__.d(__webpack_exports__, "Highlight", function() { return Highlight_Highlight; });
/* concated harmony reexport InsetMap */__webpack_require__.d(__webpack_exports__, "InsetMap", function() { return InsetMap_InsetMap; });
/* concated harmony reexport Job */__webpack_require__.d(__webpack_exports__, "Job", function() { return Job["default"]; });
/* concated harmony reexport JobMonitorRow */__webpack_require__.d(__webpack_exports__, "JobMonitorRow", function() { return JobMonitorRow["default"]; });
/* concated harmony reexport JobResult */__webpack_require__.d(__webpack_exports__, "JobResult", function() { return JobResult["default"]; });
/* concated harmony reexport JobRevision */__webpack_require__.d(__webpack_exports__, "JobRevision", function() { return JobRevision["default"]; });
/* concated harmony reexport JobShare */__webpack_require__.d(__webpack_exports__, "JobShare", function() { return JobShare["default"]; });
/* concated harmony reexport JobType */__webpack_require__.d(__webpack_exports__, "JobType", function() { return JobType["default"]; });
/* concated harmony reexport Language */__webpack_require__.d(__webpack_exports__, "Language", function() { return Language["default"]; });
/* concated harmony reexport Layer */__webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer["default"]; });
/* concated harmony reexport Mapstyle */__webpack_require__.d(__webpack_exports__, "Mapstyle", function() { return Mapstyle["default"]; });
/* concated harmony reexport MapstyleSet */__webpack_require__.d(__webpack_exports__, "MapstyleSet", function() { return MapstyleSet["default"]; });
/* concated harmony reexport Notification */__webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification["default"]; });
/* concated harmony reexport Organisation */__webpack_require__.d(__webpack_exports__, "Organisation", function() { return Organisation["default"]; });
/* concated harmony reexport Permission */__webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission["default"]; });
/* concated harmony reexport PlaceName */__webpack_require__.d(__webpack_exports__, "PlaceName", function() { return PlaceName_PlaceName; });
/* concated harmony reexport Role */__webpack_require__.d(__webpack_exports__, "Role", function() { return Role["default"]; });
/* concated harmony reexport Svg */__webpack_require__.d(__webpack_exports__, "Svg", function() { return Svg["default"]; });
/* concated harmony reexport SvgSet */__webpack_require__.d(__webpack_exports__, "SvgSet", function() { return SvgSet["default"]; });
/* concated harmony reexport Tag */__webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag["default"]; });
/* concated harmony reexport User */__webpack_require__.d(__webpack_exports__, "User", function() { return User["default"]; });
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
 * @private
 */

var base = {
  CrudBase: CrudBase["default"],
  CrudSetBase: CrudSetBase["default"],
  ResourceBase: ResourceBase["default"]
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResourceBase; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var case__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var case__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(case__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _errors_AbstractError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _Maps4News__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var _proxy_SimpleResourceProxy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30);
/* harmony import */ var _traits_Injectable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5);







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


var ResourceBase =
/*#__PURE__*/
function (_mix) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ResourceBase, _mix);

  /**
   * @param {Maps4News} api - Api instance
   * @param {Object<String, *>} data - Item data
   */
  function ResourceBase(api) {
    var _this;

    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ResourceBase);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ResourceBase).call(this));

    if (_this.constructor === ResourceBase) {
      throw new _errors_AbstractError__WEBPACK_IMPORTED_MODULE_7__["AbstractClassError"]();
    }

    if (!Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_11__["isParentOf"])(_Maps4News__WEBPACK_IMPORTED_MODULE_8__["default"], api)) {
      throw new TypeError('Expected api to be of type Maps4News');
    } // Normalize keys to snake_case
    // Fix data types


    var _arr = Object.keys(data);

    for (var _i = 0; _i < _arr.length; _i++) {
      var key = _arr[_i];
      var newKey = Object(case__WEBPACK_IMPORTED_MODULE_6__["snake"])(key);
      data[newKey] = _this.constructor._guessType(newKey, data[key]);

      if (newKey !== key) {
        delete data[key];
      }
    }

    _this._baseProperties = data || {};
    _this._properties = {};
    _this._api = api;
    var fields = Object.keys(_this._baseProperties); // Apply properties

    for (var _i2 = 0; _i2 < fields.length; _i2++) {
      var _key = fields[_i2];

      _this._applyProperty(_key);
    } // Add deleted field if possible


    if (fields.includes('deleted_at')) {
      Object.defineProperty(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), 'deleted', {
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


    _this._knownFields = Object.keys(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this))).filter(function (x) {
      return x[0] !== '_';
    });
    return _this;
  }
  /**
   * Get api instance
   * @returns {Maps4News} - Api instance
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ResourceBase, [{
    key: "_updateProperties",

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
      }); // Move the pointer from this to the properties object

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;
          var newKey = Object(case__WEBPACK_IMPORTED_MODULE_6__["snake"])(key);
          this._properties[newKey] = this[key];
          delete this[key];

          this._applyProperty(newKey);

          this._knownFields.push(newKey);
        } // Build a list of new BaseProperty fields

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      fields = Object.keys(this._baseProperties).filter(function (x) {
        return !_this2._knownFields.includes(Object(case__WEBPACK_IMPORTED_MODULE_6__["camel"])(x));
      });
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _key2 = _step2.value;

          this._applyProperty(_key2);

          this._knownFields.push(_key2);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
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
    key: "sanitize",
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
    key: "reset",
    value: function reset() {
      var _this3 = this;

      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this._updateProperties();

      if (typeof fields === 'string') {
        this.reset([fields]);
      } else if (fields === null) {
        this._properties = {}; // Delete all
      } else if (Array.isArray(fields)) {
        fields.map(String).map(case__WEBPACK_IMPORTED_MODULE_6__["snake"]).forEach(function (field) {
          return delete _this3._properties[field];
        });
      }
    }
    /**
     * Clone the object
     * @returns {ResourceBase} - Exact clone of the object
     */

  }, {
    key: "clone",
    value: function clone() {
      this._updateProperties();

      var out = new this.constructor(this.api, this._baseProperties);

      var _arr2 = Object.keys(this._properties);

      for (var _i3 = 0; _i3 < _arr2.length; _i3++) {
        var key = _arr2[_i3];
        out[key] = this._properties[key];
      }

      return out;
    }
    /**
     * Refresh the resource by requesting it from the server again
     * @param {Boolean} updateSelf - Update the current instance
     * @returns {Promise} - Resolves with {@link ResourceBase} instance and rejects with {@link ApiError}
     */

  }, {
    key: "refresh",
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
    key: "_applyProperty",
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

      var newKey = Object(case__WEBPACK_IMPORTED_MODULE_6__["camel"])(key);
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
    key: "toString",

    /**
     * String representation of the resource, similar to Python's __repr__
     * @returns {string} - Resource name and id
     */
    value: function toString() {
      return "".concat(this.constructor.name, "(").concat(this[this.resourceUrlKey], ")");
    }
    /**
     * Transform instance to object
     * @param {boolean} [camelCaseKeys=false] - camelCase object keys
     * @returns {{}} - object
     */

  }, {
    key: "toObject",
    value: function toObject() {
      var camelCaseKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this._updateProperties();

      var out = Object.assign({}, this._baseProperties, this._properties);

      if (camelCaseKeys) {
        for (var key in Object.keys(out)) {
          var ccKey = Object(case__WEBPACK_IMPORTED_MODULE_6__["camel"])(key);

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
    key: "_proxyResourceList",
    value: function _proxyResourceList(Target) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var seedData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!url) {
        var resource = Target.resourceName.replace(/s+$/, '');
        url = "".concat(this.url, "/").concat(resource, "s");
      }

      return new _proxy_SimpleResourceProxy__WEBPACK_IMPORTED_MODULE_9__["default"](this.api, Target, url, seedData);
    }
  }, {
    key: "api",
    get: function get() {
      return this._api;
    }
    /**
     * Resource path template
     * @returns {String} - Path template
     * @todo move to constructor
     */

  }, {
    key: "resourcePath",
    get: function get() {
      return "/".concat(this.constructor.resourceName, "/{id}");
    }
    /**
     * Resource name
     * @returns {String} - Resource name
     * @todo move to constructor
     * @abstract
     */

  }, {
    key: "_protectedFields",

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
    key: "ownable",

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
    key: "url",
    get: function get() {
      var _this6 = this;

      if (!this._url) {
        var url = "".concat(this._api.host, "/").concat(this._api.version).concat(this.resourcePath); // Find and replace any keys

        url = url.replace(/{(\w+)}/g, function (match, key) {
          return _this6[Object(case__WEBPACK_IMPORTED_MODULE_6__["camel"])(key)];
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
    key: "baseUrl",
    get: function get() {
      var basePath = this.resourcePath.match(/^(\/[^{]+\b)/)[1];
      return "".concat(this._api.host, "/").concat(this._api.version).concat(basePath);
    }
    /**
     * List fields that contain object data
     * @returns {Array<String>} - A list of fields
     */

  }, {
    key: "fieldNames",
    get: function get() {
      return Object.keys(this._baseProperties).map(case__WEBPACK_IMPORTED_MODULE_6__["camel"]);
    }
  }], [{
    key: "_guessType",
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
    key: "resourceName",
    get: function get() {
      throw new _errors_AbstractError__WEBPACK_IMPORTED_MODULE_7__["AbstractError"]();
    }
    /**
     * Returns the url key of the resource
     * @returns {String} - Resource key
     */

  }, {
    key: "resourceUrlKey",
    get: function get() {
      return 'id';
    }
  }, {
    key: "readonly",
    get: function get() {
      return false;
    }
  }]);

  return ResourceBase;
}(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_11__["mix"])(null, _traits_Injectable__WEBPACK_IMPORTED_MODULE_10__["default"]));



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormData", function() { return FormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeQueryString", function() { return encodeQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fetch_ponyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
/* harmony import */ var fetch_ponyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fetch_ponyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _errors_ApiError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);


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
 * @private
 */

var _ref = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["windowTest"])('fetch') ? window : fetch_ponyfill__WEBPACK_IMPORTED_MODULE_1___default()({
  Promise: Promise
}),
    fetch = _ref.fetch,
    Request = _ref.Request,
    Response = _ref.Response,
    Headers = _ref.Headers;



function getFormData() {
  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["windowTest"])('FormData')) {
    return window.FormData;
  } else if (!Object(_node__WEBPACK_IMPORTED_MODULE_4__["isNode"])()) {
    return __webpack_require__(92);
  } // @todo find nodejs polyfill


  return null;
}
/**
 * @private
 */


var FormData = getFormData();
/**
 * Encodes an object to a http query string with support for recursion
 * @param {object<string, *>} paramsObject - data to be encoded
 * @returns {string} - encoded http query string
 *
 * @private
 */

function encodeQueryString(paramsObject) {
  var query = _encodeQueryString(paramsObject); // Removes any extra unused &'s.


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

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(paramsObject[key]) === 'object' && paramsObject[key] !== null) {
      prefix.push(key);
      return _encodeQueryString(paramsObject[key], prefix);
    }

    prefix.push(key);
    var out = '';
    out += encodeURIComponent(prefix.shift()); // main key

    out += prefix.map(function (item) {
      return "[".concat(encodeURIComponent(item), "]");
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
  return fetch(url, {
    headers: headers
  }).then(function (res) {
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
      throw new _errors_ApiError__WEBPACK_IMPORTED_MODULE_2__["default"](err.type, err.message, res.status, err.trace);
    });
  }).then(function (blob) {
    out.blob = (window.URL || window.webkitURL).createObjectURL(blob);
    return out;
  });
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractError", function() { return AbstractError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractClassError", function() { return AbstractClassError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractMethodError", function() { return AbstractMethodError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__);






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
var AbstractError =
/*#__PURE__*/
function (_Error) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(AbstractError, _Error);

  /**
   * AbstractError constructor
   * @param {?String} message - Error message
   */
  function AbstractError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unimplemented';

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AbstractError);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(AbstractError).call(this, message));
  }

  return AbstractError;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default()(Error));
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

var AbstractClassError =
/*#__PURE__*/
function (_AbstractError) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(AbstractClassError, _AbstractError);

  function AbstractClassError() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AbstractClassError);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(AbstractClassError).call(this, 'Can not make an instance of an abstract class'));
  }

  return AbstractClassError;
}(AbstractError);
/**
 * Thrown upon invocation of an abstract method
 */

var AbstractMethodError =
/*#__PURE__*/
function (_AbstractError2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(AbstractMethodError, _AbstractError2);

  function AbstractMethodError() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AbstractMethodError);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(AbstractMethodError).call(this, 'Can not call an abstract method'));
  }

  return AbstractMethodError;
}(AbstractError);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(4);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./src/utils/reflection.js
var reflection = __webpack_require__(5);

// EXTERNAL MODULE: ./src/proxy/SimpleResourceProxy.js + 2 modules
var SimpleResourceProxy = __webpack_require__(30);

// CONCATENATED MODULE: ./src/proxy/OrganisationProxy.js






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



var OrganisationProxy_OrganisationProxy =
/*#__PURE__*/
function (_SimpleResourceProxy) {
  inherits_default()(OrganisationProxy, _SimpleResourceProxy);

  /**
   * @param {Maps4News} api - Instance of the api
   * @param {ResourceBase} parent - parent instance
   */
  function OrganisationProxy(api, parent) {
    var _this;

    classCallCheck_default()(this, OrganisationProxy);

    // Fixes dependency issue
    var Organisation = __webpack_require__(54).default;

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(OrganisationProxy).call(this, api, Organisation, "".concat(parent.url, "/organisations"), {}));
    _this._parent = parent;
    return _this;
  }
  /**
   * Returns parent instance
   * @returns {ResourceBase} - parent instance
   */


  createClass_default()(OrganisationProxy, [{
    key: "sync",

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
    key: "attach",
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
    key: "detach",
    value: function detach(organisations) {
      return this._modifyLink(organisations, 'DELETE', this.Target);
    }
    /**
     * Attach all organisations to the parent resource
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: "attachAll",
    value: function attachAll() {
      var url = this.baseUrl + '/all';
      return this.api.request(url, 'POST');
    }
    /**
     * Detach all organisations from the parent resource
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: "detachAll",
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
    key: "_modifyLink",
    value: function _modifyLink(items, method, Type) {
      var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      if (!path) {
        var resource = Type.resourceName.replace(/s+$/, '');
        path = "".concat(resource, "s");
      }

      var filter = function filter(x) {
        return !Object(reflection["isParentOf"])(Type, x) && !Object(reflection["isParentOf"])(Number, x);
      };

      var isValid = items.filter(filter).length === 0;

      if (!isValid) {
        throw new TypeError("Array must contain either Numbers (resource id) or \"".concat(Type.name, "\"."));
      }

      var keys = items.map(function (x) {
        return typeof x === 'number' ? x : x.id;
      }).map(Number);
      return this.api.request("".concat(this.parent.url, "/").concat(path), method, {
        keys: keys
      });
    }
  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    }
  }]);

  return OrganisationProxy;
}(SimpleResourceProxy["default"]);


// EXTERNAL MODULE: ./src/traits/Trait.js
var Trait = __webpack_require__(34);

// CONCATENATED MODULE: ./src/traits/OwnableResource.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OwnableResource_OwnableResource; });






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
 * Provides a {@link ResourceBase} with functions for dealing with being ownable by an organisation
 * @mixin
 */

var OwnableResource_OwnableResource =
/*#__PURE__*/
function (_Trait) {
  inherits_default()(OwnableResource, _Trait);

  function OwnableResource() {
    classCallCheck_default()(this, OwnableResource);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(OwnableResource).apply(this, arguments));
  }

  createClass_default()(OwnableResource, [{
    key: "organisations",

    /**
     * Get the list of associated organisations
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */
    get: function get() {
      return new OrganisationProxy_OrganisationProxy(this.api, this);
    }
    /**
     * If the resource can be owned by an organisation
     * @returns {boolean} - Can be owned by an organisation
     */

  }, {
    key: "ownable",
    get: function get() {
      return true;
    }
  }]);

  return OwnableResource;
}(Trait["default"]);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


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
  return typeof window === 'undefined' && typeof global !== 'undefined' || (typeof process === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(process)) === 'object' && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(process.env) === 'object';
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OwnedResourceProxy; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SimpleResourceProxy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);







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
 * Used for proxying resource => organisation
 */

var OwnedResourceProxy =
/*#__PURE__*/
function (_SimpleResourceProxy) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(OwnedResourceProxy, _SimpleResourceProxy);

  /**
   * OwnedResourceProxy Constructor
   * @param {Maps4News} api - api instance
   * @param {ResourceBase} parent - parent instance
   * @param {constructor} Target - target constructor
   */
  function OwnedResourceProxy(api, parent, Target) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, OwnedResourceProxy);

    var resource = Target.resourceName.replace(/s+$/, '');
    var url = "".concat(parent.url, "/").concat(resource, "s");
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(OwnedResourceProxy).call(this, api, Target, url));
  }
  /**
   * Sync items to the organisation
   * @param {Array<ResourceBase>|Array<number>|ResourceBase|number} items - List of items to sync
   * @returns {Promise} - Resolves with an empty {@link Object} and rejects with an {@link ApiError} instance.
   * @throws {TypeError} If the provided items are not of the same type as the proxy target
   * @see http://es6-features.org/#PromiseCombination
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(OwnedResourceProxy, [{
    key: "sync",
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
    key: "attach",
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
    key: "detach",
    value: function detach(items) {
      return this._modifyResourceLink(items, 'DELETE');
    }
    /**
     * Attach parent resource to all organisations
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: "attachAll",
    value: function attachAll() {
      var url = this.baseUrl + '/all';
      return this.api.request(url, 'POST');
    }
    /**
     * Detach parent resource to all organisations
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: "detachAll",
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
    key: "_modifyResourceLink",
    value: function _modifyResourceLink(items, method) {
      if (!(items instanceof Array)) {
        items = [items];
      }

      var keys = items.map(function (x) {
        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(x) === 'object' && x.id ? x.id : x;
      }).map(Number).filter(function (x) {
        return !Number.isNaN(x);
      });

      if (!keys.length === 0) {
        throw new TypeError('Expected items to be of type Array<ResourceBase>, Array<number>, ResourceBase or number}');
      }

      return this.api.request(this.baseUrl, method, {
        keys: keys
      });
    }
  }]);

  return OwnedResourceProxy;
}(_SimpleResourceProxy__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/enums/Enum.js
var Enum = __webpack_require__(25);

// CONCATENATED MODULE: ./src/enums/DeletedState.js
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
 * Enum containing the possible different values for {@link RequestParameters#deleted}
 * @enum {string}
 * @property {string} ALL - Don't discriminate between deleted items and non-deleted resources
 * @property {string} BOTH - Don't discriminate between deleted items and non-deleted resources
 * @property {string} NONE - Don't return deleted resources
 * @property {string} ONLY - Only return deleted resources
 * @readonly
 */

var DeletedState = new Enum["default"]({
  ALL: 'all',
  BOTH: 'all',
  NONE: 'none',
  ONLY: 'only'
});
// CONCATENATED MODULE: ./src/enums/ResultStatus.js
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
 * Enum containing the possible different values for {@link RequestParameters#deleted}
 * @enum {string}
 * @property {string} QUEUED - Job has been queued
 * @property {string} PROCESSING - Job is processing
 * @property {string} COMPLETED - Job has been completed
 * @property {string} CANCEL - Job has been canceled
 * @property {string} FAILED - Job has failed
 * @readonly
 */

var ResultStatus = new Enum["default"]({
  QUEUED: 'queued',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  CANCEL: 'canceled',
  FAILED: 'failed'
});
// CONCATENATED MODULE: ./src/enums/JobMonitorFilter.js
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

var JobMonitorFilter = new Enum["default"](Object.assign({}, ResultStatus, {
  DEFAULT: 'default'
}));
// CONCATENATED MODULE: ./src/enums/index.js
/* concated harmony reexport Enum */__webpack_require__.d(__webpack_exports__, "Enum", function() { return Enum["default"]; });
/* concated harmony reexport DeletedState */__webpack_require__.d(__webpack_exports__, "DeletedState", function() { return DeletedState; });
/* concated harmony reexport JobMonitorFilter */__webpack_require__.d(__webpack_exports__, "JobMonitorFilter", function() { return JobMonitorFilter; });
/* concated harmony reexport ResultStatus */__webpack_require__.d(__webpack_exports__, "ResultStatus", function() { return ResultStatus; });
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






/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(4);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./src/utils/StaticClass.js
var StaticClass = __webpack_require__(52);

// EXTERNAL MODULE: ./src/utils/node.js
var node = __webpack_require__(14);

// EXTERNAL MODULE: ./src/storage/DataStoreContract.js
var DataStoreContract = __webpack_require__(36);

// CONCATENATED MODULE: ./src/storage/CookiesDriver.js






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
 * @private
 * @todo fix
 */

var CookiesDriver_CookiesDriver =
/*#__PURE__*/
function (_DataStoreContract) {
  inherits_default()(CookiesDriver, _DataStoreContract);

  function CookiesDriver() {
    var _this;

    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '_m4n_';

    classCallCheck_default()(this, CookiesDriver);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(CookiesDriver).call(this));
    _this.__prefix = prefix;
    return _this;
  }
  /**
   * Cookie name prefix
   * @returns {String} - Prefix
   * @private
   */


  createClass_default()(CookiesDriver, [{
    key: "set",

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

      var cookie = "".concat(name, "=").concat(value, "; expires=").concat(expires);

      if (CookiesDriver.secure) {
        cookie += '; secure';
      }

      document.cookie = cookie;
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "get",
    value: function get(name) {
      name = this._prefix + name;
      return this._toObject()[name];
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "remove",
    value: function remove(name) {
      name = encodeURIComponent(this._prefix + name);
      var cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:01 GMT");

      if (CookiesDriver.secure) {
        cookie += ';secure';
      }

      document.cookie = cookie;
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "keys",
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
    key: "_toObject",
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
    key: "_prefix",
    get: function get() {
      return this.__prefix;
    }
    /**
     * @inheritDoc
     */

  }], [{
    key: "secure",
    get: function get() {
      return window.location.protocol === 'https:';
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "available",
    get: function get() {
      return !Object(node["isNode"])();
    }
  }]);

  return CookiesDriver;
}(DataStoreContract["default"]);


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(53);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/storage/DummyDriver.js







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


/**
 * Used for storing data during tests
 * @private
 */

var DummyDriver_DummyDriver =
/*#__PURE__*/
function (_DataStoreContract) {
  inherits_default()(DummyDriver, _DataStoreContract);

  function DummyDriver() {
    classCallCheck_default()(this, DummyDriver);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(DummyDriver).apply(this, arguments));
  }

  createClass_default()(DummyDriver, [{
    key: "set",

    /**
     * Store a value in the storage
     * @param {String} name - value name
     * @param {*} value - value
     * @returns {void}
     */
    value: function set(name, value) {
      this.constructor._data[name] = value;
    }
    /**
     * Get a value from the store
     * @param {String} name - value name
     * @returns {*} - value
     */

  }, {
    key: "get",
    value: function get(name) {
      return this.constructor._data[name];
    }
    /**
     * Remove a value from the store
     * @param {String} name - value name
     * @returns {void}
     */

  }, {
    key: "remove",
    value: function remove(name) {
      delete this.constructor._data[name];
    }
    /**
     * Storage keys
     * @returns {Array<String>} - Stored keys
     */

  }, {
    key: "keys",
    value: function keys() {
      return Object.keys(this.constructor._data);
    }
  }], [{
    key: "available",

    /**
     * @inheritDoc
     */
    get: function get() {
      return Object(node["isNode"])() && (process.env || {}).NODE_ENV === 'test';
    }
    /**
     * If the storage is secure
     * @returns {boolean} - Secure storage
     */

  }, {
    key: "secure",
    get: function get() {
      return true;
    }
  }]);

  return DummyDriver;
}(DataStoreContract["default"]);

defineProperty_default()(DummyDriver_DummyDriver, "_data", {});


// EXTERNAL MODULE: ./src/storage/FileDriver.js
var FileDriver = __webpack_require__(78);

// CONCATENATED MODULE: ./src/storage/LocalStorageDriver.js






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
 * @private
 */

var LocalStorageDriver_LocalStorageDriver =
/*#__PURE__*/
function (_DataStoreContract) {
  inherits_default()(LocalStorageDriver, _DataStoreContract);

  function LocalStorageDriver() {
    classCallCheck_default()(this, LocalStorageDriver);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(LocalStorageDriver).apply(this, arguments));
  }

  createClass_default()(LocalStorageDriver, [{
    key: "set",

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
    key: "get",
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
    key: "remove",
    value: function remove(name) {
      name = LocalStorageDriver._prefix + name;
      window.localStorage.removeItem(name);
    }
    /**
     * Storage keys
     * @returns {Array<String>} - Stored keys
     */

  }, {
    key: "keys",
    value: function keys() {
      var keys = [];
      var storage = window.localStorage;
      var prefix = LocalStorageDriver._prefix;

      for (var i = 0; i < storage.length; i++) {
        var key = storage.key(i);

        if (key.startsWith(prefix)) {
          key = key.replace(new RegExp("^".concat(prefix)), '');
          keys.push(key);
        }
      }

      return keys;
    }
  }], [{
    key: "_prefix",

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
    key: "available",
    get: function get() {
      return !Object(node["isNode"])();
    }
  }]);

  return LocalStorageDriver;
}(DataStoreContract["default"]);


// CONCATENATED MODULE: ./src/storage/StorageManager.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StorageManager_StorageManager; });






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
 * @private
 */

var StorageManager_StorageManager =
/*#__PURE__*/
function (_StaticClass) {
  inherits_default()(StorageManager, _StaticClass);

  function StorageManager() {
    classCallCheck_default()(this, StorageManager);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(StorageManager).apply(this, arguments));
  }

  createClass_default()(StorageManager, null, [{
    key: "available",

    /**
     * Available storage drivers
     * @returns {Array.<function>} - Available storage drivers
     */
    get: function get() {
      return [DummyDriver_DummyDriver, LocalStorageDriver_LocalStorageDriver, // CookiesDriver,
      FileDriver["default"]].filter(function (x) {
        return x.available;
      });
    }
    /**
     * Get LocalStorageDriver instance
     * @returns {LocalStorageDriver} - instance
     */

  }, {
    key: "localStorage",
    get: function get() {
      return new LocalStorageDriver_LocalStorageDriver();
    }
    /**
     * Get CookiesDriver instance
     * @returns {CookiesDriver} - instance
     */

  }, {
    key: "cookies",
    get: function get() {
      return new CookiesDriver_CookiesDriver();
    }
    /**
     * Get FileDriver instance
     * @returns {FileDriver} - instance
     */

  }, {
    key: "file",
    get: function get() {
      return new FileDriver["default"]();
    }
    /**
     * Get DummyDriver instance
     * @returns {DummyDriver} - instance
     */

  }, {
    key: "dummy",
    get: function get() {
      return new DummyDriver_DummyDriver();
    }
    /**
     * Returns the best available storage driver. For a secure driver use {@link StorageManager#secure}
     * @returns {DataStoreContract} - Best available storage driver
     */

  }, {
    key: "best",
    get: function get() {
      return new this.available[0]();
    }
    /**
     * Returns the a secure storage driver
     * @returns {DataStoreContract} - Secure storage driver
     */

  }, {
    key: "secure",
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
}(StaticClass["default"]);



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OAuthError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__);







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
var OAuthError =
/*#__PURE__*/
function (_Error) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(OAuthError, _Error);

  /**
   * OAuth error response
   * @param {String} error - OAuth error key
   * @param {String} message - OAuth error message
   */
  function OAuthError(error) {
    var _this;

    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, OAuthError);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(OAuthError).call(this));
    _this._error = String(error);
    _this._message = String(message);
    return _this;
  }
  /**
   * OAuth error message
   * @returns {String} - message
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(OAuthError, [{
    key: "toString",

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
        return "".concat(error, ": ").concat(this._message);
      }

      return error;
    }
  }, {
    key: "message",
    get: function get() {
      return this._message;
    }
    /**
     * OAuth error code
     * @returns {String} - error
     */

  }, {
    key: "error",
    get: function get() {
      return this._error;
    }
  }]);

  return OAuthError;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default()(Error));



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestParameters; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var case__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var case__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(case__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var _utils_hash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5);
/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9);







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

var RequestParameters =
/*#__PURE__*/
function (_EventEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(RequestParameters, _EventEmitter);

  /**
   * RequestParameters constructor
   * @param {Object} object - properties
   */
  function RequestParameters() {
    var _this;

    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RequestParameters);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(RequestParameters).call(this)); // Apply defaults

    RequestParameters.keys().forEach(function (x) {
      return _this._resolve(x);
    }); // Apply properties

    _this.apply(object);

    return _this;
  } // region instance
  // region instance getters

  /**
   * Get page number
   * @returns {Number} - Page number
   * @throws TypeError
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RequestParameters, [{
    key: "_resolve",
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
    key: "_update",
    value: function _update(name, value) {
      var preventEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var _name = '_' + name;

      value = RequestParameters['_validate' + Object(case__WEBPACK_IMPORTED_MODULE_6__["pascal"])(name)](value);
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
        this.emit('change', [{
          name: name,
          value: value
        }]);
        this.emit('change:' + name, value);
      }

      return value;
    } // region utils

    /**
     * Urlencode parameters
     * @returns {string} - HTTP query
     */

  }, {
    key: "encode",
    value: function encode() {
      return Object(_utils_requests__WEBPACK_IMPORTED_MODULE_11__["encodeQueryString"])(this.toParameterObject());
    }
    /**
     * Convert to object
     * @returns {Object} - Object
     */

  }, {
    key: "toObject",
    value: function toObject() {
      var _this2 = this;

      return RequestParameters.keys().reduce(function (obj, key) {
        obj[Object(case__WEBPACK_IMPORTED_MODULE_6__["snake"])(key)] = _this2._resolve(key);
        return obj;
      }, {});
    }
    /**
     * Convert to object
     * @returns {Object} - Object
     */

  }, {
    key: "toParameterObject",
    value: function toParameterObject() {
      var _this3 = this;

      var data = {};
      RequestParameters.keys().forEach(function (key) {
        // Skip extra key
        if (key === 'extra') {
          return;
        }

        data[Object(case__WEBPACK_IMPORTED_MODULE_6__["snake"])(key)] = _this3._resolve(key);
      }); // Fix column names for sort

      data.sort = data.sort.map(function (x) {
        return Object(case__WEBPACK_IMPORTED_MODULE_6__["snake"])(x).replace(/^_/, '-');
      }).join(','); // Fix column names for search

      var _arr = Object.keys(data.search);

      for (var _i = 0; _i < _arr.length; _i++) {
        var key = _arr[_i];
        var snakeKey = key.split(',').map(case__WEBPACK_IMPORTED_MODULE_6__["snake"]).join(',');

        if (key !== snakeKey) {
          data.search[snakeKey] = data.search[key];
          delete data.search[key];
        }
      } // Cast search values


      var _arr2 = Object.keys(data.search);

      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var _key = _arr2[_i2];

        if (typeof data.search[_key] === 'boolean') {
          data.search[_key] = Number(data.search[_key]);
        }

        if (data.search[_key] === null) {
          data.search[_key] = '';
        }
      } // Overwrite using extra properties


      var extra = this._resolve('extra');

      var _arr3 = Object.keys(extra);

      for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
        var _key2 = _arr3[_i3];
        data[_key2] = extra[_key2];
      }

      return data;
    }
    /**
     * Copy object
     * @returns {RequestParameters} - Copy
     */

  }, {
    key: "copy",
    value: function copy() {
      return new RequestParameters(this.toObject());
    }
    /**
     * Different parameters
     * @returns {Array<String>} - keys
     */

  }, {
    key: "token",

    /**
     * Generates a cache token
     * @returns {string} - Cache token
     */
    value: function token() {
      var data = this.toObject();
      delete data['page'];
      delete data['per_page'];
      return Object(_utils_hash__WEBPACK_IMPORTED_MODULE_9__["hashObject"])(data);
    }
    /**
     * Resets all parameters back to default
     * @returns {void}
     */

  }, {
    key: "apply",

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

      var _arr4 = Object.keys(params);

      for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
        var key = _arr4[_i4];
        var Key = Object(case__WEBPACK_IMPORTED_MODULE_6__["camel"])(key);

        if (key[0] === '_' || !RequestParameters.keys().includes(Key)) {
          continue;
        }

        out.push({
          name: Key,
          value: this._update(Key, params[key], true)
        });
      }

      this.emit('change', out);

      for (var _i5 = 0; _i5 < out.length; _i5++) {
        var _out$_i = out[_i5],
            name = _out$_i.name,
            value = _out$_i.value;
        this.emit('change:' + name, value);
      }

      return out;
    } // endregion utils

  }, {
    key: "page",
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
    key: "perPage",
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
    key: "offset",
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
    key: "search",
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
    key: "sort",
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
    key: "deleted",
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
    key: "extra",
    get: function get() {
      return this._resolve('extra');
    },
    set: function set(value) {
      this._update('extra', value);
    } // endregion instance setters
    // endregion instance
    // region static
    // region getters

    /**
     * Default page number
     * @returns {Number} - Page number
     */

  }], [{
    key: "_validatePage",
    // endregion setters
    // endregion static
    // region validators

    /**
     * Validators should work the same as laravel's ::validate method. This means
     * this means that they will throw a TypeError or return a normalized result.
     */
    value: function _validatePage(value) {
      if (typeof value !== 'number') {
        throw new TypeError("Expected page to be of type 'number' instead got '".concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value), "'"));
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
    key: "_validatePerPage",
    value: function _validatePerPage(value) {
      if (typeof value !== 'number') {
        throw new TypeError("Expected per page to be of type 'Number' instead got '".concat(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_10__["getTypeName"])(value), "'"));
      }

      if (value <= 0) {
        throw new TypeError('Per page must be greater than zero');
      }

      if (Number.isNaN(value) || !Number.isFinite(value)) {
        throw new TypeError('Per page must be a real number');
      }

      if (Math.round(value) !== value) {
        throw new TypeError('Per page must be a natural number');
      } // Upper limit is 50 by default


      value = Math.min(RequestParameters.maxPerPage, value);
      return value;
    }
  }, {
    key: "_validateOffset",
    value: function _validateOffset(value) {
      if (typeof value !== 'number') {
        throw new TypeError("Expected offset to be of type 'Number' instead got '".concat(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_10__["getTypeName"])(value), "'"));
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
    key: "_validateMaxPerPage",
    value: function _validateMaxPerPage(value) {
      if (typeof value !== 'number') {
        throw new TypeError("Expected page to be of type 'Number' instead got '".concat(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_10__["getTypeName"])(value), "'"));
      }

      if (value < 1) {
        throw new TypeError('Value must be greater or equal to 1');
      }

      return value;
    }
  }, {
    key: "_validateSearch",
    value: function _validateSearch(value) {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) !== 'object' || Array.isArray(value)) {
        throw new TypeError("Expected value to be of type \"Object\" got \"".concat(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_10__["getTypeName"])(value), "\""));
      } // Normalization macro


      var normalize = function normalize(x) {
        return typeof x === 'number' ? x.toString() : x;
      };

      var _arr5 = Object.keys(value);

      for (var _i6 = 0; _i6 < _arr5.length; _i6++) {
        var key = _arr5[_i6];
        key = normalize(key);
        value[key] = normalize(value[key]);

        if (typeof key !== 'string') {
          throw new TypeError("Expected key to be of type \"String\" got \"".concat(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_10__["getTypeName"])(key), "\""));
        }

        if (Array.isArray(value[key])) {
          if (value[key].length > 0) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = value[key][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var query = _step.value;

                if (!['string', 'number', 'boolean'].includes(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(query)) && query !== null) {
                  throw new TypeError("Expected query for \"".concat(key, "\" to be of type \"String\", \"Boolean\", \"Number\" or \"null\" got \"").concat(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_10__["getTypeName"])(query), "\""));
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } else {
            // Drop empty nodes
            delete value[key];
          }
        } else if (value[key] === null) {
          delete value[key];
        } else if (!['string', 'number', 'boolean'].includes(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value[key])) && value[key] !== null) {
          throw new TypeError("Expected query value to be of type \"String\", \"Boolean\", \"Number\", \"Array\" or \"null\" got \"".concat(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_10__["getTypeName"])(value[key]), "\""));
        }
      }

      return value;
    }
  }, {
    key: "_validateSort",
    value: function _validateSort(value) {
      if (typeof value === 'string') {
        return this._validateSort(value.split(','));
      }

      if (!(value instanceof Array)) {
        throw new TypeError("Expected sort value to be of type \"Array\" got \"".concat(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_10__["getTypeName"])(value), "\""));
      } // Array keys type checking


      value.filter(function (x) {
        return typeof x !== 'string';
      }).forEach(function (x) {
        throw new TypeError("Expected sort array values to be of type \"String\" got \"".concat(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_10__["getTypeName"])(x), "\""));
      }); // Don't do regex matching because it's something
      // we can just let the server do for us.

      return value;
    }
  }, {
    key: "_validateDeleted",
    value: function _validateDeleted(value) {
      if (typeof value !== 'string') {
        throw new TypeError("Expected deleted to be of type \"string\" got \"".concat(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_10__["getTypeName"])(value), "\". See: DeletedState"));
      }

      value = value.toLowerCase();
      var possible = _enums__WEBPACK_IMPORTED_MODULE_8__["DeletedState"].values();

      if (!possible.includes(value)) {
        throw new TypeError("Expected deleted to be one of ".concat(possible.join(', '), ", got ").concat(value));
      }

      return value;
    }
  }, {
    key: "_validateExtra",
    value: function _validateExtra(value) {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) !== 'object') {
        throw new TypeError("Expected extra to be of type 'object', got '".concat(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_10__["getTypeName"])(value), "'"));
      }

      return value;
    }
  }, {
    key: "keys",
    value: function keys() {
      // enumeration is disabled for properties
      return ['page', 'perPage', 'search', 'sort', 'deleted', 'extra'];
    }
  }, {
    key: "resetDefaults",
    value: function resetDefaults() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = RequestParameters.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;
          delete RequestParameters['_' + key];
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "page",
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
    key: "perPage",
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
    key: "offset",
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
    key: "maxPerPage",
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
    key: "search",
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
    key: "sort",
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
    key: "deleted",
    get: function get() {
      return RequestParameters._deleted || _enums__WEBPACK_IMPORTED_MODULE_8__["DeletedState"].NONE;
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
    key: "extra",
    get: function get() {
      return RequestParameters._extra || {};
    },
    set: function set(value) {
      RequestParameters._extra = RequestParameters._validateExtra(value);
    }
  }]);

  return RequestParameters;
}(events__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApiError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



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
var ApiError =
/*#__PURE__*/
function () {
  /**
   * @param {String} type - Error type
   * @param {String} message - Error message
   * @param {Number} code - Http error code
   * @param {String|null} trace - Stack trace
   */
  function ApiError(type, message, code) {
    var trace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ApiError);

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


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ApiError, [{
    key: "toString",

    /**
     * Display-able string
     * @returns {string} - Displayable error string
     */
    value: function toString() {
      return "[".concat(this._code, "] ").concat(this._type, ": ").concat(this._message);
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
    /**
     * Error message
     * @returns {String} - Error message
     */

  }, {
    key: "message",
    get: function get() {
      return this._message;
    }
    /**
     * Http error code
     * @returns {Number} - Http error code
     */

  }, {
    key: "code",
    get: function get() {
      return this._code;
    }
    /**
     * Returns if the error contained a stacktrace that has been parsed
     * @returns {boolean} - If the Error contains a stacktrace
     */

  }, {
    key: "hasTrace",
    get: function get() {
      return this._trace.length > 0;
    }
    /**
     * Get the parsed stacktrace from the error
     * @returns {Array<{line: Number, file: String, code: String}>} - Stacktrace
     */

  }, {
    key: "trace",
    get: function get() {
      return this._trace;
    }
  }], [{
    key: "_parseTrace",
    value: function _parseTrace(input) {
      // https://regex101.com/r/64cAbt/1
      var regex = /^#(\d+)\s(?:(.*?)\((\d+)\)|(.*?)):\s(.*?)$/gm;
      var output = [];
      var match; // eslint-disable-next-line no-cond-assign

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



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(11);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(4);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./src/enums/index.js + 3 modules
var enums = __webpack_require__(17);

// EXTERNAL MODULE: ./src/errors/ApiError.js
var ApiError = __webpack_require__(22);

// EXTERNAL MODULE: ./src/errors/ValidationError.js
var ValidationError = __webpack_require__(39);

// EXTERNAL MODULE: ./src/oauth/DummyFlow.js
var DummyFlow = __webpack_require__(55);

// EXTERNAL MODULE: ./src/oauth/OAuth.js
var OAuth = __webpack_require__(26);

// EXTERNAL MODULE: ./src/oauth/OAuthToken.js
var OAuthToken = __webpack_require__(24);

// EXTERNAL MODULE: ./src/proxy/ResourceProxy.js
var ResourceProxy = __webpack_require__(37);

// EXTERNAL MODULE: ./src/proxy/SimpleResourceProxy.js + 2 modules
var SimpleResourceProxy = __webpack_require__(30);

// EXTERNAL MODULE: ./src/ResourceCache.js + 1 modules
var ResourceCache = __webpack_require__(75);

// EXTERNAL MODULE: ./src/resources/index.js + 5 modules
var resources = __webpack_require__(7);

// EXTERNAL MODULE: ./src/resources/base/ResourceBase.js
var ResourceBase = __webpack_require__(8);

// EXTERNAL MODULE: ./src/traits/Injectable.js
var Injectable = __webpack_require__(74);

// EXTERNAL MODULE: ./src/utils/hash.js
var hash = __webpack_require__(35);

// CONCATENATED MODULE: ./src/utils/Logger.js



/**
 * Simple logger implementation
 */
var Logger_Logger =
/*#__PURE__*/
function () {
  /**
   * Create a Logger instance
   * @param {string} [logLevel=warn] - Log level
   */
  function Logger() {
    var logLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'warn';

    classCallCheck_default()(this, Logger);

    this.logLevel = logLevel;
  }
  /**
   * Get available log levels
   * @returns {Array<string>} - Log levels
   */


  createClass_default()(Logger, [{
    key: "getLogLevels",
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
    key: "log",
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
    key: "debug",
    value: function debug(message) {
      this.log(message, 'debug');
    }
    /**
     * Log an informative message
     * @param {string} message - Message to be logged
     * @returns {void}
     */

  }, {
    key: "info",
    value: function info(message) {
      this.log(message, 'info');
    }
    /**
     * Log a warning message
     * @param {string} message - Message to be logged
     * @returns {void}
     */

  }, {
    key: "warn",
    value: function warn(message) {
      this.log(message, 'warn');
    }
    /**
     * Log an error message
     * @param {string} message - Message to be logged
     * @returns {void}
     */

  }, {
    key: "error",
    value: function error(message) {
      this.log(message, 'error');
    }
    /**
     * Get the current log level
     * @returns {string} - log level
     */

  }, {
    key: "_shouldLog",
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
    key: "logLevel",
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
        throw new TypeError("Expected one of ".concat(this.getLogLevels().join(', '), ". Got ").concat(value));
      }

      this._logLevel = value;
    }
  }]);

  return Logger;
}();


// EXTERNAL MODULE: ./src/utils/node.js
var node = __webpack_require__(14);

// EXTERNAL MODULE: ./src/utils/reflection.js
var reflection = __webpack_require__(5);

// EXTERNAL MODULE: ./src/utils/requests.js
var requests = __webpack_require__(9);

// CONCATENATED MODULE: ./src/Maps4News.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Maps4News_Maps4News; });







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
 * Base API class
 *
 * @mixes Injectable
 */

var Maps4News_Maps4News =
/*#__PURE__*/
function (_mix) {
  inherits_default()(Maps4News, _mix);

  /**
   * @param {OAuth|string} auth - Authentication flow
   * @param {string} host - Remote API host
   */
  function Maps4News() {
    var _this;

    var auth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new DummyFlow["default"]();
    var host = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "https://api.maps4news.com";

    classCallCheck_default()(this, Maps4News);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Maps4News).call(this));

    if (typeof auth === 'string') {
      var token = auth;
      auth = new DummyFlow["default"]();
      auth.token = new OAuthToken["default"](token, 'Bearer', new Date('2100-01-01T01:00:00'), ['*']);
    }

    _this.auth = auth;
    _this.host = host;
    _this.autoLogout = true;

    var bool = function bool(str) {
      return String(str).toLowerCase() === 'true';
    };
    /**
     * Defaults for common parameters. These are populated during the build process using the `.env` file.
     * @type {{cacheSeconds: number, shareCache: boolean, autoUpdateSharedCache: boolean, dereferenceCache: boolean}}
     */


    _this.defaults = {
      cacheSeconds: Number("1800"),
      shareCache: bool("true"),
      autoUpdateSharedCache: bool("true"),
      dereferenceCache: bool("false")
    };
    _this._cache = new ResourceCache["default"](_this.defaults.cacheSeconds, _this.defaults.dereferenceCache);
    _this._logger = new Logger_Logger("warn");
    return _this;
  }
  /**
   * Get api version
   * @returns {string} - Api version
   * @constant
   */


  createClass_default()(Maps4News, [{
    key: "saveToken",

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
    key: "authenticate",
    value: function authenticate() {
      var _this2 = this;

      return this.auth.authenticate().then(function () {
        return _this2;
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
    key: "request",
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
        url = "".concat(this._host, "/").concat(this.version, "/").concat(url);
      }

      method = method.toUpperCase();

      if (!(headers instanceof requests["Headers"])) {
        headers = new requests["Headers"](headers);
      }

      if (this.authenticated) {
        headers.set('Authorization', this.auth.token.toString());
      } // Automatically detect possible content-type header


      var isFormData = data instanceof requests["FormData"];

      if (typeof_default()(data) === 'object' && !isFormData) {
        data = JSON.stringify(data);

        if (!headers.has('Content-Type')) {
          headers.set('Content-Type', 'application/json');
        }
      } else if (data && !headers.has('Content-Type') && !isFormData) {// headers.set('Content-Type', 'application/x-www-form-urlencoded');
      }

      if (!headers.has('Accept')) {
        headers.set('Accept', 'application/json');
      }

      if (['GET', 'HEAD'].includes(method)) {
        // eslint-disable-next-line no-undefined
        data = undefined;
      }

      var init = {
        headers: headers,
        method: method,
        redirect: 'follow',
        mode: 'cors'
      };

      if (data) {
        init.body = data;
      }

      return this._fetch(url, init, bundleResponse);
    }
  }, {
    key: "_fetch",
    value: function _fetch(url, init, bundleResponse) {
      var _this3 = this;

      return Object(requests["fetch"])(url, init).then(function (response) {
        var respond = function respond(data) {
          return !bundleResponse ? data : {
            response: response,
            data: data
          };
        };

        if (response.status === 429) {
          var resetTimestamp = Number(response.headers.get('X-RateLimit-Reset')) * 1000;
          var waitTime = resetTimestamp - Date.now();
          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              _this3._fetch(url, init, bundleResponse).then(resolve).catch(reject);
            }, waitTime);
          });
        } // Check if there is an error response and parse it


        if (!response.ok) {
          return response.json().then(function (data) {
            throw _this3._parseErrorResponse(data, response.status);
          });
        }

        if (response.headers.has('Content-Type')) {
          var contentType = response.headers.get('Content-Type').toLowerCase(); // Any type of text

          if (contentType.startsWith('text/')) {
            return response.text().then(respond);
          } // Response data


          if (contentType === 'application/json') {
            return response.json().then(function (x) {
              // Just in case, code path should in theory never be reached
              if (typeof x.success === 'boolean' && !x.success) {
                throw _this3._parseErrorResponse(x, response.status);
              }

              return x;
            }).then(function (x) {
              return x.data ? x.data : {};
            }).then(respond);
          }
        }

        if (Object(node["isNode"])()) {
          return response.buffer().then(respond);
        }

        return response.blob().then(respond);
      });
    }
  }, {
    key: "_parseErrorResponse",
    value: function _parseErrorResponse(data, status) {
      var err = data.error;

      if (!err['validation_errors']) {
        var apiError = new ApiError["default"](err.type, err.message, status, err.trace);

        if (apiError.type === 'AuthenticationException' && apiError.message.startsWith('Unauthenticated') && apiError.code === 401) {
          this.logger.warn('Lost Maps4News session, please re-authenticate');

          if (this.autoLogout) {
            this.logout();
          }
        }

        return apiError;
      }

      return new ValidationError["default"](err.type, err.message, status, err['validation_errors']);
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
    key: "static",
    value: function _static(Target) {
      if (Object(reflection["isParentOf"])(ResourceBase["default"], Target)) {
        return new ResourceProxy["default"](this, Target);
      }

      var Constructor =
      /*#__PURE__*/
      function (_ResourceBase) {
        inherits_default()(AnonymousResource, _ResourceBase);

        function AnonymousResource() {
          classCallCheck_default()(this, AnonymousResource);

          return possibleConstructorReturn_default()(this, getPrototypeOf_default()(AnonymousResource).apply(this, arguments));
        }

        createClass_default()(AnonymousResource, [{
          key: "resourcePath",
          get: function get() {
            return String(Target);
          }
        }], [{
          key: "resourceName",
          get: function get() {
            return 'anonymous';
          }
        }]);

        return AnonymousResource;
      }(ResourceBase["default"]);

      Object.defineProperty(Constructor, 'name', {
        value: "AnonymousResource_".concat(Object(hash["fnv32b"])(String(Target)))
      });
      return this.static(Constructor);
    }
    /**
     * Choropleth accessor
     * @see {@link Choropleth}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "getSvgSetType",

    /**
     * Get SVG set types
     * @see {@link SvgSet}
     * @returns {Promise} - Resolves with a new {@link Enum} instance and rejects with {@link ApiError}
     */
    value: function getSvgSetType() {
      return this.request('/svgs/sets/types').then(function (data) {
        return new enums["Enum"](data, true);
      });
    }
    /**
     * Get font styles
     * @see {@link Font}
     * @returns {Promise} - Resolves with a new {@link Enum} instance and rejects with {@link ApiError}
     */

  }, {
    key: "getFontStyles",
    value: function getFontStyles() {
      return this.request('/fonts/styles').then(function (data) {
        return new enums["Enum"](data, true);
      });
    }
    /**
     * Forget the current session
     * This will clean up any stored OAuth states stored using {@link StateContainer} and any OAuth tokens stored
     * @returns {void}
     */

  }, {
    key: "logout",
    value: function logout() {
      this.auth.logout();
    }
    /**
     * Get if the api should automatically call logout when it counters an AuthenticationException
     * @returns {boolean} - Auto logout
     * @see {@link logout}
     */

  }, {
    key: "version",
    get: function get() {
      return 'v1';
    }
    /**
     * Get the shared cache instance
     * @returns {ResourceCache} - Shared cache instance
     */

  }, {
    key: "cache",
    get: function get() {
      return this._cache;
    }
    /**
     * Get authentication provider instance
     * @returns {OAuth} - OAuth instance
     */

  }, {
    key: "auth",
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
      if (!Object(reflection["isParentOf"])(OAuth["default"], value)) {
        throw new TypeError('auth must be an instance of OAuth');
      }

      this._auth = value;
    }
    /**
     * Test if the client is authenticated with the api and has a valid token
     * @returns {boolean} - If the client is authenticated with the api
     */

  }, {
    key: "logger",
    get: function get() {
      return this._logger;
    }
  }, {
    key: "authenticated",
    get: function get() {
      return this.auth.authenticated;
    }
    /**
     * The current host
     * @returns {string} - The current host
     */

  }, {
    key: "host",
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
    key: "choropleths",
    get: function get() {
      return this.static(resources["Choropleth"]);
    }
    /**
     * Color accessor
     * @see {@link Color}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "colors",
    get: function get() {
      return this.static(resources["Color"]);
    }
    /**
     * Tag accessor
     * @see {@link Tag}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "tags",
    get: function get() {
      return this.static(resources["Tag"]);
    }
    /**
     * Contract accessor
     * @see {@link Contract}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "contracts",
    get: function get() {
      return this.static(resources["Contract"]);
    }
    /**
     * Dimension accessor
     * @see {@link Dimension}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "dimensions",
    get: function get() {
      return this.static(resources["Dimension"]);
    }
    /**
     * Dimension set accessor
     * @see {@link DimensionSet}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "dimensionSets",
    get: function get() {
      return this.static(resources["DimensionSet"]);
    }
    /**
     * Faq accessor
     * @see {@link Faq}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "faqs",
    get: function get() {
      return this.static(resources["Faq"]);
    }
    /**
     * Feature accessor
     * @see {@link Feature}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "features",
    get: function get() {
      return this.static(resources["Feature"]);
    }
    /**
     * Featured jobs accessor
     * @see {@link Job}
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "featuredMaps",
    get: function get() {
      return new SimpleResourceProxy["default"](this, resources["Job"], '/jobs/featured');
    }
    /**
     * Font accessor
     * @see {@link Font}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "fonts",
    get: function get() {
      return this.static(resources["Font"]);
    }
    /**
     * FontFamily accessor
     * @see {@link FontFamily}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "fontFamilies",
    get: function get() {
      return this.static(resources["FontFamily"]);
    }
    /**
     * Highlight accessor
     * @see {@link Highlight}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "highlights",
    get: function get() {
      return this.static(resources["Highlight"]);
    }
    /**
     * InsetMap accessor
     * @see {@link InsetMap}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "insetMaps",
    get: function get() {
      return this.static(resources["InsetMap"]);
    }
    /**
     * Job accessor
     * @see {@link Job}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "jobs",
    get: function get() {
      return this.static(resources["Job"]);
    }
    /**
     * JobShare accessor
     * @see {@link JobShare}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "jobShares",
    get: function get() {
      return this.static(resources["JobShare"]);
    }
    /**
     * JobType accessor
     * @see {@link JobType}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "jobTypes",
    get: function get() {
      return this.static(resources["JobType"]);
    }
    /**
     * Language accessor
     * @see {@link Language}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "languages",
    get: function get() {
      return this.static(resources["Language"]);
    }
    /**
     * Layer accessor
     * @see {@link Layer}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "layers",
    get: function get() {
      return this.static(resources["Layer"]);
    }
    /**
     * Mapstyle accessor
     * @see {@link Mapstyle}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "mapstyles",
    get: function get() {
      return this.static(resources["Mapstyle"]);
    }
    /**
     * MapstyleSet accessor
     * @see {@link MapstyleSet}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "mapstyleSets",
    get: function get() {
      return this.static(resources["MapstyleSet"]);
    }
    /**
     * Notification accessor
     * @see {@link Notification}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "notifications",
    get: function get() {
      return this.static(resources["Notification"]);
    }
    /**
     * Organisation accessor
     * @see {@link Organisation}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "organisations",
    get: function get() {
      return this.static(resources["Organisation"]);
    }
    /**
     * Permission accessor
     * @see {@link Permission}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "permissions",
    get: function get() {
      return this.static(resources["Permission"]);
    }
    /**
     * Role accessor
     * @see {@link Role}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "roles",
    get: function get() {
      return this.static(resources["Role"]);
    }
    /**
     * PlaceName accessor
     * @see {@link PlaceName}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "placeNames",
    get: function get() {
      return this.static(resources["PlaceName"]);
    }
    /**
     * Svg accessor
     * @see {@link Svg}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "svgs",
    get: function get() {
      return this.static(resources["Svg"]);
    }
    /**
     * SvgSet accessor
     * @see {@link SvgSet}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "svgSets",
    get: function get() {
      return this.static(resources["SvgSet"]);
    }
    /**
     * User accessor
     * @see {@link User}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "users",
    get: function get() {
      return this.static(resources["User"]);
    }
  }, {
    key: "autoLogout",
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
}(Object(reflection["mix"])(null, Injectable["default"]));



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OAuthToken; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storage_StorageManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);



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
 * Oauth token container
 */

var OAuthToken =
/*#__PURE__*/
function () {
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

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, OAuthToken);

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


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(OAuthToken, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.type, " ").concat(this.token);
    }
    /**
     * Get equivalent OAuth response object
     * @returns {{access_token: (String|*), token_type: String, expires_in: Number, scope: (Array.<String>|Array|*)}} - Raw response object
     */

  }, {
    key: "toResponseObject",
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
    key: "toQueryString",
    value: function toQueryString() {
      return Object(_utils_requests__WEBPACK_IMPORTED_MODULE_3__["encodeQueryString"])(this.toResponseObject());
    }
    /**
     * If the token has expired
     * @returns {Boolean} - expired
     */

  }, {
    key: "save",

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
      }; // Third parameter is only used when we're using cookies

      _storage_StorageManager__WEBPACK_IMPORTED_MODULE_2__["default"].secure.set(name, JSON.stringify(data), this.expires);
    }
    /**
     * Recover a token by looking through the HTTPS cookies and localStorage
     * @param {String} name - Storage key name
     * @returns {OAuthToken|null} - null if none could be recovered
     * @see OAuthToken#save
     */

  }, {
    key: "expired",
    get: function get() {
      return new Date() > this.expires;
    }
    /**
     * Internal storage key name
     * @returns {String} - storage name
     * @constant
     */

  }], [{
    key: "fromResponseObject",

    /**
     * Build instance from response object
     * @param {String|Object} data - object or JSON string
     * @returns {OAuthToken} - New OAuthToken instance
     */
    value: function fromResponseObject(data) {
      if (typeof data === 'string') {
        data = JSON.parse(data);
      } // Default expires = 5 days


      var expires = 432000;

      if (typeof data['exipires_in'] !== 'undefined') {
        expires = Number(data['expires_in']);
      } else if (typeof data['expires'] === 'string') {
        expires = new Date(data['expires']);
      }

      return new OAuthToken(data['access_token'], data['token_type'], expires, data['scope'] || []);
    }
  }, {
    key: "recover",
    value: function recover() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : OAuthToken.storageName;
      var data = _storage_StorageManager__WEBPACK_IMPORTED_MODULE_2__["default"].secure.get(name);

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
    key: "storageName",
    get: function get() {
      return 'api_token';
    }
  }]);

  return OAuthToken;
}();



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enum; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var case__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var case__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(case__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _utils_Unobservable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71);







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

var Enum =
/*#__PURE__*/
function (_Unobservable) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Enum, _Unobservable);

  /**
   * @param {Object<String, *>|Array<String>} enums - Data to build the enum from
   * @param {boolean} auto - Auto generate enum from data making assumptions about
   *                         the data, requires enums to be of type array.
   */
  function Enum(enums) {
    var _this;

    var auto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Enum);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Enum).call(this));
    var isArray = enums instanceof Array;

    if (auto && !isArray) {
      throw new TypeError("Expected enums to be of type \"Array\" got \"".concat(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_7__["getTypeName"])(enums), "\""));
    }

    if (isArray && auto) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = enums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var row = _step.value;
          var key = Object(case__WEBPACK_IMPORTED_MODULE_6__["constant"])(row);
          Object.defineProperty(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), key, {
            enumerable: true,
            value: row
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
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
          Object.defineProperty(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), _key, {
            enumerable: true,
            value: Enum._iota
          });
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    } else {
      var _arr = Object.keys(enums);

      for (var _i = 0; _i < _arr.length; _i++) {
        var _key2 = _arr[_i];
        var init = {
          enumerable: true
        };

        if (typeof enums[_key2] === 'function') {
          init.get = enums[_key2];
        } else {
          init.value = enums[_key2];
        }

        Object.defineProperty(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), _key2, init);
      }
    }

    Object.freeze(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)));
    return _this;
  }
  /**
   * List enum keys
   * @returns {Array} - Enum keys
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Enum, [{
    key: "keys",
    value: function keys() {
      return Object.keys(this);
    }
    /**
     * List enum values
     * @returns {Array<*>} - Enum values
     */

  }, {
    key: "values",
    value: function values() {
      var _this2 = this;

      return this.keys().map(function (key) {
        return _this2[key];
      }).filter(function (v, i, s) {
        return s.indexOf(v) === i;
      });
    }
  }], [{
    key: "_iota",
    get: function get() {
      if (!Enum.__iota) {
        Enum.__iota = 0;
      }

      return Enum.__iota++;
    }
  }]);

  return Enum;
}(_utils_Unobservable__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OAuth; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _errors_AbstractError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _errors_ApiError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _errors_OAuthError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _storage_StorageManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _OAuthToken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
/* harmony import */ var _StateContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58);





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
 * OAuth base class
 * @abstract
 */

var OAuth =
/*#__PURE__*/
function () {
  /**
   * @param {String} clientId - OAuth client id
   * @param {Array<String>} scopes - A list of required scopes
   * @returns {void}
   */
  function OAuth(clientId) {
    var scopes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['*'];

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, OAuth);

    if (this.constructor === OAuth) {
      throw new _errors_AbstractError__WEBPACK_IMPORTED_MODULE_4__["AbstractClassError"]();
    }

    this.clientId = String(clientId);
    this.scopes = scopes;
    this.token = clientId !== null ? _OAuthToken__WEBPACK_IMPORTED_MODULE_8__["default"].recover() : null;
    this.host = "https://api.maps4news.com";
    this.path = '/';
  }
  /**
   * If the current instance has a valid token
   * @returns {Boolean} - if a valid token is availble
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(OAuth, [{
    key: "authenticate",

    /**
     * Authenticate
     * @returns {Promise} - Promise resolves with OAuthToken and rejects with OAuthError
     * @abstract
     */
    value: function authenticate() {
      throw new _errors_AbstractError__WEBPACK_IMPORTED_MODULE_4__["AbstractMethodError"]();
    }
    /**
     * Forget the current session
     * Empty the session token store and forget the api token
     * @returns {void}
     */

  }, {
    key: "forget",
    value: function forget() {
      _StateContainer__WEBPACK_IMPORTED_MODULE_9__["default"].clean();
      _storage_StorageManager__WEBPACK_IMPORTED_MODULE_7__["default"].secure.remove(_OAuthToken__WEBPACK_IMPORTED_MODULE_8__["default"].storageName);
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
    key: "logout",
    value: function () {
      var _logout = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, init, response, body, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.token) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

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

                throw new _errors_ApiError__WEBPACK_IMPORTED_MODULE_5__["default"](data.error.type, data.error.message, response.status);

              case 14:
                if (response.ok) {
                  _context.next = 16;
                  break;
                }

                throw new _errors_OAuthError__WEBPACK_IMPORTED_MODULE_6__["default"]('logout_fail', 'Logout failed:\n' + body);

              case 16:
                _context.prev = 16;
                this.forget();
                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4,, 16, 19]]);
      }));

      return function logout() {
        return _logout.apply(this, arguments);
      };
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
    key: "importToken",
    value: function importToken(token) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Bearer';
      var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 432000;
      var scopes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      this.token = new _OAuthToken__WEBPACK_IMPORTED_MODULE_8__["default"](token, type, expires, scopes);
    }
  }, {
    key: "authenticated",
    get: function get() {
      return this.token !== null && !this.token.expired;
    }
  }]);

  return OAuth;
}();



/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(2);

var setPrototypeOf = __webpack_require__(77);

var isNativeFunction = __webpack_require__(88);

var construct = __webpack_require__(89);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CrudSetBase; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _errors_AbstractError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _CrudBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var case__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var case__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(case__WEBPACK_IMPORTED_MODULE_7__);






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
 * Crud base for resource sets
 * @abstract
 */

var CrudSetBase =
/*#__PURE__*/
function (_CrudBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CrudSetBase, _CrudBase);

  function CrudSetBase() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CrudSetBase);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CrudSetBase).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CrudSetBase, [{
    key: "items",

    /**
     * Get items associated with the set
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */
    get: function get() {
      var url = "".concat(this.url, "/items");
      var data = {};
      data[this.constructor.foreignKeyName] = this.id;
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
    key: "_Child",
    get: function get() {
      throw new _errors_AbstractError__WEBPACK_IMPORTED_MODULE_5__["AbstractError"]();
    }
    /**
     * Get the foreign key name
     * @returns {string} - Foreign key name
     * @example
     * api.fontFamilies.select(1).constructor.foreignKeyName === 'fontFamilyId'
     */

  }], [{
    key: "foreignKeyName",
    get: function get() {
      if (!this._fk) {
        var key = this.name; // ex: FontFamily

        key = Object(case__WEBPACK_IMPORTED_MODULE_7__["camel"])(key); // ex: fontFamily

        this._fk = "".concat(key, "Id");
      }

      return this._fk;
    }
  }]);

  return CrudSetBase;
}(_CrudBase__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobShare; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






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


var JobShare =
/*#__PURE__*/
function (_CrudBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(JobShare, _CrudBase);

  function JobShare() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, JobShare);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(JobShare).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(JobShare, [{
    key: "save",

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
    key: "resourcePath",
    get: function get() {
      return '/jobs/shares/{id}';
    }
  }], [{
    key: "visibility",
    get: function get() {
      return JobShareVisibility;
    }
  }, {
    key: "resourceName",
    get: function get() {
      return 'job-shares';
    }
  }]);

  return JobShare;
}(_base_CrudBase__WEBPACK_IMPORTED_MODULE_5__["default"]);
/**
 * Job share visibility enum
 * @enum {String}
 */




var JobShareVisibility =
/*#__PURE__*/
function () {
  function JobShareVisibility() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, JobShareVisibility);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(JobShareVisibility, null, [{
    key: "PRIVATE",
    get: function get() {
      return 'private';
    }
  }, {
    key: "ORGANISATION",
    get: function get() {
      return 'organisation';
    }
  }]);

  return JobShareVisibility;
}();

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(11);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./src/Maps4News.js + 1 modules
var Maps4News = __webpack_require__(23);

// EXTERNAL MODULE: ./src/ResourceCache.js + 1 modules
var ResourceCache = __webpack_require__(75);

// EXTERNAL MODULE: ./src/utils/hash.js
var hash = __webpack_require__(35);

// CONCATENATED MODULE: ./src/PaginatedResourceWrapper.js



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
 * Used for wrapping {@link PaginatedResourceListing} to make it spa friendly
 * @todo Allow for manual cache updates, ex: a resource has been modified, deleted, created
 * @deprecated
 */

var PaginatedResourceWrapper_PaginatedResourceWrapper =
/*#__PURE__*/
function () {
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

    classCallCheck_default()(this, PaginatedResourceWrapper);

    // Fields
    this._api = api;
    this._shareCache = shareCache;
    this._currentPage = 1;
    this._context = [];
    /**
     * Available data assembled from the cache
     * @type {Array<ResourceBase>} - Available data
     */

    this.data = []; // Internal

    this._localCache = new ResourceCache["default"](this.api.defaults.cacheSeconds, this.api.defaults.dereferenceCache);
    this._inflight = [];
    this._last = listing;
    this._waiting = false;
    this.on('invalidate', function () {
      return _this.rebuild();
    });

    this._promiseCallback(listing);
  }

  createClass_default()(PaginatedResourceWrapper, [{
    key: "get",

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
    key: "next",
    value: function next() {
      this.get(++this.currentPage);
    }
    /**
     * Grab the previous page
     * @returns {void}
     */

  }, {
    key: "previous",
    value: function previous() {
      this.get(--this.currentPage);
    }
    /**
     * Manually rebuild the data
     * @returns {void}
     */

  }, {
    key: "rebuild",
    value: function rebuild() {
      this.data = this.cache.resolve(this.route, this._last.cacheToken).filter(function (value) {
        return typeof value !== 'undefined';
      });
      this.cache.emitter.emit('post-rebuild', {
        resourceUrl: this._last.route
      });
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
    key: "refresh",
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
    key: "query",

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
      var token = Object(hash["hashObject"])(value);

      if (this._context[token]) {
        this._last = this._context[token];
      } else {
        var parameters = this._last.parameters.copy();

        parameters.page = 1;
        parameters.apply(value);
        this._last = new PaginatedResourceListing_PaginatedResourceListing(this.api, this._last.route, this._last.Target, parameters);
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
    key: "on",

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
    key: "off",
    value: function off(type, handler) {
      this.cache.emitter.off(type, handler);
    }
  }, {
    key: "_promiseCallback",
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
    key: "currentPage",
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
    key: "route",
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
    key: "rows",
    get: function get() {
      return this._last.rows;
    }
    /**
     * Get the number of pages available
     * @returns {Number} - Page count
     */

  }, {
    key: "pageCount",
    get: function get() {
      return this._last.pageCount;
    }
  }, {
    key: "api",
    get: function get() {
      return this._api;
    }
    /**
     * Get the active cache instance
     * @returns {ResourceCache} - Cache instance
     */

  }, {
    key: "cache",
    get: function get() {
      return this.shareCache ? this.api.cache : this._localCache;
    }
    /**
     * Get if the shared cache should be used
     * @returns {Boolean} - Should the shared cache be used
     */

  }, {
    key: "shareCache",
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
    key: "hasNext",
    get: function get() {
      return this.inflight.length === 0 ? this._last.hasNext : this.currentPage < this.pageCount;
    }
    /**
     * If there is a previous page
     * @returns {boolean} - If there is a previous page
     */

  }, {
    key: "hasPrevious",
    get: function get() {
      return this._last.hasPrevious;
    }
    /**
     * List of page numbers that are still mid-flight
     * @returns {Array} - Page numbers that are still mid-flight
     */

  }, {
    key: "inflight",
    get: function get() {
      return this._inflight;
    }
    /**
     * Returns if there are still requests mid-flight
     * @returns {boolean} - Returns if the wrapper is waiting for requests to finish
     */

  }, {
    key: "waiting",
    get: function get() {
      return this._waiting;
    }
  }]);

  return PaginatedResourceWrapper;
}();


// EXTERNAL MODULE: ./src/RequestParameters.js
var RequestParameters = __webpack_require__(21);

// EXTERNAL MODULE: ./src/utils/reflection.js
var reflection = __webpack_require__(5);

// CONCATENATED MODULE: ./src/PaginatedResourceListing.js



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
 * Proxy for accessing paginated resources
 */

var PaginatedResourceListing_PaginatedResourceListing =
/*#__PURE__*/
function () {
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

    classCallCheck_default()(this, PaginatedResourceListing);

    if (!Object(reflection["isParentOf"])(Maps4News["default"], api)) {
      throw new TypeError('Expected api to be of type Maps4News');
    }

    if (!Object(reflection["isParentOf"])(RequestParameters["default"], parameters)) {
      parameters = new RequestParameters["default"](parameters);
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


  createClass_default()(PaginatedResourceListing, [{
    key: "getPage",

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
    key: "next",

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
    key: "previous",
    value: function previous() {
      return this.getPage(this.page - 1);
    }
    /**
     * Wraps {@link PaginatedResourceWrapper} around the page
     * @param {Boolean} shareCache - Share cache across instances
     * @returns {PaginatedResourceWrapper} - Wrapped resource listing
     */

  }, {
    key: "wrap",
    value: function wrap() {
      var shareCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.api.defaults._shareCache;
      return new PaginatedResourceWrapper_PaginatedResourceWrapper(this, this.api, shareCache);
    }
  }, {
    key: "api",
    get: function get() {
      return this._api;
    }
    /**
     * Target route
     * @returns {String} - url
     */

  }, {
    key: "route",
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

        value = "".concat(this._api.host, "/").concat(this._api.version).concat(value);
      }

      this._route = value;
    }
    /**
     * Target to wrap results in
     * @returns {ResourceBase} - Target constructor
     * @constructor
     */

  }, {
    key: "Target",
    get: function get() {
      return this._Target;
    }
    /**
     * Request parameters
     * @returns {RequestParameters} - Request parameters
     */

  }, {
    key: "parameters",
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
    key: "page",
    get: function get() {
      return this.parameters.page;
    }
    /**
     * Maximum amount of items per page
     * @returns {Number} - Amount of items
     */

  }, {
    key: "perPage",
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
    key: "sort",
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
    key: "deleted",
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
    key: "pageCount",
    get: function get() {
      return this._pageCount;
    }
    /**
     * Page data
     * @returns {Array<ResourceBase>} - Wrapped data
     */

  }, {
    key: "data",
    get: function get() {
      return this._data;
    }
    /**
     * Row count
     * @returns {Number} - Row count
     */

  }, {
    key: "rows",
    get: function get() {
      return this._rows;
    }
    /**
     * Optional search query
     * @default {}
     * @return {Object<String, String|Array<String>>} - Query
     */

  }, {
    key: "query",
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
    key: "hasNext",
    get: function get() {
      return this.page < this.pageCount;
    }
    /**
     * If there is a previous page
     * @returns {boolean} - If there is a previous page
     */

  }, {
    key: "hasPrevious",
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
    key: "cacheToken",
    get: function get() {
      return this.parameters.token();
    }
  }]);

  return PaginatedResourceListing;
}();


// EXTERNAL MODULE: ./src/ResourceLister.js
var ResourceLister = __webpack_require__(59);

// EXTERNAL MODULE: ./src/resources/base/ResourceBase.js
var ResourceBase = __webpack_require__(8);

// CONCATENATED MODULE: ./src/proxy/SimpleResourceProxy.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleResourceProxy_SimpleResourceProxy; });




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
 * Proxy for accessing resource. This will make sure that they
 * are properly wrapped before the promise resolves.
 * @protected
 */

var SimpleResourceProxy_SimpleResourceProxy =
/*#__PURE__*/
function () {
  /**
   * @param {Maps4News} api - Instance of the api
   * @param {ResourceBase} Target - Target to wrap
   * @param {?string} [altUrl=null] - Internal use, Optional alternative url for more complex routing
   * @param {object} seedData - Internal use, used for seeding ::new
   */
  function SimpleResourceProxy(api, Target) {
    var altUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var seedData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    classCallCheck_default()(this, SimpleResourceProxy);

    if (!Object(reflection["isParentOf"])(ResourceBase["default"], Target)) {
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


  createClass_default()(SimpleResourceProxy, [{
    key: "new",

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
    key: "list",
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
    key: "listAndWrap",
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
    key: "lister",
    value: function lister() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var maxRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
      return new ResourceLister["default"](this.api, this.baseUrl, this.Target, parameters, maxRows, this.Target.resourceUrlKey);
    }
  }, {
    key: "_buildResolver",
    value: function _buildResolver() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var paramType = typeof_default()(params);

      var url = this.baseUrl;

      if (!['number', 'object'].includes(paramType)) {
        throw new TypeError("Expected params to be of type number or object. Got \"".concat(paramType, "\""));
      }

      if (paramType === 'number') {
        return this._buildResolver({
          page: params
        });
      }

      if (!(params instanceof RequestParameters["default"])) {
        params = new RequestParameters["default"](params);
      }

      return new PaginatedResourceListing_PaginatedResourceListing(this._api, url, this.Target, params);
    }
  }, {
    key: "baseUrl",
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
    key: "api",
    get: function get() {
      return this._api;
    }
    /**
     * Target to wrap results in
     * @returns {ResourceBase} - Target constructor
     * @constructor
     */

  }, {
    key: "Target",
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
    key: "accessorName",
    get: function get() {
      return this.Target.name.replace(/([A-Z])/g, function (x) {
        return ' ' + x;
      }).trim();
    }
  }]);

  return SimpleResourceProxy;
}();



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobResult; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _base_ResourceBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);






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



var JobResult =
/*#__PURE__*/
function (_ResourceBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(JobResult, _ResourceBase);

  function JobResult() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, JobResult);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(JobResult).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(JobResult, [{
    key: "downloadOutput",

    /**
     * Get archive blob url
     * @returns {PromiseLike<{filename: string, blob: string}>} - Resolves with a blob reference and it's filename and rejects with {@link ApiError}
     */
    value: function downloadOutput() {
      return Object(_utils_requests__WEBPACK_IMPORTED_MODULE_5__["downloadFile"])(this.outputUrl, this._getDownloadHeaders());
    }
    /**
     * Get the output url url
     * @returns {string} - Output url url
     */

  }, {
    key: "getOutputUrl",

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
    key: "downloadLog",

    /**
     * Get log blob url
     * @returns {Promise} - Resolves with a {@link String} containing a blob reference to the archive and rejects with {@link ApiError}
     */
    value: function downloadLog() {
      return Object(_utils_requests__WEBPACK_IMPORTED_MODULE_5__["downloadFile"])(this.logUrl, this._getDownloadHeaders()).then(function (data) {
        return data.blob;
      });
    }
    /**
     * Job result preview url, usable in an `<img>` tag
     * @returns {string} - Preview url
     */

  }, {
    key: "downloadPreview",

    /**
     * Get image blob url representation
     * @returns {Promise} - Resolves with a {@link String} containing a blob reference to the image and rejects with {@link ApiError}
     */
    value: function downloadPreview() {
      return Object(_utils_requests__WEBPACK_IMPORTED_MODULE_5__["downloadFile"])("".concat(this.previewUrl), this._getDownloadHeaders()).then(function (data) {
        return data.blob;
      });
    }
    /**
     * Get headers for downloading resources
     * @returns {{Accept: string, Authorization: string}} - Request headers
     * @private
     */

  }, {
    key: "_getDownloadHeaders",
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
    key: "dealWith",
    value: function dealWith() {
      var _this = this;

      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var method = value ? 'POST' : 'DELETE';
      return this.api.request(this.url + '/deal-with', method).then(function () {
        _this.dealtWith = value;
        return value;
      });
    }
  }, {
    key: "resourcePath",
    get: function get() {
      return '/jobs/{job_id}/revisions/{revision}/result';
    }
  }, {
    key: "job",

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
    key: "jobRevision",
    get: function get() {
      return this.api.jobs.select(this.jobId).revisions.get(this.id);
    }
    /**
     * Job result archive url
     * @returns {string} - Archive url
     */

  }, {
    key: "outputUrl",
    get: function get() {
      return "".concat(this.url, "/output");
    }
  }, {
    key: "outputUrlUrl",
    get: function get() {
      return "".concat(this.url, "/output-url");
    }
  }, {
    key: "logUrl",
    get: function get() {
      return "".concat(this.url, "/log");
    }
  }, {
    key: "previewUrl",
    get: function get() {
      return "".concat(this.url, "/preview");
    }
  }], [{
    key: "resourceName",
    get: function get() {
      return 'job-result';
    }
  }]);

  return JobResult;
}(_base_ResourceBase__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _traits_HandlesImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76);
/* harmony import */ var _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);






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
 * Layer
 * @extends CrudBase
 * @mixes OwnableResource
 * @mixes HandlesImages
 */

var Layer =
/*#__PURE__*/
function (_mix) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Layer, _mix);

  function Layer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Layer);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Layer).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Layer, null, [{
    key: "resourceName",
    get: function get() {
      return 'layers';
    }
  }]);

  return Layer;
}(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_7__["mix"])(_base_CrudBase__WEBPACK_IMPORTED_MODULE_8__["default"], _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_6__["default"], _traits_HandlesImages__WEBPACK_IMPORTED_MODULE_5__["default"]));



/***/ }),
/* 33 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trait; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



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
 * @mixin
 */
var Trait =
/*#__PURE__*/
function () {
  function Trait() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Trait);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Trait, [{
    key: "initializer",

    /**
     * Optional initialization method
     * @returns {void}
     */
    value: function initializer() {}
  }]);

  return Trait;
}();



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnv32b", function() { return fnv32b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashObject", function() { return hashObject; });
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_0__);
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

var FNV1_32A_INIT = 0x811c9dc5;
/**
 * Fast hash function for non-cryptographic use
 * @param {string} str - Input to be hashed
 * @returns {string} - String representation of the hash
 * @private
 */

function fnv32b(str) {
  var hash = str.split('').map(function (x) {
    return x.charCodeAt(0);
  }).reduce(function (sum, val) {
    sum ^= val;
    return sum + (sum << 1) + (sum << 4) + (sum << 7) + (sum << 8) + (sum << 24);
  }, FNV1_32A_INIT); // Avalanche

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
  return fnv32b(json_stable_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data));
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataStoreContract; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _errors_AbstractError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);



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

/* eslint-disable no-unused-vars */

/**
 * @private
 */

var DataStoreContract =
/*#__PURE__*/
function () {
  function DataStoreContract() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DataStoreContract);

    if (this.constructor === DataStoreContract) {
      throw new _errors_AbstractError__WEBPACK_IMPORTED_MODULE_2__["AbstractClassError"]();
    }

    if (!this.constructor.available) {
      throw new Error("".concat(this.constructor.name, " is unavailable"));
    }
  }
  /**
   * If the driver is currently available
   * @returns {boolean} - Driver availability
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DataStoreContract, [{
    key: "set",

    /**
     * Store a value in the storage
     * @param {String} name - value name
     * @param {*} value - value
     * @returns {void}
     * @abstract
     */
    value: function set(name, value) {
      throw new _errors_AbstractError__WEBPACK_IMPORTED_MODULE_2__["AbstractMethodError"]();
    }
    /**
     * Get a value from the store
     * @param {String} name - value name
     * @returns {String} - value
     * @abstract
     */

  }, {
    key: "get",
    value: function get(name) {
      throw new _errors_AbstractError__WEBPACK_IMPORTED_MODULE_2__["AbstractMethodError"]();
    }
    /**
     * Remove a value from the store
     * @param {String} name - value name
     * @returns {void}
     * @abstract
     */

  }, {
    key: "remove",
    value: function remove(name) {
      throw new _errors_AbstractError__WEBPACK_IMPORTED_MODULE_2__["AbstractMethodError"]();
    }
    /**
     * Clear storage
     * @returns {void}
     */

  }, {
    key: "clear",
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
    key: "keys",
    value: function keys() {
      throw new _errors_AbstractError__WEBPACK_IMPORTED_MODULE_2__["AbstractMethodError"]();
    }
  }], [{
    key: "available",
    get: function get() {
      throw new _errors_AbstractError__WEBPACK_IMPORTED_MODULE_2__["AbstractMethodError"]();
    }
    /**
     * If the storage is secure
     * @returns {boolean} - Secure storage
     */

  }, {
    key: "secure",
    get: function get() {
      return false;
    }
  }]);

  return DataStoreContract;
}();



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResourceProxy; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _RequestParameters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _SimpleResourceProxy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30);








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
 * Proxy for accessing resource. This will make sure that they
 * are properly wrapped before the promise resolves.
 * @protected
 */

var ResourceProxy =
/*#__PURE__*/
function (_SimpleResourceProxy) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ResourceProxy, _SimpleResourceProxy);

  /**
   * @param {Maps4News} api - Instance of the api
   * @param {ResourceBase} Target - Target to wrap
   * @param {?string} [altUrl=null] - Internal use, Optional alternative url for more complex routing
   * @param {object} seedData - Internal use, used for seeding ::new
   */
  function ResourceProxy(api, Target) {
    var altUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var seedData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ResourceProxy);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ResourceProxy).call(this, api, Target, altUrl, seedData));
  }
  /**
   * Parse selector
   * @param {Number|String|Object} [id=] - The resource id to be requested
   * @returns {Object} - Parsed selector
   * @private
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ResourceProxy, [{
    key: "_parseSelector",
    value: function _parseSelector(id) {
      if (id === '' || id === null) {
        return {};
      }

      switch (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(id)) {
        case 'number':
        case 'string':
          return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, this.Target.resourceUrlKey, id);

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
    key: "get",
    value: function get(id) {
      var _this = this;

      var deleted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _RequestParameters__WEBPACK_IMPORTED_MODULE_7__["default"].deleted;
      var data = Object.assign({}, this._seedData, this._parseSelector(id));
      var url = this.new(data).url;
      var glue = url.includes('?') ? '&' : '?';
      url += glue + Object(_utils_requests__WEBPACK_IMPORTED_MODULE_8__["encodeQueryString"])({
        deleted: deleted
      });
      return this._api.request(url).then(function (result) {
        return _this.new(result);
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
    key: "select",
    value: function select(id) {
      var data = Object.assign({}, this._seedData, this._parseSelector(id));
      return this.new(data);
    }
  }]);

  return ResourceProxy;
}(_SimpleResourceProxy__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CrudSetItemBase; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _errors_AbstractError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _CrudBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);






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


/**
 * Items that are part of a set
 * @abstract
 */

var CrudSetItemBase =
/*#__PURE__*/
function (_CrudBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CrudSetItemBase, _CrudBase);

  /**
   * @param {Maps4News} api - Api instance
   * @param {Object<String, *>} data - Item data
   */
  function CrudSetItemBase(api) {
    var _this;

    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CrudSetItemBase);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CrudSetItemBase).call(this, api, data));

    if (_this.constructor === _CrudBase__WEBPACK_IMPORTED_MODULE_6__["default"]) {
      throw new _errors_AbstractError__WEBPACK_IMPORTED_MODULE_5__["AbstractClassError"]();
    }

    return _this;
  }
  /**
   * Get the parent id
   * @returns {?number|undefined} - Parent number
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CrudSetItemBase, [{
    key: "parentId",
    get: function get() {
      if (this.hasParent) {
        return Number(this[this.constructor.parentKey]);
      }

      return [][0]; // same as "undefined"
    }
    /**
     * Get the parent key
     * @returns {string} - Parent key
     */

  }], [{
    key: "parentKey",
    get: function get() {
      return this.resourceName.replace(/s$/, '_set_id');
    }
  }]);

  return CrudSetItemBase;
}(_CrudBase__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValidationError; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ApiError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);







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
 * Extension of {@link ApiError} containing an extra field for validation errors
 */

var ValidationError =
/*#__PURE__*/
function (_ApiError) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ValidationError, _ApiError);

  /**
   * @param {String} type - Error type
   * @param {String} message - Error message
   * @param {Number} code - Http error code
   * @param {Object<String, Array<String>>} validationErrors - Any validation errors
   */
  function ValidationError(type, message, code, validationErrors) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ValidationError);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ValidationError).call(this, type, message, code));
    _this._validationErrors = validationErrors;
    return _this;
  }
  /**
   * Any validation errors
   * @returns {Object.<String, Array<String>>} - Object containing arrays of validation errors where the field is stored in the key
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ValidationError, [{
    key: "toString",

    /**
     * @inheritDoc
     */
    value: function toString() {
      return "There were some validation errors: ".concat(this.messages.join(', '));
    }
  }, {
    key: "validationErrors",
    get: function get() {
      return this._validationErrors;
    }
    /**
     * Get validation error messages
     * @returns {Array<String>} - All validation messages
     */

  }, {
    key: "messages",
    get: function get() {
      var out = [];

      var _arr = Object.keys(this.validationErrors);

      for (var _i = 0; _i < _arr.length; _i++) {
        var key = _arr[_i];
        out.push.apply(out, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.validationErrors[key]));
      }

      return out;
    }
  }]);

  return ValidationError;
}(_ApiError__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StaticClassError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__);






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
var StaticClassError =
/*#__PURE__*/
function (_Error) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(StaticClassError, _Error);

  function StaticClassError() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StaticClassError);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(StaticClassError).apply(this, arguments));
  }

  return StaticClassError;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default()(Error));



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Color; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);






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
 * Color resource
 * @extends CrudBase
 * @mixes OwnableResource
 */

var Color =
/*#__PURE__*/
function (_mix) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Color, _mix);

  function Color() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Color);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Color).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Color, null, [{
    key: "resourceName",
    get: function get() {
      return 'colors';
    }
  }]);

  return Color;
}(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_7__["mix"])(_base_CrudBase__WEBPACK_IMPORTED_MODULE_5__["default"], _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_6__["default"]));



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DimensionSet; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_CrudSetBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var _Dimension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61);
/* harmony import */ var _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);






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
 * Dimension sets
 * @extends CrudSetBase
 * @mixes OwnableResource
 */

var DimensionSet =
/*#__PURE__*/
function (_mix) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DimensionSet, _mix);

  function DimensionSet() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DimensionSet);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DimensionSet).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DimensionSet, [{
    key: "resourcePath",
    get: function get() {
      return '/dimensions/sets/{id}';
    }
  }, {
    key: "_Child",
    get: function get() {
      return _Dimension__WEBPACK_IMPORTED_MODULE_6__["default"];
    }
  }], [{
    key: "resourceName",
    get: function get() {
      return 'dimension-sets';
    }
  }]);

  return DimensionSet;
}(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_8__["mix"])(_base_CrudSetBase__WEBPACK_IMPORTED_MODULE_5__["default"], _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_7__["default"]));



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feature; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);






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
 * Feature
 * @extends CrudBase
 * @mixes OwnableResource
 */

var Feature =
/*#__PURE__*/
function (_mix) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Feature, _mix);

  function Feature() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Feature);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Feature).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Feature, null, [{
    key: "resourceName",
    get: function get() {
      return 'features';
    }
  }]);

  return Feature;
}(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_7__["mix"])(_base_CrudBase__WEBPACK_IMPORTED_MODULE_5__["default"], _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_6__["default"]));



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FontFamily; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _base_CrudSetBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);
/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63);






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
 * Font family
 * @extends CrudSetBase
 * @mixes OwnableResource
 */

var FontFamily =
/*#__PURE__*/
function (_mix) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(FontFamily, _mix);

  function FontFamily() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FontFamily);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FontFamily).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FontFamily, [{
    key: "resourcePath",
    get: function get() {
      return '/fonts/families/{id}';
    }
  }, {
    key: "_Child",
    get: function get() {
      return _Font__WEBPACK_IMPORTED_MODULE_8__["default"];
    }
  }], [{
    key: "resourceName",
    get: function get() {
      return 'font-families';
    }
  }]);

  return FontFamily;
}(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_6__["mix"])(_base_CrudSetBase__WEBPACK_IMPORTED_MODULE_7__["default"], _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_5__["default"]));



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Job; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _proxy_ResourceProxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _JobResult__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var _JobRevision__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64);






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






var Job =
/*#__PURE__*/
function (_CrudBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Job, _CrudBase);

  function Job() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Job);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Job).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Job, [{
    key: "downloadPreview",

    /**
     * Get image blob url representation
     * @returns {Promise} - Resolves with a {@link String} containing a blob reference to the image and rejects with {@link ApiError}
     */
    value: function downloadPreview() {
      return Object(_utils_requests__WEBPACK_IMPORTED_MODULE_6__["downloadFile"])("".concat(this.url, "/preview"), this._getDownloadHeaders()).then(function (data) {
        return data.blob;
      });
    }
    /**
     * Get archive blob url
     * @returns {PromiseLike<{filename: string, blob: string}>} - Resolves with a blob reference and it's filename and rejects with {@link ApiError}
     */

  }, {
    key: "downloadOutput",
    value: function downloadOutput() {
      return Object(_utils_requests__WEBPACK_IMPORTED_MODULE_6__["downloadFile"])("".concat(this.url, "/output"), this._getDownloadHeaders());
    }
    /**
     * Get the remote output url
     * @returns {Promise} -  Resolves with a {@link String} containing the url to the output and rejects with {@link ApiError}
     */

  }, {
    key: "getOutputUrl",
    value: function getOutputUrl() {
      return this.api.request("".concat(this.url, "/output-url")).then(function (x) {
        return x.url;
      });
    }
    /**
     * Get headers for downloading resources
     * @returns {{Accept: string, Authorization: string}} - Request headers
     * @private
     */

  }, {
    key: "_getDownloadHeaders",
    value: function _getDownloadHeaders() {
      return {
        Accept: 'application/json',
        Authorization: this.api.auth.token.toString()
      };
    }
  }, {
    key: "results",

    /**
     * Get the list of associated job results
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */
    get: function get() {
      return this._proxyResourceList(_JobResult__WEBPACK_IMPORTED_MODULE_8__["default"], "".concat(this.url, "/results"));
    }
    /**
     * Get the list job revisions
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "revisions",
    get: function get() {
      var data = {
        jobId: this.id
      };
      return new _proxy_ResourceProxy__WEBPACK_IMPORTED_MODULE_5__["default"](this.api, _JobRevision__WEBPACK_IMPORTED_MODULE_9__["default"], null, data);
    }
    /**
     * Resource name
     * @returns {String} - Resource name
     * @abstract
     */

  }, {
    key: "lastPreviewUrl",

    /**
     * Get the most up to date preview url
     * @returns {string} - Last preview url
     * @deprecated
     * @see Job#previewUrl
     */
    get: function get() {
      return "".concat(this.url, "/preview");
    }
    /**
     * Get the most up to date archive url
     * @returns {string} - Last archive url
     */

  }, {
    key: "lastArchiveUrl",
    get: function get() {
      return "".concat(this.url, "/revisions/last/result/archive");
    }
  }], [{
    key: "resourceName",
    get: function get() {
      return 'jobs';
    }
  }]);

  return Job;
}(_base_CrudBase__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobType; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);






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
 * Job type
 * @extends CrudBase
 * @mixes OwnableResource
 */

var JobType =
/*#__PURE__*/
function (_mix) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(JobType, _mix);

  function JobType() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, JobType);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(JobType).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(JobType, [{
    key: "resourcePath",
    get: function get() {
      return '/jobs/types/{id}';
    }
  }], [{
    key: "resourceName",
    get: function get() {
      return 'job-types';
    }
  }]);

  return JobType;
}(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_7__["mix"])(_base_CrudBase__WEBPACK_IMPORTED_MODULE_5__["default"], _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_6__["default"]));



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapstyleSet; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _base_CrudSetBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);
/* harmony import */ var _Mapstyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65);






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
 * Mapstyle set
 * @extends CrudSetBase
 * @mixes OwnableResource
 */

var MapstyleSet =
/*#__PURE__*/
function (_mix) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MapstyleSet, _mix);

  function MapstyleSet() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MapstyleSet);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MapstyleSet).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MapstyleSet, [{
    key: "resourcePath",
    get: function get() {
      return '/mapstyles/sets/{id}';
    }
  }, {
    key: "_Child",
    get: function get() {
      return _Mapstyle__WEBPACK_IMPORTED_MODULE_8__["default"];
    }
  }], [{
    key: "resourceName",
    get: function get() {
      return 'mapstyle-sets';
    }
  }]);

  return MapstyleSet;
}(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_6__["mix"])(_base_CrudSetBase__WEBPACK_IMPORTED_MODULE_7__["default"], _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_5__["default"]));



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SvgSet; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _base_CrudSetBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);






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
 * Svg set
 * @extends CrudSetBase
 * @mixes OwnableResource
 */

var SvgSet =
/*#__PURE__*/
function (_mix) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SvgSet, _mix);

  function SvgSet() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SvgSet);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SvgSet).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SvgSet, [{
    key: "resourcePath",
    get: function get() {
      return '/svgs/sets/{id}';
    }
  }, {
    key: "_Child",
    get: function get() {
      return _Svg__WEBPACK_IMPORTED_MODULE_7__["default"];
    }
  }], [{
    key: "resourceName",
    get: function get() {
      return 'svg-sets';
    }
  }]);

  return SvgSet;
}(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_8__["mix"])(_base_CrudSetBase__WEBPACK_IMPORTED_MODULE_6__["default"], _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_5__["default"]));



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _proxy_ResourceProxy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41);
/* harmony import */ var _DimensionSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42);
/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43);
/* harmony import */ var _FontFamily__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44);
/* harmony import */ var _Job__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45);
/* harmony import */ var _JobShare__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29);
/* harmony import */ var _JobType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(68);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(32);
/* harmony import */ var _MapstyleSet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(69);
/* harmony import */ var _Organisation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(54);
/* harmony import */ var _Permission__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(50);
/* harmony import */ var _Role__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(70);
/* harmony import */ var _SvgSet__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(48);






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



















var User =
/*#__PURE__*/
function (_CrudBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(User, _CrudBase);

  function User() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, User);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(User).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(User, [{
    key: "ips",

    /**
     * Get all known ips
     * @returns {Promise} - Resolves with {@link array<string>} instance and rejects with {@link ApiError}
     */
    value: function ips() {
      var url = "".concat(this.url, "/ips");
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
    key: "organisation",
    value: function organisation() {
      return new _proxy_ResourceProxy__WEBPACK_IMPORTED_MODULE_6__["default"](this.api, _Organisation__WEBPACK_IMPORTED_MODULE_19__["default"]).get(this.organisationId);
    }
    /**
     * Get the user's language
     * @returns {Promise} - Resolves with {@link Language} instance and rejects with {@link ApiError}
     */

  }, {
    key: "language",
    value: function language() {
      return new _proxy_ResourceProxy__WEBPACK_IMPORTED_MODULE_6__["default"](this.api, _Language__WEBPACK_IMPORTED_MODULE_15__["default"]).get(this.languageCode);
    } // region Resource listing

    /**
     * Get the list notifications linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "notifications",
    get: function get() {
      return this._proxyResourceList(_Notification__WEBPACK_IMPORTED_MODULE_18__["default"]);
    }
    /**
     * Get the list mapstyle sets linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "mapstyleSets",
    get: function get() {
      return this._proxyResourceList(_MapstyleSet__WEBPACK_IMPORTED_MODULE_17__["default"]);
    }
    /**
     * Get the list dimension sets linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "dimensionSets",
    get: function get() {
      return this._proxyResourceList(_DimensionSet__WEBPACK_IMPORTED_MODULE_9__["default"]);
    }
    /**
     * Get the list font families linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "fontFamilies",
    get: function get() {
      return this._proxyResourceList(_FontFamily__WEBPACK_IMPORTED_MODULE_11__["default"]);
    }
    /**
     * Get the list svg sets linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "svgSets",
    get: function get() {
      return this._proxyResourceList(_SvgSet__WEBPACK_IMPORTED_MODULE_22__["default"]);
    }
    /**
     * Get the list colors linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "colors",
    get: function get() {
      return this._proxyResourceList(_Color__WEBPACK_IMPORTED_MODULE_8__["default"]);
    }
    /**
     * Get the list jobs linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "jobs",
    get: function get() {
      return this._proxyResourceList(_Job__WEBPACK_IMPORTED_MODULE_12__["default"]);
    }
    /**
     * Get the list features linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "features",
    get: function get() {
      return this._proxyResourceList(_Feature__WEBPACK_IMPORTED_MODULE_10__["default"]);
    }
    /**
     * Get the list layers linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "layers",
    get: function get() {
      return this._proxyResourceList(_Layer__WEBPACK_IMPORTED_MODULE_16__["default"]);
    }
    /**
     * Get the list job types linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "jobTypes",
    get: function get() {
      return this._proxyResourceList(_JobType__WEBPACK_IMPORTED_MODULE_14__["default"]);
    }
    /**
     * Get the list job shares linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "jobShares",
    get: function get() {
      return this._proxyResourceList(_JobShare__WEBPACK_IMPORTED_MODULE_13__["default"]);
    }
    /**
     * Get the list permissions linked to the user
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "permissions",
    get: function get() {
      return this._proxyResourceList(_Permission__WEBPACK_IMPORTED_MODULE_20__["default"]);
    }
    /**
     * Get the list roles linked to the user
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "roles",
    get: function get() {
      return new _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_5__["default"](this.api, this, _Role__WEBPACK_IMPORTED_MODULE_21__["default"]);
    } // endregion

  }], [{
    key: "resourceName",
    get: function get() {
      return 'users';
    }
  }]);

  return User;
}(_base_CrudBase__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Permission; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_ResourceBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);






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


var Permission =
/*#__PURE__*/
function (_ResourceBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Permission, _ResourceBase);

  function Permission() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Permission);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Permission).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Permission, null, [{
    key: "resourceName",
    get: function get() {
      return 'permissions';
    }
  }]);

  return Permission;
}(_base_ResourceBase__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(85);

var iterableToArray = __webpack_require__(86);

var nonIterableSpread = __webpack_require__(87);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StaticClass; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors_StaticClassError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);


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
 * Disables the constructor and throws a {@link StaticClassError} when an instance is created.
 * @protected
 */

var StaticClass = function StaticClass() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StaticClass);

  throw new _errors_StaticClassError__WEBPACK_IMPORTED_MODULE_1__["default"]();
};



/***/ }),
/* 53 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Organisation; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41);
/* harmony import */ var _Contract__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60);
/* harmony import */ var _DimensionSet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42);
/* harmony import */ var _Domain__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62);
/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43);
/* harmony import */ var _FontFamily__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(44);
/* harmony import */ var _Job__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(45);
/* harmony import */ var _JobShare__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29);
/* harmony import */ var _JobType__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(46);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(32);
/* harmony import */ var _MapstyleSet__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47);
/* harmony import */ var _SvgSet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48);
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(67);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(49);








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

















var Organisation =
/*#__PURE__*/
function (_CrudBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Organisation, _CrudBase);

  function Organisation() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Organisation);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Organisation).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Organisation, [{
    key: "getTree",

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
      var _getTree = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._api.request(this.url + '/tree');

              case 2:
                data = _context.sent;
                return _context.abrupt("return", data.map(function (root) {
                  return _this._parseTree(root);
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getTree() {
        return _getTree.apply(this, arguments);
      };
    }()
  }, {
    key: "_parseTree",
    value: function _parseTree(rawNode) {
      var _this2 = this;

      var node = new this.constructor(this._api, rawNode);
      node.children = node.children.map(function (child) {
        return _this2._parseTree(child);
      });
      return node;
    }
  }, {
    key: "fontFamilies",
    // Resource listing

    /**
     * Get a proxy for font families linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */
    get: function get() {
      return new _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_7__["default"](this.api, this, _FontFamily__WEBPACK_IMPORTED_MODULE_14__["default"]);
    }
    /**
     * Get a proxy for dimension sets linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "dimensionSets",
    get: function get() {
      return new _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_7__["default"](this.api, this, _DimensionSet__WEBPACK_IMPORTED_MODULE_11__["default"]);
    }
    /**
     * Get a proxy for mapstyle sets linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "mapstyleSets",
    get: function get() {
      return new _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_7__["default"](this.api, this, _MapstyleSet__WEBPACK_IMPORTED_MODULE_19__["default"]);
    }
    /**
     * Get a proxy for svg sets linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "svgSets",
    get: function get() {
      return new _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_7__["default"](this.api, this, _SvgSet__WEBPACK_IMPORTED_MODULE_20__["default"]);
    }
    /**
     * Get a proxy for colors linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "colors",
    get: function get() {
      return new _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_7__["default"](this.api, this, _Color__WEBPACK_IMPORTED_MODULE_9__["default"]);
    }
    /**
     * Get a proxy for tags linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "tags",
    get: function get() {
      return new _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_7__["default"](this.api, this, _Tag__WEBPACK_IMPORTED_MODULE_21__["default"]);
    }
    /**
     * Get a proxy for features linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "features",
    get: function get() {
      return new _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_7__["default"](this.api, this, _Feature__WEBPACK_IMPORTED_MODULE_13__["default"]);
    }
    /**
     * Get a proxy for layers linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "layers",
    get: function get() {
      return new _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_7__["default"](this.api, this, _Layer__WEBPACK_IMPORTED_MODULE_18__["default"]);
    }
    /**
     * Get a proxy for jobs linked to the organisation, also known as company maps
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "jobs",
    get: function get() {
      return this._proxyBuilder(_Job__WEBPACK_IMPORTED_MODULE_15__["default"]);
    }
    /**
     * Get a proxy for job types linked to the organisation
     * @returns {OwnedResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "jobTypes",
    get: function get() {
      return new _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_7__["default"](this.api, this, _JobType__WEBPACK_IMPORTED_MODULE_17__["default"]);
    }
    /**
     * Get a proxy for job shares linked to the organisation
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "jobShares",
    get: function get() {
      return this._proxyResourceList(_JobShare__WEBPACK_IMPORTED_MODULE_16__["default"]);
    }
    /**
     * Get a proxy for users linked to the organisation
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "users",
    get: function get() {
      return this._proxyResourceList(_User__WEBPACK_IMPORTED_MODULE_22__["default"]);
    }
    /**
     * Get a proxy for contracts linked to the organisation
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "contracts",
    get: function get() {
      return this._proxyResourceList(_Contract__WEBPACK_IMPORTED_MODULE_10__["default"]);
    }
    /**
     * Get a proxy for contracts linked to the organisation
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "domains",
    get: function get() {
      return this._proxyResourceList(_Domain__WEBPACK_IMPORTED_MODULE_12__["default"]);
    }
  }], [{
    key: "resourceName",
    get: function get() {
      return 'organisations';
    }
  }]);

  return Organisation;
}(_base_CrudBase__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DummyFlow; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _errors_OAuthError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _OAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26);






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
 * Dummy flow for when the token should be available in the
 * cache and no attempt at authentication should be made.
 */

var DummyFlow =
/*#__PURE__*/
function (_OAuth) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DummyFlow, _OAuth);

  /**
   * @param {String} [clientId=] - OAuth client id
   * @param {Array<String>} scopes - A list of required scopes
   * @returns {void}
   */
  function DummyFlow() {
    var clientId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var scopes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['*'];

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DummyFlow);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DummyFlow).call(this, clientId, scopes));
  }
  /**
   * Authenticate
   * @returns {Promise} - Promise resolves with {@link OAuthToken} and rejects with {@link OAuthError}
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DummyFlow, [{
    key: "authenticate",
    value: function authenticate() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (_this.authenticated) {
          resolve(_this.token);
        } else {
          reject(new _errors_OAuthError__WEBPACK_IMPORTED_MODULE_5__["default"]('dummy_error', 'Attempted authentication using a dummy authenticator'));
        }
      });
    }
  }]);

  return DummyFlow;
}(_OAuth__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaginatedRange", function() { return getPaginatedRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowTest", function() { return windowTest; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);


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
  var stop = arguments.length > 2 ? arguments[2] : undefined;

  // Resolve promise if any
  if (page instanceof Promise) {
    return page.then(function (res) {
      return getPaginatedRange(res, start, stop);
    });
  }

  var out = page.data;
  var promises = []; // Handle defaults

  start = start || page.page;
  stop = stop || page.pageCount;

  if (start === page.page) {
    start++;
  }

  return new Promise(function (resolve, reject) {
    // Get all pages
    for (var i = start; i <= stop; i++) {
      promises.push(page.get(i));
    } // Resolve


    Promise.all(promises).then(function (rows) {
      resolve(out.concat.apply(out, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rows.map(function (x) {
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
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobMonitorRow; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _JobResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);







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


var JobMonitorRow =
/*#__PURE__*/
function (_JobResult) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(JobMonitorRow, _JobResult);

  function JobMonitorRow() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, JobMonitorRow);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(JobMonitorRow).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(JobMonitorRow, [{
    key: "user",

    /**
     * Get the related job
     * @returns {Promise<Job, ApiError>} - The job related to this row
     */
    get: function get() {
      return this.api.users.get(this.userId);
    }
  }], [{
    key: "_guessType",

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

      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(JobMonitorRow), "_guessType", this).call(this, name, value);
    }
  }, {
    key: "resourceName",
    get: function get() {
      return 'job-monitor';
    }
    /**
     * Returns if the resource is readonly
     * @returns {boolean} - readonly
     */

  }, {
    key: "readonly",
    get: function get() {
      return true;
    }
  }]);

  return JobMonitorRow;
}(_JobResult__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateContainer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _storage_StorageManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _utils_StaticClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72);






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
 * State container for keeping track of OAuth states (crsf tokens)
 * @static
 * @private
 */

var StateContainer =
/*#__PURE__*/
function (_StaticClass) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(StateContainer, _StaticClass);

  function StateContainer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StateContainer);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(StateContainer).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StateContainer, null, [{
    key: "generate",

    /**
     * Generate and store a state that can be checked at a later point
     * @returns {string} - state
     */
    value: function generate() {
      var uuid = _utils_uuid__WEBPACK_IMPORTED_MODULE_7__["default"].uuid4();
      var key = StateContainer.prefix + uuid;
      _storage_StorageManager__WEBPACK_IMPORTED_MODULE_5__["default"].best.set(key, Date.now());
      return uuid;
    }
    /**
     * Validate a state
     * @param {String} state - state to validate
     * @param {Boolean} purge - remove from state db after validation
     * @returns {Boolean} - if the state is valid
     */

  }, {
    key: "validate",
    value: function validate(state) {
      var purge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var storage = _storage_StorageManager__WEBPACK_IMPORTED_MODULE_5__["default"].best;
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
    key: "clean",
    value: function clean() {
      var tokens = Object.keys(this.list());

      for (var _i = 0; _i < tokens.length; _i++) {
        var token = tokens[_i];
        _storage_StorageManager__WEBPACK_IMPORTED_MODULE_5__["default"].best.remove(StateContainer.prefix + token);
      }
    }
    /**
     * Get states with their corresponding state db key
     * @returns {Object<String, String>} - List of stored states
     */

  }, {
    key: "list",
    value: function list() {
      var storage = _storage_StorageManager__WEBPACK_IMPORTED_MODULE_5__["default"].best;
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
    key: "prefix",

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
}(_utils_StaticClass__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResourceLister; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var case__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var case__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(case__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Maps4News__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23);
/* harmony import */ var _RequestParameters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21);
/* harmony import */ var _resources_base_ResourceBase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5);










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






/**
 * Paginated resource lister
 *
 * @fires ResourceLister#update
 */

var ResourceLister =
/*#__PURE__*/
function (_EventEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(ResourceLister, _EventEmitter);

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
    var _this;

    var Resource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _resources_base_ResourceBase__WEBPACK_IMPORTED_MODULE_13__["default"];
    var parameters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var maxRows = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 50;
    var key = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'id';

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, ResourceLister);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(ResourceLister).call(this));

    if (!Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_14__["isParentOf"])(_Maps4News__WEBPACK_IMPORTED_MODULE_11__["default"], api)) {
      throw new TypeError('Expected api to be of type Maps4News');
    }

    _this._api = api;
    _this._Resource = Resource;
    _this._route = route || new _this.Resource(api, {}).baseUrl;
    _this._parameters = new _RequestParameters__WEBPACK_IMPORTED_MODULE_12__["default"](parameters || {
      perPage: _RequestParameters__WEBPACK_IMPORTED_MODULE_12__["default"].maxPerPage
    });
    _this._key = Object(case__WEBPACK_IMPORTED_MODULE_9__["snake"])(key);
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


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(ResourceLister, [{
    key: "_reset",

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
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.waiting) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

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
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3,, 9, 12]]);
      }));

      return function update() {
        return _update.apply(this, arguments);
      };
    }()
    /**
     * Fetch more data from the server
     * @returns {Promise<void>} - Resolves when _availableRows has been updated
     * @private
     */

  }, {
    key: "_fetchMore",
    value: function () {
      var _fetchMore2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
        var _ref,
            _this2 = this;

        var startPage, endPage, glue, promises, page, parameters, url, promise, responses, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
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
                } // Wait for responses and flatten data


                _context2.next = 7;
                return Promise.all(promises);

              case 7:
                responses = _context2.sent;
                data = (_ref = []).concat.apply(_ref, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(responses.map(function (x) {
                  return x.data;
                })));
                this._availableRows = Number(responses[0].response.headers.get('X-Paginate-Total')) || 0;
                data.forEach(function (row) {
                  return _this2.push(row, false);
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function _fetchMore() {
        return _fetchMore2.apply(this, arguments);
      };
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
    key: "push",
    value: function push(row) {
      var _this3 = this;

      var autoMaxRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_14__["isParentOf"])(this.Resource, row)) {
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
    key: "loadMore",
    value: function loadMore() {
      var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parameters.perPage;
      this.maxRows += rows;
    }
  }, {
    key: "hasMore",
    get: function get() {
      return typeof this.availableRows === 'undefined' || this.availableRows > this.maxRows;
    }
    /**
     * Get if the instance is waiting for data
     * @returns {boolean} - waiting for data
     */

  }, {
    key: "waiting",
    get: function get() {
      return this._waiting;
    }
    /**
     * Get the request parameters
     * @returns {RequestParameters} - parameters
     */

  }, {
    key: "parameters",
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
    key: "Resource",
    get: function get() {
      return this._Resource;
    }
    /**
     * Get the route (url)
     * @returns {string} - route
     */

  }, {
    key: "route",
    get: function get() {
      return this._route;
    }
    /**
     * Get the data
     * @returns {Array<ResourceLister.Resource>} - data
     */

  }, {
    key: "data",
    get: function get() {
      return this._data;
    }
    /**
     * Get the api instance
     * @returns {Maps4News} - api instance
     */

  }, {
    key: "api",
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
    key: "rowCount",
    get: function get() {
      return this.data.length;
    }
    /**
     * Get the maximum amount of rows allowed
     * @returns {number} - max rows
     */

  }, {
    key: "maxRows",
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
        throw new TypeError("Expected maxRows to be numeric got ".concat(typeof raw === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(raw)));
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
    key: "availableRows",
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
    key: "autoUpdate",
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
}(events__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]);



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contract; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






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
 * Contract resource
 */

var Contract =
/*#__PURE__*/
function (_CrudBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Contract, _CrudBase);

  function Contract() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Contract);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Contract).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Contract, [{
    key: "_update",

    /**
     * @inheritDoc
     * @override
     */
    value: function _update() {
      var _this = this;

      this._updateProperties(); // We'll just fake it, no need to bother the server
      // with an empty request.


      if (Object.keys(this._properties).length === 0) {
        return new Promise(function () {
          return _this;
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
        if (_this.api.defaults.autoUpdateSharedCache) {
          _this.api.cache.update(_this);
        }

        return _this;
      });
    }
    /**
     * @inheritDoc
     * @override
     */

  }, {
    key: "_create",
    value: function _create() {
      var _this2 = this;

      var createData = this._buildCreateData();

      if (createData['date_start'] instanceof Date) {
        createData['date_start'] = this._formatDate(createData['date_start']);
      }

      if (createData['date_end'] instanceof Date) {
        createData['date_end'] = this._formatDate(createData['date_end']);
      }

      return this.api.request(this.baseUrl, 'POST', createData).then(function (data) {
        _this2._properties = {};
        _this2._baseProperties = data;

        _this2._updateProperties();

        return _this2;
      });
    }
    /**
     * Convert Date into server format
     * @param {Date} date - target
     * @returns {String} - formatted date
     * @private
     */

  }, {
    key: "_formatDate",
    value: function _formatDate(date) {
      var pad = function pad(num) {
        return ('00' + num).slice(-Math.max(String(num).length, 2));
      };

      var out = [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()].map(pad).join('-');
      out += ' ' + [date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()].map(pad).join(':');
      return out;
    }
  }], [{
    key: "resourceName",
    get: function get() {
      return 'contracts';
    }
  }]);

  return Contract;
}(_base_CrudBase__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dimension; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_CrudSetItemBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);






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
 * Dimension resource
 */

var Dimension =
/*#__PURE__*/
function (_CrudSetItemBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Dimension, _CrudSetItemBase);

  function Dimension() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dimension);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Dimension).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Dimension, null, [{
    key: "resourceName",
    get: function get() {
      return 'dimensions';
    }
  }]);

  return Dimension;
}(_base_CrudSetItemBase__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Domain; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






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
 * Domain resource
 */

var Domain =
/*#__PURE__*/
function (_CrudBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Domain, _CrudBase);

  function Domain() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Domain);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Domain).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Domain, null, [{
    key: "resourceName",
    get: function get() {
      return 'domains';
    }
  }]);

  return Domain;
}(_base_CrudBase__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Font; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_CrudSetItemBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);






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


var Font =
/*#__PURE__*/
function (_CrudSetItemBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Font, _CrudSetItemBase);

  function Font() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Font);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Font).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Font, null, [{
    key: "resourceName",
    get: function get() {
      return 'fonts';
    }
  }, {
    key: "parentKey",
    get: function get() {
      return 'font_family_id';
    }
  }]);

  return Font;
}(_base_CrudSetItemBase__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobRevision; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _JobResult__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31);
/* harmony import */ var _JobShare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32);






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






var JobRevision =
/*#__PURE__*/
function (_CrudBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(JobRevision, _CrudBase);

  function JobRevision() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, JobRevision);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(JobRevision).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(JobRevision, [{
    key: "result",

    /**
     * Get the job result
     * @returns {Promise} - Resolves with a {@link JobResult} instance and rejects with {@link ApiError}
     */
    value: function result() {
      var _this = this;

      var url = "".concat(this.url, "/result");
      return this.api.request(url).then(function (data) {
        data.jobId = _this.jobId;
        data.revision = _this.revision;
        return new _JobResult__WEBPACK_IMPORTED_MODULE_7__["default"](_this.api, data);
      });
    }
    /**
     * Get a result proxy
     *
     * @returns {JobResult} - Empty job result used for
     */

  }, {
    key: "save",
    // noinspection JSCheckFunctionSignatures

    /**
     * Save updated job revision
     * @param {Object} object - Map object
     * @param {Array<Layer>|Array<Number>|null} layers - Array containing all layers for this revision. If set to null the same layers will be used
     * @returns {Promise} - Resolves with a new {@link JobRevision} instance and rejects with {@link ApiError}
     * @throws TypeError
     */
    value: function save() {
      var _this2 = this;

      var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var layers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (layers && layers.length > 0) {
        if (Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_5__["isParentOf"])(_Layer__WEBPACK_IMPORTED_MODULE_9__["default"], layers[0])) {
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
        return new JobRevision(_this2.api, data);
      });
    }
    /**
     * Get job object
     * @returns {Promise} - Resolves with {@link Object} instance containing the map object and rejects with {@link ApiError}
     * @todo document object format
     */

  }, {
    key: "object",
    value: function object() {
      var url = "".concat(this.url, "/object");
      return this.api.request(url);
    }
    /**
     * Build the revision
     * @param {String} callbackUrl - Optional callback url for when the job completes
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with {@link ApiError}
     */

  }, {
    key: "build",
    value: function build(callbackUrl) {
      var url = "".concat(this.url, "/build");
      var data = {
        callback: callbackUrl
      };
      return this.api.request(url, 'POST', data);
    }
    /**
     * Cancels a running job
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with {@link ApiError}
     */

  }, {
    key: "cancel",
    value: function cancel() {
      var url = "".concat(this.url, "/cancel");
      return this.api.request(url, 'POST');
    }
    /**
     * Share the job revision
     * @param {String} visibility - See {@link JobShareVisibility}, either `private` or `organisation`
     * @returns {Promise} - Resolves with a {@link String} containing the share link and rejects with {@link ApiError}
     */

  }, {
    key: "share",
    value: function share() {
      var visibility = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _JobShare__WEBPACK_IMPORTED_MODULE_8__["default"].visibility.PRIVATE;
      visibility = visibility.toLowerCase();

      if (visibility !== _JobShare__WEBPACK_IMPORTED_MODULE_8__["default"].visibility.ORGANISATION && visibility !== _JobShare__WEBPACK_IMPORTED_MODULE_8__["default"].visibility.PRIVATE) {
        throw new Error("Unknown visibility '".concat(visibility, "'"));
      }

      var url = "".concat(this.url, "/share");
      return this.api.request(url, 'POST', {
        visibility: visibility
      });
    }
    /**
     * Clones a job revision to the user requesting it
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with {@link ApiError}
     */

  }, {
    key: "clone",
    value: function clone() {
      var url = "".concat(this.url, "/clone");
      return this.api.request(url, 'POST');
    }
  }, {
    key: "baseUrl",
    get: function get() {
      return "/jobs/".concat(this.jobId, "/revisions");
    }
  }, {
    key: "resourcePath",
    get: function get() {
      return '/jobs/{job_id}/revisions/{revision}';
    }
  }, {
    key: "layers",

    /**
     * Get layers
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */
    get: function get() {
      return this._proxyResourceList(_Layer__WEBPACK_IMPORTED_MODULE_9__["default"]);
    }
  }, {
    key: "resultProxy",
    get: function get() {
      var data = {
        jobId: this.jobId,
        revision: this.revision
      };
      return new _JobResult__WEBPACK_IMPORTED_MODULE_7__["default"](this.api, data);
    }
  }], [{
    key: "resourceName",
    get: function get() {
      return 'job-revisions';
    }
  }, {
    key: "resourceUrlKey",
    get: function get() {
      return 'revision';
    }
  }]);

  return JobRevision;
}(_base_CrudBase__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mapstyle; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _traits_HandlesImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _base_CrudSetItemBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38);






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
 * @extends CrudSetItemBase
 * @mixes HandlesImages
 */

var Mapstyle =
/*#__PURE__*/
function (_mix) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Mapstyle, _mix);

  function Mapstyle() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Mapstyle);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Mapstyle).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Mapstyle, null, [{
    key: "resourceName",
    get: function get() {
      return 'mapstyles';
    }
  }]);

  return Mapstyle;
}(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_6__["mix"])(_base_CrudSetItemBase__WEBPACK_IMPORTED_MODULE_7__["default"], _traits_HandlesImages__WEBPACK_IMPORTED_MODULE_5__["default"]));



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Svg; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_CrudSetItemBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);






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


var Svg =
/*#__PURE__*/
function (_CrudSetItemBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Svg, _CrudSetItemBase);

  function Svg() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Svg);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Svg).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Svg, null, [{
    key: "resourceName",
    get: function get() {
      return 'svgs';
    }
  }]);

  return Svg;
}(_base_CrudSetItemBase__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tag; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);






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



/**
 * Tag resource
 * @extends CrudBase
 * @mixes OwnableResource
 */

var Tag =
/*#__PURE__*/
function (_mix) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Tag, _mix);

  function Tag() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tag);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Tag).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tag, null, [{
    key: "resourceName",
    get: function get() {
      return 'tags';
    }
  }]);

  return Tag;
}(Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_7__["mix"])(_base_CrudBase__WEBPACK_IMPORTED_MODULE_5__["default"], _traits_OwnableResource__WEBPACK_IMPORTED_MODULE_6__["default"]));



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Language; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






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


var Language =
/*#__PURE__*/
function (_CrudBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Language, _CrudBase);

  function Language() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Language);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Language).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Language, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.constructor.name, "(").concat(this.code, ")");
    }
  }, {
    key: "resourcePath",
    get: function get() {
      return "/".concat(this.constructor.resourceName, "/{code}");
    }
  }], [{
    key: "resourceName",
    get: function get() {
      return 'languages';
    }
  }, {
    key: "resourceUrlKey",
    get: function get() {
      return 'code';
    }
  }]);

  return Language;
}(_base_CrudBase__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notification; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






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


var Notification =
/*#__PURE__*/
function (_CrudBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Notification, _CrudBase);

  function Notification() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Notification);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Notification).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Notification, null, [{
    key: "resourceName",
    get: function get() {
      return 'notifications';
    }
  }]);

  return Notification;
}(_base_CrudBase__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Role; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _base_CrudBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _Permission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49);










var Role =
/*#__PURE__*/
function (_CrudBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Role, _CrudBase);

  function Role() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Role);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Role).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Role, [{
    key: "permissions",

    /**
     * Get the list permissions linked to the role
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */
    get: function get() {
      return new _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_5__["default"](this.api, this, _Permission__WEBPACK_IMPORTED_MODULE_7__["default"]);
    }
    /**
     * Get the list users linked to the role
     * @returns {SimpleResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: "users",
    get: function get() {
      return new _proxy_OwnedResourceProxy__WEBPACK_IMPORTED_MODULE_5__["default"](this.api, this, _User__WEBPACK_IMPORTED_MODULE_8__["default"]);
    }
  }], [{
    key: "resourceName",
    get: function get() {
      return 'roles';
    }
  }]);

  return Role;
}(_base_CrudBase__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Unobservable; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



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
var Unobservable =
/*#__PURE__*/
function () {
  function Unobservable() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Unobservable);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Unobservable, [{
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



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Uuid; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _StaticClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52);






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
 * UUID util class
 * @static
 * @private
 */

var Uuid =
/*#__PURE__*/
function (_StaticClass) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Uuid, _StaticClass);

  function Uuid() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Uuid);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Uuid).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Uuid, null, [{
    key: "uuid4",

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
    key: "nil",
    value: function nil() {
      return '0000000-0000-0000-0000-000000000000';
    }
  }]);

  return Uuid;
}(_StaticClass__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 73 */
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
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Injectable; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _resources_base_ResourceBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _utils_reflection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _Trait__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34);







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
 * Adds the possibility to inject proxies/methods
 *
 * @mixin
 */

var Injectable =
/*#__PURE__*/
function (_Trait) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Injectable, _Trait);

  function Injectable() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Injectable);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Injectable).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Injectable, [{
    key: "initializer",
    value: function initializer() {
      var injectable = this.constructor._injectable || {};

      var _arr = Object.keys(injectable);

      for (var _i = 0; _i < _arr.length; _i++) {
        var name = _arr[_i];
        var _injectable$name = injectable[name],
            value = _injectable$name.value,
            isProxy = _injectable$name.isProxy;

        if (isProxy) {
          this.injectProxy(name, value);
        } else {
          this.inject(name, value);
        }
      }
    }
    /**
     * Inject a proxy property into future instances
     *
     * @param {string|object} name - Name of the property
     * @param {function?} value - Either a resource or a function that returns a proxy
     *
     * @returns {void}
     * @example
     *
     * Maps4News.injectProxy({Domain});
     *
     * // After creating new api instance
     *
     * api.domains // returns proxy
     */

  }, {
    key: "injectProxy",

    /**
     * Inject a proxy
     * @param {string} name - Name of the property
     * @param {function?} value - Either a resource or a function that returns a proxy
     */
    value: function injectProxy(name, value) {
      if (!value) {
        // Handle vue-style injections `.inject({ Foo, Bar, Baz })`
        var _arr2 = Object.keys(name);

        for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
          var key = _arr2[_i2];
          this.injectProxy(key, name[key]);
        }
      } else if (Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_7__["isParentOf"])(_resources_base_ResourceBase__WEBPACK_IMPORTED_MODULE_6__["default"], value)) {
        this._injectProxy(name, value);
      } else {
        this._inject(name, value);
      }
    }
    /**
     * Inject a property into the instance
     *
     * @param {string|object} name - Name of the property
     * @param {function?} value - Any function that does not return a proxy
     *
     * @returns {void}
     */

  }, {
    key: "inject",
    value: function inject(name, value) {
      this._inject(name, value, false);
    }
  }, {
    key: "_injectProxy",
    value: function _injectProxy(name, value) {
      if (name === value.name) {
        name = name.replace(/^\w/, function (c) {
          return c.toLowerCase();
        }) + 's';
      }

      var OwnableResource = __webpack_require__(13).default;

      if (Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_7__["hasTrait"])(value, OwnableResource)) {
        var OwnedResourceProxy = __webpack_require__(16).default;

        this._inject(name, function () {
          new OwnedResourceProxy(this.api, this, value);
        });
      } else if (Object(_utils_reflection__WEBPACK_IMPORTED_MODULE_7__["isParentOf"])(_resources_base_ResourceBase__WEBPACK_IMPORTED_MODULE_6__["default"], value) && this._proxyResourceList) {
        // returns a SimpleResourceProxy
        this._inject(name, function () {
          return this._proxyResourceList(value);
        });
      } else {
        var ResourceProxy = __webpack_require__(37).default;

        this._inject(name, function () {
          return new ResourceProxy(this, value);
        });
      }
    }
  }, {
    key: "_inject",
    value: function _inject(name, value) {
      var getter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      Object.defineProperty(this, name, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
        enumerable: false,
        configurable: false
      }, getter ? 'get' : 'value', value));
    }
  }], [{
    key: "injectProxy",
    value: function injectProxy(name, value) {
      if (!value) {
        // Handle vue-style injections `.inject({ Foo, Bar, Baz })`
        var _arr3 = Object.keys(name);

        for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
          var key = _arr3[_i3];
          this.inject(key, name[key]);
        }
      } else {
        if (typeof this._injectable === 'undefined') {
          this._injectable = {};
        }

        this._injectable[name] = {
          value: value,
          isProxy: true
        };
      }
    }
    /**
     * Inject a property into future instances
     *
     * @param {string|object} name - Name of the property
     * @param {function?} value - Any function that does not return a proxy
     *
     * @returns {void}
     */

  }, {
    key: "inject",
    value: function inject(name, value) {
      if (!value) {
        // Handle vue-style injections `.inject({ Foo, Bar, Baz })`
        var _arr4 = Object.keys(name);

        for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
          var key = _arr4[_i4];
          this.inject(key, name[key]);
        }
      } else {
        if (typeof this._injectable === 'undefined') {
          this._injectable = {};
        }

        this._injectable[name] = {
          value: value,
          isProxy: false
        };
      }
    }
    /**
     * Prevent a property from being injected
     * @param {string} name - Name of the property
     */

  }, {
    key: "uninject",
    value: function uninject(name) {
      if (typeof this._injectable !== 'undefined') {
        delete this._injectable[name];
      }
    }
  }]);

  return Injectable;
}(_Trait__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(4);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js
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

/* harmony default export */ var mitt_es = (mitt);
//# sourceMappingURL=mitt.es.js.map

// EXTERNAL MODULE: ./src/utils/Unobservable.js
var Unobservable = __webpack_require__(71);

// EXTERNAL MODULE: ./src/utils/uuid.js
var uuid = __webpack_require__(72);

// CONCATENATED MODULE: ./src/ResourceCache.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResourceCache_ResourceCache; });






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
 * Used for caching resources. Requires the resource to have an unique id field
 * @see {@link PaginatedResourceWrapper}
 * @deprecated
 * @todo Add periodic data refreshing while idle, most likely implemented in cache (maybe v1/resource?timestamp=123 where it will give modified records since)
 */

var ResourceCache_ResourceCache =
/*#__PURE__*/
function (_Unobservable) {
  inherits_default()(ResourceCache, _Unobservable);

  function ResourceCache(cacheTime, dereference) {
    var _this;

    classCallCheck_default()(this, ResourceCache);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ResourceCache).call(this));
    _this.cacheTime = cacheTime;
    _this.dereference = dereference;
    _this.emitter = mitt_es();
    _this._storage = {};
    return _this;
  }
  /**
   * Push a page into the cache
   * @param {PaginatedResourceListing} page - Data to be cached
   * @returns {void}
   */


  createClass_default()(ResourceCache, [{
    key: "push",
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
      var cacheId = uuid["default"].uuid4();
      var data = {
        page: page,
        validThrough: validThrough,
        id: cacheId,
        timeout: setTimeout(function () {
          return _this2._deleteCacheIds(cacheId);
        }, this.cacheTime * 1000)
      };
      var storage = this._storage[page.route] || (this._storage[page.route] = {});
      (storage[page.cacheToken] || (storage[page.cacheToken] = [])).push(data);
      this.emitter.emit('push', {
        page: page,
        validThrough: validThrough,
        resourceUrl: page.route
      });
      this.emitter.emit('invalidate', {
        resourceUrl: page.route
      });
    }
    /**
     * Delete from cache using cacheId
     * @param {String|Array<String>} ids - cache ids
     * @returns {void}
     */

  }, {
    key: "_deleteCacheIds",
    value: function _deleteCacheIds(ids) {
      if (!(ids instanceof Array)) {
        this._deleteCacheIds([ids]);

        return;
      }

      var found = 0;

      var _arr = Object.keys(this._storage);

      for (var _i = 0; _i < _arr.length; _i++) {
        var resourceUrl = _arr[_i];

        var _arr2 = Object.keys(this._storage[resourceUrl]);

        for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
          var token = _arr2[_i2];
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
      }
    }
    /**
     * Revalidate all data and delete stale data
     * @param {String} resourceUrl - Resource url
     * @returns {void}
     */

  }, {
    key: "revalidate",
    value: function revalidate() {
      var _this3 = this;

      var resourceUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!resourceUrl) {
        Object.keys(this._storage).map(function (x) {
          return _this3.revalidate(x);
        });
      } else if (this._storage[resourceUrl]) {
        var storage = this._storage[resourceUrl]; // Remove old data from the cache and stop old timeouts

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
        }); // Delete empty

        junk.forEach(function (key) {
          return delete storage[key];
        });

        if (Object.keys(storage).length === 0) {
          delete this._storage[resourceUrl];
        }

        if (junk.length > 0) {
          this.emitter.emit('invalidate', {
            resourceUrl: resourceUrl
          });
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
    key: "collectPages",
    value: function collectPages(resourceUrl) {
      var cacheToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      cacheToken = cacheToken.toLowerCase(); // Storage array or []

      var storage = (this._storage[resourceUrl] || {})[cacheToken] || []; // Sort by validThrough and extract pages
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
    key: "clear",
    value: function clear() {
      var _this4 = this;

      var resourceUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!resourceUrl) {
        Object.keys(this._storage).forEach(function (url) {
          _this4.emitter.emit('invalidate', {
            resourceUrl: url
          });
        });
        this._storage = {};
      } else {
        delete this._storage[resourceUrl];
        this.emitter.emit('invalidate', {
          resourceUrl: resourceUrl
        });
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
    key: "resolve",
    value: function resolve(resourceUrl) {
      var cacheToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      cacheToken = cacheToken.toLowerCase(); // List ordered from old to new

      var data = this.collectPages(resourceUrl, cacheToken);
      var out = [];
      var lastPage;
      var startIndex = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var row = _step.value;
          var page = row.page; // Skip empty pages

          if (page.data.length === 0) {
            continue;
          } // Have we parsed the same page already?


          if (typeof lastPage !== 'undefined' && lastPage === page.page) {
            var ii = void 0;

            for (var i = 0; i < page.data.length; i++) {
              ii = i + startIndex; // Get relative index for `out`

              if (typeof out[ii] === 'undefined') {
                out.push(page.data[i]); // Push if there is no data
              } else if (page.data[i].id !== out[ii].id) {
                out[ii] = page.data[i]; // lookbehind

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
            } // Remove trailing data


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
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
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
    key: "update",
    value: function update(rows) {
      if (!(rows instanceof Array)) {
        this.update([rows]);
        return;
      } // Split up data into types


      var data = {};
      var ids = {};
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = rows[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var row = _step2.value;
          var key = row.constructor.name;
          (data[key] || (data[key] = [])).push(row);
          (ids[key] || (ids[key] = [])).push(row.id);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var models = Object.keys(data);

      var _arr3 = Object.keys(this._storage);

      for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
        var resourceUrl = _arr3[_i3];
        var invalidate = false;

        var _arr4 = Object.keys(this._storage[resourceUrl]);

        for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
          var token = _arr4[_i4];
          var entries = this._storage[resourceUrl][token];
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = entries[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var entry = _step3.value;
              var page = entry.page;

              if (page.data.length === 0) {
                continue;
              }

              var _key = page.data[0].constructor.name;

              if (!models.includes(_key)) {
                break;
              }

              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                var _loop = function _loop() {
                  var row = _step4.value;

                  if (!ids[_key].includes(row.id)) {
                    return "continue";
                  }

                  var index = ids[_key].findIndex(function (x) {
                    return x === row.id;
                  });

                  var value = data[_key][index];
                  value.sanitize();
                  value.fieldNames.forEach(function (x) {
                    row[x] = value[x];
                  });
                  invalidate = true;
                };

                for (var _iterator4 = page.data[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var _ret = _loop();

                  if (_ret === "continue") continue;
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }

        if (invalidate) {
          this.emitter.emit('invalidate', {
            resourceUrl: resourceUrl
          });
        }
      }
    }
    /**
     * Get a usable timestamp
     * @returns {number} - timestamp
     * @private
     */

  }, {
    key: "_timestamp",
    get: function get() {
      return Math.floor(Date.now() / 1000);
    }
  }]);

  return ResourceCache;
}(Unobservable["default"]);



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(4);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./src/traits/Trait.js
var Trait = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(19);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(33);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/Maps4News.js + 1 modules
var Maps4News = __webpack_require__(23);

// EXTERNAL MODULE: ./src/resources/base/ResourceBase.js
var ResourceBase = __webpack_require__(8);

// EXTERNAL MODULE: ./src/utils/node.js
var node = __webpack_require__(14);

// EXTERNAL MODULE: ./src/utils/reflection.js
var reflection = __webpack_require__(5);

// EXTERNAL MODULE: ./src/utils/requests.js
var requests = __webpack_require__(9);

// CONCATENATED MODULE: ./src/ImageHandler.js





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
 * Image resource handler
 * @protected
 */

var ImageHandler_ImageHandler =
/*#__PURE__*/
function () {
  /**
   * @param {Maps4News} api - Api instance
   * @param {ResourceBase} target - Instance of target item
   */
  function ImageHandler(api, target) {
    classCallCheck_default()(this, ImageHandler);

    if (!Object(reflection["isParentOf"])(Maps4News["default"], api)) {
      throw new TypeError('Expected api to be of type Maps4News');
    }

    if (!Object(reflection["isParentOf"])(ResourceBase["default"], target)) {
      throw new TypeError('Expected target to be of type ResourceBase');
    }

    this._api = api;
    this._target = target;
  }
  /**
   * Get api instance
   * @returns {Maps4News} - Api instance
   */


  createClass_default()(ImageHandler, [{
    key: "delete",

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
    key: "download",
    value: function () {
      var _download = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.api.request("".concat(this.url));

              case 2:
                data = _context.sent;

                if (!Object(node["isNode"])()) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", data);

              case 5:
                return _context.abrupt("return", (window.URL || window.webkitURL).createObjectURL(data));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function download() {
        return _download.apply(this, arguments);
      };
    }()
    /**
     * Upload new image
     * @param {File|Buffer} image - Image file
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with {@link ApiError}
     */

  }, {
    key: "upload",
    value: function upload(image) {
      var Type = Object(node["isNode"])() ? Buffer : File;

      if (!Object(reflection["isParentOf"])(Type, image)) {
        throw new TypeError('Expected image to be of type File');
      }

      var formData = new requests["FormData"]();
      formData.append('image', image);
      return this.api.request(this.url, 'POST', formData);
    }
  }, {
    key: "api",
    get: function get() {
      return this._api;
    }
    /**
     * Resource url, can be used in an image tag
     * @returns {string} - Resource url
     */

  }, {
    key: "url",
    get: function get() {
      return "".concat(this._target.url, "/image");
    }
  }]);

  return ImageHandler;
}();


// CONCATENATED MODULE: ./src/traits/HandlesImages.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HandlesImages_HandlesImages; });






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
 * Adds the imageHandler to a resource
 *
 * @mixin
 */

var HandlesImages_HandlesImages =
/*#__PURE__*/
function (_Trait) {
  inherits_default()(HandlesImages, _Trait);

  function HandlesImages() {
    classCallCheck_default()(this, HandlesImages);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(HandlesImages).apply(this, arguments));
  }

  createClass_default()(HandlesImages, [{
    key: "imageHandler",

    /**
     * Handler for item image management
     * @returns {ImageHandler} - Image handler
     */
    get: function get() {
      return new ImageHandler_ImageHandler(this.api, this);
    }
  }]);

  return HandlesImages;
}(Trait["default"]);



/***/ }),
/* 77 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileDriver; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _DataStoreContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);






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
 * @private
 */

var FileDriver =
/*#__PURE__*/
function (_DataStoreContract) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(FileDriver, _DataStoreContract);

  /**
   * @param {String} path - File storage path
   * @inheritDoc
   */
  function FileDriver() {
    var _this;

    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.m4n';

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FileDriver);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FileDriver).call(this));
    _this._path = path;
    return _this;
  }
  /**
   * File storage path
   * @returns {String} - path
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FileDriver, [{
    key: "set",

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
    key: "get",
    value: function get(name) {
      return this._read()[name];
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "remove",
    value: function remove(name) {
      var data = this._read();

      delete data[name];

      this._write(data);
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "clear",
    value: function clear() {
      this._write({});
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "keys",
    value: function keys() {
      return Object.keys(this._read());
    }
    /**
     * Read file and parse
     * @returns {Object<String, String>} - Key, value object
     * @private
     */

  }, {
    key: "_read",
    value: function _read() {
      var data;

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
    key: "_write",
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
    key: "path",
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
    key: "realPath",
    get: function get() {
      if (this.path.startsWith('/')) {
        return this.path;
      } // eslint-disable-next-line no-undef


      return this._fs.realpathSync(this.path);
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "_fs",
    get: function get() {
      if (!this.__fs) {
        // eslint-disable-next-line no-eval
        this.__fs = eval('require("fs")');
      }

      return this.__fs;
    }
  }], [{
    key: "available",
    get: function get() {
      return Object(_utils_node__WEBPACK_IMPORTED_MODULE_5__["isNode"])();
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "secure",
    get: function get() {
      return true;
    }
  }]);

  return FileDriver;
}(_DataStoreContract__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(82);

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
/* 80 */
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(2);

var superPropBase = __webpack_require__(93);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports.parse = __webpack_require__(83);
exports.stringify = __webpack_require__(84);


/***/ }),
/* 83 */
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
/* 84 */
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
/* 85 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(77);

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(91);

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
/* 91 */
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
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
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
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 92 */
/***/ (function(module, exports) {

;(function(){var k,l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)},m="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function n(){n=function(){};m.Symbol||(m.Symbol=p)}var p=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function r(){n();var a=m.Symbol.iterator;a||(a=m.Symbol.iterator=m.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&l(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return t(this)}});r=function(){}}function t(a){var b=0;return v(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function v(a){r();a={next:a};a[m.Symbol.iterator]=function(){return this};return a}function w(a){r();n();r();var b=a[Symbol.iterator];return b?b.call(a):t(a)}var x;
if("function"==typeof Object.setPrototypeOf)x=Object.setPrototypeOf;else{var z;a:{var A={o:!0},B={};try{B.__proto__=A;z=B.o;break a}catch(a){}z=!1}x=z?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var C=x;function D(){this.g=!1;this.c=null;this.m=void 0;this.b=1;this.l=this.s=0;this.f=null}function E(a){if(a.g)throw new TypeError("Generator is already running");a.g=!0}D.prototype.h=function(a){this.m=a};
D.prototype.i=function(a){this.f={u:a,v:!0};this.b=this.s||this.l};D.prototype["return"]=function(a){this.f={"return":a};this.b=this.l};function F(a,b,d){a.b=d;return{value:b}}function G(a){this.w=a;this.j=[];for(var b in a)this.j.push(b);this.j.reverse()}function H(a){this.a=new D;this.A=a}H.prototype.h=function(a){E(this.a);if(this.a.c)return I(this,this.a.c.next,a,this.a.h);this.a.h(a);return J(this)};
function K(a,b){E(a.a);var d=a.a.c;if(d)return I(a,"return"in d?d["return"]:function(a){return{value:a,done:!0}},b,a.a["return"]);a.a["return"](b);return J(a)}H.prototype.i=function(a){E(this.a);if(this.a.c)return I(this,this.a.c["throw"],a,this.a.h);this.a.i(a);return J(this)};
function I(a,b,d,c){try{var e=b.call(a.a.c,d);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.g=!1,e;var f=e.value}catch(g){return a.a.c=null,a.a.i(g),J(a)}a.a.c=null;c.call(a.a,f);return J(a)}function J(a){for(;a.a.b;)try{var b=a.A(a.a);if(b)return a.a.g=!1,{value:b.value,done:!1}}catch(d){a.a.m=void 0,a.a.i(d)}a.a.g=!1;if(a.a.f){b=a.a.f;a.a.f=null;if(b.v)throw b.u;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function L(a){this.next=function(b){return a.h(b)};this["throw"]=function(b){return a.i(b)};this["return"]=function(b){return K(a,b)};r();n();r();this[Symbol.iterator]=function(){return this}}function M(a,b){var d=new L(new H(b));C&&C(d,a.prototype);return d}
if("undefined"===typeof FormData||!FormData.prototype.keys){var N=function(a,b,d){if(2>arguments.length)throw new TypeError("2 arguments required, but only "+arguments.length+" present.");return b instanceof Blob?[a+"",b,void 0!==d?d+"":"string"===typeof b.name?b.name:"blob"]:[a+"",b+""]},O=function(a){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");return[a+""]},P=function(a){var b=w(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,
lastModified:a.lastModified}));return a},Q="object"===typeof window?window:"object"===typeof self?self:this,R=Q.FormData,S=Q.XMLHttpRequest&&Q.XMLHttpRequest.prototype.send,T=Q.Request&&Q.fetch;n();var U=Q.Symbol&&Symbol.toStringTag,V=new WeakMap,W=Array.from||function(a){return[].slice.call(a)};U&&(Blob.prototype[U]||(Blob.prototype[U]="Blob"),"File"in Q&&!File.prototype[U]&&(File.prototype[U]="File"));try{new File([],"")}catch(a){Q.File=function(b,d,c){b=new Blob(b,c);c=c&&void 0!==c.lastModified?
new Date(c.lastModified):new Date;Object.defineProperties(b,{name:{value:d},lastModifiedDate:{value:c},lastModified:{value:+c},toString:{value:function(){return"[object File]"}}});U&&Object.defineProperty(b,U,{value:"File"});return b}}var X=function(a){V.set(this,Object.create(null));if(!a)return this;a=w(W(a.elements));for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.name&&!b.disabled)if("file"===b.type)for(var d=w(W(b.files||[])),c=d.next();!c.done;c=d.next())this.append(b.name,c.value);else if("select-multiple"===
b.type||"select-one"===b.type)for(d=w(W(b.options)),c=d.next();!c.done;c=d.next())c=c.value,!c.disabled&&c.selected&&this.append(b.name,c.value);else"checkbox"===b.type||"radio"===b.type?b.checked&&this.append(b.name,b.value):this.append(b.name,b.value)};k=X.prototype;k.append=function(a,b,d){var c=V.get(this);c[a]||(c[a]=[]);c[a].push([b,d])};k["delete"]=function(a){delete V.get(this)[a]};k.entries=function b(){var d=this,c,e,f,g,h,q;return M(b,function(b){switch(b.b){case 1:c=V.get(d),f=new G(c);
case 2:var u;a:{for(u=f;0<u.j.length;){var y=u.j.pop();if(y in u.w){u=y;break a}}u=null}if(null==(e=u)){b.b=0;break}g=w(c[e]);h=g.next();case 5:if(h.done){b.b=2;break}q=h.value;return F(b,[e,P(q)],6);case 6:h=g.next(),b.b=5}})};k.forEach=function(b,d){for(var c=w(this),e=c.next();!e.done;e=c.next()){var f=w(e.value);e=f.next().value;f=f.next().value;b.call(d,f,e,this)}};k.get=function(b){var d=V.get(this);return d[b]?P(d[b][0]):null};k.getAll=function(b){return(V.get(this)[b]||[]).map(P)};k.has=function(b){return b in
V.get(this)};k.keys=function d(){var c=this,e,f,g,h,q;return M(d,function(d){1==d.b&&(e=w(c),f=e.next());if(3!=d.b){if(f.done){d.b=0;return}g=f.value;h=w(g);q=h.next().value;return F(d,q,3)}f=e.next();d.b=2})};k.set=function(d,c,e){V.get(this)[d]=[[c,e]]};k.values=function c(){var e=this,f,g,h,q,y;return M(c,function(c){1==c.b&&(f=w(e),g=f.next());if(3!=c.b){if(g.done){c.b=0;return}h=g.value;q=w(h);q.next();y=q.next().value;return F(c,y,3)}g=f.next();c.b=2})};X.prototype._asNative=function(){for(var c=
new R,e=w(this),f=e.next();!f.done;f=e.next()){var g=w(f.value);f=g.next().value;g=g.next().value;c.append(f,g)}return c};X.prototype._blob=function(){for(var c="----formdata-polyfill-"+Math.random(),e=[],f=w(this),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;e.push("--"+c+"\r\n");h instanceof Blob?e.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):e.push('Content-Disposition: form-data; name="'+
g+'"\r\n\r\n'+h+"\r\n")}e.push("--"+c+"--");return new Blob(e,{type:"multipart/form-data; boundary="+c})};n();r();X.prototype[Symbol.iterator]=function(){return this.entries()};X.prototype.toString=function(){return"[object FormData]"};U&&(X.prototype[U]="FormData");[["append",N],["delete",O],["get",O],["getAll",O],["has",O],["set",N]].forEach(function(c){var e=X.prototype[c[0]];X.prototype[c[0]]=function(){return e.apply(this,c[1].apply(this,W(arguments)))}});S&&(XMLHttpRequest.prototype.send=function(c){c instanceof
X?(c=c._blob(),this.setRequestHeader("Content-Type",c.type),S.call(this,c)):S.call(this,c)});if(T){var Y=Q.fetch;Q.fetch=function(c,e){e&&e.body&&e.body instanceof X&&(e.body=e.body._blob());return Y(c,e)}}Q.FormData=X};
})();


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(2);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var errors_namespaceObject = {};
__webpack_require__.r(errors_namespaceObject);
__webpack_require__.d(errors_namespaceObject, "AbstractError", function() { return AbstractError["AbstractError"]; });
__webpack_require__.d(errors_namespaceObject, "AbstractClassError", function() { return AbstractError["AbstractClassError"]; });
__webpack_require__.d(errors_namespaceObject, "AbstractMethodError", function() { return AbstractError["AbstractMethodError"]; });
__webpack_require__.d(errors_namespaceObject, "ApiError", function() { return ApiError["default"]; });
__webpack_require__.d(errors_namespaceObject, "NodeError", function() { return NodeError_NodeError; });
__webpack_require__.d(errors_namespaceObject, "OAuthError", function() { return OAuthError["default"]; });
__webpack_require__.d(errors_namespaceObject, "StaticClassError", function() { return StaticClassError["default"]; });
__webpack_require__.d(errors_namespaceObject, "UnsupportedCrudError", function() { return UnsupportedCrudError_UnsupportedCrudError; });
__webpack_require__.d(errors_namespaceObject, "ValidationError", function() { return ValidationError["default"]; });

// EXTERNAL MODULE: ./src/Maps4News.js + 1 modules
var Maps4News = __webpack_require__(23);

// EXTERNAL MODULE: ./src/RequestParameters.js
var RequestParameters = __webpack_require__(21);

// EXTERNAL MODULE: ./src/storage/StorageManager.js + 3 modules
var StorageManager = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./src/enums/index.js + 3 modules
var enums = __webpack_require__(17);

// EXTERNAL MODULE: ./src/resources/JobMonitorRow.js
var JobMonitorRow = __webpack_require__(57);

// EXTERNAL MODULE: ./src/utils/reflection.js
var reflection = __webpack_require__(5);

// EXTERNAL MODULE: ./src/utils/requests.js
var utils_requests = __webpack_require__(9);

// CONCATENATED MODULE: ./src/JobMonitor.js



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
 * Used for monitoring the job queue
 */

var JobMonitor_JobMonitor =
/*#__PURE__*/
function () {
  /**
   * JobMonitor constructor
   * @param {Maps4News} api - Api instance
   * @param {number} [maxRows=100] - Default maximum amount of rows
   * @param {boolean} [longPoll=true] - Use long-polling instead of regular poling
   */
  function JobMonitor(api) {
    var maxRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number("100");
    var longPoll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    classCallCheck_default()(this, JobMonitor);

    if (!Object(reflection["isParentOf"])(Maps4News["default"], api)) {
      throw new TypeError('Expected api to be of type Maps4News');
    }

    this._api = api;
    this._maxAvailible = {};
    this._maxRows = Math.max(1, Number(maxRows));
    this._longPoll = Boolean(longPoll);
    this._lastUpdate = this._getTimestamp();
    this._data = [];
    this._filterStatus = enums["JobMonitorFilter"].DEFAULT;
    this._filterTags = [];
    this._purge = false;
    this._skipMaxUpdate = false;
  }
  /**
   * Contains the current JobMonitor data
   * @returns {Array<JobMonitorRow>} - Job monitor rows
   */


  createClass_default()(JobMonitor, [{
    key: "loadMore",

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
    key: "update",
    value: function update() {
      var _this = this;

      if (this.waiting || this._lastUpdate === this._getTimestamp()) {
        return new Promise(function (resolve) {
          resolve(0); // Still waiting for the other promise to resolve or we're sure there is no new data
        });
      } // Counter so we don't have to worry about racing


      this._waiting = 1;

      if (this._purge) {
        this._data = [];
        this._purge = false;
      } // First we need to check if we have enough data to begin with


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
        this.api.logger.debug("[JobMonitor] have ".concat(this.data.length + requestedRowCount, ", Diff: ").concat(rowCountDiff, ",") + "PerPage: ".concat(perPage, ", Page: ").concat(page, ", Target: ").concat(perPage * page));
        var params = {
          // eslint-disable-next-line
          per_page: perPage,
          page: page
        };

        if (this.filterTags.length > 0) {
          params.tags = this.filterTags;
        }

        var _url = this._baseUrl + '&' + Object(utils_requests["encodeQueryString"])(params);

        requests.push(this.api.request(_url).then(function (data) {
          return data.map(function (x) {
            return new JobMonitorRow["default"](_this.api, x);
          });
        }));
        requestedRowCount += perPage;
        rowCountDiff -= perPage;
        this._waiting++;
      }

      var out = []; // note: Promise.all resolves with the data in the same order as the input

      out.push(Promise.all(requests).then(function (data) {
        // Join data
        data = data.reduce(function (acc, val) {
          return acc.concat(val);
        }, []); // Append data

        _this._data = _this.data.concat(data);
        var oldLength = _this.data.length; // Remove duplicates

        _this._data = _this.data.filter(function (thing, index, self) {
          return index === self.findIndex(function (t) {
            return t.id === thing.id;
          });
        }); // We're no longer waiting

        _this._waiting -= requests.length;
        return data.length - (oldLength - _this.data.length);
      })); // Fetch updates

      var url = this._baseUrl + '&timestamp=' + Math.floor(this._lastUpdate);

      if (this.longPoll && !skipLongPoll) {
        url += '&long_poll';
      }

      this._lastUpdate = this._getTimestamp();
      out.push(this.api.request(url).then(function (data) {
        return data.map(function (x) {
          return new JobMonitorRow["default"](_this.api, x);
        });
      }).then(function (data) {
        var lookup = data.map(function (x) {
          return x.id;
        });
        var updateCount = 0;

        for (var i = 0; i < _this._data.length && lookup.length > 0; i++) {
          var ii = lookup.indexOf(_this._data[i].id);

          if (ii !== -1) {
            _this._data[i] = data[ii]; // Remove the data and the lookup entry

            data.splice(ii, 1);
            lookup.splice(ii, 1);
            updateCount++;
          }
        } // Prepend new data


        _this._data = data.concat(_this._data);
        _this._waiting--;
        return updateCount;
      }));
      return Promise.all(out).then(function (x) {
        return x.reduce(function (s, v) {
          return s + v;
        }, 0);
      }).then(function (rowCount) {
        var droppedRowCount = _this.data.length - _this.maxRows; // Truncate data if needed

        _this._data.splice(_this.maxRows, _this.data.length - _this.maxRows);

        if (!_this._skipMaxUpdate) {
          _this._maxAvailible[_this._baseUrl] = _this.data.length;
        }

        _this.api.logger.debug("Target: ".concat(_this.maxRows, ", Actual: ").concat(_this.data.length, ", Updated: ").concat(rowCount, ", Dropped: ").concat(droppedRowCount, ", RealMax: ").concat(_this.realMaxRows));

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
    key: "_getTimestamp",
    value: function _getTimestamp() {
      return Date.now() / 1000;
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    }
    /**
     * Get api instance
     * @returns {Maps4News} - Api instance
     */

  }, {
    key: "api",
    get: function get() {
      return this._api;
    }
  }, {
    key: "waiting",
    get: function get() {
      return this._waiting > 0;
    }
    /**
     * Maximum number of rows to store
     * @returns {number} - Maximum number of rows
     */

  }, {
    key: "maxRows",
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
      this.api.logger.debug("Setting maxRows to ".concat(value, ". skipping maxUpdate next cycle."));
      this._skipMaxUpdate = true;
      this._maxAvailible[this._baseUrl] = value;
      this._maxRows = value;
    }
    /**
     * Used to get internal reference max rows
     */

  }, {
    key: "realMaxRows",
    get: function get() {
      return this._maxAvailible[this._baseUrl] || this.maxRows;
    }
  }, {
    key: "_baseUrl",
    get: function get() {
      return "/jobs/monitor/".concat(this.filterStatus, "?internal=").concat(!this.hideInternal);
    }
    /**
     * If internal users should be hidden. Updating this value won't take
     * effect until the {@link JobMonitor#update} method has been called.
     * @param {boolean} [value=false] - hide internal users
     */

  }, {
    key: "hideInternal",
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
    key: "filterStatus",
    set: function set(value) {
      value = value.toLowerCase();

      if (!enums["JobMonitorFilter"].values().includes(value)) {
        throw new TypeError('Expected value to be property of JobMonitorFilter. Possible options: ' + enums["JobMonitorFilter"].values().join(', '));
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
    key: "filterTags",
    set: function set(value) {
      if (Array.isArray('array')) {
        var valueType = value.toString();

        if (valueType !== null && typeof value !== 'undefined') {
          valueType = value.constructor.name;
        }

        throw new TypeError("Expected value to be of type array got ".concat(valueType, "."));
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
    key: "lastUpdate",
    get: function get() {
      return new Date(this._lastUpdate * 1000);
    }
    /**
     * Get if long polling should be used
     * @returns {boolean} - If long polling should be used
     */

  }, {
    key: "longPoll",
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
}();


// EXTERNAL MODULE: ./src/enums/Enum.js
var Enum = __webpack_require__(25);

// EXTERNAL MODULE: ./src/oauth/OAuth.js
var OAuth = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(4);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./src/oauth/OAuthToken.js
var OAuthToken = __webpack_require__(24);

// EXTERNAL MODULE: ./src/oauth/StateContainer.js
var StateContainer = __webpack_require__(58);

// EXTERNAL MODULE: ./src/errors/OAuthError.js
var OAuthError = __webpack_require__(20);

// EXTERNAL MODULE: ./src/utils/node.js
var node = __webpack_require__(14);

// CONCATENATED MODULE: ./src/oauth/ImplicitFlow.js






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
 * Implicit OAuth flow using redirection
 */

var ImplicitFlow_ImplicitFlow =
/*#__PURE__*/
function (_OAuth) {
  inherits_default()(ImplicitFlow, _OAuth);

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
    var _this;

    var callbackUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var scopes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['*'];
    var useState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    classCallCheck_default()(this, ImplicitFlow);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ImplicitFlow).call(this, clientId, scopes));

    if (Object(node["isNode"])()) {
      throw new Error("".concat(_this.constructor.name, " can't be used under nodejs"));
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

      if (_this.useState && !StateContainer["default"].validate(anchorParams['state'])) {
        throw Error('Invalid state in url');
      } else {
        _this.token = OAuthToken["default"].fromResponseObject(anchorParams);
      }
    }

    return _this;
  }
  /**
   * Authenticate
   * @returns {Promise} - Promise resolves with {@link OAuthToken} and rejects with {@link OAuthError}
   */


  createClass_default()(ImplicitFlow, [{
    key: "authenticate",
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
    key: "_buildRedirectUrl",
    value: function _buildRedirectUrl() {
      var queryParams = {
        'client_id': this.clientId,
        'redirect_uri': this.callbackUrl,
        'response_type': 'token',
        'scope': this.scopes.join(' ')
      };

      if (this.useState) {
        queryParams['state'] = StateContainer["default"].generate();
      }

      return "".concat(this.host + this.path, "?").concat(Object(utils_requests["encodeQueryString"])(queryParams));
    }
    /**
     * Builds an object containing all the anchor parameters
     * @param {String} query - Url hash
     * @returns {Object<String, String>} - Anchor parameters
     * @protected
     */

  }, {
    key: "_getAnchorParams",
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
          if (!_iteratorNormalCompletion && _iterator.return != null) {
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
    key: "_getOAuthAnchorParams",
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
    key: "_cleanAnchorParams",
    value: function _cleanAnchorParams() {
      var anchorParams = this._getAnchorParams();

      var targets = this._anchorParams; // Just in case

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
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      window.location.hash = Object(utils_requests["encodeQueryString"])(anchorParams);
    }
    /**
     * Test if the anchor contains an OAuth response
     * @returns {Boolean} - if anchor tested positive for containing an OAuth response
     * @protected
     */

  }, {
    key: "_anchorContainsOAuthResponse",
    value: function _anchorContainsOAuthResponse() {
      var queryKeys = Object.keys(this._getOAuthAnchorParams()); // Check if all the params are in the anchor

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
    key: "_anchorContainsError",
    value: function _anchorContainsError() {
      return Boolean(this._getAnchorParams()['error']);
    }
    /**
     * Get and return the error in the anchor
     * @returns {OAuthError} - OAuthError object
     * @protected
     */

  }, {
    key: "_getError",
    value: function _getError() {
      if (!this._anchorContainsError()) {
        throw Error('No OAuthError found in anchor');
      }

      var params = this._getAnchorParams();

      return new OAuthError["default"](params['error'], params['message']);
    }
  }]);

  return ImplicitFlow;
}(OAuth["default"]);


// CONCATENATED MODULE: ./src/oauth/ImplicitFlowPopup.js






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
 * Implicit OAuth flow using a pop-up.
 */

var ImplicitFlowPopup_ImplicitFlowPopup =
/*#__PURE__*/
function (_ImplicitFlow) {
  inherits_default()(ImplicitFlowPopup, _ImplicitFlow);

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
    var _this;

    var callbackUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var scopes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['*'];
    var useState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var windowOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "width=800, height=600";

    classCallCheck_default()(this, ImplicitFlowPopup);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ImplicitFlowPopup).call(this, clientId, callbackUrl, scopes, useState));
    _this.windowOptions = windowOptions;
    _this._storage = StorageManager["default"].best;

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


  createClass_default()(ImplicitFlowPopup, [{
    key: "authenticate",

    /**
     * Authenticate
     * @returns {Promise} - Promise resolves with {@link OAuthToken} and rejects with {@link OAuthError}
     */
    value: function authenticate() {
      var _this2 = this;

      if (window.name === ImplicitFlowPopup.popupWindowName) {
        return new Promise(function () {});
      } // Should be super.super.authenticate() :/


      if (this.authenticated) {
        return new Promise(function (resolve) {
          resolve(_this2.token);
        });
      }

      return new Promise(function (resolve, reject) {
        var popup = window.open(_this2._buildRedirectUrl(), ImplicitFlowPopup.popupWindowName, _this2.windowOptions);
        var ticker = setInterval(function () {
          if (popup.closed) {
            reject(new OAuthError["default"]('window_closed', 'Pop-up window was closed before data could be extracted'));
          }

          var done = false;

          try {
            done = !['', 'about:blank'].includes(popup.location.href);
          } catch (e) {// Nothing
          }

          if (done) {
            clearInterval(ticker);

            var data = _this2._getAnchorParams(popup.location.hash);

            popup.close();

            if (data.error) {
              reject(new OAuthError["default"](data.error, data.message));
            } else {
              resolve(_this2.token = OAuthToken["default"].fromResponseObject(data));
            }
          }
        }, 250);
      });
    }
  }], [{
    key: "popupWindowName",
    get: function get() {
      return 'm4n_api_auth';
    }
  }]);

  return ImplicitFlowPopup;
}(ImplicitFlow_ImplicitFlow);


// CONCATENATED MODULE: ./src/oauth/PasswordFlow.js






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
 * Password authentication flow
 */

var PasswordFlow_PasswordFlow =
/*#__PURE__*/
function (_OAuth) {
  inherits_default()(PasswordFlow, _OAuth);

  /**
   * @param {string} clientId - OAuth client id
   * @param {string} secret - OAuth secret
   * @param {string} username - Valid username (email)
   * @param {string} password - Valid password
   * @param {Array<string>} scopes - A list of required scopes
   */
  function PasswordFlow(clientId, secret, username, password) {
    var _this;

    var scopes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['*'];

    classCallCheck_default()(this, PasswordFlow);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PasswordFlow).call(this, clientId, scopes));
    _this._secret = secret;
    _this._username = username;
    _this._password = password;
    _this._path = '/oauth/token'; // Because the client requires a secret HTTPS is highly recommended

    if (!Object(node["isNode"])()) {
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


  createClass_default()(PasswordFlow, [{
    key: "authenticate",

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
        body: Object(utils_requests["encodeQueryString"])(query),
        mode: 'cors',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      return Object(utils_requests["fetch"])(url, init).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.error) {
          throw new OAuthError["default"](data.error, data.message);
        }

        _this2.token = OAuthToken["default"].fromResponseObject(data);
        _this2.token.scopes = _this2.scopes;
        return _this2.token;
      });
    }
  }, {
    key: "secret",
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
    key: "username",
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
    key: "password",
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
    key: "path",
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
}(OAuth["default"]);


// EXTERNAL MODULE: ./src/oauth/DummyFlow.js
var DummyFlow = __webpack_require__(55);

// EXTERNAL MODULE: ./src/errors/ApiError.js
var ApiError = __webpack_require__(22);

// EXTERNAL MODULE: ./src/errors/AbstractError.js
var AbstractError = __webpack_require__(10);

// EXTERNAL MODULE: ./src/errors/ValidationError.js
var ValidationError = __webpack_require__(39);

// EXTERNAL MODULE: ./src/errors/StaticClassError.js
var StaticClassError = __webpack_require__(40);

// EXTERNAL MODULE: ./src/resources/index.js + 5 modules
var resources = __webpack_require__(7);

// EXTERNAL MODULE: ./src/utils/helpers.js
var helpers = __webpack_require__(56);

// EXTERNAL MODULE: ./src/ResourceLister.js
var ResourceLister = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(27);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./src/errors/NodeError.js






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
var NodeError_NodeError =
/*#__PURE__*/
function (_Error) {
  inherits_default()(NodeError, _Error);

  function NodeError() {
    classCallCheck_default()(this, NodeError);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(NodeError).apply(this, arguments));
  }

  return NodeError;
}(wrapNativeSuper_default()(Error));


// CONCATENATED MODULE: ./src/errors/UnsupportedCrudError.js






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
var UnsupportedCrudError_UnsupportedCrudError =
/*#__PURE__*/
function (_Error) {
  inherits_default()(UnsupportedCrudError, _Error);

  function UnsupportedCrudError() {
    classCallCheck_default()(this, UnsupportedCrudError);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(UnsupportedCrudError).apply(this, arguments));
  }

  return UnsupportedCrudError;
}(wrapNativeSuper_default()(Error));


// CONCATENATED MODULE: ./src/errors/index.js
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













// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "license", function() { return license; });
/* concated harmony reexport Maps4News */__webpack_require__.d(__webpack_exports__, "Maps4News", function() { return Maps4News["default"]; });
/* concated harmony reexport RequestParameters */__webpack_require__.d(__webpack_exports__, "RequestParameters", function() { return RequestParameters["default"]; });
/* concated harmony reexport StorageManager */__webpack_require__.d(__webpack_exports__, "StorageManager", function() { return StorageManager["default"]; });
/* concated harmony reexport JobMonitor */__webpack_require__.d(__webpack_exports__, "JobMonitor", function() { return JobMonitor_JobMonitor; });
/* concated harmony reexport Enum */__webpack_require__.d(__webpack_exports__, "Enum", function() { return Enum["default"]; });
/* concated harmony reexport DeletedState */__webpack_require__.d(__webpack_exports__, "DeletedState", function() { return enums["DeletedState"]; });
/* concated harmony reexport JobMonitorFilter */__webpack_require__.d(__webpack_exports__, "JobMonitorFilter", function() { return enums["JobMonitorFilter"]; });
/* concated harmony reexport ResultStatus */__webpack_require__.d(__webpack_exports__, "ResultStatus", function() { return enums["ResultStatus"]; });
/* concated harmony reexport OAuth */__webpack_require__.d(__webpack_exports__, "OAuth", function() { return OAuth["default"]; });
/* concated harmony reexport ImplicitFlow */__webpack_require__.d(__webpack_exports__, "ImplicitFlow", function() { return ImplicitFlow_ImplicitFlow; });
/* concated harmony reexport ImplicitFlowPopup */__webpack_require__.d(__webpack_exports__, "ImplicitFlowPopup", function() { return ImplicitFlowPopup_ImplicitFlowPopup; });
/* concated harmony reexport PasswordFlow */__webpack_require__.d(__webpack_exports__, "PasswordFlow", function() { return PasswordFlow_PasswordFlow; });
/* concated harmony reexport DummyFlow */__webpack_require__.d(__webpack_exports__, "DummyFlow", function() { return DummyFlow["default"]; });
/* concated harmony reexport ApiError */__webpack_require__.d(__webpack_exports__, "ApiError", function() { return ApiError["default"]; });
/* concated harmony reexport AbstractError */__webpack_require__.d(__webpack_exports__, "AbstractError", function() { return AbstractError["AbstractError"]; });
/* concated harmony reexport AbstractClassError */__webpack_require__.d(__webpack_exports__, "AbstractClassError", function() { return AbstractError["AbstractClassError"]; });
/* concated harmony reexport AbstractMethodError */__webpack_require__.d(__webpack_exports__, "AbstractMethodError", function() { return AbstractError["AbstractMethodError"]; });
/* concated harmony reexport ValidationError */__webpack_require__.d(__webpack_exports__, "ValidationError", function() { return ValidationError["default"]; });
/* concated harmony reexport StaticClassError */__webpack_require__.d(__webpack_exports__, "StaticClassError", function() { return StaticClassError["default"]; });
/* concated harmony reexport resources */__webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* concated harmony reexport helpers */__webpack_require__.d(__webpack_exports__, "helpers", function() { return helpers; });
/* concated harmony reexport ResourceLister */__webpack_require__.d(__webpack_exports__, "ResourceLister", function() { return ResourceLister["default"]; });
/* concated harmony reexport errors */__webpack_require__.d(__webpack_exports__, "errors", function() { return errors_namespaceObject; });
/* concated harmony reexport reflection */__webpack_require__.d(__webpack_exports__, "reflection", function() { return reflection; });
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
// Core







 // Enums



 // Flows










 // Exceptions







 // Resources


 // Helpers




 // Errors





/**
 * Package version
 * @private
 */

var version = "v1.4.45";
/**
 * Package license
 * @private
 */

var license = "BSD 3-Clause License\n\nCopyright (c) 2017, MapCreator\nAll rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are met:\n\n* Redistributions of source code must retain the above copyright notice, this\n  list of conditions and the following disclaimer.\n\n* Redistributions in binary form must reproduce the above copyright notice,\n  this list of conditions and the following disclaimer in the documentation\n  and/or other materials provided with the distribution.\n\n* Neither the name of the copyright holder nor the names of its\n  contributors may be used to endorse or promote products derived from\n  this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\"\nAND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\nIMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\nDISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE\nFOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL\nDAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR\nSERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER\nCAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,\nOR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n";

/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.browser.js.map
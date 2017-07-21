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
 */
/*!
 * hash:6296264543af6e70c35e, chunkhash:4f17da2562498f503796, name:bundle, version:v0.8.3
 * 
 * This budle contains the following packages:
 * └─ @mapcreator/maps4news (0.8.3) ── BSD 3-clause "New" or "Revised" License (http://www.opensource.org/licenses/BSD-3-Clause) ── package.json
 *    ├─ babel-polyfill (6.23.0) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/babel-polyfill/package.json
 *    │  ├─ babel-runtime (6.23.0) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/babel-runtime/package.json
 *    │  │  └─ regenerator-runtime (0.10.5) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/regenerator-runtime/package.json
 *    │  └─ core-js (2.4.1) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/core-js/package.json
 *    └─ mitt (1.1.2) ── MIT License (http://www.opensource.org/licenses/MIT) ── node_modules/mitt/package.json
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
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 166);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(26)
  , hide      = __webpack_require__(13)
  , redefine  = __webpack_require__(14)
  , ctx       = __webpack_require__(27)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(71)('wks')
  , uid        = __webpack_require__(35)
  , Symbol     = __webpack_require__(2).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(1)
  , IE8_DOM_DEFINE = __webpack_require__(137)
  , toPrimitive    = __webpack_require__(23)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractError = __webpack_require__(49);

var _PaginatedResourceListing = __webpack_require__(123);

var _PaginatedResourceListing2 = _interopRequireDefault(_PaginatedResourceListing);

var _ResourceBase2 = __webpack_require__(30);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base of all resource items that support Crud operations
 * @abstract
 */
var CrudBase = function (_ResourceBase) {
  _inherits(CrudBase, _ResourceBase);

  /**
   * @param {Maps4News} api - Api instance
   * @param {Object<String, *>} data - Item data
   */
  function CrudBase(api) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CrudBase);

    var _this = _possibleConstructorReturn(this, (CrudBase.__proto__ || Object.getPrototypeOf(CrudBase)).call(this, api, data));

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


  _createClass(CrudBase, [{
    key: '_buildCreateData',
    value: function _buildCreateData() {
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
     * Macro for resource listing
     * @param {ResourceBase} Target - Target object
     * @param {String} url - Target url, if not set it will guess
     * @param {Number} page - Page number
     * @param {Number} perPage - Amount of items per page
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance and rejects with {@link ApiError}
     * @protected
     */

  }, {
    key: '_listResource',
    value: function _listResource(Target) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var perPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.api.defaults.perPage;

      if (!url) {
        var resource = new Target(this.api).resourceName.replace(/s+$/, '');

        url = this.url + '/' + resource + 's';
      }

      var resolver = new _PaginatedResourceListing2.default(this.api, url, Target);

      return resolver.getPage(page, perPage);
    }

    /**
     * Save item. This will create a new item if `id` is unset
     * @returns {Promise} - Resolves with {@link CrudBase} instance and rejects with {@link ApiError}
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

      return new Promise(function (resolve, reject) {
        _this2.api.request(_this2.baseUrl, 'POST', _this2._buildCreateData()).catch(reject).then(function (data) {
          _this2._properties = {};
          _this2._baseProperties = data;

          resolve(_this2);
        });
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

      return new Promise(function (resolve, reject) {
        _this3.api.request(_this3.url, 'PATCH', _this3._properties).catch(reject).then(function () {
          return resolve(_this3);
        });
      });
    }

    /**
     * Delete item
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with {@link ApiError}
     */

  }, {
    key: 'delete',
    value: function _delete() {
      return this.api.request(this.url, 'DELETE');
    }

    /**
     * Restore item
     * @returns {Promise} - Resolves with {@link CrudBase} instance and rejects with {@link ApiError}
     */

  }, {
    key: 'restore',
    value: function restore() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.api.request(_this4.url, 'PUT').catch(reject).then(function (data) {
          return resolve(new _this4(_this4.api, data));
        });
      });
    }
  }]);

  return CrudBase;
}(_ResourceBase3.default);

exports.default = CrudBase;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isParentOf = isParentOf;
exports.getTypeName = getTypeName;
exports.mix = mix;

var _Trait = __webpack_require__(83);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
 * @param {Constructor} baseClass - Target base class for the traits to be applied to
 * @param {Constructor} mixins - Traits to be applied
 * @returns {Constructor} - Constructor with any traits applied
 */
function mix(baseClass) {
  for (var _len = arguments.length, mixins = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    mixins[_key - 1] = arguments[_key];
  }

  var cocktail = function (_baseClass) {
    _inherits(_Cocktail, _baseClass);

    function _Cocktail() {
      var _ref;

      _classCallCheck(this, _Cocktail);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _this = _possibleConstructorReturn(this, (_ref = _Cocktail.__proto__ || Object.getPrototypeOf(_Cocktail)).call.apply(_ref, [this].concat(args)));

      mixins.forEach(function (mixin) {
        if (mixin.prototype.initializer) {
          mixin.prototype.initializer.call(_this);
        }
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

      if (!isParentOf(_Trait.Trait, mixin)) {
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(21);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(32);
module.exports = __webpack_require__(6) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , hide      = __webpack_require__(13)
  , has       = __webpack_require__(12)
  , SRC       = __webpack_require__(35)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

__webpack_require__(26).inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54)
  , defined = __webpack_require__(21);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0)
  , fails   = __webpack_require__(3)
  , defined = __webpack_require__(21)
  , quot    = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function(string, tag, attribute, value) {
  var S  = String(defined(string))
    , p1 = '<' + tag;
  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function(NAME, exec){
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function(){
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(55)
  , createDesc     = __webpack_require__(32)
  , toIObject      = __webpack_require__(16)
  , toPrimitive    = __webpack_require__(23)
  , has            = __webpack_require__(12)
  , IE8_DOM_DEFINE = __webpack_require__(137)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(12)
  , toObject    = __webpack_require__(11)
  , IE_PROTO    = __webpack_require__(98)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

module.exports = function(method, arg){
  return !!method && fails(function(){
    arg ? method.call(null, function(){}, 1) : method.call(null);
  });
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(0)
  , core    = __webpack_require__(26)
  , fails   = __webpack_require__(3);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(27)
  , IObject  = __webpack_require__(54)
  , toObject = __webpack_require__(11)
  , toLength = __webpack_require__(9)
  , asc      = __webpack_require__(265);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if(__webpack_require__(6)){
  var LIBRARY             = __webpack_require__(36)
    , global              = __webpack_require__(2)
    , fails               = __webpack_require__(3)
    , $export             = __webpack_require__(0)
    , $typed              = __webpack_require__(80)
    , $buffer             = __webpack_require__(121)
    , ctx                 = __webpack_require__(27)
    , anInstance          = __webpack_require__(42)
    , propertyDesc        = __webpack_require__(32)
    , hide                = __webpack_require__(13)
    , redefineAll         = __webpack_require__(43)
    , toInteger           = __webpack_require__(34)
    , toLength            = __webpack_require__(9)
    , toIndex             = __webpack_require__(38)
    , toPrimitive         = __webpack_require__(23)
    , has                 = __webpack_require__(12)
    , same                = __webpack_require__(143)
    , classof             = __webpack_require__(56)
    , isObject            = __webpack_require__(4)
    , toObject            = __webpack_require__(11)
    , isArrayIter         = __webpack_require__(113)
    , create              = __webpack_require__(39)
    , getPrototypeOf      = __webpack_require__(19)
    , gOPN                = __webpack_require__(40).f
    , getIterFn           = __webpack_require__(115)
    , uid                 = __webpack_require__(35)
    , wks                 = __webpack_require__(5)
    , createArrayMethod   = __webpack_require__(25)
    , createArrayIncludes = __webpack_require__(72)
    , speciesConstructor  = __webpack_require__(118)
    , ArrayIterators      = __webpack_require__(117)
    , Iterators           = __webpack_require__(46)
    , $iterDetect         = __webpack_require__(76)
    , setSpecies          = __webpack_require__(41)
    , arrayFill           = __webpack_require__(116)
    , arrayCopyWithin     = __webpack_require__(152)
    , $DP                 = __webpack_require__(7)
    , $GOPD               = __webpack_require__(18)
    , dP                  = $DP.f
    , gOPD                = $GOPD.f
    , RangeError          = global.RangeError
    , TypeError           = global.TypeError
    , Uint8Array          = global.Uint8Array
    , ARRAY_BUFFER        = 'ArrayBuffer'
    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
    , PROTOTYPE           = 'prototype'
    , ArrayProto          = Array[PROTOTYPE]
    , $ArrayBuffer        = $buffer.ArrayBuffer
    , $DataView           = $buffer.DataView
    , arrayForEach        = createArrayMethod(0)
    , arrayFilter         = createArrayMethod(2)
    , arraySome           = createArrayMethod(3)
    , arrayEvery          = createArrayMethod(4)
    , arrayFind           = createArrayMethod(5)
    , arrayFindIndex      = createArrayMethod(6)
    , arrayIncludes       = createArrayIncludes(true)
    , arrayIndexOf        = createArrayIncludes(false)
    , arrayValues         = ArrayIterators.values
    , arrayKeys           = ArrayIterators.keys
    , arrayEntries        = ArrayIterators.entries
    , arrayLastIndexOf    = ArrayProto.lastIndexOf
    , arrayReduce         = ArrayProto.reduce
    , arrayReduceRight    = ArrayProto.reduceRight
    , arrayJoin           = ArrayProto.join
    , arraySort           = ArrayProto.sort
    , arraySlice          = ArrayProto.slice
    , arrayToString       = ArrayProto.toString
    , arrayToLocaleString = ArrayProto.toLocaleString
    , ITERATOR            = wks('iterator')
    , TAG                 = wks('toStringTag')
    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
    , DEF_CONSTRUCTOR     = uid('def_constructor')
    , ALL_CONSTRUCTORS    = $typed.CONSTR
    , TYPED_ARRAY         = $typed.TYPED
    , VIEW                = $typed.VIEW
    , WRONG_LENGTH        = 'Wrong length!';

  var $map = createArrayMethod(1, function(O, length){
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function(){
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
    new Uint8Array(1).set({});
  });

  var strictToLength = function(it, SAME){
    if(it === undefined)throw TypeError(WRONG_LENGTH);
    var number = +it
      , length = toLength(it);
    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
    return length;
  };

  var toOffset = function(it, BYTES){
    var offset = toInteger(it);
    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function(it){
    if(isObject(it) && TYPED_ARRAY in it)return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function(C, length){
    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function(O, list){
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function(C, list){
    var index  = 0
      , length = list.length
      , result = allocate(C, length);
    while(length > index)result[index] = list[index++];
    return result;
  };

  var addGetter = function(it, key, internal){
    dP(it, key, {get: function(){ return this._d[internal]; }});
  };

  var $from = function from(source /*, mapfn, thisArg */){
    var O       = toObject(source)
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , iterFn  = getIterFn(O)
      , i, length, values, result, step, iterator;
    if(iterFn != undefined && !isArrayIter(iterFn)){
      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
        values.push(step.value);
      } O = values;
    }
    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/*...items*/){
    var index  = 0
      , length = arguments.length
      , result = allocate(this, length);
    while(length > index)result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString(){
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /*, end */){
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /*, thisArg */){
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /*, thisArg */){
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /*, thisArg */){
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /*, thisArg */){
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /*, thisArg */){
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /*, fromIndex */){
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /*, fromIndex */){
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator){ // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /*, thisArg */){
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse(){
      var that   = this
        , length = validate(that).length
        , middle = Math.floor(length / 2)
        , index  = 0
        , value;
      while(index < middle){
        value         = that[index];
        that[index++] = that[--length];
        that[length]  = value;
      } return that;
    },
    some: function some(callbackfn /*, thisArg */){
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn){
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end){
      var O      = validate(this)
        , length = O.length
        , $begin = toIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end){
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /*, offset */){
    validate(this);
    var offset = toOffset(arguments[1], 1)
      , length = this.length
      , src    = toObject(arrayLike)
      , len    = toLength(src.length)
      , index  = 0;
    if(len + offset > length)throw RangeError(WRONG_LENGTH);
    while(index < len)this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries(){
      return arrayEntries.call(validate(this));
    },
    keys: function keys(){
      return arrayKeys.call(validate(this));
    },
    values: function values(){
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function(target, key){
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key){
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc){
    if(isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ){
      target[key] = desc.value;
      return target;
    } else return dP(target, key, desc);
  };

  if(!ALL_CONSTRUCTORS){
    $GOPD.f = $getDesc;
    $DP.f   = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty:           $setDesc
  });

  if(fails(function(){ arrayToString.call({}); })){
    arrayToString = arrayToLocaleString = function toString(){
      return arrayJoin.call(this);
    }
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice:          $slice,
    set:            $set,
    constructor:    function(){ /* noop */ },
    toString:       arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function(){ return this[TYPED_ARRAY]; }
  });

  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
    CLAMPED = !!CLAMPED;
    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
      , ISNT_UINT8 = NAME != 'Uint8Array'
      , GETTER     = 'get' + KEY
      , SETTER     = 'set' + KEY
      , TypedArray = global[NAME]
      , Base       = TypedArray || {}
      , TAC        = TypedArray && getPrototypeOf(TypedArray)
      , FORCED     = !TypedArray || !$typed.ABV
      , O          = {}
      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function(that, index){
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function(that, index, value){
      var data = that._d;
      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function(that, index){
      dP(that, index, {
        get: function(){
          return getter(this, index);
        },
        set: function(value){
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if(FORCED){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME, '_d');
        var index  = 0
          , offset = 0
          , buffer, byteLength, length, klass;
        if(!isObject(data)){
          length     = strictToLength(data, true)
          byteLength = length * BYTES;
          buffer     = new $ArrayBuffer(byteLength);
        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if($length === undefined){
            if($len % BYTES)throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if(TYPED_ARRAY in data){
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while(index < length)addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if(!$iterDetect(function(iter){
      // V8 works with iterators, but fails in many other cases
      // https://code.google.com/p/v8/issues/detail?id=4552
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
      , $iterator         = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
      dP(TypedArrayPrototype, TAG, {
        get: function(){ return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES,
      from: $from,
      of: $of
    });

    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

    $export($export.P + $export.F * fails(function(){
      new TypedArray(1).slice();
    }), NAME, {slice: $slice});

    $export($export.P + $export.F * (fails(function(){
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
    }) || !fails(function(){
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {toLocaleString: $toLocaleString});

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function(){ /* empty */ };

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var Map     = __webpack_require__(155)
  , $export = __webpack_require__(0)
  , shared  = __webpack_require__(71)('metadata')
  , store   = shared.store || (shared.store = new (__webpack_require__(158)));

var getOrCreateMetadataMap = function(target, targetKey, create){
  var targetMetadata = store.get(target);
  if(!targetMetadata){
    if(!create)return undefined;
    store.set(target, targetMetadata = new Map);
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if(!keyMetadata){
    if(!create)return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map);
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function(target, targetKey){
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
    , keys        = [];
  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
  return keys;
};
var toMetaKey = function(it){
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function(O){
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractError = __webpack_require__(49);

var _Maps4News = __webpack_require__(57);

var _Maps4News2 = _interopRequireDefault(_Maps4News);

var _caseConverter = __webpack_require__(167);

var _reflection = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Resource base
 * @abstract
 */
var ResourceBase = function () {
  /**
   * @param {Maps4News} api - Api instance
   * @param {Object<String, *>} data - Item data
   */
  function ResourceBase(api) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ResourceBase);

    if (this.constructor === ResourceBase) {
      throw new _AbstractError.AbstractClassError();
    }

    if (!(0, _reflection.isParentOf)(_Maps4News2.default, api)) {
      throw new TypeError('Expected api to be of type Maps4News');
    }

    // Normalize keys to snake_case
    // Fix data types
    Object.keys(data).map(function (key) {
      var newKey = (0, _caseConverter.camelToSnakeCase)((0, _caseConverter.pascalToCamelCase)(key));

      if (newKey !== key) {
        data[newKey] = ResourceBase._guessType(newKey, data[key]);
        delete data[key];
      } else {
        data[key] = ResourceBase._guessType(newKey, data[key]);
      }
    });

    this._baseProperties = data;
    this._properties = {};
    this._api = api;

    this._applyProperties();
  }

  /**
   * Get api instance
   * @returns {Maps4News} - Api instance
   */


  _createClass(ResourceBase, [{
    key: 'refresh',


    /**
     * Refresh the resource by requesting it from the server again
     * @param {Boolean} updateSelf - Update the current instance
     * @returns {Promise} - Resolves with {@link ResourceBase} instance and rejects with {@link ApiError}
     */
    value: function refresh() {
      var _this = this;

      var updateSelf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return new Promise(function (resolve, reject) {
        _this._api.request(_this.url).catch(reject).then(function (data) {
          if (updateSelf) {
            _this._properties = {};
            _this._baseProperties = data;
          }

          resolve(new _this(_this._api, data));
        });
      });
    }

    /**
     * Creates proxies for the properties
     * @returns {void}
     * @private
     */

  }, {
    key: '_applyProperties',
    value: function _applyProperties() {
      var _this2 = this;

      var protectedFields = ['id', 'created_at', 'updated_at', 'deleted_at'];
      var fields = Object.keys(this._baseProperties);

      var _loop = function _loop(key) {
        var desc = {
          enumerable: true,
          configurable: true,

          get: function get() {
            if (_this2._properties.hasOwnProperty(key)) {
              return _this2._properties[key];
            }

            return _this2._baseProperties[key];
          }
        };

        if (!protectedFields.includes(key)) {
          desc.set = function (val) {
            _this2._properties[key] = ResourceBase._guessType(key, val);
          };
        }

        Object.defineProperty(_this2, (0, _caseConverter.snakeToCamelCase)(key), desc);
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          _loop(key);
        }

        // Add deleted field if possible
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

      if (fields.includes('deleted_at')) {
        Object.defineProperty(this, 'deleted', {
          enumerable: true,
          configurable: true,

          get: function get() {
            return Boolean(_this2.deletedAt);
          }
        });
      }
    }

    /**
     * Guess type based on property name
     * @param {string} name - Field name
     * @param {*} value - Field Value
     * @private
     * @returns {*} - Original or converted value
     * @todo find a reasonable way to cast boolean types
     */

  }, {
    key: 'toString',


    /**
     * String representation of the resource, similar to Python's __repr__
     * @returns {string} - Resource name and id
     */
    value: function toString() {
      return this.constructor.name + '(' + this.id + ')';
    }
  }, {
    key: 'api',
    get: function get() {
      return this._api;
    }

    /**
     * Resource path template
     * @returns {String} - Path template
     */

  }, {
    key: 'resourcePath',
    get: function get() {
      return '/' + this.resourceName + '/{id}';
    }

    /**
     * Resource name
     * @returns {String} - Resource name
     * @abstract
     */

  }, {
    key: 'resourceName',
    get: function get() {
      throw new _AbstractError.AbstractError();
    }
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
      var url = this._api.host + '/' + this._api.version + this.resourcePath;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(this._baseProperties)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;

          url = url.replace('{' + key + '}', this[key]);
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

      return url;
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
      return Object.keys(this._baseProperties).map(_caseConverter.snakeToCamelCase);
    }
  }], [{
    key: '_guessType',
    value: function _guessType(name, value) {
      var regexp = /(?:^|_)([^_$]+)$/g;
      var match = regexp.exec(name);
      var idMacros = ['last', 'me'];

      if (match === null || typeof value !== 'string') {
        return value;
      }

      switch (match[1]) {
        case 'end':
        case 'start':
        case 'at':
          return new Date(value);
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
  }]);

  return ResourceBase;
}();

exports.default = ResourceBase;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reflection = __webpack_require__(10);

var _Trait2 = __webpack_require__(83);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Provides a {@link ResourceBase} with functions for dealing with being ownable by an organisation
 * @mixin
 */
var OwnableResource = function (_Trait) {
  _inherits(OwnableResource, _Trait);

  function OwnableResource() {
    _classCallCheck(this, OwnableResource);

    return _possibleConstructorReturn(this, (OwnableResource.__proto__ || Object.getPrototypeOf(OwnableResource)).apply(this, arguments));
  }

  _createClass(OwnableResource, [{
    key: 'organisations',

    /**
     *
     * @returns {Promise} - Promise will resolve with {@link Array<Organisation>} and reject with an {@link ApiError} instance.
     */
    value: function organisations() {
      // This is a hack to fix a circular dependency issue
      var Organisation = __webpack_require__(50).default;

      return this._listResource(Organisation, this.url + '/organisations');
    }

    /**
     * Sync items to the organisation
     * @param {Array<ResourceBase>} items - List of items to sync
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: 'syncOrganisations',
    value: function syncOrganisations(items) {
      return this._modifyOrganisationLink(items, 'PATCH');
    }

    /**
     * Attach items to the organisation
     * @param {Array<ResourceBase>} items - List of items to attach
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: 'attachOrganisations',
    value: function attachOrganisations(items) {
      return this._modifyOrganisationLink(items, 'POST');
    }

    /**
     * Unlink items from the organisation
     * @param {Array<Organisation>|Array<Number>} items - List of items to unlink
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: 'unlinkOrganisations',
    value: function unlinkOrganisations(items) {
      return this._modifyOrganisationLink(items, 'DELETE');
    }

    /**
     * Sync, attach or unlink resources
     * @param {Array<Organisation>|Array<Number>} items - List of items to sync or attach
     * @param {String} method - Http method to use
     * @returns {Promise} - Promise will resolve with no value and reject with an {@link ApiError} instance.
     * @private
     */

  }, {
    key: '_modifyOrganisationLink',
    value: function _modifyOrganisationLink(items, method) {
      // This is a hack to fix a circular dependency issue
      var Organisation = __webpack_require__(50).default;

      var filter = function filter(x) {
        return !(0, _reflection.isParentOf)(Organisation, x) && !(0, _reflection.isParentOf)(Number, x);
      };
      var isValid = items.filter(filter).length === 0;

      if (!isValid) {
        throw new TypeError('Array must contain either Numbers (organisation id) or Organisations.');
      }

      var keys = items.map(function (x) {
        return typeof x === 'number' ? x : x.id;
      }).map(Number);

      return this.api.request(this.url + '/organisations', method, { keys: keys });
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
}(_Trait2.Trait);

exports.default = OwnableResource;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(35)('meta')
  , isObject = __webpack_require__(4)
  , has      = __webpack_require__(12)
  , setDesc  = __webpack_require__(7).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(3)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(139)
  , enumBugKeys = __webpack_require__(99);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(1)
  , dPs         = __webpack_require__(140)
  , enumBugKeys = __webpack_require__(99)
  , IE_PROTO    = __webpack_require__(98)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(96)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(101).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(139)
  , hiddenKeys = __webpack_require__(99).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(2)
  , dP          = __webpack_require__(7)
  , DESCRIPTORS = __webpack_require__(6)
  , SPECIES     = __webpack_require__(5)('species');

module.exports = function(KEY){
  var C = global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(14);
module.exports = function(target, src, safe){
  for(var key in src)redefine(target, key, src[key], safe);
  return target;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(12)
  , TAG = __webpack_require__(5)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0)
  , defined = __webpack_require__(21)
  , fails   = __webpack_require__(3)
  , spaces  = __webpack_require__(103)
  , space   = '[' + spaces + ']'
  , non     = '\u200b\u0085'
  , ltrim   = RegExp('^' + space + space + '*')
  , rtrim   = RegExp(space + space + '*$');

var exporter = function(KEY, exec, ALIAS){
  var exp   = {};
  var FORCE = fails(function(){
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if(ALIAS)exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE){
  string = String(defined(string));
  if(TYPE & 1)string = string.replace(ltrim, '');
  if(TYPE & 2)string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(5)('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(13)(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(27)
  , call        = __webpack_require__(150)
  , isArrayIter = __webpack_require__(113)
  , anObject    = __webpack_require__(1)
  , toLength    = __webpack_require__(9)
  , getIterFn   = __webpack_require__(115)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Thrown by abstract methods and classes
 */
var AbstractError = exports.AbstractError = function (_Error) {
  _inherits(AbstractError, _Error);

  function AbstractError() {
    _classCallCheck(this, AbstractError);

    return _possibleConstructorReturn(this, (AbstractError.__proto__ || Object.getPrototypeOf(AbstractError)).apply(this, arguments));
  }

  return AbstractError;
}(Error);

/**
 * Thrown upon invocation of an abstract class
 */


var AbstractClassError = exports.AbstractClassError = function (_AbstractError) {
  _inherits(AbstractClassError, _AbstractError);

  function AbstractClassError() {
    _classCallCheck(this, AbstractClassError);

    return _possibleConstructorReturn(this, (AbstractClassError.__proto__ || Object.getPrototypeOf(AbstractClassError)).call(this, 'Can not make an instance of an abstract class'));
  }

  return AbstractClassError;
}(AbstractError);

/**
 * Thrown upon invocation of an abstract method
 */


var AbstractMethodError = exports.AbstractMethodError = function (_AbstractError2) {
  _inherits(AbstractMethodError, _AbstractError2);

  function AbstractMethodError() {
    _classCallCheck(this, AbstractMethodError);

    return _possibleConstructorReturn(this, (AbstractMethodError.__proto__ || Object.getPrototypeOf(AbstractMethodError)).call(this, 'Can not call an abstract method'));
  }

  return AbstractMethodError;
}(AbstractError);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _Color = __webpack_require__(58);

var _Color2 = _interopRequireDefault(_Color);

var _Contract = __webpack_require__(84);

var _Contract2 = _interopRequireDefault(_Contract);

var _DimensionSet = __webpack_require__(60);

var _DimensionSet2 = _interopRequireDefault(_DimensionSet);

var _Feature = __webpack_require__(62);

var _Feature2 = _interopRequireDefault(_Feature);

var _FontFamily = __webpack_require__(63);

var _FontFamily2 = _interopRequireDefault(_FontFamily);

var _JobShare = __webpack_require__(51);

var _JobShare2 = _interopRequireDefault(_JobShare);

var _JobType = __webpack_require__(64);

var _JobType2 = _interopRequireDefault(_JobType);

var _Layer = __webpack_require__(52);

var _Layer2 = _interopRequireDefault(_Layer);

var _MapstyleSet = __webpack_require__(66);

var _MapstyleSet2 = _interopRequireDefault(_MapstyleSet);

var _SvgSet = __webpack_require__(67);

var _SvgSet2 = _interopRequireDefault(_SvgSet);

var _User = __webpack_require__(90);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Organisation = function (_CrudBase) {
  _inherits(Organisation, _CrudBase);

  function Organisation() {
    _classCallCheck(this, Organisation);

    return _possibleConstructorReturn(this, (Organisation.__proto__ || Object.getPrototypeOf(Organisation)).apply(this, arguments));
  }

  _createClass(Organisation, [{
    key: 'sync',

    /**
     * Sync items to the organisation
     * @param {Array<ResourceBase>} items - List of items to sync
     * @returns {Array<Promise>} - Array containing promises for each item type. Each will resolve with an empty {@link Object} and reject with an {@link ApiError} instance.
     */
    value: function sync(items) {
      return this._modifyResourceLink(items, 'PATCH');
    }

    /**
     * Attach items to the organisation
     * @param {Array<ResourceBase>} items - List of items to attach
     * @returns {Array<Promise>} - Array containing promises for each item type Each will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: 'attach',
    value: function attach(items) {
      return this._modifyResourceLink(items, 'POST');
    }

    /**
     * Unlink items from the organisation
     * @param {Array<ResourceBase>} items - List of items to unlink
     * @returns {Array<Promise>} - Array containing promises for each item type Each will resolve with no value and reject with an {@link ApiError} instance.
     */

  }, {
    key: 'unlink',
    value: function unlink(items) {
      return this._modifyResourceLink(items, 'DELETE');
    }

    /**
     * Sync, attach or unlink resources
     * @param {Array<ResourceBase>} items - List of items to sync or attach
     * @param {String} method - Http method to use
     * @returns {Array<Promise>} - Array containing promises for each item type Each will resolve with no value and reject with an {@link ApiError} instance.
     * @private
     */

  }, {
    key: '_modifyResourceLink',
    value: function _modifyResourceLink(items, method) {
      var collections = this._reduceOwnable(items);
      var out = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(collections)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          var url = this.url + '/' + key;
          var data = { keys: collections[key] };
          var promise = this.api.request(url, method, data);

          out.push(promise);
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
     * Reduce the items to a more usable list
     * @param {Array<ResourceBase>} items - List of items to reduce
     * @returns {Object<String, Array<Number>>} - Object keys are resource names and the value is an array containing ids to sync/attach
     * @private
     */

  }, {
    key: '_reduceOwnable',
    value: function _reduceOwnable(items) {
      var out = {};

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var row = _step2.value;

          if (!row.ownable) {
            continue;
          }

          var key = row.resourceName;

          if (!out[key]) {
            out[key] = [row.id];
          } else {
            out[key].push(row.id);
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

      return out;
    }
  }, {
    key: 'fontFamilies',


    // Resource listing
    /**
     * Get the list font families linked to the organisation
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link FontFamily} instances and rejects with {@link ApiError}
     */
    value: function fontFamilies() {
      return this._listResource(_FontFamily2.default);
    }

    /**
     * Get the list dimension sets linked to the organisation
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link DimensionSet} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'dimensionSets',
    value: function dimensionSets() {
      return this._listResource(_DimensionSet2.default);
    }

    /**
     * Get the list mapstyle sets linked to the organisation
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link MapstyleSet} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'mapstyleSets',
    value: function mapstyleSets() {
      return this._listResource(_MapstyleSet2.default);
    }

    /**
     * Get the list svg sets linked to the organisation
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link SvgSet} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'svgSets',
    value: function svgSets() {
      return this._listResource(_SvgSet2.default);
    }

    /**
     * Get the list colors linked to the organisation
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link Color} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'colors',
    value: function colors() {
      return this._listResource(_Color2.default);
    }

    /**
     * Get the list features linked to the organisation
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link Feature} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'features',
    value: function features() {
      return this._listResource(_Feature2.default);
    }

    /**
     * Get the list layers linked to the organisation
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link Layer} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'layers',
    value: function layers() {
      return this._listResource(_Layer2.default);
    }

    /**
     * Get the list job types linked to the organisation
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link JobType} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'jobTypes',
    value: function jobTypes() {
      return this._listResource(_JobType2.default);
    }

    /**
     * Get the list job shares linked to the organisation
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link JobShare} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'jobShares',
    value: function jobShares() {
      return this._listResource(_JobShare2.default);
    }

    /**
     * Get the list users linked to the organisation
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link User} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'users',
    value: function users() {
      return this._listResource(_User2.default);
    }

    /**
     * Get the list contracts linked to the organisation
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link Contract} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'contracts',
    value: function contracts() {
      return this._listResource(_Contract2.default);
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'organisations';
    }
  }]);

  return Organisation;
}(_CrudBase3.default);

exports.default = Organisation;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JobShare = function (_CrudBase) {
  _inherits(JobShare, _CrudBase);

  function JobShare() {
    _classCallCheck(this, JobShare);

    return _possibleConstructorReturn(this, (JobShare.__proto__ || Object.getPrototypeOf(JobShare)).apply(this, arguments));
  }

  _createClass(JobShare, [{
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


exports.default = JobShare;

var JobShareVisibility = function () {
  function JobShareVisibility() {
    _classCallCheck(this, JobShareVisibility);
  }

  _createClass(JobShareVisibility, null, [{
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OwnableResource = __webpack_require__(31);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _CrudBase = __webpack_require__(8);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _ImageHandler = __webpack_require__(125);

var _ImageHandler2 = _interopRequireDefault(_ImageHandler);

var _reflection = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Layer
 * @extends {CrudBase}
 * @extends {OwnableResource}
 */
var Layer = function (_mix) {
  _inherits(Layer, _mix);

  function Layer() {
    _classCallCheck(this, Layer);

    return _possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).apply(this, arguments));
  }

  _createClass(Layer, [{
    key: 'imageHandler',

    /**
     * Handler for item image management
     * @returns {ImageHandler} - Image handler
     */
    get: function get() {
      return new _ImageHandler2.default(this.api, this);
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'layers';
    }
  }]);

  return Layer;
}((0, _reflection.mix)(_CrudBase2.default, _OwnableResource2.default));

exports.default = Layer;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractError = __webpack_require__(49);

var _OAuthToken = __webpack_require__(69);

var _OAuthToken2 = _interopRequireDefault(_OAuthToken);

var _StateContainer = __webpack_require__(134);

var _StateContainer2 = _interopRequireDefault(_StateContainer);

var _node = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * OAuth base class
 * @abstract
 */
var OAuth = function () {
  /**
   * @param {String} clientId - OAuth client id
   * @param {Array<String>} scopes - A list of required scopes
   * @returns {void}
   */
  function OAuth(clientId) {
    var scopes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['*'];

    _classCallCheck(this, OAuth);

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


  _createClass(OAuth, [{
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
     * @returns {void}
     */

  }, {
    key: 'forget',
    value: function forget() {
      if ((0, _node.isNode)()) {
        // eslint-disable-next-line no-eval
        eval('require("fs")').unlink(_OAuthToken2.default.nodeTokenFilename);
      } else {
        _StateContainer2.default.clean();
        localStorage.removeItem(_OAuthToken2.default.storageName);
      }

      this.token = null;
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(20);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(20)
  , TAG = __webpack_require__(5)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Choropleth = __webpack_require__(122);

var _Choropleth2 = _interopRequireDefault(_Choropleth);

var _Color = __webpack_require__(58);

var _Color2 = _interopRequireDefault(_Color);

var _Contract = __webpack_require__(84);

var _Contract2 = _interopRequireDefault(_Contract);

var _Dimension = __webpack_require__(85);

var _Dimension2 = _interopRequireDefault(_Dimension);

var _DimensionSet = __webpack_require__(60);

var _DimensionSet2 = _interopRequireDefault(_DimensionSet);

var _Faq = __webpack_require__(128);

var _Faq2 = _interopRequireDefault(_Faq);

var _Feature = __webpack_require__(62);

var _Feature2 = _interopRequireDefault(_Feature);

var _Font = __webpack_require__(86);

var _Font2 = _interopRequireDefault(_Font);

var _FontFamily = __webpack_require__(63);

var _FontFamily2 = _interopRequireDefault(_FontFamily);

var _Highlight = __webpack_require__(129);

var _Highlight2 = _interopRequireDefault(_Highlight);

var _InsetMap = __webpack_require__(130);

var _InsetMap2 = _interopRequireDefault(_InsetMap);

var _Job = __webpack_require__(91);

var _Job2 = _interopRequireDefault(_Job);

var _JobShare = __webpack_require__(51);

var _JobShare2 = _interopRequireDefault(_JobShare);

var _JobType = __webpack_require__(64);

var _JobType2 = _interopRequireDefault(_JobType);

var _Language = __webpack_require__(93);

var _Language2 = _interopRequireDefault(_Language);

var _Layer = __webpack_require__(52);

var _Layer2 = _interopRequireDefault(_Layer);

var _Mapstyle = __webpack_require__(88);

var _Mapstyle2 = _interopRequireDefault(_Mapstyle);

var _MapstyleSet = __webpack_require__(66);

var _MapstyleSet2 = _interopRequireDefault(_MapstyleSet);

var _Notification = __webpack_require__(94);

var _Notification2 = _interopRequireDefault(_Notification);

var _Organisation = __webpack_require__(50);

var _Organisation2 = _interopRequireDefault(_Organisation);

var _Permission = __webpack_require__(95);

var _Permission2 = _interopRequireDefault(_Permission);

var _PlaceName = __webpack_require__(131);

var _PlaceName2 = _interopRequireDefault(_PlaceName);

var _Svg = __webpack_require__(89);

var _Svg2 = _interopRequireDefault(_Svg);

var _SvgSet = __webpack_require__(67);

var _SvgSet2 = _interopRequireDefault(_SvgSet);

var _SvgSetType = __webpack_require__(132);

var _SvgSetType2 = _interopRequireDefault(_SvgSetType);

var _User = __webpack_require__(90);

var _User2 = _interopRequireDefault(_User);

var _ApiError = __webpack_require__(65);

var _ApiError2 = _interopRequireDefault(_ApiError);

var _ValidationError = __webpack_require__(87);

var _ValidationError2 = _interopRequireDefault(_ValidationError);

var _DummyFlow = __webpack_require__(133);

var _DummyFlow2 = _interopRequireDefault(_DummyFlow);

var _OAuth = __webpack_require__(53);

var _OAuth2 = _interopRequireDefault(_OAuth);

var _ResourceCache = __webpack_require__(124);

var _ResourceCache2 = _interopRequireDefault(_ResourceCache);

var _ResourceProxy = __webpack_require__(126);

var _ResourceProxy2 = _interopRequireDefault(_ResourceProxy);

var _reflection = __webpack_require__(10);

var _requests = __webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Polyfill for terrible browsers (looking at you IE)
if (!global._babelPolyfill) {
  __webpack_require__(174);
}

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

    _classCallCheck(this, Maps4News);

    this.auth = auth;
    this.host = host;

    this.defaults = {
      perPage: Number("12"),
      cacheEnabled: "true".toLowerCase() === 'true',
      cacheSeconds: Number("1800"),
      shareCache: "true".toLowerCase() === 'true'
    };

    this._cache = new _ResourceCache2.default(this);
  }

  /**
   * Get api version
   * @returns {string} - Api version
   * @constant
   */


  _createClass(Maps4News, [{
    key: 'authenticate',


    /**
     * Authenticate with the api using the authentication method provided.
     * @returns {Promise} - Resolves with {@link Maps4News} instance and rejects with {@link OAuthError}
     */
    value: function authenticate() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this._auth.authenticate().then(function () {
          _this._auth.token.save();

          resolve(_this);
        }).catch(reject);
      });
    }

    /**
     * Request an url using the API token (if available)
     * @param {string} url - Relative or absolute url, api version will be prepended to relative urls
     * @param {string} method - Http method
     * @param {string|object} data - Raw string or object. If an object is passed it will be encoded
     *                               and the content-type will be set to `application/json`
     * @param {object} headers - Any headers that should be set for the request
     * @param {string} responseType - The XmlHttpRequest type
     * @param {boolean} raw - When set to true the promise will resolve with the request object
     * @returns {Promise} - Resolves with either an object or the raw data by checking the `Content-Type` header and rejects with {@link ApiError}
     */

  }, {
    key: 'request',
    value: function request(url) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var responseType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var raw = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      if (!url.startsWith('http')) {
        // Removes '/' at the start of the string (if any)
        url = url.replace(/(^\/+)/, function () {
          return '';
        });
        url = this._host + '/' + this.version + '/' + url;
      }

      if (this.authenticated) {
        headers.Authorization = this._auth.token.toString();
      }

      return new Promise(function (resolve, reject) {
        (0, _requests.makeRequest)(url, method, data, headers, responseType).then(function (request) {
          if (request.getResponseHeader('Content-Type') !== 'application/json') {
            resolve(raw ? request : request.response);
          } else {
            var response = JSON.parse(request.responseText);

            if (!response.success) {
              var err = response.error;

              if (!err.validation_errors) {
                reject(new _ApiError2.default(err.type, err.message, request.status));
              } else {
                reject(new _ValidationError2.default(err.type, err.message, request.status, err.validation_errors));
              }
            } else {
              // Return an empty object if no data has been sent
              // instead of returning undefined.
              resolve(raw ? request : response.data || {});
            }
          }
        }).catch(function (request) {
          var err = JSON.parse(request.responseText).error;

          reject(new _ApiError2.default(err.type, err.message, request.status));
        });
      });
    }

    /**
     * Choropleth accessor
     * @see {@link Choropleth}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'testXhr',


    /**
     * Test if XHR requests can be made
     * @returns {Promise} - resolves/rejects with the HTTP response status code. Rejects if status code != 2xx
     */
    value: function testXhr() {
      var _this2 = this;

      return new Promise(function (reject, resolve) {
        (0, _requests.makeRequest)(_this2.host + '/favicon.ico').then(function (x) {
          return resolve(x.status);
        }).catch(function (x) {
          return reject(x.status);
        });
      });
    }

    /**
     * Forget the current session
     * This will clean up any stored OAuth states stored using {@link StateContainer} and any OAuth tokens stored in
     * cookies or localStorage.
     * @returns {void}
     */

  }, {
    key: 'logout',
    value: function logout() {
      this.auth.forget();
    }
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
     * Set authentication provider instance
     * @param {OAuth} value -- OAuth instance
     */
    ,
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
    key: 'authenticated',
    get: function get() {
      return this._auth.authenticated;
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
      this._auth.host = value;
    }
  }, {
    key: 'choropleths',
    get: function get() {
      return new _ResourceProxy2.default(this, _Choropleth2.default);
    }

    /**
     * Color accessor
     * @see {@link Color}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'colors',
    get: function get() {
      return new _ResourceProxy2.default(this, _Color2.default);
    }

    /**
     * Contract accessor
     * @see {@link Contract}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'contracts',
    get: function get() {
      return new _ResourceProxy2.default(this, _Contract2.default);
    }

    /**
     * Dimension accessor
     * @see {@link Dimension}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'dimensions',
    get: function get() {
      return new _ResourceProxy2.default(this, _Dimension2.default);
    }

    /**
     * Dimension set accessor
     * @see {@link DimensionSet}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'dimensionSets',
    get: function get() {
      return new _ResourceProxy2.default(this, _DimensionSet2.default);
    }

    /**
     * Faq accessor
     * @see {@link Faq}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'faqs',
    get: function get() {
      return new _ResourceProxy2.default(this, _Faq2.default);
    }

    /**
     * Feature accessor
     * @see {@link Feature}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'features',
    get: function get() {
      return new _ResourceProxy2.default(this, _Feature2.default);
    }

    /**
     * Font accessor
     * @see {@link Font}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'fonts',
    get: function get() {
      return new _ResourceProxy2.default(this, _Font2.default);
    }

    /**
     * FontFamily accessor
     * @see {@link FontFamily}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'fontFamilies',
    get: function get() {
      return new _ResourceProxy2.default(this, _FontFamily2.default);
    }

    /**
     * Highlight accessor
     * @see {@link Highlight}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'highlights',
    get: function get() {
      return new _ResourceProxy2.default(this, _Highlight2.default);
    }

    /**
     * InsetMap accessor
     * @see {@link InsetMap}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'insetMaps',
    get: function get() {
      return new _ResourceProxy2.default(this, _InsetMap2.default);
    }

    /**
     * Job accessor
     * @see {@link Job}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'jobs',
    get: function get() {
      return new _ResourceProxy2.default(this, _Job2.default);
    }

    /**
     * JobShare accessor
     * @see {@link JobShare}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'jobShares',
    get: function get() {
      return new _ResourceProxy2.default(this, _JobShare2.default);
    }

    /**
     * JobType accessor
     * @see {@link JobType}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'jobTypes',
    get: function get() {
      return new _ResourceProxy2.default(this, _JobType2.default);
    }

    /**
     * Language accessor
     * @see {@link Language}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'languages',
    get: function get() {
      return new _ResourceProxy2.default(this, _Language2.default);
    }

    /**
     * Layer accessor
     * @see {@link Layer}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'layers',
    get: function get() {
      return new _ResourceProxy2.default(this, _Layer2.default);
    }

    /**
     * Mapstyle accessor
     * @see {@link Mapstyle}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'mapstyles',
    get: function get() {
      return new _ResourceProxy2.default(this, _Mapstyle2.default);
    }

    /**
     * MapstyleSet accessor
     * @see {@link MapstyleSet}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'mapstyleSets',
    get: function get() {
      return new _ResourceProxy2.default(this, _MapstyleSet2.default);
    }

    /**
     * Notification accessor
     * @see {@link Notification}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'notifications',
    get: function get() {
      return new _ResourceProxy2.default(this, _Notification2.default);
    }

    /**
     * Organisation accessor
     * @see {@link Organisation}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'organisations',
    get: function get() {
      return new _ResourceProxy2.default(this, _Organisation2.default);
    }

    /**
     * Permission accessor
     * @see {@link Permission}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'permissions',
    get: function get() {
      return new _ResourceProxy2.default(this, _Permission2.default);
    }

    /**
     * PlaceName accessor
     * @see {@link PlaceName}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'placeNames',
    get: function get() {
      return new _ResourceProxy2.default(this, _PlaceName2.default);
    }

    /**
     * Svg accessor
     * @see {@link Svg}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'svgs',
    get: function get() {
      return new _ResourceProxy2.default(this, _Svg2.default);
    }

    /**
     * SvgSet accessor
     * @see {@link SvgSet}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'svgSets',
    get: function get() {
      return new _ResourceProxy2.default(this, _SvgSet2.default);
    }

    /**
     * SvgSetType accessor
     * @see {@link SvgSetType}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'svgSetTypes',
    get: function get() {
      return new _ResourceProxy2.default(this, _SvgSetType2.default);
    }

    /**
     * User accessor
     * @see {@link User}
     * @returns {ResourceProxy} - A proxy for accessing the resource
     */

  }, {
    key: 'users',
    get: function get() {
      return new _ResourceProxy2.default(this, _User2.default);
    }
  }]);

  return Maps4News;
}();

exports.default = Maps4News;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(82)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase = __webpack_require__(8);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _OwnableResource = __webpack_require__(31);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Color resource
 * @extends {CrudBase}
 * @extends {OwnableResource}
 */
var Color = function (_mix) {
  _inherits(Color, _mix);

  function Color() {
    _classCallCheck(this, Color);

    return _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).apply(this, arguments));
  }

  _createClass(Color, [{
    key: 'resourceName',
    get: function get() {
      return 'colors';
    }
  }]);

  return Color;
}((0, _reflection.mix)(_CrudBase2.default, _OwnableResource2.default));

exports.default = Color;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.makeRequest = makeRequest;
exports.encodeQueryString = encodeQueryString;
/**
 * Makes a HTTP request and returns a promise. Promise will fail/reject if the
 * status code isn't 2XX.
 * @param {string} url - Target url
 * @param {string} method - HTTP method
 * @param {string|object<string, string>} body - raw body content or object to be json encoded
 * @param {object<string, string>} headers - headers
 * @param {string} responseType - XMLHttpRequest response type
 *
 * @returns {Promise} - resolves/rejects with {@link XMLHttpRequest} object. Rejects if status code != 2xx
 * @protected
 */
function makeRequest(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var responseType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

  return new Promise(function (resolve, reject) {
    method = method.toUpperCase();

    var request = new XMLHttpRequest();

    request.responseType = responseType;

    function hasHeader(h) {
      return Object.keys(headers).filter(function (x) {
        return x.toLowerCase() === h.toLowerCase();
      }).length > 0;
    }

    request.open(method, url, true);

    // Automatically detect possible content-type header
    if ((typeof body === 'undefined' ? 'undefined' : _typeof(body)) === 'object') {
      body = JSON.stringify(body);

      if (!hasHeader('Content-Type')) {
        headers['Content-Type'] = 'application/json';
      }
    } else if (body && !hasHeader('Content-Type')) {
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if (!hasHeader('Accept')) {
      headers['Accept'] = 'application/json';
    }

    // Apply headers
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.keys(headers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        request.setRequestHeader(key, headers[key]);
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

    request.onreadystatechange = function () {
      // State 4 === Done
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status >= 200 && request.status < 300) {
          resolve(request);
        } else {
          reject(request);
        }
      }
    };

    if (body && method !== 'GET') {
      request.send(body);
    } else {
      request.send();
    }
  });
}

/**
 * Encodes an object to a http query string with support for recursion
 * @param {object<string, *>} paramsObject - data to be encoded
 * @returns {string} - encoded http query string
 *
 * @protected
 */
function encodeQueryString(paramsObject) {
  return _encodeQueryString(paramsObject);
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

    if (_typeof(paramsObject[key]) === 'object') {
      prefix.push(key);

      return _encodeQueryString(paramsObject[key], prefix);
    }

    prefix.push(key);

    var out = '';

    out += encodeURIComponent(prefix.shift()); // main key
    out += prefix.map(function (item) {
      return '[' + encodeURIComponent(item) + ']';
    }).join(''); // optional array keys
    out += '=' + encodeURIComponent(paramsObject[key]); // value

    return out;
  }).join('&');
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudSetBase = __webpack_require__(61);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _Dimension = __webpack_require__(85);

var _Dimension2 = _interopRequireDefault(_Dimension);

var _OwnableResource = __webpack_require__(31);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Dimension sets
 * @extends {CrudSetBase}
 * @extends {OwnableResource}
 */
var DimensionSet = function (_mix) {
  _inherits(DimensionSet, _mix);

  function DimensionSet() {
    _classCallCheck(this, DimensionSet);

    return _possibleConstructorReturn(this, (DimensionSet.__proto__ || Object.getPrototypeOf(DimensionSet)).apply(this, arguments));
  }

  _createClass(DimensionSet, [{
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _AbstractError = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Crud base for resource sets
 * @abstract
 */
var CrudSetBase = function (_CrudBase) {
  _inherits(CrudSetBase, _CrudBase);

  function CrudSetBase() {
    _classCallCheck(this, CrudSetBase);

    return _possibleConstructorReturn(this, (CrudSetBase.__proto__ || Object.getPrototypeOf(CrudSetBase)).apply(this, arguments));
  }

  _createClass(CrudSetBase, [{
    key: 'items',


    /**
     * Get items associated with the set
     * @returns {Promise} - Resolves with {@link Dimension} instance and rejects with {@link ApiError}
     */
    value: function items() {
      var _this2 = this;

      var url = this.url + '/items';

      return new Promise(function (resolve, reject) {
        _this2.api.request(url).catch(reject).then(function (data) {
          return resolve(data.map(function (row) {
            return new _this2._Child(_this2.api, row);
          }));
        });
      });
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
  }]);

  return CrudSetBase;
}(_CrudBase3.default);

exports.default = CrudSetBase;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase = __webpack_require__(8);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _OwnableResource = __webpack_require__(31);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Feature
 * @extends {CrudSetBase}
 * @extends {OwnableResource}
 */
var Feature = function (_mix) {
  _inherits(Feature, _mix);

  function Feature() {
    _classCallCheck(this, Feature);

    return _possibleConstructorReturn(this, (Feature.__proto__ || Object.getPrototypeOf(Feature)).apply(this, arguments));
  }

  _createClass(Feature, [{
    key: 'resourceName',
    get: function get() {
      return 'features';
    }
  }]);

  return Feature;
}((0, _reflection.mix)(_CrudBase2.default, _OwnableResource2.default));

exports.default = Feature;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OwnableResource = __webpack_require__(31);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(10);

var _CrudSetBase = __webpack_require__(61);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _Font = __webpack_require__(86);

var _Font2 = _interopRequireDefault(_Font);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Font family
 * @extends {CrudSetBase}
 * @extends {OwnableResource}
 */
var FontFamily = function (_mix) {
  _inherits(FontFamily, _mix);

  function FontFamily() {
    _classCallCheck(this, FontFamily);

    return _possibleConstructorReturn(this, (FontFamily.__proto__ || Object.getPrototypeOf(FontFamily)).apply(this, arguments));
  }

  _createClass(FontFamily, [{
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase = __webpack_require__(8);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _OwnableResource = __webpack_require__(31);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Job type
 * @extends {CrudBase}
 * @extends {OwnableResource}
 */
var JobType = function (_mix) {
  _inherits(JobType, _mix);

  function JobType() {
    _classCallCheck(this, JobType);

    return _possibleConstructorReturn(this, (JobType.__proto__ || Object.getPrototypeOf(JobType)).apply(this, arguments));
  }

  _createClass(JobType, [{
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
}((0, _reflection.mix)(_CrudBase2.default, _OwnableResource2.default));

exports.default = JobType;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Errors generated by the API
 */
var ApiError = function () {
  /**
   * @param {String} type - Error type
   * @param {String} message - Error message
   * @param {Number} code - Http error code
   */
  function ApiError(type, message, code) {
    _classCallCheck(this, ApiError);

    this._type = type;
    this._message = message;
    this._code = code;
  }

  /**
   * Error type
   * @returns {String} - Error type
   */


  _createClass(ApiError, [{
    key: "toString",


    /**
     * Display-able string
     * @returns {string} - Displayable error string
     */
    value: function toString() {
      return "[" + this._code + "] " + this._type + ": " + this._message;
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
  }]);

  return ApiError;
}();

exports.default = ApiError;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OwnableResource = __webpack_require__(31);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _reflection = __webpack_require__(10);

var _CrudSetBase = __webpack_require__(61);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _Mapstyle = __webpack_require__(88);

var _Mapstyle2 = _interopRequireDefault(_Mapstyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mapstyle set
 * @extends {CrudSetBase}
 * @extends {OwnableResource}
 */
var MapstyleSet = function (_mix) {
  _inherits(MapstyleSet, _mix);

  function MapstyleSet() {
    _classCallCheck(this, MapstyleSet);

    return _possibleConstructorReturn(this, (MapstyleSet.__proto__ || Object.getPrototypeOf(MapstyleSet)).apply(this, arguments));
  }

  _createClass(MapstyleSet, [{
    key: 'resourcePath',
    get: function get() {
      return '/mapstyles/sets/{id}';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'mapstyle-set';
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OwnableResource = __webpack_require__(31);

var _OwnableResource2 = _interopRequireDefault(_OwnableResource);

var _CrudSetBase = __webpack_require__(61);

var _CrudSetBase2 = _interopRequireDefault(_CrudSetBase);

var _Svg = __webpack_require__(89);

var _Svg2 = _interopRequireDefault(_Svg);

var _reflection = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Svg set
 * @extends {CrudSetBase}
 * @extends {OwnableResource}
 */
var SvgSet = function (_mix) {
  _inherits(SvgSet, _mix);

  function SvgSet() {
    _classCallCheck(this, SvgSet);

    return _possibleConstructorReturn(this, (SvgSet.__proto__ || Object.getPrototypeOf(SvgSet)).apply(this, arguments));
  }

  _createClass(SvgSet, [{
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * OAuth error
 */
var OAuthError = function (_Error) {
  _inherits(OAuthError, _Error);

  /**
   * OAuth error response
   * @param {String} error - OAuth error key
   * @param {String} message - OAuth error message
   */
  function OAuthError(error) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, OAuthError);

    var _this = _possibleConstructorReturn(this, (OAuthError.__proto__ || Object.getPrototypeOf(OAuthError)).call(this));

    _this._error = String(error);
    _this._message = String(message);
    return _this;
  }

  /**
   * OAuth error message
   * @returns {String} - message
   */


  _createClass(OAuthError, [{
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeError = __webpack_require__(172);

var _NodeError2 = _interopRequireDefault(_NodeError);

var _node = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Oauth token container
 */
var OAuthToken = function () {
  /**
   * @param {String} token - OAuth token
   * @param {String} type - token type
   * @param {Date|Number} expires - expire time in seconds or Date
   * @param {Array<string>} scopes - Any scopes
   */
  function OAuthToken(token, type, expires) {
    var scopes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    _classCallCheck(this, OAuthToken);

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


  _createClass(OAuthToken, [{
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
     * If the token has expired
     * @returns {Boolean} - expired
     */

  }, {
    key: 'save',


    /**
     * Store the token for later recovery. Token will be stored in HTTPS cookie if possible.
     * @param {String} name - db key name
     * @param {Boolean} forceLocalStorage - force the token to be stored in the localStorage
     * @returns {void}
     * @see OAuthToken#recover
     */
    value: function save() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : OAuthToken._defaultName;
      var forceLocalStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var data = {
        token: this.token,
        type: this.type,
        expires: this.expires.toUTCString()
      };

      if ((0, _node.isNode)()) {
        if (forceLocalStorage) {
          throw new _NodeError2.default('Can not force localStorage usage when running under node');
        }

        // We're using eval to require fs to make sure that it isn't added to the bundle
        // eslint-disable-next-line no-eval
        var fs = eval('require("fs")');
        var json = JSON.stringify(data, null, 2);

        fs.writeFileSync(name, json);
      } else if (window.location.protocol === 'https:' && !forceLocalStorage) {
        var dataEncoded = encodeURIComponent(JSON.stringify(data));

        document.cookie = name + '=' + dataEncoded + '; expires=' + data.expires;
      } else {
        localStorage.setItem(name, JSON.stringify(data));
      }
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

      return new OAuthToken(data['access_token'], data['token_type'], Number(data['expires_in']), data['scope'] || []);
    }
  }, {
    key: 'recover',
    value: function recover() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : OAuthToken._defaultName;

      if ((0, _node.isNode)()) {
        // We're using eval to require fs to make sure that it isn't added to the bundle
        // eslint-disable-next-line no-eval
        var fs = eval('require("fs")');

        if (fs.existsSync(name)) {
          var _raw = fs.readFileSync(name);
          var data = JSON.parse(_raw);

          return new OAuthToken(data.token, data.type, new Date(data.expires));
        } else {
          return null;
        }
      }

      // Cookie
      if (window.location.protocol === 'https:') {
        var cookies = '; ' + document.cookie;
        var parts = cookies.split('; ' + name + '=');

        if (parts.length === 2) {
          var _raw2 = decodeURIComponent(parts[1].split(';')[0]);
          var _data = JSON.parse(_raw2);

          return new OAuthToken(_data.token, _data.type, new Date(_data.expires));
        }
      }

      // LocalStorage
      var raw = localStorage.getItem(name);

      if (raw) {
        var _data2 = JSON.parse(raw);

        var instance = new OAuthToken(_data2.token, _data2.type, new Date(_data2.expires));

        if (!instance.expired) {
          return instance;
        }
      }

      return null;
    }
  }, {
    key: 'storageName',
    get: function get() {
      return 'm4n_api_token';
    }

    /**
     * Filename for nodejs token storage
     * @returns {string} - filename
     * @constant
     */

  }, {
    key: 'nodeTokenFilename',
    get: function get() {
      return '.m4n_token';
    }

    /**
     * Gets the default name for the name parameter on save and restore
     * @returns {string} - name
     * @private
     * @static
     */

  }, {
    key: '_defaultName',
    get: function get() {
      return (0, _node.isNode)() ? OAuthToken.nodeTokenFilename : OAuthToken.storageName;
    }
  }]);

  return OAuthToken;
}();

exports.default = OAuthToken;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNode = isNode;
/**
 * Test if the application is running under nodejs
 * @returns {boolean} - Is the application running under node?
 * @see https://nodejs.org
 * @private
 */
function isNode() {
  return typeof window === 'undefined' && typeof module !== 'undefined' && module.exports;
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16)
  , toLength  = __webpack_require__(9)
  , toIndex   = __webpack_require__(38);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
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
  } return              fn.apply(that, args);
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(4)
  , cof      = __webpack_require__(20)
  , MATCH    = __webpack_require__(5)('match');
module.exports = function(it){
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(5)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(1);
module.exports = function(){
  var that   = anObject(this)
    , result = '';
  if(that.global)     result += 'g';
  if(that.ignoreCase) result += 'i';
  if(that.multiline)  result += 'm';
  if(that.unicode)    result += 'u';
  if(that.sticky)     result += 'y';
  return result;
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide     = __webpack_require__(13)
  , redefine = __webpack_require__(14)
  , fails    = __webpack_require__(3)
  , defined  = __webpack_require__(21)
  , wks      = __webpack_require__(5);

module.exports = function(KEY, length, exec){
  var SYMBOL   = wks(KEY)
    , fns      = exec(defined, SYMBOL, ''[KEY])
    , strfn    = fns[0]
    , rxfn     = fns[1];
  if(fails(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return rxfn.call(string, this); }
    );
  }
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global            = __webpack_require__(2)
  , $export           = __webpack_require__(0)
  , redefine          = __webpack_require__(14)
  , redefineAll       = __webpack_require__(43)
  , meta              = __webpack_require__(33)
  , forOf             = __webpack_require__(48)
  , anInstance        = __webpack_require__(42)
  , isObject          = __webpack_require__(4)
  , fails             = __webpack_require__(3)
  , $iterDetect       = __webpack_require__(76)
  , setToStringTag    = __webpack_require__(44)
  , inheritIfRequired = __webpack_require__(104);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a){
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO = !IS_WEAK && fails(function(){
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C()
          , index     = 5;
        while(index--)$instance[ADDER](index, index);
        return !$instance.has(-0);
      });
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base, target, C);
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , hide   = __webpack_require__(13)
  , uid    = __webpack_require__(35)
  , TYPED  = uid('typed_array')
  , VIEW   = uid('view')
  , ABV    = !!(global.ArrayBuffer && global.DataView)
  , CONSTR = ABV
  , i = 0, l = 9, Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while(i < l){
  if(Typed = global[TypedArrayConstructors[i++]]){
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV:    ABV,
  CONSTR: CONSTR,
  TYPED:  TYPED,
  VIEW:   VIEW
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(36)|| !__webpack_require__(3)(function(){
  var K = Math.random();
  // In FF throws only define methods
  __defineSetter__.call(null, K, function(){ /* empty */});
  delete __webpack_require__(2)[K];
});

/***/ }),
/* 82 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Trait interface
 * @interface
 */
var Trait = exports.Trait = function Trait() {
  _classCallCheck(this, Trait);
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Contract resource
 */
var Contract = function (_CrudBase) {
  _inherits(Contract, _CrudBase);

  function Contract() {
    _classCallCheck(this, Contract);

    return _possibleConstructorReturn(this, (Contract.__proto__ || Object.getPrototypeOf(Contract)).apply(this, arguments));
  }

  _createClass(Contract, [{
    key: 'resourceName',
    get: function get() {
      return 'contracts';
    }
  }]);

  return Contract;
}(_CrudBase3.default);

exports.default = Contract;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Dimension resource
 */
var Dimension = function (_CrudBase) {
  _inherits(Dimension, _CrudBase);

  function Dimension() {
    _classCallCheck(this, Dimension);

    return _possibleConstructorReturn(this, (Dimension.__proto__ || Object.getPrototypeOf(Dimension)).apply(this, arguments));
  }

  _createClass(Dimension, [{
    key: 'resourceName',
    get: function get() {
      return 'dimensions';
    }
  }]);

  return Dimension;
}(_CrudBase3.default);

exports.default = Dimension;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Font = function (_CrudBase) {
  _inherits(Font, _CrudBase);

  function Font() {
    _classCallCheck(this, Font);

    return _possibleConstructorReturn(this, (Font.__proto__ || Object.getPrototypeOf(Font)).apply(this, arguments));
  }

  _createClass(Font, [{
    key: 'resourceName',
    get: function get() {
      return 'fonts';
    }
  }]);

  return Font;
}(_CrudBase3.default);

exports.default = Font;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiError2 = __webpack_require__(65);

var _ApiError3 = _interopRequireDefault(_ApiError2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Extension of {@link ApiError} containing an extra field for validation errors
 */
var ValidationError = function (_ApiError) {
  _inherits(ValidationError, _ApiError);

  /**
   * @param {String} type - Error type
   * @param {String} message - Error message
   * @param {Number} code - Http error code
   * @param {Object<String, Array<String>>} validationErrors - Any validation errors
   */
  function ValidationError(type, message, code, validationErrors) {
    _classCallCheck(this, ValidationError);

    var _this = _possibleConstructorReturn(this, (ValidationError.__proto__ || Object.getPrototypeOf(ValidationError)).call(this, type, message, code));

    _this._validationErrors = validationErrors;
    return _this;
  }

  /**
   * Any validation errors
   * @returns {Object.<String, Array.<String>>} - Object containing arrays of validation errors where the field is stored in the key
   */


  _createClass(ValidationError, [{
    key: 'validationErrors',
    get: function get() {
      return this._validationErrors;
    }
  }]);

  return ValidationError;
}(_ApiError3.default);

exports.default = ValidationError;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase = __webpack_require__(8);

var _CrudBase2 = _interopRequireDefault(_CrudBase);

var _HandlesImages = __webpack_require__(170);

var _HandlesImages2 = _interopRequireDefault(_HandlesImages);

var _reflection = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @extends {CrudBase}
 * @extends {HandlesImages}
 */
var Mapstyle = function (_mix) {
  _inherits(Mapstyle, _mix);

  function Mapstyle() {
    _classCallCheck(this, Mapstyle);

    return _possibleConstructorReturn(this, (Mapstyle.__proto__ || Object.getPrototypeOf(Mapstyle)).apply(this, arguments));
  }

  _createClass(Mapstyle, [{
    key: 'resourceName',
    get: function get() {
      return 'mapstyles';
    }
  }]);

  return Mapstyle;
}((0, _reflection.mix)(_CrudBase2.default, _HandlesImages2.default));

exports.default = Mapstyle;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Svg = function (_CrudBase) {
  _inherits(Svg, _CrudBase);

  function Svg() {
    _classCallCheck(this, Svg);

    return _possibleConstructorReturn(this, (Svg.__proto__ || Object.getPrototypeOf(Svg)).apply(this, arguments));
  }

  _createClass(Svg, [{
    key: 'resourceName',
    get: function get() {
      return 'svgs';
    }
  }]);

  return Svg;
}(_CrudBase3.default);

exports.default = Svg;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ResourceProxy = __webpack_require__(126);

var _ResourceProxy2 = _interopRequireDefault(_ResourceProxy);

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _Color = __webpack_require__(58);

var _Color2 = _interopRequireDefault(_Color);

var _DimensionSet = __webpack_require__(60);

var _DimensionSet2 = _interopRequireDefault(_DimensionSet);

var _Feature = __webpack_require__(62);

var _Feature2 = _interopRequireDefault(_Feature);

var _FontFamily = __webpack_require__(63);

var _FontFamily2 = _interopRequireDefault(_FontFamily);

var _Job = __webpack_require__(91);

var _Job2 = _interopRequireDefault(_Job);

var _JobShare = __webpack_require__(51);

var _JobShare2 = _interopRequireDefault(_JobShare);

var _JobType = __webpack_require__(64);

var _JobType2 = _interopRequireDefault(_JobType);

var _Language = __webpack_require__(93);

var _Language2 = _interopRequireDefault(_Language);

var _Layer = __webpack_require__(52);

var _Layer2 = _interopRequireDefault(_Layer);

var _MapstyleSet = __webpack_require__(66);

var _MapstyleSet2 = _interopRequireDefault(_MapstyleSet);

var _Notification = __webpack_require__(94);

var _Notification2 = _interopRequireDefault(_Notification);

var _Organisation = __webpack_require__(50);

var _Organisation2 = _interopRequireDefault(_Organisation);

var _Permission = __webpack_require__(95);

var _Permission2 = _interopRequireDefault(_Permission);

var _SvgSet = __webpack_require__(67);

var _SvgSet2 = _interopRequireDefault(_SvgSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_CrudBase) {
  _inherits(User, _CrudBase);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'isAdmin',


    /**
     * Check if user is an administrator
     * @returns {Promise} - Resolves with a {@link Boolean} and rejects with {@link ApiError}
     */
    value: function isAdmin() {
      return this.permissions().then(function (permissions) {
        return Boolean(permissions.find(function (p) {
          return p.name === 'is:admin';
        }));
      });
    }

    /**
     * Get all known ips
     * @returns {Promise} - Resolves with {@link array<string>} instance and rejects with {@link ApiError}
     */

  }, {
    key: 'ips',
    value: function ips() {
      var _this2 = this;

      var url = this.url + '/ips';

      return new Promise(function (resolve, reject) {
        _this2.api.request(url).catch(reject).then(function (data) {
          return resolve(data.map(function (row) {
            return row['ip_address'];
          }));
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
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link Notification} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'notifications',
    value: function notifications() {
      return this._listResource(_Notification2.default);
    }

    /**
     * Get the list mapstyle sets linked to the user
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link MapstyleSet} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'mapstyleSets',
    value: function mapstyleSets() {
      return this._listResource(_MapstyleSet2.default);
    }

    /**
     * Get the list dimension sets linked to the user
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link DimensionSet} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'dimensionSets',
    value: function dimensionSets() {
      return this._listResource(_DimensionSet2.default);
    }

    /**
     * Get the list font families linked to the user
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link FontFamily} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'fontFamilies',
    value: function fontFamilies() {
      return this._listResource(_FontFamily2.default);
    }

    /**
     * Get the list svg sets linked to the user
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link SvgSet} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'svgSets',
    value: function svgSets() {
      return this._listResource(_SvgSet2.default);
    }

    /**
     * Get the list colors linked to the user
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link Color} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'colors',
    value: function colors() {
      return this._listResource(_Color2.default);
    }

    /**
     * Get the list jobs linked to the user
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link Job} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'jobs',
    value: function jobs() {
      return this._listResource(_Job2.default);
    }

    /**
     * Get the list features linked to the user
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link Feature} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'features',
    value: function features() {
      return this._listResource(_Feature2.default);
    }

    /**
     * Get the list layers linked to the user
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link Layer} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'layers',
    value: function layers() {
      return this._listResource(_Layer2.default);
    }

    /**
     * Get the list job types linked to the user
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link JobType} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'jobTypes',
    value: function jobTypes() {
      return this._listResource(_JobType2.default);
    }

    /**
     * Get the list job shares linked to the user
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link JobShare} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'jobShares',
    value: function jobShares() {
      return this._listResource(_JobShare2.default);
    }

    /**
     * Get the list job shares linked to the user
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link Permission} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'permissions',
    value: function permissions() {
      return this._listResource(_Permission2.default);
    }

    // endregion

  }, {
    key: 'resourceName',
    get: function get() {
      return 'users';
    }
  }]);

  return User;
}(_CrudBase3.default);

exports.default = User;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _JobResult = __webpack_require__(92);

var _JobResult2 = _interopRequireDefault(_JobResult);

var _JobRevision = __webpack_require__(127);

var _JobRevision2 = _interopRequireDefault(_JobRevision);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Job = function (_CrudBase) {
  _inherits(Job, _CrudBase);

  function Job() {
    _classCallCheck(this, Job);

    return _possibleConstructorReturn(this, (Job.__proto__ || Object.getPrototypeOf(Job)).apply(this, arguments));
  }

  _createClass(Job, [{
    key: 'results',

    /**
     * Get the list of associated job results
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link JobResult} instances and rejects with {@link ApiError}
     */
    value: function results() {
      return this._listResource(_JobResult2.default, this.url + '/results');
    }

    /**
     * Get the list job revisions
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link JobRevision} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'revisions',
    value: function revisions() {
      return this._listResource(_JobRevision2.default, this.url + '/revisions');
    }

    /**
     * Get revision by id
     * @param {string} id - Revision id
     * @returns {Promise} -  Resolves with {@link JobRevision} instance and rejects with {@link ApiError}
     */

  }, {
    key: 'getRevision',
    value: function getRevision() {
      var _this2 = this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'last';

      return new Promise(function (resolve, reject) {
        _this2._api.request(_this2.resourcePath + '/revisions/' + id).catch(reject).then(function (data) {
          return resolve(new _JobRevision2.default(_this2._api, data));
        });
      });
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'jobs';
    }

    /**
     * Get the most up to date preview url
     * @returns {string} - Last preview url
     */

  }, {
    key: 'lastPreviewUrl',
    get: function get() {
      return this.resourcePath + '/revisions/last/result/preview';
    }

    /**
     * Get the most up to date archive url
     * @returns {string} - Last archive url
     */

  }, {
    key: 'lastArchiveUrl',
    get: function get() {
      return this.resourcePath + '/revisions/last/result/archive';
    }
  }]);

  return Job;
}(_CrudBase3.default);

exports.default = Job;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JobResult = function (_CrudBase) {
  _inherits(JobResult, _CrudBase);

  function JobResult() {
    _classCallCheck(this, JobResult);

    return _possibleConstructorReturn(this, (JobResult.__proto__ || Object.getPrototypeOf(JobResult)).apply(this, arguments));
  }

  _createClass(JobResult, [{
    key: 'resourceName',
    get: function get() {
      return 'job-result';
    }

    /**
     * Job result archive url
     * @returns {string} - Archive url
     */

  }, {
    key: 'archiveUrl',
    get: function get() {
      return this.url + '/archive';
    }

    /**
     * Job result preview url, usable in an `<img>` tag
     * @returns {string} - Preview url
     */

  }, {
    key: 'previewUrl',
    get: function get() {
      return this.url + '/preview';
    }
  }]);

  return JobResult;
}(_CrudBase3.default);

exports.default = JobResult;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Language = function (_CrudBase) {
  _inherits(Language, _CrudBase);

  function Language() {
    _classCallCheck(this, Language);

    return _possibleConstructorReturn(this, (Language.__proto__ || Object.getPrototypeOf(Language)).apply(this, arguments));
  }

  _createClass(Language, [{
    key: 'toString',
    value: function toString() {
      return this.constructor.name + '(' + this.code + ')';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'languages';
    }
  }]);

  return Language;
}(_CrudBase3.default);

exports.default = Language;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = function (_CrudBase) {
  _inherits(Notification, _CrudBase);

  function Notification() {
    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
  }

  _createClass(Notification, [{
    key: 'resourceName',
    get: function get() {
      return 'notifications';
    }
  }]);

  return Notification;
}(_CrudBase3.default);

exports.default = Notification;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ResourceBase2 = __webpack_require__(30);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Permission = function (_ResourceBase) {
  _inherits(Permission, _ResourceBase);

  function Permission() {
    _classCallCheck(this, Permission);

    return _possibleConstructorReturn(this, (Permission.__proto__ || Object.getPrototypeOf(Permission)).apply(this, arguments));
  }

  _createClass(Permission, [{
    key: 'resourceName',
    get: function get() {
      return 'permissions';
    }
  }]);

  return Permission;
}(_ResourceBase3.default);

exports.default = Permission;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(2)
  , core           = __webpack_require__(26)
  , LIBRARY        = __webpack_require__(36)
  , wksExt         = __webpack_require__(138)
  , defineProperty = __webpack_require__(7).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(71)('keys')
  , uid    = __webpack_require__(35);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2).document && document.documentElement;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(4)
  , anObject = __webpack_require__(1);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(27)(Function.call, __webpack_require__(18).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var isObject       = __webpack_require__(4)
  , setPrototypeOf = __webpack_require__(102).set;
module.exports = function(that, target, C){
  var P, S = target.constructor;
  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
    setPrototypeOf(that, P);
  } return that;
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(34)
  , defined   = __webpack_require__(21);

module.exports = function repeat(count){
  var str = String(defined(this))
    , res = ''
    , n   = toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34)
  , defined   = __webpack_require__(21);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(36)
  , $export        = __webpack_require__(0)
  , redefine       = __webpack_require__(14)
  , hide           = __webpack_require__(13)
  , has            = __webpack_require__(12)
  , Iterators      = __webpack_require__(46)
  , $iterCreate    = __webpack_require__(110)
  , setToStringTag = __webpack_require__(44)
  , getPrototypeOf = __webpack_require__(19)
  , ITERATOR       = __webpack_require__(5)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(39)
  , descriptor     = __webpack_require__(32)
  , setToStringTag = __webpack_require__(44)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(13)(IteratorPrototype, __webpack_require__(5)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(75)
  , defined  = __webpack_require__(21);

module.exports = function(that, searchString, NAME){
  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(5)('match');
module.exports = function(KEY){
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch(e){
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch(f){ /* empty */ }
  } return true;
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(46)
  , ITERATOR   = __webpack_require__(5)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7)
  , createDesc      = __webpack_require__(32);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(56)
  , ITERATOR  = __webpack_require__(5)('iterator')
  , Iterators = __webpack_require__(46);
module.exports = __webpack_require__(26).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(11)
  , toIndex  = __webpack_require__(38)
  , toLength = __webpack_require__(9);
module.exports = function fill(value /*, start = 0, end = @length */){
  var O      = toObject(this)
    , length = toLength(O.length)
    , aLen   = arguments.length
    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
    , end    = aLen > 2 ? arguments[2] : undefined
    , endPos = end === undefined ? length : toIndex(end, length);
  while(endPos > index)O[index++] = value;
  return O;
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(47)
  , step             = __webpack_require__(153)
  , Iterators        = __webpack_require__(46)
  , toIObject        = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(109)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(1)
  , aFunction = __webpack_require__(15)
  , SPECIES   = __webpack_require__(5)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(27)
  , invoke             = __webpack_require__(74)
  , html               = __webpack_require__(101)
  , cel                = __webpack_require__(96)
  , global             = __webpack_require__(2)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(20)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , macrotask = __webpack_require__(119).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(20)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global         = __webpack_require__(2)
  , DESCRIPTORS    = __webpack_require__(6)
  , LIBRARY        = __webpack_require__(36)
  , $typed         = __webpack_require__(80)
  , hide           = __webpack_require__(13)
  , redefineAll    = __webpack_require__(43)
  , fails          = __webpack_require__(3)
  , anInstance     = __webpack_require__(42)
  , toInteger      = __webpack_require__(34)
  , toLength       = __webpack_require__(9)
  , gOPN           = __webpack_require__(40).f
  , dP             = __webpack_require__(7).f
  , arrayFill      = __webpack_require__(116)
  , setToStringTag = __webpack_require__(44)
  , ARRAY_BUFFER   = 'ArrayBuffer'
  , DATA_VIEW      = 'DataView'
  , PROTOTYPE      = 'prototype'
  , WRONG_LENGTH   = 'Wrong length!'
  , WRONG_INDEX    = 'Wrong index!'
  , $ArrayBuffer   = global[ARRAY_BUFFER]
  , $DataView      = global[DATA_VIEW]
  , Math           = global.Math
  , RangeError     = global.RangeError
  , Infinity       = global.Infinity
  , BaseBuffer     = $ArrayBuffer
  , abs            = Math.abs
  , pow            = Math.pow
  , floor          = Math.floor
  , log            = Math.log
  , LN2            = Math.LN2
  , BUFFER         = 'buffer'
  , BYTE_LENGTH    = 'byteLength'
  , BYTE_OFFSET    = 'byteOffset'
  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function(value, mLen, nBytes){
  var buffer = Array(nBytes)
    , eLen   = nBytes * 8 - mLen - 1
    , eMax   = (1 << eLen) - 1
    , eBias  = eMax >> 1
    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
    , i      = 0
    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
    , e, m, c;
  value = abs(value)
  if(value != value || value === Infinity){
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if(value * (c = pow(2, -e)) < 1){
      e--;
      c *= 2;
    }
    if(e + eBias >= 1){
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if(value * c >= 2){
      e++;
      c /= 2;
    }
    if(e + eBias >= eMax){
      m = 0;
      e = eMax;
    } else if(e + eBias >= 1){
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
};
var unpackIEEE754 = function(buffer, mLen, nBytes){
  var eLen  = nBytes * 8 - mLen - 1
    , eMax  = (1 << eLen) - 1
    , eBias = eMax >> 1
    , nBits = eLen - 7
    , i     = nBytes - 1
    , s     = buffer[i--]
    , e     = s & 127
    , m;
  s >>= 7;
  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if(e === 0){
    e = 1 - eBias;
  } else if(e === eMax){
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
};

var unpackI32 = function(bytes){
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
};
var packI8 = function(it){
  return [it & 0xff];
};
var packI16 = function(it){
  return [it & 0xff, it >> 8 & 0xff];
};
var packI32 = function(it){
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
};
var packF64 = function(it){
  return packIEEE754(it, 52, 8);
};
var packF32 = function(it){
  return packIEEE754(it, 23, 4);
};

var addGetter = function(C, key, internal){
  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
};

var get = function(view, bytes, index, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
};
var set = function(view, bytes, index, conversion, value, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = conversion(+value);
  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
};

var validateArrayBufferArguments = function(that, length){
  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
  var numberLength = +length
    , byteLength   = toLength(numberLength);
  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
  return byteLength;
};

if(!$typed.ABV){
  $ArrayBuffer = function ArrayBuffer(length){
    var byteLength = validateArrayBufferArguments(this, length);
    this._b       = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength){
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH]
      , offset       = toInteger(byteOffset);
    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if(DESCRIPTORS){
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset){
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset){
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if(!fails(function(){
    new $ArrayBuffer;     // eslint-disable-line no-new
  }) || !fails(function(){
    new $ArrayBuffer(.5); // eslint-disable-line no-new
  })){
    $ArrayBuffer = function ArrayBuffer(length){
      return new BaseBuffer(validateArrayBufferArguments(this, length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
    };
    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2))
    , $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ResourceBase2 = __webpack_require__(30);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Choropleth resource
 */
var Choropleth = function (_ResourceBase) {
  _inherits(Choropleth, _ResourceBase);

  function Choropleth() {
    _classCallCheck(this, Choropleth);

    return _possibleConstructorReturn(this, (Choropleth.__proto__ || Object.getPrototypeOf(Choropleth)).apply(this, arguments));
  }

  _createClass(Choropleth, [{
    key: 'resourceName',
    get: function get() {
      return 'choropleths';
    }
  }]);

  return Choropleth;
}(_ResourceBase3.default);

exports.default = Choropleth;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Maps4News = __webpack_require__(57);

var _Maps4News2 = _interopRequireDefault(_Maps4News);

var _PaginatedResourceWrapper = __webpack_require__(168);

var _PaginatedResourceWrapper2 = _interopRequireDefault(_PaginatedResourceWrapper);

var _reflection = __webpack_require__(10);

var _requests = __webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Proxy for accessing paginated resources
 */
var PaginatedResourceListing = function () {
  /**
   * @param {Maps4News} api - Instance of the api
   * @param {String} route - Resource route
   * @param {ResourceBase} Target - Wrapper target
   * @param {Object|{}} query - Search query
   * @param {Number} page - Page number
   * @param {Number} perPage - Amount of items per page
   * @param {Number} pageCount - Resolved page count
   * @param {Number} rowCount - Resolved rowCount
   * @param {Array<ResourceBase>} data - Resolved data
   * @private
   */
  function PaginatedResourceListing(api, route, Target) {
    var query = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var page = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var perPage = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : api.defaults.perPage;
    var pageCount = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
    var rowCount = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var data = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];

    _classCallCheck(this, PaginatedResourceListing);

    if (!(0, _reflection.isParentOf)(_Maps4News2.default, api)) {
      throw new TypeError('Expected api to be of type Maps4News');
    }

    this._api = api;
    this._route = route;
    this._Target = Target;
    this._query = query;

    this._data = data;
    this._page = page;
    this._perPage = perPage;
    this._rows = rowCount;
    this._pageCount = pageCount;
  }

  /**
   * Pagination header prefix
   * @returns {String} - Header prefix
   */


  _createClass(PaginatedResourceListing, [{
    key: 'getPage',


    /**
     * Get target page
     * @param {Number} page - Page number
     * @param {Number} perPage - Amount of items per page (max 50)
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance and rejects with {@link ApiError}
     */
    value: function getPage(page) {
      var _this = this;

      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;

      page = Math.max(1, page);

      var query = { page: page };

      if (perPage) {
        perPage = Math.max(1, perPage);
        perPage = Math.min(50, perPage);

        query['per_page'] = perPage;
      }

      // Add search query (if any)
      if (Object.keys(this.query).length > 0) {
        query['search'] = this.query;
      }

      var url = this.route + '?' + (0, _requests.encodeQueryString)(query);

      return new Promise(function (resolve, reject) {
        _this.api.request(url, 'GET', {}, {}, '', true).then(function (request) {
          var response = JSON.parse(request.responseText);
          var rowCount = Number(request.getResponseHeader(PaginatedResourceListing.headerPrefix + '-Total'));
          var totalPages = Number(request.getResponseHeader(PaginatedResourceListing.headerPrefix + '-Pages'));

          var instance = new PaginatedResourceListing(_this.api, _this.route, _this._Target, _this.query, page, perPage, totalPages, rowCount, response.data.map(function (row) {
            return new _this._Target(_this.api, row);
          }));

          resolve(instance, request);
        }).catch(reject);
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
     * @param {Boolean} cacheEnabled - If the pagination cache should be used
     * @param {Number} cacheTime - Amount of seconds to store a value in cache
     * @param {Boolean} shareCache - Share cache across instances
     * @returns {PaginatedResourceWrapper} - Wrapped resource listing
     */

  }, {
    key: 'wrap',
    value: function wrap() {
      var cacheEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.api.defaults.cacheEnabled;
      var cacheTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.api.defaults.cacheSeconds;
      var shareCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.api.defaults._shareCache;

      return new _PaginatedResourceWrapper2.default(this, this.api, cacheEnabled, cacheTime, shareCache);
    }
  }, {
    key: 'api',


    /**
     * Get api instance
     * @returns {Maps4News} - Api instance
     */
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
     * Current page number
     * @returns {Number} - Current page
     */

  }, {
    key: 'page',
    get: function get() {
      return this._page;
    }

    /**
     * Maximum amount of items per page
     * @returns {Number} - Amount of items
     */

  }, {
    key: 'perPage',
    get: function get() {
      return this._perPage;
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
      return this._query;
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
      // Verify query structure
      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
        throw new TypeError('Expected value to be of type "Object" got "' + (0, _reflection.getTypeName)(value) + '"');
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(value)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          if (typeof key !== 'string') {
            throw new TypeError('Expected key to be of type "String" got "' + (0, _reflection.getTypeName)(key) + '"');
          }

          if (Array.isArray(value[key])) {
            if (value[key].length > 0) {
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = value[key][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var query = _step2.value;

                  if (typeof query !== 'string') {
                    throw new TypeError('Expected query for "' + key + '" to be of type "String" got "' + (0, _reflection.getTypeName)(query) + '"');
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
            } else {
              // Drop empty nodes
              delete value[key];
            }
          } else if (typeof value[key] !== 'string') {
            throw new TypeError('Expected query value to be of type "string" or "Array" got "' + (0, _reflection.getTypeName)(key) + '"');
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

      this._query = value;
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
      return (0, _requests.encodeQueryString)({ query: this.query }).toLowerCase();
    }
  }], [{
    key: 'headerPrefix',
    get: function get() {
      return 'X-Paginate';
    }
  }]);

  return PaginatedResourceListing;
}();

exports.default = PaginatedResourceListing;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mitt = __webpack_require__(169);

var _mitt2 = _interopRequireDefault(_mitt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Used for caching resources
 * @see {@link PaginatedResourceWrapper}
 */
var ResourceCache = function () {
  function ResourceCache(api) {
    var cacheTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : api.defaults.cacheSeconds;

    _classCallCheck(this, ResourceCache);

    this._api = api;
    this.cacheTime = cacheTime;
    this.emitter = (0, _mitt2.default)();

    this._storage = {};
  }

  /**
   * Push a page into the cache
   * @param {PaginatedResourceListing} page - Data to be cached
   * @returns {void}
   */


  _createClass(ResourceCache, [{
    key: 'push',
    value: function push(page) {
      var _this = this;

      var validThrough = this._timestamp() + this.cacheTime;
      var data = {
        page: page, validThrough: validThrough,
        timeout: setTimeout(function () {
          return _this.revalidate(page.url);
        }, this.cacheTime * 1000)
      };

      var storage = this._storage[page.url] || (this._storage[page.url] = {});

      (storage[page.cacheToken] || (storage[page.cacheToken] = [])).push(data);

      this.emitter.emit('push', { page: page, validThrough: validThrough, resourceUrl: page.url });
      this.emitter.emit('invalidate', { resourceUrl: page.url });
    }

    /**
     * Revalidate all data and delete stale data
     * @param {String} resourceUrl - Resource url
     * @returns {void}
     */

  }, {
    key: 'revalidate',
    value: function revalidate() {
      var _this2 = this;

      var resourceUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!resourceUrl) {
        Object.keys(this._storage).map(this.revalidate);
      } else if (this._storage[resourceUrl]) {
        var storage = this._storage[resourceUrl];

        // Remove old data from the cache and stop old timeouts
        Object.keys(storage).forEach(function (key) {
          storage[key].filter(function (row) {
            return row.validThrough < _this2._timestamp();
          }).forEach(function (row) {
            return clearTimeout(row.timeout);
          });

          storage[key] = storage[key].filter(function (row) {
            return row.validThrough >= _this2._timestamp();
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
      var _ref;

      var cacheToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var storage = this._storage[resourceUrl] || {};

      return (_ref = []).concat.apply(_ref, _toConsumableArray(Object.keys(storage).filter(function (x) {
        return !cacheToken || x === cacheToken;
      }).map(function (key) {
        return storage[key];
      }))).sort(function (a, b) {
        return a.validThrough - b.validThrough;
      }).map(function (x) {
        return x.page;
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
      var _this3 = this;

      var resourceUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!resourceUrl) {
        Object.keys(this._storage).forEach(function (url) {
          _this3.emitter.emit('invalidate', { resourceUrl: url });
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
     * @returns {Array} - Indexed relevant data
     */

  }, {
    key: 'resolve',
    value: function resolve(resourceUrl) {
      var cacheToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      cacheToken = cacheToken.toLowerCase();

      var data = this.collectPages(resourceUrl, cacheToken);
      var out = [];

      var _loop = function _loop(page) {
        var ids = page.data.map(function (row) {
          return row.id;
        });
        var startId = Math.min.apply(Math, _toConsumableArray(ids));
        var endId = Math.max.apply(Math, _toConsumableArray(ids));

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = page.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var row = _step2.value;

            out[row.id] = row;
          }

          // Grab list of applicable ids and delete offending
          // keys that no longer exist in the newer data set
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

        Object.keys(out).map(Number).filter(function (key) {
          return startId <= key && key <= endId;
        }).filter(function (key) {
          return !ids.includes(key);
        }).forEach(function (key) {
          return delete out[key];
        });
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var page = _step.value;

          _loop(page);
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
     * Get a usable timestamp
     * @returns {number} - timestamp
     * @private
     */

  }, {
    key: '_timestamp',
    value: function _timestamp() {
      return Math.floor(Date.now() / 1000);
    }
  }]);

  return ResourceCache;
}();

exports.default = ResourceCache;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reflection = __webpack_require__(10);

var _Maps4News = __webpack_require__(57);

var _Maps4News2 = _interopRequireDefault(_Maps4News);

var _ResourceBase = __webpack_require__(30);

var _ResourceBase2 = _interopRequireDefault(_ResourceBase);

var _ApiError = __webpack_require__(65);

var _ApiError2 = _interopRequireDefault(_ApiError);

var _ValidationError = __webpack_require__(87);

var _ValidationError2 = _interopRequireDefault(_ValidationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    _classCallCheck(this, ImageHandler);

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


  _createClass(ImageHandler, [{
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
     * @returns {Promise} - Resolves with a {@link String} containing a base64 representation of the image and rejects with {@link ApiError}
     */

  }, {
    key: 'download',
    value: function download() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this._api.request(_this.url, 'GET', {}, {}, 'arraybuffer').catch(reject).then(function (data) {
          var blob = new Blob([data], { type: 'image' });

          // noinspection JSUnresolvedFunction
          var url = (window.URL || window.webkitURL).createObjectURL(blob);

          resolve(url);
        });
      });
    }

    /**
     * Upload new image
     * @param {File} image - Image file
     * @returns {Promise} - Resolves with an empty {@link Object} and rejects with {@link ApiError}
     * @todo refactor
     */

  }, {
    key: 'upload',
    value: function upload(image) {
      var _this2 = this;

      if (!(0, _reflection.isParentOf)(File, image)) {
        throw new TypeError('Expected image to be of type File');
      }

      return new Promise(function (resolve, reject) {
        var formData = new FormData();

        formData.append('image', image);

        var request = new XMLHttpRequest();

        request.open('POST', _this2.url, true);
        request.setRequestHeader('Authorization', _this2._api.token.toString());
        request.setRequestHeader('Accept', 'application/json');

        request.onreadystatechange = function () {
          if (request.readyState !== XMLHttpRequest.DONE) {
            return;
          }

          try {
            var response = JSON.parse(request.responseText);

            if (!response.success) {
              var err = response.error;

              if (!err.validation_errors) {
                reject(new _ApiError2.default(err.type, err.message, request.status));
              } else {
                reject(new _ValidationError2.default(err.type, err.message, request.status, err.validation_errors));
              }
            } else {
              // Return an empty object if no data has been sent
              // instead of returning undefined.
              resolve(response.data || {});
            }
          } catch (ignore) {
            reject(new _ApiError2.default('ResponseException', 'The server returned an invalid response', request.status));
          }
        };

        request.send(formData);
      });
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
}();

exports.default = ImageHandler;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reflection = __webpack_require__(10);

var _ResourceBase = __webpack_require__(30);

var _ResourceBase2 = _interopRequireDefault(_ResourceBase);

var _PaginatedResourceListing = __webpack_require__(123);

var _PaginatedResourceListing2 = _interopRequireDefault(_PaginatedResourceListing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Proxy for accessing resource. This will make sure that they
 * are properly wrapped before the promise resolves.
 * @protected
 */
var ResourceProxy = function () {
  /**
   * @param {Maps4News} api - Instance of the api
   * @param {ResourceBase} Target - Target to wrap
   */
  function ResourceProxy(api, Target) {
    _classCallCheck(this, ResourceProxy);

    if (!(0, _reflection.isParentOf)(_ResourceBase2.default, Target)) {
      throw new TypeError('Target is not a child of CrudBase');
    }

    if (typeof Target !== 'function') {
      throw new TypeError('Target must to be a class not an instance');
    }

    this._api = api;
    this._Target = Target;
  }

  /**
   * Get api instance
   * @returns {Maps4News} - Api instance
   */


  _createClass(ResourceProxy, [{
    key: 'search',


    /**
     * Lists target resource
     * @param {Object<String, String|Array<String>>} query - Query
     * @param {Number} page - The page to be requested
     * @param {Number} perPage - Amount of items per page. This is silently capped by the API
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance and rejects with {@link ApiError}
     *
     * @example
     * // Find layers with a name that starts with "test" and a scale_min between 1 and 10
     * // See Api documentation for search query syntax
     * var query = {
     *   name: '^:test',
     *   scale_min: ['>:1', '<:10'],
     * }
     *
     * api.layers.search(query).then(console.dir);
     */
    value: function search(query) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.api.defaults.perPage;

      var url = this.new().baseUrl;
      var resolver = new _PaginatedResourceListing2.default(this._api, url, this.Target, query);

      return resolver.getPage(page, perPage);
    }

    /**
     * Lists target resource
     * @param {Number} page - The page to be requested
     * @param {Number|undefined} perPage - Amount of items per page. This is silently capped by the API
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance and rejects with {@link ApiError}
     */

  }, {
    key: 'list',
    value: function list() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.api.defaults.perPage;

      return this.search({}, page, perPage);
    }

    /**
     * Lists target resource
     * @param {Number} page - The page to be requested
     * @param {Number} perPage - Amount of items per page. This is silently capped by the API
     * @param {Boolean} cacheEnabled - If the pagination cache should be used
     * @param {Number} cacheTime - Amount of seconds to store a value in cache
     * @param {Boolean} shareCache - Share cache across instances
     * @returns {PaginatedResourceWrapper} - Resolves with {@link PaginatedResourceListing} instance and rejects with {@link ApiError}
     *
     */

  }, {
    key: 'listAndWrap',
    value: function listAndWrap() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.api.defaults.perPage;
      var cacheEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.api.defaults.cacheEnabled;
      var cacheTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.api.defaults.cacheSeconds;
      var shareCache = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.api.defaults._shareCache;

      return this.searchAndWrap({}, page, perPage, cacheEnabled, cacheTime, shareCache);
    }

    /**
     * Lists target resource
     * @param {Object<String, String|Array<String>>} query - Query
     * @param {Number} page - The page to be requested
     * @param {Number} perPage - Amount of items per page. This is silently capped by the API
     * @param {Boolean} cacheEnabled - If the pagination cache should be used
     * @param {Number} cacheTime - Amount of seconds to store a value in cache
     * @param {Boolean} shareCache - Share cache across instances
     * @returns {PaginatedResourceWrapper} - Wrapped {@link PaginatedResourceListing} instance
     *
     * @example
     * // Find layers with a name that starts with "test" and a scale_min between 1 and 10
     * // See Api documentation for search query syntax
     * var query = {
     *   name: '^:test',
     *   scale_min: ['>:1', '<:10'],
     * }
     *
     * api.layers.searchAndWrap(query)
     */

  }, {
    key: 'searchAndWrap',
    value: function searchAndWrap(query) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.api.defaults.perPage;
      var cacheEnabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.api.defaults.cacheEnabled;
      var cacheTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.api.defaults.cacheSeconds;
      var shareCache = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this.api.defaults._shareCache;

      var url = this.new().baseUrl;
      var resolver = new _PaginatedResourceListing2.default(this._api, url, this.Target, query, page, perPage);
      var wrapped = resolver.wrap(cacheEnabled, cacheTime, shareCache);

      wrapped.get(page);

      return wrapped;
    }

    /**
     * Get target resource
     * @param {Number|String} id - The resource id to be requested
     * @returns {Promise} - Resolves with {@link ResourceBase} instance and rejects with {@link ApiError}
     */

  }, {
    key: 'get',
    value: function get(id) {
      var _this = this;

      var url = this.new({ id: id }).url;

      return new Promise(function (resolve, reject) {
        _this._api.request(url).catch(reject).then(function (data) {
          return resolve(_this.new(data));
        });
      });
    }

    /**
     * Select target resource without obtaining data
     * @param {Number|String} id - Resource id
     * @returns {ResourceBase} - Empty target resource
     * @example
     * api.users.select('me').colors().then(doSomethingCool);
     */

  }, {
    key: 'select',
    value: function select(id) {
      return this.new({ id: id });
    }

    /**
     * Build a new isntance of the target
     * @param {Object<String, *>} data - Data for the object to be populated with
     * @returns {ResourceBase} - Resource with target data
     */

  }, {
    key: 'new',
    value: function _new() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new this.Target(this._api, data);
    }
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
     */

  }, {
    key: 'accessorName',
    get: function get() {
      return this.Target.name.toLowerCase();
    }
  }]);

  return ResourceProxy;
}();

exports.default = ResourceProxy;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _Layer = __webpack_require__(52);

var _Layer2 = _interopRequireDefault(_Layer);

var _JobShare = __webpack_require__(51);

var _JobShare2 = _interopRequireDefault(_JobShare);

var _JobResult = __webpack_require__(92);

var _JobResult2 = _interopRequireDefault(_JobResult);

var _reflection = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JobRevision = function (_CrudBase) {
  _inherits(JobRevision, _CrudBase);

  function JobRevision() {
    _classCallCheck(this, JobRevision);

    return _possibleConstructorReturn(this, (JobRevision.__proto__ || Object.getPrototypeOf(JobRevision)).apply(this, arguments));
  }

  _createClass(JobRevision, [{
    key: 'save',


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

      return new Promise(function (resolve, reject) {
        _this2.api.request(_this2.baseUrl, 'POST', data).catch(reject).then(function (data) {
          return resolve(new JobRevision(_this2.api, data));
        });
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
     * Get layers
     * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance containing {@link Layer} instances and rejects with {@link ApiError}
     */

  }, {
    key: 'layers',
    value: function layers() {
      return this._listResource(_Layer2.default);
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
     * Get the job result
     * @returns {Promise} - Resolves with a {@link JobResult} instance and rejects with {@link ApiError}
     */

  }, {
    key: 'result',
    value: function result() {
      var _this3 = this;

      var url = this.url + '/result';

      return new Promise(function (resolve, reject) {
        _this3.api.request(url).catch(reject).then(function (data) {
          return resolve(new _JobResult2.default(_this3.api, data));
        });
      });
    }
  }, {
    key: 'baseUrl',
    get: function get() {
      return '/jobs/' + this['job_id'] + '/revisions';
    }
  }, {
    key: 'resourcePath',
    get: function get() {
      return '/jobs/{job_id}/revisions/{id}';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'job-revisions';
    }
  }]);

  return JobRevision;
}(_CrudBase3.default);

exports.default = JobRevision;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Faq resource
 */
var Faq = function (_CrudBase) {
  _inherits(Faq, _CrudBase);

  function Faq() {
    _classCallCheck(this, Faq);

    return _possibleConstructorReturn(this, (Faq.__proto__ || Object.getPrototypeOf(Faq)).apply(this, arguments));
  }

  _createClass(Faq, [{
    key: 'resourceName',
    get: function get() {
      return 'faqs';
    }
  }]);

  return Faq;
}(_CrudBase3.default);

exports.default = Faq;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ResourceBase2 = __webpack_require__(30);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Highlight = function (_ResourceBase) {
  _inherits(Highlight, _ResourceBase);

  function Highlight() {
    _classCallCheck(this, Highlight);

    return _possibleConstructorReturn(this, (Highlight.__proto__ || Object.getPrototypeOf(Highlight)).apply(this, arguments));
  }

  _createClass(Highlight, [{
    key: 'resourceName',
    get: function get() {
      return 'highlights';
    }
  }]);

  return Highlight;
}(_ResourceBase3.default);

exports.default = Highlight;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ResourceBase2 = __webpack_require__(30);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsetMap = function (_ResourceBase) {
  _inherits(InsetMap, _ResourceBase);

  function InsetMap() {
    _classCallCheck(this, InsetMap);

    return _possibleConstructorReturn(this, (InsetMap.__proto__ || Object.getPrototypeOf(InsetMap)).apply(this, arguments));
  }

  _createClass(InsetMap, [{
    key: 'resourceName',
    get: function get() {
      return 'inset-maps';
    }
  }]);

  return InsetMap;
}(_ResourceBase3.default);

exports.default = InsetMap;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ResourceBase2 = __webpack_require__(30);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlaceName = function (_ResourceBase) {
  _inherits(PlaceName, _ResourceBase);

  function PlaceName() {
    _classCallCheck(this, PlaceName);

    return _possibleConstructorReturn(this, (PlaceName.__proto__ || Object.getPrototypeOf(PlaceName)).apply(this, arguments));
  }

  _createClass(PlaceName, [{
    key: 'resourceName',
    get: function get() {
      return 'place-names';
    }
  }]);

  return PlaceName;
}(_ResourceBase3.default);

exports.default = PlaceName;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrudBase2 = __webpack_require__(8);

var _CrudBase3 = _interopRequireDefault(_CrudBase2);

var _UnsupportedCrudError = __webpack_require__(171);

var _UnsupportedCrudError2 = _interopRequireDefault(_UnsupportedCrudError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SvgSetType = function (_CrudBase) {
  _inherits(SvgSetType, _CrudBase);

  function SvgSetType() {
    _classCallCheck(this, SvgSetType);

    return _possibleConstructorReturn(this, (SvgSetType.__proto__ || Object.getPrototypeOf(SvgSetType)).apply(this, arguments));
  }

  _createClass(SvgSetType, [{
    key: 'restore',

    /**
     * Disabled because svg set type does not support soft deletes
     * @returns {void}
     * @throws Error
     * @private
     */
    value: function restore() {
      throw new _UnsupportedCrudError2.default('Svg set types don\'t support soft deletes');
    }
  }, {
    key: 'resourcePath',
    get: function get() {
      return '/svgs/sets/types/{id}';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'svg-set-types';
    }
  }]);

  return SvgSetType;
}(_CrudBase3.default);

exports.default = SvgSetType;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OAuthError = __webpack_require__(68);

var _OAuthError2 = _interopRequireDefault(_OAuthError);

var _OAuth2 = __webpack_require__(53);

var _OAuth3 = _interopRequireDefault(_OAuth2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Dummy flow for when the token should be available in the
 * cache and no attempt at authentication should be made.
 */
var DummyFlow = function (_OAuth) {
  _inherits(DummyFlow, _OAuth);

  function DummyFlow() {
    _classCallCheck(this, DummyFlow);

    return _possibleConstructorReturn(this, (DummyFlow.__proto__ || Object.getPrototypeOf(DummyFlow)).call(this, '', []));
  }

  /**
   * Authenticate
   * @returns {Promise} - Promise resolves with {@link OAuthToken} and rejects with {@link OAuthError}
   */


  _createClass(DummyFlow, [{
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
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StaticClass2 = __webpack_require__(135);

var _StaticClass3 = _interopRequireDefault(_StaticClass2);

var _uuid = __webpack_require__(173);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * State container for keeping track of OAuth states (crsf tokens)
 * @static
 * @private
 */
var StateContainer = function (_StaticClass) {
  _inherits(StateContainer, _StaticClass);

  function StateContainer() {
    _classCallCheck(this, StateContainer);

    return _possibleConstructorReturn(this, (StateContainer.__proto__ || Object.getPrototypeOf(StateContainer)).apply(this, arguments));
  }

  _createClass(StateContainer, null, [{
    key: 'generate',


    /**
     * Generate and store a state that can be checked at a later point
     * @returns {string} - state
     */
    value: function generate() {
      var key = StateContainer.prefix + Date.now();
      var value = _uuid2.default.uuid4();

      localStorage.setItem(key, value);
      return value;
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

      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

        if (localStorage.getItem(key) === state) {
          if (purge) {
            localStorage.removeItem(key);
          }

          return true;
        }
      }

      return false;
    }

    /**
     * Remove all states from the state db
     * @returns {void}
     */

  }, {
    key: 'clean',
    value: function clean() {
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var prefix = key.slice(0, StateContainer.prefix.length);

        if (prefix === StateContainer.prefix) {
          localStorage.removeItem(key);
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
      var out = {};

      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var prefix = key.slice(0, StateContainer.prefix.length);

        if (prefix === StateContainer.prefix) {
          out[key] = localStorage.getItem(key);
        }
      }

      return out;
    }
  }, {
    key: 'prefix',

    /**
     * LocalStorage key prefix
     * @returns {String} - prefix
     * @constant
     */
    get: function get() {
      return 'm4n_api_state_';
    }
  }]);

  return StateContainer;
}(_StaticClass3.default);

exports.default = StateContainer;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StaticClassError = __webpack_require__(136);

var _StaticClassError2 = _interopRequireDefault(_StaticClassError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Disables the constructor and throws a {@link StaticClassError} when an instance is created.
 * @protected
 */
var StaticClass = function StaticClass() {
  _classCallCheck(this, StaticClass);

  throw new _StaticClassError2.default();
};

exports.default = StaticClass;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Thrown upon invocation of a static class
 * @see StaticClass
 */
var StaticClassError = function (_Error) {
  _inherits(StaticClassError, _Error);

  function StaticClassError() {
    _classCallCheck(this, StaticClassError);

    return _possibleConstructorReturn(this, (StaticClassError.__proto__ || Object.getPrototypeOf(StaticClassError)).apply(this, arguments));
  }

  return StaticClassError;
}(Error);

exports.default = StaticClassError;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(3)(function(){
  return Object.defineProperty(__webpack_require__(96)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(12)
  , toIObject    = __webpack_require__(16)
  , arrayIndexOf = __webpack_require__(72)(false)
  , IE_PROTO     = __webpack_require__(98)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(1)
  , getKeys  = __webpack_require__(37);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(16)
  , gOPN      = __webpack_require__(40).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(37)
  , gOPS     = __webpack_require__(73)
  , pIE      = __webpack_require__(55)
  , toObject = __webpack_require__(11)
  , IObject  = __webpack_require__(54)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 143 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction  = __webpack_require__(15)
  , isObject   = __webpack_require__(4)
  , invoke     = __webpack_require__(74)
  , arraySlice = [].slice
  , factories  = {};

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /*, args... */){
  var fn       = aFunction(this)
    , partArgs = arraySlice.call(arguments, 1);
  var bound = function(/* args... */){
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if(isObject(fn.prototype))bound.prototype = fn.prototype;
  return bound;
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(2).parseInt
  , $trim     = __webpack_require__(45).trim
  , ws        = __webpack_require__(103)
  , hex       = /^[\-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(2).parseFloat
  , $trim       = __webpack_require__(45).trim;

module.exports = 1 / $parseFloat(__webpack_require__(103) + '-0') !== -Infinity ? function parseFloat(str){
  var string = $trim(String(str), 3)
    , result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(20);
module.exports = function(it, msg){
  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
  return +it;
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(4)
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 149 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(1);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(15)
  , toObject  = __webpack_require__(11)
  , IObject   = __webpack_require__(54)
  , toLength  = __webpack_require__(9);

module.exports = function(that, callbackfn, aLen, memo, isRight){
  aFunction(callbackfn);
  var O      = toObject(that)
    , self   = IObject(O)
    , length = toLength(O.length)
    , index  = isRight ? length - 1 : 0
    , i      = isRight ? -1 : 1;
  if(aLen < 2)for(;;){
    if(index in self){
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if(isRight ? index < 0 : length <= index){
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(11)
  , toIndex  = __webpack_require__(38)
  , toLength = __webpack_require__(9);

module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
  var O     = toObject(this)
    , len   = toLength(O.length)
    , to    = toIndex(target, len)
    , from  = toIndex(start, len)
    , end   = arguments.length > 2 ? arguments[2] : undefined
    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
    , inc   = 1;
  if(from < to && to < from + count){
    inc  = -1;
    from += count - 1;
    to   += count - 1;
  }
  while(count-- > 0){
    if(from in O)O[to] = O[from];
    else delete O[to];
    to   += inc;
    from += inc;
  } return O;
};

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(7).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(77)
});

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(156);

// 23.1 Map Objects
module.exports = __webpack_require__(79)('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP          = __webpack_require__(7).f
  , create      = __webpack_require__(39)
  , redefineAll = __webpack_require__(43)
  , ctx         = __webpack_require__(27)
  , anInstance  = __webpack_require__(42)
  , defined     = __webpack_require__(21)
  , forOf       = __webpack_require__(48)
  , $iterDefine = __webpack_require__(109)
  , step        = __webpack_require__(153)
  , setSpecies  = __webpack_require__(41)
  , DESCRIPTORS = __webpack_require__(6)
  , fastKey     = __webpack_require__(33).fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(156);

// 23.2 Set Objects
module.exports = __webpack_require__(79)('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each         = __webpack_require__(25)(0)
  , redefine     = __webpack_require__(14)
  , meta         = __webpack_require__(33)
  , assign       = __webpack_require__(142)
  , weak         = __webpack_require__(159)
  , isObject     = __webpack_require__(4)
  , getWeak      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(79)('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll       = __webpack_require__(43)
  , getWeak           = __webpack_require__(33).getWeak
  , anObject          = __webpack_require__(1)
  , isObject          = __webpack_require__(4)
  , anInstance        = __webpack_require__(42)
  , forOf             = __webpack_require__(48)
  , createArrayMethod = __webpack_require__(25)
  , $has              = __webpack_require__(12)
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN     = __webpack_require__(40)
  , gOPS     = __webpack_require__(73)
  , anObject = __webpack_require__(1)
  , Reflect  = __webpack_require__(2).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
  var keys       = gOPN.f(anObject(it))
    , getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(9)
  , repeat   = __webpack_require__(105)
  , defined  = __webpack_require__(21);

module.exports = function(that, maxLength, fillString, left){
  var S            = String(defined(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = toLength(maxLength);
  if(intMaxLength <= stringLength || fillStr == '')return S;
  var fillLen = intMaxLength - stringLength
    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(37)
  , toIObject = __webpack_require__(16)
  , isEnum    = __webpack_require__(55).f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(56)
  , from    = __webpack_require__(164);
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(48);

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OAuth2 = __webpack_require__(53);

var _OAuth3 = _interopRequireDefault(_OAuth2);

var _OAuthToken = __webpack_require__(69);

var _OAuthToken2 = _interopRequireDefault(_OAuthToken);

var _StateContainer = __webpack_require__(134);

var _StateContainer2 = _interopRequireDefault(_StateContainer);

var _requests = __webpack_require__(59);

var _OAuthError = __webpack_require__(68);

var _OAuthError2 = _interopRequireDefault(_OAuthError);

var _node = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Implicit OAuth flow using redirection
 */
var ImplicitFlow = function (_OAuth) {
  _inherits(ImplicitFlow, _OAuth);

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

    _classCallCheck(this, ImplicitFlow);

    var _this = _possibleConstructorReturn(this, (ImplicitFlow.__proto__ || Object.getPrototypeOf(ImplicitFlow)).call(this, clientId, scopes));

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
        _this.token.save();
      }
    }
    return _this;
  }

  /**
   * Authenticate
   * @returns {Promise} - Promise resolves with {@link OAuthToken} and rejects with {@link OAuthError}
   */


  _createClass(ImplicitFlow, [{
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
     * @returns {Object<String, String>} - Anchor paramenters
     * @protected
     */

  }, {
    key: '_getAnchorParams',
    value: function _getAnchorParams() {
      var out = {};
      var query = window.location.hash.replace(/^#\/?/g, '');

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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.resources = exports.StaticClassError = exports.ValidationError = exports.ApiError = exports.DummyFlow = exports.PasswordFlow = exports.ImplicitFlowPopup = exports.ImplicitFlow = exports.OAuth = exports.Maps4News = undefined;

var _AbstractError = __webpack_require__(49);

Object.keys(_AbstractError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AbstractError[key];
    }
  });
});

var _Maps4News2 = __webpack_require__(57);

var _Maps4News3 = _interopRequireDefault(_Maps4News2);

var _OAuth2 = __webpack_require__(53);

var _OAuth3 = _interopRequireDefault(_OAuth2);

var _ImplicitFlow2 = __webpack_require__(165);

var _ImplicitFlow3 = _interopRequireDefault(_ImplicitFlow2);

var _ImplicitFlowPopup2 = __webpack_require__(357);

var _ImplicitFlowPopup3 = _interopRequireDefault(_ImplicitFlowPopup2);

var _PasswordFlow2 = __webpack_require__(358);

var _PasswordFlow3 = _interopRequireDefault(_PasswordFlow2);

var _DummyFlow2 = __webpack_require__(133);

var _DummyFlow3 = _interopRequireDefault(_DummyFlow2);

var _ApiError2 = __webpack_require__(65);

var _ApiError3 = _interopRequireDefault(_ApiError2);

var _ValidationError2 = __webpack_require__(87);

var _ValidationError3 = _interopRequireDefault(_ValidationError2);

var _StaticClassError2 = __webpack_require__(136);

var _StaticClassError3 = _interopRequireDefault(_StaticClassError2);

var _crud = __webpack_require__(359);

var _resources = _interopRequireWildcard(_crud);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Maps4News = _Maps4News3.default;

// Flows
// Core

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

/**
 * Package version
 * @private
 */

var version = exports.version = "v0.8.3";

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snakeToCamelCase = snakeToCamelCase;
exports.camelToSnakeCase = camelToSnakeCase;
exports.pascalToCamelCase = pascalToCamelCase;
/**
 * Converts snake_case strings to camelCase
 * @param {String} str - a snake_case string
 * @returns {String} - Converted camelCase string
 * @private
 */
function snakeToCamelCase(str) {
  return str.replace(/(?:(_[a-z\d]))/g, function (x) {
    return x[1].toUpperCase();
  });
}

/**
 * Converts camelCase strings to snake_case
 * @param {String} str - a camelCase string
 * @returns {String} - Converted snake_case string
 * @private
 */
function camelToSnakeCase(str) {
  return str.replace(/([A-Z])/g, function (x) {
    return '_' + x.toLowerCase();
  });
}

function pascalToCamelCase(str) {
  return str.replace(/^([A-Z])/g, function (x) {
    return x.toLowerCase();
  });
}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ResourceCache = __webpack_require__(124);

var _ResourceCache2 = _interopRequireDefault(_ResourceCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Used for wrapping {@link PaginatedResourceListing} to make it spa friendly
 */
var PaginatedResourceWrapper = function () {
  /**
   *
   * @param {PaginatedResourceListing} listing - Listing result
   * @param {Maps4News} api - Instance of the api
   * @param {Boolean} cacheEnabled - If the pagination cache should be used
   * @param {Number} cacheTime - Amount of seconds to store a value in cache
   * @param {Boolean} shareCache - Share cache across instances
   */
  function PaginatedResourceWrapper(listing) {
    var api = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : listing.api;
    var cacheEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : api.defaults.cacheEnabled;
    var cacheTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : api.defaults.cacheSeconds;
    var shareCache = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : api.defaults._shareCache;

    _classCallCheck(this, PaginatedResourceWrapper);

    // Fields
    this._api = api;
    this.cacheEnabled = cacheEnabled;
    this.cacheTime = cacheTime;
    this._shareCache = shareCache;
    this._currentPage = 1;

    /**
     * Available data assembled from the cache
     * @type {Array<ResourceBase>} - Available data
     */
    this.data = [];

    // Internal
    this._localCache = new _ResourceCache2.default(api, cacheTime);
    this._inflight = [];
    this._last = listing;

    this._promiseCallback(listing);
  }

  _createClass(PaginatedResourceWrapper, [{
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
      this.data = this.cache.resolve(this.path, this._last.cacheToken).filter(function (value) {
        return typeof value !== 'undefined';
      });

      this.cache.emitter.emit('post-rebuild', { resourceUrl: this._last.url });
    }

    /**
     * Updates the cached pages.
     * @param {Boolean} flush - Clear the cached path data
     * @returns {void}
     */

  }, {
    key: 'refresh',
    value: function refresh() {
      var _this = this;

      var flush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (flush) {
        this.cache.clear(this.path);
      }

      this.cache.collectPages(this.path, this._last.cacheToken).map(function (page) {
        return _this.get(page.page);
      });
    }

    /**
     * Returns the page number that is currently being used as a reference point
     * @returns {Number} - The current page
     * @see {@link PaginatedResourceWrapper#next}
     * @see {@link PaginatedResourceWrapper#previous}
     */

  }, {
    key: 'on',


    /**
     * Register an event handler for the given type.
     *
     * @param {string} type Type of event to listen for, or `"*"` for all events.
     * @param {function(event: any): void} handler Function to call in response to the given event.
     * @returns {void}
     */
    value: function on(type, handler) {
      this.cache.emitter.on(type, handler);
    }

    /**
     * Function to call in response to the given event
     *
     * @param {string} type Type of event to unregister `handler` from, or `"*"`
     * @param {function(event: any): void} handler Handler function to remove.
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
      var _this2 = this;

      return function (result) {
        var query = _this2.query;

        _this2._last = result;
        _this2._query = query;

        _this2.cache.push(result);

        var inflightId = _this2.inflight.findIndex(function (x) {
          return x === result.page;
        });

        if (inflightId >= 0) {
          _this2._inflight.splice(inflightId, 1);
        }

        _this2.rebuild();
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
     * Get the path of the resource
     * @returns {String} - path
     */

  }, {
    key: 'path',
    get: function get() {
      return this._last.path;
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

    /**
     * Optional search query
     * @default {}
     * @return {Object<String, String|Array<String>>} - Query
     */

  }, {
    key: 'query',
    get: function get() {
      return this._last.query;
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
      this._last.query = value;
      this.rebuild();
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
  }]);

  return PaginatedResourceWrapper;
}();

exports.default = PaginatedResourceWrapper;

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Trait2 = __webpack_require__(83);

var _ImageHandler = __webpack_require__(125);

var _ImageHandler2 = _interopRequireDefault(_ImageHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Adds the imageHandler to a resource
 */
var HandlesImages = function (_Trait) {
  _inherits(HandlesImages, _Trait);

  function HandlesImages() {
    _classCallCheck(this, HandlesImages);

    return _possibleConstructorReturn(this, (HandlesImages.__proto__ || Object.getPrototypeOf(HandlesImages)).apply(this, arguments));
  }

  _createClass(HandlesImages, [{
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
}(_Trait2.Trait);

exports.default = HandlesImages;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Thrown upon invocation of an unsupported crud method
 */
var UnsupportedCrudError = function (_Error) {
  _inherits(UnsupportedCrudError, _Error);

  function UnsupportedCrudError() {
    _classCallCheck(this, UnsupportedCrudError);

    return _possibleConstructorReturn(this, (UnsupportedCrudError.__proto__ || Object.getPrototypeOf(UnsupportedCrudError)).apply(this, arguments));
  }

  return UnsupportedCrudError;
}(Error);

exports.default = UnsupportedCrudError;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Invoked upon nodejs specific errors
 */
var NodeError = function (_Error) {
  _inherits(NodeError, _Error);

  function NodeError() {
    _classCallCheck(this, NodeError);

    return _possibleConstructorReturn(this, (NodeError.__proto__ || Object.getPrototypeOf(NodeError)).apply(this, arguments));
  }

  return NodeError;
}(Error);

exports.default = NodeError;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StaticClass2 = __webpack_require__(135);

var _StaticClass3 = _interopRequireDefault(_StaticClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * UUID util class
 * @static
 * @private
 */
var Uuid = function (_StaticClass) {
  _inherits(Uuid, _StaticClass);

  function Uuid() {
    _classCallCheck(this, Uuid);

    return _possibleConstructorReturn(this, (Uuid.__proto__ || Object.getPrototypeOf(Uuid)).apply(this, arguments));
  }

  _createClass(Uuid, null, [{
    key: 'uuid4',

    /**
     * Generate a UUID4 string
     * @returns {string} - Uuid
     */
    value: function uuid4() {
      // Use the secure method if possible
      return typeof crypto !== 'undefined' && crypto.getRandomValues ? Uuid._uuid4Safe() : Uuid._uuid4Unsafe();
    }

    /**
     * Unsafe UUID4 generation using Math.random
     * @returns {string} - Uuid
     *
     * @see http://stackoverflow.com/a/8809472
     * @license MIT|Public Domain
     * @private
     */

  }, {
    key: '_uuid4Unsafe',
    value: function _uuid4Unsafe() {
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
     * Safe UUID4 generation using the crypto api
     * @returns {String} - Uuid
     * @private
     */

  }, {
    key: '_uuid4Safe',
    value: function _uuid4Safe() {
      var data = new Uint8Array(16);

      crypto.getRandomValues(data);

      // cast to array so we can use pop()
      data = [].slice.call(data);

      // Replace 'xx' with a two width base 16 number
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/xx/g, function () {
        // Prepend 00 for padding and grab the last two characters
        return ('00' + data.pop().toString(16)).slice(-2);
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
}(_StaticClass3.default);

exports.default = Uuid;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(175);

__webpack_require__(353);

__webpack_require__(354);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(82)))

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(176);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(182);
__webpack_require__(183);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);
__webpack_require__(190);
__webpack_require__(191);
__webpack_require__(192);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(195);
__webpack_require__(196);
__webpack_require__(197);
__webpack_require__(198);
__webpack_require__(199);
__webpack_require__(200);
__webpack_require__(201);
__webpack_require__(202);
__webpack_require__(203);
__webpack_require__(204);
__webpack_require__(205);
__webpack_require__(206);
__webpack_require__(207);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(210);
__webpack_require__(211);
__webpack_require__(212);
__webpack_require__(213);
__webpack_require__(214);
__webpack_require__(215);
__webpack_require__(216);
__webpack_require__(217);
__webpack_require__(218);
__webpack_require__(219);
__webpack_require__(220);
__webpack_require__(221);
__webpack_require__(222);
__webpack_require__(223);
__webpack_require__(224);
__webpack_require__(225);
__webpack_require__(226);
__webpack_require__(227);
__webpack_require__(228);
__webpack_require__(229);
__webpack_require__(230);
__webpack_require__(231);
__webpack_require__(232);
__webpack_require__(233);
__webpack_require__(234);
__webpack_require__(235);
__webpack_require__(236);
__webpack_require__(237);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(241);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(255);
__webpack_require__(256);
__webpack_require__(258);
__webpack_require__(259);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(262);
__webpack_require__(263);
__webpack_require__(264);
__webpack_require__(267);
__webpack_require__(268);
__webpack_require__(269);
__webpack_require__(270);
__webpack_require__(271);
__webpack_require__(272);
__webpack_require__(273);
__webpack_require__(274);
__webpack_require__(275);
__webpack_require__(276);
__webpack_require__(277);
__webpack_require__(278);
__webpack_require__(279);
__webpack_require__(117);
__webpack_require__(280);
__webpack_require__(281);
__webpack_require__(154);
__webpack_require__(282);
__webpack_require__(283);
__webpack_require__(284);
__webpack_require__(285);
__webpack_require__(286);
__webpack_require__(155);
__webpack_require__(157);
__webpack_require__(158);
__webpack_require__(287);
__webpack_require__(288);
__webpack_require__(289);
__webpack_require__(290);
__webpack_require__(291);
__webpack_require__(292);
__webpack_require__(293);
__webpack_require__(294);
__webpack_require__(295);
__webpack_require__(296);
__webpack_require__(297);
__webpack_require__(298);
__webpack_require__(299);
__webpack_require__(300);
__webpack_require__(301);
__webpack_require__(302);
__webpack_require__(303);
__webpack_require__(304);
__webpack_require__(305);
__webpack_require__(306);
__webpack_require__(307);
__webpack_require__(308);
__webpack_require__(309);
__webpack_require__(310);
__webpack_require__(311);
__webpack_require__(312);
__webpack_require__(313);
__webpack_require__(314);
__webpack_require__(315);
__webpack_require__(316);
__webpack_require__(317);
__webpack_require__(318);
__webpack_require__(319);
__webpack_require__(320);
__webpack_require__(321);
__webpack_require__(322);
__webpack_require__(323);
__webpack_require__(324);
__webpack_require__(325);
__webpack_require__(326);
__webpack_require__(327);
__webpack_require__(328);
__webpack_require__(329);
__webpack_require__(330);
__webpack_require__(331);
__webpack_require__(332);
__webpack_require__(333);
__webpack_require__(334);
__webpack_require__(335);
__webpack_require__(336);
__webpack_require__(337);
__webpack_require__(338);
__webpack_require__(339);
__webpack_require__(340);
__webpack_require__(341);
__webpack_require__(342);
__webpack_require__(343);
__webpack_require__(344);
__webpack_require__(345);
__webpack_require__(346);
__webpack_require__(347);
__webpack_require__(348);
__webpack_require__(351);
__webpack_require__(352);
module.exports = __webpack_require__(26);

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(2)
  , has            = __webpack_require__(12)
  , DESCRIPTORS    = __webpack_require__(6)
  , $export        = __webpack_require__(0)
  , redefine       = __webpack_require__(14)
  , META           = __webpack_require__(33).KEY
  , $fails         = __webpack_require__(3)
  , shared         = __webpack_require__(71)
  , setToStringTag = __webpack_require__(44)
  , uid            = __webpack_require__(35)
  , wks            = __webpack_require__(5)
  , wksExt         = __webpack_require__(138)
  , wksDefine      = __webpack_require__(97)
  , keyOf          = __webpack_require__(177)
  , enumKeys       = __webpack_require__(178)
  , isArray        = __webpack_require__(100)
  , anObject       = __webpack_require__(1)
  , toIObject      = __webpack_require__(16)
  , toPrimitive    = __webpack_require__(23)
  , createDesc     = __webpack_require__(32)
  , _create        = __webpack_require__(39)
  , gOPNExt        = __webpack_require__(141)
  , $GOPD          = __webpack_require__(18)
  , $DP            = __webpack_require__(7)
  , $keys          = __webpack_require__(37)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(40).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(55).f  = $propertyIsEnumerable;
  __webpack_require__(73).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(36)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
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
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(13)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(37)
  , toIObject = __webpack_require__(16);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(37)
  , gOPS    = __webpack_require__(73)
  , pIE     = __webpack_require__(55);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(39)});

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(7).f});

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(140)});

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(16)
  , $getOwnPropertyDescriptor = __webpack_require__(18).f;

__webpack_require__(24)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(11)
  , $getPrototypeOf = __webpack_require__(19);

__webpack_require__(24)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(11)
  , $keys    = __webpack_require__(37);

__webpack_require__(24)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(24)('getOwnPropertyNames', function(){
  return __webpack_require__(141).f;
});

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(4)
  , meta     = __webpack_require__(33).onFreeze;

__webpack_require__(24)('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(4)
  , meta     = __webpack_require__(33).onFreeze;

__webpack_require__(24)('seal', function($seal){
  return function seal(it){
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(4)
  , meta     = __webpack_require__(33).onFreeze;

__webpack_require__(24)('preventExtensions', function($preventExtensions){
  return function preventExtensions(it){
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(4);

__webpack_require__(24)('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(4);

__webpack_require__(24)('isSealed', function($isSealed){
  return function isSealed(it){
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(4);

__webpack_require__(24)('isExtensible', function($isExtensible){
  return function isExtensible(it){
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(142)});

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(0);
$export($export.S, 'Object', {is: __webpack_require__(143)});

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(0);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(102).set});

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(56)
  , test    = {};
test[__webpack_require__(5)('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  __webpack_require__(14)(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(0);

$export($export.P, 'Function', {bind: __webpack_require__(144)});

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7).f
  , createDesc = __webpack_require__(32)
  , has        = __webpack_require__(12)
  , FProto     = Function.prototype
  , nameRE     = /^\s*function ([^ (]*)/
  , NAME       = 'name';

var isExtensible = Object.isExtensible || function(){
  return true;
};

// 19.2.4.2 name
NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
  configurable: true,
  get: function(){
    try {
      var that = this
        , name = ('' + that).match(nameRE)[1];
      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
      return name;
    } catch(e){
      return '';
    }
  }
});

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject       = __webpack_require__(4)
  , getPrototypeOf = __webpack_require__(19)
  , HAS_INSTANCE   = __webpack_require__(5)('hasInstance')
  , FunctionProto  = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(7).f(FunctionProto, HAS_INSTANCE, {value: function(O){
  if(typeof this != 'function' || !isObject(O))return false;
  if(!isObject(this.prototype))return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
  return false;
}});

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var $export   = __webpack_require__(0)
  , $parseInt = __webpack_require__(145);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var $export     = __webpack_require__(0)
  , $parseFloat = __webpack_require__(146);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global            = __webpack_require__(2)
  , has               = __webpack_require__(12)
  , cof               = __webpack_require__(20)
  , inheritIfRequired = __webpack_require__(104)
  , toPrimitive       = __webpack_require__(23)
  , fails             = __webpack_require__(3)
  , gOPN              = __webpack_require__(40).f
  , gOPD              = __webpack_require__(18).f
  , dP                = __webpack_require__(7).f
  , $trim             = __webpack_require__(45).trim
  , NUMBER            = 'Number'
  , $Number           = global[NUMBER]
  , Base              = $Number
  , proto             = $Number.prototype
  // Opera ~12 has broken Object#toString
  , BROKEN_COF        = cof(__webpack_require__(39)(proto)) == NUMBER
  , TRIM              = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function(argument){
  var it = toPrimitive(argument, false);
  if(typeof it == 'string' && it.length > 2){
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0)
      , third, radix, maxCode;
    if(first === 43 || first === 45){
      third = it.charCodeAt(2);
      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if(first === 48){
      switch(it.charCodeAt(1)){
        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default : return +it;
      }
      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if(code < 48 || code > maxCode)return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
  $Number = function Number(value){
    var it = arguments.length < 1 ? 0 : value
      , that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++){
    if(has(Base, key = keys[j]) && !has($Number, key)){
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(14)(global, NUMBER, $Number);
}

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export      = __webpack_require__(0)
  , toInteger    = __webpack_require__(34)
  , aNumberValue = __webpack_require__(147)
  , repeat       = __webpack_require__(105)
  , $toFixed     = 1..toFixed
  , floor        = Math.floor
  , data         = [0, 0, 0, 0, 0, 0]
  , ERROR        = 'Number.toFixed: incorrect invocation!'
  , ZERO         = '0';

var multiply = function(n, c){
  var i  = -1
    , c2 = c;
  while(++i < 6){
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function(n){
  var i = 6
    , c = 0;
  while(--i >= 0){
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function(){
  var i = 6
    , s = '';
  while(--i >= 0){
    if(s !== '' || i === 0 || data[i] !== 0){
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function(x, n, acc){
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x){
  var n  = 0
    , x2 = x;
  while(x2 >= 4096){
    n += 12;
    x2 /= 4096;
  }
  while(x2 >= 2){
    n  += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128..toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(3)(function(){
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits){
    var x = aNumberValue(this, ERROR)
      , f = toInteger(fractionDigits)
      , s = ''
      , m = ZERO
      , e, z, j, k;
    if(f < 0 || f > 20)throw RangeError(ERROR);
    if(x != x)return 'NaN';
    if(x <= -1e21 || x >= 1e21)return String(x);
    if(x < 0){
      s = '-';
      x = -x;
    }
    if(x > 1e-21){
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if(e > 0){
        multiply(0, z);
        j = f;
        while(j >= 7){
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while(j >= 23){
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if(f > 0){
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export      = __webpack_require__(0)
  , $fails       = __webpack_require__(3)
  , aNumberValue = __webpack_require__(147)
  , $toPrecision = 1..toPrecision;

$export($export.P + $export.F * ($fails(function(){
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function(){
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision){
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
  }
});

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export   = __webpack_require__(0)
  , _isFinite = __webpack_require__(2).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {isInteger: __webpack_require__(148)});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export   = __webpack_require__(0)
  , isInteger = __webpack_require__(148)
  , abs       = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var $export     = __webpack_require__(0)
  , $parseFloat = __webpack_require__(146);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var $export   = __webpack_require__(0)
  , $parseInt = __webpack_require__(145);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(0)
  , log1p   = __webpack_require__(149)
  , sqrt    = Math.sqrt
  , $acosh  = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(0)
  , $asinh  = Math.asinh;

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0 
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(0)
  , $atanh  = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0 
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(0)
  , sign    = __webpack_require__(106);

$export($export.S, 'Math', {
  cbrt: function cbrt(x){
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(0)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(0)
  , $expm1  = __webpack_require__(107);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export   = __webpack_require__(0)
  , sign      = __webpack_require__(106)
  , pow       = Math.pow
  , EPSILON   = pow(2, -52)
  , EPSILON32 = pow(2, -23)
  , MAX32     = pow(2, 127) * (2 - EPSILON32)
  , MIN32     = pow(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


$export($export.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = sign(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  }
});

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(0)
  , abs     = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , i    = 0
      , aLen = arguments.length
      , larg = 0
      , arg, div;
    while(i < aLen){
      arg = abs(arguments[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(0)
  , $imul   = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(3)(function(){
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {log1p: __webpack_require__(149)});

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {sign: __webpack_require__(106)});

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(0)
  , expm1   = __webpack_require__(107)
  , exp     = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(3)(function(){
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(0)
  , expm1   = __webpack_require__(107)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var $export        = __webpack_require__(0)
  , toIndex        = __webpack_require__(38)
  , fromCharCode   = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res  = []
      , aLen = arguments.length
      , i    = 0
      , code;
    while(aLen > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var $export   = __webpack_require__(0)
  , toIObject = __webpack_require__(16)
  , toLength  = __webpack_require__(9);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl  = toIObject(callSite.raw)
      , len  = toLength(tpl.length)
      , aLen = arguments.length
      , res  = []
      , i    = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < aLen)res.push(String(arguments[i]));
    } return res.join('');
  }
});

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(45)('trim', function($trim){
  return function trim(){
    return $trim(this, 3);
  };
});

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(108)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(109)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $at     = __webpack_require__(108)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at(this, pos);
  }
});

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export   = __webpack_require__(0)
  , toLength  = __webpack_require__(9)
  , context   = __webpack_require__(111)
  , ENDS_WITH = 'endsWith'
  , $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(112)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = context(this, searchString, ENDS_WITH)
      , endPosition = arguments.length > 1 ? arguments[1] : undefined
      , len    = toLength(that.length)
      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
      , search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export  = __webpack_require__(0)
  , context  = __webpack_require__(111)
  , INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(112)(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(105)
});

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export     = __webpack_require__(0)
  , toLength    = __webpack_require__(9)
  , context     = __webpack_require__(111)
  , STARTS_WITH = 'startsWith'
  , $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(112)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = context(this, searchString, STARTS_WITH)
      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
      , search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(17)('anchor', function(createHTML){
  return function anchor(name){
    return createHTML(this, 'a', 'name', name);
  }
});

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(17)('big', function(createHTML){
  return function big(){
    return createHTML(this, 'big', '', '');
  }
});

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(17)('blink', function(createHTML){
  return function blink(){
    return createHTML(this, 'blink', '', '');
  }
});

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(17)('bold', function(createHTML){
  return function bold(){
    return createHTML(this, 'b', '', '');
  }
});

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(17)('fixed', function(createHTML){
  return function fixed(){
    return createHTML(this, 'tt', '', '');
  }
});

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(17)('fontcolor', function(createHTML){
  return function fontcolor(color){
    return createHTML(this, 'font', 'color', color);
  }
});

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(17)('fontsize', function(createHTML){
  return function fontsize(size){
    return createHTML(this, 'font', 'size', size);
  }
});

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(17)('italics', function(createHTML){
  return function italics(){
    return createHTML(this, 'i', '', '');
  }
});

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(17)('link', function(createHTML){
  return function link(url){
    return createHTML(this, 'a', 'href', url);
  }
});

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(17)('small', function(createHTML){
  return function small(){
    return createHTML(this, 'small', '', '');
  }
});

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(17)('strike', function(createHTML){
  return function strike(){
    return createHTML(this, 'strike', '', '');
  }
});

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(17)('sub', function(createHTML){
  return function sub(){
    return createHTML(this, 'sub', '', '');
  }
});

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(17)('sup', function(createHTML){
  return function sup(){
    return createHTML(this, 'sup', '', '');
  }
});

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(0);

$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export     = __webpack_require__(0)
  , toObject    = __webpack_require__(11)
  , toPrimitive = __webpack_require__(23);

$export($export.P + $export.F * __webpack_require__(3)(function(){
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
}), 'Date', {
  toJSON: function toJSON(key){
    var O  = toObject(this)
      , pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(0)
  , fails   = __webpack_require__(3)
  , getTime = Date.prototype.getTime;

var lz = function(num){
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (fails(function(){
  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
}) || !fails(function(){
  new Date(NaN).toISOString();
})), 'Date', {
  toISOString: function toISOString(){
    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
    var d = this
      , y = d.getUTCFullYear()
      , m = d.getUTCMilliseconds()
      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }
});

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto    = Date.prototype
  , INVALID_DATE = 'Invalid Date'
  , TO_STRING    = 'toString'
  , $toString    = DateProto[TO_STRING]
  , getTime      = DateProto.getTime;
if(new Date(NaN) + '' != INVALID_DATE){
  __webpack_require__(14)(DateProto, TO_STRING, function toString(){
    var value = getTime.call(this);
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(5)('toPrimitive')
  , proto        = Date.prototype;

if(!(TO_PRIMITIVE in proto))__webpack_require__(13)(proto, TO_PRIMITIVE, __webpack_require__(257));

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject    = __webpack_require__(1)
  , toPrimitive = __webpack_require__(23)
  , NUMBER      = 'number';

module.exports = function(hint){
  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(0);

$export($export.S, 'Array', {isArray: __webpack_require__(100)});

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(27)
  , $export        = __webpack_require__(0)
  , toObject       = __webpack_require__(11)
  , call           = __webpack_require__(150)
  , isArrayIter    = __webpack_require__(113)
  , toLength       = __webpack_require__(9)
  , createProperty = __webpack_require__(114)
  , getIterFn      = __webpack_require__(115);

$export($export.S + $export.F * !__webpack_require__(76)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export        = __webpack_require__(0)
  , createProperty = __webpack_require__(114);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(3)(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , aLen   = arguments.length
      , result = new (typeof this == 'function' ? this : Array)(aLen);
    while(aLen > index)createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export   = __webpack_require__(0)
  , toIObject = __webpack_require__(16)
  , arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(54) != Object || !__webpack_require__(22)(arrayJoin)), 'Array', {
  join: function join(separator){
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export    = __webpack_require__(0)
  , html       = __webpack_require__(101)
  , cof        = __webpack_require__(20)
  , toIndex    = __webpack_require__(38)
  , toLength   = __webpack_require__(9)
  , arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(3)(function(){
  if(html)arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end){
    var len   = toLength(this.length)
      , klass = cof(this);
    end = end === undefined ? len : end;
    if(klass == 'Array')return arraySlice.call(this, begin, end);
    var start  = toIndex(begin, len)
      , upTo   = toIndex(end, len)
      , size   = toLength(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++)cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export   = __webpack_require__(0)
  , aFunction = __webpack_require__(15)
  , toObject  = __webpack_require__(11)
  , fails     = __webpack_require__(3)
  , $sort     = [].sort
  , test      = [1, 2, 3];

$export($export.P + $export.F * (fails(function(){
  // IE8-
  test.sort(undefined);
}) || !fails(function(){
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(22)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn){
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export  = __webpack_require__(0)
  , $forEach = __webpack_require__(25)(0)
  , STRICT   = __webpack_require__(22)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */){
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(266);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4)
  , isArray  = __webpack_require__(100)
  , SPECIES  = __webpack_require__(5)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $map    = __webpack_require__(25)(1);

$export($export.P + $export.F * !__webpack_require__(22)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */){
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $filter = __webpack_require__(25)(2);

$export($export.P + $export.F * !__webpack_require__(22)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */){
    return $filter(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $some   = __webpack_require__(25)(3);

$export($export.P + $export.F * !__webpack_require__(22)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */){
    return $some(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $every  = __webpack_require__(25)(4);

$export($export.P + $export.F * !__webpack_require__(22)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */){
    return $every(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $reduce = __webpack_require__(151);

$export($export.P + $export.F * !__webpack_require__(22)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $reduce = __webpack_require__(151);

$export($export.P + $export.F * !__webpack_require__(22)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export       = __webpack_require__(0)
  , $indexOf      = __webpack_require__(72)(false)
  , $native       = [].indexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(22)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export       = __webpack_require__(0)
  , toIObject     = __webpack_require__(16)
  , toInteger     = __webpack_require__(34)
  , toLength      = __webpack_require__(9)
  , $native       = [].lastIndexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(22)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
    // convert -0 to +0
    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
    var O      = toIObject(this)
      , length = toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
    if(index < 0)index = length + index;
    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
    return -1;
  }
});

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', {copyWithin: __webpack_require__(152)});

__webpack_require__(47)('copyWithin');

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', {fill: __webpack_require__(116)});

__webpack_require__(47)('fill');

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(0)
  , $find   = __webpack_require__(25)(5)
  , KEY     = 'find'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(47)(KEY);

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(0)
  , $find   = __webpack_require__(25)(6)
  , KEY     = 'findIndex'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(47)(KEY);

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('Array');

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var global            = __webpack_require__(2)
  , inheritIfRequired = __webpack_require__(104)
  , dP                = __webpack_require__(7).f
  , gOPN              = __webpack_require__(40).f
  , isRegExp          = __webpack_require__(75)
  , $flags            = __webpack_require__(77)
  , $RegExp           = global.RegExp
  , Base              = $RegExp
  , proto             = $RegExp.prototype
  , re1               = /a/g
  , re2               = /a/g
  // "new" creates a new object, old webkit buggy here
  , CORRECT_NEW       = new $RegExp(re1) !== re1;

if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(3)(function(){
  re2[__webpack_require__(5)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))){
  $RegExp = function RegExp(p, f){
    var tiRE = this instanceof $RegExp
      , piRE = isRegExp(p)
      , fiU  = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function(key){
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function(){ return Base[key]; },
      set: function(it){ Base[key] = it; }
    });
  };
  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(14)(global, 'RegExp', $RegExp);
}

__webpack_require__(41)('RegExp');

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(154);
var anObject    = __webpack_require__(1)
  , $flags      = __webpack_require__(77)
  , DESCRIPTORS = __webpack_require__(6)
  , TO_STRING   = 'toString'
  , $toString   = /./[TO_STRING];

var define = function(fn){
  __webpack_require__(14)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if(__webpack_require__(3)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
  define(function toString(){
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if($toString.name != TO_STRING){
  define(function toString(){
    return $toString.call(this);
  });
}

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(78)('match', 1, function(defined, MATCH, $match){
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(78)('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(78)('search', 1, function(defined, SEARCH, $search){
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(78)('split', 2, function(defined, SPLIT, $split){
  'use strict';
  var isRegExp   = __webpack_require__(75)
    , _split     = $split
    , $push      = [].push
    , $SPLIT     = 'split'
    , LENGTH     = 'length'
    , LAST_INDEX = 'lastIndex';
  if(
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ){
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function(separator, limit){
      var string = String(this);
      if(separator === undefined && limit === 0)return [];
      // If `separator` is not a regex, use native split
      if(!isRegExp(separator))return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while(match = separatorCopy.exec(string)){
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if(lastIndex > lastLastIndex){
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
          });
          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if(output[LENGTH] >= splitLimit)break;
        }
        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if(lastLastIndex === string[LENGTH]){
        if(lastLength || !separatorCopy.test(''))output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
    $split = function(separator, limit){
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit){
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(36)
  , global             = __webpack_require__(2)
  , ctx                = __webpack_require__(27)
  , classof            = __webpack_require__(56)
  , $export            = __webpack_require__(0)
  , isObject           = __webpack_require__(4)
  , aFunction          = __webpack_require__(15)
  , anInstance         = __webpack_require__(42)
  , forOf              = __webpack_require__(48)
  , speciesConstructor = __webpack_require__(118)
  , task               = __webpack_require__(119).set
  , microtask          = __webpack_require__(120)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(43)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(44)($Promise, PROMISE);
__webpack_require__(41)(PROMISE);
Wrapper = __webpack_require__(26)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(76)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(159);

// 23.4 WeakSet Objects
__webpack_require__(79)('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export      = __webpack_require__(0)
  , $typed       = __webpack_require__(80)
  , buffer       = __webpack_require__(121)
  , anObject     = __webpack_require__(1)
  , toIndex      = __webpack_require__(38)
  , toLength     = __webpack_require__(9)
  , isObject     = __webpack_require__(4)
  , ArrayBuffer  = __webpack_require__(2).ArrayBuffer
  , speciesConstructor = __webpack_require__(118)
  , $ArrayBuffer = buffer.ArrayBuffer
  , $DataView    = buffer.DataView
  , $isView      = $typed.ABV && ArrayBuffer.isView
  , $slice       = $ArrayBuffer.prototype.slice
  , VIEW         = $typed.VIEW
  , ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it){
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(3)(function(){
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end){
    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
    var len    = anObject(this).byteLength
      , first  = toIndex(start, len)
      , final  = toIndex(end === undefined ? len : end, len)
      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
      , viewS  = new $DataView(this)
      , viewT  = new $DataView(result)
      , index  = 0;
    while(first < final){
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(41)(ARRAY_BUFFER);

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
$export($export.G + $export.W + $export.F * !__webpack_require__(80).ABV, {
  DataView: __webpack_require__(121).DataView
});

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Int8', 1, function(init){
  return function Int8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Uint8', 1, function(init){
  return function Uint8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Uint8', 1, function(init){
  return function Uint8ClampedArray(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
}, true);

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Int16', 2, function(init){
  return function Int16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Uint16', 2, function(init){
  return function Uint16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Int32', 4, function(init){
  return function Int32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Uint32', 4, function(init){
  return function Uint32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Float32', 4, function(init){
  return function Float32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Float64', 8, function(init){
  return function Float64Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export   = __webpack_require__(0)
  , aFunction = __webpack_require__(15)
  , anObject  = __webpack_require__(1)
  , rApply    = (__webpack_require__(2).Reflect || {}).apply
  , fApply    = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(3)(function(){
  rApply(function(){});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    var T = aFunction(target)
      , L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export    = __webpack_require__(0)
  , create     = __webpack_require__(39)
  , aFunction  = __webpack_require__(15)
  , anObject   = __webpack_require__(1)
  , isObject   = __webpack_require__(4)
  , fails      = __webpack_require__(3)
  , bind       = __webpack_require__(144)
  , rConstruct = (__webpack_require__(2).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function(){
  function F(){}
  return !(rConstruct(function(){}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function(){
  rConstruct(function(){});
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
    if(Target == newTarget){
      // w/o altered newTarget, optimization for 0-4 arguments
      switch(args.length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args));
    }
    // with altered newTarget, not support built-in constructors
    var proto    = newTarget.prototype
      , instance = create(isObject(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP          = __webpack_require__(7)
  , $export     = __webpack_require__(0)
  , anObject    = __webpack_require__(1)
  , toPrimitive = __webpack_require__(23);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(3)(function(){
  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export  = __webpack_require__(0)
  , gOPD     = __webpack_require__(18).f
  , anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export  = __webpack_require__(0)
  , anObject = __webpack_require__(1);
var Enumerate = function(iterated){
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = []       // keys
    , key;
  for(key in iterated)keys.push(key);
};
__webpack_require__(110)(Enumerate, 'Object', function(){
  var that = this
    , keys = that._k
    , key;
  do {
    if(that._i >= keys.length)return {value: undefined, done: true};
  } while(!((key = keys[that._i++]) in that._t));
  return {value: key, done: false};
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target){
    return new Enumerate(target);
  }
});

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD           = __webpack_require__(18)
  , getPrototypeOf = __webpack_require__(19)
  , has            = __webpack_require__(12)
  , $export        = __webpack_require__(0)
  , isObject       = __webpack_require__(4)
  , anObject       = __webpack_require__(1);

function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(anObject(target) === receiver)return target[propertyKey];
  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {get: get});

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD     = __webpack_require__(18)
  , $export  = __webpack_require__(0)
  , anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return gOPD.f(anObject(target), propertyKey);
  }
});

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export  = __webpack_require__(0)
  , getProto = __webpack_require__(19)
  , anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(anObject(target));
  }
});

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export       = __webpack_require__(0)
  , anObject      = __webpack_require__(1)
  , $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {ownKeys: __webpack_require__(160)});

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export            = __webpack_require__(0)
  , anObject           = __webpack_require__(1)
  , $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    anObject(target);
    try {
      if($preventExtensions)$preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP             = __webpack_require__(7)
  , gOPD           = __webpack_require__(18)
  , getPrototypeOf = __webpack_require__(19)
  , has            = __webpack_require__(12)
  , $export        = __webpack_require__(0)
  , createDesc     = __webpack_require__(32)
  , anObject       = __webpack_require__(1)
  , isObject       = __webpack_require__(4);

function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = gOPD.f(anObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject(proto = getPrototypeOf(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if(has(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject(receiver))return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {set: set});

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export  = __webpack_require__(0)
  , setProto = __webpack_require__(102);

if(setProto)$export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export   = __webpack_require__(0)
  , $includes = __webpack_require__(72)(true);

$export($export.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(47)('includes');

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(0)
  , $at     = __webpack_require__(108)(true);

$export($export.P, 'String', {
  at: function at(pos){
    return $at(this, pos);
  }
});

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0)
  , $pad    = __webpack_require__(161);

$export($export.P, 'String', {
  padStart: function padStart(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0)
  , $pad    = __webpack_require__(161);

$export($export.P, 'String', {
  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(45)('trimLeft', function($trim){
  return function trimLeft(){
    return $trim(this, 1);
  };
}, 'trimStart');

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(45)('trimRight', function($trim){
  return function trimRight(){
    return $trim(this, 2);
  };
}, 'trimEnd');

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export     = __webpack_require__(0)
  , defined     = __webpack_require__(21)
  , toLength    = __webpack_require__(9)
  , isRegExp    = __webpack_require__(75)
  , getFlags    = __webpack_require__(77)
  , RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function(regexp, string){
  this._r = regexp;
  this._s = string;
};

__webpack_require__(110)($RegExpStringIterator, 'RegExp String', function next(){
  var match = this._r.exec(this._s);
  return {value: match, done: match === null};
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp){
    defined(this);
    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
    var S     = String(this)
      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97)('asyncIterator');

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97)('observable');

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export        = __webpack_require__(0)
  , ownKeys        = __webpack_require__(160)
  , toIObject      = __webpack_require__(16)
  , gOPD           = __webpack_require__(18)
  , createProperty = __webpack_require__(114);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject(object)
      , getDesc = gOPD.f
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key;
    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
    return result;
  }
});

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0)
  , $values = __webpack_require__(162)(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export  = __webpack_require__(0)
  , $entries = __webpack_require__(162)(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export         = __webpack_require__(0)
  , toObject        = __webpack_require__(11)
  , aFunction       = __webpack_require__(15)
  , $defineProperty = __webpack_require__(7);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(6) && $export($export.P + __webpack_require__(81), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter){
    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
  }
});

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export         = __webpack_require__(0)
  , toObject        = __webpack_require__(11)
  , aFunction       = __webpack_require__(15)
  , $defineProperty = __webpack_require__(7);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(6) && $export($export.P + __webpack_require__(81), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter){
    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
  }
});

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export                  = __webpack_require__(0)
  , toObject                 = __webpack_require__(11)
  , toPrimitive              = __webpack_require__(23)
  , getPrototypeOf           = __webpack_require__(19)
  , getOwnPropertyDescriptor = __webpack_require__(18).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(6) && $export($export.P + __webpack_require__(81), 'Object', {
  __lookupGetter__: function __lookupGetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.get;
    } while(O = getPrototypeOf(O));
  }
});

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export                  = __webpack_require__(0)
  , toObject                 = __webpack_require__(11)
  , toPrimitive              = __webpack_require__(23)
  , getPrototypeOf           = __webpack_require__(19)
  , getOwnPropertyDescriptor = __webpack_require__(18).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(6) && $export($export.P + __webpack_require__(81), 'Object', {
  __lookupSetter__: function __lookupSetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.set;
    } while(O = getPrototypeOf(O));
  }
});

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(0);

$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(163)('Map')});

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(0);

$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(163)('Set')});

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-global
var $export = __webpack_require__(0);

$export($export.S, 'System', {global: __webpack_require__(2)});

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(0)
  , cof     = __webpack_require__(20);

$export($export.S, 'Error', {
  isError: function isError(it){
    return cof(it) === 'Error';
  }
});

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  imulh: function imulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >> 16
      , v1 = $v >> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  umulh: function umulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >>> 16
      , v1 = $v >>> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var metadata                  = __webpack_require__(29)
  , anObject                  = __webpack_require__(1)
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
}});

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__(29)
  , anObject               = __webpack_require__(1)
  , toMetaKey              = metadata.key
  , getOrCreateMetadataMap = metadata.map
  , store                  = metadata.store;

metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
  if(metadataMap.size)return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
}});

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__(29)
  , anObject               = __webpack_require__(1)
  , getPrototypeOf         = __webpack_require__(19)
  , ordinaryHasOwnMetadata = metadata.has
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

var ordinaryGetMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var Set                     = __webpack_require__(157)
  , from                    = __webpack_require__(164)
  , metadata                = __webpack_require__(29)
  , anObject                = __webpack_require__(1)
  , getPrototypeOf          = __webpack_require__(19)
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

var ordinaryMetadataKeys = function(O, P){
  var oKeys  = ordinaryOwnMetadataKeys(O, P)
    , parent = getPrototypeOf(O);
  if(parent === null)return oKeys;
  var pKeys  = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__(29)
  , anObject               = __webpack_require__(1)
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var metadata                = __webpack_require__(29)
  , anObject                = __webpack_require__(1)
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__(29)
  , anObject               = __webpack_require__(1)
  , getPrototypeOf         = __webpack_require__(19)
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

var ordinaryHasMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__(29)
  , anObject               = __webpack_require__(1)
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var metadata                  = __webpack_require__(29)
  , anObject                  = __webpack_require__(1)
  , aFunction                 = __webpack_require__(15)
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({metadata: function metadata(metadataKey, metadataValue){
  return function decorator(target, targetKey){
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
}});

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export   = __webpack_require__(0)
  , microtask = __webpack_require__(120)()
  , process   = __webpack_require__(2).process
  , isNode    = __webpack_require__(20)(process) == 'process';

$export($export.G, {
  asap: function asap(fn){
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export     = __webpack_require__(0)
  , global      = __webpack_require__(2)
  , core        = __webpack_require__(26)
  , microtask   = __webpack_require__(120)()
  , OBSERVABLE  = __webpack_require__(5)('observable')
  , aFunction   = __webpack_require__(15)
  , anObject    = __webpack_require__(1)
  , anInstance  = __webpack_require__(42)
  , redefineAll = __webpack_require__(43)
  , hide        = __webpack_require__(13)
  , forOf       = __webpack_require__(48)
  , RETURN      = forOf.RETURN;

var getMethod = function(fn){
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function(subscription){
  var cleanup = subscription._c;
  if(cleanup){
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function(subscription){
  return subscription._o === undefined;
};

var closeSubscription = function(subscription){
  if(!subscriptionClosed(subscription)){
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function(observer, subscriber){
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup      = subscriber(observer)
      , subscription = cleanup;
    if(cleanup != null){
      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch(e){
    observer.error(e);
    return;
  } if(subscriptionClosed(this))cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe(){ closeSubscription(this); }
});

var SubscriptionObserver = function(subscription){
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if(m)return m.call(observer, value);
      } catch(e){
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value){
    var subscription = this._s;
    if(subscriptionClosed(subscription))throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if(!m)throw value;
      value = m.call(observer, value);
    } catch(e){
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch(e){
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber){
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer){
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn){
    var that = this;
    return new (core.Promise || global.Promise)(function(resolve, reject){
      aFunction(fn);
      var subscription = that.subscribe({
        next : function(value){
          try {
            return fn(value);
          } catch(e){
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x){
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if(method){
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function(observer){
        return observable.subscribe(observer);
      });
    }
    return new C(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          try {
            if(forOf(x, false, function(it){
              observer.next(it);
              if(done)return RETURN;
            }) === RETURN)return;
          } catch(e){
            if(done)throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  },
  of: function of(){
    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          for(var i = 0; i < items.length; ++i){
            observer.next(items[i]);
            if(done)return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function(){ return this; });

$export($export.G, {Observable: $Observable});

__webpack_require__(41)('Observable');

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global     = __webpack_require__(2)
  , $export    = __webpack_require__(0)
  , invoke     = __webpack_require__(74)
  , partial    = __webpack_require__(349)
  , navigator  = global.navigator
  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout:  wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var path      = __webpack_require__(350)
  , invoke    = __webpack_require__(74)
  , aFunction = __webpack_require__(15);
module.exports = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(aLen > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0)
  , $task   = __webpack_require__(119);
$export($export.G + $export.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators    = __webpack_require__(117)
  , redefine      = __webpack_require__(14)
  , global        = __webpack_require__(2)
  , hide          = __webpack_require__(13)
  , Iterators     = __webpack_require__(46)
  , wks           = __webpack_require__(5)
  , ITERATOR      = wks('iterator')
  , TO_STRING_TAG = wks('toStringTag')
  , ArrayValues   = Iterators.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
  }
}

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
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

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
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
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(82)))

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(355);
module.exports = __webpack_require__(26).RegExp.escape;

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(0)
  , $re     = __webpack_require__(356)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ }),
/* 356 */
/***/ (function(module, exports) {

module.exports = function(regExp, replace){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(it).replace(regExp, replacer);
  };
};

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImplicitFlow2 = __webpack_require__(165);

var _ImplicitFlow3 = _interopRequireDefault(_ImplicitFlow2);

var _OAuthToken = __webpack_require__(69);

var _OAuthToken2 = _interopRequireDefault(_OAuthToken);

var _OAuthError = __webpack_require__(68);

var _OAuthError2 = _interopRequireDefault(_OAuthError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Implicit OAuth flow using a pop-up.
 */
var ImplicitFlowPopup = function (_ImplicitFlow) {
  _inherits(ImplicitFlowPopup, _ImplicitFlow);

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

    _classCallCheck(this, ImplicitFlowPopup);

    var _this = _possibleConstructorReturn(this, (ImplicitFlowPopup.__proto__ || Object.getPrototypeOf(ImplicitFlowPopup)).call(this, clientId, callbackUrl, scopes, useState));

    _this.windowOptions = windowOptions;

    if (window.name === ImplicitFlowPopup.popupWindowName) {
      var data = _this.token.toResponseObject() || _this._getAnchorParams();

      localStorage.setItem(ImplicitFlowPopup.localStorageKey, JSON.stringify(data));

      window.close();
    }
    return _this;
  }

  /**
   * Popup window name
   * @returns {String} - window.name of the created pop-up
   * @constant
   */


  _createClass(ImplicitFlowPopup, [{
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
            clearInterval(ticker);

            var data = JSON.parse(localStorage.getItem(ImplicitFlowPopup.localStorageKey));

            localStorage.removeItem(ImplicitFlowPopup.localStorageKey);

            if (!data) {
              reject(new _OAuthError2.default('window_closed', 'Pop-up window was closed'));
            } else if (data.error) {
              reject(new _OAuthError2.default(data.error, data.message));
            } else {
              resolve(_this2.token = _OAuthToken2.default.fromResponseObject(data));
            }
          }
        }, 500);
      });
    }
  }], [{
    key: 'popupWindowName',
    get: function get() {
      return 'm4n_api_auth';
    }

    /**
     * localStorage key name for temporarily storing the token
     * @returns {String} - key name
     * @constant
     */

  }, {
    key: 'localStorageKey',
    get: function get() {
      return 'm4n_api_auth_response';
    }
  }]);

  return ImplicitFlowPopup;
}(_ImplicitFlow3.default);

exports.default = ImplicitFlowPopup;

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OAuth2 = __webpack_require__(53);

var _OAuth3 = _interopRequireDefault(_OAuth2);

var _OAuthToken = __webpack_require__(69);

var _OAuthToken2 = _interopRequireDefault(_OAuthToken);

var _requests = __webpack_require__(59);

var _OAuthError = __webpack_require__(68);

var _OAuthError2 = _interopRequireDefault(_OAuthError);

var _node = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Password authentication flow
 */
var PasswordFlow = function (_OAuth) {
  _inherits(PasswordFlow, _OAuth);

  /**
   * @param {string} clientId - OAuth client id
   * @param {string} secret - OAuth secret
   * @param {string} username - Valid username (email)
   * @param {string} password - Valid password
   * @param {Array<string>} scopes - A list of required scopes
   */
  function PasswordFlow(clientId, secret, username, password) {
    var scopes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['*'];

    _classCallCheck(this, PasswordFlow);

    var _this = _possibleConstructorReturn(this, (PasswordFlow.__proto__ || Object.getPrototypeOf(PasswordFlow)).call(this, clientId, scopes));

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


  _createClass(PasswordFlow, [{
    key: 'authenticate',


    /**
     * Authenticate
     * @returns {Promise} - Promise resolves with {@link OAuthToken} and rejects with {@link OAuthError}
     */
    value: function authenticate() {
      var _this2 = this;

      var url = this.host + this._path;
      var query = {
        'grant_type': '_password',
        'client_id': this.clientId,
        'client_secret': this._secret,
        'username': this._username,
        'password': this._password,
        'scope': this.scopes.join(' ')
      };

      return new Promise(function (resolve, reject) {
        (0, _requests.makeRequest)(url, 'POST', (0, _requests.encodeQueryString)(query)).then(function (request) {
          var data = JSON.parse(request.responseText);

          _this2.token = _OAuthToken2.default.fromResponseObject(data);
          _this2.token.scopes = _this2.scopes;
          resolve(_this2.token);
        }).catch(function (request) {
          var data = JSON.parse(request.responseText);

          reject(new _OAuthError2.default(data['error'], data['message']));
        });
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
}(_OAuth3.default);

exports.default = PasswordFlow;

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = exports.SvgSetType = exports.SvgSet = exports.Svg = exports.PlaceName = exports.Permission = exports.Organisation = exports.Notification = exports.MapstyleSet = exports.Mapstyle = exports.Layer = exports.Language = exports.JobType = exports.JobShare = exports.JobRevision = exports.JobResult = exports.Job = exports.InsetMap = exports.Highlight = exports.FontFamily = exports.Font = exports.Feature = exports.Faq = exports.DimensionSet = exports.Dimension = exports.Contract = exports.Color = exports.Choropleth = undefined;

var _Choropleth2 = __webpack_require__(122);

var _Choropleth3 = _interopRequireDefault(_Choropleth2);

var _Color2 = __webpack_require__(58);

var _Color3 = _interopRequireDefault(_Color2);

var _Contract2 = __webpack_require__(84);

var _Contract3 = _interopRequireDefault(_Contract2);

var _Dimension2 = __webpack_require__(85);

var _Dimension3 = _interopRequireDefault(_Dimension2);

var _DimensionSet2 = __webpack_require__(60);

var _DimensionSet3 = _interopRequireDefault(_DimensionSet2);

var _Faq2 = __webpack_require__(128);

var _Faq3 = _interopRequireDefault(_Faq2);

var _Feature2 = __webpack_require__(62);

var _Feature3 = _interopRequireDefault(_Feature2);

var _Font2 = __webpack_require__(86);

var _Font3 = _interopRequireDefault(_Font2);

var _FontFamily2 = __webpack_require__(63);

var _FontFamily3 = _interopRequireDefault(_FontFamily2);

var _Highlight2 = __webpack_require__(129);

var _Highlight3 = _interopRequireDefault(_Highlight2);

var _InsetMap2 = __webpack_require__(130);

var _InsetMap3 = _interopRequireDefault(_InsetMap2);

var _Job2 = __webpack_require__(91);

var _Job3 = _interopRequireDefault(_Job2);

var _JobResult2 = __webpack_require__(92);

var _JobResult3 = _interopRequireDefault(_JobResult2);

var _JobRevision2 = __webpack_require__(127);

var _JobRevision3 = _interopRequireDefault(_JobRevision2);

var _JobShare2 = __webpack_require__(51);

var _JobShare3 = _interopRequireDefault(_JobShare2);

var _JobType2 = __webpack_require__(64);

var _JobType3 = _interopRequireDefault(_JobType2);

var _Language2 = __webpack_require__(93);

var _Language3 = _interopRequireDefault(_Language2);

var _Layer2 = __webpack_require__(52);

var _Layer3 = _interopRequireDefault(_Layer2);

var _Mapstyle2 = __webpack_require__(88);

var _Mapstyle3 = _interopRequireDefault(_Mapstyle2);

var _MapstyleSet2 = __webpack_require__(66);

var _MapstyleSet3 = _interopRequireDefault(_MapstyleSet2);

var _Notification2 = __webpack_require__(94);

var _Notification3 = _interopRequireDefault(_Notification2);

var _Organisation2 = __webpack_require__(50);

var _Organisation3 = _interopRequireDefault(_Organisation2);

var _Permission2 = __webpack_require__(95);

var _Permission3 = _interopRequireDefault(_Permission2);

var _PlaceName2 = __webpack_require__(131);

var _PlaceName3 = _interopRequireDefault(_PlaceName2);

var _Svg2 = __webpack_require__(89);

var _Svg3 = _interopRequireDefault(_Svg2);

var _SvgSet2 = __webpack_require__(67);

var _SvgSet3 = _interopRequireDefault(_SvgSet2);

var _SvgSetType2 = __webpack_require__(132);

var _SvgSetType3 = _interopRequireDefault(_SvgSetType2);

var _User2 = __webpack_require__(90);

var _User3 = _interopRequireDefault(_User2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Choropleth = _Choropleth3.default;
exports.Color = _Color3.default;
exports.Contract = _Contract3.default;
exports.Dimension = _Dimension3.default;
exports.DimensionSet = _DimensionSet3.default;
exports.Faq = _Faq3.default;
exports.Feature = _Feature3.default;
exports.Font = _Font3.default;
exports.FontFamily = _FontFamily3.default;
exports.Highlight = _Highlight3.default;
exports.InsetMap = _InsetMap3.default;
exports.Job = _Job3.default;
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
exports.Svg = _Svg3.default;
exports.SvgSet = _SvgSet3.default;
exports.SvgSetType = _SvgSetType3.default;
exports.User = _User3.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.js.map
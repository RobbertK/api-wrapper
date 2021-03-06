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


import {camel as camelCase, pascal as pascalCase, snake as snakeCase} from 'case';
import {EventEmitter} from 'events';
import {DeletedState} from './enums';
import {hashObject} from './utils/hash';
import {getTypeName} from './utils/reflection';
import {encodeQueryString} from './utils/requests';

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
export default class RequestParameters extends EventEmitter {
  /**
   * RequestParameters constructor
   * @param {Object} object - properties
   */
  constructor(object = {}) {
    super();

    // Apply defaults
    RequestParameters.keys().forEach(x => this._resolve(x));

    // Apply properties
    this.apply(object);
  }

  // region instance
  // region instance getters
  /**
   * Get page number
   * @returns {Number} - Page number
   * @throws TypeError
   */
  get page() {
    return this._resolve('page');
  }

  /**
   * Get rows per page
   * @returns {Number} - Per page
   * @throws TypeError
   */
  get perPage() {
    return this._resolve('perPage');
  }

  /**
   * Get pagination offset
   * @returns {Number} - Offset
   * @throws TypeError
   */
  get offset() {
    return this._resolve('offset');
  }

  /**
   * Search query
   * @returns {Object<String, String|Array<String>>} - Query
   * @throws TypeError
   */
  get search() {
    return this._resolve('search');
  }

  /**
   * Get sort options
   * @returns {Array<String>} - Per page
   * @throws TypeError
   */
  get sort() {
    return this._resolve('sort');
  }

  /**
   * If deleted items should be shown
   * @returns {String} - Deleted items filter state
   * @see {@link DeletedState}
   */
  get deleted() {
    return this._resolve('deleted');
  }

  /**
   * Extra parameters
   * @returns {Object} - Extra parameters
   */
  get extra() {
    return this._resolve('extra');
  }

  // endregion instance getters

  // region instance setters
  /**
   * Page number
   * @param {Number} value - Page number
   */
  set page(value) {
    this._update('page', value);
  }

  /**
   * Rows per page
   * @param {Number} value - Per page
   */
  set perPage(value) {
    this._update('perPage', value);
  }

  /**
   * Pagination offset
   * @param {Number} value - Offset
   */
  set offset(value) {
    this._update('offset', value);
  }

  /**
   * Search query
   * @param {Object<String, String|Array<String>>} value - Search query
   */
  set search(value) {
    this._update('search', value);
  }

  /**
   * Sort query
   * @param {Array<String>} value - Sort query
   */
  set sort(value) {
    this._update('sort', value);
  }

  /**
   * Deleted items filter state
   * @param {String} value - Deleted items filter state
   * @see {@link DeletedState}
   */
  set deleted(value) {
    this._update('deleted', value);
  }

  /**
   * Extra request parameters
   * @param {Object} value - Extra request parameters
   */
  set extra(value) {
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
  static get page() {
    return RequestParameters._page || 1;
  }

  /**
   * Default per page
   * @returns {Number} - Per page
   */
  static get perPage() {
    return RequestParameters._perPage || Number(process.env.PER_PAGE) || 12;
  }

  /**
   * Default pagination offset
   * @returns {Number} - Offset
   */
  static get offset() {
    return RequestParameters._offset || 0;
  }

  /**
   * Gets the maximum allowed value for perPage
   * Some users will have a special permission that allows them to fetch more than 50 resources at once
   * @returns {Number} - Maximum amount of resources per page
   */
  static get maxPerPage() {
    return RequestParameters._maxPerPage || 50;
  }

  /**
   * Default search query
   * @returns {Object<String, String|Array<String>>} - Search query
   */
  static get search() {
    return RequestParameters._search || {};
  }

  /**
   * Default sort query
   * @returns {Array<String>} - Sort query
   */
  static get sort() {
    return RequestParameters._sort || [];
  }

  /**
   * Default deleted items filter state
   * @returns {String} -  Deleted items filter state
   */
  static get deleted() {
    return RequestParameters._deleted || DeletedState.NONE;
  }

  /**
   * Default extra request parameters
   * @returns {Object} - Extra request parameters
   */
  static get extra() {
    return RequestParameters._extra || {};
  }

  // endregion getters

  // region setters
  /**
   * Default page number
   * @param {Number} value - Page number
   */
  static set page(value) {
    RequestParameters._page = RequestParameters._validatePage(value);
  }

  /**
   * Default per page
   * @param {Number} value - Per page
   */
  static set perPage(value) {
    RequestParameters._perPage = RequestParameters._validatePerPage(value);
  }

  /**
   * Default pagination offset
   * @param {Number} value - Offset
   */
  static set offset(value) {
    RequestParameters._offset = RequestParameters._validateOffset(value);
  }

  /**
   * Sets the maximum allowed value for perPage
   * Some users will have a special permission that allows them to fetch more than 50 resources at once
   * @param {Number} value - Maximum amount of resources per page
   */
  static set maxPerPage(value) {
    RequestParameters._maxPerPage = RequestParameters._validateMaxPerPage(value);
  }

  /**
   * Default search query
   * @param {Object<String, String|Array<String>>} value - Search query
   */
  static set search(value) {
    RequestParameters._search = RequestParameters._validateSearch(value);
  }

  /**
   * Default sort query
   * @param {Array<String>} value - Sort query
   */
  static set sort(value) {
    RequestParameters._sort = RequestParameters._validateSort(value);
  }

  /**
   * Default deleted items filter state
   * @param {String} value -  Deleted items filter state
   */
  static set deleted(value) {
    RequestParameters._deleted = RequestParameters._validateDeleted(value);
  }

  /**
   * Default extra request parameters
   * @param {Object} value - Extra request parameters
   */
  static set extra(value) {
    RequestParameters._extra = RequestParameters._validateExtra(value);
  }

  // endregion setters
  // endregion static

  // region validators
  /**
   * Validators should work the same as laravel's ::validate method. This means
   * this means that they will throw a TypeError or return a normalized result.
   */

  static _validatePage(value) {
    if (typeof value !== 'number') {
      throw new TypeError(`Expected page to be of type 'number' instead got '${typeof value}'`);
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

  static _validatePerPage(value) {
    if (typeof value !== 'number') {
      throw new TypeError(`Expected per page to be of type 'Number' instead got '${getTypeName(value)}'`);
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

  static _validateOffset(value) {
    if (typeof value !== 'number') {
      throw new TypeError(`Expected offset to be of type 'Number' instead got '${getTypeName(value)}'`);
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

  static _validateMaxPerPage(value) {
    if (typeof value !== 'number') {
      throw new TypeError(`Expected page to be of type 'Number' instead got '${getTypeName(value)}'`);
    }

    if (value < 1) {
      throw new TypeError('Value must be greater or equal to 1');
    }

    return value;
  }

  static _validateSearch(value) {
    if (typeof value !== 'object' || Array.isArray(value)) {
      throw new TypeError(`Expected value to be of type "Object" got "${getTypeName(value)}"`);
    }

    // Normalization macro
    const normalize = x => typeof x === 'number' ? x.toString() : x;

    for (let key of Object.keys(value)) {
      key = normalize(key);
      value[key] = normalize(value[key]);

      if (typeof key !== 'string') {
        throw new TypeError(`Expected key to be of type "String" got "${getTypeName(key)}"`);
      }

      if (Array.isArray(value[key])) {
        if (value[key].length > 0) {
          for (const query of value[key]) {
            if (!['string', 'number', 'boolean'].includes(typeof query) && query !== null) {
              throw new TypeError(`Expected query for "${key}" to be of type "String", "Boolean", "Number" or "null" got "${getTypeName(query)}"`);
            }
          }
        } else {
          // Drop empty nodes
          delete value[key];
        }
      } else if (value[key] === null) {
        delete value[key];
      } else if (!['string', 'number', 'boolean'].includes(typeof value[key]) && value[key] !== null) {
        throw new TypeError(`Expected query value to be of type "String", "Boolean", "Number", "Array" or "null" got "${getTypeName(value[key])}"`);
      }
    }

    return value;
  }

  static _validateSort(value) {
    if (typeof value === 'string') {
      return this._validateSort(value.split(','));
    }

    if (!(value instanceof Array)) {
      throw new TypeError(`Expected sort value to be of type "Array" got "${getTypeName(value)}"`);
    }

    // Array keys type checking
    value
      .filter(x => typeof x !== 'string')
      .forEach(x => {
        throw new TypeError(`Expected sort array values to be of type "String" got "${getTypeName(x)}"`);
      });

    // Don't do regex matching because it's something
    // we can just let the server do for us.

    return value;
  }

  static _validateDeleted(value) {
    if (typeof value !== 'string') {
      throw new TypeError(`Expected deleted to be of type "string" got "${getTypeName(value)}". See: DeletedState`);
    }

    value = value.toLowerCase();

    const possible = DeletedState.values();

    if (!possible.includes(value)) {
      throw new TypeError(`Expected deleted to be one of ${possible.join(', ')}, got ${value}`);
    }

    return value;
  }

  static _validateExtra(value) {
    if (typeof value !== 'object') {
      throw new TypeError(`Expected extra to be of type 'object', got '${getTypeName(value)}'`);
    }

    return value;
  }

  // endregion validators

  _resolve(name) {
    const _name = '_' + name;

    if (!this[_name]) {
      // Confuse esdoc
      (this || {})[_name] = RequestParameters[name];
    }

    return this[_name];
  }

  _update(name, value, preventEvent = false) {
    const _name = '_' + name;

    value = RequestParameters['_validate' + pascalCase(name)](value);
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
      this.emit('change', [{name, value}]);
      this.emit('change:' + name, value);
    }

    return value;
  }

  // region utils
  /**
   * Urlencode parameters
   * @returns {string} - HTTP query
   */
  encode() {
    return encodeQueryString(this.toParameterObject());
  }

  /**
   * Convert to object
   * @returns {Object} - Object
   */
  toObject() {
    return RequestParameters
      .keys()
      .reduce((obj, key) => {
        obj[snakeCase(key)] = this._resolve(key);
        return obj;
      }, {});
  }

  /**
   * Convert to object
   * @returns {Object} - Object
   */
  toParameterObject() {
    const data = {};

    RequestParameters
      .keys()
      .forEach(key => {
        // Skip extra key
        if (key === 'extra') {
          return;
        }

        data[snakeCase(key)] = this._resolve(key);
      });

    // Fix column names for sort
    data.sort = data.sort.map(x =>
      snakeCase(x).replace(/^_/, '-'),
    ).join(',');

    // Fix column names for search
    for (const key of Object.keys(data.search)) {
      const snakeKey = key.split(',').map(snakeCase).join(',');

      if (key !== snakeKey) {
        data.search[snakeKey] = data.search[key];
        delete data.search[key];
      }
    }

    // Cast search values
    for (const key of Object.keys(data.search)) {
      if (typeof data.search[key] === 'boolean') {
        data.search[key] = Number(data.search[key]);
      }

      if (data.search[key] === null) {
        data.search[key] = '';
      }
    }


    // Overwrite using extra properties
    const extra = this._resolve('extra');

    for (const key of Object.keys(extra)) {
      data[key] = extra[key];
    }

    return data;
  }

  /**
   * Copy object
   * @returns {RequestParameters} - Copy
   */
  copy() {
    return new RequestParameters(this.toObject());
  }

  /**
   * Different parameters
   * @returns {Array<String>} - keys
   */
  static keys() {
    // enumeration is disabled for properties
    return [
      'page',
      'perPage',
      'search',
      'sort',
      'deleted',
      'extra',
    ];
  }

  /**
   * Generates a cache token
   * @returns {string} - Cache token
   */
  token() {
    const data = this.toObject();

    delete data['page'];
    delete data['per_page'];

    return hashObject(data);
  }

  /**
   * Resets all parameters back to default
   * @returns {void}
   */
  static resetDefaults() {
    for (const key of RequestParameters.keys()) {
      delete RequestParameters['_' + key];
    }
  }

  /**
   * Apply parameters from object
   * @param {object|RequestParameters} params - parameters
   * @returns {Object[]} - Array containing the updated values
   * @todo update JSDoc
   */
  apply(params) {
    if (params instanceof RequestParameters) {
      params = params.toObject();
    }

    const out = [];

    for (const key of Object.keys(params)) {
      const Key = camelCase(key);

      if (key[0] === '_' || !RequestParameters.keys().includes(Key)) {
        continue;
      }

      out.push({
        name: Key,
        value: this._update(Key, params[key], true),
      });
    }

    this.emit('change', out);

    for (const {name, value} of out) {
      this.emit('change:' + name, value);
    }

    return out;
  }

  // endregion utils
}

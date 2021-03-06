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

import {AbstractClassError} from '../../errors/AbstractError';
import ResourceBase from './ResourceBase';

/**
 * Base of all resource items that support Crud operations
 * @abstract
 */
export default class CrudBase extends ResourceBase {
  /**
   * @param {Maps4News} api - Api instance
   * @param {Object<String, *>} data - Item data
   */
  constructor(api, data = {}) {
    super(api, data);

    if (this.constructor === CrudBase) {
      throw new AbstractClassError();
    }
  }

  /**
   * Build data for create operation
   * @returns {Object<String, *>} - Create data
   * @protected
   */
  _buildCreateData() {
    this._updateProperties();

    const out = {};
    const keys = [].concat(
      Object.keys(this._properties),
      Object.keys(this._baseProperties),
    ).filter((item, pos, self) => self.indexOf(item) === pos);

    for (const key of keys) {
      out[key] = this._properties[key] || this._baseProperties[key];
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
  save() {
    return !this.id ? this._create() : this._update();
  }

  /**
   * Store new item
   * @returns {Promise} - Resolves with {@link CrudBase} instance and rejects with {@link ApiError}
   * @private
   */
  _create() {
    return this.api
      .request(this.baseUrl, 'POST', this._buildCreateData())
      .then(data => {
        this._properties = {};
        this._baseProperties = data;

        this._updateProperties();
        return this;
      });
  }

  /**
   * Update existing item
   * @returns {Promise} - Resolves with {@link CrudBase} instance and rejects with {@link ApiError}
   * @private
   */
  _update() {
    this._updateProperties();

    // We'll just fake it, no need to bother the server
    // with an empty request.
    if (Object.keys(this._properties).length === 0) {
      return new Promise(resolve => resolve(this));
    }

    return this.api
      .request(this.url, 'PATCH', this._properties)
      .then(() => {
        if (this.api.defaults.autoUpdateSharedCache) {
          this.api.cache.update(this);
        }

        return this;
      });
  }

  /**
   * Delete item
   * @param {Boolean} [updateSelf=true] - Update current instance
   * @returns {Promise} - Resolves with an empty {@link Object} and rejects with {@link ApiError}
   */
  delete(updateSelf = true) {
    return this.api
      .request(this.url, 'DELETE')
      .then(data => {
        if (updateSelf) {
          this._baseProperties['deleted_at'] = new Date();
        }

        return data;
      });
  }

  /**
   * Restore item
   * @param {Boolean} [updateSelf=true] - Update current instance
   * @returns {Promise} - Resolves with {@link CrudBase} instance and rejects with {@link ApiError}
   */
  restore(updateSelf = true) {
    return this.api
      .request(this.url, 'PUT')
      .then(data => {
        const instance = new this.constructor(this.api, data);

        if (updateSelf) {
          this._properties = {};
          this._baseProperties = data;

          this._updateProperties();
        }

        return instance;
      });
  }
}

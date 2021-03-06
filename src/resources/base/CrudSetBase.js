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

import {AbstractError} from '../../errors/AbstractError';
import CrudBase from './CrudBase';
import {camel as camelCase} from 'case';

/**
 * Crud base for resource sets
 * @abstract
 */
export default class CrudSetBase extends CrudBase {

  /**
   * Get items associated with the set
   * @returns {SimpleResourceProxy} - A proxy for accessing the resource
   */
  get items() {
    const url = `${this.url}/items`;

    const data = {};

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
  get _Child() {
    throw new AbstractError();
  }

  /**
   * Get the foreign key name
   * @returns {string} - Foreign key name
   * @example
   * api.fontFamilies.select(1).constructor.foreignKeyName === 'fontFamilyId'
   */
  static get foreignKeyName() {
    if (!this._fk) {
      let key = this.name; // ex: FontFamily

      key = camelCase(key); // ex: fontFamily

      this._fk = `${key}Id`;
    }

    return this._fk;
  }
}

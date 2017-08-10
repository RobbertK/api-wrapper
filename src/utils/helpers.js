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

import CrudBase from '../crud/base/CrudBase';
import Maps4News from '../Maps4News';
import PaginatedResourceListing from '../PaginatedResourceListing';

/**
 * Get all the pages from a {@link PaginatedResourceListing} or a range
 * @param {Promise<PaginatedResourceListing>|PaginatedResourceListing} page - Promise that returns a {@link PaginatedResourceWrapper}
 * @param {?Number} [start=1] - Start page
 * @param {?Number} [stop] - Stop page
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
export function getPaginatedRange(page, start = 1, stop) {
  // Resolve promise if any
  if (page instanceof Promise) {
    return page.then(res => getPaginatedRange(res, start, stop));
  }

  const out = page.data;
  const promises = [];

  // Handle defaults
  start = start || page.page;
  stop = stop || page.pageCount;

  if (start === page.page) {
    start++;
  }

  return new Promise((resolve, reject) => {
    // Get all pages
    for (let i = start; i <= stop; i++) {
      promises.push(page.get(i));
    }

    // Resolve
    Promise.all(promises).then(rows => {
      resolve(out.concat(...rows.map(x => x.data)));
    }, reject);
  });
}

/**
 * Manually paginate a resource
 * @param {Maps4News} api - Api instance
 * @param {?String} url - Target url, if null it will guess
 * @param {Number} [page=1] - Page number
 * @param {Number} [perPage=api.defaults.perPage] - Amount of items per page
 * @param {ResourceBase} [Target=CrudBase] - Target class, should extend {@link ResourceBase}
 * @returns {Promise} - Resolves with {@link PaginatedResourceListing} instance and rejects with {@link ApiError}
 * @example
 * import { helpers } from "@mapcreator/maps4news";
 *
 * helpers.paginateResource(api, '/some/custom/endpoint')
 */
export function paginateResource(api, url, page = 1, perPage = api.defaults.perPage, Target = CrudBase) {
  if (!(api instanceof Maps4News)) {
    throw new TypeError('Api must be an instance of Maps4news');
  }

  if (!url) {
    const resource = (new Target(this.api)).resourceName.replace(/s+$/, '');

    url = `${this.url}/${resource}s`;
  }

  const resolver = new PaginatedResourceListing(this.api, url, Target);

  return resolver.getPage(page, perPage);
}
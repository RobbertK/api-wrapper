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

import PasswordFlow from '../../../src/oauth/PasswordFlow';
import {startWebserver, stopWebserver} from '../util';

let port = 0;
let host = 'http://localhost:' + port;

beforeAll(() => {
  port = startWebserver('tests/scripts');
  host = 'http://localhost:' + port;
});

test('PasswordFlow should auth', async () => {
  const flow = new PasswordFlow('1', 'secret_token', 'test@example.com', 'password');

  flow.path = '/oauth/passwordFlow.php';
  expect(flow.path).toEqual('/oauth/passwordFlow.php');

  flow.host = host;
  expect(flow.host).toEqual(host);

  const token = await flow.authenticate()

  expect(token.expired).toEqual(false);
});

test('PasswordFlow should catch errors', () => {
  const flow = new PasswordFlow('1', 'secret_token', 'test@example.com', 'password');

  flow.path = '/oauth/passwordFlow.php?error=mock';
  flow.host = host;

  expect.assertions(1);

  return flow
    .authenticate()
    .catch(e => expect(e._error).toEqual('mock_error'));
});

afterAll(() => {
  stopWebserver(port);
});

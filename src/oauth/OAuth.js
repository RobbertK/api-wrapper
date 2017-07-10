import {AbstractClassError, AbstractMethodError} from '../exceptions/AbstractError';
import OAuthToken from './OAuthToken';
import StateContainer from './StateContainer';
import {isNode} from '../utils/node';

/**
 * OAuth base class
 * @abstract
 */
export default class OAuth {
  /**
   * @param {String} clientId - OAuth client id
   * @param {Array<String>} scopes - A list of required scopes
   * @returns {void}
   */
  constructor(clientId, scopes = ['*']) {
    if (this.constructor === OAuth) {
      throw new AbstractClassError();
    }

    this.clientId = String(clientId);
    this.scopes = scopes;
    this.token = OAuthToken.recover();
    this.host = process.env.HOST;
    this.path = '/';
  }

  /**
   * If the current instance has a valid token
   * @returns {Boolean} - if a valid token is availble
   */
  get authenticated() {
    return this.token !== null && !this.token.expired;
  }

  /**
   * Authenticate
   * @returns {Promise} - Promise resolves with OAuthToken and rejects with OAuthError
   * @abstract
   */
  authenticate() {
    throw new AbstractMethodError();
  }

  /**
   * Forget the current session
   * @returns {void}
   */
  forget() {
    if (isNode()) {
      // eslint-disable-next-line no-eval
      eval('require("fs")').unlink(OAuthToken.nodeTokenFilename);
    } else {
      StateContainer.clean();
      localStorage.removeItem(OAuthToken.storageName);
    }

    this.token = null;
  }
}
